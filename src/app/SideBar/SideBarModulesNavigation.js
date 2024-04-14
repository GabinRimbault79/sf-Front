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
                            Modules/Navigation
                        </SideBar.Label>
                    </Accordion.Title>
                    <Accordion.Body>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/breadcrumb"}>
                                BreadCrumb
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/footer"}>
                                Footer
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/headbar"}>
                                HeadBar
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/navbar"}>
                                NavBar
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/sidebar"}>
                                SideBar
                            </SideBar.Link>
                        </SideBar.Item>
                    </Accordion.Body>
                </Accordion>
            </>
        );
    }
}

export default SideBarModulesBase;