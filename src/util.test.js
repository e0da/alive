import { interpolate, sum } from "./util";

describe("interpolate", () => {
  it("interpolates arguments into a template string", () => {
    const expected = "FOO:BAR:#{unset}";
    const template = "#{foo}:#{bar}:#{unset}";
    const args = { foo: "FOO", bar: "BAR", extra: "IGNORE ME!" };
    const actual = interpolate(template, args);
    expect(actual).toEqual(expected);
  });
});

describe("add", () => {
  it("adds 2 numbers", () => {
    const nums = [1, 1, 2, 3, 5, 8, 13];
    expect(sum(nums)).toEqual(33);
  });
});
