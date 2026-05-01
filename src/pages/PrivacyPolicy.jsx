import "./LegalPages.css";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-card">
          <div className="legal-header">
            <span className="legal-icon">🔒</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-date">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, subscribe to our newsletter, or contact
                us. This may include:
              </p>
              <ul>
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>Account credentials (username and password)</li>
                <li>Profile information and preferences</li>
                <li>Communications and feedback you send to us</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. Information Sharing</h2>
              <p>
                We do not share your personal information with third parties
                except in the following circumstances:
              </p>
              <ul>
                <li>With your consent or at your direction</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>
                  With service providers who perform services on our behalf
                </li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                internet transmission is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul>
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Objection to certain processing activities</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Third-Party Links</h2>
              <p>
                Our service may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                third-party sites.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Children's Privacy</h2>
              <p>
                Our service is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact
                us at:
              </p>
              <div className="contact-info-box">
                <p>📧 privacy@dynamiccatalog.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Digital Avenue, Tech City, TC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
