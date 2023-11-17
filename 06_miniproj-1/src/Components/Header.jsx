import React from 'react'
import { Card, CardBody } from 'reactstrap'

export default function Header() {
  return (
    <>
       <div className="container mt-3">
       <Card className='my-2 bg-dark text-light'>
            <CardBody>
                <h1 className='text-center my-2'>Welcome to The CodersTV</h1>
            </CardBody>
        </Card>
       </div>
    </>
  )
}
