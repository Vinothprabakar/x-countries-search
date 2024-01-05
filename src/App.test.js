import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders country app", () => {
  render(<App />);
  const searchBar = screen.getByPlaceholderText("Search Country...");
  expect(searchBar).toBeInTheDocument();
});
