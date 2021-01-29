
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, InputGroup, Button, FormControl} from "react-bootstrap";



function App() {

     const go = () => {
         let row1 = document.querySelector('#input1');
          let response = document.querySelector('#response');
         response.innerHTML = '';
         let string1 = row1.value.toUpperCase()
         let arr1 = string1.split(' ')
         if ((arr1[0] === 'I')||(arr1[0] === 'YOU')||(arr1[0] === 'WE')||(arr1[0] === 'THEY')) {
            arr1.splice(1, 0 , " DON'T ")
         } else if ((arr1[0] === 'HE')||(arr1[0] === 'SHE')) {
             arr1.splice(1, 0 , " DOESN'T ")
         } else {
             response.innerHTML = "Please, type correct sentence in Present Simple Tense"
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
        if ((arr1[0] === 'I')||(arr1[0] === 'YOU')||(arr1[0] === 'WE')||(arr1[0] === 'THEY')) {
            arr1.splice(0, 0 , " DO ");
        } else if ((arr1[0] === 'HE')||(arr1[0] === 'SHE')) {
            arr1.splice(0, 0 , " DOES ")
        } else {
            responseQ.innerHTML = "Please, type correct sentence in Present Simple Tense"
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
    const clear =() => {
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
                  <h1>Present Simple Exercises</h1>
                  <h3>Input some sentence in <span> present simple  </span> tense,</h3>
                  <h4>starting with <span>I, You, He, She, We, They </span></h4>

                  <InputGroup className="mb-3 i-1">
                      <InputGroup.Prepend>
                          <InputGroup.Text>Input the sentence</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl id='input1'/>
                  </InputGroup>
              </Card.Body>
              <Card.Body>
                  <Button variant='info' onClick = {go.bind()}  >Negative form</Button>
                  <Button variant='danger' onClick = {clear.bind() } id ='cl' >Clear</Button>
                  <div id="response">
                  </div>
              </Card.Body>
              <Card.Body>
                  <Button variant='info' onClick = {question.bind()}  >Question form</Button>
                  <Button variant='danger' onClick = {clear.bind() } id ='cl1' >Clear</Button>
                  <div id="responseQ">
                  </div>
              </Card.Body>

          </Card>
      </Container>
    </div>
  );
}

export default App;
