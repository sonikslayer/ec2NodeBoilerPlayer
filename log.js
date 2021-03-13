class Log {
  constructor(debug) {
    this.debug = debug;
  }
  log(message) {
    if (this.debug) {
      console.log(message);
    }
  }
}

module.exports = Log;
