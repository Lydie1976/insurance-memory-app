import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { mockFollowUps } from '../data/mockFollowUps'
import { getClients } from '../services/clientService'

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
    bell: (
      <>
        <path
          d="M15 17H5.5a1 1 0 01-.8-1.6l1.1-1.47A5.5 5.5 0 007 10.6V9a5 5 0 1110 0v1.6a5.5 5.5 0 001.2 3.33l1.1 1.47A1 1 0 0118.5 17H17"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M9.5 18a2.5 2.5 0 005 0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
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
    clock: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 7.8v4.7l3 1.8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </>
    ),
    calendar: (
      <>
        <rect x="4.5" y="6" width="15" height="13.5" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4.5v3M16 4.5v3M4.5 10.2h15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M9.2 14l1.7 1.7 3.8-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    bolt: (
      <path
        d="M13.2 3.8L6.8 12h4l-1 8.2L17.2 12h-4l1-8.2z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    plus: (
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    ),
    list: (
      <>
        <path d="M9 7h9M9 12h9M9 17h9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <circle cx="5.5" cy="7" r="1" fill="currentColor" />
        <circle cx="5.5" cy="12" r="1" fill="currentColor" />
        <circle cx="5.5" cy="17" r="1" fill="currentColor" />
      </>
    ),
    history: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.6v4.8l2.8 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
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
        <circle cx="12" cy="8.4" r="3.6" fill="#FFE8B2" />
        <path
          d="M5.5 18.8c1.6-3.35 4.1-5.05 6.5-5.05s4.9 1.7 6.5 5.05"
          fill="#FFE8B2"
        />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

const statusLabelMap = {
  today: '今天',
  overdue: '逾期',
  week: '本週',
}

const statusOrderMap = {
  today: 0,
  overdue: 1,
  week: 2,
}

export function DashboardPage() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    let isMounted = true

    async function loadClients() {
      try {
        const loadedClients = await getClients()

        if (isMounted) {
          setClients(Array.isArray(loadedClients) ? loadedClients : [])
        }
      } catch {
        if (isMounted) {
          setClients([])
        }
      }
    }

    loadClients()

    return () => {
      isMounted = false
    }
  }, [])

  const todayItems = mockFollowUps
    .filter((item) => item.status === 'today' || item.status === 'overdue')
    .sort((left, right) => statusOrderMap[left.status] - statusOrderMap[right.status])

  const featuredFollowUps = todayItems.slice(0, 3)
  const overdueCount = mockFollowUps.filter((item) => item.status === 'overdue').length
  const weeklyCount = mockFollowUps.filter((item) => item.status === 'today' || item.status === 'overdue' || item.status === 'week').length
  const recentClients = clients.slice(0, 2)

  return (
    <div className="page-stack dashboard-page">
      <section className="dashboard-top">
        <div className="dashboard-profile">
          <div className="dashboard-profile__avatar">
            <Icon name="user" className="dashboard-profile__avatar-icon" />
          </div>
          <div>
            <h1>早安，顧問</h1>
            <p>保險顧問 AI 客戶記憶卡</p>
          </div>
        </div>
        <button className="dashboard-alert" type="button" aria-label="查看提醒">
          <Icon name="bell" className="dashboard-alert__icon" />
          <span className="dashboard-alert__dot" />
        </button>
      </section>

      <div className="dashboard-search">
        <Icon name="search" className="dashboard-search__icon" />
        <input placeholder="搜尋客戶代號、標籤或追蹤主題" readOnly />
      </div>

      <section className="panel dashboard-section">
        <div className="dashboard-section__head">
          <div className="dashboard-section__title">
            <span className="dashboard-section__icon dashboard-section__icon--plain">
              <Icon name="phone" className="dashboard-section__glyph" />
            </span>
            <h2>今日待聯絡</h2>
          </div>
          <span className="dashboard-section__meta">{featuredFollowUps.length} 位客戶需要追蹤</span>
        </div>

        <div className="dashboard-follow-list">
          {featuredFollowUps.map((item, index) => (
            <Link key={item.id} className="dashboard-follow-item" to={`/clients/${item.clientId}`}>
              <div className="dashboard-follow-item__avatar">
                <Icon name="user" className="dashboard-follow-item__avatar-icon" />
              </div>
              <div className="dashboard-follow-item__body">
                <strong>{item.clientCode}</strong>
                <span>
                  {item.contactMethod} ｜ {item.topic}
                </span>
              </div>
              <span className={`dashboard-status dashboard-status--${item.status}`}>{statusLabelMap[item.status]}</span>
              <Icon name="chevron" className="dashboard-follow-item__chevron" />
              {index < featuredFollowUps.length - 1 ? <span className="dashboard-follow-item__divider" /> : null}
            </Link>
          ))}
        </div>
      </section>

      <div className="dashboard-summary-grid">
        <Link className="panel dashboard-summary-card" to="/follow-up">
          <div className="dashboard-summary-card__icon">
            <Icon name="clock" className="dashboard-summary-card__glyph" />
          </div>
          <div className="dashboard-summary-card__content">
            <span>逾期未聯絡</span>
            <strong>{overdueCount}</strong>
            <small>位</small>
          </div>
          <Icon name="chevron" className="dashboard-summary-card__arrow" />
        </Link>

        <Link className="panel dashboard-summary-card" to="/follow-up">
          <div className="dashboard-summary-card__icon">
            <Icon name="calendar" className="dashboard-summary-card__glyph" />
          </div>
          <div className="dashboard-summary-card__content">
            <span>本週應追蹤</span>
            <strong>{weeklyCount}</strong>
            <small>位</small>
          </div>
          <Icon name="chevron" className="dashboard-summary-card__arrow" />
        </Link>
      </div>

      <section className="panel dashboard-section">
        <div className="dashboard-section__head">
          <div className="dashboard-section__title">
            <span className="dashboard-section__icon dashboard-section__icon--plain">
              <Icon name="bolt" className="dashboard-section__glyph" />
            </span>
            <h2>快速操作</h2>
          </div>
        </div>

        <div className="dashboard-action-grid">
          <Link className="dashboard-action-card" to="/visits/new">
            <span className="dashboard-action-card__icon">
              <Icon name="plus" className="dashboard-action-card__glyph" />
            </span>
            <strong>新增拜訪紀錄</strong>
          </Link>

          <Link className="dashboard-action-card" to="/clients/new">
            <span className="dashboard-action-card__icon">
              <Icon name="plus" className="dashboard-action-card__glyph" />
            </span>
            <strong>新增客戶</strong>
          </Link>

          <Link className="dashboard-action-card" to="/follow-up">
            <span className="dashboard-action-card__icon">
              <Icon name="list" className="dashboard-action-card__glyph" />
            </span>
            <strong>查看追蹤清單</strong>
          </Link>
        </div>
      </section>

      <section className="panel dashboard-section">
        <div className="dashboard-section__head">
          <div className="dashboard-section__title">
            <span className="dashboard-section__icon dashboard-section__icon--plain">
              <Icon name="history" className="dashboard-section__glyph" />
            </span>
            <h2>最近查看</h2>
          </div>
          <Link className="dashboard-section__link" to="/clients">
            查看全部
            <Icon name="chevron" className="dashboard-section__link-icon" />
          </Link>
        </div>

        <div className="dashboard-recent-grid">
          {recentClients.map((client) => (
            <Link key={client.id} className="dashboard-recent-card" to={`/clients/${client.id}`}>
              <div className="dashboard-recent-card__avatar">
                <Icon name="user" className="dashboard-recent-card__avatar-icon" />
              </div>
              <div className="dashboard-recent-card__body">
                <strong>{client.code}</strong>
                <span>{Array.isArray(client.tags) ? client.tags.join(' ｜ ') : ''}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
