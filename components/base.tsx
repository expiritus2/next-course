import React, { FC } from 'react';

type ComponentProps = {
    className?: string;
};

const Base: FC<ComponentProps> = (props) => {
    const {}  = props;

    return (
        <div>
            <h1>Base</h1>
        </div>
    );
};

export default Base;
