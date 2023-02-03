import { Stack } from "@mui/material";
import { FC } from "react";
import { SIZE_MD } from "../../config";
import {
  FacebookIcon,
  TelegramIcon,
  ViberIcon,
  TwitterIcon,
} from "react-share";
import {
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  TwitterShareButton,
} from "react-share";

interface ISocialProps {
  url: string;
  title: string;
}

export const SocialMedia: FC<ISocialProps> = ({ url, title }) => {
  return (
    <Stack direction="row" spacing={1} mb={2}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={SIZE_MD} round />
      </FacebookShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={SIZE_MD} round />
      </TelegramShareButton>

      <ViberShareButton url={url}>
        <ViberIcon size={SIZE_MD} round />
      </ViberShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={SIZE_MD} round />
      </TwitterShareButton>
    </Stack>
  );
};
