import * as Parse from '../ast/parse';
import Typecheck from './index';

function expectSynth(expr: string, type: string) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(Typecheck.synth(exprAst)).toEqual(typeAst);
}

describe('object', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: 1, bar: true }',
      '{ foo: number, bar: boolean }'
    );
  });
});

describe('property lookup', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: "bar" }.foo',
      'string'
    );
  });
});

describe('as', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: 1 } as { foo: number }',
      '{ foo: number }'
    );
  });
});
