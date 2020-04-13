import React from 'react';
import {ListGroup} from 'react-bootstrap';

function ListItem({quote}) {
  console.log(quote)
  return (
    <ListGroup>
      <ListGroup.Item>{quote.en || 'No title'}</ListGroup.Item>
      <ListGroup.Item>{quote.author || 'No content'}</ListGroup.Item>
    </ListGroup>
  )
}
export default ListItem;