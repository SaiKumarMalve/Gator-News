import React from "react";
import BasicLayout from "../../layout/BasicLayout";
import "./Home.scss";
import UF from "../../assets/png/UF.png"
export default function Home(props) {
    const{setRefreshCheckLogin} = props;
    return(
            <BasicLayout className="home" controls>
             <img  className='logo' src={UF} alt="Home" />
            </BasicLayout>
    )
}