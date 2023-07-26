import { createTheme } from "@mui/material/styles";
import typography from './typography';

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2f8af5",
        },
        background: {
            default: "#ffffff",
        },
        text: {
            secondary: "rgba(255,255,255,0.6)"
        },
    },
    typography,
})

export default theme;