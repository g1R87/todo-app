import { createLogger, transports, format } from 'winston';

const logFormat = format.combine(
  format.timestamp(),
  format.printf(
    (info) =>
      `[${info.timestamp}] - [${info.level.toUpperCase()}] - ${info.message}`
  )
);

export const logger = createLogger({
  format: logFormat,
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'app.log',
    }),
  ],
});

/*
 * logging priority:
 *
 * error  -> highest priority
 * warn
 * info
 * verbose
 * debug
 * silly  -> lowest priority
 */
