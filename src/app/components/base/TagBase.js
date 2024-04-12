import React, {Component} from 'react';
import {Content, Tag, Title, Wrapper, WrapperExample} from "../../../lib";

class TagBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Tag</Title>
                <Content>Use Tag SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Tag classTag={"primary bg-color"}>Primary</Tag>
                        <Tag classTag={"secondary bg-color"}>Secondary</Tag>
                        <Tag classTag={"success bg-color"}>Success</Tag>
                        <Tag classTag={"warning bg-color"}>Warning</Tag>
                        <Tag classTag={"critical bg-color"}>Critical</Tag>
                        <Tag classTag={"infos bg-color"}>Infos</Tag>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Tag classTag={"primary bg-color"}>Primary</Tag>
                            <Tag classTag={"secondary bg-color"}>Secondary</Tag>
                            <Tag classTag={"success bg-color"}>Success</Tag>
                            <Tag classTag={"warning bg-color"}>Warning</Tag>
                            <Tag classTag={"critical bg-color"}>Critical</Tag>
                            <Tag classTag={"infos bg-color"}>Infos</Tag>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Rounded</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Tag classTag={"primary bg-color rounded"}>Primary</Tag>
                        <Tag classTag={"secondary bg-color rounded"}>Secondary</Tag>
                        <Tag classTag={"success bg-color rounded"}>Success</Tag>
                        <Tag classTag={"warning bg-color rounded"}>Warning</Tag>
                        <Tag classTag={"critical bg-color rounded"}>Critical</Tag>
                        <Tag classTag={"infos bg-color rounded"}>Infos</Tag>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Tag classTag={"primary bg-color rounded"}>Primary</Tag>
                            <Tag classTag={"secondary bg-color rounded"}>Secondary</Tag>
                            <Tag classTag={"success bg-color rounded"}>Success</Tag>
                            <Tag classTag={"warning bg-color rounded"}>Warning</Tag>
                            <Tag classTag={"critical bg-color rounded"}>Critical</Tag>
                            <Tag classTag={"infos bg-color rounded"}>Infos</Tag>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Link Tag</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Tag linkTag={"#"} classTag={"primary bg-color"}>Primary</Tag>
                        <Tag linkTag={"#"} classTag={"secondary bg-color"}>Secondary</Tag>
                        <Tag linkTag={"#"} classTag={"success bg-color"}>Success</Tag>
                        <Tag linkTag={"#"} classTag={"warning bg-color"}>Warning</Tag>
                        <Tag linkTag={"#"} classTag={"critical bg-color"}>Critical</Tag>
                        <Tag linkTag={"#"} classTag={"infos bg-color"}>Infos</Tag>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <Tag linkTag={"#"} classTag={"primary bg-color"}>Primary</Tag>
                            <Tag linkTag={"#"} classTag={"secondary bg-color"}>Secondary</Tag>
                            <Tag linkTag={"#"} classTag={"success bg-color"}>Success</Tag>
                            <Tag linkTag={"#"} classTag={"warning bg-color"}>Warning</Tag>
                            <Tag linkTag={"#"} classTag={"critical bg-color"}>Critical</Tag>
                            <Tag linkTag={"#"} classTag={"infos bg-color"}>Infos</Tag>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default TagBase;