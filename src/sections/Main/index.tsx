import Button from "@components/Button"
import { Colors, Text, TitleH2, TitleH1 } from "@components/global.styles"
import React, { useState } from "react"
import { Fragment } from "react"
import { Row, Col } from "shards-react"
import { Containe, Content } from "./styles"
import Dropzone from "@components/Dropzone"
import TextArea from "@components/TextArea"

interface MainProps {
  name: string
}

const Main: React.FC<MainProps> = ({ name }) => {
  const onDataUrl = (str: string) => {
    setText(str)
  }

  const [text, setText] = useState("")

  return (
    <Fragment>
      <Containe>
        <Row>
          <Content>
            <TitleH1
              className="op1 big-text"
              style={{ marginTop: "2rem" }}
              colors={Colors.green}
            >
              Img to Base64
            </TitleH1>
            <Text style={{ fontSize: "20px" }} colors={Colors.pink}>
              Welcome to this utilitary tool that will help you to convert an
              image to a base 64 string with MarkDown support.
            </Text>
            <br />
            <Text className="small-text" colors={Colors.white}>
              Just paste your image and the utility will do the rest.
            </Text>
            <br />
            <Row>
              <Content>
                <Dropzone onDataUrl={onDataUrl}></Dropzone>
              </Content>
              <Content>
                <TextArea text={text}></TextArea>
              </Content>
            </Row>

            {/* <TitleH2
              className="big-text"
              style={{ marginTop: "3rem", marginBottom: "3rem", opacity: 0.7 }}
              colors={Colors.blue}
            >
              I build things for the web.
            </TitleH2>
            <Text className="small-text" colors={Colors.white}>
              Full stack Web developer based in Gatsby, I specialise in
              designing, building Performant web apps and apps.
            </Text> */}
            <br />
            <div className="content-button01">
              <Button
                title="Github"
                classes="btn01"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/andreilucaci/img-to-md-b64")
                }
              />
            </div>
          </Content>
        </Row>
      </Containe>
    </Fragment>
  )
}

export default Main
