import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('Error getting session:', error)
        }
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('Error getting session:', error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.id)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email, password, metadata = {}) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })

      if (error) {
        console.error('Signup error:', error)
        return { data, error }
      }

      // If signup was successful and user is confirmed, update their profile
      if (data.user && !data.user.email_confirmed_at) {
        console.log('User signed up successfully, waiting for email confirmation')
      } else if (data.user) {
        // User is immediately confirmed, update profile
        await updateUserProfile(data.user.id, metadata)
      }

      return { data, error }
    } catch (error) {
      console.error('Signup error:', error)
      return { data: null, error }
    }
  }

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Signin error:', error)
      }

      return { data, error }
    } catch (error) {
      console.error('Signin error:', error)
      return { data: null, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Signout error:', error)
      }
      return { error }
    } catch (error) {
      console.error('Signout error:', error)
      return { error }
    }
  }

  const updateUserProfile = async (userId, profileData) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          id: userId,
          full_name: profileData.full_name,
          phone: profileData.phone,
          bio: profileData.bio,
          updated_at: new Date().toISOString()
        })
        .select()

      if (error) {
        console.error('Error updating profile:', error)
      }

      return { data, error }
    } catch (error) {
      console.error('Error updating profile:', error)
      return { data: null, error }
    }
  }

  const updateProfile = async (updates) => {
    if (!user) return { error: 'No user logged in' }
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id)
        .select()
      
      return { data, error }
    } catch (error) {
      console.error('Error updating profile:', error)
      return { data: null, error }
    }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}