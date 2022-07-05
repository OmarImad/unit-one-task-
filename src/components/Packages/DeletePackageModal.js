import React, { useContext } from "react";
import AppDataContext from "../../contexts/appDataContext";
import Delete from "../../ReusableComponents/Delete/Delete";

const DeletePackageModal = ({ open, closeConfirm, packageId }) => {
  const { deletePackage } = useContext(AppDataContext);

  const deleteAction = () => {
    deletePackage(packageId);
  };

  return (
    <Delete
      open={open}
      closeConfirm={closeConfirm}
      title="You Are Going To Delete The package"
      deleteAction={deleteAction}
    />
  );
};

export default DeletePackageModal;
