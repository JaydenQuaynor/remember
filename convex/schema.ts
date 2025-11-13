import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({

    Reminder : defineTable({
        reminderName: v.string(),
        triggerType: v.union(
          v.literal("leaving"),
          v.literal("arriving"),
          v.literal("time"),
          v.literal("whileLocation")
        ),
        triggerDate: v.string(), 
        triggerTime: v.optional(v.string()),
        triggerLocation: v.optional(v.string()),
        status: v.union(
            v.literal("notStarted"),
            v.literal("started"),
            v.literal("finished"),
        ),
        createdAt: v.string(),
        isDone: v.boolean(),   
      }
    )
})