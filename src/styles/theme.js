import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[900],
            contrastText: purple[50]
        }
    },
}); 