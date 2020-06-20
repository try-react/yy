import type { Handler } from "aws-lambda";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

const addresses = [
  "ABC県 XYZ市",
  "Github県 TypeScript市",
  "React県 JavaScript市",
  "FizzBuzz県 Fizz市",
];

const statusCodes = [200, 400];

export const handler: Handler = async () => {
  await sleep();
  return {
    statusCode: statusCodes[Math.floor(Math.random() * statusCodes.length)],
    body: JSON.stringify({
      id_x_: 100,
      name_x_: "Tommy",
      address_x_: addresses[Math.floor(Math.random() * addresses.length)],
    }),
  };
};
