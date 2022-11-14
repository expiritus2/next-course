import styles from './index.module.css';
import { FC } from 'react';

type ComponentProps = {
    className?: string;
    title: string;
};


const EventSummary: FC<ComponentProps> = (props) => {
  const { title } = props;

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
