function arrayMaker(max) {
  if (isNaN(max)) {
    return null;
  } else if (max === 0) {
    return [];
  } else {
    var monTab = [];

    for (i = 1; i <= max; i++) {
      monTab.push(i);
    }
    return monTab;
  }
}
