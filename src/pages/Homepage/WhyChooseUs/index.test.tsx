import { render, screen } from "@testing-library/react";
import Homepage from "..";
import WhyChooseUs from "./index";

describe("Gutter", () => {
  test("Should have heading", () => {
    render(<WhyChooseUs />);
    const headingText = screen.getByText("Why Choose Us");
    expect(headingText).toBeInTheDocument();
  });
  test("render correctly", () => {
    render(<Homepage />);
  });
});
