import { useEffect, useState } from "react";

const steps = {
  CONFIRM: "confirm",
  CHANNEL: "channel",
  OTP: "otp",
  SUCCESS: "success",
};

export default function BlockCardModal({
  isOpen,
  phone,
  email,
  onClose,
  onConfirmBlock,
}) {
  const [step, setStep] = useState(steps.CONFIRM);
  const [channel, setChannel] = useState(null);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStep(steps.CONFIRM);
      setChannel(null);
      setOtp("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  function handleClose() {
    onClose();
  }

  function handleSelectChannel(selectedChannel) {
    setChannel(selectedChannel);
    setStep(steps.OTP);
  }

  function handleOtpSubmit(event) {
    event.preventDefault();

    // Mock temporário.
    // No backend real, o código será validado pela API.
    if (otp !== "123456") {
      return;
    }

    onConfirmBlock();
    setStep(steps.SUCCESS);
  }

  return (
    <div
      className="bb-block-modal__backdrop"
      role="presentation"
      onMouseDown={handleClose}
    >
      <section
        className="bb-block-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="block-card-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="bb-block-modal__header">
          <div>
            <span className="bb-block-modal__eyebrow">Segurança</span>

            <h2 id="block-card-modal-title" className="bb-block-modal__title">
              Bloquear cartão
            </h2>
          </div>

          <button
            type="button"
            className="bb-block-modal__close"
            onClick={handleClose}
            aria-label="Fechar bloqueio do cartão"
          >
            ×
          </button>
        </header>

        {step === steps.CONFIRM && (
          <div className="bb-block-modal__content">
            <p className="bb-block-modal__description">
              O cartão ficará temporariamente indisponível para novas compras.
            </p>

            <div className="bb-block-modal__actions">
              <button
                type="button"
                className="bb-block-modal__button bb-block-modal__button--secondary"
                onClick={handleClose}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="bb-block-modal__button bb-block-modal__button--danger"
                onClick={() => setStep(steps.CHANNEL)}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === steps.CHANNEL && (
          <div className="bb-block-modal__content">
            <p className="bb-block-modal__description">
              Escolha onde deseja receber o código de segurança.
            </p>

            <button
              type="button"
              className="bb-block-modal__channel"
              onClick={() => handleSelectChannel("sms")}
            >
              <span>SMS</span>
              <strong>{phone}</strong>
            </button>

            <button
              type="button"
              className="bb-block-modal__channel"
              onClick={() => handleSelectChannel("email")}
            >
              <span>E-mail</span>
              <strong>{email}</strong>
            </button>
          </div>
        )}

        {step === steps.OTP && (
          <form className="bb-block-modal__content" onSubmit={handleOtpSubmit}>
            <p className="bb-block-modal__description">
              Digite o código de 6 dígitos enviado por{" "}
              {channel === "sms" ? "SMS" : "e-mail"}.
            </p>

            <label htmlFor="block-card-otp" className="bb-block-modal__label">
              Código de segurança
            </label>

            <input
              id="block-card-otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(event) =>
                setOtp(event.target.value.replace(/\D/g, ""))
              }
              className="bb-block-modal__otp"
              placeholder="000000"
              autoComplete="one-time-code"
            />

            <p className="bb-block-modal__helper">
              Para este protótipo, utilize o código 123456.
            </p>

            <div className="bb-block-modal__actions">
              <button
                type="button"
                className="bb-block-modal__button bb-block-modal__button--secondary"
                onClick={() => setStep(steps.CHANNEL)}
              >
                Voltar
              </button>

              <button
                type="submit"
                className="bb-block-modal__button bb-block-modal__button--danger"
                disabled={otp.length !== 6}
              >
                Confirmar bloqueio
              </button>
            </div>
          </form>
        )}

        {step === steps.SUCCESS && (
          <div className="bb-block-modal__content">
            <div className="bb-block-modal__success">
              <span aria-hidden="true">✓</span>

              <h3>Cartão bloqueado</h3>

              <p>O cartão foi bloqueado com sucesso.</p>
            </div>

            <button
              type="button"
              className="bb-block-modal__button bb-block-modal__button--primary"
              onClick={handleClose}
            >
              Concluir
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
