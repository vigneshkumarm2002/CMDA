import React from 'react'
import FileDetails from './homePages';
import Checkout from './checkout';
import PaymentPage from './paymentPage';
import PaymentConfirm from './payment-confirm';
import TransactionReport from './transactionReport';
import UserMaster from './userMaster';
import UserAccessRights from './userAccessRights';
import ZonewiseReport from './zonewiseReport';
import HeaderwiseReport from './headerwiseReport';
import GatewaywiseReport from './gatewaywiseReport';

import {BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './sidebar';

const Layout = ({sidebarOpen,setSidebarOpen}) => {

  
    return (

          <div className="flex lg:gap-4 ">
      
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
         
            <div className="w-full overflow-hidden lg:pl-[260px] pt-[78px] py-4 px-4">
              <Routes>
            
                <Route path="/transaction-report" element={<TransactionReport />} />
                <Route path="/user-master" element={<UserMaster />} />
                <Route path="/user-access-rights" element={<UserAccessRights />} />
                <Route path="/localbody-report" element={<ZonewiseReport />} />
                <Route path="/headerwise-report" element={<HeaderwiseReport />} />
                <Route path="/gatewaywise-report" element={<GatewaywiseReport />} />
              </Routes>
            </div>
          </div>
  )
}

export default Layout