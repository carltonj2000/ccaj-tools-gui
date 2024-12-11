import { create } from "zustand";

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
];
const getTotal = (accounts: accountsT) =>
  accounts.reduce((acc, inst) => acc + parseInt(inst.amount), 0);

interface AccountState {
  accounts: accountsT;
  total: number;
  addInstitution: (institution: instT) => void;
  updateInstitution: (institution: string, amount: string) => void;
}

export const accountStore = create<AccountState>((set) => ({
  accounts: accounts,
  total: getTotal(accounts),
  addInstitution: (institution: instT) => {
    const total = getTotal(accounts);
    set((state) => ({ accounts: [...state.accounts, institution], total }));
  },
  updateInstitution: (institution: string, amount: string) => {
    set((state) => {
      const accounts = state.accounts.map((i) =>
        i.institution === institution ? { ...i, amount } : i
      );
      const total = getTotal(accounts);
      return { accounts, total };
    });
  },
}));
