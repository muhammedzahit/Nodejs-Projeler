import { createServer } from "@graphql-yoga/node";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { loadFiles } from "@graphql-tools/load-files";
import db from "./data";
import database from "./database";
const pubSub = require("./redisSubscription");
import mongoose from 'mongoose'

import Comment from './schemas/Comment'
import Post from './schemas/Post'
import User from './schemas/User'

async function main() {
	const types = await loadFiles("src/types/**/*.graphql");
	const resolvers = await loadFiles("src/resolvers/**/*.{js,ts}");

	database();
	console.log(mongoose.connection.readyState);

	const yogaApp = createServer({
		context: { pubSub, db, 
      database : {
        Comment,Post,User
      }
    },
		schema: {
			typeDefs: types,
			resolvers: resolvers,
		},
		graphiql: {
			// Use WebSockets in GraphiQL
			subscriptionsProtocol: "WS",
		},
	});

	// Get NodeJS Server from Yoga
	const httpServer = await yogaApp.start();
	// Create WebSocket server instance from our Node server

	console.log(yogaApp.getAddressInfo().endpoint);

	const wsServer = new WebSocketServer({
		server: httpServer,
		path: yogaApp.getAddressInfo().endpoint,
	});

	// Integrate Yoga's Envelop instance and NodeJS server with graphql-ws
	useServer(
		{
			execute: (args) => args.rootValue.execute(args),
			subscribe: (args) => args.rootValue.subscribe(args),
			onSubscribe: async (ctx, msg) => {
				const { schema, execute, subscribe, contextFactory, parse, validate } =
					yogaApp.getEnveloped(ctx);

				const args = {
					schema,
					operationName: msg.payload.operationName,
					document: parse(msg.payload.query),
					variableValues: msg.payload.variables,
					contextValue: await contextFactory(),
					rootValue: {
						execute,
						subscribe,
					},
				};

				const errors = validate(args.schema, args.document);
				if (errors.length) return errors;
				return args;
			},
		},
		wsServer
	);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
