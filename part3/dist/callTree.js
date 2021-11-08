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

const none = () => {
  return /* @__PURE__ */React.createElement("i", {
    style: {
      color: "#aaaaaa"
    }
  }, "returned");
};

const boolean = value => {
  return /* @__PURE__ */React.createElement("span", null, value ? "true" : "false");
};

const functions = {
  check: {
    args: [env, expression, type],
    ret: none
  },
  checkObject: {
    args: [env, expression, type],
    ret: none
  },
  checkFunction: {
    args: [env, expression, type],
    ret: none
  },
  isSubtype: {
    args: [type, type],
    ret: boolean
  },
  synth: {
    args: [env, expression],
    ret: type
  },
  synthIdentifier: {
    args: [env, expression],
    ret: type
  },
  synthNull: {
    args: [env, expression],
    ret: type
  },
  synthBoolean: {
    args: [env, expression],
    ret: type
  },
  synthNumber: {
    args: [env, expression],
    ret: type
  },
  synthString: {
    args: [env, expression],
    ret: type
  },
  synthObject: {
    args: [env, expression],
    ret: type
  },
  synthMember: {
    args: [env, expression],
    ret: type
  },
  synthTSAs: {
    args: [env, expression],
    ret: type
  },
  synthFunction: {
    args: [env, expression],
    ret: type
  },
  synthCall: {
    args: [env, expression],
    ret: type
  },
  synthBinary: {
    args: [env, expression],
    ret: type
  },
  synthLogical: {
    args: [env, expression],
    ret: type
  },
  synthUnary: {
    args: [env, expression],
    ret: type
  }
};

const Args = ({
  call
}) => {
  const args = [];
  const func = functions[call.name] ?? bug(`unexpected call name ${call.name}`);

  for (let i = 0; i < func.args.length; i++) {
    args.push(func.args[i](call.args[i]));
    if (i < func.args.length - 1) args.push( /* @__PURE__ */React.createElement("b", null, ", "));
  }

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
    const func = functions[call.name] ?? bug(`unexpected call name ${call.name}`);
    return func.ret(call.result.value);
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
      const expr = call.args[1];

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