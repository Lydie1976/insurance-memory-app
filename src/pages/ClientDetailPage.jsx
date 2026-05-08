import { Link, useParams } from 'react-router-dom'

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
    edit: (
      <>
        <path d="M4.8 18.8l3.1-.5L18 8.2l-2.5-2.5L5.4 15.8l-.6 3z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M13.9 7.3l2.5 2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M5 20h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8.2" r="3.7" fill="#FFE7AF" />
        <path d="M5.4 18.8c1.5-3.4 4.1-5.2 6.6-5.2s5.1 1.8 6.6 5.2" fill="#FFE7AF" />
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
    flag: (
      <>
        <path d="M6.5 19V6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M6.5 6h8.4l-1.8 3 1.8 3H6.5" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    bell: (
      <>
        <path d="M14.8 17H6.2a1 1 0 01-.8-1.6l1-1.34a4.9 4.9 0 001-3V10a4.6 4.6 0 119.2 0v1.1a4.9 4.9 0 001 3l1 1.34a1 1 0 01-.8 1.6h-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M10 18.3a2 2 0 004 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    bubble: (
      <path d="M6.6 17.8L5.4 20l3-1.2a9 9 0 003.6.7c4.3 0 7.8-2.9 7.8-6.7S16.3 6 12 6 4.2 8.9 4.2 12.8c0 1.8.8 3.5 2.4 5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    ),
    heart: (
      <path d="M12 19s-6.6-3.8-6.6-8.5A3.6 3.6 0 019 6.9c1.2 0 2.3.6 3 1.6.7-1 1.8-1.6 3-1.6a3.6 3.6 0 013.6 3.6C18.6 15.2 12 19 12 19z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    ),
    message: (
      <>
        <path d="M5.1 6.8h13.8v10.4H8.7L5.1 20V6.8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M8.4 10.8h7.2M8.4 13.8h5.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    checklist: (
      <>
        <rect x="6" y="5.5" width="12" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 10.5l1.4 1.4 3-3.3M9 15h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="8.1" r="3.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 18.8c1.2-3.2 3.5-4.9 6-4.9s4.8 1.7 6 4.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    gear: (
      <>
        <path d="M12 4.7l1 .9a1.8 1.8 0 001.8.3l1.3-.5 1.3 2.2-1 .8a1.8 1.8 0 00-.5 1.8l.2 1.3-.2 1.3a1.8 1.8 0 00.5 1.8l1 .8-1.3 2.2-1.3-.5a1.8 1.8 0 00-1.8.3l-1 .9-1-.9a1.8 1.8 0 00-1.8-.3l-1.3.5-1.3-2.2 1-.8a1.8 1.8 0 00.5-1.8l-.2-1.3.2-1.3a1.8 1.8 0 00-.5-1.8l-1-.8 1.3-2.2 1.3.5a1.8 1.8 0 001.8-.3l1-.9z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4.4l2.9 1.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    plus: (
      <path d="M12 6v12M6 12h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    ),
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

const detailMockMap = {
  '1': {
    id: '1',
    code: 'C-2026-001',
    nickname: '南區王姐',
    tags: ['長照', '退休醫療'],
    level: 'A級',
    followUpFrequency: '每30天聯絡',
    nextContact: '05/31',
    stage: '第二次說明',
    reminderCards: [
      {
        icon: 'bubble',
        title: '上次談話重點',
        content: '客戶提到父母照護壓力，對長照費用沒有概念。',
      },
      {
        icon: 'heart',
        title: '客戶最在意',
        content: '不想造成家庭負擔，保費預算不能太高。',
      },
      {
        icon: 'message',
        title: '下次開場',
        content: '上次您提到父母照護的壓力，我整理了一份簡單的長照費用表。',
      },
      {
        icon: 'checklist',
        title: '下次追蹤事項',
        content: '補充長照案例，延續退休醫療話題。',
      },
    ],
    memoryPoints: [
      '家庭狀況\n已婚，兩名子女',
      '溝通風格\n偏好簡單明確說明',
      '主要關注\n長照、退休醫療、家庭責任',
    ],
    settings: [
      ['聯絡方式', '電話'],
      ['上次聯絡', '2026/05/01'],
      ['下次聯絡', '2026/05/31'],
      ['追蹤主題', '長照費用、退休醫療'],
    ],
    visits: [
      {
        date: '2026/05/01',
        stage: '第二次說明',
        summary: '摘要：\n討論長照與退休醫療。',
      },
      {
        date: '2026/04/01',
        stage: '初次拜訪',
        summary: '摘要：\n了解家庭責任與預算考量。',
      },
    ],
  },
  '2': {
    id: '2',
    code: 'C-2026-008',
    nickname: '陳太太',
    tags: ['保單週年', '家庭保障'],
    level: '年檢',
    followUpFrequency: '每365天檢視',
    nextContact: '06/10',
    stage: '年度檢視',
    reminderCards: [
      {
        icon: 'bubble',
        title: '上次談話重點',
        content: '想確認既有保單保障是否足夠，尤其是家庭責任部分。',
      },
      {
        icon: 'heart',
        title: '客戶最在意',
        content: '不想重複投保，但希望缺口可以補齊。',
      },
      {
        icon: 'message',
        title: '下次開場',
        content: '這次我們先用年度保單檢視表，快速看一下保障有沒有重疊。',
      },
      {
        icon: 'checklist',
        title: '下次追蹤事項',
        content: '整理現有保障清單，說明家庭保障缺口。',
      },
    ],
    memoryPoints: [
      '家庭狀況\n雙薪家庭，一名孩子',
      '溝通風格\n偏好表格與清單',
      '主要關注\n家庭保障、保單整併',
    ],
    settings: [
      ['聯絡方式', 'LINE'],
      ['上次聯絡', '2026/05/10'],
      ['下次聯絡', '2026/06/10'],
      ['追蹤主題', '保單週年、家庭保障'],
    ],
    visits: [
      {
        date: '2026/05/10',
        stage: '年度檢視',
        summary: '摘要：\n盤點現有家庭保障架構。',
      },
      {
        date: '2025/05/10',
        stage: '保單週年',
        summary: '摘要：\n說明年度變動與續保安排。',
      },
    ],
  },
}

function DetailChip({ children, tone = 'soft' }) {
  return <span className={`client-detail-chip client-detail-chip--${tone}`}>{children}</span>
}

export function ClientDetailPage() {
  const { clientId } = useParams()
  const detail = detailMockMap[clientId] ?? detailMockMap['1']

  return (
    <div className="page-stack client-detail-page">
      <section className="client-detail-header">
        <Link aria-label="返回客戶列表" className="client-detail-header__back" to="/clients">
          <Icon name="back" className="client-detail-header__back-icon" />
        </Link>

        <div className="client-detail-header__copy">
          <h1>客戶記憶卡</h1>
          <p>拜訪前快速回顧客戶重點與追蹤進度</p>
        </div>

        <button aria-label="編輯客戶" className="client-detail-header__action" type="button">
          <Icon name="edit" className="client-detail-header__action-icon" />
        </button>
      </section>

      <section className="panel client-detail-hero">
        <div className="client-detail-hero__avatar">
          <Icon name="user" className="client-detail-hero__avatar-icon" />
        </div>

        <div className="client-detail-hero__content">
          <h2>{detail.code}</h2>
          <p>{detail.nickname}</p>

          <div className="client-detail-hero__tags">
            {detail.tags.map((tag) => (
              <DetailChip key={tag}>{tag}</DetailChip>
            ))}
            <DetailChip tone="gold">{detail.level}</DetailChip>
          </div>

          <div className="client-detail-hero__metrics">
            <div className="client-detail-hero__metric">
              <Icon name="calendar" className="client-detail-hero__metric-icon" />
              <div>
                <span>追蹤頻率</span>
                <strong>{detail.followUpFrequency}</strong>
              </div>
            </div>

            <div className="client-detail-hero__metric">
              <Icon name="phone" className="client-detail-hero__metric-icon" />
              <div>
                <span>下次聯絡</span>
                <strong>{detail.nextContact}</strong>
              </div>
            </div>

            <div className="client-detail-hero__metric">
              <Icon name="flag" className="client-detail-hero__metric-icon" />
              <div>
                <span>目前階段</span>
                <strong>{detail.stage}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel client-detail-reminder">
        <div className="client-detail-section-title">
          <Icon name="bell" className="client-detail-section-title__icon" />
          <h3>拜訪前快速提醒</h3>
        </div>

        <div className="client-detail-reminder__grid">
          {detail.reminderCards.map((card) => (
            <article key={card.title} className="client-detail-note-card">
              <div className="client-detail-note-card__title">
                <Icon name={card.icon} className="client-detail-note-card__icon" />
                <h4>{card.title}</h4>
              </div>
              <p>{card.content}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="client-detail-columns">
        <section className="panel client-detail-info-card">
          <div className="client-detail-section-title">
            <Icon name="person" className="client-detail-section-title__icon" />
            <h3>客戶記憶重點</h3>
          </div>

          <ul className="client-detail-bullet-list">
            {detail.memoryPoints.map((item) => {
              const [title, description] = item.split('\n')

              return (
                <li key={item}>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="panel client-detail-info-card">
          <div className="client-detail-section-title">
            <Icon name="gear" className="client-detail-section-title__icon" />
            <h3>追蹤設定</h3>
          </div>

          <div className="client-detail-setting-list">
            {detail.settings.map(([label, value], index) => (
              <div
                key={label}
                className={[
                  'client-detail-setting-row',
                  index < detail.settings.length - 1 ? 'client-detail-setting-row--line' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="panel client-detail-info-card">
          <div className="client-detail-section-title">
            <Icon name="clock" className="client-detail-section-title__icon" />
            <h3>近期拜訪紀錄</h3>
          </div>

          <div className="client-detail-timeline">
            {detail.visits.map((visit, index) => (
              <div key={`${visit.date}-${visit.stage}`} className="client-detail-timeline__item">
                <div className="client-detail-timeline__rail">
                  <span className="client-detail-timeline__dot" />
                  {index < detail.visits.length - 1 ? <span className="client-detail-timeline__line" /> : null}
                </div>
                <div className="client-detail-timeline__content">
                  <strong>{visit.date}</strong>
                  <DetailChip>{visit.stage}</DetailChip>
                  <p>{visit.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="client-detail-actions">
        <Link className="button button--primary button--lg client-detail-actions__button" to="/visits/new">
          <Icon name="plus" className="client-detail-actions__button-icon" />
          新增拜訪紀錄
        </Link>
        <button className="button button--ghost button--lg client-detail-actions__button" type="button">
          標記已聯絡
        </button>
      </div>
    </div>
  )
}
