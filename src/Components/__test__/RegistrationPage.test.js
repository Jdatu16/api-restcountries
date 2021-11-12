import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import "@testing-library/jest-dom/extend-expect";
import { RegistrationPage } from "../Auth/RegistrationPage";

test("should render correcly", () => {
  render(<RegistrationPage />, { wrapper: MemoryRouter });
  const registrationPageTitle = screen.getByTestId("registrationPage-title");
  expect(registrationPageTitle).toHaveTextContent("Registration Page");
  expect(registrationPageTitle).toBeInTheDocument;
  fireEvent.click(screen.getByRole("button", { type: "submit" }));
});

test("should match", () => {
  const component = render(<RegistrationPage />, { wrapper: MemoryRouter });
  expect(component).toMatchInlineSnapshot;
  expect(component.getAllByTestId("input")).toBeRequired;
});
