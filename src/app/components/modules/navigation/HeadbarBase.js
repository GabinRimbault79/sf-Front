import React, {Component} from 'react';
import {
    Accordion,
    Code,
    Content,
    HeadBar,
    Table,
    Tag,
    Title,
    WrapperExample
} from "../../../../lib";

const headBarData = {
    home: {
        liens: ["/", "Index"],
    },
    joinus: {
        liens: ["/joinus", "JoinUS"]
    },
    install: {
        liens: ["/install", "Install"]
    },
    doc: {
        liens: ["/doc", "Documentation"]
    }
};

const headBarIcons = {
    twitter: {
        liens: ["#", <i className="fa-brands fa-square-twitter"></i>]
    },
    github: {
        liens: ["#", <i className="fa-brands fa-square-github"></i>]
    },
    tag: {
        liens: ["#", <Tag classTag={"infos bg-color font-small"}>v 1.0.0</Tag>]
    }
}

class HeadbarBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Headbar</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Headbar} from "simpleframework-front"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>children</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `children` prop is used by `Accordion.Title` and `Accordion.Body` to define the content within each accordion section.
                            This allows you to specify the title and body content of each collapsible section within the `Accordion` component.
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
              <Accordion>
                <Accordion.Title>Title 1</Accordion.Title>
                <Accordion.Body>Content for section 1...</Accordion.Body>
              </Accordion>
            `}
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
                        <HeadBar data={headBarData} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`const headBarData = {
    home: {
        liens: ["/", "Index"],
    },
    joinus: {
        liens: ["/joinus", "JoinUS"]
    },
    install: {
        liens: ["/install", "Install"]
    },
    doc: {
        liens: ["/doc", "Documentation"]
    }
};

<HeadBar data={headBarData} />`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>HeadBar Icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <HeadBar data={headBarData} icons={headBarIcons} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`const headBarData = { ... };

const headBarIcons = {
    twitter: {
        liens: ["#", <i className="fa-brands fa-square-twitter"></i>]
    },
    github: {
        liens: ["#", <i className="fa-brands fa-square-github"></i>]
    },
    tag: {
        liens: ["#", <Tag classTag={"infos bg-color font-small"}>v 1.0.0</Tag>]
    }
}
<HeadBar data={headBarData} icons={headBarIcons} />`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default HeadbarBase;