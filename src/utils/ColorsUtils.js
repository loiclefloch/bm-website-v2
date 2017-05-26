const ColorsUtils = {

  isLightColor(color) {
    let r, b, g, hsp, a = color

    if (a.match(/^rgb/)) {
      a = a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      r = a[1];
      g = a[2];
      b = a[3];
    } else {
      a = +("0x" + a.slice(1).replace( // thanks to jed : http://gist.github.com/983661
          a.length < 5 && /./g, '$&$&'
        )
      );
      r = a >> 16;
      b = a >> 8 & 255;
      g = a & 255;
    }
    hsp = Math.sqrt( // HSP equation from http://alienryderflex.com/hsp.html
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    return (hsp > 127.5)
  },

  isDarkColor(color) {
    return !this.isLightColor(color);
  }

}

export default ColorsUtils
