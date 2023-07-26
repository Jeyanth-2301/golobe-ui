import { createTheme } from "@mui/material/styles";
import typography from './typography';

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#8DD3BB",
        },
        background: {
            default: "#ffffff",
        },
        text: {
            primary: "rgba(255,255,255,1)",
            secondary: "rgba(255,255,255,0.6)"
        },
    },
    typography,
})

export default theme;