import { DesktopHeader } from './components/DesktopHeader/DesktopHeader'

import styles from './Header.module.css'
import ToggleTheme from '../../toggle/ToggleTheme'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants'

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.header_container}>
      <DesktopHeader />
      <ToggleTheme />
      <Link style={{ marginLeft: '5px' }} to={ROUTES.PROFILE}>
        Profile
      </Link>
    </div>
  </div>
)
