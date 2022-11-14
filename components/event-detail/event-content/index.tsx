import styles from './index.module.css';
import { FC, ReactNode } from 'react';

type ComponentProps = {
  className?: string;
  children: ReactNode;
};

const EventContent: FC<ComponentProps> = (props) => {
  return (
    <section className={styles.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
