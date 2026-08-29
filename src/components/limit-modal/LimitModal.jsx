import { useEffect, useState } from "react";

export default function LimitModal({
  isOpen,
  currentLimit,
  minimumLimit,
  maximumLimit,
  onClose,
  onConfirm,
}) {
  const [newLimit, setNewLimit] = useState(currentLimit);

  useEffect(() => {
    if (isOpen) {
      setNewLimit(currentLimit);
    }
  }, [isOpen, currentLimit]);

  if (!isOpen) {
    return null;
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  function handleSubmit(event) {
    event.preventDefault();
    onConfirm(newLimit);
  }

  return (
    <div
      className="bb-limit-modal__backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="bb-limit-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="limit-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="bb-limit-modal__header">
          <div>
            <span className="bb-limit-modal__eyebrow">Limite do cartão</span>

            <h2 id="limit-modal-title" className="bb-limit-modal__title">
              Ajustar limite
            </h2>
          </div>

          <button
            type="button"
            className="bb-limit-modal__close"
            onClick={onClose}
            aria-label="Fechar ajuste de limite"
          >
            ×
          </button>
        </header>

        <form className="bb-limit-modal__form" onSubmit={handleSubmit}>
          <div className="bb-limit-modal__current">
            <span>Limite atual</span>
            <strong>{formatCurrency(currentLimit)}</strong>
          </div>

          <div className="bb-limit-modal__control">
            <label htmlFor="card-limit">Novo limite</label>

            <strong>{formatCurrency(newLimit)}</strong>

            <input
              id="card-limit"
              type="range"
              min={minimumLimit}
              max={maximumLimit}
              step="100"
              value={newLimit}
              onChange={(event) => setNewLimit(Number(event.target.value))}
            />

            <div className="bb-limit-modal__range">
              <span>{formatCurrency(minimumLimit)}</span>
              <span>{formatCurrency(maximumLimit)}</span>
            </div>
          </div>

          <div className="bb-limit-modal__actions">
            <button
              type="button"
              className="bb-limit-modal__button bb-limit-modal__button--secondary"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="bb-limit-modal__button bb-limit-modal__button--primary"
            >
              Confirmar limite
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
