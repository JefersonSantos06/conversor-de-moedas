import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency";

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  max: undefined,
  min: 0,
  nullable: false,
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: "."
};
