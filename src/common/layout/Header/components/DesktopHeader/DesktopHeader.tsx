
import { Link } from 'react-router-dom';


import styles from './DesktopHeader.module.css';
import { ROUTES } from '../../../../../utils/constants';

export const DesktopHeader = () => {

  return (
    <div className={styles.desktop_header_container}>
      <div className={styles.desktop_header}>
        <div className={styles.menu_container}>
          <nav>
            <ul className={styles.navigation}>
              <li>
                <Link to={ROUTES.POKEMONS}>Pokemons</Link>
              </li>
              <li>
                <Link to={ROUTES.POKEDEX}>Pokedex</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  );
};
