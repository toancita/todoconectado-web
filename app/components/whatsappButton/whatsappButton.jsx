import styles from './whatsappButton.module.css';
import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = '56990723180';

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={styles.whatsappButton}
      target="_blank"
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={30}
        height={30}
        style={{ filter: 'invert(1)' }}
      />
    </a>
  );
}
