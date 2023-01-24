import { render, screen } from "@testing-library/react";
import FullPageLayout from "./FullPageLayout";

test("renders correctly", () => {
  render(
    <FullPageLayout
      open={true}
      handleClose={() => {}}
      currentStep={1}
      setCurrentStep={() => {}}
    >
      FullPageLayout
    </FullPageLayout>
  );
});

test("when open false no comp", () => {
  const { container } = render(
    <FullPageLayout
      open={false}
      handleClose={() => {}}
      currentStep={1}
      setCurrentStep={() => {}}
    >
      FullPageLayout
    </FullPageLayout>
  );
  expect(container).toBeEmptyDOMElement;
});

test("when open is true show component", () => {
  const { container } = render(
    <FullPageLayout
      open={true}
      handleClose={() => {}}
      currentStep={1}
      setCurrentStep={() => {}}
    >
      FullPageLayout
    </FullPageLayout>
  );
  expect(container.innerHTML).toBe("<div></div>");
});

test("when open is modal should have style", () => {
  render(
    <FullPageLayout
      open={true}
      handleClose={() => {}}
      currentStep={1}
      setCurrentStep={() => {}}
    >
      FullPageLayout
    </FullPageLayout>
  );
  const el = screen.getByTestId("modal-box");

  expect(el).toHaveStyle(`backgroundColor:"white"`);
});

test("if currentStep is 1 next button should show add patient", () => {
  render(
    <FullPageLayout
      open={true}
      handleClose={() => {}}
      currentStep={1}
      setCurrentStep={() => {}}
    >
      FullPageLayout
    </FullPageLayout>
  );
  const el = screen.getByTestId("next-button");

  expect(el).toHaveTextContent("Add Patient");
});
test("if currentStep is not 1 next button should show Go back to Home", () => {
  const { container } = render(
    <FullPageLayout
      open={true}
      handleClose={() => {}}
      currentStep={2}
      setCurrentStep={() => {}}
    >
      FullPageLayout
    </FullPageLayout>
  );
  const el = screen.getByTestId("next-button");

  expect(el).toHaveTextContent("Go back to Home");
});
