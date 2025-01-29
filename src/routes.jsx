import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;