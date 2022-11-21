import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

type ComponentProps = {
    className?: string;
};

const Hero: FC<ComponentProps> = (props) => {
    const {} = props;

    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src="/images/site/max.png"
                    width={300}
                    height={300}
                    alt=""
                />
            </div>
            <h1>Hi, I&apos;m Max</h1>
            <p>I blog about web development - especially frontend frameworks like Angular or React.</p>
        </section>
    );
};

export default Hero;
