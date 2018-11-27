/**
 * tslintのルールについて
 * @see https://palantir.github.io/tslint/usage/rule-flags/
 */

// tslint:disable-next-line:no-console
export const error = (message?: any, ...optionalParams: any[]) => console.error(message, optionalParams);

// tslint:disable-next-line:no-console
export const log = (message?: any, ...optionalParams: any[]) => console.log(message, optionalParams);
