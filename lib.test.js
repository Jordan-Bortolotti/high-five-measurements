const { edgeDistance, getFinalMeasurements } = require('./lib');

describe('edgeDistance', () => {
  it('should return the distance between 2 points', async () => {
    expect(edgeDistance([0, 0], [0, 0])).toEqual('0.00');
    expect(edgeDistance([0, 0], [0, 1])).toEqual('1.00');
    expect(edgeDistance([0, 0], [1, 0])).toEqual('1.00');
    expect(edgeDistance([0, 0], [10, 10])).toEqual('14.14');
  });
});

describe('getFinalMeasurements', () => {
  it('should return measurements', async () => {
    const [p1, p2, p3, p4, p5, p6, p7] = [
      [10, 10],
      [10, 30],
      [25, 20],
      [100, 10],
      [100, 15],
      [100, 20],
      [100, 25],
    ];
    const expectedResult = {
      waist: '20.00',
      leg: '90.00',
      inseam: '75.17',
      ankle: '5.00',
    };
    expect(getFinalMeasurements([p1, p2, p3, p4, p5, p6, p7])).toEqual(expectedResult);
    expect(getFinalMeasurements([p2, p1, p3, p4, p5, p6, p7])).toEqual(expectedResult);
    expect(getFinalMeasurements([p7, p6, p5, p4, p3, p2, p1])).toEqual(expectedResult);
  });
});
