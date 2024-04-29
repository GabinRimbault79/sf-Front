import React, {Component} from 'react';
import {Accordion, Alert, Code, Content, Table, Tag, Title, WrapperExample} from "../../../../lib";

class AlertBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Alerts</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Alert} from "simpleframework-front"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>classAlert</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classAlert` prop allows you to specify additional CSS classes to style the alert box.
                            This enables custom styling of the alert's appearance based on different types or severity levels.
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
              <Alert classAlert="info">
                This is an informational alert.
              </Alert>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `children` prop defines the main content of the alert, typically consisting of text or React elements.
                            This allows you to display different messages or notifications within the alert box.
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
              <Alert>
                This is a default alert message.
              </Alert>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>name</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `name` prop provides a unique identifier or name for the alert box.
                            This can be useful for identifying or targeting specific alerts within the application.
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
              <Alert name="alert1">
                This is an alert with a custom name.
              </Alert>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>cross</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `cross` prop determines whether to display a close button within the alert box (`true` by default).
                            This allows users to dismiss the alert if needed, providing an interactive element for user interaction.
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
              <Alert cross={false}>
                This is an alert without a close button.
              </Alert>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>additionalContent</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `additionalContent` prop allows you to include additional content beneath the main alert message.
                            This can be used to provide supplementary information or details related to the alert.
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
              <Alert additionalContent="More details...">
                This is an alert with additional content.
              </Alert>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Alert classAlert={"primary bg-color"} name={"primary"} cross={false}>
                            Primary
                        </Alert>
                        <Alert classAlert={"secondary bg-color"} name={"secondary"} cross={false}>
                            Secondary
                        </Alert>
                        <Alert classAlert={"success bg-color"} name={"success"} cross={false}>
                            Success
                        </Alert>
                        <Alert classAlert={"warning bg-color"} name={"warning"} cross={false}>
                            Warning
                        </Alert>
                        <Alert classAlert={"critical bg-color"} name={"critical"} cross={false}>
                            Critical
                        </Alert>
                        <Alert classAlert={"infos bg-color"} name={"infos"} cross={false}>
                            Infos
                        </Alert>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Alert classAlert={"primary bg-color"} name={"primary"} cross={false}>
    Primary
</Alert>
<Alert classAlert={"secondary bg-color"} name={"secondary"} cross={false}>
    Secondary
</Alert>
<Alert classAlert={"success bg-color"} name={"success"} cross={false}>
    Success
</Alert>
<Alert classAlert={"warning bg-color"} name={"warning"} cross={false}>
    Warning
</Alert>
<Alert classAlert={"critical bg-color"} name={"critical"} cross={false}>
    Critical
</Alert>
<Alert classAlert={"infos bg-color"} name={"infos"} cross={false}>
    Infos
</Alert>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Alert Cross</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Alert classAlert={"primary bg-color"} name={"primary"}>
                            Primary
                        </Alert>
                        <Alert classAlert={"secondary bg-color"} name={"secondary"}>
                            Secondary
                        </Alert>
                        <Alert classAlert={"success bg-color"} name={"success"}>
                            Success
                        </Alert>
                        <Alert classAlert={"warning bg-color"} name={"warning"}>
                            Warning
                        </Alert>
                        <Alert classAlert={"critical bg-color"} name={"critical"}>
                            Critical
                        </Alert>
                        <Alert classAlert={"infos bg-color"} name={"infos"}>
                            Infos
                        </Alert>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Alert classAlert={"primary bg-color"} name={"primary"} cross={false}>
    Primary
</Alert>
<Alert classAlert={"secondary bg-color"} name={"secondary"} cross={false}>
    Secondary
</Alert>
<Alert classAlert={"success bg-color"} name={"success"} cross={false}>
    Success
</Alert>
<Alert classAlert={"warning bg-color"} name={"warning"} cross={false}>
    Warning
</Alert>
<Alert classAlert={"critical bg-color"} name={"critical"} cross={false}>
    Critical
</Alert>
<Alert classAlert={"infos bg-color"} name={"infos"} cross={false}>
    Infos
</Alert>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Alert with icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Alert classAlert={"primary bg-color"} name={"primary"}>
                            <i className="fa-solid fa-house"></i> Primary
                        </Alert>
                        <Alert classAlert={"infos bg-color"} name={"infos"}>
                            <i className="fa-solid fa-circle-info"></i> Infos
                        </Alert>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Alert classAlert={"primary bg-color"} name={"primary"}>
    <i className="fa-solid fa-house"></i> Primary
</Alert>
<Alert classAlert={"infos bg-color"} name={"infos"}>
    <i className="fa-solid fa-circle-info"></i> Infos
</Alert>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Alert with additional content</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Alert classAlert={"primary bg-color"} name={"primary"} additionalContent={"Lorem Ipsum"}>
                            Primary
                        </Alert>
                        <Alert classAlert={"infos bg-color"} name={"infos"} additionalContent={<Content>Lorem Ipsum with Content</Content>}>
                            Infos
                        </Alert>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Alert classAlert={"primary bg-color"} name={"primary"} additionalContent={"Lorem Ipsum"}>
    Primary
</Alert>
<Alert classAlert={"infos bg-color"} name={"infos"} additionalContent={<Content>Lorem Ipsum with Content</Content>}>
    Infos
</Alert>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Alert Important</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Alert classAlert={"success bg-color important"} name={"success"}>
                            Success
                        </Alert>
                        <Alert classAlert={"warning bg-color important"} name={"warning"}>
                            Warning
                        </Alert>
                        <Alert classAlert={"critical bg-color important"} name={"critical"}>
                            Critical
                        </Alert>
                        <Alert classAlert={"infos bg-color important"} name={"infos"}>
                            Infos
                        </Alert>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Alert classAlert={"success bg-color important"} name={"success"}>
    Success
</Alert>
<Alert classAlert={"warning bg-color important"} name={"warning"}>
    Warning
</Alert>
<Alert classAlert={"critical bg-color important"} name={"critical"}>
    Critical
</Alert>
<Alert classAlert={"infos bg-color important"} name={"infos"}>
    Infos
</Alert>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Alert Bordered</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Alert classAlert={"success bg-color border"} name={"success"}>
                            Success
                        </Alert>
                        <Alert classAlert={"warning bg-color border"} name={"warning"}>
                            Warning
                        </Alert>
                        <Alert classAlert={"critical bg-color border"} name={"critical"}>
                            Critical
                        </Alert>
                        <Alert classAlert={"infos bg-color border"} name={"infos"}>
                            Infos
                        </Alert>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Alert classAlert={"success bg-color border"} name={"success"}>
    Success
</Alert>
<Alert classAlert={"warning bg-color border"} name={"warning"}>
    Warning
</Alert>
<Alert classAlert={"critical bg-color border"} name={"critical"}>
    Critical
</Alert>
<Alert classAlert={"infos bg-color border"} name={"infos"}>
    Infos
</Alert>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default AlertBase;