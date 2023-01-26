import React, { FC } from "react";
import { CssBaseline } from "@mui/material/";
import { Navigation } from "./components";
import { Settings } from "./components";
import { Home } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

const App: FC = () => {
  return (
    <div className="App">
      <Box
        component={"main"}
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <BrowserRouter>
          <CssBaseline />
          <Navigation />
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Box>
    </div>
  );
};

export default App;
