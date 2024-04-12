import React, {Component} from 'react';
import {Content, List, Title, Wrapper, WrapperExample} from "../../../lib";
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
                <Content>Use List SF-FRONT</Content>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Example</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List data={data} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            const data = ["Pomme", "Banane", "Orange"];
                            <List data={data} type={"ul"} />
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Link</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List classList={"list_link"} data={link} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            const link = {
                                about: {liens: ["/about#root", "A propos"]},
                                experiences: {liens: ["/experiences#root", "Experiences"]},
                                labs: {liens: ["/labs#root", "Labs"]},
                                contact: {liens: ["/contact#root", "Contact"]}
                            };
                            <List classList={"list_link"} data={link} />
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>GptList</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List classList={"mg-l-10 list_link gpt-list"} data={link} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            const link = { ... };
                            <List data={link} classList={"gpt-list"} />
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List data={icons} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            const icons = {
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
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>List Icons</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <List data={listIcons} />
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
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
                            <List data={listIcons} />
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ListBase;