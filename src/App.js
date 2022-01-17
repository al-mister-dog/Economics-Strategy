import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import AppRoutes from "./routes/routes"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}
export default App;
