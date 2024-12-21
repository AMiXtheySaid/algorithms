const { titleCaseTransform2 } = require('../functions/titleCaseTransform');

test('Title Case Transform #2 "atomic habits"', () => {
    expect(titleCaseTransform2("atomic habits")).toBe("Atomic Habits");
})

test('Title Case Transofrm #2 "Welcome, Captain"', () => {
    expect(titleCaseTransform2("Welcome, Captain")).toBe("Welcome, Captain");
})

test('Title Case Transofrm #2 "     welcome, captain"', () => {
    expect(titleCaseTransform2("     welcome, captain")).toBe("Welcome, Captain");
})
