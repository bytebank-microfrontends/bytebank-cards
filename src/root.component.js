import "./styles/cards.css";
import "./components/cards-header/cards-header.css";
import "./components/bank-card/bank-card.css";
import "./components/card-overview/card-overview.css";
import "./components/card-actions/card-actions.css";

import CardsHeader from "./components/cards-header/CardsHeader";
import BankCard from "./components/bank-card/BankCard";
import CardOverview from "./components/card-overview/CardOverview";
import CardActions from "./components/card-actions/CardActions";

import { primaryCard, cardOverview } from "./data/cards.mock";

export default function Root() {
  return (
    <section className="bb-cards">
      <div className="bb-cards__container">
        <CardsHeader />

        <div className="bb-cards__content">
          <BankCard
            holderName={primaryCard.holderName}
            lastFourDigits={primaryCard.lastFourDigits}
            expiresAt={primaryCard.expiresAt}
            brand={primaryCard.brand}
          />

          <div className="bb-cards__details">
            <CardOverview
              currentInvoice={cardOverview.currentInvoice}
              availableLimit={cardOverview.availableLimit}
              usedLimit={cardOverview.usedLimit}
              totalLimit={cardOverview.totalLimit}
            />

            <CardActions />
          </div>
        </div>
      </div>
    </section>
  );
}
