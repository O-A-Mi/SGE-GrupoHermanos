import React from "react";

export default function PurchaseSummary({
  summaryTitle = "Resumo da compra",
  subtotalText = "Sub total (1 item) ",
  discountsText = "Descontos",
  subtotalPrice = " R$ 80,00",
  discountsPrice = "R$ 00,00",
  totalLabel = "Valor total ",
  totalPrice = "R$ 0,00",
  creditText,
  buttonText = "Fechar pedido",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start gap-3.5 px-3.5 py-4 bg-gray-50 rounded-lg`}
    >
      <h6 className="text-[16px] font-semibold !text-gray-800">
        {summaryTitle}
      </h6>
      <div className="flex justify-between gap-5 self-stretch">
        <div className="flex flex-1 flex-col items-start justify-center gap-1">
          <p className="text-[14px] font-medium">
            {subtotalText}
          </p>
          <p className="text-[14px] font-medium">
            {discountsText}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p  className="text-[14px] font-normal">
            {subtotalPrice}
          </p>
          <p  className="text-[14px] font-normal">
            {discountsPrice}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5 self-stretch">
        <p className="text-[14px] font-bold">
          {totalLabel}
        </p>
        <p className="text-[14px] font-bold">
          {totalPrice}
        </p>
      </div>
      <div className="flex items-start justify-between gap-5 self-stretch p-1.5">
        <div className="flex flex-col items-center rounded border-[1.4px] border-solid border-secondary_gray_50 px-0.5 py-1">
          <img src="images/img_checkmark_gray_50.svg" alt="Checkmark" className="h-[10px]" />
        </div>
        <p className="w-[94%] self-center text-[14px] font-medium leading-[17px]">
          <span>Utilizar crédito de&nbsp;</span>
          <span className="font-bold">R$ 15,00 disponível no saldo virtual</span>
        </p>
      </div>
      <Button
        color="blue_900_01"
        size="2xl"
        rightIcon={
          <div className="flex h-[14px] w-[12px] items-center justify-center">
            <img
              src="images/img_checkmark_gray_50.svg"
              alt="Checkmark"
              className="my-0.5 h-[14px] w-[12px] object-contain"
            />
          </div>
        }
        className="gap-2 self-stretch rounded-lg px-[34px] font-medium !text-gray-50 sm:px-5"
      >
        {buttonText}
      </Button>
    </div>
  );
}
