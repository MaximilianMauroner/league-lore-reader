// src/server/router/index.ts
import {createRouter} from "./context";
import superjson from "superjson";


import {protectedExampleRouter} from "./protected-example-router";
import {factionRouter} from "./faction";
import {championRouter} from "./champion";

export const appRouter = createRouter()
    .transformer(superjson)
    .merge("question.", protectedExampleRouter)
    .merge("champion.", championRouter)
    .merge("faction.", factionRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
