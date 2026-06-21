import Section from '../components/Section'
import Card from '../components/Card'

function PublicationsPage() {
  return (
    <Section
      title="Publications"
      subtitle="No publication metadata is shown until entries are verified."
    >
      <Card title="Publication Records in Preparation">
        <p>Verified citations, links, and publication metadata will be added in this section.</p>
        <ul className="placeholder-list" aria-label="Publication placeholders">
          <li>Citation placeholder</li>
          <li>Citation placeholder</li>
          <li>Citation placeholder</li>
        </ul>
      </Card>
    </Section>
  )
}

export default PublicationsPage
