
import { test } from 'ava';
import { ErrorDeets as Error } from '..';

test('Use as simple error', t => {
  try {
    throw new Error(`Simple throwing fun`);
  } catch (err) {
    t.regex(err.message, /Simple throwing fun/);
    t.is(err.code, undefined);
    t.is(err.details, undefined);
  }
});


test('Use as error with details, no code', t => {
  const details = { a: 1, b: 2 };
  try {
    throw new Error(`Simple throwing fun`, { details });
  } catch (err) {
    t.regex(err.message, /Simple throwing fun/);
    t.is(err.code, undefined);
    t.deepEqual(err.details, details);
  }
});

test('Use as error with details and code', t => {
  const details = { a: 1, b: 2 };
  const code = 1234;
  try {
    throw new Error(`Simple throwing fun`, { details, code });
  } catch (err) {
    t.regex(err.message, /Simple throwing fun/);
    t.is(err.code, code);
    t.deepEqual(err.details, details);
  }
});

test('Use as error with code, no details', t => {
  const code = 1234;
  try {
    throw new Error(`Simple throwing fun`, { code });
  } catch (err) {
    t.regex(err.message, /Simple throwing fun/);
    t.is(err.code, code);
    t.deepEqual(err.details, undefined);
  }
});
