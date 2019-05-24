import {Logger, LoggerOptions, transports, createLogger} from 'winston';

export const logger: Logger= createLogger(<LoggerOptions> {
    exitOnError: false,
    transports: [
        new transports.Console()
    ]
});