import { Link } from 'react-router-dom'
import { FormInput } from '../components/FormInput'
import { PrimaryButton } from '../components/PrimaryButton'

export function LoginPage() {
  return (
    <div className="app-shell">
      <div className="phone-frame phone-frame--login">
        <div className="screen-content login-page">
          <div className="hero-mark">
            <div className="hero-mark__book">✦</div>
          </div>
          <header className="login-copy">
            <h1>保險顧問 AI 客戶記憶卡</h1>
            <p>記住每一次對話，讓下一次拜訪更有溫度。</p>
          </header>

          <section className="panel login-panel">
            <FormInput label="Email" placeholder="請輸入 Email" type="email" icon="✉" />
            <FormInput label="密碼" placeholder="請輸入密碼" type="password" icon="◌" />
            <div className="inline-link">
              <a href="/">忘記密碼？</a>
            </div>
            <Link className="button button--primary button--lg" to="/dashboard">
              登入
            </Link>
            <div className="divider">或</div>
            <PrimaryButton variant="secondary" size="lg">
              使用 Google 登入
            </PrimaryButton>
          </section>

          <p className="security-note">
            資料採去識別化設計，協助安全整理客戶拜訪重點。
          </p>
        </div>
      </div>
    </div>
  )
}
