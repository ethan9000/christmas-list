import { mutation, query } from "./_generated/server";

export const addCategory = mutation({
  handler: async (ctx, args) => {
    return await ctx.db.insert("categories", args);
  },
});

export const getCategories = query({
  handler: async (ctx) => {
    return await ctx.db.query("categories").collect();
  },
});
