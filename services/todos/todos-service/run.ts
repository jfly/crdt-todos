#!/usr/bin/env node
import { addLokiTransport, collectSystemMetrics } from "@saflib/node";
import { setServiceName } from "@saflib/node";
import { validateEnv } from "@saflib/env";
import envSchema from "./env.schema.combined.json" with { type: "json" };
import { startTodosService } from "./index.ts";

validateEnv(process.env, envSchema);
setServiceName("todos");
addLokiTransport();
collectSystemMetrics();

startTodosService();
