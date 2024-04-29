import React, {Component} from 'react';
import {Accordion, Code, Content, List, Table, Tag, Title, WrapperExample} from "../../../lib";
const data = ["Pomme", "Banane", "Orange"];
const link = {
    about: {
        liens: ["/about#root", "A propos"]
    },
    experiences: {
        liens: ["/experiences#root", "Experiences"]
    },
    labs: {
        liens: ["/labs#root", "Labs"]
    },
    contact: {
        liens: ["/contact#root", "Contact"]
    }
};

const icons = {
    twitter: {
        liens: ["https://twitter.com/rimbault_gabin", <i className="fa-brands fa-square-twitter"></i>]
    },
    linkedin: {
        liens: ["https://www.linkedin.com/in/gabin-rimbault/", <i className="fa-brands fa-linkedin"></i>]
    },
    github: {
        liens: ["https://github.com/GabinRimbault", <i className="fa-brands fa-square-github"></i>]
    },
    mail: {
        liens: ["mailto:gabin.rimbault@icloud.com?subject='Hello ! from Website'", <i className="fa-solid fa-envelope"></i>]
    }
}

const listIcons = {
    dashboard: {
        liens: ["#", "Dashboard"],
        icons: ["left", "🌐"]
    },
    contact: {
        liens: ["#", "Contact"],
        icons: ["right", "📘"]
    }
};

class ListBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>List</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {List} from "simpleframework-front"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>type</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `type` prop specifies the type of list to render.
                            Valid values are `"ul"` (unordered list) or `"ol"` (ordered list).
                            If not provided, the list defaults to an unordered list (`"ul"`).
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
                                    {`<List type="ul" data={["Item 1", "Item 2", "Item 3"]} />`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`<List type="ol" data={["Item 1", "Item 2", "Item 3"]} />`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>data</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `data` prop specifies the content of the list.
                            It can be an array of strings or an object representing list items.
                            Each item in the array or object is rendered as a list item ({`<li>`}).
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
                                    {`<List data={["Item 1", "Item 2", "Item 3"]} />`}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`
            <List
              data={{
                item1: { liens: ["/link1", "Link 1"], icons: ["left", "<"] },
                item2: { liens: ["/link2", "Link 2"], icons: ["right", ">"] }
              }}
            />
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>classList</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classList` prop allows you to specify additional CSS classes to apply to the {`<ul>`} or {`<ol>`} element.
                            This can be used to customize the styling of the list container.
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
                                    {`<List type="ul" data={["Item 1", "Item 2", "Item 3"]} classList="custom-list" />`}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>classLink</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classLink` prop allows you to specify additional CSS classes to apply to the {`<Link>`} components within list items.
                            This can be used to customize the styling of the links within the list.
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
                                    {`
            <List
              type="ul"
              data={{
                item1: { liens: ["/link1", "Link 1"], icons: ["left", "<"] },
                item2: { liens: ["/link2", "Link 2"], icons: ["right", ">"] }
              }}
              classLink="custom-link"
            />
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion>
                <hr/>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Usage</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List data={data} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`const data = ["Pomme", "Banane", "Orange"];
<List data={data} type={"ul"} />`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Link</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List classList={"list_link"} data={link} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`const link = {
    about: {liens: ["/about#root", "A propos"]},
    experiences: {liens: ["/experiences#root", "Experiences"]},
    labs: {liens: ["/labs#root", "Labs"]},
    contact: {liens: ["/contact#root", "Contact"]}
};
<List classList={"list_link"} data={link} />`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>GptList</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List classList={"mg-l-10 list_link gpt-list"} data={link} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`const link = { ... };
<List data={link} classList={"gpt-list"} />`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List data={icons} />
                        <List classList={"list_link center"} data={icons} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`const icons = {
    twitter: {
        liens: ["#", <i className="fa-brands fa-square-twitter"></i>]
    },
    linkedin: {
        liens: ["#", <i className="fa-brands fa-linkedin"></i>]
    },
    github: {
        liens: ["#", <i className="fa-brands fa-square-github"></i>]
    },
    mail: {
        liens: ["#", <i className="fa-solid fa-envelope"></i>]
    }
}
<List data={icons} />
<List classList={"list_link"} data={icons} />`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>List Icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List data={listIcons} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`const listIcons = {
    dashboard: {
        liens: ["#", "Dashboard"],
        icons: ["left", "🌐"]
    },
    contact: {
        liens: ["#", "Contact"],
        icons: ["right", "📘"]
    }
};
<List data={listIcons} />`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ListBase;