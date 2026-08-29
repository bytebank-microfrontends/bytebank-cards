export default function CardOverview({
  currentInvoice,
  availableLimit,
  totalLimit,
  usedLimit,
}) {
  const usagePercentage = Math.min(
    Math.round((usedLimit / totalLimit) * 100),
    100
  );

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <section className="bb-card-overview">
      <div className="bb-card-overview__item">
        <span className="bb-card-overview__label">Fatura atual</span>

        <strong className="bb-card-overview__value">
          {formatCurrency(currentInvoice)}
        </strong>
      </div>

      <div className="bb-card-overview__item">
        <span className="bb-card-overview__label">Limite disponível</span>

        <strong className="bb-card-overview__value">
          {formatCurrency(availableLimit)}
        </strong>

        <div className="bb-card-overview__limit">
          <div className="bb-card-overview__limit-header">
            <span>{usagePercentage}% utilizado</span>

            <span>{formatCurrency(totalLimit)}</span>
          </div>

          <div
            className="bb-card-overview__progress"
            role="progressbar"
            aria-label="Utilização do limite do cartão"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={usagePercentage}
          >
            <div
              className="bb-card-overview__progress-value"
              style={{
                width: `${usagePercentage}%`,
              }}
            />
          </div>

          <span className="bb-card-overview__helper">
            {formatCurrency(usedLimit)} utilizados
          </span>
        </div>
      </div>
    </section>
  );
}
