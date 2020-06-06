import { NextApiRequest, NextApiResponse } from "next";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

const me = async (_req: NextApiRequest, res: NextApiResponse): void => {
  await sleep();
  res.setHeader("content-type", "application/json");
  res.status(200);
  res.end(
    JSON.stringify({
      id_x_: "string",
      name_x_: "foo",
      address_x_: "string",
    })
  );
};

export default me;
