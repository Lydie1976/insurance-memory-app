import { NavLink } from 'react-router-dom'

function NavIcon({ name, className = '' }) {
  const icons = {
    home: (
      <path
        d="M4.5 10.5L12 4l7.5 6.5v8a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18.5v-8z"
        fill="currentColor"
      />
    ),
    users: (
      <>
        <circle cx="9" cy="10" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="11.2" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 18c1.2-2.6 3-4 5.5-4s4.3 1.4 5.5 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M14.4 16c.5-1.4 1.6-2.4 3.4-2.4 1.2 0 2.2.4 3 1.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    plus: (
      <path d="M12 6v12M6 12h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16.8 7.2l2.6-2.6M16.8 7.2l-1.1 4.5 4.5-1.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </>
    ),
    settings: (
      <>
        <path
          d="M12 4.5l1.2 1.1a2 2 0 002 .36l1.55-.58 1.52 2.64-1.2 1a2 2 0 00-.61 1.93l.24 1.6-.24 1.6a2 2 0 00.61 1.93l1.2 1-1.52 2.64-1.55-.58a2 2 0 00-2 .36L12 19.5l-1.2-1.1a2 2 0 00-2-.36l-1.55.58-1.52-2.64 1.2-1a2 2 0 00.61-1.93l-.24-1.6.24-1.6a2 2 0 00-.61-1.93l-1.2-1 1.52-2.64 1.55.58a2 2 0 002-.36L12 4.5z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="12" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {icons[name]}
    </svg>
  )
}

const navItems = [
  { to: '/dashboard', label: '首頁', icon: 'home' },
  { to: '/clients', label: '客戶', icon: 'users' },
  { to: '/visits/new', label: '新增', icon: 'plus' },
  { to: '/follow-up', label: '追蹤', icon: 'target' },
  { to: '/ai-review', label: '設定', icon: 'settings' },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="底部導覽">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          className={({ isActive }) =>
            ['bottom-nav__item', item.label === '新增' ? 'bottom-nav__item--plus' : '', isActive ? 'is-active' : '']
              .filter(Boolean)
              .join(' ')
          }
          to={item.to}
        >
          <span className="bottom-nav__icon">
            <NavIcon name={item.icon} className="bottom-nav__icon-svg" />
          </span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
