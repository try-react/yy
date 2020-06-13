import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

type HelloResponse = {
  statusCode: number;
  body: string;
};
export const handler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  await sleep();
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      id_x_: 123,
      name_x_: "tommy",
      address_x_: `Github星 CleanArchitecture島 DDD丁目 ${new Date().getMilliseconds()}`,
    }),
  };

  callback(undefined, response);
};
