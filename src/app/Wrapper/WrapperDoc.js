import React, {Component} from 'react';
import {Content, SideBar, Title} from "../../lib";
import SideBarBase from "../SideBar/SideBarBase";
import SideBarModules from "../SideBar/SideBarModules";

class WrapperDoc extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type2 heading"} lvl={"h2"}>SimpleFramework Front - Free and Open Source UI Component Library</Title>
                <hr/>
                <Content>Discover the SF-Front React UI components, available as open source, and start building modern web applications using React components.</Content>
                <Content>SimpleFramework Front - React is a free and open source UI component library based on the core elements of SF-Front, developed with React components and interactive management.</Content>
                <Content>This library offers a variety of interactive elements such as navigation bars, dropdown menus, modals, and sidebars, all powered by React.</Content>
            </>
        );
    }
}

export default WrapperDoc;