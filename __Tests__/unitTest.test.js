import {addAmPm, hourWithZero} from "../Screens/MyFunctions";

test('05:00 gives 05:00 AM', () => {
    expect(addAmPm('05:00')).toBe('05:00 AM');
  });

test("5 gives '05'", () => {
    expect(hourWithZero(5)).toBe('05');
  });