import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default Index;