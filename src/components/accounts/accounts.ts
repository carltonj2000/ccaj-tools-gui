import { create } from "zustand";

export enum aType {
  cash = "cash",
  stock = "stock",
  ira = "ira",
  bond = "bond",
  crypto = "crypto",
}

export const aTypeKeys = Object.keys(aType) as Array<aType>;

export type instT = {
  institution: string;
  amount: string;
  amountValid: boolean;
  accountType: aType;
};

const account = (institution: string, accountType: aType): instT => ({
  amount: "0",
  amountValid: true,
  institution,
  accountType,
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
];
const getTotal = (accounts: accountsT) =>
  accounts.reduce(
    (acc, inst) =>
      acc + (Number.isNaN(parseInt(inst.amount)) ? 0 : parseInt(inst.amount)),
    0
  );

interface AccountState {
  accounts: accountsT;
  total: number;
  accountTypes: aType[];
  clearBalances: () => void;
  addInstitution: (institution: instT) => void;
  updateInstitution: (institution: string, amount: string) => void;
}

export const accountStore = create<AccountState>((set) => ({
  accounts: accounts,
  total: getTotal(accounts),
  accountTypes: aTypeKeys,
  clearBalances: () => {
    set((state) => ({ ...state }));
  },
  addInstitution: (institution: instT) => {
    set((state) => {
      const total = getTotal(state.accounts);
      return { ...state, accounts: [...state.accounts, institution], total };
    });
  },
  updateInstitution: (institution: string, amount: string) => {
    set((state) => {
      const accounts = state.accounts.map((i) =>
        i.institution === institution
          ? { ...i, amount, amountValid: !Number.isNaN(parseInt(amount)) }
          : i
      );
      console.log(accounts);
      const total = getTotal(accounts);
      return { ...state, accounts, total };
    });
  },
}));
