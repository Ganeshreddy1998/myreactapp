import React from "react";
import { render, screen } from "@testing-library/react";
import CommonlyBookedTest from "./CommonlyBookedTest";

test("test case", () => {
  render(<CommonlyBookedTest />);
  const linkElement = screen.getByText(/package/i);
  expect(linkElement).toBeInTheDocument();
});
