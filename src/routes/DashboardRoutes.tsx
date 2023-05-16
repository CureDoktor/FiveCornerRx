import * as React from "react";
import TreatmentPlan from "../components/TreatmentPlan/TreatmentPlan";

import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/paths";
const EditProfile = React.lazy(
  () => import("../components/EditProfile/EditProfile")
);
const MyCase = React.lazy(() => import("../components/MyCase/MyCase"));
const OrderHistory = React.lazy(
  () => import("../components/OrderHistory/OrderHistory")
);
const BillingDetails = React.lazy(
  () => import("../components/BillingDetails/BillingDetails")
);
const Security = React.lazy(() => import("../components/Security/Security"));

const DashboardRoutes: React.FC = () => {
  return <React.Suspense fallback={<Loading />}></React.Suspense>;
};

export default DashboardRoutes;
