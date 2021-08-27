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
      justifySelf: "end",
      alignSelf: "center",
      fontFamily: "serif",
      fontSize: "19px"
    }}
  >
    {children}
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
        display: "grid",
        gridTemplateColumns: "max-content 1fr",
        gridTemplateRows: "1fr 1fr",
        gridTemplateAreas: `
          "editorLabel editor"
          "typeLabel type"
        `,
        height: "300px",
        width: "700px"
      }}
    >
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
      <Label gridArea='typeLabel'>type</Label>
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
