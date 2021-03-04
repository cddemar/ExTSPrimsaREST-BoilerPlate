// import compression from 'compression';
// import cors from 'cors';
// import helmet from 'helmet';

import { Application } from 'express';
import bodyParser from 'body-parser';

// import { AuthService } from '@services/auth';
// import { UtilityService } from '@services/helper/utility';

// import { logger } from '@config/logger';
// import { env, Clients } from '@config/globals';

/**
 * Init Express middleware
 *
 * @param {Router} router
 * @returns {void}
 */
export function RegisterMiddlewares(app: Application) {
    // router.use(helmet());

    // if (env.NODE_ENV === 'development') {
    // 	router.use(cors({ origin: '*' }));
    // } else {
    // 	router.use(cors({ origin: ['http://localhost:4200'] }));
    // }

    // router.use((req: Request, res: Response, next: NextFunction) => {
    // 	req.client = Clients[req.get('Client') as keyof typeof Clients];

    // 	if (env.NODE_ENV === 'production' && req.client === undefined) {
    // 		return res.status(401).send('Unknown client');
    // 	}

    // 	return next();
    // });

    // router.use(compression());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // // Log incoming requests
    // router.use((req: Request, res: Response, next: NextFunction) => {
    // 	if (env.NODE_ENV !== 'test') {
    // 		const ip: string | string[] | undefined =
    // 			req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // 		logger.log({
    // 			isRequest: true,
    // 			level: 'info',
    // 			message: `${req.method} ${req.url} ${ip}`,
    // 		});
    // 	}

    // 	return next();
    // });

    // // Setup passport strategies
    // new AuthService().initStrategies();
}

/**
 * Init Express error handler
 *
 * @param {Router} router
 * @returns {void}
 */
// export function registerErrorHandler(router: Router): Response | void {
// 	router.use(
// 		(err: Error, req: Request, res: Response, next: NextFunction) => {
// 			UtilityService.handleError(err);
// 			return res.status(500).json({
// 				error: err.message || err,
// 				status: 500,
// 			});
// 		}
// 	);
// }
