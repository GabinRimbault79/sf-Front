import React, {Component} from 'react';
import {SideBar} from "../../lib";
import Accordion from "../../lib/components/modules/General/Accordion/Accordion";


class SideBarModulesBase extends Component {
    render() {
        return (
            <>
                <Accordion>
                    <Accordion.Title>
                        <SideBar.Label>
                            Modules/General
                        </SideBar.Label>
                    </Accordion.Title>
                    <Accordion.Body>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/accordion"}>
                                Accordion
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/alert"}>
                                Alert
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/cards"}>
                                Cards
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/carousel"}>
                                Carousel
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/progressbar"}>
                                Progress Bar
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/tabs"}>
                                Tabs
                            </SideBar.Link>
                        </SideBar.Item>
                    </Accordion.Body>
                </Accordion>
            </>
        );
    }
}

export default SideBarModulesBase;