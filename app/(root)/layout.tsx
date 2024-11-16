import React from "react";

const Layout = ({ children } : {children:React.ReactNode} ) => {

    return (
        <div>
        <h1>Dashboard Root Navbar</h1>
        <h1> Root Layout</h1>
        {children}
        </div>
    );
}

export default Layout;