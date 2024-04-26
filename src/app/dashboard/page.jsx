"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faUsers,
  faCreditCard,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import { DatePickerWithRange } from "@/components/date-picker";
import { useUser, useClerk } from "@clerk/clerk-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export function Chart() {
  const data = [
    { name: "Jan", sales: 100 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 200 },
    { name: "Apr", sales: 278 },
    { name: "May", sales: 189 },
    { name: "Jun", sales: 239 },
    { name: "Jul", sales: 349 },
    { name: "Aug", sales: 400 },
    { name: "Sep", sales: 300 },
    { name: "Oct", sales: 200 },
    { name: "Nov", sales: 278 },
    { name: "Dec", sales: 189 },
  ];

  return (
    <BarChart width={900} height={300} data={data}>
      <XAxis dataKey="name" stroke="#000" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" />
      <Bar dataKey="sales" fill="#000" barSize={30} />
    </BarChart>
  );
}

export default function Dashboard() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <div>
        <p>You have to sign in to use this page!</p>
        <Link href="/sign-in">Sign In</Link>
      </div>
    );
  }

  const CardInfo = {
    card1: {
      title: "Total Revenue",
      value: "$45,231.89",
      stat: "+20.1% from last month",
      icon: faDollarSign,
    },
    card2: {
      title: "Subscriptions",
      value: "+2350",
      stat: "+180.1% from last month",
      icon: faUsers,
    },
    card3: {
      title: "Sales",
      value: "+12.234",
      stat: "+19% from last month",
      icon: faCreditCard,
    },
    card4: {
      title: "Active Now",
      value: "+573",
      stat: "+201 since last hour",
      icon: faArrowTrendUp,
    },
  };

  return (
    <div className="p-6  overflow-hidden">
      <div className="flex justify-between items-center my-2">
        <h1 className="font-bold text-4xl">Dashboard</h1>
        <p>
          Logged in as
          <span className="font-semibold">{user.fullName}</span>
        </p>
        <DatePickerWithRange />
      </div>
      <div>
        <Tabs defaultValue="overview" className="w-[400px] rounded my-6 ">
          <TabsList className="p-1 bg-slate-100 rounded">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="flex-col w-fit">
            <div className="flex gap-10">
              {Object.entries(CardInfo).map(
                ([key, { title, value, stat, icon }]) => (
                  <Card key={key} className="rounded-xl shadow-md w-80 p-7">
                    <div className="flex justify-between">
                      <h5 className="font-semibold text-sm">{title}</h5>
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-gray-500 text-xl"
                      />
                    </div>
                    <p className="my-2.5 font-bold text-3xl">{value}</p>
                    <p className="text-xs text-gray-500">{stat}</p>
                  </Card>
                )
              )}
            </div>
            <Card className="w-fit p-4 rounded-xl my-4">
              <Chart className="w-400" />
            </Card>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
