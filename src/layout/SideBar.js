import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" onClick={()=>navigate("/")}>
              Characters
            </Typography>
            <Typography variant="h6" component="div" onClick={()=>navigate("/locations")}>
              Locations
            </Typography>
            <Typography variant="h6" component="div" onClick={()=>navigate("/episodes")}>
              Episodes
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
