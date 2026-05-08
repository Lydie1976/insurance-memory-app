import { Outlet } from 'react-router-dom'
import { BottomNav } from './BottomNav'

export function AppLayout() {
  return (
    <div className="app-shell">
      <div className="phone-frame">
        <div className="phone-status" aria-hidden="true">
          <span className="phone-status__time">9:41</span>
          <div className="phone-status__icons">
            <span className="phone-status__signal">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="phone-status__wifi">
              <i />
              <i />
              <i />
            </span>
            <span className="phone-status__battery">
              <span className="phone-status__battery-body" />
              <span className="phone-status__battery-tip" />
            </span>
          </div>
        </div>
        <main className="screen-content">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
