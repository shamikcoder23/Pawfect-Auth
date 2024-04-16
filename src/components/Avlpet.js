import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pup1 from "../assets/img/pup1.png";
import pup2 from "../assets/img/pup2.png";
import pup3 from "../assets/img/pup3.png";
import pup4 from "../assets/img/pup4.png";
import pup5 from "../assets/img/pup5.png";
import pup6 from "../assets/img/pup6.png";
import pup7 from "../assets/img/pup7.jpg";
import pup8 from "../assets/img/pup8.jpg";
import pup9 from "../assets/img/pup9.jpg";
import pup10 from "../assets/img/1.jpg";
import pup11 from "../assets/img/2.jpg";
import pup12 from "../assets/img/3.jpg";
import pup13 from "../assets/img/4.jpg";
import pup14 from "../assets/img/5.jpeg";
import pup15 from "../assets/img/7.jpg";
import pup16 from "../assets/img/9.jpg";
import pup17 from "../assets/img/10.jpg";
import pup18 from "../assets/img/11.jpg";
import pup19 from "../assets/img/12.jpg";
import pup20 from "../assets/img/13.jpg";
import pup21 from "../assets/img/14.jpg";
import pup22 from "../assets/img/15.jpg";
import pup23 from "../assets/img/16.jpg";
import pup24 from "../assets/img/17.jpg";
import pup25 from "../assets/img/18.jpg";
import pup26 from "../assets/img/19.jpg";
import pup27 from "../assets/img/20.jpg";
import pup28 from "../assets/img/21.jpg";
import pup29 from "../assets/img/22.jpg";
import pup30 from "../assets/img/23.jpg";
import pup31 from "../assets/img/24.jpg";
import pup32 from "../assets/img/25.jpg";
import pup33 from "../assets/img/IMG-20240401-WA0002.jpg";
import pup34 from "../assets/img/IMG-20240401-WA0003.jpg";
import pup35 from "../assets/img/IMG-20240401-WA0004.jpg";
import pup36 from "../assets/img/IMG-20240401-WA0005.jpg";
import pup37 from "../assets/img/IMG-20240401-WA0006.jpg";
import pup38 from "../assets/img/IMG-20240401-WA0007.jpg";
import pup39 from "../assets/img/IMG-20240401-WA0008.jpg";
import pup40 from "../assets/img/IMG-20240401-WA0009.jpg";
import pup41 from "../assets/img/IMG-20240401-WA0010.jpg";
import pup42 from "../assets/img/IMG-20240401-WA0011.jpg";
import pup43 from "../assets/img/IMG-20240401-WA0012.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { useAuth0 } from "@auth0/auth0-react";

import ReactScrollableList from 'react-scrollable-list';

