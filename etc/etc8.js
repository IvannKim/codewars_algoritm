/* 지속시간 포맷터

//함수는 음이 아닌 정수를 허용해야한다.
//0 이면 "now" 반환
년, 일, 시간, 분, 초
1년은 365일(31536000초)
1일 864000초
공백이 중요
, 와 and 로 구분
같은 단위가 반복 프린트 X
단위의 해당하는 값이 0이면 프린트 하지 않기
*/
const YEARS_SECONDS = 31536000;
const DAYS_SECONDS = 864000;
const HOURS_SECONDS = 3600;
const MINUTE_SECONDS = 60;

const formatDuration = num => {
  if (num < 0) {
    return '';
  } else if (num === 0) {
    return 'now';
  }

  const year = Math.floor(num / YEARS_SECONDS);
  const day = Math.floor((num - year * YEARS_SECONDS) / DAYS_SECONDS);
  const hour = Math.floor(
    (num - year * YEARS_SECONDS - day * DAYS_SECONDS) / HOURS_SECONDS
  );
  const minute = Math.floor(
    (num - year * YEARS_SECONDS - day * DAYS_SECONDS - hour * HOURS_SECONDS) /
      MINUTE_SECONDS
  );
  const second =
    num -
    year * YEARS_SECONDS -
    day * DAYS_SECONDS -
    hour * HOURS_SECONDS -
    minute * MINUTE_SECONDS;

    const temp = [year, day, hour, minute, second].map((element, index) => {
      if (index === 0) {
        let yearString = `${year} year`;

        if (element === 1) {
          return yearString;
        } else if(element > 1) {
          return `${yearString}s`
        }
      } elsde if (index === 1) {
        let dayString = `${day} day`;
        if ()

        if (element === 1) {
          return dayString;
        } else if (element > 1) {
          return `${dayString}s`;
        }
      }
    });

    console.log(temp);

  const arr = [];

  if (year === 1) {
    arr.push(`${year} year`);
  } else if (year > 1) {
    arr.push(`${year} years`);
  }

  if (day === 1) {
    if (arr.length < 0) {
      arr.push(`${day} day`);
    }
    arr.push(` ${day} day`);
  } else if (day > 1) {
    if (arr.length < 0) {
      arr.push(`${day} days`);
    }
    arr.push(` ${day} days`);
  }






  if (hour === 1) {
    if (arr.length < 0) {
      arr.push(`${hour} hour`);
    }
    arr.push(` ${hour} hour`);
  } else if (hour > 1) {
    arr.push();
  }

  if (minute === 1) {
    if (arr.length < 0) {
      arr.push(`${minute} minute`);
    }
    arr.push(` ${minute} minute`);
  } else if (minute > 1) {
    arr.push();
  }
  
  if (second === 1) {
    if (arr.length < 0) {
      arr.push(`${second} second`);
    }
    arr.push(` ${second} second`);
  } else if (second > 1) {
    arr.push();
  }

  const resultArray = arr.map((element, index) => {
    if (arr.length === 1 || index === arr.length - 2) {
      return `${element}`;
    } else if (index === arr.length - 1) {
      return ` and${element}`;
    }
    return `${element},`;
  });

  return resultArray.join('');
};

// returns "1 minute and 2 seconds"
console.log(formatDuration(31536000 + 31536000 + 864000 + 3600 + 60 + 5));
// console.log(formatDuration(60));
// returns "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(3662));
