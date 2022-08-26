import winston from 'winston';
import morgan, { StreamOptions } from 'morgan';
const { combine, timestamp, prettyPrint, colorize, cli } = winston.format;
import settings from './config';
import { TypedRequest } from '../Types';

morgan.token('userId', (req: TypedRequest) => JSON.stringify(req.userId));

const format = combine(timestamp(), prettyPrint());
const options = {
  fileUnhandled: {
    format,
    level: 'error',
    filename: `${settings.LOGS_DIR}/exceptions.log`,
    handleExceptions: true,
    json: true,
    maxsize: 1024 * 5000,
    maxFiles: 5,
    colorize: false
  },
  fileError: {
    format,
    level: 'error',
    filename: `${settings.LOGS_DIR}/errors.log`,
    json: true,
    maxsize: 1024 * 5000,
    maxFiles: 5,
    colorize: false
  },
  fileInfo: {
    format,
    level: 'info',
    filename: `${settings.LOGS_DIR}/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 1024 * 5000,
    maxFiles: 5,
    colorize: false
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.fileError),
    new winston.transports.File(options.fileInfo)
  ],
  exceptionHandlers: [new winston.transports.File(options.fileUnhandled)]
});

if (process.env.NODE_ENV === 'development') {
  logger.add(
    new winston.transports.Console({
      format: combine(colorize(), cli()),
      handleExceptions: true
    })
  );
}

export const stream: StreamOptions = {
  write: message => logger.info(message)
};

export default logger;
