import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

interface HelloResponse {
  statusCode: number;
  body: string;
}
export const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  console.log(`hello invoked`);
  const params = event.queryStringParameters;
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello world ${Math.floor(Math.random() * 10)}`,
      requestId: context.awsRequestId || "dummy",
      params,
    }),
  };

  callback(undefined, response);
};
