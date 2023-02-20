import React, { FC, useContext } from "react";
import { CssBaseline } from "@mui/material/";
import { Navigation } from "./components";
import { Settings } from "./components";
import { Home } from "./components";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Recommend } from "./pages/recommend";
import { AppContext } from "./providers/AppContext";
import I18nProvider from "./providers/i18n";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { createHttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { Route, Routes } from "react-router-dom";

const httpLink = createHttpLink({
  uri: `${window.location.origin}/graphql`,
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App: FC = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="App">
      <Box
        component={"main"}
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <I18nProvider locale={state.locale}>
          <ApolloProvider client={client}>
            <CssBaseline />
            <Navigation />
            <Container maxWidth="lg">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/recommend" element={<Recommend />} />
              </Routes>
            </Container>
          </ApolloProvider>
        </I18nProvider>
      </Box>
    </div>
  );
};

export default App;
