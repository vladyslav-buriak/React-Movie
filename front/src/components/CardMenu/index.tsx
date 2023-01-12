import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu } from "@mui/material/";
import { useState } from "react";

type ChildrenProps = {
  children: JSX.Element;
};
export const CardMenu = ({ children }: ChildrenProps) => {
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
          right: 0,
          top: 0,
          backgroundColor: "rgba(255,255,255,0.3)",
          width: "30px",
          height: "30px",
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
