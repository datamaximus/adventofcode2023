export async function part2() {
    const input: string = await Deno.readTextFile("./input.txt");
  
    const lines: string[] = input.split("\n");
  
    let total = 0;
  
    for (let i = 0; i < lines.length; i++) {
      const Regex = /one|two|three|four|five|six|seven|eight|nine/;
      const ReverseRegex = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/;
  
      let reverseLine = lines[i].split("").reverse().join("");
  
      const Matches: { [key: string]: string } = {
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
        eno: "1",
        owt: "2",
        eerht: "3",
        ruof: "4",
        evif: "5",
        xis: "6",
        neves: "7",
        thgie: "8",
        enin: "9",
      };
  
      lines[i] = lines[i].replace(Regex, function (match) {
        return Matches[match];
      });
      reverseLine = reverseLine.replace(ReverseRegex, function (match) {
        return Matches[match];
      });
  
      let first = "";
      for (let j = 0; j < lines[i].length; j++) {
        if (/\d/.test(lines[i][j])) {
          first === "" ? (first = lines[i][j]) : first;
        }
      }
  
      let last = "";
      for (let j = 0; j < reverseLine.length; j++) {
        if (/\d/.test(reverseLine[j])) {
          last === "" ? (last = reverseLine[j]) : last;
        }
      }
  
      const subtotal: number = parseInt(first + last);
      total += subtotal;
    }
  }

  part2();
  