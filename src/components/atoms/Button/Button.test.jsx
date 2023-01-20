import { getByTestId, render, screen } from "@testing-library/react";
import Button from "./Button";
import { colors } from "../../../constants";

describe("Buttom Atom", () => {
  test("Children should be shown when passed", () => {
    render(
      <Button variant="blue" onClick={() => {}}>
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("custom-button");
    // console.log({ el });
    expect(el).toContainHTML("ButtonText");
  });

  test("button with variant blue should be shown have blue background", () => {
    render(
      <Button variant="blue" onClick={() => {}}>
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("custom-button");
    expect(el).toHaveStyle(`backgroundColor:${colors.blue_500}`);
  });

  test("button with variant white should be shown have white background", () => {
    render(
      <Button variant="white" onClick={() => {}}>
        ButtonText
      </Button>
    );
    const el = screen.getByTestId("custom-button");
    expect(el).toHaveStyle(`backgroundColor:white`);
  });
});