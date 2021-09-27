import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

import * as Trace from './util/trace';
import { parseExpression } from './ast/parse';
import synth from './typecheck/synth';
import CallTree from './callTree';

const examples = {
  'primitive': '7',
  'object': '{ foo: 7, bar: "baz" }',
  'member': '{ foo: 7, bar: "baz" }.foo',
  'check object': '{ foo: 7, bar: "baz" } as { foo: number, bar: string }',
  'check object error': `{
  x: 7,
  y: { a: "foo", b: "bar" }.b
} as { x: number, y: number }`
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

const highlight = (code: string) =>
  Prism.highlight(code, Prism.languages.typescript, 'typescript');

const App = () => {
  const [code, setCode] = React.useState('');

  let err: string | undefined;
  if (code.trim()) {
    try {
      const ast = parseExpression(code);
      try {
        Trace.resetCalls();
        synth(ast);
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
          <button onClick={(e) => { setCode(code) }}>{label}</button>
        )}
      </div>
      <Label gridArea='editorLabel'>expression</Label>
      <ScrollBox gridArea={'editor'}>
        <Editor
          highlight={highlight}
          value={code}
          onValueChange={setCode}
          style={{
            fontFamily: "monospace",
            fontSize: 14
          }}
        />
      </ScrollBox>
      <Label gridArea='traceLabel'>trace</Label>
      <ScrollBox gridArea={'trace'}>
        {err ?
          <Error>{err}</Error> :
          <CallTree key={code} calls={Trace.getCalls()} />
        }
      </ScrollBox>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
