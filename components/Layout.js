import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/rewards">Rewards</Link></li>
          <li><Link href="/history">History</Link></li>
          <li><Link href="/branches">Branches</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        .layout {
          display: flex;
          min-height: 100vh;
        }
        nav {
          width: 200px;
          background: #f4f4f4;
        }
        main {
          flex: 1;
          padding: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
}
