import { FC } from "react";
import React from "react";
import { Form } from "react-final-form";
import { FilterType } from "../../types";
import { makeStyles } from "@mui/styles";
import { SortSelectField } from "./components";
import { SortTypesField } from "./components";
import { SortBtnField } from "./components";

interface IFilterProps {
  initialValues: FilterType;
  onSubmit: (data: FilterType) => void;
}

const useStyles = makeStyles({
  form: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    width: "500px",
  },
});

export const Filters: FC<IFilterProps> = ({ onSubmit, initialValues }) => {
  const classes = useStyles();

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <SortSelectField />
            <SortTypesField />
            <SortBtnField />
          </form>
        )}
      />
    </>
  );
};
