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

const typeArray = ts => /* @__PURE__ */React.createElement(React.Fragment, null, /* @__PURE__ */React.createElement("b", null, "["), types(ts), /* @__PURE__ */React.createElement("b", null, "]"));

const typeArrayArray = tss => {
  const elems = [];
  elems.push( /* @__PURE__ */React.createElement("b", null, "["));
  tss.forEach((ts, i) => {
    elems.push(typeArray(ts));
    if (i < tss.length - 1) elems.push( /* @__PURE__ */React.createElement("b", null, ", "));
  });
  elems.push( /* @__PURE__ */React.createElement("b", null, "]"));
  return /* @__PURE__ */React.createElement(React.Fragment, null, elems);
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

const instrumentedFunction = fn => {
  const name = fn.instrumentedName;

  if (name.startsWith("...synth")) {
    return /* @__PURE__ */React.createElement("span", null, /* @__PURE__ */React.createElement("b", null, name), "[", expression(fn.x), "]");
  } else {
    return /* @__PURE__ */React.createElement("b", null, name);
  }
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
  "...synthMember": {
    args: [type],
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
  "...synthCall": {
    args: [type],
    ret: type
  },
  synthBinary: {
    args: [env, expression],
    ret: type
  },
  "...synthBinary": {
    args: [type, type],
    ret: type
  },
  synthLogical: {
    args: [env, expression],
    ret: type
  },
  "...synthLogical": {
    args: [type, type],
    ret: type
  },
  synthUnary: {
    args: [env, expression],
    ret: type
  },
  "...synthUnary": {
    args: [type],
    ret: type
  },
  map: {
    args: [type, instrumentedFunction],
    ret: type
  },
  map2: {
    args: [type, type, instrumentedFunction],
    ret: type
  },
  union: {
    args: type,
    ret: type
  },
  flatten: {
    args: [typeArray],
    ret: typeArray
  },
  collapseSubtypes: {
    args: [typeArray],
    ret: typeArray
  },
  intersection: {
    args: type,
    ret: type
  },
  collapseSupertypes: {
    args: [typeArray],
    ret: typeArray
  },
  overlaps: {
    args: [type, type],
    ret: boolean
  },
  intersectionNoUnion: {
    args: [typeArray],
    ret: type
  },
  distributeUnion: {
    args: [typeArray],
    ret: typeArrayArray
  }
};

const Args = ({
  call
}) => {
  const args = [];
  let func;

  if (call.name === "map" && call.args.length === 3) {
    func = functions["map2"];
  } else {
    func = functions[call.name];
  }

  if (!func) bug(`unexpected call name ${call.name}`);

  for (let i = 0; i < call.args.length; i++) {
    const arg = Array.isArray(func.args) ? func.args[i] : func.args;

    if (!arg) {
      console.log(func);
      console.log(call);
      console.log(i);
    }

    args.push(arg(call.args[i]));
    if (i < call.args.length - 1) args.push( /* @__PURE__ */React.createElement("b", null, ", "));
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