import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Nullam", () => {
  render(<App />);
  const linkElement = screen.getByText(/Nullam/i);
  expect(linkElement).toBeInTheDocument();
});
