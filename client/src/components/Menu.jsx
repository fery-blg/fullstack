import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useUser } from "../store/userstore";
import { logout } from "../service/service"
import { Link } from "react-router-dom";
export function Menu() {
  const [user, setUser] = useUser((state) => [state.user, state.setUser])

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="bg-blue-200 text-blue-800 border-b-2 border-blue-300">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="text-xl font-bold cursor-pointer py-2"
        >
          Material Tailwind
        </Typography>
        <div className="flex items-center gap-x-4">
      
          <Button variant="solid" size="sm" color="lightBlue">
            <Link to="/Login">Log In</Link>
          </Button>
          <Button variant="solid" size="sm" color="lightBlue">
            <Link to="/Register">Sign Up</Link>
          </Button>
          <Button variant="solid" size="sm" color="lightBlue">
            <Link to="/profile">Profile</Link>
          </Button>
          {user._id && <button onClick={() => {
        logout(); setUser({})
      }}>Logout</button>}
        </div>
      </div>
    </Navbar>
  );
}
