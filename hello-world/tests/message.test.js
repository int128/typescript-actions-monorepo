"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../src/message");
test('message is expected one', () => {
    const message = message_1.getMessage('foo');
    expect(message).toBe('Hello World foo');
});
