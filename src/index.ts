import 'reflect-metadata';

import 'source-map-support/register';

import 'module-alias/register';

// Set env variables from .env file
import { config } from 'dotenv';
config();

import { Application } from 'express';

import { createServer, Server as HttpServer } from 'http';
// import { createConnection, Connection } from 'typeorm';

import { env } from '@config/globals';
// import { logger } from '@config/logger';

import { Server } from './api/server';

// Startup
(async function main() {
    try {
        // logger.info('Initializing ORM connection...');
        // const connection: Connection = await createConnection();

        // Init express server
        const app: Application = new Server().app;
        const server: HttpServer = createServer(app);

        // Start express server
        server.listen(env.NODE_PORT, () => {
            console.log(`Back-end server listening on port ${env.NODE_PORT} @${env.NODE_ENV} mode`);
        });

        // server.on('listening', () => {
        // 	logger.info(
        // 		`aionic-core node server is listening on port ${env.NODE_PORT} in ${env.NODE_ENV} mode`
        // 	);
        // });

        // server.on('close', () => {
        // 	connection.close();
        // 	logger.info('aionic-core node server closed');
        // });
    } catch (err) {
        // logger.error(err.stack);
    }
})();
