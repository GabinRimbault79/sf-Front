import React, {Component} from 'react';
import {Content, Title, Wrapper, WrapperExample} from "../../../lib";

class ContentBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Content</Title>
                <Content>Use Content SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Content classContent={"mg-top-10 mg-l-10 left"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
                        <Content classContent={"mg-top-10 center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
                        <Content classContent={"mg-top-10 mg-r-10 right"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Content classContent={"left"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
<Content classContent={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>
<Content classContent={"right"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ContentBase;