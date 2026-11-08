import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'
import styles from './Dashboard.module.css'

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>UI Showcase Dashboard</h1>
        <div className={styles.actions}>
          <Button variant="outline">Export</Button>
          <Button>Create New</Button>
        </div>
      </header>

      <div className={styles.grid}>
        <Card title="Total Users">
          <p className={styles.stat}>12,482</p>
          <p className={styles.change}>+12.5% from last month</p>
        </Card>

        <Card title="Active Sessions">
          <p className={styles.stat}>1,847</p>
          <p className={styles.change}>+8.2% from last week</p>
        </Card>

        <Card title="Conversion Rate">
          <p className={styles.stat}>3.24%</p>
          <p className={styles.change}>-1.1% from last month</p>
        </Card>

        <Card title="Revenue">
          <p className={styles.stat}>$48,290</p>
          <p className={styles.change}>+22.4% from last month</p>
        </Card>
      </div>

      <Card title="Recent Activity" className={styles.activity}>
        <ul className={styles.list}>
          <li>User registration completed</li>
          <li>New dashboard view added</li>
          <li>Component library updated</li>
          <li>Performance optimizations applied</li>
        </ul>
      </Card>
    </div>
  )
}
