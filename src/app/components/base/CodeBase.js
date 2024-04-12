import React, {Component} from 'react';
import {Code, Content, Title, Wrapper, WrapperExample} from "../../../lib";

class CodeBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Code</Title>
                <Content>Use Code SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Code>
                            npm i @gabinrimbault/sf-frontend
                        </Code>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Code>
    npm i @gabinrimbault/sf-frontend
</Code>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default CodeBase;