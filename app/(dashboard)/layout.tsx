import React from "react";

const Layout = ({ children } : {children:React.ReactNode} ) => {

    return (
        <div>
        <h1>Dashboard SideBar</h1>
        <h1> Dashboard Layout</h1>
        {children}
        </div>
    );
}

export default Layout;