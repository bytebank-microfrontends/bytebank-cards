export default function InvoiceModal({ isOpen, invoice, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="bb-invoice-modal__backdrop"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="bb-invoice-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="invoice-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="bb-invoice-modal__header">
          <div>
            <span className="bb-invoice-modal__eyebrow">Fatura atual</span>

            <h2 id="invoice-modal-title" className="bb-invoice-modal__title">
              Detalhes da fatura
            </h2>
          </div>

          <button
            type="button"
            className="bb-invoice-modal__close"
            onClick={onClose}
            aria-label="Fechar detalhes da fatura"
          >
            ×
          </button>
        </header>

        <div className="bb-invoice-modal__summary">
          <span>Valor da fatura</span>
          <strong>{invoice.total}</strong>
          <small>Vencimento em {invoice.dueDate}</small>
        </div>

        <div className="bb-invoice-modal__transactions">
          {invoice.transactions.map((transaction) => (
            <div key={transaction.id} className="bb-invoice-modal__transaction">
              <div>
                <strong>{transaction.description}</strong>
                <span>{transaction.date}</span>
              </div>

              <strong>{transaction.amount}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
