import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

import { parseExpression } from './ast/parse';
import synth from './typecheck/synth';
import Type from './type';

const ScrollBox: React.FunctionComponent<{ gridArea: string }> = ({ gridArea, children }) =>
  <div
    style={{
      backgroundColor: 'white',
      gridArea,
      overflow: "scroll",
      margin: "5px",
      padding: "10px",
      borderRadius: "10px",
      borderStyle: "solid",
      borderWidth: "1px"
    }}
  >
    {children}
  </div>

const Label: React.FunctionComponent<{ gridArea: string }> = ({ gridArea, children }) =>
  <div
    style={{
      gridArea,
      justifySelf: "end"
    }}
  >
    <h3>{children}</h3>
  </div>

const highlight = (code: string) =>
  Prism.highlight(code, Prism.languages.typescript, 'typescript');

const App = () => {
  const [code, setCode] = React.useState('');

  let type: React.ReactNode = '';
  if (code.trim()) {
    try {
      const __html = highlight(Type.toString(synth(parseExpression(code))));
      type = <span dangerouslySetInnerHTML={{ __html }} />;
    } catch (e) {
      type = <span style={{ color: 'red' }}>{e.message}</span>;
    }
  }

  return (
    <div
      style={{
        backgroundColor: 'aliceblue',
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gridTemplateRows: "1fr 2fr 2fr 1fr",
        gridTemplateAreas: `
          "blank     title"
          "codeLabel editor"
          "typeLabel type"
        `,
        height: "100vh",
        width: "100vw"
      }}
    >
      <div
        style={{
          gridArea: 'title',
          justifySelf: 'center',
          alignSelf: 'end',
        }}>
          <h1>Reconstructing TypeScript</h1>
      </div>
      <Label gridArea={'codeLabel'}>expression</Label>
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
      <Label gridArea={'typeLabel'}>type</Label>
      <ScrollBox gridArea={'type'}>
        <div style={{
          fontFamily: "monospace",
          fontSize: 14
        }}>
          {type}
        </div>
      </ScrollBox>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
