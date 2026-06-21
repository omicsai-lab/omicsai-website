import Section from '../components/Section'
import Card from '../components/Card'

function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Collaboration and contact information placeholders are provided below."
    >
      <div className="grid two-up">
        <Card title="Collaboration">
          <p>
            For collaboration inquiries, please use the OmicsAI GitHub organization link while verified
            contact channels are being finalized.
          </p>
          <p>
            <a href="https://github.com/omicsai-lab" target="_blank" rel="noreferrer">
              https://github.com/omicsai-lab
            </a>
          </p>
        </Card>

        <Card title="Verified Contact Information (To Be Added)">
          <ul className="placeholder-list" aria-label="Contact placeholders">
            <li>Institutional email: pending verification</li>
            <li>Institutional office location: pending verification</li>
            <li>Administrative contact channel: pending verification</li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}

export default ContactPage
