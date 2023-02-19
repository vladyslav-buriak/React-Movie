import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import { Paper } from "@mui/material";
import { InputBase } from "@mui/material";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert } from "@mui/material";
import { FC, useEffect } from "react";
import { useState } from "react";
import { PRIMARY_BG } from "../themes";
import { SocialMedia } from "../../components/SocialMedia";
import { IModal } from "../../types";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const ModalWindow: FC<IModal> = ({ open, title, setOpen, link }) => {
  const [copy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    if (copy === true) {
      const interval = setInterval(() => {
        setCopy(false);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [copy]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              mb: "1.25rem",
              color: "grey",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h3"
          >
            {title}
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: 400,
              width: "100%",
              mb: "1.5rem",
              fontSize: "1rem",
            }}
          >
            <InputBase
              sx={{ flex: 1 }}
              value={link}
              inputProps={{
                "aria-label": "url or recommendations",
                readOnly: true,
              }}
            />
            <IconButton
              href={link}
              target="_blank"
              type="button"
              sx={{ p: "5px", color: PRIMARY_BG }}
              aria-label="preview"
            >
              <RemoveRedEyeIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <CopyToClipboard text={link} onCopy={() => setCopy(true)}>
              <IconButton
                sx={{
                  p: "5px",
                  color: PRIMARY_BG,
                }}
                aria-label="copy to clipboard"
              >
                <ContentCopyIcon />
              </IconButton>
            </CopyToClipboard>
          </Paper>
          <Typography
            sx={{
              mb: "1.25rem",
              color: "grey",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h3"
          >
            Share With Friends
          </Typography>
          <SocialMedia url={link} title={title} />
          {copy && (
            <Alert severity="success" sx={{ width: "200px" }}>
              <strong>Link copied</strong>
            </Alert>
          )}
        </Box>
      </Modal>
    </div>
  );
};
