import { Link } from 'react-router-dom'
import { formatLongDate } from '../utils/dateUtils'
import { PrimaryButton } from './PrimaryButton'
import { TagChip } from './TagChip'

export function FollowUpCard({ item }) {
  return (
    <article className="follow-card">
      <div className="follow-card__header">
        <div>
          <h3>
            {item.clientCode} | {item.nickname}
          </h3>
          <p>{item.topic}</p>
        </div>
        <TagChip tone={item.statusTone}>{item.level}</TagChip>
      </div>
      <div className="follow-card__meta">
        <span>每 {item.followUpFrequencyDays} 天</span>
        <span>{item.contactMethod}</span>
        <span>{item.topic}</span>
      </div>
      <div className="follow-card__dates">
        <span>上次聯絡：{formatLongDate(item.lastContactDate)}</span>
        <span>應聯絡：{formatLongDate(item.dueDate)}</span>
      </div>
      <p className="follow-card__prompt">下次談論重點：{item.nextDiscussion}</p>
      <div className="dual-actions">
        <Link className="button button--ghost button--md" to={`/clients/${item.clientId}`}>
          查看記憶卡
        </Link>
        <PrimaryButton>標記已聯絡</PrimaryButton>
      </div>
    </article>
  )
}
