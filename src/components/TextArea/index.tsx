import React, { FC, useState } from "react"
import Dropzone from "react-dropzone"
import { theme } from "@config/theme"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormTextarea } from "shards-react"
import { Colors, Text, TitleH2, TitleH1 } from "@components/global.styles"
import styled from "styled-components"

const TextArea = styled(FormTextarea)`
  border-radius: 5px !important;
  background-color: ${theme.colors.background} !important;
  border-color: ${theme.colors.pink};
  border-width: 3px;
  color: white;
`

type Props = {
  text?: string
}

const TextAreaComponent: FC<Props> = (props) => {
  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        borderWidth: "3px",
        borderColor: theme.colors.pink,
      }}
    >
      <textarea
        className="mb-2"
        readOnly={true}
        style={{
          maxWidth: "600px",
          display: "block",
          wordBreak: "break-word",
          backgroundColor: theme.colors.background,
          color: theme.colors.white,
        }}
        value={
          (props.text && `🗣 ${props.text}`) ||
          "🤔 Waiting for you to paste an image in the dropzone..."
        }
      ></textarea>
      <br />
    </div>
  )
}

export default TextAreaComponent
