import path from "path";

const filePath = (relativePath: string): string =>
  path.join(__dirname, relativePath);

export default filePath;
