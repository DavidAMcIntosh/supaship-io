import "./App.css";

import AllPosts from "./AllPosts";
import PostView from "./PostView";
import Welcome from "./Welcome";
import MessageBoard from "./MessageBoard";
import NavBar from "./NavBar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
    ],
  },
  {
    path: "welcome",
    element: <Welcome />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
