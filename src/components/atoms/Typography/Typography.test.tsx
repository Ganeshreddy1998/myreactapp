import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography Atom", () => {
  test("Children should be shown when passed", () => {
    render(<Typography type="md">TypographyText</Typography>);
    const el = screen.getByTestId("typography-test");
    expect(el).toContainHTML("TypographyText");
  });
});
