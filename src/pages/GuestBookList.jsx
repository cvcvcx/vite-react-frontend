import * as React from "react";

import Paper from "@mui/material/Paper";

import Orders from "../components/Orders";
import Layout from "../components/Layout";

const GuestBookList = () => {
  return (
    <Layout>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Orders />
      </Paper>
    </Layout>
  );
};

export default GuestBookList;
