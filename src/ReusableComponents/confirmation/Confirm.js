import { useState } from "react";

//Open and Cloas state
const Confirm = () => {
  const [open, setOpen] = useState(false);

  const openConfirm = () => setOpen(true);

  const closeConfirm = () => setOpen(false);

  return { open, openConfirm, closeConfirm };
};

export default Confirm;
