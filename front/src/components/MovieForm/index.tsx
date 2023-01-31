import { Form, Field } from "react-final-form";
import { InputBase, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import { PRIMARY_BG } from "../themes";
import { FC } from "react";


interface IMovieFormProps{
    getQueryString:any
}
export const MovieForm:FC<IMovieFormProps> = ({getQueryString}) => (
  // @ts-ignore
  <Form
    onSubmit={({movies}) => {
        getQueryString()
    }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="movies"
            render={({ input, meta }) => (
              <>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                    padding: "0.5rem",
                  }}
                >
                  <InputBase
                    sx={{ paddingLeft: "0.5rem", fontSize: "0.75rem" }}
                    multiline={true}
                    placeholder="your movie list"
                    {...input}
                  />
                 {meta.touched && meta.error && <span>{meta.error}</span>}
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
