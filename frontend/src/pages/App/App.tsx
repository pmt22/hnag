import React from 'react';
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import ListItem from "../../components/ListItem/ListItem";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col sm={2}>col-left</Col>
                <Col sm={10}>
                    <ListItem/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
