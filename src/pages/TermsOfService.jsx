import "./LegalPages.css";

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-card">
          <div className="legal-header">
            <span className="legal-icon">📜</span>
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-date">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Dynamic Catalog, you agree to be bound by
                these Terms of Service. If you do not agree to these terms,
                please do not use our service.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Description of Service</h2>
              <p>
                Dynamic Catalog provides a platform for users to browse, search,
                and view product information across multiple categories
                including Cars, Bikes, Phones, and Computers. All product
                information is provided for informational purposes only.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. User Responsibilities</h2>
              <p>When using our service, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not use the service for any illegal purposes</li>
                <li>Not interfere with or disrupt the service</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Prohibited Activities</h2>
              <p>You may not engage in the following prohibited activities:</p>
              <ul>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Scraping or copying content without permission</li>
                <li>Uploading malicious code or viruses</li>
                <li>Harassing or abusing other users</li>
                <li>Misrepresenting your identity or affiliations</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Intellectual Property</h2>
              <p>
                All content on Dynamic Catalog, including text, graphics, logos,
                images, and software, is the property of Dynamic Catalog or its
                content suppliers and is protected by copyright and intellectual
                property laws.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. User-Generated Content</h2>
              <p>
                You retain ownership of any content you submit to our service.
                By submitting content, you grant us a non-exclusive,
                royalty-free license to use, display, and distribute that
                content in connection with our service.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Product Information</h2>
              <p>
                While we strive for accuracy, product information provided on
                Dynamic Catalog is for reference only. We do not guarantee the
                accuracy, completeness, or reliability of any product
                information. Prices, specifications, and availability may change
                without notice.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Third-Party Links</h2>
              <p>
                Our service may contain links to third-party websites. We are
                not responsible for the content, accuracy, or practices of these
                websites. Your use of third-party websites is at your own risk.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Disclaimer of Warranties</h2>
              <p>
                The service is provided "as is" without warranties of any kind,
                either express or implied. We do not warrant that the service
                will be uninterrupted, error-free, or free of viruses or other
                harmful components.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Dynamic Catalog shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or
                inability to use the service.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify and hold Dynamic Catalog harmless from
                any claims, damages, losses, and expenses arising from your use
                of the service or violation of these terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will
                notify users of significant changes by posting a notice on our
                website or sending an email.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Termination</h2>
              <p>
                We may terminate or suspend your access to our service
                immediately, without prior notice, for conduct that we believe
                violates these terms or is harmful to other users.
              </p>
            </section>

            <section className="legal-section">
              <h2>14. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to conflict
                of law principles.
              </p>
            </section>

            <section className="legal-section">
              <h2>15. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us
                at:
              </p>
              <div className="contact-info-box">
                <p>📧 legal@dynamiccatalog.com</p>
                <p>📞 +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
