"use client";

import { useEffect } from "react";
/* eslint-disable react/no-unescaped-entities */


function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}

export default BootstrapClient;
