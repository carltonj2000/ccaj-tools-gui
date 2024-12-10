export enum aType {
  cash = "cash",
  stock = "stock",
  ira = "ira",
  bond = "bond",
  crypto = "crypto",
}

export type instT = {
  institution: string;
  amount: string;
  type: aType;
};

const account = (institution: string, type: aType): instT => ({
  amount: "0",
  institution,
  type,
});

export type accountsT = Array<instT>;

export const accounts: accountsT = [
  account("Bank Of America", aType.cash),
  account("Merrill Lynch", aType.ira),
  account("Chase Bank", aType.cash),
  account("Charles Schwab", aType.stock),
  account("Etrade / Morgan Stanley", aType.stock),
  account("Coinbase", aType.crypto),
  account("Kraken", aType.crypto),
  account("Treasury", aType.bond),
];
