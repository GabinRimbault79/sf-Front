import React, {Component} from 'react';
import {Code, Content, Img, Lame, Tag, Title, Accordion, Table, WrapperExample} from "../../../lib";

class LameBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Lame</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Lame} from "simpleframework-front"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>classLame</Tag>
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
                                    {`<Lame classLame="myClass">My Content in Lame component</Lame>`}
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
                                    {`<Lame>My Content</Lame>`}
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
                                    {`<Lame ...props>My Content</Lame>`}
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
                        <Lame classLame={"primary bg-color"}>
                            <Content>My Lame Primary</Content>
                            <Content><Img /><Img /><Img /></Content>
                        </Lame>
                        <Lame classLame={"secondary bg-color"}>
                            <Content>My Lame Secondary</Content>
                            <Content><Img /><Img /><Img /></Content>
                        </Lame>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Lame classLame={"primary bg-color"}>
    {Content Lame...}
</Lame>`}
                        {`
<Lame classLame={"secondary bg-color"}>
    {Content Lame...}
</Lame>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default LameBase;