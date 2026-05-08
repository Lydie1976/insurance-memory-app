import { Link } from 'react-router-dom'

export function PageHeader({
  title,
  subtitle,
  backTo,
  actionLabel,
  actionTo,
}) {
  return (
    <header className="page-header">
      <div className="page-header__top">
        {backTo ? (
          <Link className="icon-button" to={backTo}>
            ←
          </Link>
        ) : (
          <div />
        )}
        {actionTo ? (
          <Link className="icon-button icon-button--gold" to={actionTo}>
            {actionLabel}
          </Link>
        ) : null}
      </div>
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
      </div>
    </header>
  )
}
