import { useState } from 'react'
import SEOHead from './SEOHead'

const InsectGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const insectCategories = [
    {
      id: 'beetles',
      name: 'Beetles (Coleoptera)',
      description: 'The largest order of insects with over 400,000 species',
      characteristics: ['Hard wing covers (elytra)', 'Complete metamorphosis', 'Chewing mouthparts'],
      examples: ['Ladybug', 'Scarab beetle', 'Weevil', 'Ground beetle'],
      habitat: 'Found in almost every environment on Earth',
      identification: 'Look for hardened forewings that meet in a straight line down the back'
    },
    {
      id: 'butterflies',
      name: 'Butterflies & Moths (Lepidoptera)',
      description: 'Insects with scale-covered wings and complete metamorphosis',
      characteristics: ['Scaled wings', 'Coiled proboscis', 'Complete metamorphosis', 'Club-shaped antennae (butterflies)'],
      examples: ['Monarch butterfly', 'Swallowtail', 'Luna moth', 'Cabbage white'],
      habitat: 'Gardens, forests, meadows, and various flowering plant areas',
      identification: 'Distinctive wing patterns, antennae shape, and flight patterns'
    },
    {
      id: 'flies',
      name: 'Flies (Diptera)',
      description: 'Two-winged insects with diverse ecological roles',
      characteristics: ['Only two functional wings', 'Large compound eyes', 'Short antennae'],
      examples: ['House fly', 'Fruit fly', 'Mosquito', 'Hover fly'],
      habitat: 'Ubiquitous - found in nearly all environments',
      identification: 'Single pair of wings and halteres (modified hindwings)'
    },
    {
      id: 'bees',
      name: 'Bees, Wasps & Ants (Hymenoptera)',
      description: 'Social and solitary insects crucial for pollination',
      characteristics: ['Narrow waist', 'Four membranous wings', 'Complete metamorphosis'],
      examples: ['Honey bee', 'Bumblebee', 'Paper wasp', 'Carpenter ant'],
      habitat: 'Flowers, nests, soil, and various plant environments',
      identification: 'Constricted waist, wing venation, and behavioral patterns'
    },
    {
      id: 'bugs',
      name: 'True Bugs (Hemiptera)',
      description: 'Insects with piercing-sucking mouthparts',
      characteristics: ['Piercing-sucking mouthparts', 'Incomplete metamorphosis', 'Triangular scutellum'],
      examples: ['Stink bug', 'Bed bug', 'Water strider', 'Aphid'],
      habitat: 'Plants, water surfaces, and various host organisms',
      identification: 'Beak-like mouthparts and distinctive wing structure'
    },
    {
      id: 'grasshoppers',
      name: 'Grasshoppers & Crickets (Orthoptera)',
      description: 'Jumping insects known for their sounds',
      characteristics: ['Powerful hind legs', 'Chewing mouthparts', 'Sound production organs'],
      examples: ['Field cricket', 'Grasshopper', 'Katydid', 'Camel cricket'],
      habitat: 'Grasslands, forests, and areas with vegetation',
      identification: 'Large hind legs for jumping and distinctive sound production'
    }
  ]

  const detectionTips = [
    {
      title: 'Lighting Conditions',
      description: 'Use natural daylight or bright, even lighting for best results',
      icon: '💡',
      tips: [
        'Avoid harsh shadows on the insect',
        'Use diffused light when possible',
        'Avoid flash photography which can wash out details',
        'Golden hour lighting provides excellent natural illumination'
      ]
    },
    {
      title: 'Camera Positioning',
      description: 'Get the right angle and distance for optimal identification',
      icon: '📸',
      tips: [
        'Fill the frame with the insect',
        'Capture from multiple angles if possible',
        'Focus on distinctive features like wings, antennae, and body segments',
        'Maintain steady hands or use a tripod for sharp images'
      ]
    },
    {
      title: 'Background & Composition',
      description: 'Choose backgrounds that make the insect stand out',
      icon: '🎨',
      tips: [
        'Use contrasting backgrounds (light insect on dark background)',
        'Avoid cluttered or busy backgrounds',
        'Natural settings often work best',
        'Ensure the entire insect is visible and in focus'
      ]
    },
    {
      title: 'Insect Behavior',
      description: 'Understanding insect behavior improves photo opportunities',
      icon: '🐛',
      tips: [
        'Early morning when insects are less active',
        'Look for insects on flowers during feeding',
        'Check under leaves and in crevices',
        'Be patient and move slowly to avoid startling them'
      ]
    }
  ]

  const identificationFeatures = [
    {
      feature: 'Body Segments',
      description: 'All insects have three main body parts: head, thorax, and abdomen',
      importance: 'Essential for distinguishing insects from other arthropods',
      examples: ['Head contains eyes, antennae, and mouthparts', 'Thorax bears legs and wings', 'Abdomen contains digestive and reproductive organs']
    },
    {
      feature: 'Antennae',
      description: 'Sensory organs that vary greatly between insect groups',
      importance: 'Key identifying characteristic for different insect orders',
      examples: ['Club-shaped (butterflies)', 'Feathery (moths)', 'Elbowed (ants)', 'Thread-like (beetles)']
    },
    {
      feature: 'Wings',
      description: 'Number, shape, and structure of wings are diagnostic',
      importance: 'Primary feature for insect classification',
      examples: ['Two wings (flies)', 'Four wings (bees, butterflies)', 'Hard forewings (beetles)', 'No wings (some ants, fleas)']
    },
    {
      feature: 'Mouthparts',
      description: 'Feeding structures adapted to different food sources',
      importance: 'Indicates feeding behavior and ecological role',
      examples: ['Chewing (beetles, grasshoppers)', 'Piercing-sucking (mosquitoes, aphids)', 'Lapping (flies)', 'Siphoning (butterflies)']
    },
    {
      feature: 'Legs',
      description: 'All insects have six legs, but they vary in structure',
      importance: 'Reveals locomotion and lifestyle adaptations',
      examples: ['Jumping legs (grasshoppers)', 'Swimming legs (water beetles)', 'Grasping legs (praying mantis)', 'Pollen baskets (bees)']
    }
  ]

  const filteredCategories = insectCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.examples.some(example => example.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <SEOHead 
        title="Complete Insect Identification Guide - Learn About Insect Species"
        description="Comprehensive guide to insect identification, detection tips, and species information. Learn about beetles, butterflies, flies, bees, and more with our detailed insect guide."
        keywords="insect guide, insect identification guide, beetle identification, butterfly identification, insect species, entomology guide, insect detection tips"
      />
      
      <div className="insect-guide">
        <div className="guide-header">
          <h1>🔍 Complete Insect Identification Guide</h1>
          <p>Learn about different insect groups, identification features, and photography tips for better AI detection results.</p>
        </div>

        {/* Search and Filter */}
        <div className="guide-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search insects, characteristics, or examples..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="category-filter">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              <option value="all">All Categories</option>
              {insectCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Detection Tips Section */}
        <section className="detection-tips">
          <h2>📷 Photography Tips for Better Detection</h2>
          <p>Follow these guidelines to capture high-quality images that our AI can analyze effectively:</p>
          
          <div className="tips-grid">
            {detectionTips.map((tip, index) => (
              <div key={index} className="tip-card">
                <div className="tip-header">
                  <span className="tip-icon">{tip.icon}</span>
                  <h3>{tip.title}</h3>
                </div>
                <p className="tip-description">{tip.description}</p>
                <ul className="tip-list">
                  {tip.tips.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Identification Features */}
        <section className="identification-features">
          <h2>🔬 Key Identification Features</h2>
          <p>Understanding these anatomical features will help you better identify insects:</p>
          
          <div className="features-grid">
            {identificationFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.feature}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-importance">
                  <strong>Why it matters:</strong> {feature.importance}
                </div>
                <div className="feature-examples">
                  <strong>Examples:</strong>
                  <ul>
                    {feature.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insect Categories */}
        <section className="insect-categories">
          <h2>🐛 Major Insect Groups</h2>
          <p>Explore the main orders of insects and their distinguishing characteristics:</p>
          
          <div className="categories-grid">
            {filteredCategories.map((category, index) => (
              <div key={index} className="category-card">
                <h3>{category.name}</h3>
                <p className="category-description">{category.description}</p>
                
                <div className="category-section">
                  <h4>Key Characteristics:</h4>
                  <ul>
                    {category.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>

                <div className="category-section">
                  <h4>Common Examples:</h4>
                  <div className="examples-tags">
                    {category.examples.map((example, idx) => (
                      <span key={idx} className="example-tag">{example}</span>
                    ))}
                  </div>
                </div>

                <div className="category-section">
                  <h4>Habitat:</h4>
                  <p>{category.habitat}</p>
                </div>

                <div className="category-section">
                  <h4>Identification Tips:</h4>
                  <p>{category.identification}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="common-mistakes">
          <h2>⚠️ Common Identification Mistakes</h2>
          <div className="mistakes-grid">
            <div className="mistake-card">
              <h3>Spiders vs. Insects</h3>
              <p><strong>Mistake:</strong> Confusing spiders with insects</p>
              <p><strong>Solution:</strong> Count the legs - insects have 6 legs, spiders have 8</p>
            </div>
            <div className="mistake-card">
              <h3>Flies vs. Bees</h3>
              <p><strong>Mistake:</strong> Mistaking hover flies for bees</p>
              <p><strong>Solution:</strong> Look for the waist - bees have a narrow waist, flies don't</p>
            </div>
            <div className="mistake-card">
              <h3>Moths vs. Butterflies</h3>
              <p><strong>Mistake:</strong> Confusing moths with butterflies</p>
              <p><strong>Solution:</strong> Check antennae - butterflies have club-shaped, moths are feathery</p>
            </div>
            <div className="mistake-card">
              <h3>Wasps vs. Bees</h3>
              <p><strong>Mistake:</strong> Mixing up wasps and bees</p>
              <p><strong>Solution:</strong> Bees are fuzzy and collect pollen, wasps are smooth and hunt</p>
            </div>
          </div>
        </section>

        {/* Seasonal Guide */}
        <section className="seasonal-guide">
          <h2>📅 Seasonal Insect Activity</h2>
          <div className="seasons-grid">
            <div className="season-card">
              <h3>🌸 Spring</h3>
              <p>Many insects emerge from winter dormancy</p>
              <ul>
                <li>Early butterflies and moths</li>
                <li>Emerging bees and wasps</li>
                <li>Active ground beetles</li>
                <li>Aphids on new plant growth</li>
              </ul>
            </div>
            <div className="season-card">
              <h3>☀️ Summer</h3>
              <p>Peak insect activity and diversity</p>
              <ul>
                <li>Maximum butterfly diversity</li>
                <li>Active flying insects</li>
                <li>Pollinating bees and wasps</li>
                <li>Grasshoppers and crickets</li>
              </ul>
            </div>
            <div className="season-card">
              <h3>🍂 Fall</h3>
              <p>Migration and preparation for winter</p>
              <ul>
                <li>Migrating butterflies</li>
                <li>Late-season moths</li>
                <li>Overwintering preparations</li>
                <li>Reduced overall activity</li>
              </ul>
            </div>
            <div className="season-card">
              <h3>❄️ Winter</h3>
              <p>Limited activity in temperate regions</p>
              <ul>
                <li>Overwintering adults</li>
                <li>Indoor pest species</li>
                <li>Dormant stages</li>
                <li>Reduced diversity</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default InsectGuide