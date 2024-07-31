import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFGen from "./PDFGen";
import { Button } from "@mui/material";
import { useState } from "react";

const Invoices = () => {
  const [companyName, SetCompanyName] = useState("");
  const [address1, Setaddress1] = useState("");
  const [address2, SetAdress2] = useState("");
  const [companyCountry, Setcountry] = useState("");
  return (
    <div>
      <form action="">
        <input
          placeholder="Company Logo"
          onChange={(e) => {
            SetCompanyName(e.target.value);
          }}
          type="image"
        />
        <input
          className="text-black"
          placeholder="Company Name"
          onChange={(e) => {
            SetCompanyName(e.target.value);
          }}
          type="text"
        />
        <input
          className="text-black"
          placeholder="Company Address"
          onChange={(e) => {
            Setaddress1(e.target.value);
          }}
          type="text"
        />
        <input
          className="text-black"
          placeholder="City,State,Pincode"
          onChange={(e) => {
            SetAdress2(e.target.value);
          }}
          type="text"
        />
        <input
          className="text-black"
          placeholder="Company Country"
          onChange={(e) => {
            Setcountry(e.target.value);
          }}
          type="text"
        />
      </form>
      <div className="box box10">
        <h1 className="underline ">Invoice</h1>
        <PDFDownloadLink
          fileName="Invoice"
          document={
            <PDFGen
              companyName={companyName}
              address1={address1}
              address2={address2}
              companyCountry={companyCountry}
            />
          }
        >
          {({ loading }) => (
            <Button>{loading ? "Loading" : "Download "}</Button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Invoices;
