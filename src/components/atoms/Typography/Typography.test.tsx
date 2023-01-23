import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography Atom", () => {
  test("Children should be shown when passed", () => {
    render(<Typography type="md">TypographyText</Typography>);
    const el = screen.getByTestId("typography-test");
    expect(el).toContainHTML("TypographyText");
  });

  test("Type md should have h2 tag", () => {
    render(<Typography type="md">TypographyText</Typography>);
    const el = screen.getByTestId("typography-test");
    expect(el).toHaveStyle(
      'fontSize: "20px",fontWeight: 600,lineHeight: "24px"'
    );
  });

  test("Type sm should have correct font sizes", () => {
    render(<Typography type="md">TypographyText</Typography>);
    const el = screen.getByTestId("typography-test");
    expect(el).toHaveStyle(
      'fontSize: "14px",fontWeight: 500,lineHeight: "20px",'
    );
  });

  test("Type xs should have correct font sizes", () => {
    render(<Typography type="xs">TypographyText</Typography>);
    const el = screen.getByTestId("typography-test");
    expect(el).toHaveStyle(
      'fontSize: "12px",fontWeight: 600,lineHeight: "18px"'
    );
  });
});
