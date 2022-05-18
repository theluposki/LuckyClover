import "dotenv/config";

describe("Testando a index.ts", () => {
  test("A aplicação deve estar listando na porta 3000", () => {
    const PORT = process.env.PORT;
    console.log(PORT);
    expect("3000").toBe(PORT);
  });
});
