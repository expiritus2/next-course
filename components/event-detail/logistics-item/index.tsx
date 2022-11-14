import styles from './index.module.css';
import { FC, ReactNode } from 'react';

type ComponentProps = {
    className?: string;
    icon: Function;
    children: ReactNode;
};

const LogisticsItem: FC<ComponentProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
