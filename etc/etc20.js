/*4번
An application that you are implementing requires multiple date formats to be transformed into one common date format.
Implement the function ChangeDateFormat which accepts a list of strings, representing dates,
and returns a new list with each date in the format YYYYMMDD.
All incoming dates will be valid dates, but only those in one of the following formats:
YYYY/MM/DD, DD/MM/YYYY and MM-DD-YYYY should be included in the returned list.
For example, changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);
should return the array ["20100330", "20161215", "20121115"]. */
function changeDateFormat(dates) {
  const getDate = date => {
    if (date[0].length === 4) {
      return date.join('');
    } else {
      return date.reverse().join('');
    }
  };
  return dates.map(date => {
    if (date.indexOf('/') !== -1) {
      return getDate(date.split('/'));
    }
    if (date.indexOf('-') !== -1) {
      return getDate(date.split('-'));
    }
  });
}

var dates = changeDateFormat([
  '2010/03/30',
  '15/12/2016',
  '11-15-2012',
  '20130720'
]);
for (index = 0; index < dates.length; ++index) {
  console.log(dates[index]);
}

console.log(dates);

console.log('2010/03/30'.split('/').join(''));
