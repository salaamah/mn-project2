import { make12hr } from '../Screens/MyFunctions';

test("'18:00' gives '06:00 AM'", () => {
    expect(make12hr('18:00')).toBe('06:00 PM');
});