import * as React from "react";

import Paper from "@mui/material/Paper";

import ListRegisterBtn from "../components/list/ListRegisterBtn";
import Orders from "../components/list/Orders";
import Search from "../components/list/Search";

const GuestBookList = () => {
  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      <Orders />
      <Search />
      <ListRegisterBtn />
    </Paper>
  );
};

export default GuestBookList;
