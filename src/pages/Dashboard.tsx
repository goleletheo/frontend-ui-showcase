import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'
import { Badge } from '../components/Badge/Badge'
import styles from './Dashboard.module.css'

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <h1>UI Showcase Dashboard</h1>
          <p className={styles.subtitle}>React + TypeScript component library demo</p>
        </div>
        <div className={styles.actions}>
          <Button variant="outline">Export</Button>
          <Button>Create New</Button>
        </div>
      </header>

      <div className={styles.grid}>
        <Card title="Total Users">
          <p className={styles.stat}>12,482</p>
          <Badge variant="success">+12.5%</Badge>
        </Card>

        <Card title="Active Sessions">
          <p className={styles.stat}>1,847</p>
          <Badge variant="success">+8.2%</Badge>
        </Card>

        <Card title="Conversion Rate">
          <p className={styles.stat}>3.24%</p>
          <Badge variant="warning">-1.1%</Badge>
        </Card>

        <Card title="Revenue">
          <p className={styles.stat}>$48,290</p>
          <Badge variant="success">+22.4%</Badge>
        </Card>
      </div>

      <Card title="Recent Activity" className={styles.activity}>
        <ul className={styles.list}>
          <li><Badge variant="default">New</Badge> User registration completed</li>
          <li><Badge variant="success">Updated</Badge> Component library refreshed</li>
          <li><Badge variant="default">New</Badge> Dashboard view added</li>
          <li><Badge variant="success">Optimized</Badge> Performance improvements applied</li>
        </ul>
      </Card>
    </div>
  )
}
