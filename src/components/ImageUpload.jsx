import { useState, useRef } from 'react'
import { validateImageFile } from '../utils/validation'

const ImageUpload = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false)
  const [preview, setPreview] = useState(null)
  const fileInputRef = useRef(null)

  const handleFiles = (files) => {
    const file = files[0]
    if (!file) return

    try {
      validateImageFile(file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target.result)
      }
      reader.readAsDataURL(file)

      // Upload file
      onImageUpload(file)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const onButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="upload-container">
      <div
        className={`upload-area ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        
        {preview ? (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="preview-image" />
            <p>Click to change image or drag a new one</p>
          </div>
        ) : (
          <div className="upload-content">
            <div className="upload-icon">📷</div>
            <h3>Upload Insect Image</h3>
            <p>Drag and drop an image here, or click to select</p>
            <p className="upload-hint">Supports: JPG, PNG, WebP (max 10MB)</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageUpload