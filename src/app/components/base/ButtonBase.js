import React, {Component} from 'react';
import {WrapperExample, Button, Title, Content, Code, Tag, ButtonGrp} from "../../../lib";
import Accordion from "../../../lib/components/modules/General/Accordion/Accordion";
import Table from "../../../lib/components/base/Table";

class ButtonBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Buttons</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Button} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>classBtn</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classBtn` prop allows you to specify additional CSS classes to style the button.
                            This can be used to apply custom styles such as colors, borders, or typography to the button component.
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
                                    {`<Button classBtn="custom-btn">Go to Dashboard</Button>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `children` prop represents the content to be displayed inside the button.
                            This can include text, other React elements, or components that you want to appear as the button's label.
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
                                    {`<Button>Edit Profile</Button>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>href</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `href` prop specifies the URL that the button should navigate to when clicked.
                            This is similar to an anchor ({`<a>`}) tag's `href` attribute and is used to define the target URL for navigation.
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
                                    {`<Button href="/about">Learn More</Button>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>size</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `size` prop determines the visual size of the button.
                            This can be `"xs"` (extra small), `"sm"` (small), `"md"` (medium), or `"lg"` (large), affecting the button's dimensions and appearance.
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
                                    {`<Button size="sm">Go to Dashboard</Button>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>variant</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `variant` prop specifies the visual style of the button.
                            This can be `"solid"` (default), `"outline"`, or `"link"`, determining the appearance of the button (solid background, outlined border, or text link style).
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
                                    {`<Button variant="outline">Edit Profile</Button>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>...props</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            This allows passing other props to the {`<button>`} component that is used inside {`<Button>`}.
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
                                    {`<Button onClick={handleClick}>My Button</Button>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Usage</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The {`<Button>`} component is intended to trigger an action or an event, such as submitting a form, opening a modal window, or any other type of action.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button size={"md"} classBtn={"primary bg-color"}>Primary</Button>
                        <Button size={"md"} classBtn={"secondary bg-color"}>Secondary</Button>
                        <Button size={"md"} classBtn={"success bg-color"}>Success</Button>
                        <Button size={"md"} classBtn={"warning bg-color"}>Warning</Button>
                        <Button size={"md"} classBtn={"critical bg-color"}>Critical</Button>
                        <Button size={"md"} classBtn={"infos bg-color"}>Infos</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"primary"}>Primary</Button>
<Button classBtn={"secondary"}>Secondary</Button>
<Button classBtn={"success"}>Success</Button>
<Button classBtn={"warning"}>Warning</Button>
<Button classBtn={"critical"}>Critical</Button>
<Button classBtn={"infos"}>Infos</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button Variants</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The prop variant is used to specify the visual style of the button: "solid" for a solid background, "outline" for an outlined border, or "link" for a text link style.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button classBtn={"primary bg-color"}>Solid</Button>
                        <Button variant={"outline"} classBtn={"primary bg-color"}>Outline</Button>
                        <Button variant={"link"} href={"#"} classBtn={"primary font-medium"}>Link</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"primary bg-color"}>Solid</Button>
<Button variant={"outline"} classBtn={"primary bg-color"}>Outline</Button>
<Button variant={"link"} href={"#"} classBtn={"primary font-medium"}>Link</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button with Link</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The "href" attribute is used to specify the destination to which the link should navigate when clicked.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button href={"#"} classBtn={"primary bg-color"}>Click Me</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button href={"#"} classBtn={"primary bg-color"}>Click Me</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button with Icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Using the appropriate syntax, one can add Font Awesome icons alongside the button text.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button size={"md"} classBtn={"primary bg-color"}><i className="fa-solid fa-house"></i> Click Me</Button>
                        <Button size={"md"} classBtn={"primary bg-color"}>Get Started <i className="fa-solid fa-arrow-right"></i></Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"primary bg-color"}><i className="fa-solid fa-house"></i> Click Me</Button>
<Button classBtn={"primary bg-color"}>Get Started <i className="fa-solid fa-arrow-right"></i></Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button Disabled</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The "disabled" class is used to visually disable the button, indicating that it is inactive.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button classBtn={"disabled primary bg-color"}>Click Me</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"disabled primary bg-color"}>Click Me</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button Size</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The prop size is used to determine the visual dimensions of the button: "xs" for extra small, "sm" for small, "md" for medium, or "lg" for large, affecting the button's appearance and size.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button classBtn={"primary bg-color"} size={"xs"}>XS</Button>
                        <Button classBtn={"primary bg-color"} size={"sm"}>SM</Button>
                        <Button classBtn={"primary bg-color"} size={"md"}>MD</Button>
                        <Button classBtn={"primary bg-color"} size={"lg"}>LG</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"primary bg-color"} size={"xs"}>XS</Button>
<Button classBtn={"primary bg-color"} size={"sm"}>SM</Button>
<Button classBtn={"primary bg-color"} size={"md"}>MD</Button>
<Button classBtn={"primary bg-color"} size={"lg"}>LG</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button Color</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Use the classButton prop to modify the button's style. You can choose from a selection of about ten predefined colors in your design system to customize the button's appearance.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Button size={"md"} classBtn={"primary bg-color"}>Primary</Button>
                        <Button size={"md"} classBtn={"secondary bg-color"}>Secondary</Button>
                        <Button size={"md"} classBtn={"success bg-color"}>Success</Button>
                        <Button size={"md"} classBtn={"warning bg-color"}>Warning</Button>
                        <Button size={"md"} classBtn={"critical bg-color"}>Critical</Button>
                        <Button size={"md"} classBtn={"infos bg-color"}>Infos</Button>
                        <Button size={"md"} classBtn={"grey bg-color"}>Grey</Button>
                        <Button size={"md"} classBtn={"red bg-color"}>Red</Button>
                        <Button size={"md"} classBtn={"orange bg-color"}>Orange</Button>
                        <Button size={"md"} classBtn={"yellow bg-color"}>Yellow</Button>
                        <Button size={"md"} classBtn={"green bg-color"}>Green</Button>
                        <Button size={"md"} classBtn={"blue bg-color"}>Blue</Button>
                        <Button size={"md"} classBtn={"purple bg-color"}>Purple</Button>
                        <Button size={"md"} classBtn={"linkedin bg-color"}>Linkedin</Button>
                        <Button size={"md"} classBtn={"facebook bg-color"}>Facebook</Button>
                        <Button size={"md"} classBtn={"messenger bg-color"}>Messenger</Button>
                        <Button size={"md"} classBtn={"whatsapp bg-color"}>Whatsapp</Button>
                        <Button size={"md"} classBtn={"twitter bg-color"}>Twitter</Button>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Button classBtn={"primary bg-color"}>Primary</Button>
<Button classBtn={"secondary bg-color"}>Secondary</Button>
<Button classBtn={"success bg-color"}>Success</Button>
<Button classBtn={"warning bg-color"}>Warning</Button>
<Button classBtn={"critical bg-color"}>Critical</Button>
<Button classBtn={"infos bg-color"}>Infos</Button>
<Button classBtn={"grey bg-color"}>Grey</Button>
<Button classBtn={"red bg-color"}>Red</Button>
<Button classBtn={"orange bg-color"}>Orange</Button>
<Button classBtn={"yellow bg-color"}>Yellow</Button>
<Button classBtn={"green bg-color"}>Green</Button>
<Button classBtn={"blue bg-color"}>Blue</Button>
<Button classBtn={"purple bg-color"}>Purple</Button>
<Button classBtn={"linkedin bg-color"}>Linkedin</Button>
<Button classBtn={"facebook bg-color"}>Facebook</Button>
<Button classBtn={"messenger bg-color"}>Messenger</Button>
<Button classBtn={"whatsapp bg-color"}>Whatsapp</Button>
<Button classBtn={"twitter bg-color"}>Twitter</Button>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Button Group</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>You can use the ButtonGrp component to group buttons. When you use the ButtonGrp component, it allows you to add a {`spacing`} prop that takes an integer. This integer is converted to "rem".</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <ButtonGrp spacing={1}>
                            <Button size="md" classBtn="success bg-color">Save</Button>
                            <Button size="md" classBtn="infos bg-color">Edit</Button>
                            <Button size="md" classBtn="critical bg-color">Delete</Button>
                        </ButtonGrp>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<ButtonGrp spacing={1}>
    <Button size="md" classBtn="success bg-color">Save</Button>
    <Button size="md" classBtn="infos bg-color">Edit</Button>
    <Button size="md" classBtn="critical bg-color">Delete</Button>
</ButtonGrp>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <WrapperExample>
                    <WrapperExample.Component>
                        <ButtonGrp spacing={0}>
                            <Button variant={"outline"} size="sm" classBtn="success bg-color">Save</Button>
                            <Button variant={"outline"} size="xs" classBtn="success bg-color"><i className="fa-solid fa-plus"></i></Button>
                        </ButtonGrp>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<ButtonGrp spacing={0}>
    <Button variant={"outline"} size="sm" classBtn="success bg-color">Save</Button>
    <Button variant={"outline"} size="xs" classBtn="success bg-color"><i className="fa-solid fa-plus"></i></Button>
</ButtonGrp>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ButtonBase;