export default function BankCard({
  holderName,
  lastFourDigits,
  expiresAt,
  brand = "ByteBank",
}) {
  return (
    <article className="bb-bank-card" aria-label="Cartão ByteBank">
      <div className="bb-bank-card__glow" aria-hidden="true" />

      <div className="bb-bank-card__header">
        <span className="bb-bank-card__brand">{brand}</span>

        <span className="bb-bank-card__chip" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className="bb-bank-card__number">
        <span>••••</span>
        <span>••••</span>
        <span>••••</span>
        <span>{lastFourDigits}</span>
      </div>

      <div className="bb-bank-card__footer">
        <div>
          <span className="bb-bank-card__label">Titular</span>

          <strong className="bb-bank-card__value">{holderName}</strong>
        </div>

        <div>
          <span className="bb-bank-card__label">Validade</span>

          <strong className="bb-bank-card__value">{expiresAt}</strong>
        </div>
      </div>
    </article>
  );
}
