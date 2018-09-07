// @flow strict
import { reduce, toPairs } from "ramda";

const interpolate = (str: string, args: {}): string => {
  const pairs = toPairs(args);
  const replace = (s: string, [find, repl]: [string, string]): string =>
    s.replace(`#{${find}}`, repl);
  return reduce(replace, str, pairs);
};

const sum = (nums: Array<number>): number =>
  reduce((acc, n) => acc + n, 0, nums);

export { interpolate, sum };
