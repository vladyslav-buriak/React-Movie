import { Field } from "react-final-form";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material/";
import { Select } from "@mui/material";
import { PRIMARY_BG, PRIMARY_BG_HOVER } from "../../themes";
import { makeStyles } from "@mui/styles";
import { SORT_OPTIONS } from "../../../config";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-notchedOutline ": {
      borderColor: PRIMARY_BG,
    },
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input ":
      {
        color: "#000",
        fontFamily: "Montserrat ,sans-serif",
        fontWeight: "bold",
        fontSize: ".6rem",
      },
  },
});
export const SortSelectField = () => {
  const classes = useStyles();

  return (
    <>
      <Field
        name="sortBy"
        render={({ input, meta }) => (
          <FormControl sx={{ width: "250px" }}>
            <InputLabel
              sx={{ fontSize: ".75rem", color: PRIMARY_BG_HOVER }}
              id="demo-simple-select-label"
            >
              Sort
            </InputLabel>
            <Select
              className={classes.root}
              sx={{ width: "200px", height: "40px", fontSize: ".75rem" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              {...input}
            >
              {SORT_OPTIONS.map(({key,value}) => (
                <MenuItem key={key} value={value}>
                
                  <FormattedMessage id={`filters.sort.${value}`} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
    </>
  );
};
