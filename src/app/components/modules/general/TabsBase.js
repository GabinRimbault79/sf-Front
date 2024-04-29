import React, {Component} from 'react';
import {Accordion, Code, Content, GptTabs, Table, Tabs, Tag, Title, WrapperExample} from "../../../../lib";

class TabsBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Tabs</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Tabs} from "simpleframework-front"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>title</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            This prop represents the title of the tab. It is not used in the `Tabs` component itself, but it can be useful if you want to have a title for each tab.
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Tabs title="My Tab">Tab Content</Tabs>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>

                        <Tag classTag={"critical bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            This prop represents the content that will be displayed inside the `Tabs` component.
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`<Tabs>Tab Content</Tabs>`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
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
                        {`<GptTabs classTabs="custom-tabs">
    <Tabs title="Tab 1">
        <p>Contenu de l'onglet 1</p>
    </Tabs>
    <Tabs title="Tab 2">
        <p>Contenu de l'onglet 2</p>
    </Tabs>
    <Tabs title="Tab 3">
        <p>Contenu de l'onglet 3</p>
    </Tabs>
</GptTabs>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default TabsBase;