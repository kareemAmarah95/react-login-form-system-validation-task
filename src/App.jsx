import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Home from "./Home"; // Replace with the correct path
import Profile from "./pages/Profile"; // Replace with the correct path
import ProfileHome from "./pages/ProfileHome"; // Replace with the correct path
import Login from "./Login"; // Replace with the correct path
import { useSelector } from "react-redux"; // Assuming you're using Redux to manage authentication state

// ProtectedRoutes Component
const ProtectedRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Assuming Redux manages auth state

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<ProfileHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
