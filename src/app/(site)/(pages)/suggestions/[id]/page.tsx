import { ChevronLeft, PlusIcon, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";

async function Detail({ params }: { params: { id: string } }) {
  const feature = await api.suggestion.getById.query({
    id: parseInt(params.id),
  });

  return (
    <div className="">
      <div className="container max-w-3xl px-4 py-3">
        <Button asChild variant={"ghost"} className="-ml-6">
          <Link href="/">
            <ChevronLeft className="mr-2" size={14} />
            Back to Trending
          </Link>
        </Button>
      </div>
      <div className="container flex max-w-3xl flex-col space-y-8 px-4 py-3 pb-12">
        {/* Feature details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold tracking-tight">
            {feature?.title}
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground">
            {feature?.description}
          </p>
        </div>
      </div>
      {/* Voting and results */}
      <div className="bg-purple-100">
        <div className="container flex max-w-3xl items-center  justify-between space-x-6 p-4 ">
          <div className="flex items-baseline space-x-3">
            <span className="text-xl font-bold">18</span>
            <h3 className="text-xl text-purple-600">Upvotes</h3>
          </div>
          <Button>I want this too</Button>
        </div>
      </div>
      {/* <Separator />
      <div className="bg-white">

      </div> */}
    </div>
  );
}

export default Detail;
