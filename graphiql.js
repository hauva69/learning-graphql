import react from "react";
import ReactDom from "react-dom";
import GraphiQL from "isomorphic-fetch";
import fetch from "isomorphic-fetch";

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + "/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}
