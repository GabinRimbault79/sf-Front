import React, {Component} from 'react';
import {Accordion, Button, Cards, Code, Content, GptCards, Table, Tag, Title, WrapperExample} from "../../../../lib";

class CardBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>Cards</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Cards} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>link</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `link` prop specifies the URL to which the card link should navigate.
                            This allows you to make the card clickable and redirect users to a specific location when clicked.
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
              <Cards link="/details">
                <Content>Content Cards</Content>
              </Cards>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>

                        <Tag classTag={"critical bg-color"}>classCards</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `classCards` prop allows you to specify additional CSS classes to style the card.
                            This enables custom styling of the card's appearance based on different contexts or styles.
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
              <Cards classCards="custom-card">
                <Content>Content Cards</Content>
              </Cards>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>src (for Cards.Header)</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `src` prop specifies the URL of the image to display in the card header (optional).
                            This allows you to include an image in the card header for visual representation or branding.
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
              <Cards.Header src="https://example.com/image.jpg">
              </Cards.Header>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>title (for Cards.Header)</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            The `title` prop specifies the HTML heading level (e.g., h1, h2, h3) for the card header title (default is h2).
                            This allows you to control the semantic structure of the header title within the card.
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
              <Cards.Header title="h3">
                {/* Header content */}
              </Cards.Header>
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
                        <GptCards>
                            <Cards>
                                <Cards.Header>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                        </GptCards>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<GptCards>
            <Cards>
                <Cards.Header>
                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                </Cards.Header>
                <Cards.Body>
                    <Content>Lorem Ipsum</Content>
                </Cards.Body>
                <Cards.Footer>
                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                </Cards.Footer>
            </Cards>
        </GptCards>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Multiple Cards</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <GptCards>
                            <Cards>
                                <Cards.Header>
                                    <i className="fa-brands fa-dev"></i>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                            <Cards>
                                <Cards.Header>
                                    <i className="fa-brands fa-dev"></i>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                            <Cards>
                                <Cards.Header>
                                    <i className="fa-brands fa-dev"></i>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                                <Cards.Footer>
                                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                                </Cards.Footer>
                            </Cards>
                        </GptCards>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<GptCards>
            <Cards>
                <Cards.Header>
                    <i className="fa-brands fa-dev"></i>
                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                </Cards.Header>
                <Cards.Body>
                    <Content>Lorem Ipsum</Content>
                </Cards.Body>
                <Cards.Footer>
                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                </Cards.Footer>
            </Cards>
            <Cards>
                <Cards.Header>
                    <i className="fa-brands fa-dev"></i>
                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                </Cards.Header>
                <Cards.Body>
                    <Content>Lorem Ipsum</Content>
                </Cards.Body>
                <Cards.Footer>
                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                </Cards.Footer>
            </Cards>
            <Cards>
                <Cards.Header>
                    <i className="fa-brands fa-dev"></i>
                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                </Cards.Header>
                <Cards.Body>
                    <Content>Lorem Ipsum</Content>
                </Cards.Body>
                <Cards.Footer>
                    <Button classBtn={"primary bg-color"} size={"lg"}>Click Me</Button>
                </Cards.Footer>
            </Cards>
        </GptCards>`}
                    </WrapperExample.Code>
                </WrapperExample>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Cards Link</Title>
                <Content classContent={"mg-top-10 mg-bot-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tortor sit amet libero maximus ullamcorper. Integer augue justo, porttitor sed lacinia non, congue et diam.</Content>
                <WrapperExample>
                    <WrapperExample.Component>
                        <GptCards>
                            <Cards link={"#"}>
                                <Cards.Header>
                                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                                </Cards.Header>
                                <Cards.Body>
                                    <Content>Lorem Ipsum</Content>
                                </Cards.Body>
                            </Cards>
                        </GptCards>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`<GptCards>
            <Cards link={"#"}>
                <Cards.Header>
                    <Title classTitle={"type3"} lvl={"h3"}>Header</Title>
                </Cards.Header>
                <Cards.Body>
                    <Content>Lorem Ipsum</Content>
                </Cards.Body>
            </Cards>
        </GptCards>`}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default CardBase;