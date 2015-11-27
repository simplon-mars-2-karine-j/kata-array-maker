describe("arrayMaker", function() {
  it("should reject NaN", function() {
    expect(arrayMaker("abc")).toBeNull();
  });
  it("should return empty arrays if max is 0", function() {
    expect(arrayMaker(0)).toEqual([]);
  });
  it("should return array from 1 up to max", function() {
    expect(arrayMaker(4)).toEqual([1, 2, 3, 4]);
    expect(arrayMaker(7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
