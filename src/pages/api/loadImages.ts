/* eslint-disable @typescript-eslint/require-await */
// pages/api/loadImages.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const loadImagesFromFolder = (folderPath: string): string[] => {
  const absoluteFolderPath = path.join(process.cwd(), folderPath);
  const imageFilenames = fs.readdirSync(absoluteFolderPath);
  return imageFilenames;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { folderPath } = req.query;

  if (!folderPath || typeof folderPath !== "string") {
    return res.status(400).json({ error: "Invalid folderPath parameter" });
  }

  const imageFilenames = loadImagesFromFolder(folderPath);
  console.log("loadImages.ts", imageFilenames);
  res.status(200).json(imageFilenames);
}
