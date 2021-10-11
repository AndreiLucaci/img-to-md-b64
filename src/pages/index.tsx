import GlobalLayout from "@layouts/index"
import Main from "@sections/Main"
import * as React from "react"

const IndexPage = (props: any) => {
  return (
    <GlobalLayout {...props}>
      <Main name="Gastby Starter" />
    </GlobalLayout>
  )
}

export default IndexPage
