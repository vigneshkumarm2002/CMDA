import React from "react";
import Table from "./table";

const FileDetails = () => {
    
       const budgetData= [
          {
            "Budget Header": "Development charges for land Sq.m.",
            "Total Fees (INR)": 3000.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 3000.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "Development charges for Building per Sq.m.",
            "Total Fees (INR)": 14000.00,
            "Total Penalty (INR)": 1000.00,
            "Total Fees Paid (INR)": 0.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 14000.00,
            "Balance Penalty (INR)": 1000.00,
            "Total Balance (INR)": 15000.00
          },
          {
            "Budget Header": "Regulation Charge for land",
            "Total Fees (INR)": 53000.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 53000.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "Security Deposit for building",
            "Total Fees (INR)": 256000.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 0.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 256000.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 256000.00
          },
          {
            "Budget Header": "Security Deposit for Display Board",
            "Total Fees (INR)": 10000.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 10000.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 10000.00
          },
          {
            "Budget Header": "IDC - CMWSSB(For sewered area only)",
            "Total Fees (INR)": 297000.00,
            "Total Penalty (INR)": 10000.00,
            "Total Fees Paid (INR)": 297000.00,
            "Total Penalty Paid (INR)": 10000.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "I & A Charge",
            "Total Fees (INR)": 390000.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 390000.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "OSR Charges",
            "Total Fees (INR)": 0.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 0.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "Premium FSI Charges",
            "Total Fees (INR)": 0.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 0.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "Flag Day Charge",
            "Total Fees (INR)": 500.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 500.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "Caution Deposit",
            "Total Fees (INR)": 0.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 0.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },
          {
            "Budget Header": "Balance Scrutiny Fees",
            "Total Fees (INR)": 2000.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 0.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 2000.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 2000.00
          },
          {
            "Budget Header": "SD - STP",
            "Total Fees (INR)": 0.00,
            "Total Penalty (INR)": 0.00,
            "Total Fees Paid (INR)": 0.00,
            "Total Penalty Paid (INR)": 0.00,
            "Balance Fees (INR)": 0.00,
            "Balance Penalty (INR)": 0.00,
            "Total Balance (INR)": 0.00
          },{
            "Budget Header": "Total",
            "Total Fees (INR)": 1025500.00,
            "Total Penalty (INR)": 11000.00,
            "Total Fees Paid (INR)": 753500.00,
            "Total Penalty Paid (INR)": 10000.00,
            "Balance Fees (INR)": 272000.00,
            "Balance Penalty (INR)": 1000.00,
            "Total Balance (INR)": 283000.00
          }
        ]
      
        const data = {
            Developer_Applicant_Name: "Kushee",
            File_Number: "TEMP/CMDA/1311/2022",
            Date_of_Submission: "28-06-2023",
            Site_Address: "11, Bheema Nagar",
            District: "Chennai",
            Taluk: "Ambattur",
            Village: "Athipattu (GCC LB)",
            Local_Body_Name: "GCC",
            Type_of_Application: "Planning Permission",
            Proposal_Type: "Building",
            Type_of_Building: "NHRB"
          };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium ">FileDetails</h1>

      <table className="mx-auto w-full sm:w-[600px] pb-4">
      <tbody className="bg-white divide-y divide-gray-200">
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="px-2 py-4 text-sm text-gray-900">{key}</td>
            <td className="px-2 py-4 text-sm text-gray-900">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
   
      <Table data={budgetData} pagination={false}/>
    </div>
  );
};

export default FileDetails;
