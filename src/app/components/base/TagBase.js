import React, {Component} from 'react';
import {Accordion, Code, Content, Table, Tag, Title, Wrapper, WrapperExample} from "../../../lib";

class TagBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Tag</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Tag} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"warning bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `children` prop represents the content to be displayed inside the {`<Tag>`} component.
                            This can be text, other React elements, or components.
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
                                    {`<Tag classTag="badge">Hello World</Tag>`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`
            <Tag classTag="badge">
              <Button>Click Me</Button>
            </Tag>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"warning bg-color"}>classTag</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classTag` prop allows you to specify additional CSS classes to style the {`<span>`} element within the {`<Tag>`} component.
      This can be used to apply custom styles such as colors, borders, or typography.
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
                                    {`<Tag classTag="badge">Hello World</Tag>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"warning bg-color"}>linkTag</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `linkTag` prop, if provided, transforms the content of the {`<Tag>`} component into a clickable link ({`<Link>`} from `react-router-dom`).
                            It specifies the URL that the link should navigate to when clicked.
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
                                    {`<Tag classTag="badge" linkTag="/example">Click Here</Tag>`}
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
                        <Tag classTag={"primary bg-color"}>Primary</Tag>
                        <Tag classTag={"secondary bg-color"}>Secondary</Tag>
                        <Tag classTag={"success bg-color"}>Success</Tag>
                        <Tag classTag={"warning bg-color"}>Warning</Tag>
                        <Tag classTag={"critical bg-color"}>Critical</Tag>
                        <Tag classTag={"infos bg-color"}>Infos</Tag>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Tag classTag={"primary bg-color"}>Primary</Tag>
<Tag classTag={"secondary bg-color"}>Secondary</Tag>
<Tag classTag={"success bg-color"}>Success</Tag>
<Tag classTag={"warning bg-color"}>Warning</Tag>
<Tag classTag={"critical bg-color"}>Critical</Tag>
<Tag classTag={"infos bg-color"}>Infos</Tag>`}
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
                        {`<Tag classTag={"primary bg-color rounded"}>Primary</Tag>
<Tag classTag={"secondary bg-color rounded"}>Secondary</Tag>
<Tag classTag={"success bg-color rounded"}>Success</Tag>
<Tag classTag={"warning bg-color rounded"}>Warning</Tag>
<Tag classTag={"critical bg-color rounded"}>Critical</Tag>
<Tag classTag={"infos bg-color rounded"}>Infos</Tag>`}
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
                        {`<Tag linkTag={"#"} classTag={"primary bg-color"}>Primary</Tag>
<Tag linkTag={"#"} classTag={"secondary bg-color"}>Secondary</Tag>
<Tag linkTag={"#"} classTag={"success bg-color"}>Success</Tag>
<Tag linkTag={"#"} classTag={"warning bg-color"}>Warning</Tag>
<Tag linkTag={"#"} classTag={"critical bg-color"}>Critical</Tag>
<Tag linkTag={"#"} classTag={"infos bg-color"}>Infos</Tag>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default TagBase;