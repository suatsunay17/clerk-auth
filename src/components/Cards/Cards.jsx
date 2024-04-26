import React from "react";
import { Card } from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cards({data}) {
  return (
    <>
      {Object.entries(data).map(([key, { title, value, stat, icon }]) => (
        <Card key={key} className="rounded-xl w-80 shadow-md p-7 my-3">
          <div className="flex justify-between">
            <h5 className="font-semibold text-sm">{title}</h5>
            <FontAwesomeIcon icon={icon} className="text-gray-500 text-xl" />
          </div>
          <p className="my-2.5 font-bold text-3xl">{value}</p>
          <p className="text-xs text-gray-500">{stat}</p>
        </Card>
      ))}
    </>
  );
}
