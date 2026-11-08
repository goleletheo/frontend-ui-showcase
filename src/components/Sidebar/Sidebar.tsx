import styles from './Sidebar.module.css'

const navItems = [
  { label: 'Dashboard', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Analytics', href: '#' },
  { label: 'Settings', href: '#' },
]

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>UI Showcase</div>
      <nav>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className={styles.navItem}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
