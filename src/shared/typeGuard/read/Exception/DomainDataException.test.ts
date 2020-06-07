import { DomainDataException } from "./DomainDataException";

const createData = () => ({
  message: "dummy",
  error: { a: "dummy", b: "dummy" },
});

describe("DomainDataException.ofで生成されたデータが、instanceofで正常に判断されるか？", () => {
  it("DomainDataException", () => {
    const exception = DomainDataException.of(createData());

    expect(exception instanceof DomainDataException).toEqual(true);
  });
});

describe("元データから変更がないか確認", () => {
  it("DomainData", () => {
    const exception = DomainDataException.of(createData());

    expect(exception.errObj).toEqual(createData());
  });
});
