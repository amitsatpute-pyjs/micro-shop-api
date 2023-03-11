import fetch, { Response } from "node-fetch";

export async function sendServiceRequest(
  url: string,
  method: string,
  body?: any
): Promise<Response> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return response;
}
