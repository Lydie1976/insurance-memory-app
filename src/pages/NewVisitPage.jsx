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
    user: (
      <>
        <circle cx="12" cy="8.2" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.2 19c1.3-3.3 3.5-5 5.8-5s4.5 1.7 5.8 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    calendar: (
      <>
        <rect x="4.5" y="6" width="15" height="13.5" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4.5v3M16 4.5v3M4.5 10.2h15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    note: (
      <>
        <path d="M7 4.8h7.6l3.4 3.4V19.2H7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M14.6 4.8v3.6h3.6M9.6 12h5.5M9.6 15.2h5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    spark: (
      <path d="M12 4.8l1.5 4 4.1 1.5-4.1 1.5-1.5 4-1.5-4-4.1-1.5 4.1-1.5 1.5-4z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    ),
    shield: (
      <>
        <path d="M12 4.5l7 2.5v5.6c0 4.2-2.8 6.8-7 8.9-4.2-2.1-7-4.7-7-8.9V7l7-2.5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.4 12.6l1.7 1.7 3.5-3.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    pencil: (
      <>
        <path d="M4.8 18.8l3.1-.5L18 8.2l-2.5-2.5L5.4 15.8l-.6 3z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M13.9 7.3l2.5 2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    chevronDown: (
      <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
    ),
    plus: (
      <path d="M12 6v12M6 12h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    ),
    close: (
      <path d="M8 8l8 8M16 8l-8 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    ),
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

const visitTags = ['長照', '退休醫療', '預算考量']

export function NewVisitPage() {
  return (
    <div className="page-stack new-visit-page">
      <section className="new-visit-header">
        <Link aria-label="返回首頁" className="new-visit-header__back" to="/dashboard">
          <Icon name="back" className="new-visit-header__back-icon" />
        </Link>

        <div className="new-visit-header__copy">
          <h1>新增拜訪紀錄</h1>
          <p>貼上已清洗內容，整理本次拜訪重點與後續追蹤</p>
        </div>
      </section>

      <section className="panel new-visit-form">
        <div className="new-visit-field new-visit-field--vertical">
          <div className="new-visit-field__label">
            <Icon name="user" className="new-visit-field__icon" />
            <span>選擇客戶</span>
          </div>
          <div className="new-visit-select">
            <span>C-2026-001 | 南區王姐</span>
            <Icon name="chevronDown" className="new-visit-select__icon" />
          </div>
        </div>

        <div className="new-visit-grid">
          <div className="new-visit-field new-visit-field--vertical">
            <div className="new-visit-field__label">
              <Icon name="calendar" className="new-visit-field__icon" />
              <span>拜訪日期</span>
            </div>
            <div className="new-visit-input-shell">
              <span>2026/05/31</span>
              <Icon name="calendar" className="new-visit-input-shell__icon" />
            </div>
          </div>

          <div className="new-visit-field new-visit-field--vertical">
            <div className="new-visit-field__label">
              <Icon name="note" className="new-visit-field__icon" />
              <span>拜訪階段</span>
            </div>
            <div className="new-visit-select">
              <span>第二次說明</span>
              <Icon name="chevronDown" className="new-visit-select__icon" />
            </div>
          </div>
        </div>

        <div className="new-visit-field new-visit-field--vertical">
          <div className="new-visit-field__label">
            <Icon name="spark" className="new-visit-field__icon" />
            <span>重點標籤</span>
          </div>
          <div className="new-visit-tag-list">
            {visitTags.map((tag) => (
              <button key={tag} className="new-visit-tag-chip" type="button">
                <span>{tag}</span>
                <Icon name="close" className="new-visit-tag-chip__icon" />
              </button>
            ))}
            <button className="new-visit-tag-chip new-visit-tag-chip--add" type="button">
              <Icon name="plus" className="new-visit-tag-chip__add-icon" />
              <span>新增</span>
            </button>
          </div>
        </div>

        <div className="new-visit-field new-visit-field--vertical">
          <div className="new-visit-field__label">
            <Icon name="note" className="new-visit-field__icon" />
            <span>貼上已清洗文字</span>
          </div>
          <div className="new-visit-textarea-shell">
            <textarea
              className="new-visit-textarea"
              defaultValue=""
              placeholder="例如：客戶提到父母照護壓力，對長照費用仍沒有概念，保費預算較保守，希望先了解基本保障與退休醫療規劃。"
              rows="7"
            />
            <span className="new-visit-textarea-shell__count">0/1000</span>
          </div>
        </div>

        <div className="new-visit-notice">
          <Icon name="shield" className="new-visit-notice__icon" />
          <span>建議僅貼上已去識別化內容，不含完整姓名、完整電話與地址。</span>
        </div>

        <div className="new-visit-field new-visit-field--vertical">
          <div className="new-visit-field__label">
            <Icon name="pencil" className="new-visit-field__icon" />
            <span>本次簡短備註</span>
          </div>
          <input className="new-visit-input" defaultValue="" placeholder="例如：客戶願意下次再訪論長照案例" />
        </div>

        <div className="new-visit-actions">
          <button className="button button--secondary button--lg new-visit-actions__button" type="button">
            只儲存
          </button>
          <Link className="button button--primary button--lg new-visit-actions__button" to="/ai-review">
            AI 整理
          </Link>
        </div>
      </section>
    </div>
  )
}
