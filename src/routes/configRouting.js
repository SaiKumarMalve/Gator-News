import Home from "../page/Home";
import User from "../page/User";
import AllUsers from "../page/Users";
import Error404 from "../page/Error404";

export default [
  {
    path: "/allusers",
    exact: true,
    page: AllUsers,
  },
  {
    path: "/:id",
    exact: true,
    page: User,
  },
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "*",
    page: Error404,
  },
];