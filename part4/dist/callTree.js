import React from "https://cdn.skypack.dev/react@^17.0.2";
import Prism from "https://cdn.skypack.dev/prismjs@^1.25.0";
import { bug } from "./util/err.js";
import print from "./ast/print.js";
import Type from "./type/index.js";

function highlight(code) {
  return Prism.highlight(code, Prism.languages.typescript, "typescript");
}

const expression = ast => {
  const __html = highlight(print(ast));

  return /* @__PURE__ */React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html
    }
  });
};

const type = type2 => {
  const __html = highlight(Type.toString(type2));

  return /* @__PURE__ */React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html
    }
  });
};

const types = types2 => {
  const elems = [];
  types2.forEach((t, i) => {
    elems.push(type(t));
    if (i < types2.length - 1) elems.push( /* @__PURE__ */React.createElement("b", null, ", "));
  });
  return elems;
};

const env = env2 => {
  const bindings = [];

  for (const [name, type2] of env2.entries()) {
    bindings.push(`${name}: ${highlight(Type.toString(type2))}`);
  }

  const __html = `Env({${bindings.length === 0 ? "" : ` ${bindings.join(", ")} `}})`;
  return /* @__PURE__ */React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html
    }
  });
};

const instrumentedFunction = fn => {
  const name = fn.instrumentedName;

  if (name.startsWith("...synth")) {
    return /* @__PURE__ */React.createElement("span", null, /* @__PURE__ */React.createElement("b", null, name), "[", expression(fn.x), "]");
  } else {
    return /* @__PURE__ */React.createElement("b", null, name);
  }
};

const Args = ({
  call
}) => {
  const args = [];

  if (call.name.startsWith("synth")) {
    args.push(env(call.args[0]));
    args.push( /* @__PURE__ */React.createElement("b", null, ", "));
    args.push(expression(call.args[1]));
  } else if (call.name.startsWith("...synth")) {
    for (let i = 0; i < call.args.length; i++) {
      args.push(type(call.args[i]));
      if (i < call.args.length - 1) args.push( /* @__PURE__ */React.createElement("b", null, ", "));
    }
  } else if (call.name === "map") {
    let i = 0;

    for (i; i < call.args.length - 1; i++) {
      args.push(type(call.args[i]));
      args.push( /* @__PURE__ */React.createElement("b", null, ", "));
    }

    args.push(instrumentedFunction(call.args[i]));
  } else if (call.name.startsWith("check")) {
    args.push(env(call.args[0]));
    args.push( /* @__PURE__ */React.createElement("b", null, ", "));
    args.push(expression(call.args[1]));
    args.push( /* @__PURE__ */React.createElement("b", null, ", "));
    args.push(type(call.args[2]));
  } else if (call.name === "isSubtype") {
    args.push(type(call.args[0]));
    args.push( /* @__PURE__ */React.createElement("b", null, ", "));
    args.push(type(call.args[1]));
  } else if (call.name === "union") {
    args.push(...types(call.args));
  } else bug(`unexpected call name ${call.name}`);

  return /* @__PURE__ */React.createElement(React.Fragment, null, args);
};

const Result = ({
  call
}) => {
  if ("error" in call.result) {
    const error = call.result.error;
    return /* @__PURE__ */React.createElement("span", {
      style: {
        color: "red"
      }
    }, error.message);
  } else {
    if (call.name.startsWith("synth")) {
      return type(call.result.value);
    } else if (call.name.startsWith("...synth")) {
      return type(call.result.value);
    } else if (call.name === "map") {
      return type(call.result.value);
    } else if (call.name.startsWith("check")) {
      return /* @__PURE__ */React.createElement("i", {
        style: {
          color: "#aaaaaa"
        }
      }, "returned");
    } else if (call.name === "isSubtype") {
      return /* @__PURE__ */React.createElement("span", null, call.result.value ? "true" : "false");
    } else if (call.name === "union") {
      return type(call.result.value);
    } else bug(`unexpected call name ${call.name}`);
  }
};

const hoverColor = "hsl(220, 100%, 90%)";

const Extra = ({
  call
}) => {
  if (call.name.startsWith("...synth")) {
    return /* @__PURE__ */React.createElement("span", null, "[", expression(call.x), "]");
  } else {
    return null;
  }
};

const Call = ({
  call,
  setHoveredRange
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const onClick = () => setExpanded(!expanded);

  const onMouseEnter = () => {
    if (call.name.startsWith("synth") || call.name.startsWith("check")) {
      const expr = call.args[1];

      if (expr.start !== null && expr.end !== null) {
        setHoveredRange({
          start: expr.start,
          end: expr.end
        });
      }
    } else if (call.name.startsWith("...synth")) {
      const expr = call.x;

      if (expr.start !== null && expr.end !== null) {
        setHoveredRange({
          start: expr.start,
          end: expr.end
        });
      }
    }

    setHovered(true);
  };

  const onMouseLeave = () => {
    setHoveredRange(null);
    setHovered(false);
  };

  return /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement("div", {
    onClick,
    onMouseEnter,
    onMouseLeave,
    style: {
      backgroundColor: hovered ? hoverColor : "transparent"
    }
  }, /* @__PURE__ */React.createElement("span", {
    style: {
      display: "inline-block",
      width: "12px",
      textAlign: "center"
    }
  }, expanded ? "▾" : "▸"), /* @__PURE__ */React.createElement("b", null, call.name), /* @__PURE__ */React.createElement(Extra, {
    call
  }), "(", /* @__PURE__ */React.createElement(Args, {
    call
  }), ")"), expanded && /* @__PURE__ */React.createElement("div", {
    style: {
      marginLeft: "4px",
      borderLeft: `solid 4px ${hovered ? hoverColor : "#efefef"}`,
      paddingLeft: "4px"
    }
  }, /* @__PURE__ */React.createElement(Calls, {
    calls: call.calls,
    setHoveredRange
  })), /* @__PURE__ */React.createElement("div", {
    onClick,
    onMouseEnter,
    onMouseLeave,
    style: {
      backgroundColor: hovered ? hoverColor : "transparent"
    }
  }, "⟸ ", /* @__PURE__ */React.createElement(Result, {
    call
  })));
};

const Calls = ({
  calls,
  setHoveredRange
}) => {
  return /* @__PURE__ */React.createElement(React.Fragment, null, calls.map(call => /* @__PURE__ */React.createElement(Call, {
    call,
    setHoveredRange
  })));
};

export default (({
  calls,
  setHoveredRange
}) => /* @__PURE__ */React.createElement("div", {
  style: {
    fontFamily: "monospace",
    fontSize: 14,
    whiteSpace: "nowrap"
  }
}, /* @__PURE__ */React.createElement(Calls, {
  calls,
  setHoveredRange
})));