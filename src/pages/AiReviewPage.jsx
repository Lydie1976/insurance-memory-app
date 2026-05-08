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
    spark: (
      <>
        <path d="M12 4.8l1.5 4 4.1 1.5-4.1 1.5-1.5 4-1.5-4-4.1-1.5 4.1-1.5 1.5-4z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M17.8 3.8l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      </>
    ),
    bubble: (
      <path d="M6.6 17.8L5.4 20l3-1.2a9 9 0 003.6.7c4.3 0 7.8-2.9 7.8-6.7S16.3 6 12 6 4.2 8.9 4.2 12.8c0 1.8.8 3.5 2.4 5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
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
    clipboard: (
      <>
        <rect x="6.2" y="5.8" width="11.6" height="13" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.2 4.8h5.6v2.4H9.2zM9.2 10.8h5.6M9.2 14.2h5.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    message: (
      <>
        <path d="M5.1 6.8h13.8v10.4H8.7L5.1 20V6.8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M8.4 10.8h7.2M8.4 13.8h5.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    pencil: (
      <>
        <path d="M4.8 18.8l3.1-.5L18 8.2l-2.5-2.5L5.4 15.8l-.6 3z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M13.9 7.3l2.5 2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    shieldCheck: (
      <>
        <path d="M12 4.5l7 2.5v5.6c0 4.2-2.8 6.8-7 8.9-4.2-2.1-7-4.7-7-8.9V7l7-2.5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.4 12.6l1.7 1.7 3.5-3.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    refresh: (
      <>
        <path d="M18 9.5A6.5 6.5 0 105.8 14M18 9.5V5.5m0 4h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

const reviewSections = [
  {
    icon: 'bubble',
    title: '談話摘要',
    value: '客戶提到父母照護壓力，對長照費用沒有概念，保費預算較保守，希望先了解基本保障與退休醫療規劃。',
  },
  {
    icon: 'people',
    title: '家庭狀況更新',
    value: '已婚，兩名子女，目前關心家庭責任與未來照護安排。',
  },
  {
    icon: 'shield',
    title: '客戶擔心',
    value: '擔心長照支出造成家庭負擔，也在意每月保費不可過高。',
  },
  {
    icon: 'clipboard',
    title: '下次追蹤事項',
    value: '補充長照案例、說明退休醫療規劃、延續家庭責任話題。',
  },
  {
    icon: 'message',
    title: '下次談論重點',
    value: '延續父母照護壓力話題，補充長照費用案例，並進一步說明退休醫療規劃。',
  },
]

function ReviewCard({ section }) {
  return (
    <article className="ai-review-card">
      <div className="ai-review-card__head">
        <div className="ai-review-card__title">
          <Icon name={section.icon} className="ai-review-card__title-icon" />
          <h3>{section.title}</h3>
        </div>
        <button aria-label={`編輯${section.title}`} className="ai-review-card__edit" type="button">
          <Icon name="pencil" className="ai-review-card__edit-icon" />
        </button>
      </div>
      <p>{section.value}</p>
    </article>
  )
}

export function AiReviewPage() {
  return (
    <div className="page-stack ai-review-page">
      <section className="ai-review-header">
        <Link aria-label="返回新增拜訪" className="ai-review-header__back" to="/visits/new">
          <Icon name="back" className="ai-review-header__back-icon" />
        </Link>

        <div className="ai-review-header__copy">
          <h1>AI 整理結果</h1>
          <p>確認本次拜訪重點後，再儲存至客戶記憶卡</p>
        </div>
      </section>

      <section className="panel ai-review-board">
        <div className="ai-review-identity">
          <div className="ai-review-identity__main">
            <Icon name="spark" className="ai-review-identity__icon" />
            <strong>客戶： C-2026-001 | 南區王姐</strong>
          </div>
          <span className="ai-review-identity__stage">第二次說明</span>
        </div>

        <div className="ai-review-list">
          {reviewSections.map((section) => (
            <ReviewCard key={section.title} section={section} />
          ))}
        </div>

        <div className="ai-review-notice">
          <Icon name="shieldCheck" className="ai-review-notice__icon" />
          <span>請先確認內容後再儲存，必要時可手動修正 AI 整理結果。</span>
        </div>

        <div className="ai-review-actions">
          <Link className="button button--ghost button--lg ai-review-actions__button" to="/visits/new">
            返回修改
          </Link>
          <button className="button button--secondary button--lg ai-review-actions__button" type="button">
            <Icon name="refresh" className="ai-review-actions__button-icon" />
            重新整理
          </button>
          <button className="button button--primary button--lg ai-review-actions__button" type="button">
            儲存到記憶卡
          </button>
        </div>
      </section>
    </div>
  )
}
