import Section from '../components/Section'
import Card from '../components/Card'
import DisclaimerBanner from '../components/DisclaimerBanner'

function DemosPage() {
  return (
    <>
      <Section
        title="Demos"
        subtitle="Public demonstrations are provided for research and educational use."
      >
        <div className="grid two-up">
          <Card
            title="Agentic-Causal Demo"
            footer={<a href="/agentic-causal/">Launch Agentic-Causal Demo</a>}
          >
            <p>
              This demo is served at the /agentic-causal/ path through production infrastructure.
            </p>
          </Card>
          <Card title="Additional Demo Slots">
            <p>Future demonstrations will appear here after verification and publication.</p>
          </Card>
        </div>
      </Section>

      <Section className="section-tight">
        <DisclaimerBanner />
      </Section>
    </>
  )
}

export default DemosPage
