"use client"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Accordion, Col, Dropdown, Row, Tab } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
export default function () {

    const [canvasShow, setCanvasShow] = useState(false);
    const [showInp, setShowInp] = useState(false);
    const inpRef = useRef(null); 
    const mobileInpRef = useRef(null);

    useEffect(() => {
        showInp && inpRef.current.focus();
        showInp && mobileInpRef.current.focus();
    }, [showInp])
    return (
        <header className="header p-0 ">
            <div className='position-relative h-100 w-100'>
                <Container fluid className='h-100'>
                    <Navbar collapseOnSelect expand="xl" className={showInp ? 'p-0 mobile-search' : "p-0"}>

                        <Navbar.Brand href="/"><img src='../img/logo-white.png' /></Navbar.Brand>

                        <div className='d-flex d-xl-none h-100 position-relative mobile-toggler'>
                            <div className={showInp ? 'show-inp header-search w-100' : "header-search w-100"}>
                                <div className='d-flex align-items-center justify-content-end h-100 search-icon'>
                                    <IoIosSearch onClick={() => setShowInp(true)} className='fs-4' />
                                </div>

                                <div className='search-inp d-flex align-items-center'>
                                    <form className='w-100 mx-2' method='get'>
                                        <input ref={mobileInpRef}  type='text' name='search' placeholder='What are you looking for ?' />
                                        <button type='submit' className='btn'><IoIosSearch className='fs-5' /></button>
                                    </form>
                                    <MdClose className='fs-4' onClick={() => setShowInp(false)} />
                                </div>
                            </div>
                            <div className='d-flex align-items-center header-lang mx-2 mx-sm-3'>
                                <Dropdown>
                                    <Dropdown.Toggle size='sm' variant='transparent' className='border-0' id="dropdown-basic ">
                                        <CiGlobe className='fs-4' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ minWidth: "unset", width: "100%", fontSize: "14px", borderRadius: "5px" }}>
                                        <Dropdown.Item className='p-0 text-center' href="#/action-1">EN</Dropdown.Item>
                                        <Dropdown.Item className='p-0 text-center' href="#/action-2">RU</Dropdown.Item>
                                        <Dropdown.Item className='p-0 text-center' href="#/action-3">DE</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setCanvasShow(!canvasShow)} className='shadow-none border-0 h-100 rounded-0 ps-3' >
                                {
                                    canvasShow ? <MdClose className='fs-3' /> : <GiHamburgerMenu className='fs-3' />
                                }
                            </Navbar.Toggle>
                        </div>

                        <div className='d-none d-xl-flex row h-100 w-100'>
                            <Nav className="col-8 h-100 d-flex justify-content-between align-items-center " >
                                <div className={showInp ? "d-none" : 'h-100 d-flex ms-2'}>
                                    <div>
                                        <Nav.Link href="/" className='nav-link-cus'>
                                            Who We Are
                                        </Nav.Link>
                                        <div className='sub-nav-link'>
                                            <div className='sub-nav-link-body'>
                                                <Container fluid>
                                                    <Tab.Container id="left-tabs-example" >
                                                        <Row className='h-100'>
                                                            <Col sm={4}>
                                                                <div className='py-4'>
                                                                    <h4 className='mt-0'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                    <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4} className='h-100'>
                                                                <div className='ps-2 py-4 border-start border-end h-100'>
                                                                    <Nav variant="pills" className="flex-column">
                                                                        <Link href="/" className='ps-2 pt-1 sub-nav-link-head'>Who We Are</Link>
                                                                        <Nav.Item >
                                                                            <Nav.Link>Our Story</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link >Core Values</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link >Industry Specializations</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link >Sustainability Initiatives</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link >Collaborations & Partnerships</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link >Global Reach</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item>
                                                                            <Nav.Link >Team Spotlight</Nav.Link>
                                                                        </Nav.Item>
                                                                    </Nav>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <div className='ps-2 py-4 sub-nav-featured-content'>
                                                                    <p className='mb-3 pt-1 sub-nav-link-head'>Featured Content</p>
                                                                    <div className='sub-nav-featured-content-img'>
                                                                        <img src='/img/header-last-tab.webp' className='w-100 h-auto' />
                                                                    </div>
                                                                    <div className='sub-nav-featured-content-body'>
                                                                        <h4 className='mt-2'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                        <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Container>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Nav.Link href="/" className='nav-link-cus'>
                                            What We Do
                                        </Nav.Link>
                                        <div className='sub-nav-link '>
                                            <div className='sub-nav-link-body'>
                                                <Container fluid>
                                                    <Tab.Container id="left-tabs-example"  >
                                                        <Row className='h-100'>
                                                            <Col sm={4}>
                                                                <div className='py-4'>
                                                                    <h4 className='mt-0'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                    <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4} className='h-100'>
                                                                <div className='ps-2 py-4 border-start border-end h-100'>
                                                                    <Nav variant="pills" className="flex-column">
                                                                        <Link href="/" className=' ps-2 pt-1 sub-nav-link-head'>What We Do</Link>
                                                                        <Nav.Item>
                                                                            <Nav.Link >Mechanical Design</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Electrical Design</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Plumbing Design</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Engineering Consulting</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >LEED Certification</Nav.Link>
                                                                        </Nav.Item>
                                                                    </Nav>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <div className='ps-2 py-4 sub-nav-featured-content'>
                                                                    <p className='mb-3 pt-1'>Featured Content</p>
                                                                    <div className='sub-nav-featured-content-img'>
                                                                        <img src='/img/header-last-tab.webp' className='w-100 h-auto' />
                                                                    </div>
                                                                    <div className='sub-nav-featured-content-body'>
                                                                        <h4 className='mt-2'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                        <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Container>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Nav.Link href="/" className='nav-link-cus'>
                                            How We Work
                                        </Nav.Link>
                                        <div className='sub-nav-link '>
                                            <div className='sub-nav-link-body'>
                                                <Container fluid>
                                                    <Tab.Container id="left-tabs-example"  >
                                                        <Row className='h-100'>
                                                            <Col sm={4}>
                                                                <div className='py-4'>
                                                                    <h4 className='mt-0'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                    <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4} className='h-100'>
                                                                <div className='ps-2 py-4 border-start border-end h-100'>
                                                                    <Nav variant="pills" className="flex-column">
                                                                        <Link href="/" className=' ps-2 pt-1  sub-nav-link-head'>How We Work</Link>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Understanding Client Needs</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Comprehensive Planning and Design</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Quality Assurance at Every Step</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >On-Time and On-Budget Execution</Nav.Link>
                                                                        </Nav.Item>
                                                                    </Nav>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <div className='ps-2 py-4 sub-nav-featured-content'>
                                                                    <p className='mb-3 pt-1 '>Featured Content</p>
                                                                    <div className='sub-nav-featured-content-img'>
                                                                        <img src='/img/header-last-tab.webp' className='w-100 h-auto' />
                                                                    </div>
                                                                    <div className='sub-nav-featured-content-body'>
                                                                        <h4 className='mt-2'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                        <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Container>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Nav.Link href="/" className='nav-link-cus'>
                                            Why Choose Us
                                        </Nav.Link>
                                        <div className='sub-nav-link '>
                                            <div className='sub-nav-link-body'>
                                                <Container fluid>
                                                    <Tab.Container id="left-tabs-example"  >
                                                        <Row className='h-100'>
                                                            <Col sm={4}>
                                                                <div className='py-4'>
                                                                    <h4 className='mt-0'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                    <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4} className='h-100'>
                                                                <div className='ps-2 py-4 border-start border-end h-100'>
                                                                    <Nav variant="pills" className="flex-column">
                                                                        <Link href="/" className=' ps-2 pt-1  sub-nav-link-head'>Why Choose Us</Link>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Standards</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Software</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Projects</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Resources</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Certifications & Awards</Nav.Link>
                                                                        </Nav.Item>
                                                                    </Nav>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <div className='ps-2 py-4 sub-nav-featured-content'>
                                                                    <p className='mb-3 pt-1 '>Featured Content</p>
                                                                    <div className='sub-nav-featured-content-img'>
                                                                        <img src='/img/header-last-tab.webp' className='w-100 h-auto' />
                                                                    </div>
                                                                    <div className='sub-nav-featured-content-body'>
                                                                        <h4 className='mt-2'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                        <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Container>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Nav.Link href="/" className='nav-link-cus'>
                                            Our Vision & Mission
                                        </Nav.Link>
                                        <div className='sub-nav-link '>
                                            <div className='sub-nav-link-body'>
                                                <Container fluid>
                                                    <Tab.Container id="left-tabs-example"  >
                                                        <Row className='h-100'>
                                                            <Col sm={4}>
                                                                <div className='py-4'>
                                                                    <h4 className='mt-0'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                    <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4} className='h-100'>
                                                                <div className='ps-2 py-4 border-start border-end h-100'>
                                                                    <Nav variant="pills" className="flex-column">
                                                                        <Link href="/" className=' ps-2 pt-1  sub-nav-link-head'>Our Vision & Mission</Link>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Delivering Excellence in MEP Engineering</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Adopting Advanced Technologies</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Enhancing Energy Efficiency</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Automated Design Approach</Nav.Link>
                                                                        </Nav.Item>
                                                                        <Nav.Item >
                                                                            <Nav.Link >Fostering Client and Industry Collaboration</Nav.Link>
                                                                        </Nav.Item>
                                                                    </Nav>
                                                                </div>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <div className='ps-2 py-4 sub-nav-featured-content'>
                                                                    <p className='mb-3 pt-1 '>Featured Content</p>
                                                                    <div className='sub-nav-featured-content-img'>
                                                                        <img src='/img/header-last-tab.webp' className='w-100 h-auto' />
                                                                    </div>
                                                                    <div className='sub-nav-featured-content-body'>
                                                                        <h4 className='mt-2'>We are the sum of our collective passion, vision and expertise.</h4>
                                                                        <p>Discover our people, purpose and stories that have helped shape the organization we are today and are inspiring the one we will become.</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Container>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={showInp ? 'show-inp header-search' : "header-search"}>
                                    <div className='d-flex align-items-center justify-content-end h-100 search-icon'>
                                        <IoIosSearch onClick={() => setShowInp(true)} className='fs-4' />
                                    </div>
                                    <div className='search-inp d-flex align-items-center'>
                                        <form className='w-100 mx-2' method='get'>
                                            <input ref={inpRef}  type='text' name='search' placeholder='What are you looking for ?' />
                                            <button type='submit' className='btn'><IoIosSearch className='fs-5' /></button>
                                        </form>
                                        <MdClose className='fs-4' onClick={() => setShowInp(false)} />
                                    </div>
                                </div>
                            </Nav>
                            <Nav className='col-4 px-2 h-100 nav-second'>
                                <div>
                                    <Nav.Link href="/" className='nav-link-cus'>
                                        Projects
                                    </Nav.Link>

                                </div>
                                <div>
                                    <Nav.Link href="/" className='nav-link-cus'>
                                        News
                                    </Nav.Link>

                                </div>
                                <div>
                                    <Nav.Link href="/" className='nav-link-cus'>
                                        Careers
                                    </Nav.Link>

                                </div>
                                <div>
                                    <Nav.Link href="/" className='nav-link-cus'>
                                        Contact
                                    </Nav.Link>

                                </div>
                                <div className='d-flex align-items-center header-lang'>
                                    <Dropdown>
                                        <Dropdown.Toggle size='sm' variant='transparent' className='border-0' id="dropdown-basic ">
                                            <CiGlobe className='fs-4' />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ minWidth: "unset", width: "100%", fontSize: "14px", borderRadius: "5px" }}>
                                            <Dropdown.Item className='p-0 text-center' href="#/action-1">EN</Dropdown.Item>
                                            <Dropdown.Item className='p-0 text-center' href="#/action-2">RU</Dropdown.Item>
                                            <Dropdown.Item className='p-0 text-center' href="#/action-3">DE</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Nav>
                        </div>
                        <Navbar.Offcanvas show={canvasShow} id="responsive-navbar-nav" className='responsive-navbar-nav h-100 d-xl-none overflow-y-scroll'>
                            <Container fluid>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><Link href={"/"}>Who We Are</Link><IoIosArrowDown className='fs-4' /></Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='list-unstyled'>
                                                <li><Link href={"/"}>Our Story</Link></li>
                                                <li><Link href={"/"}>Core Values</Link></li>
                                                <li><Link href={"/"}>Industry Specializations</Link></li>
                                                <li><Link href={"/"}>Sustainability Initiatives</Link></li>
                                                <li><Link href={"/"}>Collaborations & Partnerships</Link></li>
                                                <li><Link href={"/"}>Global Reach</Link></li>
                                                <li><Link href={"/"}>Team Spotlight</Link></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><Link href={"/"}>What We Do</Link><IoIosArrowDown className='fs-4' /></Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='list-unstyled'>
                                                <li><Link href={"/"}>Mechanical Design</Link></li>
                                                <li><Link href={"/"}>Electrical Design</Link></li>
                                                <li><Link href={"/"}>Plumbing Design</Link></li>
                                                <li><Link href={"/"}>Engineering Consulting</Link></li>
                                                <li><Link href={"/"}>LEED Certification</Link></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><Link href={"/"}>How We Work</Link><IoIosArrowDown className='fs-4' /></Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='list-unstyled'>
                                                <li><Link href={"/"}>Understanding Client Needs</Link></li>
                                                <li><Link href={"/"}>Comprehensive Planning and Design</Link></li>
                                                <li><Link href={"/"}>Quality Assurance at Every Step</Link></li>
                                                <li><Link href={"/"}>On-Time and On-Budget Execution</Link></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><Link href={"/"}>Why Choose Us</Link><IoIosArrowDown className='fs-4' /></Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='list-unstyled'>
                                                <li><Link href={"/"}>Standards</Link></li>
                                                <li><Link href={"/"}>Software</Link></li>
                                                <li><Link href={"/"}>Projects</Link></li>
                                                <li><Link href={"/"}>Resources</Link></li>
                                                <li><Link href={"/"}>Certifications & Awards</Link></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" className='rounded-0'>
                                        <Accordion.Header><Link href={"/"}>Our Vision & Mission</Link><IoIosArrowDown className='fs-4' /></Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='list-unstyled'>
                                                <li><Link href={"/"}>Delivering Excellence in MEP Engineering</Link></li>
                                                <li><Link href={"/"}>Adopting Advanced Technologies</Link></li>
                                                <li><Link href={"/"}>Enhancing Energy Efficiency</Link></li>
                                                <li><Link href={"/"}>Automated Design Approach</Link></li>
                                                <li><Link href={"/"}>Fostering Client and Industry Collaboration</Link></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <ul className='list-unstyled res-second-nav'>
                                    <li><Link href={"/"}>Projects</Link></li>
                                    <li><Link href={"/"}>News</Link></li>
                                    <li><Link href={"/"}>Careers</Link></li>
                                    <li><Link href={"/"}>Contact</Link></li>
                                </ul>
                            </Container>
                        </Navbar.Offcanvas>
                    </Navbar>
                </Container>
            </div>
        </header>
    )
}