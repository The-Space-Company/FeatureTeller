import { db } from "@/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { desc, eq } from "drizzle-orm";
import { suggestions } from "@/server/db/schema";
import { z } from "zod";

export const suggestionRouter = createTRPCRouter({
  all: publicProcedure.query(() => {
    return db.query.suggestions.findMany({
      limit: 30,
      orderBy: [desc(suggestions.createdAt)],
    });
  }),

  getById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async (ctx) => {
      return await db.query.suggestions.findFirst({
        where: eq(suggestions.id, ctx.input.id),
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(2, {
          message: "Title must be at least 2 characters.",
        }),
        description: z.string().min(10, {
          message: "Description must be at least 10 characters.",
        }),
      }),
    )
    .mutation(async ({ input }) => {
      const res = await db.insert(suggestions).values({
        title: input.title,
        description: input.description,
        createdById: "1",
      });
      return {
        id: res.insertId,
      };
    }),
});
