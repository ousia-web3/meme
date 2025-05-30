import React from "react";

const RewardsTable = () => {
  const rewards = [
    { type: "Sale", base: 250, bonus: 150, max: 400 },
    { type: "Lease (Jeonse)", base: 120, bonus: 80, max: 200 },
    { type: "Monthly Rent", base: 60, bonus: 40, max: 100 }
  ];

  return (
    <section id="rewards" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">🏆 Reward Examples</h2>
      <p className="mb-6 text-pink-200 italic text-sm">"Get rekt? Get rewarded!"</p>
      <div className="overflow-x-auto">
        <table className="mx-auto border-collapse border border-gray-400 bg-white/5 text-white text-sm">
          <thead>
            <tr className="bg-white/10">
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
