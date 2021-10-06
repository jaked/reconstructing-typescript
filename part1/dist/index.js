import React from "https://cdn.skypack.dev/react@^17.0.2";
import ReactDOM from "https://cdn.skypack.dev/react-dom@^17.0.2";
import Editor from "https://cdn.skypack.dev/react-simple-code-editor@^0.11.0";
import Prism from "https://cdn.skypack.dev/prismjs@^1.24.1";
import "../_snowpack/pkg/prismjs/components/prism-typescript.js";
import * as Trace from "./util/trace.js";
import { parseExpression } from "./ast/parse.js";
import synth from "./typecheck/synth.js";
import CallTree from "./callTree.js";
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
    justifySelf: "start",
    alignSelf: "center",
    fontFamily: "serif",
    fontSize: "19px",
    marginLeft: "5px"
  }
}, children);

const Error = ({
  children
}) => /* @__PURE__ */React.createElement("span", {
  style: {
    fontFamily: "monospace",
    fontSize: 14,
    color: "red"
  }
}, children);

const hoverColor = "hsl(220, 100%, 90%)";

const highlightToken = (token, offset, hoveredRange) => {
  if (Array.isArray(token)) {
    return token.map(token2 => highlightToken(token2, offset, hoveredRange));
  } else if (typeof token === "string") {
    const comps = [];

    if (hoveredRange) {
      const start = hoveredRange.start - offset[0];
      const end = hoveredRange.end - offset[0];

      if (Math.max(start, 0) < Math.min(end, token.length)) {
        if (start > 0) {
          comps.push(token.substring(0, start));
        }

        comps.push( /* @__PURE__ */React.createElement("span", {
          style: {
            backgroundColor: hoverColor
          }
        }, token.substring(start, end)));

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
    return /* @__PURE__ */React.createElement("span", {
      className
    }, children);
  }
};

const highlight = (code, hovered) => {
  const tokens = Prism.tokenize(code, Prism.languages.typescript);
  const offset = [0];
  return tokens.map(token => highlightToken(token, offset, hovered));
};

const App = () => {
  const [code, setCode] = React.useState("");
  const [hoveredRange, setHoveredRange] = React.useState(null);
  let err;

  if (code.trim()) {
    try {
      const ast = parseExpression(code);

      try {
        Trace.resetCalls();
        synth(ast);
      } catch (e) {}
    } catch (e) {
      err = String(e);
    }
  }

  return /* @__PURE__ */React.createElement("div", {
    style: {
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
    }
  }, /* @__PURE__ */React.createElement(Label, {
    gridArea: "examplesLabel"
  }, "examples"), /* @__PURE__ */React.createElement("div", {
    style: {
      padding: "10px",
      gridArea: "examples"
    }
  }, Object.entries(examples).map(([label, code2]) => /* @__PURE__ */React.createElement("button", {
    onClick: e => {
      setCode(code2);
    }
  }, label))), /* @__PURE__ */React.createElement(Label, {
    gridArea: "editorLabel"
  }, "expression"), /* @__PURE__ */React.createElement(ScrollBox, {
    gridArea: "editor"
  }, /* @__PURE__ */React.createElement(Editor, {
    highlight: code2 => highlight(code2, hoveredRange),
    value: code,
    onValueChange: setCode,
    style: {
      fontFamily: "monospace",
      fontSize: 14
    }
  })), /* @__PURE__ */React.createElement(Label, {
    gridArea: "traceLabel"
  }, "trace"), /* @__PURE__ */React.createElement(ScrollBox, {
    gridArea: "trace"
  }, err ? /* @__PURE__ */React.createElement(Error, null, err) : /* @__PURE__ */React.createElement(CallTree, {
    key: code,
    calls: Trace.getCalls(),
    setHoveredRange
  })));
};

ReactDOM.render( /* @__PURE__ */React.createElement(App, null), document.getElementById("app"));