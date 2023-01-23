import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("placeholder should be shown when passed as prop", () => {
    render(<SearchBar placeholder="searchbar placeholder" />);
    const headingText = screen.getByPlaceholderText("searchbar placeholder");
    expect(headingText).toBeInTheDocument();
  });
});
