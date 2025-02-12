import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Slider from 'react-slick';
import "../css/homeProjects.scss";

const Projects = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const navSliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 3,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className='home-projects'>
            <Container>
                <div className="home-projects-header d-flex align-items-center justify-content-between mb-4">
                    <h2 className='header-underline'>Our Projects</h2>
                    <Link href={"/"}><span>See More</span><MdKeyboardArrowRight className="fs-4" /></Link>
                </div>
            </Container>

            <div>
                <Container>
                    <Slider
                        slidesToShow={1}
                        arrows={false}
                        fade={true}
                        swipeToSlide={false}
                        swipe={false}
                        className='home-projects-top-slider'
                        asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                        <div className='top-slider-item '>
                            <div className='row h-100 position-relative'>
                                <div className='col-12 col-lg-5 top-slider-item-img'>
                                    <img src='../img/projects-example.jpg' />
                                </div>
                                <div className='col-12 col-lg-7 top-slider-item-body'>
                                    <h3>Aliqua incididunt consequat non irure.</h3>
                                    <p> Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit aliqua exercitation adipisicing eu. Adipisicing deserunt sint aliqua dolor amet est esse duis occaecat deserunt aliqua id esse fugiat. Magna id laboris officia id ut reprehenderit enim non id commodo nisi sunt. Voluptate magna incididunt sint non. Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit</p>
                                </div>
                            </div>
                        </div>
                        <div className='top-slider-item '>
                            <div className='row h-100 position-relative'>
                                <div className='col-12 col-lg-5 top-slider-item-img'>
                                    <img src='../img/projects-example-2.jpg' />
                                </div>
                                <div className='col-12 col-lg-7 top-slider-item-body'>
                                    <h3>Aliqua incididunt consequat non irure.</h3>
                                    <p> Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit aliqua exercitation adipisicing eu. Adipisicing deserunt sint aliqua dolor amet est esse duis occaecat deserunt aliqua id esse fugiat. Magna id laboris officia id ut reprehenderit enim non id commodo nisi sunt. Voluptate magna incididunt sint non. Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit</p>
                                </div>
                            </div>
                        </div>
                        <div className='top-slider-item '>
                            <div className='row h-100 position-relative'>
                                <div className='col-12 col-lg-5 top-slider-item-img'>
                                    <img src='../img/projects-example.jpg' />
                                </div>
                                <div className='col-12 col-lg-7 top-slider-item-body'>
                                    <h3>Aliqua incididunt consequat non irure.</h3>
                                    <p> Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit aliqua exercitation adipisicing eu. Adipisicing deserunt sint aliqua dolor amet est esse duis occaecat deserunt aliqua id esse fugiat. Magna id laboris officia id ut reprehenderit enim non id commodo nisi sunt. Voluptate magna incididunt sint non. Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit</p>
                                </div>
                            </div>
                        </div>
                        <div className='top-slider-item '>
                            <div className='row h-100 position-relative'>
                                <div className='col-12 col-lg-5 top-slider-item-img'>
                                    <img src='../img/projects-example-2.jpg' />
                                </div>
                                <div className='col-12 col-lg-7 top-slider-item-body'>
                                    <h3>Aliqua incididunt consequat non irure.</h3>
                                    <p> Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit aliqua exercitation adipisicing eu. Adipisicing deserunt sint aliqua dolor amet est esse duis occaecat deserunt aliqua id esse fugiat. Magna id laboris officia id ut reprehenderit enim non id commodo nisi sunt. Voluptate magna incididunt sint non. Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit</p>
                                </div>
                            </div>
                        </div>
                        <div className='top-slider-item '>
                            <div className='row h-100 position-relative'>
                                <div className='col-12 col-lg-5 top-slider-item-img'>
                                    <img src='../img/projects-example.jpg' />
                                </div>
                                <div className='col-12 col-lg-7 top-slider-item-body'>
                                    <h3>Aliqua incididunt consequat non irure.</h3>
                                    <p> Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit aliqua exercitation adipisicing eu. Adipisicing deserunt sint aliqua dolor amet est esse duis occaecat deserunt aliqua id esse fugiat. Magna id laboris officia id ut reprehenderit enim non id commodo nisi sunt. Voluptate magna incididunt sint non. Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit</p>
                                </div>
                            </div>
                        </div>
                        <div className='top-slider-item '>
                            <div className='row h-100 position-relative'>
                                <div className='col-12 col-lg-5 top-slider-item-img'>
                                    <img src='../img/projects-example-2.jpg' />
                                </div>
                                <div className='col-12 col-lg-7 top-slider-item-body'>
                                    <h3>Aliqua incididunt consequat non irure.</h3>
                                    <p> Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit aliqua exercitation adipisicing eu. Adipisicing deserunt sint aliqua dolor amet est esse duis occaecat deserunt aliqua id esse fugiat. Magna id laboris officia id ut reprehenderit enim non id commodo nisi sunt. Voluptate magna incididunt sint non. Exercitation excepteur magna in aliqua sunt. Eu duis esse do ad esse elit Lorem qui duis ut quis ex cillum. Aliquip deserunt ullamco duis dolore non elit eu commodo magna tempor dolore ut tempor. Excepteur reprehenderit</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Container>
                <Slider
                    className='home-projects-nav-slider'
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    {...navSliderSettings}
                >
                    <div className='nav-slider-item '>
                        <div className='position-relative rounded overflow-hidden'>
                            <div className='row h-100 '>
                                <div className='nav-slider-item-img'>
                                    <img src='../img/projects-example.jpg' />
                                </div>
                                <div className=' nav-slider-item-body'>
                                    <p>Aliqua incididunt consequat non irure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-slider-item '>
                        <div className='position-relative rounded overflow-hidden'>
                            <div className='row h-100 '>
                                <div className='nav-slider-item-img'>
                                    <img src='../img/projects-example-2.jpg' />
                                </div>
                                <div className=' nav-slider-item-body'>
                                    <p>Aliqua incididunt consequat non irure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-slider-item '>
                        <div className='position-relative rounded overflow-hidden'>
                            <div className='row h-100 '>
                                <div className='nav-slider-item-img'>
                                    <img src='../img/projects-example.jpg' />
                                </div>
                                <div className=' nav-slider-item-body'>
                                    <p>Aliqua incididunt consequat non irure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-slider-item '>
                        <div className='position-relative rounded overflow-hidden'>
                            <div className='row h-100 '>
                                <div className='nav-slider-item-img'>
                                    <img src='../img/projects-example-2.jpg' />
                                </div>
                                <div className=' nav-slider-item-body'>
                                    <p>Aliqua incididunt consequat non irure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-slider-item '>
                        <div className='position-relative rounded overflow-hidden'>
                            <div className='row h-100 '>
                                <div className='nav-slider-item-img'>
                                    <img src='../img/projects-example.jpg' />
                                </div>
                                <div className=' nav-slider-item-body'>
                                    <p>Aliqua incididunt consequat non irure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-slider-item '>
                        <div className='position-relative rounded overflow-hidden'>
                            <div className='row h-100 '>
                                <div className='nav-slider-item-img'>
                                    <img src='../img/projects-example-2.jpg' />
                                </div>
                                <div className=' nav-slider-item-body'>
                                    <p>Aliqua incididunt consequat non irure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Projects