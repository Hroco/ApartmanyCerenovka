// pages/api/facebookTesting.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("hello from server");
  console.log("FACEBOOK_USER_TOKEN", process.env.FACEBOOK_USER_TOKEN);
  console.log("FACEBOOK_APP_ID", process.env.FACEBOOK_APP_ID);
  console.log("FACEBOOK_APP_SECRET", process.env.FACEBOOK_APP_SECRET);
  res.status(200);
}
