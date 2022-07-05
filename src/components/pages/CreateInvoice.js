import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvoiceHeader from "../CreateInvoice/InvoiceHeader/InvoiceHeader";
import InvoiceTable from "../CreateInvoice/InvoiceTable/InvoiceTable";
import InvoiceTail from "../CreateInvoice/InvoiceTail/InvoiceTail";
import AppDataContext from "../../contexts/appDataContext";

const style = {
  width: "50%",
  margin: "auto",
};

const CreateInvoice = () => {
  let { id } = useParams();
  const [invoice, setInvoice] = useState({});
  const {
    getCustomerById,
    getCustomerInvoice,
    getCustomerPackages,
    customer,
    customerPackages,
  } = useContext(AppDataContext);


  //get customer by id 
  useEffect(() => {
    getCustomerById(Number(id));
    const invoice = getCustomerInvoice(Number(id));
    setInvoice(invoice);
    getCustomerPackages(Number(id));
  }, [getCustomerById, getCustomerInvoice, getCustomerPackages, id]);

  return invoice ? (
    <div style={style}>
      <InvoiceHeader invoice={invoice} customer={customer} />
      <InvoiceTable
        waightSum={invoice?.totalWeight}
        priceSum={invoice?.totalPrice}
        packages={customerPackages}
      />
      <InvoiceTail count={customerPackages.length} />
    </div>
  ) : (
    <h3>{customer?.name} doesn't have a packages</h3>
  );
};

export default CreateInvoice;
