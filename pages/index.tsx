import React, { FC } from 'react';

type ComponentProps = {
    className?: string;
};

const HomePage: FC<ComponentProps> = (props) => {
    const {} = props;

    return (
        <div>
            <h1>HomePage</h1>
        </div>
    );
};

export default HomePage;
