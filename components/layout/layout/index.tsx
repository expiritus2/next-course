import React, { FC, Fragment, ReactNode } from 'react';
import { MainNavigation } from 'components/index';

type ComponentProps = {
    className?: string;
    children: ReactNode;
};

const Layout: FC<ComponentProps> = (props) => {
    const { children }  = props;

    return (
        <Fragment>
            <MainNavigation />
            <main>{children}</main>
        </Fragment>
    );
};

export default Layout;
