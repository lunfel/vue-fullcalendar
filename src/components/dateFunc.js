import moment from 'moment';

let dateFunc = {
  /**
   * @param date
   * @param firstDay
   *
   * return {moment}
   */
  getMonthViewStartDate (date, firstDay) {
    firstDay = parseInt(firstDay);
    let start = moment(date);
    let startOfMonth = moment(start.startOf('month'));

    start.subtract(startOfMonth.day(), 'days');

    if (startOfMonth.day() < firstDay) {
      start.subtract(7, 'days');
    }

    start.add(firstDay, 'days');

    return start;
  },

  /**
   * @param date
   *
   * return {moment}
   */
  getMonthViewEndDate (date) {
    return this.getMonthViewStartDate().add(6, 'weeks');
  }
};

module.exports = dateFunc;
