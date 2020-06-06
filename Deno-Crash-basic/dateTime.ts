import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-02-02"))); // 33
console.log(currentDayOfYear()); // 158 which is (2020-06-06)
