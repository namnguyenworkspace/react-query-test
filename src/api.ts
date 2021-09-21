export const getDataAsync = async (apiUrl: string): Promise<any> => {
  const response = await fetch(apiUrl);
  return response.json();
};
