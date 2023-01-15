export interface ExchangeDTO {
  currency: string;
  amount: number;
  symbol: string;
  rate: number;
  exchangeType: string;
  dateTime?: Date;
}
