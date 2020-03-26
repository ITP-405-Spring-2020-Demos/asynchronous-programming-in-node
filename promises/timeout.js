function timeout(milliseconds) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve();
    // }, milliseconds);

    setTimeout(resolve, milliseconds);
  });
}

timeout(1000).then(() => {
  console.log('1 second later');
});