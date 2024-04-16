import React, {Component} from 'react';
import {SideBar} from "../../lib";
import Accordion from "../../lib/components/modules/General/Accordion/Accordion";


class SideBarModulesInformation extends Component {
    render() {
        return (
            <>
                <Accordion>
                    <Accordion.Title>
                        <SideBar.Label>
                            Modules/Information
                        </SideBar.Label>
                    </Accordion.Title>
                    <Accordion.Body>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/blocinformation"}>
                                BlocInformation
                            </SideBar.Link>
                        </SideBar.Item>
                        <SideBar.Item>
                            <SideBar.Link link={"/doc/tooltip"}>
                                Tooltip
                            </SideBar.Link>
                        </SideBar.Item>
                    </Accordion.Body>
                </Accordion>
            </>
        );
    }
}

export default SideBarModulesInformation;