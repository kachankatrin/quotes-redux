import React from 'react';
import {ListGroup, Form} from 'react-bootstrap';
import LanguageContext from '../LanaguageContext';

function ListItem({quote}) {
  console.log(quote)
  return (
    <ListGroup>
      <ListGroup.Item>
      <LanguageContext.Consumer>
      {(value) => quote[value] || 'Jedno'}
        
      </LanguageContext.Consumer>
      </ListGroup.Item>
      <ListGroup.Item>{quote.author || 'No content'}</ListGroup.Item>
    </ListGroup>
  )
}
export default ListItem;

// function ReviewForm(props) {
//   return(
//     <div>
//     <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>
//     <LanguageContext.Consumer>
//       {(value) => translations.titleText[value]}
//     </LanguageContext.Consumer>
//     </Form.Label>
//     <Form.Control as="textarea" rows="3" />
//   </Form.Group>
//   <Button>
//   <LanguageContext.Consumer>
//     {(value) => translations.buttonText[value]}
//   </LanguageContext.Consumer>
//   </Button>
//     </div>
//   )
// }