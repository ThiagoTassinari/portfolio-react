import React, { useRef, useEffect } from "react";
import "./hero-section.css";

import heroImg from "../../../src/assets/images/hero.png";
import { Container, Row, Col } from "reactstrap";

import { init } from "ityped";

const HeroSection = () => {

  const textRef = useRef()
  
  useEffect(() => {
      init(textRef.current, {
          backDelay: 1500,
          showCursor: true,
          strings: [
              "Thiago Tassinari",
              "Desenvolvedor Web",
              "Engenheiro de Computação",
          ]
      })
  }, [])
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p className="mb-3">Bem vindo ao meu mundo!</p>

              <h2 className="hero__title mb-4">
                Eu sou <span ref={textRef}></span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
                veritatis pariatur maiores a facere, expedita, sint esse
                excepturi sequi aliquid illo distinctio dicta incidunt.
              </p>

              <div className="mt-5 hero__btns d-flex align-items-center gap-4">
                <button className="btn hire__btn">
                  <a href="/">Contrata-me</a>
                </button>
                <button className="btn">Contato</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
