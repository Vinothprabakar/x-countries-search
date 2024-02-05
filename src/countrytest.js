
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Country App Tests", () => {
  test("UI Elements - should have an input field for searching", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Search for a country...");
    expect(inputElement).toBeInTheDocument();
  });

  test("API Calls - should call API and handle success", async () => {
    render(<App />);
    const countryContainer = await screen.findByTestId("country-container");
    expect(countryContainer).toBeInTheDocument();
  });

  test("API Calls - should handle API call error", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => Promise.reject("API Error"));
    render(<App />);
    const errorElement = await screen.findByText("Error fetching countries:");
    expect(errorElement).toBeInTheDocument();
  });

  test("API Error Handling - logs an error to the console on API failure", () => {
    const consoleSpy = jest.spyOn(console, "error");
    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(() => Promise.reject("API Error"));
    render(<App />);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error fetching countries:",
      "API Error"
    );
  });

  test("Display of Country Containers - should have containers with country flag and name", async () => {
    render(<App />);
    const countryContainer = await screen.findByTestId("country-container");
    expect(countryContainer).toBeInTheDocument();
  });

  test("Search Functionality - should filter countries based on search and show results accordingly", async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(inputElement, { target: { value: "ind" } });
    const countryContainers = await screen.findAllByTestId("country-container");
    expect(countryContainers.length).toBe(3);
  });

  test("Search Functionality - should show no results when no matching countries are found", async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(inputElement, { target: { value: "xyz" } });
    const noResultsMessage = await screen.findByText(
      "No matching countries found."
    );
    expect(noResultsMessage).toBeInTheDocument();
  });

  test('Search Functionality - should show 3 containers when searching for "ind"', async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("Search for a country...");
    fireEvent.change(inputElement, { target: { value: "ind" } });
    const countryContainers = await screen.findAllByTestId("country-container");
    expect(countryContainers.length).toBe(3);
  });
});
