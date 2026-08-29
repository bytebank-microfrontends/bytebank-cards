import bytebankSymbol from "../../assets/bytebank-symbol.png";

export default function BankCard({
  holderName,
  lastFourDigits,
  expiresAt,
  brand = "ByteBank",
  status = "active",
}) {
  const isBlocked = status === "blocked";

  return (
    <article
      className={`bb-bank-card ${isBlocked ? "bb-bank-card--blocked" : ""}`}
      aria-label="Cartão ByteBank"
    >
      <div className="bb-bank-card__glow" aria-hidden="true" />

      <div className="bb-bank-card__header">
        <div className="bb-bank-card__brand">
          <img
            src={bytebankSymbol}
            alt=""
            className="bb-bank-card__brand-logo"
            aria-hidden="true"
          />

          <span>{brand}</span>
        </div>

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

      {isBlocked && (
        <div className="bb-bank-card__status" role="status">
          Cartão bloqueado
        </div>
      )}
    </article>
  );
}
