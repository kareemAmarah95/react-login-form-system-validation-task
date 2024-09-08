import Home from "./Home";
import Profile from "./pages/Profile";
import ProfileHome from "./pages/ProfileHome";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import Layout from "./utils/Layout";

function App() {
  const router = createHashRouter([
    {
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "profile", element: <Profile /> },
        { path: "profileHome", element: <ProfileHome /> },
      ],
    },
  ]);
  return (
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<ProfileHome />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<div>About</div>} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </HashRouter>

    <RouterProvider router={router} />
  );
}

export default App;
