import * as React from "react";
import TreatmentPlan from "../components/TreatmentPlan/TreatmentPlan";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { PATH } from "../constants/paths";
import FaqsPage from "../pages/faq";
import UserDashboard from "../pages/dashboard";
import TermsAndConditions from "../pages/terms";
import PrivacyPolicy from "../pages/privacy-policy";
import ConsentToTeleHealth from "../pages/consent-to-telehealth";
import Register from "../pages/api/auth/register";
// import SignIn from '../Pages/SignIn/SignIn';
// import SignUp from '../Pages/SignUp/SignUp';
const SignIn = React.lazy(() => import("../pages/sign-in"));
const SignUp = React.lazy(() => import("../pages/sign-up"));
const Questionnaire = React.lazy(() => import("../pages/questionnaire"));
const BillingQuestionnaire = React.lazy(() => import("../pages/billing"));
const HomePage = React.lazy(() => import("../pages/home"));
const HowItWork = React.lazy(() => import("../pages/how-it-works"));
const SildenafilCitrate = React.lazy(() =>
  import("../pages/sildenafil-citrate")
);
const TadalafilCitrate = React.lazy(() => import("../pages/tadalafil-citrate"));
const ApiCall = React.lazy(() => import("../pages/api/auth/hello"));
const ApiRegister = React.lazy(() => import("../pages/api/auth/register"));
// const BillingDetails = React.lazy(() => import('../Components/BillingDetails/BillingDetails'));
// const Security = React.lazy(() => import('../Components/Security/Security'));

const MainRoutes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={PATH.SignUp} component={SignUp} />
        <Route exact path={PATH.SignIn} component={SignIn} />
        <Route exact path={PATH.HomePage} component={HomePage} />
        <Route path={PATH.HowItWork} component={HowItWork} />
        <Route path={PATH.SildenafilCitrate} component={SildenafilCitrate} />
        <Route path={PATH.TadalafilCitrate} component={TadalafilCitrate} />
        <Route path={PATH.Quessionaire} component={Questionnaire} />
        <Route
          path={PATH.BillingQuestionnaire}
          component={BillingQuestionnaire}
        />
        <Route path={PATH.FaqsPage} component={FaqsPage} />
        <Route path={PATH.UserDash} component={UserDashboard} />
        <Route path={PATH.TermsAndConditions} component={TermsAndConditions} />
        <Route path={PATH.PrivacyPolicy} component={PrivacyPolicy} />
        <Route
          path={PATH.ConsentToTeleHealth}
          component={ConsentToTeleHealth}
        />
        <Route path={PATH.ApiCall} component={ApiCall} />
        <Route path={PATH.ApiRegister} component={Register} />
      </Switch>
    </React.Suspense>
  );
};

export default MainRoutes;
