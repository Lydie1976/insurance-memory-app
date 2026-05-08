import { Link } from 'react-router-dom'
import { formatShortDate } from '../utils/dateUtils'
import { TagChip } from './TagChip'

export function ClientCard({ client }) {
  return (
    <Link className="client-card" to={`/clients/${client.id}`}>
      <div className="avatar-badge">{client.nickname.slice(0, 1)}</div>
      <div className="client-card__content">
        <div className="client-card__row">
          <div>
            <h3>{client.code}</h3>
            <p>{client.nickname}</p>
          </div>
          <TagChip tone={client.statusTone}>{client.statusLabel}</TagChip>
        </div>
        <div className="tag-row">
          {client.tags.map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </div>
        <div className="meta-row">
          <span>每 {client.followUpFrequencyDays} 天聯絡</span>
          <span>下次聯絡：{formatShortDate(client.nextContactDate)}</span>
        </div>
      </div>
    </Link>
  )
}
