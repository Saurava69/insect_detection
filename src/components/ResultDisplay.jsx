import { useEffect } from 'react'
import { sanitizeHtml } from '../utils/security'
import SEOHead from './SEOHead'

const ResultDisplay = ({ result, onReset }) => {
  const suggestion = result?.result?.classification?.suggestions?.[0]
  const confidence = suggestion ? Math.round(suggestion.probability * 100) : 0
  const speciesName = suggestion?.name || 'Unknown Species'

  // Update SEO for result page
  useEffect(() => {
    if (suggestion) {
      // Track result view
      if (typeof gtag !== 'undefined') {
        gtag('event', 'result_viewed', {
          event_category: 'engagement',
          event_label: speciesName,
          value: confidence
        })
      }
    }
  }, [suggestion, speciesName, confidence])

  if (!result?.result?.classification?.suggestions?.length) {
    return (
      <>
        <SEOHead 
          title="No Results Found - Insect Identification App"
          description="Unable to identify the insect in the uploaded image. Try uploading a clearer image for better AI-powered species identification."
        />
        <div className="result-container">
          <div className="no-results">
            <h2>No Results Found</h2>
            <p>Unable to identify the insect in the image. Please try with a clearer image.</p>
            <button onClick={onReset} className="btn-primary">
              Try Another Image
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEOHead 
        title={`${speciesName} - Insect Identification Result | ${confidence}% Confidence`}
        description={`Identified as ${speciesName} with ${confidence}% confidence. ${suggestion?.details?.description?.value ? suggestion.details.description.value.substring(0, 150) + '...' : 'Learn more about this insect species.'}`}
        keywords={`${speciesName}, insect identification, ${suggestion?.details?.common_names?.join(', ') || ''}, entomology, species information`}
      />
      
      <div className="result-container">
        <div className="result-header">
          <button onClick={onReset} className="btn-secondary">
            ← Upload New Image
          </button>
        </div>

        <div className="main-result">
          <div className="result-info">
            <h1 className="species-name">{speciesName}</h1>
            
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
                <h2>Common Names</h2>
                <p>{suggestion.details.common_names.join(', ')}</p>
              </div>
            )}

            {suggestion.details?.description?.value && (
              <div className="detail-section">
                <h2>Description</h2>
                <div dangerouslySetInnerHTML={{ 
                  __html: sanitizeHtml(suggestion.details.description.value) 
                }}></div>
              </div>
            )}

            {suggestion.details?.url && (
              <div className="detail-section">
                <a 
                  href={suggestion.details.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="learn-more-link"
                  onClick={() => {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'external_link_click', {
                        event_category: 'engagement',
                        event_label: 'learn_more',
                        value: speciesName
                      })
                    }
                  }}
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
                alt={`${speciesName} reference image`}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          )}
        </div>

        {suggestion.similar_images?.length > 0 && (
          <div className="similar-images">
            <h2>Similar Images</h2>
            <div className="similar-images-grid">
              {suggestion.similar_images.slice(0, 6).map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Similar ${speciesName} image ${index + 1}`}
                  className="similar-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Structured data for the identified species */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Thing",
            "name": speciesName,
            "description": suggestion?.details?.description?.value || `Information about ${speciesName}`,
            "image": suggestion?.details?.image?.value,
            "url": suggestion?.details?.url,
            "additionalType": "http://schema.org/Animal",
            "category": "Insect",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Confidence",
              "value": `${confidence}%`
            }
          })}
        </script>
      </div>
    </>
  )
}

export default ResultDisplay