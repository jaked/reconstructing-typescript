import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import Editor from "../_snowpack/pkg/react-simple-code-editor.js";
import Prism from "../_snowpack/pkg/prismjs.js";
import "../_snowpack/pkg/prismjs/components/prism-typescript.js";
import {parseExpression} from "./ast/parse.js";
import synth from "./typecheck/synth.js";
import Type from "./type/index.js";
const ScrollBox = ({gridArea, children}) => /* @__PURE__ */ React.createElement("div", {
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
const Label = ({gridArea, children}) => /* @__PURE__ */ React.createElement("div", {
  style: {
    gridArea,
    justifySelf: "end"
  }
}, /* @__PURE__ */ React.createElement("h3", null, children));
const highlight = (code) => Prism.highlight(code, Prism.languages.typescript, "typescript");
const App = () => {
  const [code, setCode] = React.useState("");
  let type = "";
  if (code.trim()) {
    try {
      const __html = highlight(Type.toString(synth(parseExpression(code))));
      type = /* @__PURE__ */ React.createElement("span", {
        dangerouslySetInnerHTML: {__html}
      });
    } catch (e) {
      type = /* @__PURE__ */ React.createElement("span", {
        style: {color: "red"}
      }, e.message);
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundColor: "aliceblue",
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
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      gridArea: "title",
      justifySelf: "center",
      alignSelf: "end"
    }
  }, /* @__PURE__ */ React.createElement("h1", null, "Reconstructing TypeScript")), /* @__PURE__ */ React.createElement(Label, {
    gridArea: "codeLabel"
  }, "expression"), /* @__PURE__ */ React.createElement(ScrollBox, {
    gridArea: "editor"
  }, /* @__PURE__ */ React.createElement(Editor, {
    highlight,
    value: code,
    onValueChange: setCode,
    style: {
      fontFamily: "monospace",
      fontSize: 14
    }
  })), /* @__PURE__ */ React.createElement(Label, {
    gridArea: "typeLabel"
  }, "type"), /* @__PURE__ */ React.createElement(ScrollBox, {
    gridArea: "type"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "monospace",
      fontSize: 14
    }
  }, type)));
};
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
