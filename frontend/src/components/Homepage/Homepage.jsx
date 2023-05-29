import React from "react";

const Homepage = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "90vh" }}>
      <div className="grid place-items-center">
        <h1 className="font-black text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
          Welcome to Money Note
        </h1>
        <p className="text-2xl font-medium text-center mt-2">
          Managing your incomes and expenses effectively
          <br />
          for improving your lifestyle!!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
