import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFGen from "./PDFGen";
import { Button } from "@mui/material";
import { useState } from "react";

const Invoices = () => {
  const [companyName, SetCompanyName] = useState("");
  const [address1, Setaddress1] = useState("");
  const [address2, SetAdress2] = useState("");
  const [country, Setcountry] = useState("");
  return (
    <div>
      <form action="">
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
          document={<PDFGen companyName={companyName} />}
        >
          {({ loading }) => (
            <Button>{loading ? "Loading" : "Download "}</Button>
          )}
        </PDFDownloadLink>
        <PDFGen companyName={companyName} />
      </div>
    </div>
  );
};

export default Invoices;
