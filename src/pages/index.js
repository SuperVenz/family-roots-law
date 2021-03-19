import * as React from "react";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Wrapper = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;
const Split = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
  }
`;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 3em;
  }
`;
const MobileHider = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding-right: 5em;
  }
`;

const Row = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
  }
`;
const ButtonWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 4em;
  }
`;
const ButtonHider = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Text = styled.div`
  @media screen and (min-width: 768px) {
    width: 260%;
  }
`;
const TextFooter = styled.div`
  @media screen and (min-width: 768px) {
        flex-direction: reverse-row
    display: flex;
    flex-flow: column nowrap;
    padding-left: 2em;
    width: 60%;
    padding-top:5em;
  }
`;
const H3 = styled.h3`
  @media screen and (min-width: 768px) {
    font-size: 2em;
    font-weight: bold;
    padding-bottom: 0.5em;
    line-height: 1.5em;
  }
`;
const StyleFooter = styled((props) => <Footer {...props} />)``;
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Hero />
        <Container>
          <Split>
            <Article title="A Legacy That Lasts Forever">
              There are few things in life that matter to us more than our
              legacy. We spend our lives working and building something we hope
              to pass on to our loved ones. It takes a lifetime to build a
              legacy, and we want to know that our legacy is safe and secure.
              However, when the time comes to divide an estate, the process can
              be stressful, emotional, and uncomfortable. It some cases, there
              are unforeseen pitfalls that blindside families and make the
              situation extremely challenging. That is why I want to start
              working with you now to plan your legacy and to make sure I can be
              your advocate when that day comes. I want to meet with you
              regularly to discuss your plans, then when the moment arrives, I
              want to step in and handle this matter so your family members do
              not have to go through the headaches, piles of paperwork, and
              uncomfortable issues that often arise during this crucial time.
              With my personal approach, you can rest assured that your legacy
              will be protected.
            </Article>
            <Quote author="Mindy Galindo">
              With my personal apporach, you can rest assured that your legacy
              will be protected.
            </Quote>
          </Split>
          <StaticImage
            loading="eager"
            placeholder="blurred"
            src="../images/Family.png"
            alt="Picture of Family"
            layout="constrained"
          />
        </Container>
        <Article title="Build A Custom Experience">
          <Row>
            <MobileHider>
              <StaticImage
                loading="eager"
                placeholder="blurred"
                src="../images/Kid.png"
                alt="Picture of Family"
                layout="constrained"
              />
            </MobileHider>
            <Text>
              <H3>Made for your Family</H3>
              Estate planning is an intimate, family matter. This is why I like
              to visit my clients in their own homes and really get to know
              them. I want you to know and trust me, so you can be confident I
              am working on your behalf. My experience in this field has taught
              me that my work is about relationships; therefore, I have made
              relationship building the hallmark of my approach. Once I
              establish a personal relationship with you, I will work with you
              to design a custom experience that is tailored to your particular
              situation and your particular needs.
              <ButtonWrapper>
                <Button tag="Learn More" />
              </ButtonWrapper>
            </Text>
          </Row>
        </Article>
        <ButtonHider>
          <Button tag="Learn More" />
        </ButtonHider>
        <Row>
          <TextFooter>
            <Article title="Protect Your Family">
              To begin the process of protecting your family, please contact me
              for an initial consultation. I can answer any questions you might
              have and explain how we can get started protecting your legacy.
            </Article>
            <ButtonWrapper>
              <Button tag="Contact Me" />
            </ButtonWrapper>
          </TextFooter>
          <StyleFooter pic="Footer.png" />
        </Row>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
