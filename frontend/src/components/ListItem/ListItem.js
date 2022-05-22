import React from "react";
import {Container, Row} from "react-bootstrap";
import Item from "../Item/Item";

export default function ListItem() {
    const arrItems = [1, 2, 3, 4];
    return <Container fluid>
        <Row className="gap-3">
            {arrItems.map(item => {
                return  <Item/>;
            })}
        </Row>
    </Container>;
}