import React from "react";
import "./OrderForm.css";
import {Button, Card, Form} from "react-bootstrap";

export default function OrderForm() {
    return <Card>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>VISA: </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Order Number: </Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
                <div className="d-grid">
                    <Button variant="primary" size="sm">
                        Order
                    </Button>
                </div>
            </Form>
        </Card.Body>
    </Card>;
}