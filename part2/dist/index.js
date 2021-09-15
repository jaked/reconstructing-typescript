import React from "https://cdn.skypack.dev/react@^17.0.2";
import ReactDOM from "https://cdn.skypack.dev/react-dom@^17.0.2";
import Editor from "https://cdn.skypack.dev/react-simple-code-editor@^0.11.0";
import Prism from "https://cdn.skypack.dev/prismjs@^1.24.1";
import "../_snowpack/pkg/prismjs/components/prism-typescript.js";
import { parseExpression } from "./ast/parse.js";
import synth from "./typecheck/synth.js";
import Type from "./type/index.js";
import Env from "./typecheck/env.js";
const examples = {
  primitive: "7",
  object: '{ foo: 7, bar: "baz" }',
  member: '{ foo: 7, bar: "baz" }.foo',
  "check object": '{ foo: 7, bar: "baz" } as { foo: number, bar: string }',
  "check object error": `{
  x: 7,
  y: { a: "foo", b: "bar" }.b
} as { x: number, y: number }`
};

const ScrollBox = ({
  gridArea,
  children
}) => /* @__PURE__ */React.createElement("div", {
  style: {
    backgroundColor: "white",
    gridArea,
    overflow: "scroll",
    margin: "5px",
    padding: "10px",
    borderRadius: "10px",
    borderStyle: "solid",
    borderWidth: "1px"
  }
}, children);

const Label = ({
  gridArea,
  children
}) => /* @__PURE__ */React.createElement("div", {
  style: {
    gridArea,
    justifySelf: "end",
    alignSelf: "center",
    fontFamily: "serif",
    fontSize: "19px"
  }
}, children);

const highlight = code => Prism.highlight(code, Prism.languages.typescript, "typescript");

const App = () => {
  const [code, setCode] = React.useState("");
  let type = "";

  if (code.trim()) {
    try {
      const __html = highlight(Type.toString(synth(Env.empty, parseExpression(code))));

      type = /* @__PURE__ */React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html
        }
      });
    } catch (e) {
      type = /* @__PURE__ */React.createElement("span", {
        style: {
          color: "red"
        }
      }, e.message);
    }
  }

  return /* @__PURE__ */React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "max-content 1fr",
      gridTemplateRows: "max-content 1fr 1fr",
      gridTemplateAreas: `
          "examplesLabel examples"
          "editorLabel editor"
          "typeLabel type"
        `,
      height: "100vh",
      width: "100vw"
    }
  }, /* @__PURE__ */React.createElement(Label, {
    gridArea: "examplesLabel"
  }, "examples"), /* @__PURE__ */React.createElement("div", {
    style: {
      padding: "10px"
    },
    gridArea: "examples"
  }, Object.entries(examples).map(([label, code2]) => /* @__PURE__ */React.createElement("button", {
    onClick: e => {
      setCode(code2);
    }
  }, label))), /* @__PURE__ */React.createElement(Label, {
    gridArea: "editorLabel"
  }, "expression"), /* @__PURE__ */React.createElement(ScrollBox, {
    gridArea: "editor"
  }, /* @__PURE__ */React.createElement(Editor, {
    highlight,
    value: code,
    onValueChange: setCode,
    style: {
      fontFamily: "monospace",
      fontSize: 14
    }
  })), /* @__PURE__ */React.createElement(Label, {
    gridArea: "typeLabel"
  }, "type"), /* @__PURE__ */React.createElement(ScrollBox, {
    gridArea: "type"
  }, /* @__PURE__ */React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: 14
    }
  }, type)));
};

ReactDOM.render( /* @__PURE__ */React.createElement(App, null), document.getElementById("app"));