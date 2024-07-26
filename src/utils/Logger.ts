import { createLogger as createWinstonLogger, format, transports } from 'winston'
import { format as dateFormat } from 'date-fns'

export function createLogger() {
    return createWinstonLogger({
        level: 'info',
        format: format.combine(
            format.colorize(),
            format.timestamp({ format: () => dateFormat(new Date(), 'dd/MM HH:mm:ss') }),
            format.printf(({ timestamp, level, message }) => {
                return `[${timestamp}] ${level}: ${message}`
            }),
        ),
        transports: [new transports.Console()],
    })
}
