import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

const UserProfile = () => {
  const { user, signOut } = useAuth()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (user) {
      fetchProfile()
    }
  }, [user])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // No profile found, create one
          console.log('No profile found, creating one...')
          await createProfile()
        } else {
          console.error('Error fetching profile:', error)
        }
      } else {
        setProfile(data)
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const createProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: user.email,
          full_name: user.user_metadata?.full_name || null,
          phone: user.user_metadata?.phone || null,
          bio: user.user_metadata?.bio || null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) {
        console.error('Error creating profile:', error)
      } else {
        setProfile(data)
      }
    } catch (error) {
      console.error('Error creating profile:', error)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setIsDropdownOpen(false)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const getInitials = (name) => {
    if (!name) return user?.email?.charAt(0).toUpperCase() || 'U'
    return name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2)
  }

  const getDisplayName = () => {
    if (profile?.full_name) return profile.full_name
    if (user?.user_metadata?.full_name) return user.user_metadata.full_name
    return user?.email?.split('@')[0] || 'User'
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  if (loading) {
    return (
      <div className="user-profile-icon">
        <div className="profile-avatar loading">
          <div className="spinner-small"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="user-profile-container" ref={dropdownRef}>
      <div className="user-profile-icon" onClick={toggleDropdown}>
        <div className="profile-avatar">
          {profile?.avatar_url ? (
            <img 
              src={profile.avatar_url} 
              alt="Profile" 
              className="avatar-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div 
            className="avatar-initials"
            style={{ display: profile?.avatar_url ? 'none' : 'flex' }}
          >
            {getInitials(getDisplayName())}
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="profile-dropdown">
          <div className="dropdown-header">
            <div className="dropdown-avatar">
              {profile?.avatar_url ? (
                <img 
                  src={profile.avatar_url} 
                  alt="Profile" 
                  className="avatar-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              ) : null}
              <div 
                className="avatar-initials"
                style={{ display: profile?.avatar_url ? 'none' : 'flex' }}
              >
                {getInitials(getDisplayName())}
              </div>
            </div>
            <div className="dropdown-user-info">
              <div className="dropdown-name">{getDisplayName()}</div>
              <div className="dropdown-email">{user?.email}</div>
            </div>
          </div>

          <div className="dropdown-status">
            <span className="status-indicator"></span>
            <span className="status-text">Online</span>
          </div>

          <div className="dropdown-divider"></div>

          <div className="dropdown-actions">
            <button 
              onClick={handleSignOut} 
              className="dropdown-action"
            >
              <span className="action-icon">🚪</span>
              <span className="action-text">Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile