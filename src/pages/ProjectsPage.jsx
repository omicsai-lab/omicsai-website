import Section from '../components/Section'
import Card from '../components/Card'
import { projectLinks } from '../data/content'

function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="Verified repositories and project placeholders are listed below."
    >
      <div className="grid two-up">
        {projectLinks.map((project) => (
          <Card
            key={project.href}
            title={project.title}
            footer={
              <a href={project.href} target="_blank" rel="noreferrer">
                Repository Link
              </a>
            }
          >
            <p>{project.summary}</p>
          </Card>
        ))}
        <Card title="Additional Projects">
          <p>Additional verified project information will be added as it becomes available.</p>
        </Card>
      </div>
    </Section>
  )
}

export default ProjectsPage
