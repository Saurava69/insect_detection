import SEOHead from './SEOHead'

const About = () => {
  return (
    <>
      <SEOHead 
        title="About Us - Insect Identification App | AI-Powered Species Recognition"
        description="Learn about our mission to make insect identification accessible to everyone through AI technology. Discover how our app helps researchers, educators, and nature enthusiasts."
        keywords="about insect identification, AI species recognition, entomology app, nature education, insect research"
      />
      
      <div className="content-container">
        <div className="page-header">
          <h1>🌿 About Our Mission</h1>
          <p className="page-subtitle">Making insect identification accessible to everyone through cutting-edge AI technology</p>
        </div>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            The Insect Identification App was born from a passion for nature and technology. We recognized that while insects make up 80% of all animal species on Earth, identifying them has always been a challenge for researchers, educators, students, and nature enthusiasts alike.
          </p>
          <p>
            Our team of developers, entomologists, and AI specialists came together to create a solution that democratizes insect identification, making it as simple as taking a photo.
          </p>
        </section>

        <section className="about-section">
          <h2>🎯 Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🔬</div>
              <h3>Advance Scientific Research</h3>
              <p>Support researchers and citizen scientists in documenting biodiversity and tracking ecological changes.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">📚</div>
              <h3>Enhance Education</h3>
              <p>Provide educators and students with powerful tools to learn about insect diversity and ecology.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌍</div>
              <h3>Promote Conservation</h3>
              <p>Increase awareness about insect conservation and their crucial role in ecosystem health.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3>Build Community</h3>
              <p>Connect nature enthusiasts and create a global community of insect identification experts.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>🚀 Our Technology</h2>
          <p>
            Our app leverages state-of-the-art artificial intelligence and machine learning algorithms trained on millions of insect images. The AI model can identify thousands of species with remarkable accuracy, providing:
          </p>
          <ul className="feature-list">
            <li>Real-time species identification</li>
            <li>Confidence scores for each identification</li>
            <li>Detailed species information and descriptions</li>
            <li>Similar species comparisons</li>
            <li>Geographic distribution data</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>👥 Our Team</h2>
          <p>
            We're a diverse team of passionate individuals united by our love for nature and technology:
          </p>
          <div className="team-grid">
            <div className="team-member">
              <h4>🧬 Entomologists</h4>
              <p>Expert scientists who ensure our identifications are accurate and our content is scientifically sound.</p>
            </div>
            <div className="team-member">
              <h4>💻 Developers</h4>
              <p>Skilled engineers who build and maintain our user-friendly platform and robust infrastructure.</p>
            </div>
            <div className="team-member">
              <h4>🤖 AI Specialists</h4>
              <p>Machine learning experts who continuously improve our identification algorithms and accuracy.</p>
            </div>
            <div className="team-member">
              <h4>🎨 Designers</h4>
              <p>Creative professionals who ensure our app is beautiful, intuitive, and accessible to everyone.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>🌱 Our Impact</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Insects Identified</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Species in Database</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>🤝 Partnerships</h2>
          <p>
            We collaborate with leading institutions and organizations to advance insect research and conservation:
          </p>
          <ul className="partner-list">
            <li>Universities and research institutions worldwide</li>
            <li>Natural history museums and collections</li>
            <li>Conservation organizations and NGOs</li>
            <li>Citizen science platforms and projects</li>
            <li>Educational institutions and programs</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>📞 Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have questions, feedback, or partnership opportunities, don't hesitate to reach out:
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Website:</strong> <a href="https://syntaxengineer.com"  rel="noopener noreferrer">syntaxengineer.com</a>
            </div>
            <div className="contact-item">
              <strong>Developer:</strong> <a href="https://sauravkumar.link" rel="noopener noreferrer">Saurav Kumar</a>
            </div>
            <div className="contact-item">
              <strong>App URL:</strong> <a href="https://insect-detector.syntaxengineer.com">insect-detector.syntaxengineer.com</a>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>🔮 Future Vision</h2>
          <p>
            We're constantly working to improve and expand our platform. Our roadmap includes:
          </p>
          <ul className="roadmap-list">
            <li>Expanding to more geographic regions and species</li>
            <li>Adding behavioral and ecological information</li>
            <li>Developing mobile apps for iOS and Android</li>
            <li>Creating educational curricula and resources</li>
            <li>Building community features and forums</li>
            <li>Integrating with research databases and platforms</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default About