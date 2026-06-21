import { disclaimers } from '../data/content'

function DisclaimerBanner() {
  return (
    <aside className="disclaimer" aria-label="Usage disclaimer">
      <p>{disclaimers.researchUse}</p>
      <p>{disclaimers.clinicalUse}</p>
    </aside>
  )
}

export default DisclaimerBanner
