import { heyDad } from "./index";

test("should say hey to dad", () => {
  expect(heyDad()).toBe("Hey, dad!");
});

test("should not say hey to mom", () => {
  expect(heyDad()).not.toBe("Hey, mom!");
});
