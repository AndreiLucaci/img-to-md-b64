import { Colors, Text, TitleH1 } from "@components/global.styles"
import { theme } from "@config/theme"
import React, { FC, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Card, CardBody, CardFooter, CardHeader } from "shards-react"
import styled from "styled-components"

const Cards = styled(Card)`
  border-radius: 5px !important;
  background-color: ${theme.colors.background} !important;
  border-color: ${theme.colors.pink};
  border-width: 3px;
  color: white;
`

type Props = {
  // onDrop: (acceptedFiles: File[]) => void
  onDataUrl: (dataUrl: string) => void
}

const DropzoneComponent: FC<Props> = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log("file reading was aborted")
      reader.onerror = () => console.log("file reading has failed")
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
        props.onDataUrl(binaryStr as string)
      }
      reader.readAsDataURL(file)
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        borderColor: theme.colors.pink,
        borderWidth: "3px !important",
      }}
    >
      <Cards style={{ maxWidth: "400px" }}>
        <CardHeader>
          <TitleH1 colors={Colors.blue} style={{ fontSize: "2rem" }}>
            DropZone
          </TitleH1>
        </CardHeader>
        <CardBody>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <img />
          </div>
        </CardBody>
        <CardFooter>
          <Text colors={Colors.pink}>Image area</Text>
        </CardFooter>
      </Cards>
    </div>
  )
}

export default DropzoneComponent
