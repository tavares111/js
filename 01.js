/*Display the current day and time in the following format Today is Tuesday and Current time is 10 PM : 30 : 38
 */

function getFormatedDate() {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    let hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formatedMinutes = ("0" + minutes).slice(-2);
    const formatedSeconds = ("0" + seconds).slice(-2);
    const ampm =
      hour > 12 || (hour === 12 && (minutes > 0 || seconds > 0)) ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = ("0" + hour).slice(-2);
    return `Today is ${
      weekday[date.getDay()]
    } and Current time is ${hour} ${ampm} : ${formatedMinutes} : ${formatedSeconds}`;
  }
  
 console.log(getFormatedDate());
  