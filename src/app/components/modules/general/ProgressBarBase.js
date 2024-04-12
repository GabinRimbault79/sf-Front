import React, {Component} from 'react';
import {Content, ProgressBar, Title, WrapperExample} from "../../../../lib";

class ProgressBarBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>ProgressBar</Title>
                <Content>Use ProgressBar SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <ProgressBar classProgress={"mg-bot-10"} width={10} height={"10px"} color={"blue"}>10%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={25} height={"10px"} color={"yellow"}>25%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={50} height={"10px"} color={"green"}>50%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={75} height={"10px"} color={"orange"}>75%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={100} height={"10px"} color={"red"}>100%</ProgressBar>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <ProgressBar width={10} height={"10px"} color={"blue"}>10%</ProgressBar>
                            <ProgressBar width={25} height={"10px"} color={"yellow"}>25%</ProgressBar>
                            <ProgressBar width={50} height={"10px"} color={"green"}>50%</ProgressBar>
                            <ProgressBar width={75} height={"10px"} color={"orange"}>75%</ProgressBar>
                            <ProgressBar width={100} height={"10px"} color={"red"}>100%</ProgressBar>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ProgressBarBase;