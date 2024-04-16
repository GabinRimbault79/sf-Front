import React, {Component} from 'react';
import {Code, Content, Tag, Title, WrapperExample} from "../../../lib";
import Accordion from "../../../lib/components/modules/General/Accordion/Accordion";
import Table from "../../../lib/components/base/Table";

class CodeBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Code</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Code} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>classCode</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>This prop is used to define the CSS class to apply to the code. It is optional (undefined by default).</Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Code classCode="myClass">My Code</Code>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>This prop represents the content of the code.</Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Code>My Code</Code>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Usage</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The {`<Code>`} component displays pre-formatted content, such as source code, with a customizable CSS class to control its appearance.</Content>
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
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Colors</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The {`<Code>`} component displays pre-formatted content, such as source code, with a customizable CSS class to control its appearance.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Code classCode={"success bg-color"}>
                            npm i @gabinrimbault/sf-frontend
                        </Code>
                        <Code classCode={"critical bg-color"}>
                            npm i @gabinrimbault/sf-frontend
                        </Code>
                        <Code classCode={"warning bg-color"}>
                            npm i @gabinrimbault/sf-frontend
                        </Code>
                        <Code classCode={"infos bg-color"}>
                            npm i @gabinrimbault/sf-frontend
                        </Code>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Code classCode={"success bg-color"}>
    npm i @gabinrimbault/sf-frontend
</Code>
<Code classCode={"critical bg-color"}>
    npm i @gabinrimbault/sf-frontend
</Code>
<Code classCode={"warning bg-color"}>
    npm i @gabinrimbault/sf-frontend
</Code>
<Code classCode={"infos bg-color"}>
    npm i @gabinrimbault/sf-frontend
</Code>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default CodeBase;