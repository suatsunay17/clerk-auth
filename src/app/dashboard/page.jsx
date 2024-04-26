"use client";
import React from "react";

import {
  faDollarSign,
  faUsers,
  faCreditCard,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import { DatePickerWithRange } from "@/components/date-picker";
import { useUser } from "@clerk/clerk-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import RecentSales from "@/components/RecentSales/RecentSales";
import Cards from "@/components/Cards/Cards";

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
    <BarChart width={840} height={400} data={data}>
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

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center my-40">
        <h1 className="font-extrabold text-3xl ">
          You have to sign in to use this page!
        </h1>
        <Link href="/sign-in">
          <button className="my-6 bg-emerald-200 p-4 text-xl  font-bold rounded">Sign In</button>
        </Link>
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
    <div className="p-10  overflow-hidden flex flex-col flex-wrap">
      <div className="flex justify-between items-center my-2 sm:flex-col lg:flex-row gap-2">
        <h1 className="font-bold text-4xl">Dashboard</h1>
        <p>
          Logged in as
          <span className="font-semibold"> {user.fullName}</span>
        </p>
        <DatePickerWithRange />
      </div>
      <div>
        <Tabs defaultValue="overview" className="rounded my-6 ">
          <TabsList className="p-1 bg-slate-100 rounded sm:flex sm:items-center">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="flex flex-col">
            <div className="flex flex-wrap justify-between items-center sm:flex-col sm:w-90 lg:flex-row">
              <Cards data={CardInfo} />
            </div>
            <div className="flex flex-wrap justify-between gap-10 lg:flex-row lg:justify-center sm:flex-col sm:items-center">
              <Card className="w-fit p-4 rounded-xl my-4 items-center">
                <Chart />
              </Card>
              <Card className="w-fit p-4 rounded-xl my-4 ">
                <RecentSales />
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
