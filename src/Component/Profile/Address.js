import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StyleAddress.css';


function Address() {
    return(
        <div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='address'>
                            <Card.Title>Grombalia, Nabeul, Tunisia</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        
    )
}
export default Address;