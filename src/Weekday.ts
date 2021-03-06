

/**
 * The days in a week.
 */
export class Weekday
{

  public static SUNDAY: number = 0;
  public static MONDAY: number = 1;
  public static TUESDAY: number = 2;
  public static WEDNESDAY: number = 3;
  public static THURSDAY: number = 4;
  public static FRIDAY: number = 5;
  public static SATURDAY: number = 6;

  /**
   * The full list of days in a week.
   */
  public static LIST: number[] = [
    Weekday.SUNDAY,
    Weekday.MONDAY,
    Weekday.TUESDAY,
    Weekday.WEDNESDAY,
    Weekday.THURSDAY,
    Weekday.FRIDAY,
    Weekday.SATURDAY
  ];

  /**
   * The list of days starting with Monday and ending on Friday.
   */
  public static WEEK: number[] = [
    Weekday.MONDAY,
    Weekday.TUESDAY,
    Weekday.WEDNESDAY,
    Weekday.THURSDAY,
    Weekday.FRIDAY
  ];

  /**
   * The days on the weekend, starting with Saturday and ending with Sunday.
   */
  public static ENDS: number[] = [
    Weekday.SATURDAY,
    Weekday.SUNDAY
  ];

}
