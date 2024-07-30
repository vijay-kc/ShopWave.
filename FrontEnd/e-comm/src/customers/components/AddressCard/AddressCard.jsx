import { Button } from "@mui/material";
import React from "react";

function AddressCard({ address }) {
  const { firstName, lastName, streetAddress, city, state, zipCode, mobile } =address;
  return (
    <div className="p-4 m-4 flex border shadow-md">
       <h1 className='text-2xl font-bold'>Address :</h1>
      <div className="space-y-1 px-4 text-left">
        <p className="font-semibold text-lg">
          {firstName} {lastName}
        </p>
        <p>
          {streetAddress}, {city}
        </p>
        <p>
          {state}, {zipCode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{mobile}</p>
        </div>
        {/* <div className=''> 
          <Button sx={{ bgcolor: "rgb(145 85 253)" }} size="large" variant='contained'>Deliver Here</Button>
        </div> */}
      </div>
    </div>
  );
}

export default AddressCard;
