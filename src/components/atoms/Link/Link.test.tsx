import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Link Atom", () => {
  test("Children should be shown when passed", () => {
    render(<Link href="https://www.test.com/">Click Me</Link>);
    expect(screen.getByText("Click Me").closest("a")).toHaveAttribute(
      "href",
      "https://www.test.com/"
    );
  });
});
