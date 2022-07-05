import React, { useContext } from "react";
import AppDataContext from "../../contexts/appDataContext";
import Delete from "../../ReusableComponents/Delete/Delete";

const DeleteCustomerModal = ({ open, closeConfirm, userId }) => {
  const { deleteCustomer } = useContext(AppDataContext);

  const deleteAction = () => {
    deleteCustomer(userId);
  };

  return (
    <Delete
      open={open}
      closeConfirm={closeConfirm}
      title="You Are Going To Delete The Coustomer"
      deleteAction={deleteAction}
    />
  );
};

export default DeleteCustomerModal;
