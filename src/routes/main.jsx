import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./Home";
import About from "./About";
import Login from "../components/Login/Login";
import DefaultLayout from "../layout";
import Dashboard from "./Dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Route>
  )
);
