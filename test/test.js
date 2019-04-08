import test from 'ava';
import MoTest from '../src/index'

test('is same', t => {
  let moTest = new MoTest()
  t.is(moTest.sum(1, 3), 50)
})