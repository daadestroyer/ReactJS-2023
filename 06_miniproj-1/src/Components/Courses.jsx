import React from 'react'
import {Button, Card, CardBody, CardSubtitle, CardText, Container} from 'reactstrap'
export default function Courses({course}) {
  return (
    <>
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
                <CardText >{course.desc}</CardText>
                <Container className='text-center'>
                    <Button color='danger'>Delete</Button>
                    <Button color='warning ml-3'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    </>
  )
}
