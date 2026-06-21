import Section from '../components/Section'
import Card from '../components/Card'
import DisclaimerBanner from '../components/DisclaimerBanner'
import { projectLinks } from '../data/content'

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-hero-title">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">OmicsAI Academic Lab</p>
            <h1 id="home-hero-title">Biomedical AI Research and Open-Source Systems</h1>
            <p>
              OmicsAI develops methods and tooling for academic research in biomedical artificial intelligence.
              Verified project and team details will be added as they are confirmed.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/agentic-causal/">
                Launch Agentic-Causal Demo
              </a>
              <a
                className="button button-ghost"
                href="https://github.com/omicsai-lab"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub Organization
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="signal signal-a"></div>
            <div className="signal signal-b"></div>
            <div className="signal signal-c"></div>
          </div>
        </div>
      </section>

      <Section
        title="Featured Open-Source Projects"
        subtitle="Current repositories maintained in the OmicsAI ecosystem."
      >
        <div className="grid two-up">
          {projectLinks.map((project) => (
            <Card
              key={project.href}
              title={project.title}
              footer={
                <a href={project.href} target="_blank" rel="noreferrer">
                  Open Repository
                </a>
              }
            >
              <p>{project.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Lab Focus"
        subtitle="This summary is intentionally high level until verified program details are published."
      >
        <div className="grid three-up">
          <Card title="Method Development">
            <p>Development of computational methods for robust, interpretable, and reproducible biomedical AI research.</p>
          </Card>
          <Card title="Agentic Systems">
            <p>Design of agentic workflows for research productivity and transparent experimentation.</p>
          </Card>
          <Card title="Educational Resources">
            <p>Creation of materials and software examples for research and educational use.</p>
          </Card>
        </div>
      </Section>

      <Section className="section-tight">
        <DisclaimerBanner />
      </Section>
    </>
  )
}

export default HomePage
