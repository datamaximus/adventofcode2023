export async function part1() {
  const input: string = await Deno.readTextFile("./input.txt");

  const lines: string[] = input.split("\n");

  let total = 0;

  for (let i = 0; i < lines.length; i++) {
    let first = "";
    let last = "";

    for (let j = 0; j < lines[i].length; j++) {
      if (/\d/.test(lines[i][j])) {
        first === "" ? (first = lines[i][j]) : first;
        last = lines[i][j];
      }
    }
    const subtotal: number = parseInt(first + last);
    total += subtotal;
  }
}

part1();
