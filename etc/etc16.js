/*6번
The function startStopwatch takes two arguments:
a callback function (callback) and a time interval (interval).
It should call the callback every interval milliseconds.
The callback receives the counter parameter and should return true
if the stopwatch continues operating or false if the stopwatch should stop operating.
Interval milliseconds after the stopwatch is started,
the callback should be called for the rst time.
The rst time the callback is called, the counter should equal 1, the second time it should equal 2, and so on.
The stopwatch should allow other code to be executed during the wait time,
and multiple stopwatches should be allowed to coexist.*/
// function startStopwatch(callback, interval) {
//   let i = 0;
//   while (i < 5) {
//     (function(x) {
//       setTimeout(() => {
//         callback(x);
//       }, interval * x);
//     })(i + 1);
//     i++;
//   }
// }
function startStopwatch(callback, interval) {
  let i = 1;
  let timer;

  (function(x) {
    timer = setInterval(() => {
      if (callback(x)) {
        callback(x);
      } else {
        clearInterval(timer);
      }
      i++;
    }, interval);
  })(i);
}

function callback(counter) {
  console.log(counter);
  return counter < 5;
}
startStopwatch(callback, 50); // Expected: 1, 2, 3, 4, 5 with 50ms interval.
