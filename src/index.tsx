import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

import * as Trace from './util/trace';
import { parseExpression } from './ast/parse';
import synth from './typecheck/synth';
import Env from './typecheck/env';
import CallTree from './callTree';

const examples = {
  'object': '{ foo: 7, bar: 9 } as { foo: number } & { bar: number }',
  'object error': '{ foo: 7, bar: true } as { foo: number } & { bar: number }',
  'synth function': '(x: 7 | 9) => x',
  'check function': '(x => x) as ((x: 7) => 7) & ((x: 9) => 9)',
  'check function error': '(x => x) as ((x: 7) => 7) & ((x: 7) => 9)',
  'empty intersection': '{} as { foo: 7 } & { foo: 9 }',
}

const ScrollBox: React.FunctionComponent<{ gridArea: string }> = ({ gridArea, children }) =>
  <div
    style={{
      gridArea,
      overflow: "scroll",
      margin: "5px",
      padding: "10px",
      borderRadius: "10px",
      borderStyle: "solid",
      borderWidth: "1px",
    }}
  >
    {children}
  </div>

const Label: React.FunctionComponent<{ gridArea: string }> = ({ gridArea, children }) =>
  <div
    style={{
      gridArea,
      justifySelf: "start",
      alignSelf: "center",
      fontFamily: "serif",
      fontSize: "19px",
      marginLeft: "5px",
    }}
  >
    {children}
  </div>

const Error: React.FunctionComponent<{}> = ({ children }) =>
  <span style={{
    fontFamily: 'monospace',
    fontSize: 14,
    color: 'red',
  }}>{children}</span>

type Range = { start: number, end: number };

const hoverColor = 'hsl(220, 100%, 90%)';

const highlightToken = (
  token: string | Prism.Token | (string | Prism.Token)[],
  offset: [number],
  hoveredRange: Range | null
): React.ReactNode => {
  if (Array.isArray(token)) {
    return token.map(token => highlightToken(token, offset, hoveredRange));

  } else if (typeof token === 'string') {
    const comps: React.ReactNode[] = [];
    if (hoveredRange) {
      const start = hoveredRange.start - offset[0];
      const end = hoveredRange.end - offset[0];
      if (Math.max(start, 0) < Math.min(end, token.length)) {
        if (start > 0) {
          comps.push(token.substring(0, start));
        }
        comps.push(
          <span style={{ backgroundColor: hoverColor }}>{
            token.substring(start, end)
          }</span>
        );
        if (end < token.length) {
          comps.push(token.substring(end));
        }
      } else {
        comps.push(token);
      }
    } else {
      comps.push(token);
    }
    offset[0] += token.length;
    return comps;

  } else {
    const className = `token ${token.type}`;
    const children = highlightToken(token.content, offset, hoveredRange);
    return <span className={className}>{children}</span>
  }
}

const highlight = (code: string, hovered: Range | null) => {
  const tokens = Prism.tokenize(code, Prism.languages.typescript);
  const offset: [number] = [0];
  return tokens.map(token => highlightToken(token, offset, hovered));
}

const App = () => {
  const [code, setCode] = React.useState('');
  const [hoveredRange, setHoveredRange] = React.useState<Range | null>(null);

  Trace.resetCalls();
  let err: string | undefined;
  if (code.trim()) {
    try {
      const ast = parseExpression(code);
      try {
        synth(Env.empty, ast);
      } catch (e) { }
    } catch (e) {
      err = String(e);
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "max-content max-content max-content 1fr max-content 3fr",
        gridTemplateAreas: `
          "examplesLabel"
          "examples"
          "editorLabel"
          "editor"
          "traceLabel"
          "trace"
        `,
        height: "100vh",
        width: "100vw"
      }}
    >
      <Label gridArea='examplesLabel'>examples</Label>
      <div style={{ padding: '10px', gridArea: 'examples' }}>
        {Object.entries(examples).map(([ label, code ]) =>
          <button onClick={(e) => { setCode(code.trim()) }}>{label}</button>
        )}
      </div>
      <Label gridArea='editorLabel'>expression</Label>
      <ScrollBox gridArea={'editor'}>
        <Editor
          highlight={code => highlight(code, hoveredRange)}
          value={code}
          onValueChange={setCode}
          style={{
            fontFamily: "monospace",
            fontSize: 14,
            minHeight: '100%',
          }}
        />
      </ScrollBox>
      <Label gridArea='traceLabel'>trace</Label>
      <ScrollBox gridArea={'trace'}>
        {err ?
          <Error>{err}</Error> :
          <CallTree key={code} calls={Trace.getCalls()} setHoveredRange={setHoveredRange} />
        }
      </ScrollBox>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
