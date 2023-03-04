import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import EditPost from "./pages/EditPost";

const client = new ApolloClient({
  uri: "/graphql",
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/post"
              element={
                <EditPost
                  staticfragments={staticfragments}
                  staticwords={staticwords}
                />
              }
            />
            <Route path="/post/:id" element={<EditPost />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
