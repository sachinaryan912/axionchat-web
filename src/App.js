// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AxionChatLanding from "./AxionChatLanding";
import AxionChatOldVersions from "./AxionChatOldVersions";
import Features from "./pages/Features";
import Security from "./pages/Security";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<AxionChatLanding />} />
            <Route path="/features" element={<Features />} />
            <Route path="/security" element={<Security />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route
              path="/downloads/old-versions"
              element={<AxionChatOldVersions />}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
