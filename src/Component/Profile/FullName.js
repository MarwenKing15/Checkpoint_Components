import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StyleFullName.css';

function FullName() {
    return(
        <div>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='name'>
                            <Card.Title>Marwen Touati</Card.Title>
                        </Card.Body>
                     </Card>
                </Col>
            </Row>
        </div>
        
    )
}
export default FullName;