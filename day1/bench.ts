import {part1} from "../day1/day1_1.ts";
import {part2} from "../day1/day1_2.ts";

Deno.bench("part1", (a) => {
  a.start();
  part1();
  a.end();
});

Deno.bench("part2", (b) => {
  b.start();
  part2();
  b.end();
});