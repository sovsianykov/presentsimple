import React from "react";



import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, InputGroup, Button, FormControl} from "react-bootstrap";



function About() {

    const go1 = () => {
        let row1 = document.querySelector('#input1');
        let response = document.querySelector('#response');
        response.innerHTML = '';
        let string1 = row1.value.toUpperCase()
        let arr1 = string1.split(' ')
        if ((arr1[0] === 'I')||(arr1[0] === 'YOU')||(arr1[0] === 'SHE')||(arr1[0] === 'HE')||(arr1[0] === 'WE')||(arr1[0] === 'THEY')) {
            arr1.splice(2, 0 , "NOT")
        } else if ((arr1[0] === `I'M`)||(arr1[0] === `YOU'RE`)||(arr1[0] === `SHE'S`)||(arr1[0] ===` HE'S`)||(arr1[0] === `WE'RE`)||(arr1[0] === `THEY'RE`)) {
            arr1.splice(1, 0 , "NOT")

            arr1[2] = arr1[2].slice(0, -1)
        } else {
             response.innerHTML = "Please, type correct sentence in Present Continuous Tense"

            return
        }
        arr1.forEach(el => {
            row1.nodeValue = '';
            let newdiv = document.createElement('span')
            newdiv.innerHTML = el + " "
            response.appendChild(newdiv)
        })
    }
    const question = () => {
        let row1 = document.querySelector('#input1');
        let responseQ = document.querySelector('#responseQ');
        responseQ.innerHTML = '';
        let string1 = row1.value.toUpperCase();
        let arr1 = string1.split(' ');
        let verb = arr1[1]
        if ((arr1[0] === 'I')||(arr1[0] === 'YOU')||(arr1[0] === 'SHE')||(arr1[0] === 'HE')||(arr1[0] === 'WE')||(arr1[0] === 'THEY')) {

            arr1.splice(1, 1 )
            arr1.unshift(verb)
        } else if ((arr1[0] === `I'M`)||(arr1[0] === `YOU'RE`)||(arr1[0] === `SHE'S`)||(arr1[0] ===` HE'S`)||(arr1[0] === `WE'RE`)||(arr1[0] === `THEY'RE`)) {
            arr1.unshift(verb)
        } else {
            responseQ.innerHTML = "Please, type correct sentence in Present Continuous Tense"
            return
        }
        arr1.forEach(el => {
            row1.nodeValue = '';
            let newdiv = document.createElement('span');
            newdiv.innerHTML = el + " ";
            responseQ.appendChild(newdiv);
        })
        const symbolQ = document.createElement('span');
        symbolQ.innerHTML = ' ?';
        responseQ.appendChild(symbolQ);
    }
    const clear1 =() => {
        let row1 = document.querySelector('#input1');
        row1.value = '';
        let response = document.querySelector('#response');
        response.innerHTML = '';
        let responseQ = document.querySelector('#responseQ');
        responseQ.innerHTML = '';





    }

    return (
        <div className="App">
            <Container className='small'>
                <Card id = 'card'>

                    <Card.Body  >
                        <h1>Present Continuous Exercises</h1>
                        <h3>Input some sentence in <span> present continuous  </span> tense,</h3>
                        <h4>starting with <span>I, You, He, She, We, They  </span> or  with
                            <span>I'm, You're, He's, She's, We're, They're  </span></h4>

                        <InputGroup className="mb-3 i-1">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Input the sentence</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id='input1'/>
                        </InputGroup>
                    </Card.Body>
                    <Card.Body>
                        <Button variant='info' onClick = {go1}  >Negative form</Button>
                        <Button variant='danger' onClick = {clear1 } id ='cl' >Clear</Button>
                        <div id="response">
                        </div>
                    </Card.Body>
                    <Card.Body>
                        <Button variant='info' onClick = {question}  >Question form</Button>
                        <Button variant='danger' onClick = {clear1 } id ='cl1' >Clear</Button>
                        <div id="responseQ">
                        </div>
                    </Card.Body>

                </Card>
            </Container>
        </div>
    );
}



export default About
