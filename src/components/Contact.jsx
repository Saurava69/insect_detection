import SEOHead from './SEOHead'

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact Us - Insect Identification App | Get Support & Help"
        description="Contact our team for support, feedback, or questions about our AI-powered insect identification app. We're here to help with your insect identification needs."
        keywords="contact us, support, help, insect identification support, customer service, feedback"
      />
      
      <div className="content-container">
        <div className="page-header">
          <h1>📞 Contact Us</h1>
          <p className="page-subtitle">We'd love to hear from you! Get in touch with our team for support, feedback, or questions.</p>
        </div>

        <section className="contact-section">
          <h2>🤝 Get in Touch</h2>
          <p>
            Whether you have questions about insect identification, need technical support, or want to share feedback about our app, we're here to help. Choose the best way to reach us below.
          </p>
        </section>

        <section className="contact-section">
          <h2>📧 Contact Information</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">🌐</div>
              <h3>Website</h3>
              <p>Visit our main website for more information about our services and other projects.</p>
              <a href="https://syntaxengineer.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                syntaxengineer.com
              </a>
            </div>

            <div className="contact-method">
              <div className="method-icon">👨‍💻</div>
              <h3>Developer</h3>
              <p>Connect directly with the developer for technical questions or collaboration opportunities.</p>
              <a href="https://sauravkumar.link" target="_blank" rel="noopener noreferrer" className="contact-link">
                Saurav Kumar
              </a>
            </div>

            <div className="contact-method">
              <div className="method-icon">🐛</div>
              <h3>App Support</h3>
              <p>For app-specific questions, bug reports, or feature requests related to insect identification.</p>
              <a href="https://identify-insect.syntaxengineer.com" className="contact-link">
                identify-insect.syntaxengineer.com
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>❓ Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How accurate is the insect identification?</h3>
              <p>Our AI model achieves approximately 95% accuracy across thousands of species. Accuracy may vary based on image quality and species rarity.</p>
            </div>

            <div className="faq-item">
              <h3>What image formats are supported?</h3>
              <p>We support JPG, PNG, and WebP image formats. Images should be under 10MB for best performance.</p>
            </div>

            <div className="faq-item">
              <h3>Is my data secure and private?</h3>
              <p>Yes! We take privacy seriously. Images are processed securely and deleted after identification. Read our Privacy Policy for details.</p>
            </div>

            <div className="faq-item">
              <h3>Can I use this for commercial purposes?</h3>
              <p>The app is designed for educational and research purposes. For commercial use, please contact us to discuss licensing options.</p>
            </div>

            <div className="faq-item">
              <h3>How can I improve identification accuracy?</h3>
              <p>Use clear, well-lit photos with the insect filling most of the frame. Check our Photography Tips page for detailed guidance.</p>
            </div>

            <div className="faq-item">
              <h3>Do you have mobile apps?</h3>
              <p>Currently, we offer a web-based app that works on all devices. Native mobile apps are in development.</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>🐞 Report Issues</h2>
          <div className="issue-types">
            <div className="issue-type">
              <h3>🐛 Bug Reports</h3>
              <p>Found a bug or technical issue? Help us improve by reporting it.</p>
              <ul>
                <li>Describe what you were trying to do</li>
                <li>Include any error messages</li>
                <li>Mention your browser and device type</li>
                <li>Attach screenshots if helpful</li>
              </ul>
            </div>

            <div className="issue-type">
              <h3>❌ Incorrect Identifications</h3>
              <p>Help us improve our AI by reporting misidentifications.</p>
              <ul>
                <li>Include the original image</li>
                <li>Tell us what species it actually is</li>
                <li>Provide the confidence score shown</li>
                <li>Include location information if available</li>
              </ul>
            </div>

            <div className="issue-type">
              <h3>💡 Feature Requests</h3>
              <p>Have ideas for new features or improvements?</p>
              <ul>
                <li>Describe the feature you'd like to see</li>
                <li>Explain how it would help you</li>
                <li>Suggest how it might work</li>
                <li>Share any relevant examples</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>🤝 Collaboration Opportunities</h2>
          <div className="collaboration-grid">
            <div className="collaboration-item">
              <div className="collab-icon">🔬</div>
              <h3>Research Partnerships</h3>
              <p>Collaborate with us on entomological research projects and biodiversity studies.</p>
            </div>

            <div className="collaboration-item">
              <div className="collab-icon">🏫</div>
              <h3>Educational Institutions</h3>
              <p>Partner with us to integrate our tools into educational curricula and programs.</p>
            </div>

            <div className="collaboration-item">
              <div className="collab-icon">🌿</div>
              <h3>Conservation Organizations</h3>
              <p>Work together on conservation initiatives and citizen science projects.</p>
            </div>

            <div className="collaboration-item">
              <div className="collab-icon">💻</div>
              <h3>Developers</h3>
              <p>Interested in contributing to our open-source components or building integrations.</p>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>⏰ Response Times</h2>
          <div className="response-times">
            <div className="response-item">
              <h3>🚨 Critical Issues</h3>
              <p>Security vulnerabilities, data breaches, or app-breaking bugs</p>
              <span className="response-time">Within 24 hours</span>
            </div>

            <div className="response-item">
              <h3>🐛 Bug Reports</h3>
              <p>Technical issues, incorrect identifications, or feature problems</p>
              <span className="response-time">2-3 business days</span>
            </div>

            <div className="response-item">
              <h3>💬 General Inquiries</h3>
              <p>Questions, feedback, or general support requests</p>
              <span className="response-time">3-5 business days</span>
            </div>

            <div className="response-item">
              <h3>🤝 Partnership Requests</h3>
              <p>Collaboration opportunities or business partnerships</p>
              <span className="response-time">1-2 weeks</span>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>🌍 Community</h2>
          <p>
            Join our growing community of insect enthusiasts, researchers, and nature lovers. While we don't have dedicated social media channels yet, you can:
          </p>
          <ul className="community-list">
            <li>Share your interesting discoveries with friends and colleagues</li>
            <li>Use our app for citizen science projects</li>
            <li>Contribute to biodiversity research through your identifications</li>
            <li>Help us improve by providing feedback and reporting issues</li>
            <li>Spread awareness about insect conservation</li>
          </ul>
        </section>

        <div className="contact-cta">
          <h2>Ready to Get Started?</h2>
          <p>Have questions answered? Ready to start identifying insects with AI?</p>
          <div className="cta-buttons">
            <a href="/" className="btn-primary">Start Identifying</a>
            <a href="/guide" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact