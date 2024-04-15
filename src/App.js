import React from "react";
import "./lib/scss/all.css";
import "./app/scss/_all_components.css"
import {SideBar, HeadBar, Tag, Alert} from './lib'
import SideBarBase from "./app/SideBar/SideBarBase";
import MainContent from "./app/Wrapper/MainContent";
import SideBarModulesBase from "./app/SideBar/SideBarModulesBase";
import MainFooter from "./app/Wrapper/MainFooter";
import SideBarModulesNavigation from "./app/SideBar/SideBarModulesNavigation";
import SideBarModulesInformation from "./app/SideBar/SideBarModulesInformation";
import SideBarStarted from "./app/SideBar/SideBarStarted";
import {useLocation} from "react-router-dom";

const headBarData = {
    home: {
        liens: ["/", "Index"],
    },
    joinus: {
        liens: ["/joinus", "JoinUS"]
    },
    install: {
        liens: ["/doc/install", "QuickStart"]
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
    const location = useLocation();
    const isDocRoute = location.pathname.startsWith("/doc");

    return (
        <>
            <Alert classAlert={"mg-top-10 infos bg-color center"}>
                <span className={"font-bold"}><i className="fa-solid fa-circle-info"></i> Community :</span> We need your feedback and support for <a
                href="#">the futur</a>.
            </Alert>
            <HeadBar data={headBarData} icons={headBarIcons} />
            <MainContent />
            {isDocRoute && (
                <SideBar classSideBar={"menuLeft"}>
                    <SideBarStarted />
                    <SideBarBase />
                    <SideBarModulesBase />
                    <SideBarModulesInformation />
                    <SideBarModulesNavigation />
                </SideBar>
            )}
            <MainFooter />
        </>
    )
}

export default App;