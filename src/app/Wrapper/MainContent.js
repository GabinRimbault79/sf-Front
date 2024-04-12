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

class MainContent extends Component {
    render() {
        return (
            <Wrapper>
                <Routes>
                    <Route path="/" element={<MainIndex />} />
                    <Route path="/joinus" element={<WrapperJoinUs />} />
                    <Route path="/doc" element={<WrapperDoc />} />
                    <Route path="/install" element={<WrapperInstall />} />
                    <Route path="/button" element={<ButtonBase />} />
                    <Route path="/code" element={<CodeBase />} />
                    <Route path="/content" element={<ContentBase />} />
                    <Route path="/img" element={<ImgBase />} />
                    <Route path="/list" element={<ListBase />} />
                    <Route path="/tag" element={<TagBase />} />
                    <Route path="/title" element={<TitleBase />} />
                    <Route path="/wrapper" element={<WrapperBase />} />
                    <Route path="/accordion" element={<AccordionBase />} />
                    <Route path="/alert" element={<AlertBase />} />
                    <Route path="/cards" element={<CardBase />} />
                    <Route path="/carousel" element={<CarouselBase />} />
                    <Route path="/progressbar" element={<ProgressBarBase />} />
                    <Route path="/tabs" element={<TabsBase />} />
                </Routes>
            </Wrapper>
        );
    }
}

export default MainContent;