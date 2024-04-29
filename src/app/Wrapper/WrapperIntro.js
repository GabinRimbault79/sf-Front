import React, {Component} from 'react';
import {Alert, Content, Title} from "../../lib";

class WrapperIntro extends Component {
    render() {
        return (
            <>
                <Alert cross={false} classAlert={"important success bg-color mg-top-20 mg-bot-20"}>
                    Are you looking to add a new dimension to your React projects? Look no further! Our React library is the ultimate tool to boost your front-end development.
                </Alert>
                <Title classTitle={"type2"} lvl={"h2"}>🌟 Why choose our React library? 🌟</Title>
                <Content classContent={"mg-top-10 mg-bot-20"}>
                    - Unmatched Performance: Thanks to cutting-edge optimizations, our components react instantly, providing a seamless user experience. <br/>
                    - Infinitely Customizable: Easily modify and adapt our components to align perfectly with your creative vision. <br/>
                    - Active Support: Our team of experienced developers is here to answer your questions and resolve your issues in a flash. <br/>
                </Content>
                <Title classTitle={"type2"} lvl={"h2"}>⚡ Get started now! ⚡</Title>
                <Content classContent={"mg-top-10"}>
                    Integrate our React library into your projects and discover how it can revolutionize your web development approach.
                </Content>
                <Content classContent={"mg-top-10"}>
                    To get started, follow the steps below: <br/>
                    1. Easy Installation: Add our library to your project with just a few simple commands.<br/>
                    2. Quick Integration: Use our React components in your applications in no time.<br/>
                    3. Unlimited Customization: Get creative by adapting our components to your specific needs.<br/>
                </Content>
                <Content classContent={"mg-top-10"}>
                    Stay tuned for the release of our comprehensive documentation, which will guide you through all the library's features. We're working hard to provide you with the resources you need to make the most of our SF-Project FrontEnd React Library.
                </Content>
                <Content>
                    Join the front-end development revolution with the React Library. The future of your projects starts here! 💪
                </Content>
            </>
        );
    }
}

export default WrapperIntro;