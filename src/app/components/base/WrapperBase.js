import React, {Component} from 'react';
import {Accordion, Code, Content, Table, Tag, Title, Wrapper, WrapperExample} from "../../../lib";

class WrapperBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Wrapper</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Wrapper} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"warning bg-color"}>classWrapper</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classWrapper` prop allows you to specify additional CSS classes to style the wrapper {`<div>`} element.
                            This can be used to apply custom styles such as margins, padding, borders, background colors, etc., to the wrapper component.
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
                                    {`<Wrapper classWrapper="custom-wrapper">...</Wrapper>`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`
            <Wrapper classWrapper="another-wrapper" style={{ backgroundColor: "lightgray" }}>
              ...
            </Wrapper>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"warning bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `children` prop represents the content that will be wrapped inside the {`<Wrapper>`} component.
                            This can include text, other React elements, or components that you want to encapsulate within the styled wrapper.
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
                                    {`
            <Wrapper classWrapper="custom-wrapper">
              <p>This is wrapped content.</p>
            </Wrapper>
            `}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`
            <Wrapper classWrapper="another-wrapper">
              <div>
                <h2>Another Wrapped Content</h2>
                <p>This content is wrapped in a styled wrapper.</p>
              </div>
            </Wrapper>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"warning bg-color"}>{`...props`}</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `...props` allows you to pass additional props that will be spread onto the {`<div>`} element rendered by the {`<Wrapper>`} component.
                            This can be useful for providing extra customization or behavior to the wrapper element, such as event handlers or aria attributes.
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
                                    {`
            <Wrapper classWrapper="custom-wrapper" style={{ padding: "20px" }}>
              ...
            </Wrapper>
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
                        <Wrapper>
                            <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper.</Content>
                        </Wrapper>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Wrapper>{ children }</Wrapper>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default WrapperBase;