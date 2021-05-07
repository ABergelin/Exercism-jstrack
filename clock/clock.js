export class Clock {
  constructor(hours, minutes=0) {
    this.hours=hours;
    this.minutes=minutes;
  }

  twentyFourHours(hours) {
    if (hours > 23 ){
      return this.twentyFourHours(hours-24);
    } else if (hours < 0){
      return this.twentyFourHours(hours+24)
    } else {
      return hours;
    }
  }

  sixtyMinutes(hr, mins) {
    if (mins > 59){
      return this.sixtyMinutes(hr +1, mins-60);
    } if (mins < 0){
      return this.sixtyMinutes(hr -1, mins+60);
    } else {
      return {hr, mins};
    }
  }

  toString() {
    let tempTime = this.sixtyMinutes(0, this.minutes);
    let hour = this.twentyFourHours(Number(this.hours) + Number(tempTime.hr));

    // Formatting string
    hour = (hour < 10) ? '0'+`${hour}` : hour;
    let minutes = (tempTime.mins < 10) ? '0'+`${tempTime.mins}` : tempTime.mins;

    return `${hour}:${minutes}`;
  }

  plus(num = 0) {
    let tempTime = this.sixtyMinutes(0, num);
    this.hours = Number(this.hours)+Number(tempTime.hr);
    this.minutes = Number(this.minutes)+Number(tempTime.mins);

    return this;
  }

  minus(num = 0) {
    let tempTime = this.sixtyMinutes(0, -Math.abs(num));
    this.hours = Number(this.hours)+Number(tempTime.hr);
    this.minutes = Number(this.minutes)+Number(tempTime.mins);

    return this;
  }

  equals(clock) {
    return (this.toString() === clock.toString());
  }
}
