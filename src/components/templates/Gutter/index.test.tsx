import { render, screen } from "@testing-library/react";
import Gutter from ".";

describe("Gutter", () => {
  test("Children should be shown when passed", () => {
    render(<Gutter>Gutter</Gutter>);
    const el = screen.getByTestId("Gutter-test");
    expect(el).toContainHTML("Gutter");
  });
});
