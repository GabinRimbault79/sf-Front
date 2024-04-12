import React, {Component} from 'react';
import {Content, Img, Title, Wrapper, WrapperExample} from "../../../lib";

class ImgBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Images</Title>
                <Content>Use images SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Img classImg={"mg-r-10"}/>
                        <Img src={"https://placehold.co/150x150"} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Img />
                            <Img src={"https://placehold.co/150x150"} />
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Border</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Img classImg={"img_border"}/>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Img classImg={"img_border"}/>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Rounded</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Img classImg={"img_rounded"}/>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Img classImg={"img_rounded"}/>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ImgBase;