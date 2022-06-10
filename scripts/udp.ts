const udp = async (method: string = "send", msg: string) => {
  const apiCall = await fetch(`/api/udp${method}?msg=${encodeURI(msg)}`);
  await apiCall.json();
};

export { udp };
