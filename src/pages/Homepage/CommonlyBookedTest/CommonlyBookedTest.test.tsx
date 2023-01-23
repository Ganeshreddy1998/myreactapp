import { render, screen } from "@testing-library/react";
import CommonlyBookedTest from "./CommonlyBookedTest";

describe("CommonlyBookedTest", () => {
  test(" Should have heading", () => {
    render(<CommonlyBookedTest />);
    const headingText = screen.getByText("Commonly Booked Test");
    expect(headingText).toBeInTheDocument();
  });
});
