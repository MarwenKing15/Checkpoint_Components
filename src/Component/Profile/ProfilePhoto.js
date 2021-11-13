import React from 'react';
import { Row,Col,Image } from 'react-bootstrap';
import profile_photo from '../assets/profile_photo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StyleProfilePhoto.css';



function ProfilePhoto() {
  return (
    <div>
        <Row>
    <Col xs={6} md={4}>
      <Image className='img' src={profile_photo} roundedCircle />
    </Col>
  </Row>
    </div>
  );
}

export default ProfilePhoto;
