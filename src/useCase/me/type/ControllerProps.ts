/**
 * `controller`が外部からもらう値
 * SPAだと、URLパラメタや`pages`からもらう値
 *
 * このtypeは、domainの型を使ったり、domainに定義したりはしません
 * 理由は、外部依存なためです
 */
export type ControllerProps = {
  id: number;
  reRender: () => void;
};
