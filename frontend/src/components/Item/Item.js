import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import "./Item.css";
import PopupOrderForm from "../PopupOrderForm/PopupOrderForm";

export default function Item() {
    const [orderFormShow, setOrderFormShow] = useState(false);

    return <>
        <PopupOrderForm show={orderFormShow}
                        onHide={() => setOrderFormShow(false)}/>
        <Card className="shadow d-grid p-2" style={{width: '13rem'}}>
            <Card.Img variant="top" src="./images/image.jpg"/>
            <Card.Body className="text-center">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <div className="d-grid">
                    <Button variant="primary" size="sm" onClick={() => setOrderFormShow(true)}>
                        Order
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </>;
}