import React, {Component} from 'react';
import {Accordion, Code, Content, ProgressBar, Table, Tag, Title, WrapperExample} from "../../../../lib";

class ProgressBarBase extends Component {
    render() {
        return (
            <>
                <Title classTitle={"type1 heading"} lvl={"h1"}>ProgressBar</Title>
                <Title classTitle={"type2 mg-top-10"} lvl={"h2"}>Import</Title>
                <Code>
                    {`import {Carousel} from "@gabinrimbault/sf-frontend"`}
                </Code>
                <hr/>
                <Accordion>
                    <Accordion.Title>
                        <Title classTitle={"type3 mg-top-10"} lvl={"h3"}>Props</Title>
                    </Accordion.Title>
                    <Accordion.Body>
                        <Tag classTag={"critical bg-color"}>width</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            La prop `width` spécifie la largeur de la barre de progression en pourcentage.
                            Cela détermine visuellement l'avancement représenté par la barre.
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Exemple</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`
              <ProgressBar width={50}>
                {/* Contenu de la barre de progression */}
              </ProgressBar>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>height</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            La prop `height` spécifie la hauteur de la barre de progression.
                            Cela détermine l'épaisseur visuelle de la barre de progression (par défaut "2px").
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Exemple</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`
              <ProgressBar height="4px">
                {/* Contenu de la barre de progression */}
              </ProgressBar>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>color</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            La prop `color` spécifie la couleur de la barre de progression.
                            Cela détermine l'apparence visuelle de la barre de progression (par exemple, "#FF0000" pour le rouge).
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Exemple</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`
              <ProgressBar color="#00FF00">
                {/* Contenu de la barre de progression */}
              </ProgressBar>
            `}
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Tag classTag={"critical bg-color"}>classProgress</Tag>
                        <hr/>
                        <Content classContent={"font-small"}>
                            La prop `classProgress` permet de spécifier des classes CSS supplémentaires pour personnaliser le style de la barre de progression.
                            Cela permet de personnaliser l'apparence de la barre de progression en fonction de différents contextes ou styles.
                        </Content>
                        <Table classTable={"mg-bot-50"}>
                            <thead>
                            <tr>
                                <th scope="col">Exemple</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    {`
              <ProgressBar classProgress="custom-progress">
                {/* Contenu de la barre de progression */}
              </ProgressBar>
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
                        <ProgressBar classProgress={"mg-bot-10"} width={10} height={"10px"} color={"blue"}>10%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={25} height={"10px"} color={"yellow"}>25%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={50} height={"10px"} color={"green"}>50%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={75} height={"10px"} color={"orange"}>75%</ProgressBar>
                        <ProgressBar classProgress={"mg-bot-10"} width={100} height={"10px"} color={"red"}>100%</ProgressBar>
                    </WrapperExample.Component>
                    <WrapperExample.Code>
                        {`
                            <ProgressBar width={10} height={"10px"} color={"blue"}>10%</ProgressBar>
                            <ProgressBar width={25} height={"10px"} color={"yellow"}>25%</ProgressBar>
                            <ProgressBar width={50} height={"10px"} color={"green"}>50%</ProgressBar>
                            <ProgressBar width={75} height={"10px"} color={"orange"}>75%</ProgressBar>
                            <ProgressBar width={100} height={"10px"} color={"red"}>100%</ProgressBar>
                         `}
                    </WrapperExample.Code>
                </WrapperExample>
            </>
        );
    }
}

export default ProgressBarBase;