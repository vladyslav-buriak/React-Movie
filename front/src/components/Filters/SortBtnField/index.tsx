import { LoadingButton } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import { PRIMARY_BG } from "../../themes";
import { PRIMARY_BG_HOVER } from "../../themes";
import { FormattedMessage } from "react-intl";


export const SortBtnField = () => {
  return (
    <>
      <LoadingButton
        sx={{
          backgroundColor: PRIMARY_BG,
          fontSize: ".6rem",
          padding: ".250rem 1rem",
          fontFamily: "Montserrat ,sans-serif",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: PRIMARY_BG_HOVER,
          },
        }}
        type="submit"
        endIcon={<SearchIcon sx={{ width: "1rem" }} />}
        loadingPosition="end"
        variant="contained"
      >
                        <FormattedMessage id={'filters.send'} />

      </LoadingButton>
    </>
  );
};
