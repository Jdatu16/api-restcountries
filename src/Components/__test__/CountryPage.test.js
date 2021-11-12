import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import "@testing-library/jest-dom/extend-expect";
import { CountryPage } from "../CountryPage";

test("should render correctly", () => {
  const component = render(<CountryPage />, { wrapper: MemoryRouter });
  expect(component).toBeInTheDocument;
  expect(component.getByTestId("countryPage-container")).toHaveClass(
    "countryPage-container"
  );
});
