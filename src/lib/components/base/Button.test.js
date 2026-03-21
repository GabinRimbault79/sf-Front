import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  test("renders a button with its children", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button", { name: "Test" });
    expect(button).toBeInTheDocument();
  });

  test("renders a disabled button when disabled is provided", () => {
    render(<Button disabled>Test</Button>);
    const button = screen.getByRole("button", { name: "Test" });
    expect(button).toBeDisabled();
  });

  test("renders a link when href is provided", () => {
    render(<Button href="/about">Test Link</Button>);
    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveAttribute("href", "/about");
  });

  test("calls onClick when the button is clicked", async () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>TestClick</Button>);
    const button = screen.getByRole("button", { name: "TestClick" });

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
