/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { https, logger } from "firebase-functions";

import next from "next";

import nextjsDistDir from "../next.config.mjs";

const nextjsServer = next({
  dev: false,
  conf: nextjsDistDir,
});
const nextjsHandle = nextjsServer.getRequestHandler();

//Note: The `nextApp` here will be the Firebase Cloud Functions name
/*exports.nextApp = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => {
    logger.info(req.path, req.query);
    return nextjsHandle(req, res);
  });
});*/

export const nextApp = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => {
    logger.info(req.path, req.query);
    return nextjsHandle(req, res);
  });
});
