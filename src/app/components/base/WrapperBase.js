import React, {Component} from 'react';
import {Content, Title, Wrapper, WrapperExample} from "../../../lib";

class WrapperBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Wrapper</Title>
                <Content>Use Wrapper SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Wrapper>
                            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper.</Content>
                        </Wrapper>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Wrapper>{ children }</Wrapper>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default WrapperBase;