import React from "react";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  MapIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

function MyOrder() {
  return (
    <>
      <div className="flex flex-col border shadow-md border-slate-200 p-5 gap-4 bg-white rounded-md text-sm text-thin">
        <span className="flex justify-between items-center font-semibold">
          <h1 className="text-base">My Order</h1>
          <Link className=" text-regal-green">Edit</Link>
        </span>
        <span className="flex gap-2">
          <ClockIcon className="w-4" />
          <p>9.40 AM</p>
        </span>
        <span className="flex gap-2">
          <MapIcon className="w-4" />
          <p>2517, Pasific Avo Venice, CA 90219</p>
        </span>
        <span className="flex gap-2">
          <ClipboardDocumentListIcon className="w-4" />
          <p>Orders must stay warm</p>
        </span>
      </div>
    </>
  );
}

export default MyOrder;
