import React from "react";

import "./BasicLayout.scss";

export default function BasicLayout(props) {
    console.log(props);
    const { children } = props;


    return(
        <div>
            <h2>MENU...</h2>
            {children}
        </div>
    )
}