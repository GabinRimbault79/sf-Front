import React, {Component} from 'react';
import {Button, Cards, Content, GptCards, Title, WrapperExample} from "../../../../lib";

class CardBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Cards</Title>
                <Content>Use Cards SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <GptCards>
                            <Cards>
                                <Cards.Header>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"btn primary"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                        </GptCards>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <GptCards>
                                <Cards>
                                    <Cards.Header>
                                        <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                    </Cards.Header>
                                    <Cards.Body>
                                        <Content>Lorem Ipsum</Content>
                                    </Cards.Body>
                                    <Cards.Footer>
                                        <Button classBtn={"btn primary"}>Click Me</Button>
                                    </Cards.Footer>
                                </Cards>
                            </GptCards>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Multiple Cards</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <GptCards>
                            <Cards>
                                <Cards.Header>
                                    <i className="fa-brands fa-dev"></i>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"btn primary"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                            <Cards>
                                <Cards.Header>
                                    <i className="fa-brands fa-dev"></i>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"btn primary"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                            <Cards>
                                <Cards.Header>
                                    <i className="fa-brands fa-dev"></i>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"btn primary"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                        </GptCards>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <GptCards>
                                <Cards>
                                    <Cards.Header>
                                        <i className="fa-brands fa-dev"></i>
                                        <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                    </Cards.Header>
                                    <Cards.Body>
                                        <Content>Lorem Ipsum</Content>
                                    </Cards.Body>
                                    <Cards.Footer>
                                        <Button classBtn={"btn primary"}>Click Me</Button>
                                    </Cards.Footer>
                                </Cards>
                                <Cards>
                                    <Cards.Header>
                                        <i className="fa-brands fa-dev"></i>
                                        <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                    </Cards.Header>
                                    <Cards.Body>
                                        <Content>Lorem Ipsum</Content>
                                    </Cards.Body>
                                    <Cards.Footer>
                                        <Button classBtn={"btn primary"}>Click Me</Button>
                                    </Cards.Footer>
                                </Cards>
                                <Cards>
                                    <Cards.Header>
                                        <i className="fa-brands fa-dev"></i>
                                        <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                    </Cards.Header>
                                    <Cards.Body>
                                        <Content>Lorem Ipsum</Content>
                                    </Cards.Body>
                                    <Cards.Footer>
                                        <Button classBtn={"btn primary"}>Click Me</Button>
                                    </Cards.Footer>
                                </Cards>
                            </GptCards>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Cards Link</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <GptCards>
                            <Cards link={"#"}>
                                <Cards.Header>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                            </Cards>
                        </GptCards>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <GptCards>
                                <Cards link={"#"}>
                                    <Cards.Header>
                                        <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                    </Cards.Header>
                                    <Cards.Body>
                                        <Content>Lorem Ipsum</Content>
                                    </Cards.Body>
                                </Cards>
                            </GptCards>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default CardBase;