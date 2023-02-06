var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
function trace(buf32, pal32, width, height) {
  var scale = 2;
  var numcols = height * scale;
  var numrows = width * scale;
  var contours = [];
  var image = new Array(numrows * numcols);
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      var pixel = buf32[i * width + j];
      for (var k = 0; k < scale; k++) {
        for (var n = 0; n < scale; n++)
          image[(i * scale + n) * numrows + j * scale + k] = pal32.get(pixel);
      }
    }
  }
  for (var x = 0; x < numrows; x++) {
    for (var y = 0; y < numcols; y++) {
      var current = image[x + numrows * y];
      if (
        current >> 8 == 0 &&
        (x == 0 || current != (image[x - 1 + numrows * y] & 0xff))
      ) {
        var contour = followBorder(
          image,
          numrows,
          numcols,
          x,
          y,
          x == 0 ? x + 1 : x - 1,
          y,
          1
        );
        if (contour.length > 0) {
          var floatContour = contour.map(function (pt) {
            return { x: pt.x / scale, y: pt.y / scale };
          });
          floatContour = floatContour.filter(function (_, i) {
            return i % 2 != 0;
          });
          contours.push({ color: current, points: floatContour });
          if (x > 0) followBorder(image, numrows, numcols, x - 1, y, x, y, 2);
          if (contour.length <= 4) {
            for (var _i = 0, contour_1 = contour; _i < contour_1.length; _i++) {
              var pt = contour_1[_i];
              image[pt.x + numrows * pt.y] = 255 | (1 << 8);
            }
          }
        }
      }
    }
  }
  return contours;
}
function followBorder(image, numrows, numcols, x, y, p2X, p2Y, color) {
  var currentX = p2X;
  var currentY = p2Y;
  var startX = x;
  var startY = y;
  var pointStorage = [];
  var _current = image[x + numrows * y] & 0xff;
  do {
    if (currentX == startX && currentY > startY) {
      currentX = startX + 1;
      currentY = startY + 1;
    } else if (currentY > startY && currentX < startX) {
      currentX = startX;
      currentY = startY + 1;
    } else if (currentX < startX && currentY == startY) {
      currentX = startX - 1;
      currentY = startY + 1;
    } else if (currentX < startX && currentY < startY) {
      currentX = startX - 1;
      currentY = startY;
    } else if (currentX == startX && currentY < startY) {
      currentX = startX - 1;
      currentY = startY - 1;
    } else if (currentX > startX && currentY < startY) {
      currentX = startX;
      currentY = startY - 1;
    } else if (currentX > startX && currentY == startY) {
      currentX = startX + 1;
      currentY = startY - 1;
    } else if (currentX > startX && currentY > startY) {
      currentX = startX + 1;
      currentY = startY;
    }
    if (currentX == p2X && currentY == p2Y) {
      image[startX + numrows * startY] =
        (color << 8) | (image[startX + numrows + startY] & 0xff);
      pointStorage.push({ x: startX, y: startY });
      return pointStorage;
    }
  } while (
    currentY >= numcols ||
    currentX >= numrows ||
    currentY < 0 ||
    currentX < 0 ||
    (image[currentX + numrows * currentY] & 0xff) != _current ||
    (currentX != startX &&
      currentY != startY &&
      image[startX + numrows * currentY] ==
        image[currentX + numrows * startY] &&
      (image[startX + numrows * currentY] & 0xff) != _current &&
      image[startX + numrows * currentY] >> 8 != 0 &&
      (image[currentX + numrows * startY] & 0xff) != _current &&
      image[currentX + numrows * startY] >> 8 != 0)
  );
  var p1X = currentX;
  var p1Y = currentY;
  var p3X = startX;
  var p3Y = startY;
  p2X = p1X;
  p2Y = p1Y;
  while (true) {
    currentX = p2X;
    currentY = p2Y;
    do {
      if (currentX == p3X && currentY > p3Y) {
        currentX = p3X - 1;
        currentY = p3Y + 1;
      } else if (currentY > p3Y && currentX < p3X) {
        currentX = p3X - 1;
        currentY = p3Y;
      } else if (currentX < p3X && currentY == p3Y) {
        currentX = p3X - 1;
        currentY = p3Y - 1;
      } else if (currentX < p3X && currentY < p3Y) {
        currentX = p3X;
        currentY = p3Y - 1;
      } else if (currentX == p3X && currentY < p3Y) {
        currentX = p3X + 1;
        currentY = p3Y - 1;
      } else if (currentX > p3X && currentY < p3Y) {
        currentX = p3X + 1;
        currentY = p3Y;
      } else if (currentX > p3X && currentY == p3Y) {
        currentX = p3X + 1;
        currentY = p3Y + 1;
      } else if (currentX > p3X && currentY > p3Y) {
        currentX = p3X;
        currentY = p3Y + 1;
      }
    } while (
      currentY >= numcols ||
      currentX >= numrows ||
      currentY < 0 ||
      currentX < 0 ||
      (image[currentX + numrows * currentY] & 0xff) != _current ||
      (currentX != p3X &&
        currentY != p3Y &&
        image[p3X + numrows * currentY] == image[currentX + numrows * p3Y] &&
        (image[p3X + numrows * currentY] & 0xff) != _current &&
        image[p3X + numrows * currentY] >> 8 != 0 &&
        (image[currentX + numrows * p3Y] & 0xff) != _current &&
        image[currentX + numrows * p3Y] >> 8 != 0)
    );
    var p4X = currentX;
    var p4Y = currentY;
    image[p3X + numrows * p3Y] =
      (color << 8) | (image[p3X + numrows * p3Y] & 0xff);
    if (color != 2) {
      pointStorage.push({ x: p3X, y: p3Y });
    }
    if (p4X == startX && p4Y == startY && p3X == p1X && p3Y == p1Y) {
      return pointStorage;
    }
    p2X = p3X;
    p2Y = p3Y;
    p3X = p4X;
    p3Y = p4Y;
  }
}
function noiseReduction(src, extent) {
  extent = parseFloat(extent);
  var count = src.length;
  var range = extent * 2 + 1;
  var points = [];
  for (var i = 0; i < count; i++) {
    var start = i - extent;
    var end = i + extent;
    var sumX = 0;
    var sumY = 0;
    for (var j = start; j <= end; j++) {
      var indx = j < 0 ? count + j : j >= count ? j - count : j;
      var s = src[indx];
      sumX += s.x;
      sumY += s.y;
    }
    var avgX = sumX / range;
    var avgY = sumY / range;
    points.push({ x: avgX, y: avgY });
  }
  return points;
}
function smooth(points, extent) {
  if (extent === 0) return points;
  extent = parseFloat(extent);
  if (extent <= 0 || points.length <= extent) return points;
  return noiseReduction(points, extent);
}

