import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
const Player = ({pro:{pic,name,number,team,nationality,age} ,fun} ) => {
    return (
        <React.Fragment>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>  age : {age}  </p>
                        <p> number : {number} </p>
                        <p> nationality : {nationality} </p>
                        <p> team :  {team}</p>
                        <p></p>
                    </Card.Text>
                    <Button variant="primary" onClick={() => fun(name)} > show my name</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}
Player.defaultProps = {
    pro : {name: 'azer',
    age: 42,
    number : 7,
    team: `club african`,}
   };
export default Player




