import { useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Sidebar from "./Components/sidebar";
import TransactionReport from "./Components/transactionReport";
import UserMaster from "./Components/userMaster";
import UserAccessRights from "./Components/userAccessRights";
import ZonewiseReport from "./Components/zonewiseReport";
import HeaderwiseReport from "./Components/headerwiseReport";
import GatewaywiseReport from "./Components/gatewaywiseReport";
import FileDetails from "./Components/homePages";
import Checkout from "./Components/checkout";
import PaymentPage from "./Components/paymentPage";
import PaymentConfirm from "./Components/payment-confirm";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex lg:gap-4 ">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="w-full overflow-hidden lg:pl-[260px] pt-[78px] py-4 px-4">
            <Routes>
            <Route path="/cmda/" element={<FileDetails />} />
            <Route path="/cmda/checkout" element={<Checkout />} />
            <Route path="/cmda/payment-page" element={<PaymentPage />} />
            <Route path="/cmda/payment-confirm" element={<PaymentConfirm />} />
              <Route path="/cmda/transaction-report" element={<TransactionReport />} />
              <Route path="/cmda/user-master" element={<UserMaster />} />
              <Route path="/cmda/user-access-rights" element={<UserAccessRights />} />
              <Route path="/cmda/localbody-report" element={<ZonewiseReport />} />
              <Route path="/cmda/headerwise-report" element={<HeaderwiseReport />} />
              <Route path="/cmda/gatewaywise-report" element={<GatewaywiseReport />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
