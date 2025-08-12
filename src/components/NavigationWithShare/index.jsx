import React from "react";

export default function NavigationWithShare({
  buttonLabel = "01",
  text02 = "02",
  text03 = "03",
  text04 = "04",
  text05 = "05",
  text06 = "06",
  text07 = "07",
  text08 = "08",
  text09 = "09",
  text10 = "10",
  ellipsisText = "...",
  text50 = "50",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-2 py-2`}>
      <div className="flex flex-1 items-center gap-2 md:self-stretch">
        <img src="images/img_share.svg" alt="Share" className="h-[24px] w-[10%] object-contain" />
        <div className="flex flex-1 gap-2">
          <Button
            color="gray_50"
            size="lg"
            className="w-full rounded border border-solid border-blue-900_01 px-[5px] font-medium"
          >
            {buttonLabel}
          </Button>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text02}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text03}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text04}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text05}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text06}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text07}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text08}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text09}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text10}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {ellipsisText}
            </p>
          </div>
          <div className="flex w-full flex-col items-center p-1.5">
            <p
              className="text-[16px] font-medium !text-information_colour sm:text-[13px]"
            >
              {text50}
            </p>
          </div>
        </div>
      </div>
      <img src="images/img_share.svg" alt="Share" className="h-[24px] w-[8%] object-contain" />
    </div>
  );
}
