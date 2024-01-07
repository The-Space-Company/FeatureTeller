import { PlusIcon, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import FeatureRequestCard from "@/app/(site)/(pages)/_components/feature-request-card";
import { SortPicker } from "@/components/sort-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { feature_requests } from "@/feature-requests";
import SuggestionsList from "./_components/suggestions-list";

function LandingPage() {
  return (
    <div className="bg-gradient-to-tr from-indigo-200 to-purple-200">
      <div className="container max-w-3xl space-y-2 px-4 py-8">
        <h1 className="text-xl font-bold">
          We've made this place for you to share your ideas.
        </h1>
        <p className="max-w-lg text-gray-600">
          Your ideas, needs and wants are what drives us and helps us make make
          the best things possible. Help us shape the future of FeatureTeller
        </p>
      </div>
      {/* <Separator /> */}
      <div className="bg-white">
        <div className="container flex max-w-3xl justify-between px-4 py-6">
          <div className="flex space-x-3">
            <SortPicker />
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </div>
          <Button asChild>
            <Link href="/suggestions/new">
              <PlusIcon className="mr-2" size={14} />
              Suggest a feature
            </Link>
          </Button>
        </div>
        <SuggestionsList />
      </div>
    </div>
  );
}

export default LandingPage;
