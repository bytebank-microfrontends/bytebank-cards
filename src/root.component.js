import { useState } from "react";

import "./styles/cards.css";
import "./components/cards-header/cards-header.css";
import "./components/bank-card/bank-card.css";
import "./components/card-overview/card-overview.css";
import "./components/card-actions/card-actions.css";
import "./components/invoice-modal/invoice-modal.css";

import CardsHeader from "./components/cards-header/CardsHeader";
import BankCard from "./components/bank-card/BankCard";
import CardOverview from "./components/card-overview/CardOverview";
import CardActions from "./components/card-actions/CardActions";
import InvoiceModal from "./components/invoice-modal/InvoiceModal";

import { primaryCard, cardOverview, currentInvoice } from "./data/cards.mock";

export default function Root() {
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

  function handleOpenInvoice() {
    setIsInvoiceOpen(true);
  }

  function handleCloseInvoice() {
    setIsInvoiceOpen(false);
  }

  function handleAdjustLimit() {
    // eslint-disable-next-line no-console
    console.log("Ajustar limite");
  }

  function handleBlockCard() {
    // eslint-disable-next-line no-console
    console.log("Bloquear cartão");
  }

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

          <CardOverview
            currentInvoice={cardOverview.currentInvoice}
            availableLimit={cardOverview.availableLimit}
            usedLimit={cardOverview.usedLimit}
            totalLimit={cardOverview.totalLimit}
          />

          <div className="bb-cards__actions">
            <CardActions
              onViewInvoice={handleOpenInvoice}
              onAdjustLimit={handleAdjustLimit}
              onBlockCard={handleBlockCard}
            />
          </div>
        </div>
      </div>

      <InvoiceModal
        isOpen={isInvoiceOpen}
        invoice={currentInvoice}
        onClose={handleCloseInvoice}
      />
    </section>
  );
}
