import { render, screen } from "@testing-library/react";
import BookNowContainer from "./BookNowContainer";

describe("BookNowContainer", () => {
  test("title should be shown when passed as prop", () => {
    render(
      <BookNowContainer
        title="BookNowContainer title"
        buttonText=""
        subTitle=""
        buttonLink="#"
        imageUrl=""
      />
    );
    const headingText = screen.getByText("BookNowContainer title");
    expect(headingText).toBeInTheDocument();
  });

  test("Subtitle should be shown when passed as prop", () => {
    render(
      <BookNowContainer
        subTitle="BookNowContainer-Subtitle"
        buttonText=""
        title=""
        buttonLink="#"
        imageUrl=""
      />
    );
    const headingText = screen.getByText("BookNowContainer-Subtitle");
    expect(headingText).toBeInTheDocument();
  });

  test("Button text should be shown when passed as prop", () => {
    render(
      <BookNowContainer
        buttonText="BookNowContainer-button-text"
        title=""
        subTitle=""
        buttonLink="#"
        imageUrl=""
      />
    );
    const headingText = screen.getByText("BookNowContainer-button-text");
    expect(headingText).toBeInTheDocument();
  });
});
