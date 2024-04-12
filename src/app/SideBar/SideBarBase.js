import React, {Component} from 'react';
import {SideBar} from "../../lib";
import Accordion from "../../lib/components/modules/General/Accordion/Accordion";


class SideBarBase extends Component {
    render() {
        return (
            <>
                <Accordion>
                    <Accordion.Title>
                        <SideBar.Label>
                            Components Base
                        </SideBar.Label>
                    </Accordion.Title>
                    <Accordion.Body>
                        <SideBar.Item>
                            <SideBar.Link link={"/button"}>
                                Button
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/code"}>
                                Code
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/content"}>
                                Content
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/img"}>
                                Images
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/list"}>
                                List
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/tag"}>
                                Tag
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/title"}>
                                Title
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/wrapper"}>
                                Wrapper
                            </SideBar.Link>
                        </SideBar.Item>
                    </Accordion.Body>
                </Accordion>


            </>
        );
    }
}

export default SideBarBase;