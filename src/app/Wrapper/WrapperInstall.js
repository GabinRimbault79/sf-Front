import React, {Component} from 'react';
import {Code, Content, Title, Wrapper} from "../../lib";

class WrapperInstall extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type2 heading"} lvl={"h2"}>Install</Title>
                <Content classContent={"mg-bot-10"}>Requis you need to have the latest version of the SF-FRONT</Content>
                <Code>
                    npm i simpleframework-front
                </Code>
                <hr/>
                <Title classTitle={"type2 heading"} lvl={"h2"}>Run Locally</Title>
                <Content classContent={"mg-bot-10"}>Clone the project</Content>
                <Code>
                    git clone https://github.com/GabinRimbault79/sf-Front.git
                </Code>
                <Content classContent={"mg-top-10 mg-bot-10"}>Go to the project directory</Content>
                <Code>
                    cd sf-Front
                </Code>
                <Content classContent={"mg-top-10 mg-bot-10"}>Install the project</Content>
                <Code>
                    npm install
                </Code>
                <Content classContent={"mg-top-10 mg-bot-10"}>Run the project</Content>
                <Code>
                    npm run start
                </Code>
                <hr/>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem Ipsum. Dorlor si amet.</Content>
            </>
        );
    }
}

export default WrapperInstall;