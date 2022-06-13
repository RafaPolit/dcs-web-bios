const rawStringToUint8Array = (str: string) => {
  var idx,
    len = str.length,
    arr = new Array(len);
  for (idx = 0; idx < len; ++idx) {
    arr[idx] = str.charCodeAt(idx) & 0xff;
  }
  return new Uint8Array(arr);
};

export { rawStringToUint8Array };
