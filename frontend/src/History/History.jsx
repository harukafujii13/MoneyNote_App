import React from "react";
import { useGlobalContext } from "../context/globalContext";

const History = () => {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();

  return (
    <div className="flex flex-col gap-4">
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        const textColor = type === "expense" ? "text-red-400" : "text-lime-400";

        return (
          <div
            key={_id}
            className="bg-FCF6F9 border-2 border-white shadow-md p-4 rounded-lg flex justify-between items-center">
            <p className={`font-medium ${textColor}`}>{title}</p>
            <p className={textColor}>
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
