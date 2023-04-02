/*
    blend two colors to create the color that is at the percentage away from the first color
    this is a 5 step process
        1: validate input
        2: convert input to 6 char hex
        3: convert hex to rgb
        4: take the percentage to create a ratio between the two colors
        5: convert blend to hex
    @param: color1      => the first color, hex (ie: #000000)
    @param: color2      => the second color, hex (ie: #ffffff)
    @param: percentage  => the distance from the first color, as a decimal between 0 and 1 (ie: 0.5)
    @returns: string    => the third color, hex, represenatation of the blend between color1 and color2 at the given percentage
*/
export function blend_colors(
  color1: string,
  color2: string,
  percentage: number
) {
  // check input
  color1 = color1 || "#000000";
  color2 = color2 || "#ffffff";
  percentage = percentage || 0.5;

  // 1: validate input, make sure we have provided a valid hex
  if (color1.length != 4 && color1.length != 7)
    console.error("colors must be provided as hexes");

  if (color2.length != 4 && color2.length != 7)
    console.error("colors must be provided as hexes");

  if (percentage > 1 || percentage < 0)
    console.error("percentage must be between 0 and 1");

  // 2: check to see if we need to convert 3 char hex to 6 char hex, else slice off hash
  //      the three character hex is just a representation of the 6 hex where each character is repeated
  //      ie: #060 => #006600 (green)
  if (color1.length == 4)
    color1 =
      color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
  else color1 = color1.substring(1);
  if (color2.length == 4)
    color2 =
      color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
  else color2 = color2.substring(1);

  // 3: we have valid input, convert colors to rgb
  const color1Arr = [
    parseInt(color1[0] + color1[1], 16),
    parseInt(color1[2] + color1[3], 16),
    parseInt(color1[4] + color1[5], 16),
  ];
  const color2Arr = [
    parseInt(color2[0] + color2[1], 16),
    parseInt(color2[2] + color2[3], 16),
    parseInt(color2[4] + color2[5], 16),
  ];
  // 4: blend
  const color3Arr = [
    (1 - percentage) * color1Arr[0] + percentage * color2Arr[0],
    (1 - percentage) * color1Arr[1] + percentage * color2Arr[1],
    (1 - percentage) * color1Arr[2] + percentage * color2Arr[2],
  ];

  // return hex
  return color3Arr;
}

/*
    convert a Number to a two character hex string
    must round, or we will end up with more digits than expected (2)
    note: can also result in single digit, which will need to be padded with a 0 to the left
    @param: num         => the number to conver to hex
    @returns: string    => the hex representation of the provided number
*/
export function int_to_hex(num: number) {
  const hex = Math.round(num).toString(16);
  if (hex.length == 1) return "0" + hex;
  return hex;
}
