import { render, screen } from "@testing-library/react";

import Root from "./root.component";

describe("Root component", () => {
  it("deve renderizar o título da página de cartões", () => {
    render(<Root />);

    expect(
      screen.getByRole("heading", {
        name: /cartões/i,
      })
    ).toBeInTheDocument();
  });

  it("deve renderizar o cartão principal", () => {
    render(<Root />);

    expect(screen.getByLabelText(/cartão bytebank/i)).toBeInTheDocument();

    expect(screen.getByText(/4821/i)).toBeInTheDocument();
  });

  it("deve renderizar o resumo financeiro do cartão", () => {
    render(<Root />);

    expect(screen.getByText(/fatura atual/i)).toBeInTheDocument();

    expect(screen.getByText(/limite disponível/i)).toBeInTheDocument();
  });

  it("deve renderizar as ações rápidas", () => {
    render(<Root />);

    expect(
      screen.getByRole("button", {
        name: /ver fatura/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /ajustar limite/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /bloquear cartão/i,
      })
    ).toBeInTheDocument();
  });
});
