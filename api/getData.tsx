export async function getApiData(param: string, revalidate: number = 300) {
  try {
    const response = await fetch(process.env.BASE_URL + param, {
      headers: {
        Authorization: "Bearer " + process.env.PUBLIC_TOKEN,
        Accept: "application/json",
      },
      next: {
        revalidate: revalidate,
      },
    });
    const responseData = response.json();
    return responseData;
  } catch (e: any) {
    throw new Error(e);
  }
}
