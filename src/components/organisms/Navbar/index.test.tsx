import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("Navbar should have a like a tag with name Home and takes to root", () => {
    render(<Navbar></Navbar>);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
  });

  test("Navbar should have a like a tag with name Reports and takes to reports page", () => {
    render(<Navbar></Navbar>);
    expect(screen.getByText("Reports").closest("a")).toHaveAttribute(
      "href",
      "/reports"
    );
  });
  test("Navbar should have a like a tag with name My Appointments and takes to  Appointments page", () => {
    render(<Navbar></Navbar>);
    expect(screen.getByText("My Appointments").closest("a")).toHaveAttribute(
      "href",
      "/appointments"
    );
  });
});
