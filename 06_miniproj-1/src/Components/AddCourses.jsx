import React from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'

export default function AddCourses() {
  return (
    <>
        <h1 className='text-center my-3'>Fill Course Details</h1>
        <Form>
            <FormGroup>
                <b><label>Course Id:</label></b>
                <Input type='text' placeholder='Enter here' name='courseId' id='courseId'></Input>
            </FormGroup>
            <FormGroup>
                <b><label>Course Title:</label></b>
                <Input type='text' placeholder='Enter here' name='courseTitle' id='courseTitle'></Input>
            </FormGroup>
            <FormGroup>
                <b><label>Course Description</label></b>
                <Input style={{height:'100px'}} type='textarea' placeholder='Enter here' name='courseDesc' id='courseDesc'></Input>
            </FormGroup>
            <Container className='text-center'>
                <Button color='success'>Add Course</Button>
                <Button color='warning ml-3'>Clear</Button>
            </Container>
        </Form>
    </>
  )
}
