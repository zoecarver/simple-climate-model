import math from 'mathjs';

let out = [],
    labels = [];

const oa = 0.0000000567,
A = 0.3,
S = 1370,
atmaspher = (carbon) => {
  console.log(carbon);
  let top = math.eval('(1 - ' + A + ') * ' + S + '');
  let bottom = math.eval('4 * ' + oa + ' * (1 - ' + carbon.toString() + '/2)');
  let final = math.eval('(' + top + '/' + bottom + ')^(.25)');
  console.log(final);
  return final;
},
basic = (f) => {
  let simplified = f / oa;
  let final = math.nthRoot(simplified, 4)

  return final;
},
kalvinToFarinhight = (i) => {
  return 9/5 * (i - 273) + 32;
},
apply = (mod) => {
  for (var i = 0; i < 1; i+=0.01) {
    switch (mod) {
      case 'NONE':
        out.push(atmaspher(i)); //change this to i to see the first graph, or 1370 to see the second, and atmaspher(i) for the third
        break;
      case 'CEL':
        out.push(atmaspher(i) - 273); //change this to i to see the first graph, or 1370 to see the second, and atmaspher(i) for the third
        break;
      case 'FAR':
        out.push(kalvinToFarinhight(atmaspher(i)));
        break;
      default:

    }
    labels.push(math.round(i, 2));
  }

  return out;
};

export default {
//  k: apply('NONE'),
  c: apply('CEL'),
//  f: apply('FAR'),
  labels: labels
};