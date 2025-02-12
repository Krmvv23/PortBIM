import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../css/milestones.scss";

const Milestones = () => {
    return (
        <div className='milestones'>
            <Container className='h-100 '>
                <div className='d-flex align-items-center h-100 w-100'>
                <Row className='w-100'>
                    <Col md={4} className='text-center text-md-start mb-5 mb-md-0'>
                        <div>
                            <div className='d-inline'>
                                <p className='milestones-count'>100%</p>
                                <p className='milestones-text'>employee-owned</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='text-center text-md-start mb-5 mb-md-0'>
                        <div>
                            <div className='d-inline'>
                                <p className='milestones-count'>75+</p>
                                <p className='milestones-text'>offices worldwide</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='text-center text-md-start mb-5 mb-md-0'>
                        <div>
                            <div className='d-inline'>
                                <p className='milestones-count'>Top 5%</p>
                                <p className='milestones-text'>of U.S. AEC firms for safety</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default Milestones