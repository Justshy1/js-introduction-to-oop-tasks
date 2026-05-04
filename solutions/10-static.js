export default class Time {
  // BEGIN
  static fromString(time) {
    const [hours, minutes] = time.split(':');
    return new Time(Number(hours), Number(minutes));
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
