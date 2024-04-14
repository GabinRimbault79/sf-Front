import React, {Component} from 'react';
import {Wrapper} from "../../lib";
import {Route, Routes} from "react-router-dom";
import MainIndex from "./MainIndex";
import ButtonBase from "../components/base/ButtonBase";
import ContentBase from "../components/base/ContentBase";
import ImgBase from "../components/base/ImgBase";
import ListBase from "../components/base/ListBase";
import TagBase from "../components/base/TagBase";
import TitleBase from "../components/base/TitleBase";
import WrapperBase from "../components/base/WrapperBase";
import AccordionBase from "../components/modules/general/AccordionBase";
import AlertBase from "../components/modules/general/AlertBase";
import WrapperInstall from "./WrapperInstall";
import CodeBase from "../components/base/CodeBase";
import WrapperDoc from "./WrapperDoc";
import WrapperJoinUs from "./WrapperJoinUs";
import CardBase from "../components/modules/general/CardBase";
import CarouselBase from "../components/modules/general/CarouselBase";
import ProgressBarBase from "../components/modules/general/ProgressBarBase";
import TabsBase from "../components/modules/general/TabsBase";
import BreadcrumbBase from "../components/modules/navigation/BreadcrumbBase";
import FooterBase from "../components/modules/navigation/FooterBase";
import HeadbarBase from "../components/modules/navigation/HeadbarBase";
import NavbarBase from "../components/modules/navigation/NavbarBase";
import SidebarBase from "../components/modules/navigation/SidebarBase";
import BlocInformationBase from "../components/modules/information/BlocInformationBase";
import TooltipBase from "../components/modules/information/TooltipBase";
import WrapperIntro from "./WrapperIntro";

class MainContent extends Component {
    render() {
        return (
            <Wrapper>
                <Routes>
                    <Route path="/" element={<MainIndex />} />
                    <Route path="/intro" element={<WrapperIntro />} />
                    <Route path="/joinus" element={<WrapperJoinUs />} />
                    <Route path="/doc" element={<WrapperDoc />} />
                    <Route path="/doc/install" element={<WrapperInstall />} />
                    <Route path="/doc/button" element={<ButtonBase />} />
                    <Route path="/doc/code" element={<CodeBase />} />
                    <Route path="/doc/content" element={<ContentBase />} />
                    <Route path="/doc/img" element={<ImgBase />} />
                    <Route path="/doc/list" element={<ListBase />} />
                    <Route path="/doc/tag" element={<TagBase />} />
                    <Route path="/doc/title" element={<TitleBase />} />
                    <Route path="/doc/wrapper" element={<WrapperBase />} />
                    <Route path="/doc/accordion" element={<AccordionBase />} />
                    <Route path="/doc/alert" element={<AlertBase />} />
                    <Route path="/doc/cards" element={<CardBase />} />
                    <Route path="/doc/carousel" element={<CarouselBase />} />
                    <Route path="/doc/progressbar" element={<ProgressBarBase />} />
                    <Route path="/doc/tabs" element={<TabsBase />} />
                    <Route path="/doc/breadcrumb" element={<BreadcrumbBase />} />
                    <Route path="/doc/footer" element={<FooterBase />} />
                    <Route path="/doc/headbar" element={<HeadbarBase />} />
                    <Route path="/doc/navbar" element={<NavbarBase />} />
                    <Route path="/doc/sidebar" element={<SidebarBase />} />
                    <Route path="/doc/blocinformation" element={<BlocInformationBase />} />
                    <Route path="/doc/tooltip" element={<TooltipBase />} />
                </Routes>
            </Wrapper>
        );
    }
}

export default MainContent;