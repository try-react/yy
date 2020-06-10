export type Path = typeof pathCollection[number]["path"];
type Name = typeof pathCollection[number]["name"];
type FindPath = (p: Name) => Path;

const pathCollection = [
  {
    name: "me",
    path: "/me",
  },
] as const;

const findPath: FindPath = (name) =>
  pathCollection.filter((o) => o.name === name)[0].path;

export const util = {
  findPath,
};
