import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function Search(props) {
    return (
        <Container className='mt-4'>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <Form onSubmit={props.handleSubmit}>
                        <Row>
                            <Col xs={9}>
                                <Form.Control
                                type="text"
                                vakue={props.word}
                                onChange={(word) => props.setWord}
                                placeholder="Search for ne image" 
                                />
                            </Col>
                            <Col>
                                <Button variant="success" type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Search