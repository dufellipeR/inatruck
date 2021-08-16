import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/inatruck-logo.png" alt="inatruck" />

        <nav>
          <ActiveLink activeClassName={styles.active} href="/company">
            <a>A EMPRESA</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/services">
            <a>SERVIÇOS</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/catalog">
            <a>CATÁLOGO</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/products">
            <a>LINHA DE PRODUTOS</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/contact">
            <a>CONTATO</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}