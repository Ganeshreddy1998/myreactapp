import { render, screen } from "@testing-library/react";
import FullWidthColoredContainer from "./FullWidthColoredContainer";

describe("FullWidthColoredContainer", () => {
  test("title should be shown when passed as prop", () => {
    render(
      <FullWidthColoredContainer title="FullWidthColoredContainer title">
        FullWidthColoredContainer
      </FullWidthColoredContainer>
    );
    const headingText = screen.getByText("FullWidthColoredContainer title");
    expect(headingText).toBeInTheDocument();
  });
});
