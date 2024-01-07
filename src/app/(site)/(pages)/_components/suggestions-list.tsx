import { feature_requests } from "@/feature-requests";
import React from "react";
import FeatureRequestCard from "./feature-request-card";
import { api } from "@/trpc/server";

type Props = {};

async function SuggestionsList({}: Props) {
  const suggestions = await api.suggestion.all.query();
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      {suggestions.map((feature) => {
        return (
          <FeatureRequestCard
            key={feature.id}
            id={feature.id}
            title={feature.title}
            description={feature.description}
            upvotes={100}
          />
        );
      })}
    </div>
  );
}

export default SuggestionsList;
