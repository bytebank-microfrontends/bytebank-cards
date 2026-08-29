const actions = [
  {
    id: "invoice",
    label: "Ver fatura",
  },
  {
    id: "limit",
    label: "Ajustar limite",
  },
  {
    id: "block",
    label: "Bloquear cartão",
  },
];

export default function CardActions({
  onViewInvoice,
  onAdjustLimit,
  onBlockCard,
}) {
  const actionHandlers = {
    invoice: onViewInvoice,
    limit: onAdjustLimit,
    block: onBlockCard,
  };

  return (
    <section className="bb-card-actions">
      <div className="bb-card-actions__header">
        <span className="bb-card-actions__eyebrow">Gerenciamento</span>

        <h2 className="bb-card-actions__title">Ações rápidas</h2>
      </div>

      <div className="bb-card-actions__list">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            className="bb-card-actions__button"
            onClick={actionHandlers[action.id]}
          >
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
