import React, {Component} from 'react';
import {Content, Title, WrapperExample} from "../../../../lib";
import Accordion from "../../../../lib/components/modules/General/Accordion/Accordion";

class AccordionBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Accordion</Title>
                <Content>Use Accordion SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Accordion>
                            <Accordion.Title>Section 1</Accordion.Title>
                            <Accordion.Body>
                                <p>Contenu de la section 1...</p>
                            </Accordion.Body>
                        </Accordion>
                        <Accordion>
                            <Accordion.Title>Section 2</Accordion.Title>
                            <Accordion.Body>
                                <p>Contenu de la section 2...</p>
                            </Accordion.Body>
                        </Accordion>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Accordion>
                                <Accordion.Title>Section 1</Accordion.Title>
                                <Accordion.Body>
                                    <p>Contenu de la section 1...</p>
                                </Accordion.Body>
                            </Accordion>
                            <Accordion>
                                <Accordion.Title>Section 2</Accordion.Title>
                                <Accordion.Body>
                                    <p>Contenu de la section 2...</p>
                                </Accordion.Body>
                            </Accordion>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default AccordionBase;