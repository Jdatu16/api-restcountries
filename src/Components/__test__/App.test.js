import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { useState } from "react";

import "@testing-library/jest-dom/extend-expect";
import { App } from "../../App";

test("should render correctly", () => {
  const component = render(<App />, { wrapper: MemoryRouter });
  expect(component).toBeInTheDocument;
});
