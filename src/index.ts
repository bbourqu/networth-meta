export interface TransactionCategory {
  category_id: string;
  group: string;
  hierarchy: Array<string>;
  name: string;
}

export interface IAccount {
  account_id: string;
  balances: object;
  mask: string;
  name: string;
  official_name: string;
  subtype: string;
  type: string;
}

export class Account implements IAccount {
  account_id: string;
  balances: object;
  mask: string;
  name: string;
  official_name: string;
  subtype: string;
  type: string;

  constructor(data: IAccount) {
    const {
      account_id,
      balances,
      mask,
      name,
      official_name,
      subtype,
      type,
    } = data;

    this.account_id = account_id;
    this.balances = balances
    this.mask = mask
    this.name = name
    this.official_name = official_name
    this.subtype = subtype
    this.type = type;
  }
}

export interface ITransaction {
  account_id: string;
  account_owner;
  amount: number;
  category: Array<string>;
  category_id: string;
  date: string;
  location: object;
  name: string;
  payment_meta: Object;
  pending: Boolean;
  pending_transaction_id: string;
  transaction_id: string;
  transaction_type: string;
}

export class Transaction implements ITransaction {
  account_id: string;
  account_owner;
  amount: number;
  category: Array<string>;
  category_id: string;
  date: string;
  location: object;
  name: string;
  payment_meta: Object;
  pending: Boolean;
  pending_transaction_id: string;
  transaction_id: string;
  transaction_type: string;

  constructor(data: ITransaction) {
    this.account_id = data.account_id;
    this.account_owner = data.account_id;
    this.amount = data.amount;
    this.category = data.category;
    this.category_id = data.category_id;
    this.date = data.date;
    this.location = data.location;
    this.name = data.name;
    this.payment_meta = data.payment_meta;
    this.pending = data.pending;
    this.pending_transaction_id = data.pending_transaction_id;
    this.transaction_id = data.transaction_id;
    this.transaction_type = data.transaction_type;
  }
}