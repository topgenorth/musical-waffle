import {IResolvers} from "apollo-server-express";
import cuid = require("cuid");
import {GqlContext} from "./GqlContext";
import {simplifiedRangeLogs} from "./db";

interface SimplifiedRangeLog {
    id: string;
    date: string;
    firearm: string;
    rounds: number;
    range?: string;
    ammoDescription?: string;
    notes?: string;
}

const NEW_RANGE_LOG = "NEW RANGE LOG";

const resolvers: IResolvers = {
    Query: {
        getSimplifiedRangeLog: async (
            parent: any,
            args: {
                id: string;
            },
            ctx: GqlContext,
            info: any
        ): Promise<SimplifiedRangeLog> => {
            return {
                id: cuid(),
                date: "2017-04-21",
                firearm: "Some firearm",
                rounds: 100,
                range: "Some random range",
                ammoDescription: "A bunch of bullets",
                notes: "Some clever observations"
            };
        },
        getTodos: async (
            parent: any,
            args: null,
            ctx: GqlContext,
            info: any
        ): Promise<Array<SimplifiedRangeLog>> => {
            return simplifiedRangeLogs;
        },
    },
    Mutation: {
        addTodo: async (
            parent: any,
            args: {
                date: string;
                firearm: string;
                rounds: number;
                range?: string;
                ammoDescription?: string;
                notes?: string
            },
            {pubsub}: GqlContext,
            info: any
        ): Promise<SimplifiedRangeLog> => {
            const newTodo = {
                id: cuid(),
                date: args.date,
                firearm: args.firearm,
                rounds: args.rounds,
                range: args.range,
                ammoDescription: args.ammoDescription,
                notes: args.notes,
            };
            console.log("newRangeLog", newTodo);
            simplifiedRangeLogs.push(newTodo);
            pubsub.publish(NEW_RANGE_LOG, {newTodo});
            return simplifiedRangeLogs[simplifiedRangeLogs.length - 1];
        },
    },
    Subscription: {
        newTodo: {
            subscribe: (parent, args: null, {pubsub}: GqlContext) =>
                pubsub.asyncIterator(NEW_RANGE_LOG),
        },
    },
};

export default resolvers;
