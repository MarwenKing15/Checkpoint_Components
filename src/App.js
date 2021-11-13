import './App.css';
import {  Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedinIn, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <div className='gcontainer'>
      <Card className='container'>
        <Card.Body>
      <ProfilePhoto/>
      <br/>
      <FullName/>
      <br/>
      <Address/> 
      <br/>
      
      <ul class="social-icons">
      <li><a href="#"><FontAwesomeIcon icon={faInstagram} className='ii'></FontAwesomeIcon></a></li>
      <li><a href="#"><FontAwesomeIcon icon={faTwitter} className='ii'></FontAwesomeIcon></a></li>
      <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className='ii'></FontAwesomeIcon></a></li>
      <li><a href="#"><FontAwesomeIcon icon={faGithub} className='ii'></FontAwesomeIcon></a></li>
    </ul>
    <div className='btn_section'>
        <Col>
        <button className="btn draw-border">Follow</button>
        </Col>
        <Col>
        <button className="btn draw-border">Message</button>
        </Col>
        </div>
</Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default App;
