import { Application, NextFunction, Request, Response } from 'express';
import { ValidateError } from 'tsoa';
import {
    AlreadyExistsError,
    AlreadyExistsException,
    BadRequestError,
    InternalServerError,
    InvalidCredentialsError,
    InvalidCredentialsException,
    NotFoundError,
    NotFoundException,
} from '@appTypes/response.type';
import { ERROR } from '../globals';
import { Logger } from '../logger';

export function RegisterErrorHandler(app: Application) {
    app.use(function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction): Response | void {
        if (error instanceof ValidateError) {
            Logger.warn(`Caught ValidateError for ${req.path}:`, error.fields);
            return res.status(ERROR.STATUS.BAD_REQUEST).json(new BadRequestError(error));
        }

        if (error instanceof NotFoundException) {
            Logger.warn(`Caught NotFoundException for ${req.path} ...`);
            return res.status(ERROR.STATUS.NOT_FOUND).json(new NotFoundError());
        }

        if (error instanceof AlreadyExistsException) {
            Logger.warn(`Caught AlreadyExistsException for ${req.path} ...`);
            return res.status(ERROR.STATUS.CONFLICT).json(new AlreadyExistsError());
        }

        if (error instanceof InvalidCredentialsException) {
            Logger.warn(`Caught InvalidCredentialsException for ${req.path} ...`);
            return res.status(ERROR.STATUS.CONFLICT).json(new InvalidCredentialsError());
        }

        if (error instanceof Error) {
            Logger.error(`Caught Error for ${req.path} ...`);
            Logger.error(error.stack);
            return res.status(ERROR.STATUS.INTERNAL_SERVER).json(new InternalServerError());
        }

        next();
    });
}
