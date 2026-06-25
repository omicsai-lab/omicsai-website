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
            title="Agentic-Causal"
            footer={
              <a
                className="button button-primary"
                href="https://omicsai.org/agentic-causal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Demo
              </a>
            }
          >
            <p>Agentic causal analysis workflow for biomedical research.</p>
          </Card>
          <Card
            title="OmicsGPT"
            footer={
              <a
                className="button button-primary"
                href="https://omicsai.org/OmicsGPT/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Demo
              </a>
            }
          >
            <p>Multi-agent omics analysis and precision oncology workflow.</p>
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
