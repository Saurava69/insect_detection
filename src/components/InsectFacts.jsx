import { useState } from 'react'
import SEOHead from './SEOHead'

const InsectFacts = () => {
  const [selectedFact, setSelectedFact] = useState(null)

  const amazingFacts = [
    {
      id: 1,
      title: "Insects Rule the World",
      fact: "Insects make up about 80% of all animal species on Earth",
      details: "With over 1 million described species and an estimated 6-10 million total species, insects are by far the most diverse group of animals on our planet. They've been around for over 400 million years and have adapted to virtually every environment.",
      category: "diversity",
      icon: "🌍"
    },
    {
      id: 2,
      title: "Butterfly Migration Marvel",
      fact: "Monarch butterflies migrate up to 3,000 miles",
      details: "The monarch butterfly migration is one of nature's most incredible journeys. These delicate creatures travel from Canada to Mexico, with the journey taking multiple generations. Amazingly, the final generation knows exactly where to go despite never having been there before.",
      category: "behavior",
      icon: "🦋"
    },
    {
      id: 3,
      title: "Ant Supercolonies",
      fact: "Some ant colonies can span multiple continents",
      details: "Argentine ants have created supercolonies that stretch across thousands of miles. The largest known supercolony extends along the Mediterranean coast for over 3,700 miles, containing billions of ants that recognize each other as family.",
      category: "social",
      icon: "🐜"
    },
    {
      id: 4,
      title: "Beetle Strength Champions",
      fact: "Dung beetles can pull 1,141 times their own body weight",
      details: "The dung beetle is the world's strongest insect relative to its size. If humans had the same strength-to-weight ratio, we could pull six double-decker buses full of people. This incredible strength helps them move dung balls many times their size.",
      category: "strength",
      icon: "💪"
    },
    {
      id: 5,
      title: "Bee Communication Dance",
      fact: "Honeybees communicate through dance",
      details: "Honeybees perform a 'waggle dance' to tell other bees where to find flowers. The angle of the dance indicates direction relative to the sun, while the duration tells them how far to fly. This sophisticated communication system can direct bees to food sources miles away.",
      category: "communication",
      icon: "🐝"
    },
    {
      id: 6,
      title: "Dragonfly Vision",
      fact: "Dragonflies have nearly 360-degree vision",
      details: "Dragonflies have compound eyes with up to 30,000 individual lenses, giving them almost complete spherical vision. They can see in all directions simultaneously and detect movement up to 40 feet away, making them incredibly efficient hunters.",
      category: "senses",
      icon: "👁️"
    },
    {
      id: 7,
      title: "Cockroach Survivors",
      fact: "Cockroaches can live for a week without their heads",
      details: "Cockroaches don't breathe through their mouths like humans. Instead, they have small holes called spiracles throughout their body. They can survive without their head until they eventually die of thirst, as they can't drink water without a mouth.",
      category: "survival",
      icon: "🪳"
    },
    {
      id: 8,
      title: "Firefly Light Magic",
      fact: "Fireflies produce light with 96% efficiency",
      details: "Firefly bioluminescence is the most efficient light source known. While incandescent bulbs are only 10% efficient (90% energy becomes heat), fireflies convert 96% of their energy into light with almost no heat production. Scientists study this for developing better LED technology.",
      category: "physics",
      icon: "✨"
    },
    {
      id: 9,
      title: "Flea Jump Olympics",
      fact: "Fleas can jump 150 times their own height",
      details: "If humans could jump like fleas, we could leap over 30-story buildings. Fleas achieve this through a spring-like mechanism in their legs that stores and releases energy, launching them at accelerations of up to 140 times gravity.",
      category: "movement",
      icon: "🦘"
    },
    {
      id: 10,
      title: "Termite Architecture",
      fact: "Termite mounds can be 30 feet tall",
      details: "Some termite species build mounds that, relative to their size, are equivalent to humans building structures 2 miles high. These mounds have sophisticated ventilation systems that maintain constant temperature and humidity, inspiring modern green architecture.",
      category: "engineering",
      icon: "🏗️"
    }
  ]

  const ecologicalRoles = [
    {
      role: "Pollinators",
      description: "Essential for plant reproduction and food production",
      examples: ["Bees", "Butterflies", "Moths", "Beetles"],
      impact: "Pollinate 1/3 of all food crops, worth $235 billion annually worldwide",
      icon: "🌺"
    },
    {
      role: "Decomposers",
      description: "Break down organic matter and recycle nutrients",
      examples: ["Beetles", "Flies", "Ants", "Termites"],
      impact: "Process millions of tons of organic waste, enriching soil",
      icon: "🍂"
    },
    {
      role: "Pest Controllers",
      description: "Natural predators that control harmful insects",
      examples: ["Ladybugs", "Dragonflies", "Praying mantis", "Wasps"],
      impact: "Save billions in crop damage by controlling agricultural pests",
      icon: "🎯"
    },
    {
      role: "Food Web Foundation",
      description: "Primary food source for many animals",
      examples: ["All insect groups"],
      impact: "Support bird, fish, amphibian, and mammal populations",
      icon: "🕸️"
    },
    {
      role: "Soil Aerators",
      description: "Improve soil structure and water infiltration",
      examples: ["Ants", "Beetles", "Termites"],
      impact: "Enhance agricultural productivity and prevent erosion",
      icon: "🌱"
    }
  ]

  const conservationChallenges = [
    {
      challenge: "Habitat Loss",
      description: "Urbanization and agriculture reduce natural habitats",
      solution: "Create pollinator gardens and preserve wild spaces",
      urgency: "Critical"
    },
    {
      challenge: "Climate Change",
      description: "Shifting temperatures affect insect life cycles",
      solution: "Monitor populations and protect climate refugia",
      urgency: "High"
    },
    {
      challenge: "Pesticide Use",
      description: "Chemical pesticides harm beneficial insects",
      solution: "Promote integrated pest management and organic farming",
      urgency: "High"
    },
    {
      challenge: "Light Pollution",
      description: "Artificial lights disrupt nocturnal insects",
      solution: "Use insect-friendly lighting and reduce unnecessary illumination",
      urgency: "Moderate"
    }
  ]

  return (
    <>
      <SEOHead 
        title="Amazing Insect Facts & Ecological Importance - Learn About Insect Biology"
        description="Discover fascinating facts about insects, their incredible abilities, ecological roles, and conservation challenges. Learn why insects are essential for our planet's health."
        keywords="insect facts, insect biology, insect ecology, pollination, insect conservation, amazing insects, insect behavior, entomology facts"
      />
      
      <div className="insect-facts">
        <div className="facts-header">
          <h1>🤯 Amazing Insect Facts</h1>
          <p>Discover the incredible world of insects and their vital role in our ecosystem</p>
        </div>

        {/* Amazing Facts Grid */}
        <section className="amazing-facts">
          <h2>Mind-Blowing Insect Abilities</h2>
          <div className="facts-grid">
            {amazingFacts.map((fact) => (
              <div 
                key={fact.id} 
                className={`fact-card ${selectedFact === fact.id ? 'expanded' : ''}`}
                onClick={() => setSelectedFact(selectedFact === fact.id ? null : fact.id)}
              >
                <div className="fact-header">
                  <span className="fact-icon">{fact.icon}</span>
                  <h3>{fact.title}</h3>
                </div>
                <p className="fact-summary">{fact.fact}</p>
                {selectedFact === fact.id && (
                  <div className="fact-details">
                    <p>{fact.details}</p>
                    <span className="fact-category">{fact.category}</span>
                  </div>
                )}
                <div className="expand-indicator">
                  {selectedFact === fact.id ? '−' : '+'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ecological Roles */}
        <section className="ecological-roles">
          <h2>🌍 Insects in Our Ecosystem</h2>
          <p>Insects play crucial roles that keep our planet healthy and functioning:</p>
          
          <div className="roles-grid">
            {ecologicalRoles.map((role, index) => (
              <div key={index} className="role-card">
                <div className="role-header">
                  <span className="role-icon">{role.icon}</span>
                  <h3>{role.role}</h3>
                </div>
                <p className="role-description">{role.description}</p>
                
                <div className="role-examples">
                  <h4>Key Players:</h4>
                  <div className="examples-list">
                    {role.examples.map((example, idx) => (
                      <span key={idx} className="example-badge">{example}</span>
                    ))}
                  </div>
                </div>
                
                <div className="role-impact">
                  <h4>Impact:</h4>
                  <p>{role.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* By the Numbers */}
        <section className="by-numbers">
          <h2>📊 Insects by the Numbers</h2>
          <div className="numbers-grid">
            <div className="number-card">
              <div className="big-number">10 quintillion</div>
              <div className="number-label">Individual insects alive at any time</div>
            </div>
            <div className="number-card">
              <div className="big-number">1.4 billion</div>
              <div className="number-label">Insects for every human on Earth</div>
            </div>
            <div className="number-card">
              <div className="big-number">400 million</div>
              <div className="number-label">Years insects have existed</div>
            </div>
            <div className="number-card">
              <div className="big-number">80%</div>
              <div className="number-label">Of all animal species are insects</div>
            </div>
            <div className="number-card">
              <div className="big-number">2,000+</div>
              <div className="number-label">New insect species discovered yearly</div>
            </div>
            <div className="number-card">
              <div className="big-number">$57 billion</div>
              <div className="number-label">Annual value of insect pollination in the US</div>
            </div>
          </div>
        </section>

        {/* Conservation Section */}
        <section className="conservation">
          <h2>🛡️ Insect Conservation</h2>
          <p>Many insect species face threats, but we can help protect them:</p>
          
          <div className="conservation-grid">
            {conservationChallenges.map((item, index) => (
              <div key={index} className="conservation-card">
                <div className="challenge-header">
                  <h3>{item.challenge}</h3>
                  <span className={`urgency-badge ${item.urgency.toLowerCase()}`}>
                    {item.urgency} Priority
                  </span>
                </div>
                <p className="challenge-description">{item.description}</p>
                <div className="solution">
                  <h4>What You Can Do:</h4>
                  <p>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Help */}
        <section className="how-to-help">
          <h2>🌱 How You Can Help Insects</h2>
          <div className="help-actions">
            <div className="action-card">
              <h3>🌸 Plant Native Flowers</h3>
              <p>Create pollinator-friendly gardens with native plants that bloom throughout the growing season.</p>
            </div>
            <div className="action-card">
              <h3>🚫 Avoid Pesticides</h3>
              <p>Use natural pest control methods and avoid broad-spectrum pesticides that harm beneficial insects.</p>
            </div>
            <div className="action-card">
              <h3>🏠 Provide Habitat</h3>
              <p>Leave some wild areas in your yard, create insect hotels, and maintain diverse plant communities.</p>
            </div>
            <div className="action-card">
              <h3>💡 Reduce Light Pollution</h3>
              <p>Use warm-colored, shielded outdoor lighting and turn off unnecessary lights at night.</p>
            </div>
            <div className="action-card">
              <h3>📚 Learn and Share</h3>
              <p>Educate yourself and others about the importance of insects and support conservation efforts.</p>
            </div>
            <div className="action-card">
              <h3>🔬 Participate in Science</h3>
              <p>Join citizen science projects that monitor insect populations and contribute to research.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default InsectFacts