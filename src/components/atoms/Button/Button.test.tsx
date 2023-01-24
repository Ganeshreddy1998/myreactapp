import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { colors } from "../../../constants";

function handleClick() {
  // This is intentional
}

describe("Buttom Atom", () => {
  test("Children should be shown when passed", () => {
    render(
      <Button variant="blue" onClick={handleClick}>
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("custom-button");
    expect(el).toContainHTML("ButtonText");
  });

  test("button with variant blue should be shown have blue background", () => {
    render(
      <Button variant="blue" onClick={handleClick}>
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("custom-button");
    expect(el).toHaveStyle(`backgroundColor:${colors.blue_500}`);
  });

  test("button with variant white should be shown have white background", () => {
    render(
      <Button variant="white" onClick={handleClick}>
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("custom-button");
    expect(el).toHaveStyle(`backgroundColor:white`);
  });

  test("button with variant red_text should be shown have red text", () => {
    render(
      <Button variant="red_text" onClick={handleClick}>
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("custom-button");
    expect(el).toHaveStyle(`color:${colors.red_200}`);
  });

  test("button with variant red_text should be shown have red text", () => {
    render(
      <Button variant="red_text" onClick={handleClick} dataTestid="new-testid">
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("new-testid");
    expect(el).toHaveAttribute("data-testid", "new-testid");
  });
});
