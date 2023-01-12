import React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar } from "@mui/material/";
import { Box } from "@mui/material/";
import { Toolbar } from "@mui/material/";
import { Typography } from "@mui/material/";
import { Button } from "@mui/material/";
import { IconButton } from "@mui/material/";
import { Drawer } from "@mui/material/";
import { Hidden } from "@mui/material";
import { List } from "@mui/material/";
import { Link } from "@mui/material/";
import { ListItem } from "@mui/material/";
import { ListItemButton } from "@mui/material/";
import { ListItemIcon } from "@mui/material/";
import { ListItemText } from "@mui/material/";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Settings from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

export const Navigation = () => {
  const [isOpenDrawer, isSetOpenDrawer] = useState<boolean>(false);
  const navItems: Array<string> = ["Home", "Settings", "Other"];

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Home", "Settings"].map((text: string, index: number) => (
          <Button component={RouterLink} to={index === 0 ? "/" : `/${text}`}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AddHomeIcon /> : <Settings />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Button>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Drawer
            sx={{ width: 250 }}
            anchor={"left"}
            open={isOpenDrawer}
            onClose={() => {
              isSetOpenDrawer(false);
            }}
          >
            {list()}
          </Drawer>
          <Toolbar>
            <Hidden only={["xl", "lg", "md"]}>
              <IconButton
                onClick={() => isSetOpenDrawer(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Link
              sx={{ flexGrow: "1", display: "block" }}
              component={RouterLink}
              to={"/"}
            >
              <Typography sx={{ color: "#fff" }} variant="h6" component="div">
                Movie-APP
              </Typography>
            </Link>

            <Box sx={{ display: { xs: "none", sm: "block", color: "#fff" } }}>
              {navItems.map((item: string, index: number) => (
                <Button
                  component={RouterLink}
                  sx={{ color: "#fff" }}
                  to={index === 0 ? "/" : `/${item}`}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
