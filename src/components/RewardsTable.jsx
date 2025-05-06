import React from "react";

const RewardsTable = () => {
  const rewards = [
    { type: "Sale", base: 250, bonus: 150, max: 400 },
    { type: "Lease (Jeonse)", base: 120, bonus: 80, max: 200 },
    { type: "Monthly Rent", base: 60, bonus: 40, max: 100 }
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Rewards & NFT Structure</h2>
      <div className="overflow-x-auto">
        <table className="mx-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Transaction Type</th>
              <th className="border px-4 py-2">Base Reward</th>
              <th className="border px-4 py-2">Verification Bonus</th>
              <th className="border px-4 py-2">Max Reward</th>
            </tr>
          </thead>
          <tbody>
            {rewards.map((r, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{r.type}</td>
                <td className="border px-4 py-2">{r.base} RTDG</td>
                <td className="border px-4 py-2">+{r.bonus} RTDG</td>
                <td className="border px-4 py-2">{r.max} RTDG</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RewardsTable;
