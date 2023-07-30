import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './Welcome.css'
import ProjectCard from '../components/ProjectCard';

const Welcome = () => {

    const projects = [
        {
            name : "Coffee Company",
            description : "An e-commerce site for an indiviual coffee company. Built with the MERN stack. Soon to be deployed on AWS EC2.",
            imgSrc : `/coffeeShop.png`,
            link : ''
        },
        {
            name : "Inventory Envy",
            description : "An app that I created for my wife to track her inventory for things she sells. Currently deployed on Heroku.",
            imgSrc : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
            link : 'https://inv-envy-app.herokuapp.com/dashboard'
        },
        {
            name : "Recipe App",
            description : "This app takes in your current ingredients and returns possible recipes from an API",
            imgSrc : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
            link : '/'
        },
        {
            name : "Pokemon Starter",
            description : "The start of what would be a pokemon game. Built with bootstrap and JQuery Hosted on Github pages.",
            imgSrc : "https://newmand12.github.io/images/pokemon.png",
            link : 'https://newmand12.github.io/pokemonIndex.html'
            
        },
        {
            name : "Dice Game",
            description : "5 rolls, whichever player has the highest score wins! built with bootstrap and JQuery. Hosted on Github pages.",
            imgSrc : "https://newmand12.github.io/images/diceScreenshot.png",
            link : 'https://newmand12.github.io/diceGameIndex.html'
        },
        
    ]

    // console.log(projects)

  return (
    <>
        <div className="area">

            <Container>
                <Row className='rows'>
                    <Col id='intro-container'>
                        <h1 id='intro-name'>Dakota Newman</h1>
                        <p id='intro-subheader'>Full-Stack Web Developer</p>
                    </Col>
                </Row>
            </Container>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div > 
        <div>
            <Container id='project-container'>
                <Row>
                    <Col>
                        <h1 id='projects-header'>Projects</h1>
                    </Col>
                </Row>
                <Row id='project-row' className='justify-content-around'>
                    {projects.map((project, index) => {
                        return  <Col md={4} key={index} className='project-cols'>
                                    <ProjectCard project={project}/>
                                </Col>
                    })}
                </Row>
            </Container>
        </div>
        <div>
            <Container id='about-me-container'>
                <Row className='mt-5'>
                    <Col>
                        <h1 id='about-me-header'>About Me</h1>
                    </Col>
                </Row>
                <Row className='mt-3 align-items-start'>
                    <Col id='about-me-text' md={10}>
                        <h3 className='about-paras'>Hello, I'm Dakota Newman, a passionate web developer with a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack, as well as Python using Django and Flask frameworks. I am excited to kick-start my career in web development and contribute to innovative projects.
                        </h3>
                        <h3 className='about-paras'>
                        With a solid understanding of HTML, CSS, and JavaScript, I enjoy creating engaging and user-friendly websites. I have hands-on experience with modern front-end frameworks like React, which allows me to build dynamic and responsive interfaces.
                        </h3>
                        <h3 className='about-paras'>
                        On the back end, I have explored Python and gained proficiency in utilizing frameworks such as Django and Flask. I have also worked with databases, API integration, and server configurations to ensure smooth functionality.
                        </h3>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Container>
                <Row className='justify-content-center my-5'>
                    <Col md={6}>
                        <Button id='contact-me-button' variant='dark' onClick={() => {
                            window.location.href = 'mailto:dakota.newman@yahoo.com?subject=Business Inquiry'
                        }}>Contact Me</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        
    </>
  )
}

export default Welcome