import React, {Component} from 'react';
import {SideBar} from "../../lib";
import Accordion from "../../lib/components/modules/General/Accordion/Accordion";


class SideBarStarted extends Component {
    render() {
        return (
            <>
                <Accordion>
                    <Accordion.Title>
                        <SideBar.Label>
                            Getting Started
                        </SideBar.Label>
                    </Accordion.Title>
                    <Accordion.Body>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/intro"}>
                                Introduction
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/install"}>
                                QuickStart
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"https://github.com/GabinRimbault79/sf-Front/releases"}>
                                Release
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"https://github.com/GabinRimbault79/sf-Front/blob/main/LICENSE"}>
                                License
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"https://github.com/GabinRimbault79/sf-Front/tree/main/Doc"}>
                                Changelog
                            </SideBar.Link>
                        </SideBar.Item>
                    </Accordion.Body>
                </Accordion>


            </>
        );
    }
}

export default SideBarStarted;