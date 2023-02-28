import { Field } from "react-final-form";
import { makeStyles } from "@mui/styles";
import { PRIMARY_BG } from "../../themes";
import { styled } from "@mui/system";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const StyledFormControlLabel = styled((props: any) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: PRIMARY_BG,
  },
  ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
    color: PRIMARY_BG,
  },
  span: {
    fontFamily: "Montserrat ,sans-serif",
    fontSize: ".75rem",
    padding: "0",
  },
  svg: {
    width: "1.25rem",
  },

  //@ts-ignore
}));

const useStyles = makeStyles({
  radioBtn: {
    display: "inline",
  },

  ".MuiFormControlLabel-label": {
    color: "red",
  },
});
export const SortTypesField = () => {
  const classes = useStyles();

  function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }
  return (
    <>
      <Field
        name="sortType"
        type="radio"
        render={({ input, meta }) => (
          <RadioGroup
            className={classes.radioBtn}
            defaultValue="desc"
            {...input}
          >
            <MyFormControlLabel value="asc" label="asc" control={<Radio />} />
            <MyFormControlLabel value="desc" label="desc" control={<Radio />} />
          </RadioGroup>
        )}
      />
    </>
  );
};
