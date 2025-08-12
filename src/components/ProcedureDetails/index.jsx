import React from "react";

export default function ProcedureDetails({
  procedureTitle = "Procedimento",
  procedureDescription = "Consulta Online",
  specialtyLabel = "Especalidade ",
  specialtyName = "Cardiologia",
  price = "R$ 39,00",
  removeButtonText = "Remover",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-start p-4 bg-gray-50 rounded`}>
      <div className="flex flex-1 flex-col items-start gap-1.5 self-center">
        <div className="flex flex-col items-start justify-center gap-1 self-stretch">
          <p className="text-[12px] font-normal">
            {procedureTitle}
          </p>
          <p size="medium_16"  className="text-[16px] font-medium">
            {procedureDescription}
          </p>
        </div>
        <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex self-stretch">
            <p  className="text-[12px] font-normal">
              {specialtyLabel}
            </p>
          </div>
          <p className="text-[16px] font-medium">
            {specialtyName}
          </p>
        </div>
        <h6 className="text-[16px] font-bold !text-green-800">
          {price}
        </h6>
      </div>
      <div className="flex items-center gap-[9px] px-2.5 py-1.5">
        <img src="images/img_checkmark_blue_900_01.svg" alt="Checkmark" className="h-[16px] self-end" />
        <p className="text-[14px] font-medium !text-blue-900_01">
          {removeButtonText}
        </p>
      </div>
    </div>
  );
}
