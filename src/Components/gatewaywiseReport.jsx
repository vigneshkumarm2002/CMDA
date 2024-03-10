import React from 'react'
import Table from './table'

const GatewaywiseReport = () => {
    const data=[
        {
          "Date": "08-03-2024",
          "District": "Thiruvallur",
          "Budget Header": "Advertisement Charge",
          "Applicant Name": "POTHYS GARMENTS",
          "Challan No": "CMDA/0004/2024",
          "File No": "RE/GR-II/09/07/009",
          "Transaction id": "CMDA_16098",
          "Zone": "Panchayat Union",
          "Challan Amount": 3724,
          "Penalty": 0,
          "Total Amount": 3724,
          "Payment Status": "Paid",
          "Gateway": "HDFC",
          "Total Challan Amount": 30000,
          "Total Paid Challan Amount": 15500,
          "Total Balance Amount": 14500,
          "Payment Mode": "Credit Card"
        },
        {
          "Date": "08-03-2024",
          "District": "Chennai",
          "Budget Header": "Scrutiny Fees",
          "Applicant Name": "DUGAR HOUSING LIMITED",
          "Challan No": "CMDA/0007/2024",
          "File No": "RE/GR-II/09/07/019",
          "Transaction id": "CMDA_16099",
          "Zone": "Municipality",
          "Challan Amount": 4250,
          "Penalty": 50,
          "Total Amount": 4500,
          "Payment Status": "Failed",
          "Gateway": "HDFC",
          "Total Challan Amount": 25000,
          "Total Paid Challan Amount": 12500,
          "Total Balance Amount": 12500,
          "Payment Mode": "Debit Card"
        },
        {
          "Date": "08-03-2024",
          "District": "Kancheepuram",
          "Budget Header": "Registration Charge",
          "Applicant Name": "Kushee",
          "Challan No": "CMDA/0008/2024",
          "File No": "RE/GR-II/09/07/109",
          "Transaction id": "CMDA_16100",
          "Zone": "Municipality",
          "Challan Amount": 2856,
          "Penalty": 0,
          "Total Amount": 2856,
          "Payment Status": "Paid",
          "Gateway": "HDFC",
          "Total Challan Amount": 20000,
          "Total Paid Challan Amount": 10000,
          "Total Balance Amount": 10000,
          "Payment Mode": "Credit Card"
        },
        {
          "Date": "08-03-2024",
          "District": "Chengalpattu",
          "Budget Header": "Development Charge",
          "Applicant Name": "Karpagam",
          "Challan No": "CMDA/0009/2024",
          "File No": "RE/GR-II/09/07/213",
          "Transaction id": "CMDA_16101",
          "Zone": "2 Zone",
          "Challan Amount": 7000,
          "Penalty": 800,
          "Total Amount": 7800,
          "Payment Status": "Failed",
          "Gateway": "HDFC",
          "Total Challan Amount": 50000,
          "Total Paid Challan Amount": 37000,
          "Total Balance Amount": 13000,
          "Payment Mode": "Net Banking"
        },
        {
          "Date": "08-03-2024",
          "District": "Chengalpattu",
          "Budget Header": "Advertisement Charge",
          "Applicant Name": "Indian Builders",
          "Challan No": "CMDA/0014/2024",
          "File No": "RE/GR-II/09/07/029",
          "Transaction id": "CMDA_16108",
          "Zone": "Town Panchayat",
          "Challan Amount": 3750,
          "Penalty": 465,
          "Total Amount": 4215,
          "Payment Status": "Paid",
          "Gateway": "HDFC",
          "Total Challan Amount": 42500,
          "Total Paid Challan Amount": 10000,
          "Total Balance Amount": 32500,
          "Payment Mode": "Debit Card"
        }
      ]
      
  return (
<div className='flex flex-col gap-4'>
    <div className="w-full md:w-[500px] text-left mx-auto mt-4 flex flex-col gap-4 self-baseline">
      <div className="w-full flex flex-col sm:flex-row gap-4 ">
        <div className="w-full sm:w-[50%]">
          <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
            From Date
          </label>
          <div className="mt-1">
            <input
              type="date"
              id="from-date"
              name="from-date"
              className="px-2 py-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none"
            />
          </div>
        </div>
        <div className="w-full sm:w-[50%]">
          <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
            To Date
          </label>
          <div className="mt-1">
            <input
              type="date"
              id="to-date"
              name="to-date"
              className="px-2 py-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="districtwise" className="block text-sm font-medium text-gray-700">
        Districts
        </label>
        <div className="mt-1">
          <select
            id="districtwise"
            name="districtwise"
            className="px-2 py-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none"
          >
            <option value="">All Districts</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
            {/* Add more dummy options as needed */}
          </select>
        </div>
      </div>

      <div className=" flex gap-4">
        <button className="bg-[#0D6EFD]  text-white font-medium py-2 px-4 rounded">
          Submit
        </button>
        <button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-2 px-4 rounded">
          Clear
        </button>
      </div>
    </div>
    <Table data={data} />
    </div>
  )
}

export default GatewaywiseReport