import React from 'react';
import {ListGroup} from 'react-bootstrap';

function CreatePages(props) {
console.log(props, 'propssss')
  let arr = [];
  for (let i = 1; i <= props.allPages; i++) {
    arr.push(i)
  }
  const numeratedList = arr.map(item => <ListGroup.Item className='page' value={item} onClick={() => props.handlePagination(item)}>{item}</ListGroup.Item>)
  const newLi = arr.length > 1 
  ?  <ListGroup className='pagination'>
      <ListGroup.Item className='page' value='0' id="prev" onClick={() => props.handlePagination(props.currentPage > 1 ? props.currentPage-1 : props.currentPage)}>Prev</ListGroup.Item>
      {numeratedList}
      <ListGroup.Item className='page' value='' id='next' onClick={() => props.handlePagination(props.currentPage < props.allPages ? props.currentPage+1 : props.currentPage)}>Next</ListGroup.Item></ListGroup>
  : null;
  console.log(props.allPages, 'props')
  console.log('this')
  return (
    arr.length > 0 ? newLi : null
  )
}

export default CreatePages;