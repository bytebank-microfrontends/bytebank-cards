import { useEffect, useState } from "react";

const steps = {
  CHANNEL: "channel",
  OTP: "otp",
  SUCCESS: "success",
};

export default function UnblockCardModal({
  isOpen,
  phone,
  email,
  onClose,
  onConfirmUnblock,
}) {
  const [step, setStep] = useState(steps.CHANNEL);
  const [channel, setChannel] = useState(null);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStep(steps.CHANNEL);
      setChannel(null);
      setOtp("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  function handleSelectChannel(selectedChannel) {
    setChannel(selectedChannel);
    setStep(steps.OTP);
  }

  function handleOtpSubmit(event) {
    event.preventDefault();

    if (otp !== "123456") {
      return;
    }

    onConfirmUnblock();
    setStep(steps.SUCCESS);
  }

  return (
    <div
      className="bb-unblock-modal__backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="bb-unblock-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="unblock-card-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="bb-unblock-modal__header">
          <div>
            <span className="bb-unblock-modal__eyebrow">Segurança</span>

            <h2
              id="unblock-card-modal-title"
              className="bb-unblock-modal__title"
            >
              Desbloquear cartão
            </h2>
          </div>

          <button
            type="button"
            className="bb-unblock-modal__close"
            onClick={onClose}
            aria-label="Fechar desbloqueio do cartão"
          >
            ×
          </button>
        </header>

        {step === steps.CHANNEL && (
          <div className="bb-unblock-modal__content">
            <p className="bb-unblock-modal__description">
              Escolha onde deseja receber o código de segurança para desbloquear
              o cartão.
            </p>

            <button
              type="button"
              className="bb-unblock-modal__channel"
              onClick={() => handleSelectChannel("sms")}
            >
              <span>SMS</span>
              <strong>{phone}</strong>
            </button>

            <button
              type="button"
              className="bb-unblock-modal__channel"
              onClick={() => handleSelectChannel("email")}
            >
              <span>E-mail</span>
              <strong>{email}</strong>
            </button>
          </div>
        )}

        {step === steps.OTP && (
          <form
            className="bb-unblock-modal__content"
            onSubmit={handleOtpSubmit}
          >
            <p className="bb-unblock-modal__description">
              Digite o código de 6 dígitos enviado por{" "}
              {channel === "sms" ? "SMS" : "e-mail"}.
            </p>

            <label
              htmlFor="unblock-card-otp"
              className="bb-unblock-modal__label"
            >
              Código de segurança
            </label>

            <input
              id="unblock-card-otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(event) =>
                setOtp(event.target.value.replace(/\D/g, ""))
              }
              className="bb-unblock-modal__otp"
              placeholder="000000"
              autoComplete="one-time-code"
            />

            <p className="bb-unblock-modal__helper">
              Para este protótipo, utilize o código 123456.
            </p>

            <div className="bb-unblock-modal__actions">
              <button
                type="button"
                className="bb-unblock-modal__button bb-unblock-modal__button--secondary"
                onClick={() => setStep(steps.CHANNEL)}
              >
                Voltar
              </button>

              <button
                type="submit"
                className="bb-unblock-modal__button bb-unblock-modal__button--primary"
                disabled={otp.length !== 6}
              >
                Confirmar desbloqueio
              </button>
            </div>
          </form>
        )}

        {step === steps.SUCCESS && (
          <div className="bb-unblock-modal__content">
            <div className="bb-unblock-modal__success">
              <span aria-hidden="true">✓</span>

              <h3>Cartão desbloqueado</h3>

              <p>O cartão foi desbloqueado com sucesso.</p>
            </div>

            <button
              type="button"
              className="bb-unblock-modal__button bb-unblock-modal__button--primary"
              onClick={onClose}
            >
              Concluir
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
