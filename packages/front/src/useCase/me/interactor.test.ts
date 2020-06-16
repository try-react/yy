import { interactor } from "./interactor";

describe("interactor", () => {
  type P = Parameters<typeof interactor>;
  const p = ([{ repository: "", reRender: () => undefined }] as unknown) as P;
  it("動作確認", () => {
    expect(interactor(...p)).toBeDefined();
  });
});
