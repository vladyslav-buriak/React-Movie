import { FC } from "react";
import React, { useContext } from "react";
import { MenuLanguage } from "./MenuLanguage";
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
import { getRgbaColor, PRIMARY_BG_GRADIENT } from "../themes";
import { FormattedMessage } from "react-intl";
import { styled } from "@mui/material/styles";
import { AppContext } from "../../providers/AppContext";
import { useCallback } from "react";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Settings from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

const Header = styled(AppBar)(({}) => ({
  background: PRIMARY_BG_GRADIENT,
}));

export const Navigation: FC = () => {
  const { dispatch } = useContext(AppContext);
  const [isOpenDrawer, isSetOpenDrawer] = useState<boolean>(false);
  const navItems: Array<string> = ["home", "settings", "recommends"];

  const setLanguage = useCallback((locale: string) => {
    dispatch({
      type: "SET_LOCALE_LANGUAGE",
      locale,
    });
  }, []);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Home", "Settings"].map((text: string, index: number) => (
          <Button
            key={text}
            component={RouterLink}
            to={index === 0 ? "/" : `/${text}`}
          >
            <ListItem disablePadding>
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
    <Box sx={{ flexGrow: 1 }}>
      <Header position="static">
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
            sx={{ flexGrow: "1", display: "block", textDecoration: "none" }}
            component={RouterLink}
            to={"/"}
          >
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Montserrat ,sans-serif",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.25rem",
                "&:hover": {
                  color: getRgbaColor(".7"),
                },
              }}
              variant="h6"
              component="div"
            >
              <FormattedMessage id={"logo"} />
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", sm: "flex", color: "#fff" } }}>
            {navItems.map((item: string, index: number) => (
              <Button
                key={index}
                component={RouterLink}
                sx={{
                  color: "#fff",
                  margin: "0 .5rem",
                  "&:hover": {
                    color: getRgbaColor(".7"),
                    background: "none",
                  },
                }}
                to={index === 0 ? "/" : `/${item}`}
              >
                <FormattedMessage id={`navigation.${item}`} />
              </Button>
            ))}

            <MenuLanguage setLanguage={setLanguage} />
          </Box>
        </Toolbar>
      </Header>
    </Box>
  );
};
