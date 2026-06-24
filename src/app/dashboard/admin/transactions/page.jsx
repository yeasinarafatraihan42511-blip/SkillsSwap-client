// "use client";

// export default function TransactionsPage() {
//   const payments = [
//     {
//       id: 1,
//       client: "client@gmail.com",
//       freelancer: "freelancer@gmail.com",
//       amount: 500,
//       date: "22 Jun 2026",
//       status: "Paid",
//     },
//   ];

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">
//         Transactions History
//       </h1>

//       <div className="bg-white rounded-xl border overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-slate-100">
//             <tr>
//               <th className="p-4 text-left">
//                 Client Email
//               </th>

//               <th className="p-4 text-left">
//                 Freelancer Email
//               </th>

//               <th className="p-4 text-left">
//                 Amount
//               </th>

//               <th className="p-4 text-left">
//                 Payment Date
//               </th>

//               <th className="p-4 text-left">
//                 Status
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {payments.map((payment) => (
//               <tr key={payment.id} className="border-t">
//                 <td className="p-4">
//                   {payment.client}
//                 </td>

//                 <td className="p-4">
//                   {payment.freelancer}
//                 </td>

//                 <td className="p-4">
//                   ${payment.amount}
//                 </td>

//                 <td className="p-4">
//                   {payment.date}
//                 </td>

//                 <td className="p-4">
//                   {payment.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function TransactionsPage() {
const [transactions, setTransactions] =
useState([]);

useEffect(() => {
fetch("http://localhost:5000/transactions")
.then((res) => res.json())
.then((data) =>
setTransactions(data)
);
}, []);

return ( <div> <h1 className="text-3xl font-bold mb-8">
Transactions </h1>


  <div className="overflow-x-auto bg-white rounded-3xl border shadow-sm">
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Freelancer</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((item) => (
          <tr key={item._id}>
            <td>{item.taskTitle}</td>

            <td>
              {item.freelancerName}
            </td>

            <td>
              ${item.proposedBudget}
            </td>

            <td>
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


);
}
