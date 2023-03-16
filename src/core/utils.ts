import fetch, { Response } from "node-fetch";

export async function sendServiceRequest(
  url: string,
  method: string,
  reqBody?: any
): Promise<Response> {
  const body = JSON.stringify(reqBody)
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body
  });
  
  return response;
}
