import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='container-fluid p-5'>
<Row>
  <Col className='d-flex flex-column justify-content-center'>
  <h1>Media Player</h1>
  <p style={{textAlign:'justify'}}>conversations about the potential existence of extraterrestrial life. Emphasising the rapid advancements
     in human technology, the ISRO chief suggests
     that the existence of alien civilizations is not just possible but likely across</p>
<div className='d-grid'>
<Link to={'/dach'} className='text-white btn btn-info'>Let's Go</Link>
</div>
  </Col>
  <Col>
  <img src="https://niceillustrations.com/wp-content/uploads/2020/12/Youtube-Studio-color-800px.png" className='img-fluid p-5' alt="" />
  </Col>
</Row>
</div>


<div className='container-fluid p-5 mt-3'>
  <h4 className='text-center mb-3'>Features</h4>
    <div className=' row justify-content-around'>
    

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://media4.giphy.com/media/FAcgzV1pXYcykAxSRO/giphy.gif?cid=6c09b952vzq77tdegqcdzhpa4xeo1zy9hu8vuy5xilubsz07&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      <Card.Body>
        <Card.Title>Simple Upload</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media1.giphy.com/media/ZLzoRhhJ5FGMI3tzhv/giphy.gif?cid=6c09b9520vov42wdg3r87tcn8rlz05vx6b6tvm44o5gcydqn&ep=v1_gifs_search&rid=giphy.gif&ct=g" height={'200px'} />
      <Card.Body>
        <Card.Title>Watch Views</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/b1/78/91/b17891532e7152972f31566420156845.gif" height={'200px'}/>
      <Card.Body>
        <Card.Title>Categorized Uplods</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>

<div className='p-5 container-fulid'>
  <Row>
    <Col md={8}>
    <h2>Simple And Faster</h2>
    <p style={{textAlign:'justify'}}>Antony Matheus dos Santos (born 24 February 2000), known mononymously as Antony (Brazilian Portuguese pronunciation: [ˈɐ̃tɔni]),[3] is a Brazilian professional footballer who plays as a right
       winger for Premier League club Manchester United and the Brazil national team.</p>

    </Col>
    <Col md={4}>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/j5r_Dgh9QkI?si=HCEn4vjsZhirW11O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Col>
  </Row>
</div>
</>


  )
}

export default Landing