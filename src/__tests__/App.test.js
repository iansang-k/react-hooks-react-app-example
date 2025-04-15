import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

beforeEach(() => {
  render(<App />);
});

test('should include "Now" in the header instead of a time', () => {
  // Check that no date string is present
  const dateRegex =
    /\w+ \d{1,2}(st|nd|rd|th)? \d{4}, \d{1,2}:\d{2}:\d{2} (AM|PM)/i;
  expect(screen.queryByText(dateRegex)).not.toBeInTheDocument();
  // Check that "Now" is present
  expect(screen.getByText(/Now/i)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  expect(screen.getByTitle("time video")).toBeInTheDocument();
});
