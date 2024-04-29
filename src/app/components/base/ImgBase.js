import React, {Component} from 'react';
import {Code, Content, Img, Tag, Title, Accordion, Table, WrapperExample} from "../../../lib";

class ImgBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Images</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Img} from "simpleframework-front"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>src</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `src` prop specifies the source URL of the image to be displayed.
                            This is essential for rendering the correct image content within the {`<Img>`} component.
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
                                    {`<Img src="https://example.com/image.jpg" />`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>alt</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `alt` prop provides alternative text for the image, which is important for accessibility.
                            Screen readers use this text to describe the image to visually impaired users.
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
                                    {`<Img alt="Example Image" />`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>classImg</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classImg` prop allows you to specify additional CSS classes to style the image.
                            This can be used to apply custom styles such as size, borders, shadows, or filters to the image.
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
                                    {`<Img classImg="custom-img" />`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>link</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `link` prop specifies the URL that the image should navigate to when clicked.
                            If provided, the image will be wrapped in a {`<Link>`} component, enabling navigation on click.
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
                                    {`<Img link="/details" />`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Usage</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>The Img component is used to display an image with options to specify the URL (src), alternate text (alt), and a custom CSS class (classImg). If no URL is provided, a default placeholder image is displayed.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Img classImg={"mg-r-10"}/>
                        <Img classImg={"mg-r-10"} src={"https://placehold.co/150x150"} />
                        <Img alt={"Default Image"} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Img />
<Img src={"https://placehold.co/150x150"} />
<Img alt={"Default Image"} />`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Border</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Add a border to the image.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Img classImg={"img_border"}/>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Img classImg={"img_border"}/>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Rounded</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Round the image</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Img classImg={"img_rounded"}/>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Img classImg={"img_rounded"}/>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Image with Link</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Add link to image</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <Img link={"/img"} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Img link={"/images"} />`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ImgBase;