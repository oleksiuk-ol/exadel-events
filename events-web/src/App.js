import { Box } from "@mui/material";
import Layout from "./layouts/Layout";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import Events from "./pages/Events";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Box className="App">
      {console.log("app.jsx")}
      <Layout>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="createEvent" element={<CreateEvent />} />
          <Route path="auth" element={<Authorization />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
