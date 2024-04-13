import React, {Component} from 'react';
import {Alert, Content, Title, WrapperExample} from "../../../../lib";

class AlertBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Alerts</Title>
                <Content>Use Alerts SF-FRONT</Content>
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
                        {`
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
                         `}
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
                        {`
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
                         `}
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
                        {`
                            <Alert classAlert={"primary bg-color"} name={"primary"}>
                                <i className="fa-solid fa-house"></i> Primary
                            </Alert>
                            <Alert classAlert={"infos bg-color"} name={"infos"}>
                                <i className="fa-solid fa-circle-info"></i> Infos
                            </Alert>
                         `}
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
                        {`
                            <Alert classAlert={"primary bg-color"} name={"primary"} additionalContent={"Lorem Ipsum"}>
                                Primary
                            </Alert>
                            <Alert classAlert={"infos bg-color"} name={"infos"} additionalContent={<Content>Lorem Ipsum with Content</Content>}>
                                Infos
                            </Alert>
                         `}
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