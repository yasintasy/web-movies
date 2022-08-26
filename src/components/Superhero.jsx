import { Card, Row, Col, Container, Image } from "react-bootstrap"
import Antman from '../assets/marvel/antman.jpeg'
import Avengers from '../assets/marvel/avengers.jpeg'
import Batman from '../assets/marvel/batman.jpeg'
import Ironman from '../assets/marvel/ironman.jpeg'
import Shangchi from '../assets/marvel/shangchi.jpeg'
import Spiderman from '../assets/marvel/spiderman.jpeg'

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-dark">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id='superhero'>
            <Card className="movieImage">
              <Image src={Antman} alt="Antman" className='images' />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Antman</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={Avengers} alt="Avengers" className='images' />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Avengers</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={Batman} alt="Batman" className='images' />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Batman</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={Ironman} alt="Ironman" className='images' />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Iron Man</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={Shangchi} alt="Shangchi" className='images' />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Shangchi</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper" >
            <Card className="movieImage">
              <Image src={Spiderman} alt="Spiderman" className='images' />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Spiderman</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>


  )
}

export default Superhero
