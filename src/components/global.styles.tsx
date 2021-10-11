import { theme } from "@config/theme"
import styled from "styled-components"

export enum Colors {
  pink = "pink",
  green = "green",
  blue = "blue",
  yellow = "yellow",
  orange = "orange",
  purple = "purple",
  white = "white",
}

const color = (props: { colors: string }) => {
  if (Colors.pink === props.colors) {
    return theme.colors.pink
  } else if (Colors.green === props.colors) {
    return theme.colors.green
  } else if (Colors.blue === props.colors) {
    return theme.colors.blue
  } else if (Colors.orange === props.colors) {
    return theme.colors.orange
  } else if (Colors.purple === props.colors) {
    return theme.colors.purple
  } else if (Colors.yellow === props.colors) {
    return theme.colors.yellow
  } else if (Colors.white === props.colors) {
    return theme.colors.white
  }
}

export const Text = styled.span`
  color: ${(props: { colors: string }) => {
    if (Colors.pink === props.colors) {
      return theme.colors.pink
    } else if (Colors.green === props.colors) {
      return theme.colors.green
    } else if (Colors.blue === props.colors) {
      return theme.colors.blue
    } else if (Colors.orange === props.colors) {
      return theme.colors.orange
    } else if (Colors.purple === props.colors) {
      return theme.colors.purple
    } else if (Colors.yellow === props.colors) {
      return theme.colors.yellow
    } else if (Colors.white === props.colors) {
      return theme.colors.white
    }
  }};
  margin-right: 0.51rem;
`

export const TitleH1 = styled.h1`
  color: ${(props: { colors: string }) => {
    if (Colors.pink === props.colors) {
      return theme.colors.pink
    } else if (Colors.green === props.colors) {
      return theme.colors.green
    } else if (Colors.blue === props.colors) {
      return theme.colors.blue
    } else if (Colors.orange === props.colors) {
      return theme.colors.orange
    } else if (Colors.purple === props.colors) {
      return theme.colors.purple
    } else if (Colors.yellow === props.colors) {
      return theme.colors.yellow
    } else if (Colors.white === props.colors) {
      return theme.colors.white
    }
  }};
  margin-right: 0.51rem;
  font-weight: bold;
`

export const TitleH2 = styled.h2`
  color: ${(props: { colors: string }) => {
    if (Colors.pink === props.colors) {
      return theme.colors.pink
    } else if (Colors.green === props.colors) {
      return theme.colors.green
    } else if (Colors.blue === props.colors) {
      return theme.colors.blue
    } else if (Colors.orange === props.colors) {
      return theme.colors.orange
    } else if (Colors.purple === props.colors) {
      return theme.colors.purple
    } else if (Colors.yellow === props.colors) {
      return theme.colors.yellow
    } else if (Colors.white === props.colors) {
      return theme.colors.white
    }
  }};
  margin-right: 0.51rem;
  font-weight: 900;
`
