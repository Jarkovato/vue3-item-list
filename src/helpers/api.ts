
const fetchElements = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

export { fetchElements };
