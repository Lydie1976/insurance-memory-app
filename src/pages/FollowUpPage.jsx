import { Link } from 'react-router-dom'

function Icon({ name, className = '' }) {
  const icons = {
    back: (
      <path
        d="M15.5 5L8.5 12l7 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
    chat: (
      <>
        <path d="M6.5 17.8l-1.2 2.6 3.2-1.3a8.2 8.2 0 003.5.7c4.4 0 7.9-2.9 7.9-6.8S16.4 6.2 12 6.2 4.1 9 4.1 13c0 1.8.7 3.4 2.4 4.8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M8.9 11h6.2M8.9 14h4.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4.4l2.9 1.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    calendar: (
      <>
        <rect x="4.5" y="6" width="15" height="13.5" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4.5v3M16 4.5v3M4.5 10.2h15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M8.6 13.5h2.2M12 13.5h2.2M15.4 13.5h.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    clipboard: (
      <>
        <rect x="6.2" y="5.8" width="11.6" height="13" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.2 4.8h5.6v2.4H9.2zM9.2 10.8h5.6M9.2 14.2h5.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8.2" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.2 19c1.3-3.3 3.5-5 5.8-5s4.5 1.7 5.8 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    phone: (
      <path
        d="M7.8 4.5h2.4a1.2 1.2 0 011.18 1l.35 2.1a1.2 1.2 0 01-.67 1.25l-1.2.58a11.2 11.2 0 005.18 5.18l.58-1.2a1.2 1.2 0 011.24-.67l2.1.35a1.2 1.2 0 011 1.18v2.4a1.2 1.2 0 01-1.26 1.2C10.56 19 5 13.44 5 5.76A1.2 1.2 0 016.2 4.5h1.6z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    people: (
      <>
        <circle cx="9" cy="10" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="11.2" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.8 18c1.2-2.6 3-4 5.2-4 2.3 0 4 1.4 5.2 4M14.2 16c.5-1.2 1.5-2.1 3-2.1.9 0 1.8.3 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 4.5l7 2.5v5.6c0 4.2-2.8 6.8-7 8.9-4.2-2.1-7-4.7-7-8.9V7l7-2.5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.4 12.6l1.7 1.7 3.5-3.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    card: (
      <>
        <rect x="4.8" y="6.2" width="14.4" height="11.6" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.2 10.4h7.6M8.2 13.7h4.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    check: (
      <path d="M6.8 12.4l3.1 3.1 7.3-7.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    ),
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

const followUpItems = [
  {
    id: '1',
    clientId: '1',
    code: 'C-2026-001',
    nickname: '南區王姐',
    badge: 'A級',
    badgeTone: 'gold',
    frequency: '每 30 天',
    contactMethod: '電話',
    topic: '長照案例',
    lastContact: '2026/05/01',
    dueContact: '2026/05/31',
    nextTopic: '延續父母照護壓力與長照費用案例',
    contactIcon: 'phone',
    topicIcon: 'chat',
  },
  {
    id: '2',
    clientId: '2',
    code: 'C-2026-008',
    nickname: '北區林太太',
    badge: '年度檢視',
    badgeTone: 'soft',
    frequency: '每 365 天',
    contactMethod: '面訪',
    topic: '保單週年',
    lastContact: '2025/06/10',
    dueContact: '2026/06/10',
    nextTopic: '年度保單檢視與家庭責任更新',
    contactIcon: 'people',
    topicIcon: 'shield',
  },
  {
    id: '3',
    clientId: '3',
    code: 'C-2026-015',
    nickname: '西區陳小姐',
    badge: 'B級',
    badgeTone: 'gold',
    frequency: '每 180 天',
    contactMethod: '電話',
    topic: '退休醫療',
    lastContact: '2025/12/01',
    dueContact: '2026/05/29',
    nextTopic: '補充退休醫療規劃與預算考量',
    contactIcon: 'phone',
    topicIcon: 'chat',
  },
]

function SummaryCard({ active = false, icon, label, value }) {
  return (
    <article className={['follow-up-summary-card', active ? 'is-active' : ''].filter(Boolean).join(' ')}>
      <Icon name={icon} className="follow-up-summary-card__icon" />
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </article>
  )
}

function FollowUpItemCard({ item }) {
  return (
    <article className="follow-up-item-card">
      <div className="follow-up-item-card__head">
        <div className="follow-up-item-card__title">
          <Icon name="user" className="follow-up-item-card__title-icon" />
          <h3>
            {item.code} | {item.nickname}
          </h3>
        </div>
        <span className={`follow-up-badge follow-up-badge--${item.badgeTone}`}>{item.badge}</span>
      </div>

      <div className="follow-up-item-card__meta">
        <span>
          <Icon name="clock" className="follow-up-item-card__meta-icon" />
          {item.frequency}
        </span>
        <span>
          <Icon name={item.contactIcon} className="follow-up-item-card__meta-icon" />
          {item.contactMethod}
        </span>
        <span>
          <Icon name={item.topicIcon} className="follow-up-item-card__meta-icon" />
          {item.topic}
        </span>
      </div>

      <div className="follow-up-item-card__dates">
        <span>上次聯絡： {item.lastContact}</span>
        <span>應聯絡： {item.dueContact}</span>
      </div>

      <p className="follow-up-item-card__prompt">下次談論重點： {item.nextTopic}</p>

      <div className="follow-up-item-card__actions">
        <Link className="button button--ghost button--md follow-up-item-card__button" to={`/clients/${item.clientId}`}>
          <Icon name="card" className="follow-up-item-card__button-icon" />
          查看記憶卡
        </Link>
        <button className="button button--primary button--md follow-up-item-card__button" type="button">
          <Icon name="check" className="follow-up-item-card__button-icon" />
          標記已聯絡
        </button>
      </div>
    </article>
  )
}

export function FollowUpPage() {
  return (
    <div className="page-stack follow-up-page">
      <section className="follow-up-header">
        <Link aria-label="返回首頁" className="follow-up-header__back" to="/dashboard">
          <Icon name="back" className="follow-up-header__back-icon" />
        </Link>

        <div className="follow-up-header__copy">
          <h1>今日待聯絡</h1>
          <p>整理今日應聯絡客戶，掌握追蹤節奏與後續進度</p>
        </div>
      </section>

      <section className="panel follow-up-board">
        <div className="follow-up-summary-grid">
          <SummaryCard active icon="chat" label="今日待聯絡" value="3" />
          <SummaryCard icon="clock" label="逾期未聯絡" value="1" />
          <SummaryCard icon="calendar" label="本週追蹤" value="5" />
        </div>

        <div className="follow-up-list-title">
          <Icon name="clipboard" className="follow-up-list-title__icon" />
          <h2>待聯絡清單</h2>
        </div>

        <div className="follow-up-list">
          {followUpItems.map((item) => (
            <FollowUpItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="follow-up-notice">
          <Icon name="shield" className="follow-up-notice__icon" />
          <span>標記已聯絡後，系統會自動更新下次追蹤日期。</span>
        </div>
      </section>
    </div>
  )
}
