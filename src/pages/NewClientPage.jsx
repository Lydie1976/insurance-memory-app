import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/PrimaryButton'

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
    pin: (
      <>
        <path d="M12 20s5-4.9 5-9.2A5 5 0 102 10.8C2 15.1 7 20 7 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" transform="translate(3 0)" />
        <circle cx="12" cy="10.5" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    calendar: (
      <>
        <rect x="4.5" y="6" width="15" height="13.5" rx="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 4.5v3M16 4.5v3M4.5 10.2h15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    star: (
      <path d="M12 4.8l2.1 4.26 4.7.69-3.4 3.31.8 4.67L12 15.6l-4.2 2.21.8-4.67-3.4-3.31 4.7-.69L12 4.8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4.4l2.9 1.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    chat: (
      <>
        <path d="M6.5 17.8l-1.2 2.6 3.2-1.3a8.2 8.2 0 003.5.7c4.4 0 7.9-2.9 7.9-6.8S16.4 6.2 12 6.2 4.1 9 4.1 13c0 1.8.7 3.4 2.4 4.8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <circle cx="9.4" cy="12.9" r="0.8" fill="currentColor" />
        <circle cx="12" cy="12.9" r="0.8" fill="currentColor" />
        <circle cx="14.6" cy="12.9" r="0.8" fill="currentColor" />
      </>
    ),
    tag: (
      <path d="M11 4.8H7.2L3.8 8.2l7.6 7.6 8-8V4.8H15.6" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    ),
    note: (
      <>
        <path d="M7 4.8h7.6l3.4 3.4V19.2H7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M14.6 4.8v3.6h3.6M9.6 12h5.5M9.6 15.2h5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 4.5l7 2.5v5.6c0 4.2-2.8 6.8-7 8.9-4.2-2.1-7-4.7-7-8.9V7l7-2.5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.4 12.6l1.7 1.7 3.5-3.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
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

const levelOptions = ['A級', 'B級', '年度檢視']
const frequencyOptions = ['30天', '90天', '180天', '365天']
const contactOptions = ['電話', 'LINE', '面訪']
const topicTags = ['長照', '退休醫療', '年度檢視']

function FieldRow({ icon, label, children, className = '' }) {
  return (
    <div className={['new-client-field', className].filter(Boolean).join(' ')}>
      <div className="new-client-field__label">
        <Icon name={icon} className="new-client-field__label-icon" />
        <span>{label}</span>
      </div>
      <div className="new-client-field__control">{children}</div>
    </div>
  )
}

export function NewClientPage() {
  const [selectedLevel, setSelectedLevel] = useState('A級')
  const [selectedFrequency, setSelectedFrequency] = useState('30天')
  const [selectedContact, setSelectedContact] = useState('電話')

  return (
    <div className="page-stack new-client-page">
      <section className="new-client-header">
        <Link aria-label="返回客戶列表" className="new-client-header__back" to="/clients">
          <Icon name="back" className="new-client-header__back-icon" />
        </Link>
        <div className="new-client-header__copy">
          <h1>新增客戶</h1>
          <p>建立去識別化客戶資料與追蹤設定</p>
        </div>
      </section>

      <section className="panel new-client-form">
        <FieldRow icon="user" label="客戶代號">
          <input className="new-client-input" defaultValue="" placeholder="例如 C-2026-001" />
        </FieldRow>

        <FieldRow icon="user" label="暱稱 / 弱識別名稱">
          <input className="new-client-input" defaultValue="" placeholder="例如 南區王姐" />
        </FieldRow>

        <FieldRow icon="pin" label="區域標籤">
          <input className="new-client-input" defaultValue="" placeholder="例如 南區" />
        </FieldRow>

        <FieldRow icon="calendar" label="年齡區間">
          <div className="new-client-select">
            <span>50-55</span>
            <Icon name="chevronDown" className="new-client-select__icon" />
          </div>
        </FieldRow>

        <FieldRow icon="star" label="客戶等級" className="new-client-field--stack">
          <div className="new-client-segment new-client-segment--three">
            {levelOptions.map((option) => (
              <button
                key={option}
                className={['new-client-segment__item', selectedLevel === option ? 'is-active' : ''].filter(Boolean).join(' ')}
                onClick={() => setSelectedLevel(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </FieldRow>

        <FieldRow icon="clock" label="追蹤頻率" className="new-client-field--stack">
          <div className="new-client-segment new-client-segment--four">
            {frequencyOptions.map((option) => (
              <button
                key={option}
                className={['new-client-segment__item', selectedFrequency === option ? 'is-active' : ''].filter(Boolean).join(' ')}
                onClick={() => setSelectedFrequency(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </FieldRow>

        <div className="new-client-date-grid">
          <FieldRow icon="calendar" label="上次聯絡" className="new-client-field--vertical">
            <div className="new-client-date-input">
              <span>2026/05/01</span>
              <Icon name="calendar" className="new-client-date-input__icon" />
            </div>
          </FieldRow>

          <FieldRow icon="calendar" label="下次聯絡" className="new-client-field--vertical">
            <div className="new-client-date-input">
              <span>2026/05/31</span>
              <Icon name="calendar" className="new-client-date-input__icon" />
            </div>
          </FieldRow>
        </div>

        <FieldRow icon="chat" label="偏好聯絡方式" className="new-client-field--stack">
          <div className="new-client-segment new-client-segment--three">
            {contactOptions.map((option) => (
              <button
                key={option}
                className={['new-client-segment__item', selectedContact === option ? 'is-active' : ''].filter(Boolean).join(' ')}
                onClick={() => setSelectedContact(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </FieldRow>

        <FieldRow icon="tag" label="追蹤主題" className="new-client-field--stack">
          <div className="new-client-topic-list">
            {topicTags.map((tag) => (
              <button key={tag} className="new-client-topic-chip" type="button">
                <span>{tag}</span>
                <Icon name="close" className="new-client-topic-chip__icon" />
              </button>
            ))}
            <button className="new-client-topic-chip new-client-topic-chip--add" type="button">
              <Icon name="plus" className="new-client-topic-chip__add-icon" />
              <span>新增</span>
            </button>
          </div>
        </FieldRow>

        <FieldRow icon="note" label="備註" className="new-client-field--vertical">
          <textarea
            className="new-client-textarea"
            defaultValue=""
            placeholder="例如：客戶關注退休醫療規劃，偏好 LINE 聯繫。"
            rows="3"
          />
        </FieldRow>
      </section>

      <div className="new-client-note">
        <Icon name="shield" className="new-client-note__icon" />
        <span>本頁僅記錄去識別化資訊，不儲存完整姓名與完整電話。</span>
      </div>

      <div className="new-client-actions">
        <PrimaryButton className="new-client-actions__button" size="lg" to="/clients" variant="secondary">
          取消
        </PrimaryButton>
        <PrimaryButton className="new-client-actions__button" size="lg">
          儲存客戶
        </PrimaryButton>
      </div>
    </div>
  )
}
