import React, {Component} from 'react';
import {Content, Title, Wrapper, WrapperExample} from "../../../lib";

class TitleBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Title</Title>
                <Content>Use Title SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Title classTitle={"type1"} lvl={"h1"}>Title 1</Title>
                        <Title classTitle={"type2"} lvl={"h2"}>Title 2</Title>
                        <Title classTitle={"type3"} lvl={"h3"}>Title 3</Title>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Title classTitle={"type1"} lvl={"h1"}>Title 1</Title>
                            <Title classTitle={"type2"} lvl={"h2"}>Title 2</Title>
                            <Title classTitle={"type3"} lvl={"h3"}>Title 3</Title>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Heading</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Title classTitle={"type1 heading"} lvl={"h1"}>Title 1</Title>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Title classTitle={"type1 heading"} lvl={"h1"}>Title 1</Title>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default TitleBase;