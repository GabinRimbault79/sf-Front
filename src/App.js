import React from "react";
import "./lib/scss/all.css";
import {WrapperExample, NavBar, SideBar, Wrapper, HeadBar, Tag, Alert} from './lib'
import SideBarBase from "./app/SideBar/SideBarBase";
import MainContent from "./app/Wrapper/MainContent";
import SideBarModules from "./app/SideBar/SideBarModules";

const headBarData = {
    home: {
        liens: ["/", "Index"],
    },
    joinus: {
        liens: ["/joinus", "JoinUS"]
    },
    install: {
        liens: ["/install", "Install"]
    },
    doc: {
        liens: ["/doc", "Documentation"]
    }
};

const headBarIcons = {
    twitter: {
        liens: ["#", <i className="fa-brands fa-square-twitter"></i>]
    },
    github: {
        liens: ["#", <i className="fa-brands fa-square-github"></i>]
    },
    tag: {
        liens: ["#", <Tag classTag={"infos bg-color font-small"}>v 1.0.0</Tag>]
    }
}

function App() {
    return (
        <>
            <Alert classAlert={"infos bg-color center"}>
                <span className={"font-bold"}><i className="fa-solid fa-circle-info"></i> Community :</span> We need your feedback and support for <a
                href="#">the futur</a>.
            </Alert>
            <HeadBar data={headBarData} icons={headBarIcons} />
            <MainContent />
            <SideBar>
                <SideBarBase />
                <SideBarModules />
            </SideBar>
        </>
    )
}

export default App;