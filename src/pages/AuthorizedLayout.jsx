import { Authorized } from "../auth/Authorized";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function AuthorizedLayout() {
  return (
    <>
    <Authorized>
      <NavBar />
      <Outlet /> 
    </Authorized>
    </>
  );
}