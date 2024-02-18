import styles from './Header.module.scss'
import mix from 'classnames'

export function Header() {
  return (
    <header className={styles.siteHeader}>

      <div className={mix(styles.wrapper, styles.siteHeader__wrapper)}>
        <a href="#" className={styles.brand}>
          Brand
        </a>
        <nav className={styles.nav}>
          <ul className={styles.nav__wrapper}>
            <li className={styles.nav__item}>
              <a href="#">Home</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#">About</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#">Services</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#">Hire us</a>
            </li>
            <li className={styles.nav__item}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
