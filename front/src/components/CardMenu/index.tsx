import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu } from "@mui/material/";
import { useState } from "react";
import { childType } from "../../types";

export const CardMenu = ({ children }: childType) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(true);
    setPosition(event.currentTarget);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    setPosition(null);
  };
  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          position: "absolute",
          right: ".25rem",
          top: ".25rem",
          backgroundColor: "rgba(255,255,255,0.3)",
          width: "30px",
          height: "30px",
          background: "rgba(248, 20, 201, 0.50)",
          "&:hover": {
            background: "rgba(248, 20, 201, 1)",
          },
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={position}
        open={isMenuOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        {children}
      </Menu>
    </>
  );
};
