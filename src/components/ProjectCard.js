import React from 'react'
import './ProjectCard.css'
import Container from 'react-bootstrap/esm/Container'
import { Button } from 'react-bootstrap'


const ProjectCard = (props) => {
    const { name, description, imgSrc, link } = props.project

    // console.log(name, description, imgSrc)

    return (
        <Container className='card-wrapper justify-content-center'
        >
            <div className='img-container' id={`${name}`}>
                <img src={`${imgSrc}`}></img>
            </div>
            <div id='bottom-info'>
                <h2>{name}</h2>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <Button onClick={() => {
                    window.location.href = link
                }}>View</Button>
            </div>
        
        </Container>
    )
}

export default ProjectCard