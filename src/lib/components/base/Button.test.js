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

  test("applies variant, size and custom class", () => {
    render(
      <Button variant="outline" size="lg" classBtn="custom-btn">
        Styled Button
      </Button>
    );

    const button = screen.getByRole("button", { name: "Styled Button" });

    expect(button).toHaveClass("outline");
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("lg");
    expect(button).toHaveClass("custom-btn");
  });

  test("passes native anchor props when rendered as a link", () => {
    render(
      <Button href="/docs" target="_blank" rel="noreferrer">
        Docs
      </Button>
    );

    const link = screen.getByRole("link", { name: "Docs" });

    expect(link).toHaveAttribute("href", "/docs");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

});
