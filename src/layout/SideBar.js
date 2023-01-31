import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{justifyContent:"space-around"}}>
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
