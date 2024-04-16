import React, {Component} from 'react';
import {Accordion, Code, Content, Table, Tag, Title, WrapperExample} from "../../../lib";

class TitleBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Title</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Title} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>classTitle</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classTitle` prop allows you to specify additional CSS classes to style the rendered title element ({`<h1>`}, {`<h2>`}, {`<h3>`}, etc.).
                            This can be used to apply custom styles such as font size, color, margin, or other visual properties.
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Title classTitle="main-title">Welcome to My App</Title>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>lvl</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `lvl` prop specifies the level of the title to be rendered (e.g., `"h1"`, `"h2"`, `"h3"`, etc.).
                            This determines the semantic meaning and visual hierarchy of the title element.
                            By default, the level is set to `"h1"`.
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Title lvl="h1">Features</Title>`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`<Title lvl="h2">Features</Title>`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`
            <Title lvl="h3">Get Started</Title>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Usage</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Title classTitle={"type1"} lvl={"h1"}>Title 1</Title>
                        <Title classTitle={"type2"} lvl={"h2"}>Title 2</Title>
                        <Title classTitle={"type3"} lvl={"h3"}>Title 3</Title>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Title classTitle={"type1"} lvl={"h1"}>Title 1</Title>
<Title classTitle={"type2"} lvl={"h2"}>Title 2</Title>
<Title classTitle={"type3"} lvl={"h3"}>Title 3</Title>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Heading</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Title classTitle={"type1 heading"} lvl={"h1"}>Title 1</Title>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Title classTitle={"type1 heading"} lvl={"h1"}>Title 1</Title>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default TitleBase;