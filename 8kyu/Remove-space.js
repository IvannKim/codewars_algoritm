const x = '8 j 8   mBliB8g  imjB8B8  jl  B';

function noSpace(x) {
    return x.split('').filter(e => e !== ' ').join('')
  }

  console.log(noSpace(x));