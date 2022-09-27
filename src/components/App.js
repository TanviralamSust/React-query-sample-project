import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import UserIntegration from "./pages/UserIntegration";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-create/:id" element={<UserIntegration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
