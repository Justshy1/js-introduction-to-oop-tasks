// BEGIN
export function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function() {
  return this.x;
};

Point.prototype.getY = function() {
  return this.y;
};

export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function() {
  return this.endPoint;
};

export function reverse(segment) {
  const begin = segment.getBeginPoint();
  const end = segment.getEndPoint();
  return new Segment(
    new Point(end.getX(), end.getY()),
    new Point(begin.getX(), begin.getY())
  );
}
// END
