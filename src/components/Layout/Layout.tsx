import React, { Children } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchInput from '../Navbar/SearchInput';

type LayoutProps = {
    // user: any;
    children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({children}) => {
    
    return (
        <>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        </>
    )
}
export default Layout;
