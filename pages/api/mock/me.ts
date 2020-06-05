import { NextApiRequest, NextApiResponse } from "next";

const me = (_req: NextApiRequest, res: NextApiResponse): void => {
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
