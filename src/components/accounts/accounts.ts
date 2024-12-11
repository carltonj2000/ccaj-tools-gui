import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

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
const getTotal = (accounts: accountsT): number =>
  accounts.reduce(
    (acc, inst) =>
      acc +
      (inst.amount.length === 0
        ? 0
        : Number.isNaN(parseInt(inst.amount))
        ? 0
        : parseInt(inst.amount)),
    0
  );

interface AddDis {
  active: boolean;
  enable: () => void;
  disable: () => void;
}

interface GUI {
  institution: {
    add: AddDis;
    del: AddDis;
  };
}

interface AccountState {
  accounts: accountsT;
  total: number;
  accountTypes: aType[];
  clearBalances: () => void;
  addInstitution: (institution: instT) => void;
  updateInstitution: (institution: string, amount: string) => void;
  gui: GUI;
}

export const accountStore = create<AccountState>()(
  immer((set) => ({
    gui: {
      institution: {
        add: {
          active: false,
          enable: () =>
            set((state) => {
              state.gui.institution.add.active = true;
            }),
          disable: () =>
            set((state) => {
              state.gui.institution.add.active = false;
            }),
        },
        del: {
          active: false,
          enable: () =>
            set((state) => {
              state.gui.institution.del.active = true;
            }),
          disable: () =>
            set((state) => {
              state.gui.institution.del.active = false;
            }),
        },
      },
    },
    accounts: accounts,
    total: getTotal(accounts),
    accountTypes: aTypeKeys,
    clearBalances: () => {
      set((state) => {
        const accounts = state.accounts.map((a: instT) => ({
          ...a,
          amount: "0",
          amountValid: true,
        }));
        return { ...state, accounts, total: 0 };
      });
    },
    addInstitution: (institution: instT) => {
      set((state) => {
        const total = getTotal(state.accounts);
        return { ...state, accounts: [...state.accounts, institution], total };
      });
    },
    updateInstitution: (institution: string, amount: string) => {
      set((state) => {
        const accounts = state.accounts.map((i: instT) =>
          i.institution === institution
            ? {
                ...i,
                amount,
                amountValid:
                  amount.length === 0 ? true : /^-?\d+$/g.test(amount),
              }
            : i
        );
        const total = getTotal(accounts);
        return { ...state, accounts, total };
      });
    },
  }))
);
