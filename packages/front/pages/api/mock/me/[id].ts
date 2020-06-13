import { NextApiRequest, NextApiResponse } from "next";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

const me = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await sleep();
  res.setHeader("content-type", "application/json");
  res.status(200);
  res.end(
    JSON.stringify({
      id_x_: req.query.id.toString(),
      name_x_: "tommy",
      address_x_: `Github星 CleanArchitecture島 DDD丁目- ${new Date().getMilliseconds()}`,
    })
  );
};

export default me;
