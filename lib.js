const orderByX = (inputArray) => {
  inputArray.sort((e1, e2) => {
    if (e1[0] <= e2[0]) {
      return -1;
    }
    return 1;
  });
  return inputArray;
};

const orderByY = (inputArray) => {
  inputArray.sort((e1, e2) => {
    if (e1[1] <= e2[1]) {
      return -1;
    }
    return 1;
  });
  return inputArray;
};

const getP1AndP2 = (sortedByX) => orderByY([sortedByX[0], sortedByX[1]]);

const getP4AndDown = (sortedByX) => {
  const lastFourPoints = sortedByX.slice(3);
  return orderByY(lastFourPoints);
};

const getAllPoints = (sortedByX) => {
  return getP1AndP2(sortedByX).concat([sortedByX[2]], getP4AndDown(sortedByX));
};

const edgeDistance = (point1, point2) => {
  const xDelta = point1[0] - point2[0];
  const yDelta = point1[1] - point2[1];
  return Math.sqrt(xDelta * xDelta + yDelta * yDelta).toFixed(2);
};

const getWaist = ([p1, p2, p3, p4, p5, p6, p7]) => edgeDistance(p1, p2);

const getLeg = ([p1, p2, p3, p4, p5, p6, p7]) => edgeDistance(p1, p4);

const getAnkle = ([p1, p2, p3, p4, p5, p6, p7]) => edgeDistance(p4, p5);

const getInseam = ([p1, p2, p3, p4, p5, p6, p7]) => edgeDistance(p3, p5);

const getFinalMeasurements = (rawPoints) => {
  const sortedByX = orderByX(rawPoints);
  const points = getAllPoints(sortedByX);
  const waist = getWaist(points);
  const inseam = getInseam(points);
  const leg = getLeg(points);
  const ankle = getAnkle(points);
  return { waist, leg, inseam, ankle };
};

module.exports = {
  edgeDistance,
  getFinalMeasurements,
};
