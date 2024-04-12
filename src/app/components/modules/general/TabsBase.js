import React, {Component} from 'react';
import {Content, GptTabs, Tabs, Title, WrapperExample} from "../../../../lib";

class TabsBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Tabs</Title>
                <Content>Use Tabs SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <GptTabs classTabs="custom-tabs">
                            <Tabs title="Tab 1">
                                <p>Contenu de l'onglet 1</p>
                            </Tabs>
                            <Tabs title="Tab 2">
                                <p>Contenu de l'onglet 2</p>
                            </Tabs>
                            <Tabs title="Tab 3">
                                <p>Contenu de l'onglet 3</p>
                            </Tabs>
                        </GptTabs>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <GptTabs classTabs="custom-tabs">
                                <Tabs title="Tab 1">
                                    <p>Contenu de l'onglet 1</p>
                                </Tabs>
                                <Tabs title="Tab 2">
                                    <p>Contenu de l'onglet 2</p>
                                </Tabs>
                                <Tabs title="Tab 3">
                                    <p>Contenu de l'onglet 3</p>
                                </Tabs>
                            </GptTabs>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default TabsBase;