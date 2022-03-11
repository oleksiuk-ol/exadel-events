import { Box } from "@mui/material";
import Layout from "./layouts/Layout";
import Authorization from "./pages/Authorization";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Box className="App">
      {console.log("app.jsx")}
      <Layout>
        <Routes>
          <Route path="auth" element={<Authorization />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
