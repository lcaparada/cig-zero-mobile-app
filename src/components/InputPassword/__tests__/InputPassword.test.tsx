import { fireEvent, render, screen } from "test-utils";
import { InputPassword } from "../InputPassword";

describe("<InputPassword />", () => {
  test("starts with hidden password", () => {
    const mockedOnChange = jest.fn();

    render(
      <InputPassword
        label="Senha"
        value="12345"
        placeholder="senha"
        onChangeText={mockedOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText(/senha/i);

    expect(inputElement).toHaveProp("secureTextEntry", true);
  });

  test("when press eye icon, it should show the password and change to the eye off icon", () => {
    const mockedOnChange = jest.fn();

    render(
      <InputPassword
        label="Senha"
        value="12345"
        placeholder="senha"
        onChangeText={mockedOnChange}
      />
    );

    fireEvent.press(screen.getByTestId("eye"));
    const inputElement = screen.getByPlaceholderText(/senha/i);
    expect(inputElement).toHaveProp("secureTextEntry", false);
    expect(screen.getByTestId("eyeOff")).toBeTruthy();
  });

  test("when press eye off icon, it should hide the password and change to the eye icon", () => {
    const mockedOnChange = jest.fn();

    render(
      <InputPassword
        label="Senha"
        value="12345"
        placeholder="senha"
        onChangeText={mockedOnChange}
      />
    );

    fireEvent.press(screen.getByTestId("eye"));
    fireEvent.press(screen.getByTestId("eyeOff"));
    const inputElement = screen.getByPlaceholderText(/senha/i);
    expect(inputElement).toHaveProp("secureTextEntry", true);
    expect(screen.getByTestId("eye")).toBeTruthy();
  });
});
