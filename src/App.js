import React from "react";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/sign-up"));
const Notfound = lazy(() => import("./pages/not-found"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading.....</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path={ROUTES.NOT_FOUND} element={<Notfound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
