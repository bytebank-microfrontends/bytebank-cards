export default function CardOverview({
  currentInvoice,
  availableLimit,
  totalLimit,
}) {
  return (
    <section className="bb-card-overview">
      <div className="bb-card-overview__item">
        <span className="bb-card-overview__label">Fatura atual</span>

        <strong className="bb-card-overview__value">{currentInvoice}</strong>
      </div>

      <div className="bb-card-overview__item">
        <span className="bb-card-overview__label">Limite disponível</span>

        <strong className="bb-card-overview__value">{availableLimit}</strong>

        <span className="bb-card-overview__helper">
          Limite total de {totalLimit}
        </span>
      </div>
    </section>
  );
}
