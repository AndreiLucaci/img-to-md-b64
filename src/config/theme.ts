const sizes = {
  tablet: "1200px",
  phone: "600px",
}

export const theme = {
  colors: {
    pink: "#FC4675",
    background: "#1D1E19",
    lightBackground: "#2D2E27",
    darkBackground: "#211E22",
    orange: "#F88454",
    yellow: "#FED054",
    green: "#9AD863",
    blue: "#69D5E2",
    purple: "#9B86EE",
    white: "#FCFFEC",
  },

  media: {
    tablet: `(max-width: ${sizes.tablet})`,
    phone: `(max-width: ${sizes.phone})`,
  },
}
