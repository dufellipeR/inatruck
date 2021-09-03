import Image from 'next/image';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.contentFooter}>
        <div className={styles.containerTop}>
          <div className={styles.initialTop}>
            <Image src="/images/logo-escrito.png" alt="logo-escrito" width={200} height={50} />
            <p>INATRUCK IND. COM. DE AUTOPEÇAS EIRELI EPP</p>
            <p>Rua Blumenau, Número 4920, Bairro Araponguinhas - Timbó - Santa Catarina </p>
          </div>
          <div className={styles.endTop}>
            <div>
              <p>Inatruck</p>
              <ul>
                <li>Home</li>
                <li>Fale Conosco</li>
              </ul>
            </div>
            <div>
              <p>Serviços</p>
              <ul>
                <li>Projetos Customizados</li>
                <li>Rede Logística</li>
                <li>Compra e Venda</li>
              </ul>
            </div>
            <div>
              <p>Produtos</p>
              <ul>
                <li>Linha de Produto</li>
                <li>Catálogo Virtual</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.containerLogos}>
            <Image src="/images/dudu-logo.png" alt="Dudu Logo" width={40} height={40} />
            <Image src="/images/rocket-logo.png" alt="Rocket Logo" width={170} height={50} />
          </div>
          <div className={styles.containerContact}>
            <h2>(47) 3382-4161</h2>
            <p>inatruck@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}