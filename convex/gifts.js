import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addGift = mutation({
  handler: async (ctx, args) => {
    const gift = await ctx.db.insert("gifts", args);
    return gift;
  },
});

export const getGifts = query({
  handler: async (ctx) => {
    return await ctx.db.query("gifts").collect();
  },
});

export const markAsPurchased = mutation({
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { purchased: args.purchased });
  },
});
