import React, {Component} from 'react';
import {Carousel, Content, Title, WrapperExample} from "../../../../lib";

class CarouselBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Carousel</Title>
                <Content>Use Carousel SF-FRONT</Content>
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
                        {`
                            <Carousel>
                                <img src={"https://placehold.co/150x150"} alt="Image 1" />
                                <img src={"https://placehold.co/250x250"} alt="Image 2" />
                                <img src={"https://placehold.co/350x350"} alt="Image 3" />
                            </Carousel>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default CarouselBase;