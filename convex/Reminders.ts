import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
export const seedMockData = mutation({
    args: {},
    handler: async (ctx) => {
        const mockReminders = [
            {
                reminderName: 'Work',
                triggerType: 'leaving' as const,
                triggerDate: '2024-11-11',
                triggerLocation: 'Dorm',
                triggerTime: '9:30',
                status: 'notStarted' as const,
                isDone: false,
                createdAt: '2024-11-11T09:30:00.000Z', // ← Add this
            },
            {
                reminderName: 'Gym',
                triggerType: 'arriving' as const,
                triggerDate: '2024-11-11',
                triggerLocation: 'Gym',
                triggerTime: '8:00',
                status: 'notStarted' as const,
                isDone: false,
                createdAt: '2024-11-11T08:00:00.000Z', // ← Add this
            },
            {
                reminderName: 'Class',
                triggerType: 'leaving' as const,
                triggerDate: '2024-11-13',
                triggerLocation: 'Home',
                triggerTime: '8:15',
                status: 'notStarted' as const,
                isDone: false,
                createdAt: '2024-11-13T08:15:00.000Z', // ← Add this
            },
            {
                reminderName: 'Work',
                triggerType: 'leaving' as const,
                triggerDate: '2024-11-14',
                triggerLocation: 'Dorm',
                triggerTime: '9:30',
                status: 'notStarted' as const,
                isDone: false,
                createdAt: '2024-11-14T09:30:00.000Z', // ← Add this
            },
            {
                reminderName: 'Dinner',
                triggerType: 'arriving' as const,
                triggerDate: '2024-11-14',
                triggerLocation: 'Mikes',
                triggerTime: '19:30',
                status: 'notStarted' as const,
                isDone: false,
                createdAt: '2024-11-14T19:30:00.000Z', // ← Add this
            },
            {
                reminderName: 'Grocery Shopping',
                triggerType: 'arriving' as const,
                triggerDate: '2024-11-15',
                triggerLocation: 'Mall',
                triggerTime: '10:00',
                status: 'notStarted' as const,
                isDone: false,
                createdAt: '2024-11-15T10:00:00.000Z', // ← Add this
            },
        ];

        const ids = [];
        for (const reminder of mockReminders) {
            const id = await ctx.db.insert("Reminder", reminder);
            ids.push(id);
        }
        
        return ids;
    }
});
export const getAllReminders = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("Reminder").collect();
    }
});

export const getReminderById = query({
    args: {
        reminderId: v.id('Reminder')
    },
    handler: async (ctx , args) =>  {
        return await ctx.db.get(args.reminderId);
    }
});

export const createReminder = mutation({
    args: {
        reminderName : v.string(),
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
          isDone: v.boolean(),   
    },

    handler: async(ctx, args) => {
        
        const reminderId = await ctx.db.insert("Reminder", {
            reminderName: args.reminderName,
            triggerType: args.triggerType,
            triggerDate: args.triggerDate,
            triggerTime: args.triggerTime,
            triggerLocation: args.triggerLocation,
            status: args.status,
            isDone: args.isDone,
            createdAt: new Date().toISOString(),
        });
        return reminderId;
    }
});


export const updateReminder = mutation({
    args: {
        reminderId : v.id('Reminder'),
        reminderName: v.optional(v.string()),
        triggerType: v.optional(v.union(
            v.literal("leaving"),
            v.literal("arriving"),
            v.literal("time"),
            v.literal("whileLocation")
        )),
        triggerDate: v.optional(v.string()),
        triggerTime: v.optional(v.string()),
        triggerLocation: v.optional(v.string()),
        status: v.optional(v.union(
            v.literal("notStarted"),
            v.literal("started"),
            v.literal("finished"),
        )),
        isDone: v.optional(v.boolean()), 
    },

    handler: async(ctx, args) => {
        
        const {reminderId, ...updates } =  args;
        
        await ctx.db.patch(reminderId, updates);

        return reminderId;
    }
});

export const deleteReminder = mutation({
    args: {
        reminderId:  v.id('Reminder'),
    },
    handler : async (ctx, args) => {
        await ctx.db.delete(args.reminderId);
    }
});

// Migration function to fix existing reminders missing required fields
export const migrateReminders = mutation({
    args: {},
    handler: async (ctx) => {
        const reminders = await ctx.db.query("Reminder").collect();
        const now = new Date().toISOString();
        const today = now.split('T')[0]; // Get YYYY-MM-DD format
        
        let fixedCount = 0;
        
        for (const reminder of reminders) {
            const updates: any = {};
            let needsUpdate = false;
            
            // Add createdAt if missing
            if (!reminder.createdAt) {
                updates.createdAt = now;
                needsUpdate = true;
            }
            
            // Add triggerDate if missing
            if (!reminder.triggerDate) {
                updates.triggerDate = today;
                needsUpdate = true;
            }
            
            if (needsUpdate) {
                await ctx.db.patch(reminder._id, updates);
                fixedCount++;
            }
        }
        
        return { fixedCount, totalReminders: reminders.length };
    }
});