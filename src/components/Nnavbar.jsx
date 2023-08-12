import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'

import Form from 'react-bootstrap/Form';









function Nnavbar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (


    <>
    
       
      <Nav className="justify-content-end , alllinks" activeKey="/home" >
        
      <Nav.Item className='mylinks'>
         <Nav.Link ><Link to='/' >Home</Link></Nav.Link>
        </Nav.Item >
        <Nav.Item className='mylinks'>
        <Nav.Link > <Link to='/movies'>Movies</Link></Nav.Link>
        </Nav.Item >
        <Nav.Item className='mylinks'>
          <Nav.Link ><Link to='/series'>Series</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className='mylinks'> 
          <Nav.Link  ><Link to='/cartoons'>Cartoons</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className='mylinks'> 
        <Nav.Link ><Link to='/reviews'>Reviews</Link></Nav.Link>
        </Nav.Item>
       <Button variant="primary" onClick={handleShow} className='btn1'>
        SignUp
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>GET STARTED </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='off'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
      </Nav>
    </>
  );
}

export default Nnavbar ;