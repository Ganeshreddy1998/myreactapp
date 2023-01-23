import { render, screen } from "@testing-library/react";
import HeadingLinkLayout from "./HeadingLinkLayout";

test("heading and link layout should return the exact link and the heading", () => {
  render(<HeadingLinkLayout heading="headingLayout heading" linkUrl="/test" />);
  const headingText = screen.getByText("headingLayout heading");
  expect(headingText).toBeInTheDocument();
});
