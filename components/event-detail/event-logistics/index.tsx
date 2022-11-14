import AddressIcon from '../../icons/address-icon';
import DateIcon from '../../icons/date-icon';
import Image from 'next/image';
import LogisticsItem from '../logistics-item';
import styles from './index.module.css';
import { FC } from 'react';

type ComponentProps = {
  className?: string;
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

const EventLogistics: FC<ComponentProps> = (props) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;