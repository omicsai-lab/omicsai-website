import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="section not-found" aria-labelledby="not-found-title">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">Page Not Found</h1>
        <p>The page you requested does not exist at this route.</p>
        <Link className="button button-primary" to="/">
          Return Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
