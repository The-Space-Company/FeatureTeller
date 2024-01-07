"use client";
import { ChevronLeft, PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@radix-ui/react-separator";
import { api } from "@/trpc/react";

type Props = {};

const SuggestionSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

function Suggest({}: Props) {
  const router = useRouter();
  const form = useForm<z.infer<typeof SuggestionSchema>>({
    resolver: zodResolver(SuggestionSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const { mutate: createSuggestion } = api.suggestion.create.useMutation({
    onSuccess(res) {
      toast.success("Suggestion submitted", {
        description: "Thanks for submitting your suggestion!",
      });
      router.push(`/suggestion/${res.id}`);
    },
    onError(err) {
      toast.error("Error submitting your suggestion", {
        description: err.message,
      });
    },
  });

  function onSubmit(data: z.infer<typeof SuggestionSchema>) {
    createSuggestion(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="">
          <div className="container sticky top-0 flex max-w-3xl justify-between bg-white/80 px-4 py-3 backdrop-blur-xl">
            <div>
              <Button asChild variant={"ghost"} className="-ml-6">
                <Link href="/">
                  <ChevronLeft className="mr-2" size={14} />
                  Back to Trending
                </Link>
              </Button>
            </div>
          </div>
          <Separator />
          <div className="container flex max-w-3xl justify-between px-4 py-3">
            <h1 className="mt-3 text-2xl font-bold tracking-tight">
              Suggest a feature
            </h1>
          </div>
          <div className="container flex max-w-3xl flex-col space-y-8 px-4 py-3">
            {/* Feature details */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      placeholder="Tell us title of your idea"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder="Tell us a little bit more about your idea."
                      // className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="container flex max-w-3xl  justify-end px-4 py-3 pb-12">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default Suggest;
