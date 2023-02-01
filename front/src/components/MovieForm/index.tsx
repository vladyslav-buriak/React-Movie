import { Form, Field } from "react-final-form";
import { InputBase, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { IconButton } from "@mui/material";
import { PRIMARY_BG } from "../themes";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";

type ValidateType = {
  moviesList: string;
};

export const MovieForm = ({ getRecommendMovies }: any) => (
  <Form
    onSubmit={getRecommendMovies}
    validate={(values) => {
      const errors = {} as ValidateType;

      if (!values.moviesList) {
        errors.moviesList = "Required";
      }

      return errors;
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="moviesList"
            render={({ input, meta }) => (
              <>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                    padding: "0.5rem",
                    position: "relative",
                    border: `${
                      meta.error && meta.touched ? "1px solid red" : "none"
                    } `,
                  }}
                >
                  <InputBase
                    sx={{
                      paddingLeft: "0.5rem",
                      fontSize: "0.75rem",
                      flexGrow: 1,
                    }}
                    multiline={true}
                    placeholder="your movie list"
                    {...input}
                  />
                  {meta.error && meta.touched && (
                    <Typography
                      sx={{
                        position: "absolute",
                        left: "60%",
                        top: "50%",
                        transform: "translate(-60%,-50%)",
                        color: "red",
                        fontSize: ".75rem",
                      }}
                      component="span"
                      variant="body2"
                    >
                      {meta.error}
                    </Typography>
                  )}
                  <Divider
                    sx={{ marginRight: "1rem" }}
                    orientation="vertical"
                    variant="inset"
                    flexItem
                  />

                  <IconButton
                    type="submit"
                    sx={{
                      cursor: "pointer",
                      background: PRIMARY_BG,
                      opacity: ".8",
                      "&:hover": {
                        background: PRIMARY_BG,
                        opacity: "1",
                      },
                    }}
                  >
                    <CheckIcon />
                  </IconButton>
                </Paper>
              </>
            )}
          />
        </div>
      </form>
    )}
  />
);
