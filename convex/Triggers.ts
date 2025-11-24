import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Trigger : defineTable({
//     triggerName: v.string(),
//     triggerLocation: v.string(),
//     triggerRadius: v.number(),

//   })
export const createTrigger = mutation({
    args: {
        triggerName: v.string(),
        triggerLocation: v.string(),
        triggerRadius: v.number(),

    }, handler: async(ctx, args) => {
        const triggerId = await ctx.db.insert("Trigger",{
            triggerName: args.triggerName,
            triggerLocation: args.triggerLocation,
            triggerRadius: args.triggerRadius,
        });
        return triggerId;
    },
});
export const getTriggers = query({
    args: {
    },
    handler: async(ctx, args) => {
        const triggerList = await ctx.db.query("Trigger").collect();
        return triggerList;
    }
})
export const getTrigger = query({
    args: {
        triggerId: v.id("Trigger")
    },
    handler: async(ctx, args) => {
        const triggerbyID = await ctx.db.get(args.triggerId);
    }
})