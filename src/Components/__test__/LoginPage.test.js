import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import "@testing-library/jest-dom/extend-expect";
import { LoginPage } from "../Auth/LoginPage";

test("should render correctly", () => {
  const component = render(<LoginPage />, { wrapper: MemoryRouter });
  expect(component.getAllByTestId("input")).toBeRequired;
  expect(component).not.toBeCalled;

  fireEvent.click(screen.getByRole("button", { type: "submit" }));
});
