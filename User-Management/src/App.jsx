import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, purple, green} from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import UserList from './UserList.jsx'

const theme = createTheme({
  palette: {
    primary:{
      main: purple[500],
    },
    secondary:{
      main: red[500],
    },
     ternary:{
      main: green[700],
    },

  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <UserList />
    </ThemeProvider>
  )
}

export default App
