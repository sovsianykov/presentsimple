
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, InputGroup, Button, FormControl} from "react-bootstrap";



function App() {

     const go = () => {
         let row1 = document.querySelector('#input1')
          let response = document.querySelector('#response')
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
             let newdiv = document.createElement('span')
             newdiv.innerHTML = el + " "
             response.appendChild(newdiv)

         })



    }
    const clear =() => {
        let response = document.querySelector('#response')
        response.innerHTML = '';


    }

  return (
    <div className="App">
      <Container className='small'>
          <Card id = 'card'>

              <Card.Body  >
                  <h1>Present Simple Exercises</h1>
                  <h3>Input some sentence in <span> present simple  </span> tense,</h3>
                  <h4>starting with <span>I, You, He, She, We, They </span></h4>

                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                          <InputGroup.Text>Input the sentence</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl id='input1'/>
                  </InputGroup>

                  <Button variant='info' onClick = {go.bind()}  >Negative form</Button>
                  <Button variant='danger' onClick = {clear.bind() } id ='cl' >Clear</Button>

                  <div id="response">

                 </div>
              </Card.Body>
          </Card>
      </Container>
    </div>
  );
}

export default App;
