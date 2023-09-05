type GraphQLResponseWithErrors = {
  errors: unknown[];
};

export async function fetchGraphQL(query: string): Promise<unknown> {
  const apiKey =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "Production"
      ? process.env.NEXT_PUBLIC_CHONE_DELIVERY_KEY ?? ""
      : process.env.NEXT_PUBLIC_CHONE_PREVIEW_KEY ?? "";
  const endpointUrl =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "Production"
      ? process.env.NEXT_PUBLIC_CHONE_DELIVERY_ENDPOINT ?? ""
      : process.env.NEXT_PUBLIC_CHONE_PREVIEW_KEY_ENDPOINT ?? "";

  try {
    return await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-GQL-Token": apiKey,
      },
      body: JSON.stringify({ query }),
    })
      .then((response: Response) => {
        const jsonResponsePromise = response.json();
        jsonResponsePromise.then((jsonResponse: unknown) => {
          const responseWithErrors = jsonResponse as GraphQLResponseWithErrors;
          if (
            responseWithErrors.errors &&
            responseWithErrors.errors.length > 0
          ) {
            console.error(
              "An error was returned by a GraphQL query. See the associated logged object for details.",
              responseWithErrors
            );
          }
        });
        return jsonResponsePromise;
      })
      .catch((error) => {
        return console.log(error);
      });
  } catch (error) {
    return console.log(error);
  }
}
