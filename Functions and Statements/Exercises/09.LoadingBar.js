function loadingBar(number) {
  let percentSign = number / 10;
  let dots = 10 - number / 10;
  let percent = '%'.repeat(percentSign);
  let dot = '.'.repeat(dots);

  if (number < 100) {
    console.log(`${number}% [${percent + dot}]`);
    console.log('Still loading...');
  } else {
    console.log('100% Complete!');
    console.log('[%%%%%%%%%%]');
  }
}

loadingBar(30);
