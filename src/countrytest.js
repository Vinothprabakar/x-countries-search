import React from "react";
import { render, screen } from "@testing-library/react";
import Country from "./country";

test("Display Country Container with flag and name", () => {
  const countryData = {
    name: { common: "Test Country" },
    flags: { png: "test-flag.png" },
  };

  render(<Country country={countryData} />);
  const countryContainer = screen.getByTestId("country-container");
  expect(countryContainer).toBeInTheDocument();

  const flagImage = screen.getByAltText("Test Country");
  expect(flagImage).toBeInTheDocument();

  const countryName = screen.getByText("Test Country");
  expect(countryName).toBeInTheDocument();
});
