import React, {Component} from 'react';
import {
    Accordion, Button,
    Code,
    Content,
    Table,
    Tag,
    Title,
    Tooltip,
    WrapperExample
} from "../../../../lib";

class BlocInformationBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Tooltip</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Tooltip} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        {/* Prop 'children' (used by Accordion.Title and Accordion.Body) */}
                        <Tag classTag={"critical bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `children` prop is used by `Accordion.Title` and `Accordion.Body` to define the content within each accordion section.
                            This allows you to specify the title and body content of each collapsible section within the `Accordion` component.
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
              <Accordion>
                <Accordion.Title>Title 1</Accordion.Title>
                <Accordion.Body>Content for section 1...</Accordion.Body>
              </Accordion>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>

                        {/* No additional props specific to Accordion component */}
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Tooltip text={"Tooltip Button"}>
                            <Button size={"lg"} classBtn={"primary bg-color"}>Click Me</Button>
                        </Tooltip>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Tooltip text={"Tooltip Button"}>
    <Button size={"lg"} classBtn={"primary bg-color"}>Click Me</Button>
</Tooltip>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default BlocInformationBase;