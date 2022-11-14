import React, { FC, Fragment, ReactNode } from 'react';
import MainHeader from '../main-header';

type ComponentProps = {
    className?: string;
    children: ReactNode;
};

const Layout: FC<ComponentProps> = (props) => {
    const { className } = props;

    return (
        <Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;
