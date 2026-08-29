export default function CardActions({
  cardStatus = "active",
  onViewInvoice,
  onAdjustLimit,
  onBlockCard,
  onUnblockCard,
}) {
  const isBlocked = cardStatus === "blocked";

  const actions = [
    {
      id: "invoice",
      label: "Ver fatura",
      handler: onViewInvoice,
    },
    {
      id: "limit",
      label: "Ajustar limite",
      handler: onAdjustLimit,
    },
    {
      id: isBlocked ? "unblock" : "block",
      label: isBlocked ? "Desbloquear cartão" : "Bloquear cartão",
      handler: isBlocked ? onUnblockCard : onBlockCard,
    },
  ];

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
            onClick={action.handler}
          >
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
