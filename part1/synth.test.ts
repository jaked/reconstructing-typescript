import * as Parse from './parse';
import synth from './synth';

function expectSynth(expr: string, type: string) {
  const exprAst = Parse.parseExpression(expr);
  const typeAst = Parse.parseType(type);
  expect(synth(exprAst)).toEqual(typeAst);
}

describe('object', () => {
  it('ok', () => {
    expectSynth(
      '{ foo: 1, bar: true }',
      '{ foo: number, bar: boolean }'
    );
  });
});
