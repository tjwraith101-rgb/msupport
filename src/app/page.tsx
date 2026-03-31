import "./page.css";

export default function Home() {
  return (
    <main className="ms-page">
      <header className="ms-hero">
        <div className="ms-topbar">
          <a className="ms-logo" href="https://outlook.office365.com/">
            Microsoft
          </a>
          <nav className="ms-topnav">
            <a href="https://outlook.office365.com/">Outlook</a>
            <a href="https://www.office.com/">Office</a>
            <a href="https://onedrive.live.com/">OneDrive</a>
            <a href="https://account.microsoft.com/">Account</a>
          </nav>
        </div>

        <div className="ms-hero-grid">
          <section className="ms-hero-copy">
            <span className="ms-eyebrow">Microsoft Account</span>
            <h1>Work and play anywhere with one secure sign in.</h1>
            <p>
              Get instant access to Outlook, Teams, OneDrive, Office, and more
              with a single Microsoft account.
            </p>
            <div className="ms-actions">
              <a
                className="ms-btn ms-btn-primary"
                href="https://outlook.office365.com/"
              >
                Open Outlook
              </a>
              <a
                className="ms-btn ms-btn-secondary"
                href="https://account.microsoft.com/"
              >
                Manage account
              </a>
            </div>
          </section>

          <aside className="ms-signin-panel">
            <div className="ms-signin-card">
              <div className="ms-signin-header">
                <strong>Sign in</strong>
                <p>Use your email, phone, or Skype.</p>
              </div>
              <label htmlFor="ms-user">Email, phone, or Skype</label>
              <input id="ms-user" type="text" placeholder="name@example.com" />
              <button className="ms-btn ms-btn-form" type="button">
                Next
              </button>
              <p className="ms-card-note">
                By continuing, you agree to the Microsoft Services Agreement.
              </p>
            </div>
          </aside>
        </div>
      </header>

      <section className="ms-features">
        <div className="ms-section-heading">
          <span className="ms-badge">Secure access</span>
          <h2>Microsoft services connected in one place.</h2>
          <p>
            Keep your files, email, meetings, and apps working seamlessly across
            all your devices.
          </p>
        </div>
        <div className="ms-feature-grid">
          <article className="ms-feature-card">
            <h3>Outlook</h3>
            <p>
              Stay on top of email with a modern inbox that works on all your
              devices.
            </p>
          </article>
          <article className="ms-feature-card">
            <h3>OneDrive</h3>
            <p>
              Access, share, and back up files from anywhere with 1 TB of
              storage.
            </p>
          </article>
          <article className="ms-feature-card">
            <h3>Office</h3>
            <p>
              Use Word, Excel, PowerPoint, and more with a single Microsoft
              Account.
            </p>
          </article>
          <article className="ms-feature-card">
            <h3>Teams</h3>
            <p>
              Chat, call, and collaborate with colleagues and friends in one
              place.
            </p>
          </article>
        </div>
      </section>

      <section className="ms-footer-panel">
        <div className="ms-footer-inner">
          <div>
            <h3>One account for everything Microsoft.</h3>
            <p>
              Sign in once and keep working with Microsoft apps and services you
              use every day.
            </p>
          </div>
          <a
            className="ms-btn ms-btn-outline"
            href="https://outlook.office365.com/"
          >
            Go to Outlook
          </a>
        </div>
      </section>
    </main>
  );
}
