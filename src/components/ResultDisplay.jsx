import { sanitizeHtml } from '../utils/security'

const ResultDisplay = ({ result, onReset }) => {
  if (!result?.result?.classification?.suggestions?.length) {
    return (
      <div className="result-container">
        <div className="no-results">
          <h2>No Results Found</h2>
          <p>Unable to identify the insect in the image. Please try with a clearer image.</p>
          <button onClick={onReset} className="btn-primary">
            Try Another Image
          </button>
        </div>
      </div>
    )
  }

  const suggestion = result.result.classification.suggestions[0]
  const confidence = Math.round(suggestion.probability * 100)

  return (
    <div className="result-container">
      <div className="result-header">
        <button onClick={onReset} className="btn-secondary">
          ← Upload New Image
        </button>
      </div>

      <div className="main-result">
        <div className="result-info">
          <h2 className="species-name">{suggestion.name}</h2>
          
          <div className="confidence-bar">
            <div className="confidence-label">
              Confidence: {confidence}%
            </div>
            <div className="confidence-progress">
              <div 
                className="confidence-fill"
                style={{ width: `${confidence}%` }}
              ></div>
            </div>
          </div>

          {suggestion.details?.common_names?.length > 0 && (
            <div className="detail-section">
              <h3>Common Names</h3>
              <p>{suggestion.details.common_names.join(', ')}</p>
            </div>
          )}

          {suggestion.details?.description?.value && (
            <div className="detail-section">
              <h3>Description</h3>
              <p dangerouslySetInnerHTML={{ 
                __html: sanitizeHtml(suggestion.details.description.value) 
              }}></p>
            </div>
          )}

          {suggestion.details?.url && (
            <div className="detail-section">
              <a 
                href={suggestion.details.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="learn-more-link"
              >
                Learn More →
              </a>
            </div>
          )}
        </div>

        {suggestion.details?.image?.value && (
          <div className="result-image">
            <img 
              src={suggestion.details.image.value} 
              alt={`${suggestion.name} reference`}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        )}
      </div>

      {suggestion.similar_images?.length > 0 && (
        <div className="similar-images">
          <h3>Similar Images</h3>
          <div className="similar-images-grid">
            {suggestion.similar_images.slice(0, 6).map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Similar insect ${index + 1}`}
                className="similar-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultDisplay