import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from ".";

describe("Input Field", () => {
  const inputFieldProps = {
    placeholder: "ph1",
    name: "name1",
    id: "id1",
    required: true,
  };

  it("has the correct name attribute", () => {
    render(<InputField {...inputFieldProps} />);

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "name",
      inputFieldProps.name
    );
  });

  it("has the correct id attribute", () => {
    render(<InputField {...inputFieldProps} />);

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "id",
      inputFieldProps.id
    );
  });

  it("is type text", () => {
    render(<InputField {...inputFieldProps} />);

    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
  });

  it("is type datetime-local", () => {
    render(<InputField type='datetime-local' {...inputFieldProps} />);

    expect(screen.getByLabelText(inputFieldProps.placeholder)).toHaveAttribute(
      "type",
      "datetime-local"
    );
  });

  it("displays the correct placeholder", () => {
    render(<InputField {...inputFieldProps} />);

    expect(
      screen.getByPlaceholderText(inputFieldProps.placeholder)
    ).toBeInTheDocument();
  });

  it("is required", () => {
    render(<InputField {...inputFieldProps} />);

    expect(screen.getByRole("textbox")).toBeRequired();
  });

  it("is a textarea", () => {
    render(<InputField isTextArea {...inputFieldProps} />);

    expect(screen.getByRole("textbox")).toContainHTML("textarea");
  });
});
