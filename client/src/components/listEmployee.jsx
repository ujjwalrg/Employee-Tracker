import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const ListEmployee = () => {
    return(
    <Card className = 'listEmployee'>
  <Card.Img variant="top" src='../images/zahir-namane-hwc7eIQiTCE-unsplash.jpg' className='card-image' />
  <Card.Body className='cardbody'>
    <Card.Title className="cardtitle"><b>Ujjwal Gautam</b></Card.Title>
    <Card.Subtitle >Software Engineer</Card.Subtitle>
    <Card.Subtitle>Fl, USA</Card.Subtitle>
    <Card.Subtitle><span>(808)-218-2939</span></Card.Subtitle>
    <Card.Text style={{margin: '0px', }} >
      <span style={{color:'blue', fontWeight:'bolder'}}>Skills:</span> <i>HTML, CSS, JavaScript</i>
    </Card.Text>
    <Card.Text ><span style={{color:'purple', fontWeight:'bolder'}}>Salary:</span> <b>150000/yr</b></Card.Text>
  </Card.Body>
  <Button variant="outline-primary" className='card-button'>Edit</Button>
    <Button variant="danger" className='card-button'>Delete</Button>
</Card>)
}


export default ListEmployee;