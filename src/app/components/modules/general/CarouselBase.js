import React, {Component} from 'react';
import {Accordion, Carousel, Code, Content, Table, Tag, Title, WrapperExample} from "../../../../lib";

class CarouselBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Carousel</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Carousel} from "simpleframework-front"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>classCarousel</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classCarousel` prop allows you to specify additional CSS classes to style the carousel container.
                            This enables custom styling of the carousel's appearance based on different contexts or styles.
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
              <Carousel classCarousel="custom-carousel">
                {/* Carousel content */}
              </Carousel>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critica bg-color"}>slideInterval</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `slideInterval` prop specifies the interval (in milliseconds) for automatic sliding of images in the carousel.
                            This determines how often the carousel transitions to the next image automatically.
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
              <Carousel slideInterval={3000}>
                {/* Carousel content */}
              </Carousel>
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
                        <Carousel>
                            <img src={"https://placehold.co/150x150"} alt="Image 1" />
                            <img src={"https://placehold.co/250x250"} alt="Image 2" />
                            <img src={"https://placehold.co/350x350"} alt="Image 3" />
                        </Carousel>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<Carousel>
    <img src={"https://placehold.co/150x150"} alt="Image 1" />
    <img src={"https://placehold.co/250x250"} alt="Image 2" />
    <img src={"https://placehold.co/350x350"} alt="Image 3" />
</Carousel>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default CarouselBase;