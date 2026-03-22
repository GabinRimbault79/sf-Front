import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  test("renders an input associated with its label", () => {
    render(<Input name="Label" />);

    const input = screen.getByLabelText("Label");

    expect(input).toBeInTheDocument();
  });

  test("applies native input props to the rendered element", () => {
    render(
      <Input
        name="Email"
        type="email"
        placeholder="Enter your email"
        disabled
      />
    );

    const input = screen.getByLabelText("Email");

    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("placeholder", "Enter your email");
    expect(input).toBeDisabled();
  });

  test("calls callback with the updated value when the user types", async () => {
    const callback = jest.fn();

    render(<Input name="Username" callback={callback} />);

    const input = screen.getByLabelText("Username");

    await userEvent.type(input, "Test");

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenLastCalledWith("Test");
  });

  test("uses a custom id when provided", () => {
    render(<Input name="Email" id="email-field" />);

    const input = screen.getByLabelText("Email");
    const label = screen.getByText("Email");

    expect(input).toHaveAttribute("id", "email-field");
    expect(label).toHaveAttribute("for", "email-field");
  });

});