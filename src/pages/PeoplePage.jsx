import Section from '../components/Section'
import Card from '../components/Card'
import { peopleCategories } from '../data/content'

function PeoplePage() {
  return (
    <>
      <Section
        title="People"
        subtitle="Team listings are being updated. Placeholder entries are shown until verified information is available."
      >
        <div className="grid two-up">
          {peopleCategories.map((category) => (
            <Card key={category} title={category}>
              <p>Verified member names and profiles will be published here.</p>
              <ul className="placeholder-list" aria-label={`${category} placeholder list`}>
                <li>Profile placeholder</li>
                <li>Profile placeholder</li>
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

export default PeoplePage
