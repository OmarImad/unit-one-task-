import React from "react";
import { Drawer, List } from "@mui/material";
import ListItem from "../../ReusableComponents/ListItem/ListItem";

const SideList = ({ openDrawer, setOpenDrawer }) => {
  const togleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Drawer
      anchor={"left"}
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <List style={{ width: "300px" }}>
        <ListItem onclick={togleDrawer} primary={"Customers"} to="/" />
        <ListItem
          onclick={togleDrawer}
          primary={"Packages"}
          to="/Packages"
        />
        <ListItem
          onclick={togleDrawer}
          primary={"Invoices"}
          to="/Invoices"
        />
      </List>
    </Drawer>
   
  );
};

export default SideList;
