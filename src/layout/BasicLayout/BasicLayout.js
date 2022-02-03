import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import LeftMenu from "../../components/LeftMenu";
import "./BasicLayout.scss";

export default function BasicLayout(props) {
    const { className, children } = props;


    return(
            <Row>
                <Col lg={3} className="basic-layout__menu">
                    <LeftMenu></LeftMenu>
                </Col>
                <Col lg={9} className="basic-layout__content">
                    {children}
                </Col>
                <col>
                </col>
            </Row>
    );
}