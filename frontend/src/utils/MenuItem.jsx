import { dashboard, expenses, transactions, trend } from "../utils/Icons";
export const MenuItems = [
  {
    id: 1,
    title: "Home",
    icon: dashboard,
    link: "/home",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  },
];
