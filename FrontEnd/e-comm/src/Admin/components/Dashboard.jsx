import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import ProductTable from "../Views/ProductTable";
import OrdersTable from "../Views/OrderTable";

function AdminDashboard() {
  return (
    <div className="p-8">
      <Grid container spacing={3} >
        <Grid item xs={12} md={4}>
          <div>
          <Achievement />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div><MonthlyOverview  /></div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div></div>
          <OrdersTable />
        </Grid>

        <Grid item xs={12} sm={6}>
          <div>
          <ProductTable />
          </div>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminDashboard;
