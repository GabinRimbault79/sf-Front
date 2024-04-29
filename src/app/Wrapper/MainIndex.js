import React from 'react';
import {Button, Cards, Content, GptCards, Title, Wrapper} from "../../lib";

const MainIndex = () => {

    return (
        <>
            <Wrapper>
                <Title classTitle={"type1 center mg-top-10"} lvl={"h1"}>Create accessible React apps speed with <br/>  <span className={"infos"}>SimpleFramwork FrontEnd</span></Title>
                <Content classContent={"center"}>SF-FRONT is a minimalist, modular, and accessible React component library, providing you with the fundamental tools to build your applications.</Content>
            </Wrapper>
            <Wrapper classWrapper={"center mg-top-10"}>
                <Button size={"md"} href={"/install"} classBtn={"btn primary bg-color"}>Get Started <i className="fa-solid fa-arrow-right"></i></Button>
                <Button size={"md"} href={"#"} classBtn={"btn secondary bg-color"}>Git Hub <i className="fa-brands fa-github"></i></Button>
            </Wrapper>
            <hr/>
            <Wrapper>
                <Title classTitle={"type1 center"}>An experience you'd expect from a design system</Title>
                <Content classContent={"center"}>Guided by convictions and designed for regular use.</Content>
                <GptCards>
                    <Cards>
                        <Cards.Header>
                            <i className="fa-brands fa-accessible-icon"></i>
                            <Content>Accessible</Content>
                        </Cards.Header>
                        <Cards.Body>
                            <Content>Chakra UI strictly follows WAI-ARIA standards for all components.</Content>
                        </Cards.Body>
                    </Cards>
                    <Cards>
                        <Cards.Header>
                            <i className="fa-solid fa-cube"></i>
                            <Content>Composable</Content>
                        </Cards.Header>
                        <Cards.Body>
                            <Content>Designed with composition in mind. Compose new components with ease.</Content>
                        </Cards.Body>
                    </Cards>
                    <Cards>
                        <Cards.Header>
                            <i className="fa-brands fa-dev"></i>
                            <Content>Dev Experience</Content>
                        </Cards.Header>
                        <Cards.Body>
                            <Content>Guaranteed to boost your productivity when building your app or website.</Content>
                        </Cards.Body>
                    </Cards>
                </GptCards>
                <GptCards>
                    <Cards>
                        <Cards.Header>
                            <i className="fa-brands fa-accessible-icon"></i>
                            <Content>Accessible</Content>
                        </Cards.Header>
                        <Cards.Body>
                            <Content>Chakra UI strictly follows WAI-ARIA standards for all components.</Content>
                        </Cards.Body>
                    </Cards>
                    <Cards>
                        <Cards.Header>
                            <i className="fa-solid fa-cube"></i>
                            <Content>Composable</Content>
                        </Cards.Header>
                        <Cards.Body>
                            <Content>Designed with composition in mind. Compose new components with ease.</Content>
                        </Cards.Body>
                    </Cards>
                    <Cards>
                        <Cards.Header>
                            <i className="fa-brands fa-dev"></i>
                            <Content>Dev Experience</Content>
                        </Cards.Header>
                        <Cards.Body>
                            <Content>Guaranteed to boost your productivity when building your app or website.</Content>
                        </Cards.Body>
                    </Cards>
                </GptCards>
            </Wrapper>
        </>
    );
};

export default MainIndex;