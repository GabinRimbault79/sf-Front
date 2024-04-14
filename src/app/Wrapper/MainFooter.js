import React, {Component} from 'react';
import {Content, Footer} from "../../lib";

class MainFooter extends Component {
    render() {
        return (
            <>
                <Footer>
                    <Content classContent={"center"}>Designed & Build by Gabin Rimbault © 2023-present</Content>
                </Footer>
            </>
        );
    }
}

export default MainFooter;