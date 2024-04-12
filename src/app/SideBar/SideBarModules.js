import React, {Component} from 'react';
import {SideBar} from "../../lib";
import Accordion from "../../lib/components/modules/General/Accordion/Accordion";


class SideBarModules extends Component {
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
                            <SideBar.Link link={"/accordion"}>
                                Accordion
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/alert"}>
                                Alert
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/cards"}>
                                Cards
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/carousel"}>
                                Carousel
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/progressbar"}>
                                Progress Bar
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/tabs"}>
                                Tabs
                            </SideBar.Link>
                        </SideBar.Item>
                    </Accordion.Body>
                </Accordion>
            </>
        );
    }
}

export default SideBarModules;