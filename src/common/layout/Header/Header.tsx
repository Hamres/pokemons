import { DesktopHeader } from './components/DesktopHeader/DesktopHeader';


import styles from './Header.module.css';
import ToggleTheme from '../../toggle/ToggleTheme';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.header_container}>
      <DesktopHeader />
      <ToggleTheme  />
    </div>
  </div>
);