export const Avlpet = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const projects = [
    {
      title: "Sunny",
      description: "Adorable Golden Retriever",
      imgUrl: pup1,
    },
    {
      title: "Whiskers",
      description: "Persian Kitten",
      imgUrl: pup2,
    },
    {
      title: "Rocky",
      description: "Fearless Rottweiler",
      imgUrl: pup3,
    },
    {
      title: "Luna",
      description: "Lovable Labrador",
      imgUrl: pup4,
    },
    {
      title: "Tango",
      description: "The Parrot",
      imgUrl: pup5,
    },
    {
      title: "Whiskerina",
      description: "The Cat",
      imgUrl: pup6,
    },
    
  ];

  const dogs = [
    {
      title: "Sunny",
      description: "Adorable Golden Retriever",
      imgUrl: pup1,
    },
    {
      title: "Rocky",
      description: "Fearless Rottweiler",
      imgUrl: pup3,
    },
    {
      title: "Luna",
      description: "Lovable Labrador",
      imgUrl: pup4,
    },
    {
      title: "Pluto",
      description: "Cutest Corgi",
      imgUrl: pup7,
    },
    {
      title: "Alice",
      description: "Loveable Labrador",
      imgUrl: pup8,
    },
    {
      title: "Lisa",
      description: "Loveable Labrador",
      imgUrl: pup10,
    },
    {
      title: "Dona",
      description: "Loveable Labrador",
      imgUrl: pup26,
    },
    {
      title: "Butch",
      description: "Loveable Labrador",
      imgUrl: pup13,
    },
    // {
    //   title: "Alice",
    //   description: "Hilarious Husky",
    //   imgUrl: pup12,
    // },
    // {
    //   title: "Alice",
    //   description: "Loveable Labrador",
    //   imgUrl: pup28,
    // },
    {
      title: "Blizzard",
      description: "Hilarious Husky",
      imgUrl: pup22,
    },
    // {
    //   title: "Alice",
    //   description: "Hilarious Husky",
    //   imgUrl: pup23,
    // },
    // {
    //   title: "Alice",
    //   description: "Hilarious Husky",
    //   imgUrl: pup24,
    // },
    {
      title: "Remy",
      description: "Hilarious Husky",
      imgUrl: pup25,
    },
    {
      title: "Dalton",
      description: "Hilarious Husky",
      imgUrl: pup11,
    },
    {
      title: "Paw",
      description: "Hilarious Husky",
      imgUrl: pup27,
    },
  ];

  const cats = [
    {
      title: "Whiskers",
      description: "Persian Kitten",
      imgUrl: pup2,
    },
    {
      title: "Thomas",
      description: "The Cat",
      imgUrl: pup6,
    },
    {
      title: "Belle",
      description: "The Cat",
      imgUrl: pup9,
    },
    // {
    //   title: "Belle",
    //   description: "American Shorthair",
    //   imgUrl: pup17,
    // },
    {
      title: "Morris",
      description: "American Shorthair",
      imgUrl: pup18,
    },
    // {
    //   title: "Belle",
    //   description: "The Cat",
    //   imgUrl: pup16,
    // },
    {
      title: "Christina",
      description: "Persian kitten",
      imgUrl: pup19,
    },
    // {
    //   title: "Belle",
    //   description: "Persian kitten",
    //   imgUrl: pup20,
    // },
    {
      title: "Shadow",
      description: "Persian kitten",
      imgUrl: pup21,
    },
    {
      title: "Kate",
      description: "Ragdoll",
      imgUrl: pup29,
    },
    // {
    //   title: "Belle",
    //   description: "Ragdoll",
    //   imgUrl: pup30,
    // },
    {
      title: "Beau",
      description: "Ragdoll",
      imgUrl: pup31,
    },
  ];

  const birds = [
    {
      title: "Tango",
      description: "The Parrot",
      imgUrl: pup5,
    },
    {
      title: "Molly",
      description: "Guppy",
      imgUrl: pup34,
    },
    {
      title: "Puck",
      description: "The Parakeet",
      imgUrl: pup35,
    },
    // {
    //   title: "Tango",
    //   description: "The Parrot",
    //   imgUrl: pup36,
    // },
    {
      title: "Romeo",
      description: "The Lovebird",
      imgUrl: pup37,
    },
    {
      title: "Kittu",
      description: "The Cockatiel",
      imgUrl: pup38,
    },
    // {
    //   title: "Tango",
    //   description: "The Parrot",
    //   imgUrl: pup39,
    // },
    {
      title: "Banji",
      description: "The Parrot",
      imgUrl: pup40,
    },
    {
      title: "Goldie",
      description: "The Goldfish",
      imgUrl: pup41,
    },
    {
      title: "Don",
      description: "The Canary",
      imgUrl: pup42,
    },
    {
      title: "Pretty",
      description: "The Dwarf Puffer Fish",
      imgUrl: pup43,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Pets Available Now! 🐾🏠</h2>
                <p>Look at the furry friends, who are waiting with glittery eyes, waiting for you to make them your lifelong companion. Their smiles are waiting to lift you up after a heavy day, their tantrums are waiting to bother you even if you are tired. <span style={{ color: "#03C988" }}>So, what are you waiting for?</span></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>                      
                        {isAuthenticated ? (<Nav.Link eventKey="first">Doggos</Nav.Link>) : (<Nav.Link eventKey="first">Tab 1</Nav.Link>)}                      
                    </Nav.Item>
                    <Nav.Item>
                      {isAuthenticated ? (<Nav.Link eventKey="second">Kitties</Nav.Link>) : (<Nav.Link eventKey="second">Tab 2</Nav.Link>)} 
                    </Nav.Item>
                    <Nav.Item>
                      {isAuthenticated ? (<Nav.Link eventKey="third">Birdies & Fish</Nav.Link>) : (<Nav.Link eventKey="third">Tab 3</Nav.Link>)} 
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {isAuthenticated ? (
                        <Row>
                        {
                          dogs.map((project, index) => {
                            return (
                              <ProjectCard
                                
                                key={index}
                                {...project}                
                                />
                            )
                          })
                        }
                        </Row>
                        ) : (
                          <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>)
                      }                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">                      
                      {isAuthenticated ? (
                        <Row>
                        {
                          cats.map((project, index) => {
                            return (
                              <ProjectCard
                                
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                        ) : (
                        <p style={{ color: "#03C988" }}>Please Log In to view full list</p>)
                      }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {isAuthenticated ? (
                        <Row>
                        {
                          birds.map((project, index) => {
                            return (
                              <ProjectCard
                                
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                      ) : (
                      <p style={{ color: "#03C988" }}>Please Log In to view full list</p>)}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
