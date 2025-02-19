function convertToHexId(dateStr, fixedLength = 10) {
  let num = parseInt(dateStr, 10);
  let hex = num.toString(16);
  hex = hex.padStart(fixedLength, '0');
  return hex;
}
module.exports = convertToHexId;