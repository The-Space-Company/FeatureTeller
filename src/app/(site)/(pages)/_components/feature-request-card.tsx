import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  description: string;
  upvotes: number;
};

function FeatureRequestCard({ id, title, description, upvotes }: Props) {
  return (
    <Link href={"/suggestions/" + id} className="w-full hover:bg-gray-50">
      <div className="container flex max-w-3xl justify-between space-x-4 px-4 py-8">
        <div className="space-y-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp-3 max-w-md">
            {description}
          </CardDescription>
        </div>
        <div>
          <Button variant="secondary">Vote ({upvotes})</Button>
        </div>
      </div>
    </Link>
  );
}

export default FeatureRequestCard;
