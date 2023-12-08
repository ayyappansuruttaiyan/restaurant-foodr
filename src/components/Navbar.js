import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BeakerIcon,
  MapPinIcon,
  ClipboardDocumentListIcon,
  ArrowLeftOnRectangleIcon,
  Squares2X2Icon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
function Navbar() {
  const location = useLocation();
  const navItems = [
    {
      name: "Dashboard",
      icon: Squares2X2Icon,
      spacing: false,
      active: location.pathname === "/",
      to: "/",
    },
    {
      name: "Orders",
      icon: ClipboardDocumentListIcon,
      spacing: false,
      active: location.pathname === "/orders",
      to: "/orders",
    },
    {
      name: "Restaurants",
      icon: MapPinIcon,
      spacing: false,
      active: location.pathname === "/restaurants",
      to: "/restaurants",
    },
    {
      name: "Finance",
      icon: BuildingOfficeIcon,
      spacing: false,
      active: location.pathname === "/finance",
      to: "/finance",
    },
    {
      name: "Logout",
      icon: ArrowLeftOnRectangleIcon,
      spacing: false,
      active: location.pathname === "/logout",
      to: "/logout",
    },
    {
      name: "Start New Order",
      spacing: true,
      icon: BeakerIcon,
      active: location.pathname === "/startneworders",
      to: "/startneworders",
    },
  ];
  return (
    <div>
      <ul className="mt-4">
        {navItems.map((item) => (
          <Link to={item.to}>
            <li
              className={`flex items-center align-middle p-2 my-2 rounded text-slate-100 ${
                item.active ? "bg-white rounded !text-regal-green" : ""
              } ${
                item.spacing ? "absolute bottom-5 rounded bg-orange-500" : ""
              }`}
            >
              <span className="pr-3">
                <item.icon className="h-5" />
              </span>
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