function buildPath(points, threshold) {
  let path = [];
  points = points.map(function (pt) {
    return [pt.x * 10, pt.y * 10];
  });

  let lastPt = points[0];
  path.push(
    "M ".concat(Math.round(lastPt[0]), ", ").concat(Math.round(lastPt[1]))
  );
  if (points.Length < 5) {
    for (let i = 1; i < points.length; i++) {
      const pt = points[i];
      path.push(
        "l "
          .concat(math.Round(pt[0] - lastPt[0]), ",")
          .concat(math.Round(pt[1] - lastPt[1]))
      );
      lastPt = pt;
    }
  } else {
    const bzs = fitCurve(points, threshold);
    for (let i = 0; i < bzs.length; i++) {
      let bz = bzs[i];
      if (lastPt != bz[0])
        path.push(
          "l "
            .concat(math.round(bz[0][0] - lastPt[0]), ",")
            .concat(math.round(bz[0][1] - lastPt[1]))
        );
      if (bz.length === 5)
        path.push(
          "l "
            .concat(math.round(bz[3][0] - bz[0][0]), ",")
            .concat(math.round(bz[3][1] - bz[0][1]))
        );
      else
        path.push(
          "c "
            .concat(Math.round(bz[1][0] - lastPt[0]), ",")
            .concat(Math.round(bz[1][1] - lastPt[1]), " ")
            .concat(Math.round(bz[2][0] - lastPt[0]), ",")
            .concat(Math.round(bz[2][1] - lastPt[1]), " ")
            .concat(Math.round(bz[3][0] - lastPt[0]), ",")
            .concat(Math.round(bz[3][1] - lastPt[1]))
        );
      lastPt = bz[3];
    }
  }
  path.push("z");
  return path.join("");
}

function vectorize(img, options, progress) {
  var pal32 = new Uint32Array(img.pal8.buffer);
  var colorMap = new Map();
  for (let i = 0; i < pal32.length; i++) colorMap.set(pal32[i], i);
  var traces = trace(
    new Uint32Array(img.img8.buffer),
    colorMap,
    img.width,
    img.height
  );
  let len = traces.length;
  if (len > 25000)
  {
    progress('error', len);
    return 0;
  }
  let percent = 0;
  var traces_ = traces.map(function (trace, index) {
    let newPercent = Math.floor((index*5)/len);
    if (newPercent != percent) {
      percent = newPercent;
      progress('progress', percent);

    }
    return {
      color: trace.color,
      points: smooth(trace.points, options.extent),
    };
  });
  var toColor = function (num) {
    num >>>= 0;
    var b = num & 0xff,
      g = (num & 0xff00) >>> 8,
      r = (num & 0xff0000) >>> 16;
    return "rgb(" + [b, g, r].join(",") + ")";
  };
  let colors = []
  for (let i = 0; i < pal32.length; i++) {
    colors.push(toColor(pal32[i]));
  }
  let ds = []
  for (let i = 0, traces_1 = traces_; i < len; i++) {
    let d = buildPath(traces_1[i].points, options.threshold);
    ds.push({d:d, color:traces_1[i].color});
    let newPercent = Math.floor((i*95)/len) + 5;
    if (newPercent != percent) {
      percent = newPercent;
      progress('progress', percent);

    }
  }
  return { colors: colors, ds:ds, width:img.width, height:img.height };
}
