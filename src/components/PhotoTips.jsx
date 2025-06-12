import SEOHead from './SEOHead'

const PhotoTips = () => {
  const photographyTechniques = [
    {
      title: "Macro Photography Basics",
      description: "Get close-up shots that reveal intricate details",
      techniques: [
        {
          name: "Focus Stacking",
          description: "Take multiple photos at different focus points and combine them",
          benefit: "Achieves greater depth of field for sharp details throughout the insect"
        },
        {
          name: "Manual Focus",
          description: "Use manual focus for precise control over the focal point",
          benefit: "Prevents autofocus hunting and ensures sharp critical features"
        },
        {
          name: "Aperture Selection",
          description: "Use f/8 to f/11 for optimal sharpness in macro photography",
          benefit: "Balances depth of field with image sharpness"
        }
      ]
    },
    {
      title: "Lighting Techniques",
      description: "Master lighting for professional-quality insect photos",
      techniques: [
        {
          name: "Diffused Flash",
          description: "Use a diffuser or bounce flash to create soft, even lighting",
          benefit: "Eliminates harsh shadows and provides natural-looking illumination"
        },
        {
          name: "Golden Hour Shooting",
          description: "Photograph during the hour after sunrise or before sunset",
          benefit: "Provides warm, soft light that enhances colors and textures"
        },
        {
          name: "Backlighting",
          description: "Position the light source behind translucent wings or body parts",
          benefit: "Creates dramatic silhouettes and highlights wing patterns"
        }
      ]
    },
    {
      title: "Composition Strategies",
      description: "Create visually compelling insect photographs",
      techniques: [
        {
          name: "Rule of Thirds",
          description: "Place the insect along imaginary grid lines for dynamic composition",
          benefit: "Creates more interesting and balanced photographs"
        },
        {
          name: "Eye-Level Perspective",
          description: "Get down to the insect's level for intimate portraits",
          benefit: "Creates connection and shows the insect's world from their perspective"
        },
        {
          name: "Negative Space",
          description: "Use empty areas around the insect to create visual breathing room",
          benefit: "Draws attention to the subject and creates clean, professional images"
        }
      ]
    }
  ]

  const equipmentGuide = [
    {
      category: "Camera Settings",
      items: [
        { name: "Shutter Speed", recommendation: "1/250s or faster", reason: "Prevents motion blur from insect movement" },
        { name: "ISO", recommendation: "100-800", reason: "Maintains image quality while allowing adequate shutter speed" },
        { name: "Aperture", recommendation: "f/8-f/11", reason: "Optimal balance of sharpness and depth of field" },
        { name: "Focus Mode", recommendation: "Single-point AF or Manual", reason: "Precise control over focus placement" }
      ]
    },
    {
      category: "Essential Equipment",
      items: [
        { name: "Macro Lens", recommendation: "100mm or 180mm", reason: "Allows close focusing with comfortable working distance" },
        { name: "Tripod", recommendation: "Lightweight carbon fiber", reason: "Stability for sharp images and precise composition" },
        { name: "Flash/Diffuser", recommendation: "Ring flash or twin flash", reason: "Consistent lighting for macro photography" },
        { name: "Remote Shutter", recommendation: "Wireless or cable release", reason: "Eliminates camera shake during exposure" }
      ]
    },
    {
      category: "Field Accessories",
      items: [
        { name: "Reflector", recommendation: "Small collapsible reflector", reason: "Fill in shadows and balance lighting" },
        { name: "Spray Bottle", recommendation: "Fine mist sprayer", reason: "Create dew effects for artistic shots" },
        { name: "Kneepads", recommendation: "Comfortable padding", reason: "Allows comfortable ground-level shooting" },
        { name: "Field Guide", recommendation: "Regional insect identification book", reason: "Helps identify and understand subject behavior" }
      ]
    }
  ]

  const behaviorTips = [
    {
      behavior: "Early Morning Activity",
      description: "Many insects are less active and more approachable in cool morning temperatures",
      bestTime: "30 minutes after sunrise",
      targetInsects: ["Butterflies", "Dragonflies", "Bees", "Moths"],
      approach: "Move slowly and avoid sudden movements that might startle them"
    },
    {
      behavior: "Feeding Behavior",
      description: "Insects are often focused on feeding and less likely to flee",
      bestTime: "Mid-morning to early afternoon",
      targetInsects: ["Butterflies on flowers", "Bees collecting nectar", "Beetles on sap"],
      approach: "Approach from the side rather than directly from above"
    },
    {
      behavior: "Mating Displays",
      description: "During mating season, insects may be less aware of photographers",
      bestTime: "Species-specific timing",
      targetInsects: ["Dragonflies", "Damselflies", "Butterflies"],
      approach: "Maintain respectful distance to avoid disrupting natural behavior"
    },
    {
      behavior: "Thermoregulation",
      description: "Insects often bask in sunlight to warm their bodies",
      bestTime: "Early morning and late afternoon",
      targetInsects: ["Butterflies", "Grasshoppers", "Beetles"],
      approach: "Position yourself so the sun illuminates the insect from the side"
    }
  ]

  const commonMistakes = [
    {
      mistake: "Using Built-in Flash",
      problem: "Creates harsh shadows and washes out details",
      solution: "Use external flash with diffuser or natural lighting"
    },
    {
      mistake: "Shooting from Too Far Away",
      problem: "Insect becomes too small in the frame for identification",
      solution: "Fill at least 1/3 of the frame with the insect"
    },
    {
      mistake: "Ignoring the Background",
      problem: "Cluttered backgrounds distract from the subject",
      solution: "Choose clean, contrasting backgrounds or use shallow depth of field"
    },
    {
      mistake: "Chasing Active Insects",
      problem: "Results in stressed insects and poor photos",
      solution: "Wait patiently for insects to settle or find feeding/resting spots"
    },
    {
      mistake: "Wrong Focus Point",
      problem: "Important features like eyes or wings are out of focus",
      solution: "Always focus on the eyes or most distinctive features"
    }
  ]

  return (
    <>
      <SEOHead 
        title="Insect Photography Tips - Capture Perfect Photos for AI Identification"
        description="Master insect photography with professional tips, camera settings, and techniques. Learn how to capture high-quality images for accurate AI species identification."
        keywords="insect photography, macro photography, insect photos, photography tips, camera settings, insect identification photos, nature photography"
      />
      
      <div className="photo-tips">
        <div className="tips-header">
          <h1>📷 Professional Insect Photography Guide</h1>
          <p>Master the art of insect photography to capture stunning images and improve AI identification accuracy</p>
        </div>

        {/* Photography Techniques */}
        <section className="photography-techniques">
          <h2>🎯 Advanced Photography Techniques</h2>
          <div className="techniques-grid">
            {photographyTechniques.map((category, index) => (
              <div key={index} className="technique-category">
                <h3>{category.title}</h3>
                <p className="category-description">{category.description}</p>
                
                <div className="techniques-list">
                  {category.techniques.map((technique, idx) => (
                    <div key={idx} className="technique-item">
                      <h4>{technique.name}</h4>
                      <p className="technique-description">{technique.description}</p>
                      <div className="technique-benefit">
                        <strong>Benefit:</strong> {technique.benefit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment Guide */}
        <section className="equipment-guide">
          <h2>📱 Equipment & Settings Guide</h2>
          <div className="equipment-grid">
            {equipmentGuide.map((category, index) => (
              <div key={index} className="equipment-category">
                <h3>{category.category}</h3>
                <div className="equipment-list">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="equipment-item">
                      <div className="item-header">
                        <span className="item-name">{item.name}</span>
                        <span className="item-recommendation">{item.recommendation}</span>
                      </div>
                      <p className="item-reason">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Behavior Tips */}
        <section className="behavior-tips">
          <h2>🐛 Understanding Insect Behavior</h2>
          <p>Knowing when and how insects behave helps you capture better photos:</p>
          
          <div className="behavior-grid">
            {behaviorTips.map((tip, index) => (
              <div key={index} className="behavior-card">
                <h3>{tip.behavior}</h3>
                <p className="behavior-description">{tip.description}</p>
                
                <div className="behavior-details">
                  <div className="detail-item">
                    <strong>Best Time:</strong> {tip.bestTime}
                  </div>
                  <div className="detail-item">
                    <strong>Target Insects:</strong> {tip.targetInsects.join(', ')}
                  </div>
                  <div className="detail-item">
                    <strong>Approach:</strong> {tip.approach}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="common-mistakes">
          <h2>⚠️ Avoid These Common Mistakes</h2>
          <div className="mistakes-grid">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="mistake-card">
                <h3>{mistake.mistake}</h3>
                <div className="problem">
                  <strong>Problem:</strong> {mistake.problem}
                </div>
                <div className="solution">
                  <strong>Solution:</strong> {mistake.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="quick-reference">
          <h2>⚡ Quick Reference Checklist</h2>
          <div className="checklist-grid">
            <div className="checklist-card">
              <h3>Before You Shoot</h3>
              <ul className="checklist">
                <li>Check weather conditions</li>
                <li>Clean camera lens</li>
                <li>Set up equipment</li>
                <li>Scout locations</li>
                <li>Plan shooting time</li>
              </ul>
            </div>
            
            <div className="checklist-card">
              <h3>Camera Setup</h3>
              <ul className="checklist">
                <li>Manual or aperture priority mode</li>
                <li>Single-point autofocus</li>
                <li>Continuous shooting mode</li>
                <li>Image stabilization on</li>
                <li>RAW format for best quality</li>
              </ul>
            </div>
            
            <div className="checklist-card">
              <h3>In the Field</h3>
              <ul className="checklist">
                <li>Move slowly and quietly</li>
                <li>Focus on the eyes</li>
                <li>Take multiple shots</li>
                <li>Vary angles and compositions</li>
                <li>Respect the insect's space</li>
              </ul>
            </div>
            
            <div className="checklist-card">
              <h3>For AI Identification</h3>
              <ul className="checklist">
                <li>Fill frame with insect</li>
                <li>Ensure sharp focus</li>
                <li>Show key features clearly</li>
                <li>Use good lighting</li>
                <li>Avoid heavy processing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PhotoTips