type LogLevelType = 'debug' | 'error' | 'info' | 'log' | 'trace' | 'warn';

/* eslint-disable no-console */
export const log = (level: LogLevelType, ...args: unknown[]) => {
  console[level](...args);
}
