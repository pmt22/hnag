import React from "react";
import {Button, Form, Modal} from "react-bootstrap";

export default function PopupOrderForm(props) {
    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                ORDER FORM
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>VISA: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Order Number: </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control type="number" placeholder="1" min="1"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Notes: </Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
            </Form>
            <div className="d-grid">
                <Button variant="primary" size="sm">
                    Order
                </Button>
            </div>
        </Modal.Body>
    </Modal>;
}