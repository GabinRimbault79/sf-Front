import React, {Component} from 'react';
import {WrapperExample, Button, Title, Content, Code, Wrapper} from "../../../lib";

class ButtonBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Buttons</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Button} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Usage</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The Button component is intended to trigger an action or an event, such as submitting a form, opening a modal window, or any other type of action.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button classBtn={"btn primary bg-color"}>Primary</Button>
                        <Button classBtn={"btn secondary bg-color"}>Secondary</Button>
                        <Button classBtn={"btn success bg-color"}>Success</Button>
                        <Button classBtn={"btn warning bg-color"}>Warning</Button>
                        <Button classBtn={"btn critical bg-color"}>Critical</Button>
                        <Button classBtn={"btn infos bg-color"}>Infos</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"btn primary"}>Primary</Button>
<Button classBtn={"btn secondary"}>Secondary</Button>
<Button classBtn={"btn success"}>Success</Button>
<Button classBtn={"btn warning"}>Warning</Button>
<Button classBtn={"btn critical"}>Critical</Button>
<Button classBtn={"btn infos"}>Infos</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button with Link</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The "href" attribute is used to specify the destination to which the link should navigate when clicked.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button href={"#"} classBtn={"btn primary bg-color"}>Click Me</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button href={"#"} classBtn={"btn primary bg-color"}>Click Me</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button with Icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Using the appropriate syntax, one can add Font Awesome icons alongside the button text.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button classBtn={"btn primary bg-color"}><i class="fa-solid fa-house"></i> Click Me</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"btn primary bg-color"}><i class="fa-solid fa-house"></i> Click Me</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button Disabled</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The "disabled" class is used to visually disable the button, indicating that it is inactive.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button classBtn={"btn disabled primary bg-color"}>Click Me</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"btn disabled primary bg-color"}>Click Me</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ButtonBase;