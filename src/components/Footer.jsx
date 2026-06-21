import { Link } from 'react-router-dom'
import { disclaimers } from '../data/content'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>OmicsAI Lab</h2>
          <p>Biomedical AI research website. Content is placeholder-safe and pending verified updates.</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <a href="https://github.com/omicsai-lab" target="_blank" rel="noreferrer">
                GitHub Organization
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Notice</h2>
          <p>{disclaimers.researchUse}</p>
          <p>{disclaimers.clinicalUse}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
