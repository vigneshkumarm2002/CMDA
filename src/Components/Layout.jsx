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
    const location = useLocation();

    // Define an array of routes where the sidebar should be hidden
    const hideSidebarRoutes = ["/cmda/payment", "/cmda/checkout", "/cmda/payment-page", "/cmda/payment-confirm"];
  
    // Check if the current route matches any route in hideSidebarRoutes array
    const shouldHideSidebar = hideSidebarRoutes.some(route => location.pathname.startsWith(route));
  
    return (

          <div className="flex lg:gap-4 ">
            {!shouldHideSidebar && (
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            )}
            <div className="w-full overflow-hidden lg:pl-[260px] pt-[78px] py-4 px-4">
              <Routes>
            
                <Route path="/cmda/transaction-report" element={<TransactionReport />} />
                <Route path="/cmda/user-master" element={<UserMaster />} />
                <Route path="/cmda/user-access-rights" element={<UserAccessRights />} />
                <Route path="/cmda/localbody-report" element={<ZonewiseReport />} />
                <Route path="/cmda/headerwise-report" element={<HeaderwiseReport />} />
                <Route path="/cmda/gatewaywise-report" element={<GatewaywiseReport />} />
              </Routes>
            </div>
          </div>
  )
}

export default Layout