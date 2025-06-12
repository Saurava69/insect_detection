import SEOHead from './SEOHead'

const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Insect Identification App | Data Protection & Security"
        description="Learn how we protect your privacy and handle your data. Our comprehensive privacy policy explains data collection, usage, and your rights."
        keywords="privacy policy, data protection, user privacy, data security, GDPR compliance"
      />
      
      <div className="content-container">
        <div className="page-header">
          <h1>🔒 Privacy Policy</h1>
          <p className="page-subtitle">Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
          <p className="last-updated">Last updated: January 13, 2025</p>
        </div>

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          
          <h3>1.1 Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Email address (required for account creation)</li>
            <li>Full name (optional)</li>
            <li>Phone number (optional)</li>
            <li>Bio/description (optional)</li>
            <li>Profile picture (optional)</li>
          </ul>

          <h3>1.2 Usage Data</h3>
          <p>We automatically collect information about how you use our service:</p>
          <ul>
            <li>Images uploaded for identification</li>
            <li>Identification results and confidence scores</li>
            <li>App usage patterns and features accessed</li>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and general location data</li>
            <li>Session duration and frequency of use</li>
          </ul>

          <h3>1.3 Image Data</h3>
          <p>When you upload images for identification:</p>
          <ul>
            <li>We process images to identify insect species</li>
            <li>Images are temporarily stored during processing</li>
            <li>We may retain anonymized image data for AI model improvement</li>
            <li>No personal information is linked to retained images</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          
          <h3>2.1 Service Provision</h3>
          <ul>
            <li>Provide insect identification services</li>
            <li>Maintain and improve our AI algorithms</li>
            <li>Personalize your experience</li>
            <li>Provide customer support</li>
          </ul>

          <h3>2.2 Communication</h3>
          <ul>
            <li>Send service-related notifications</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Share important updates about our service</li>
            <li>Send educational content (with your consent)</li>
          </ul>

          <h3>2.3 Analytics and Improvement</h3>
          <ul>
            <li>Analyze usage patterns to improve our service</li>
            <li>Monitor and enhance app performance</li>
            <li>Develop new features and capabilities</li>
            <li>Conduct research for scientific purposes</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Data Sharing and Disclosure</h2>
          
          <h3>3.1 We Do Not Sell Your Data</h3>
          <p>We never sell, rent, or trade your personal information to third parties for commercial purposes.</p>

          <h3>3.2 Service Providers</h3>
          <p>We may share data with trusted service providers who help us operate our service:</p>
          <ul>
            <li>Cloud hosting providers (Supabase, Netlify)</li>
            <li>AI/ML service providers (Kindwise API)</li>
            <li>Analytics providers (Google Analytics)</li>
            <li>Customer support tools</li>
          </ul>

          <h3>3.3 Legal Requirements</h3>
          <p>We may disclose information when required by law or to:</p>
          <ul>
            <li>Comply with legal processes or government requests</li>
            <li>Protect our rights, property, or safety</li>
            <li>Protect the rights, property, or safety of our users</li>
            <li>Prevent fraud or abuse of our service</li>
          </ul>

          <h3>3.4 Research and Conservation</h3>
          <p>With your consent, we may share anonymized data with:</p>
          <ul>
            <li>Scientific research institutions</li>
            <li>Conservation organizations</li>
            <li>Educational institutions</li>
            <li>Biodiversity databases</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Data Security</h2>
          
          <h3>4.1 Security Measures</h3>
          <p>We implement industry-standard security measures:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Secure authentication and access controls</li>
            <li>Regular security audits and updates</li>
            <li>Monitoring for unauthorized access</li>
          </ul>

          <h3>4.2 Data Retention</h3>
          <ul>
            <li>Account data: Retained while your account is active</li>
            <li>Usage logs: Retained for up to 2 years</li>
            <li>Uploaded images: Processed and deleted within 24 hours</li>
            <li>Anonymized research data: May be retained indefinitely</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Your Rights and Choices</h2>
          
          <h3>5.1 Account Management</h3>
          <ul>
            <li>Access and update your profile information</li>
            <li>Download your data</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of non-essential communications</li>
          </ul>

          <h3>5.2 Data Rights (GDPR/CCPA)</h3>
          <p>If you're in the EU or California, you have additional rights:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate data</li>
            <li>Right to erase your data</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>

          <h3>5.3 Cookies and Tracking</h3>
          <ul>
            <li>We use essential cookies for app functionality</li>
            <li>Analytics cookies help us improve our service</li>
            <li>You can disable cookies in your browser settings</li>
            <li>Some features may not work without cookies</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>6. Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any material changes by:
          </p>
          <ul>
            <li>Posting the updated policy on our website</li>
            <li>Sending you an email notification</li>
            <li>Displaying a notice in the app</li>
          </ul>
          <p>Your continued use of our service after changes become effective constitutes acceptance of the updated policy.</p>
        </section>

        <section className="privacy-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy or our data practices, please contact us:
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Website:</strong> <a href="https://syntaxengineer.com"  rel="noopener noreferrer">syntaxengineer.com</a>
            </div>
            <div className="contact-item">
              <strong>Developer:</strong> <a href="https://sauravkumar.link"  rel="noopener noreferrer">Saurav Kumar</a>
            </div>
            <div className="contact-item">
              <strong>App:</strong> <a href="https://insect-detector.syntaxengineer.com">insect-detector.syntaxengineer.com</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Privacy