import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EditPost from "./pages/EditPost.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // uri: "/graphql",
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const staticfragments = [
  { id: 0, name: "LINEBREAK" },
  { id: 1, name: "," },
  { id: 2, name: "'" },
  { id: 3, name: "." },
  { id: 4, name: "-" },
  { id: 5, name: "?" },
  { id: 6, name: "!" },
  { id: 7, name: "S" },
  { id: 8, name: "Y" },
  { id: 9, name: "LY" },
  { id: 10, name: "ING" },
  { id: 11, name: "ER" },
  { id: 12, name: "EST" },
  { id: 13, name: "OUS" },
];

const staticwords = [
  { id: 0, name: "A" },
  { id: 1, name: "THE" },
  { id: 2, name: "NOT" },
  { id: 3, name: "IF" },
  { id: 4, name: "AND" },
  { id: 5, name: "OR" },
  { id: 6, name: "NOR" },
  { id: 7, name: "BUT" },
  { id: 8, name: "ALWAYS" },
  { id: 9, name: "NEVER" },
  { id: 10, name: "EVER" },
  { id: 11, name: "WHAT" },
  { id: 12, name: "WHERE" },
  { id: 13, name: "WHEN" },
  { id: 14, name: "WHY" },
  { id: 15, name: "WHO" },
  { id: 16, name: "THOUGH" },
  { id: 17, name: "ALSO" },
  { id: 18, name: "HOWEVER" },
  { id: 19, name: "IS" },
  { id: 20, name: "AM" },
  { id: 21, name: "ARE" },
  { id: 22, name: "WAS" },
  { id: 23, name: "WERE" },
  { id: 24, name: "IT" },
  { id: 25, name: "THAT" },
  { id: 26, name: "I" },
  { id: 27, name: "YOU" },
  { id: 28, name: "THEY" },
  { id: 29, name: "THEM" },
  { id: 30, name: "SHE" },
  { id: 31, name: "HER" },
  { id: 32, name: "HE" },
  { id: 33, name: "HIM" },
  { id: 34, name: "IN" },
  { id: 35, name: "AROUND" },
  { id: 36, name: "OVER" },
  { id: 37, name: "UNDER" },
];

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route
              path="/post"
              element={
                <EditPost
                  staticfragments={staticfragments}
                  staticwords={staticwords}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/post/:id" element={<EditPost />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
