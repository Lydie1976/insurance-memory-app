import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatShortDate } from '../utils/dateUtils'

function Icon({ name, className = '' }) {
  const icons = {
    search: (
      <path
        d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    filter: (
      <>
        <path d="M5 7h14M5 12h14M5 17h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <circle cx="9" cy="7" r="2.2" fill="#fff" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="15" cy="12" r="2.2" fill="#fff" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="11" cy="17" r="2.2" fill="#fff" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    calendar: (
      <>
        <rect x="4.5" y="6" width="15" height="13.5" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4.5v3M16 4.5v3M4.5 10.2h15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
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
    chevron: (
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    ),
    user: (
      <>
        <circle cx="12" cy="8.2" r="3.7" fill="#FFE7AF" />
        <path d="M5.4 18.8c1.5-3.4 4.1-5.2 6.6-5.2s5.1 1.8 6.6 5.2" fill="#FFE7AF" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

const filterOptions = ['全部', 'A級', '年度檢視', '本週追蹤', '已逾期']

const clientCards = [
  {
    id: '1',
    code: 'C-2026-001',
    subtitle: '南區王姐 | 末三碼168',
    tags: ['長照', '退休醫療'],
    badge: 'A級',
    badgeTone: 'gold',
    frequencyText: '每30天聯絡',
    nextContactDate: '2026-05-31',
    nextContactText: '05/31',
    matchGroup: ['A級'],
  },
  {
    id: '2',
    code: 'C-2026-008',
    subtitle: '陳太太 | 年度檢視',
    tags: ['保單週年', '家庭保障'],
    badge: '年檢',
    badgeTone: 'soft',
    frequencyText: '每365天檢視',
    nextContactDate: '2026-06-10',
    nextContactText: '06/10',
    matchGroup: ['年度檢視'],
  },
  {
    id: '3',
    code: 'C-2026-015',
    subtitle: '林先生 | LINE追蹤',
    tags: ['子女教育', '家庭責任'],
    badge: '今日',
    badgeTone: 'gold',
    frequencyText: '每90天聯絡',
    nextContactDate: '2026-05-07',
    nextContactText: '今天',
    matchGroup: ['本週追蹤'],
  },
  {
    id: '4',
    code: 'C-2026-021',
    subtitle: '北區張姐 | 預算保守',
    tags: ['醫療規劃', '預算討論'],
    badge: '逾期',
    badgeTone: 'danger',
    frequencyText: '每30天聯絡',
    nextContactDate: '2026-05-01',
    nextContactText: '逾期',
    matchGroup: ['已逾期', '本週追蹤', 'A級'],
  },
]

function ClientListCard({ client }) {
  return (
    <Link className="client-list-card" to={`/clients/${client.id}`}>
      <div className="client-list-card__avatar">
        <Icon name="user" className="client-list-card__avatar-icon" />
      </div>

      <div className="client-list-card__content">
        <div className="client-list-card__top">
          <div className="client-list-card__identity">
            <h2>{client.code}</h2>
            <p>{client.subtitle}</p>
          </div>
          <span className={`client-list-card__badge client-list-card__badge--${client.badgeTone}`}>
            {client.badge}
          </span>
        </div>

        <div className="client-list-card__tags">
          {client.tags.map((tag) => (
            <span key={tag} className="client-list-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="client-list-card__meta">
          <div className="client-list-card__meta-item">
            <Icon name="calendar" className="client-list-card__meta-icon" />
            <span>{client.frequencyText}</span>
          </div>
          <div className="client-list-card__meta-divider" />
          <div className="client-list-card__meta-item">
            <Icon name="phone" className="client-list-card__meta-icon" />
            <span>
              下次聯絡：
              <strong title={formatShortDate(client.nextContactDate)}>{client.nextContactText}</strong>
            </span>
          </div>
        </div>
      </div>

      <Icon name="chevron" className="client-list-card__chevron" />
    </Link>
  )
}

export function ClientListPage() {
  const [activeFilter, setActiveFilter] = useState('全部')
  const [keyword, setKeyword] = useState('')

  const filteredClients = useMemo(() => {
    const normalizedKeyword = keyword.trim()

    return clientCards.filter((client) => {
      const matchesKeyword =
        normalizedKeyword.length === 0 ||
        client.code.includes(normalizedKeyword) ||
        client.subtitle.includes(normalizedKeyword) ||
        client.tags.some((tag) => tag.includes(normalizedKeyword)) ||
        client.badge.includes(normalizedKeyword)

      if (!matchesKeyword) {
        return false
      }

      if (activeFilter === '全部') {
        return true
      }

      return client.matchGroup.includes(activeFilter)
    })
  }, [activeFilter, keyword])

  return (
    <div className="page-stack client-list-page">
      <section className="client-list-hero">
        <div>
          <h1>客戶列表</h1>
          <p>快速查看客戶記憶與追蹤狀態</p>
        </div>
        <button className="client-list-hero__action" type="button" aria-label="篩選客戶">
          <Icon name="filter" className="client-list-hero__action-icon" />
        </button>
      </section>

      <label className="client-list-search" htmlFor="client-search">
        <Icon name="search" className="client-list-search__icon" />
        <input
          id="client-search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="搜尋客戶代號、暱稱、標籤"
        />
      </label>

      <div className="client-list-filters" aria-label="客戶篩選">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            className={['client-list-filter', activeFilter === filter ? 'is-active' : ''].filter(Boolean).join(' ')}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="client-list-cards">
        {filteredClients.map((client) => (
          <ClientListCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  )
}
