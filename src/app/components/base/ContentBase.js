import React, {Component} from 'react';
import {Code, Content, Tag, Title, Accordion, Table, WrapperExample} from "../../../lib";

class ContentBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Content</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Content} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>classContent</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>This prop is used to define the CSS class to apply to the content. It is optional (undefined by default).</Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Content classContent="myClass">My Content</Content>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>This prop represents the content of the {`<Content>`}.</Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Content>My Content</Content>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>...props</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>This allows passing other props to the {`<p>`} component that is used inside {`<Content>`}.</Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Content onClick={handleClick}>My Button</Content>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Usage</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>This Content component is used to render paragraph ({`<p>`}) content with optional custom CSS classes (classContent) and additional props. It encapsulates text or other elements ({`{children}`}) within a styled {`<p>`} element based on the provided class and props.</Content>
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