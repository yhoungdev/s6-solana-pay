"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {

  SearchIcon,
  ShoppingBag,
  LayoutDashboard,

  
} from "lucide-react";

interface IDashboard {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboard) {
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between w-[85%] mx-auto">
          <div className="flex items-center space-x-4">
            

            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              SolPay
            </span>
          </div>
          <div className="flex items-center space-x-4 cursor-pointer">
          
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://api.dicebear.com/9.x/dylan/svg?seed=Buddy"
                alt={'statoshi'}
                sizes="xl"
              />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>

            <div>
              <h4 className="font-medium">Statoshi</h4>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow p-6 w-[85%] mx-auto">
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview"><LayoutDashboard />Overview</TabsTrigger>
            {/* <TabsTrigger value="web-apps"><Gauge />History</TabsTrigger> */}
       
          </TabsList>

          <TabsContent value="overview">
            <div className="mb-4 flex justify-between items-center">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search projects"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-96"
                />
              </div>
              <div className="flex space-x-2">
               
                <Button className="bg-black  flex gap-2 text-white hover:bg-gray-800">
                <ShoppingBag /> 
                 <h3> My Products</h3>
             
                </Button>
               
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className=" ">
          {children}
        </div>
      </main>
    </div>
  );
}
