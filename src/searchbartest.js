import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./searchbar";

test("Search functionality filters countries based on input", () => {
  const mockHandleSearch = jest.fn();
  render(<SearchBar searchTerm="" handleSearch={mockHandleSearch} />);

  const searchInput = screen.getByPlaceholderText("Search Country...");
  fireEvent.change(searchInput, { target: { value: "ind" } });

  expect(mockHandleSearch).toHaveBeenCalledTimes(1);
});
