import * as React from "react";
import { Drawer } from "@src/app/layout/Drawer";
import { AppBar } from "@src/app/layout/AppBar";

export const drawerWidth: number = 240;

function Header() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <Drawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}

export default Header;
