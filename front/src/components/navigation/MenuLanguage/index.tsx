import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Flag from "react-world-flags";
import { IconButton, Typography } from "@mui/material";
import { LOCALES } from "../../../config";
import { AppContext } from "../../../providers/AppContext";
import { getRgbaColor } from "../../themes";

export const MenuLanguage = ({ setLanguage }: any) => {
  const { state } = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showFlags = () => {
    switch (state.locale) {
      case LOCALES.ENGLISH:
        return (
          <IconButton
            sx={{ color: "#fff" }}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onMouseEnter={handleClick}
          >
            <Flag code="us" height="20" width="24" />
            <Typography ml={0.5} variant="subtitle2">
              en
            </Typography>
          </IconButton>
        );
      case LOCALES.UKRANIAN:
        return (
          <IconButton
            sx={{ color: "#fff" }}
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onMouseEnter={handleClick}
          >
            <Flag code="ua" height="20" width="24" />
            <Typography ml={0.5} variant="subtitle2">
              ua
            </Typography>
          </IconButton>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {showFlags()}

      <Menu
        sx={{ cursor: "pointer" }}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          sx={{
            "&:focus": {
              backgroundColor: "#fff",
            },
            "&:hover": {
              backgroundColor: getRgbaColor("1"),
            },
          }}
          disabled={state.locale === LOCALES.UKRANIAN}
          onClick={() => {
            setLanguage(LOCALES.UKRANIAN);
            handleClose();
          }}
        >
          <Flag code="ua" height="16" />
          <Typography sx={{ color: "gray" }} ml={0.5} variant="subtitle2">
            ua
          </Typography>
        </MenuItem>

        <MenuItem
          sx={{
            "&:focus": {
              backgroundColor: "#fff",
            },
            "&:hover": {
              backgroundColor: getRgbaColor("1"),
            },
          }}
          disabled={state.locale === LOCALES.ENGLISH}
          onClick={() => {
            setLanguage(LOCALES.ENGLISH);
            handleClose();
          }}
        >
          <Flag code="us" height="20" width="24" />
          <Typography sx={{ color: "gray" }} ml={0.5} variant="subtitle2">
            en
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
