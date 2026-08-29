import { useState } from "react";

import "./components/block-card-modal/block-card-modal.css";
import "./styles/cards.css";
import "./components/cards-header/cards-header.css";
import "./components/bank-card/bank-card.css";
import "./components/card-overview/card-overview.css";
import "./components/card-actions/card-actions.css";
import "./components/invoice-modal/invoice-modal.css";
import "./components/limit-modal/limit-modal.css";

import CardsHeader from "./components/cards-header/CardsHeader";
import BankCard from "./components/bank-card/BankCard";
import CardOverview from "./components/card-overview/CardOverview";
import CardActions from "./components/card-actions/CardActions";
import InvoiceModal from "./components/invoice-modal/InvoiceModal";
import LimitModal from "./components/limit-modal/LimitModal";
import BlockCardModal from "./components/block-card-modal/BlockCardModal";

import { primaryCard, cardOverview, currentInvoice } from "./data/cards.mock";

export default function Root() {
  const [activeModal, setActiveModal] = useState(null);
  const [totalLimit, setTotalLimit] = useState(cardOverview.totalLimit);
  const [cardStatus, setCardStatus] = useState("active");

  function handleConfirmBlock() {
    setCardStatus("blocked");
  }
  function handleCloseModal() {
    setActiveModal(null);
  }

  function handleConfirmLimit(newLimit) {
    setTotalLimit(newLimit);
    setActiveModal(null);
  }

  function handleBlockCard() {
    // eslint-disable-next-line no-console
    console.log("Bloquear cartão");
  }

  const availableLimit = totalLimit - cardOverview.usedLimit;

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
            status={cardStatus}
          />

          <CardOverview
            currentInvoice={cardOverview.currentInvoice}
            availableLimit={availableLimit}
            usedLimit={cardOverview.usedLimit}
            totalLimit={totalLimit}
          />

          <div className="bb-cards__actions">
            <CardActions
              onViewInvoice={() => setActiveModal("invoice")}
              onAdjustLimit={() => setActiveModal("limit")}
              onBlockCard={handleBlockCard}
            />
          </div>
        </div>
      </div>

      <InvoiceModal
        isOpen={activeModal === "invoice"}
        invoice={currentInvoice}
        onClose={handleCloseModal}
      />

      <LimitModal
        isOpen={activeModal === "limit"}
        currentLimit={totalLimit}
        minimumLimit={3000}
        maximumLimit={15000}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLimit}
      />

      <BlockCardModal
        isOpen={activeModal === "block"}
        phone="(**) *****-4821"
        email="f***@email.com"
        onClose={handleCloseModal}
        onConfirmBlock={handleConfirmBlock}
      />
    </section>
  );
}
