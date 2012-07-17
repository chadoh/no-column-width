var tds = document.getElementsByTagName('td'),
    ths = document.getElementsByTagName('th');

for (i = 0; i < tds.length; i++) {
  tds[i].removeAttribute('width');
}
for (i = 0; i < ths.length; i++) {
  ths[i].removeAttribute('width');
}
