import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Menu() {
  return (
    <>
        <ListGroup className='mt-5' style={{boxShadow:'5px 5px 10px gray'}} >
            <Link  className='list-group-item list-group-item-action' tag="a" to="/" action>Home</Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/add-courses" action>Add Course</Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/all-courses" action>View Course</Link>
            <Link className='list-group-item list-group-item-action' tag="a" to="/contacts-us" action>Contact Us</Link>
        </ListGroup>
    </>
  )
}
