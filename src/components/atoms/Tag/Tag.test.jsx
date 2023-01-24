import { render, screen } from "@testing-library/react";
import Tag from "./Tag";
import { colors } from "../../../constants";

describe("Tag Atom", () => {
  test("Children should be shown when passed", () => {
    render(<Tag>tagchildren</Tag>);
    const headingText = screen.getByText("tagchildren");
    expect(headingText).toBeInTheDocument();
  });

  test("Tag should be have seperate styles when active", () => {
    render(<Tag active="true">tagchildren</Tag>);
    const el = screen.getByTestId("chip-tag");
    expect(el).toHaveStyle(`backgroundColor:${colors.blue_800}`);
  });
});