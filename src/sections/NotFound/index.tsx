import { Colors, TitleH1, TitleH2 } from "@components/global.styles"
import * as React from "react"
import { Container } from "./styles"

const NotFound = () => {
  return (
    <Container>
      <TitleH1 className="four-title" colors={Colors.pink}>
        404
      </TitleH1>
      <TitleH2 className="four-not" colors={Colors.blue}>
        Not Found
      </TitleH2>
    </Container>
  )
}

export default NotFound
