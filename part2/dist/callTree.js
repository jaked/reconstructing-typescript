import React from "https://cdn.skypack.dev/react@^17.0.2";
import Prism from "https://cdn.skypack.dev/prismjs@^1.24.1";
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

const env = env2 => {
  console.log(env2);
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

const Args = ({
  call
}) => {
  const args = [];

  if (call.name.startsWith("synth")) {
    args.push(env(call.args[0]));
    args.push( /* @__PURE__ */React.createElement("b", null, ", "));
    args.push(expression(call.args[1]));
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
    } else if (call.name.startsWith("check")) {
      return /* @__PURE__ */React.createElement("i", {
        style: {
          color: "#aaaaaa"
        }
      }, "returned");
    } else if (call.name === "isSubtype") {
      return /* @__PURE__ */React.createElement("span", null, call.result.value ? "true" : "false");
    } else bug(`unexpected call name ${call.name}`);
  }
};

const hoverColor = "hsl(220, 100%, 90%)";

const Call = ({
  call,
  setHoveredRange
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const onClick = () => setExpanded(!expanded);

  const onMouseEnter = () => {
    if (call.name.startsWith("synth") || call.name.startsWith("check")) {
      const expr = call.args[0];

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
  }, expanded ? "▾" : "▸"), /* @__PURE__ */React.createElement("b", null, call.name), "(", /* @__PURE__ */React.createElement(Args, {
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