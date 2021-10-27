import React from 'react';
import * as AST from '@babel/types';
import Prism from 'prismjs';

import * as Trace from './util/trace';
import { bug } from './util/err';
import print from './ast/print';
import Type from './type';
import Env from './typecheck/env';

function highlight(code: string) {
  return Prism.highlight(code, Prism.languages.typescript, 'typescript');
}

type Range = { start: number, end: number };

const expression = (ast: AST.Expression) => {
  const __html = highlight(print(ast));
  return <span dangerouslySetInnerHTML={{ __html }} />;
}

const type = (type: Type) => {
  const __html = highlight(Type.toString(type));
  return <span dangerouslySetInnerHTML={{ __html }} />;
}

const types = (types: Type[]) => {
  const elems: React.ReactElement[] = [];
  types.forEach((t, i) => {
    elems.push(type(t));
    if (i < types.length - 1)
      elems.push(<b>, </b>);
  });
  return elems;
}

const typeArray = (ts: Type[]) =>
  <React.Fragment>
    <b>[</b>{types(ts)}<b>]</b>
  </React.Fragment>

const typeArrayArray = (tss: Type[][]) => {
  const elems: React.ReactElement[] = [];
  elems.push(<b>[</b>);
  tss.forEach((ts, i) => {
    elems.push(typeArray(ts));
    if (i < tss.length - 1)
      elems.push(<b>, </b>);
  });
  elems.push(<b>]</b>);
  return <React.Fragment>{elems}</React.Fragment>;
}

const env = (env: Env) => {
  const bindings: string[] = [];
  for (const [name, type] of env.entries()) {
    bindings.push(`${name}: ${highlight(Type.toString(type))}`);
  }
  const __html = `Env({${ bindings.length === 0 ? '' : ` ${bindings.join(', ')} ` }})`;
  return <span dangerouslySetInnerHTML={{ __html }} />;
}

const none = () => {
  return <i style={{ color: "#aaaaaa"}}>returned</i>
}

const boolean = (value: boolean) => {
  return <span>{value ? 'true' : 'false'}</span>;
}

const instrumentedFunction = (fn: any) => {
  const name = fn.instrumentedName;
  if (name.startsWith('...synth')) {
    return <span><b>{name}</b>[{expression(fn.x)}]</span>
  } else {
    return <b>{name}</b>;
  }
}

type ValueDescriptor = ((value: any) => React.ReactElement)

type FunctionDescriptor = {
  args: ValueDescriptor[] | ValueDescriptor,
  ret: ValueDescriptor
}

const functions: { [name: string]: FunctionDescriptor } = {
  check: { args: [env, expression, type], ret: none },
  checkObject: { args: [env, expression, type], ret: none },
  checkFunction: { args: [env, expression, type], ret: none },

  isSubtype: { args: [type, type], ret: boolean },

  synth: { args: [env, expression], ret: type },
  synthIdentifier: { args: [env, expression], ret: type },
  synthNull: { args: [env, expression], ret: type },
  synthBoolean: { args: [env, expression], ret: type },
  synthNumber: { args: [env, expression], ret: type },
  synthString: { args: [env, expression], ret: type },
  synthObject: { args: [env, expression], ret: type },
  synthMember: { args: [env, expression], ret: type },
  '...synthMember': { args: [type], ret: type },
  synthTSAs: { args: [env, expression], ret: type },
  synthFunction: { args: [env, expression], ret: type },
  synthCall: { args: [env, expression], ret: type },
  '...synthCall': { args: [type], ret: type },
  synthBinary: { args: [env, expression], ret: type },
  '...synthBinary': { args: [type, type], ret: type },
  synthLogical: { args: [env, expression], ret: type },
  '...synthLogical': { args: [type, type], ret: type },
  synthUnary: { args: [env, expression], ret: type },
  '...synthUnary': { args: [type], ret: type },

  // see Args
  map: { args: [type, instrumentedFunction], ret: type },
  map2: { args: [type, type, instrumentedFunction], ret: type },

  union: { args: type, ret: type },
  flatten: { args: [typeArray], ret: typeArray },
  collapseSubtypes: { args: [typeArray], ret: typeArray },
  intersection: { args: type, ret: type },
  collapseSupertypes: { args: [typeArray], ret: typeArray },
  overlaps: { args: [type, type], ret: boolean },
  intersectionNoUnion: { args: [typeArray], ret: type },
  distributeUnion: { args: [typeArray], ret: typeArrayArray },
}

const Args = ({ call }: { call: Trace.call }) => {
  const args: React.ReactElement[] = [];

  let func: FunctionDescriptor;
  // I got fancy and overloaded Type.map
  if (call.name === 'map' && call.args.length === 3) {
    func = functions['map2']
  } else {
    func = functions[call.name]
  }
  if (!func)
    bug(`unexpected call name ${call.name}`);

  for (let i = 0; i < call.args.length; i++) {
    const arg = Array.isArray(func.args) ? func.args[i] : func.args;
    if (!arg) {
      console.log(func);
      console.log(call);
      console.log(i);
    }
    args.push(arg(call.args[i]));
    if (i < call.args.length - 1)
      args.push(<b>, </b>);
  }

  return <>{args}</>;
}

const Result = ({ call }: { call: Trace.call }): JSX.Element => {
  if ('error' in call.result) {
    const error = call.result.error as Error;
    return <span style={{ color: 'red' }}>{error.message}</span>
  } else {
    const func =
      functions[call.name] ?? bug(`unexpected call name ${call.name}`);
    return func.ret(call.result.value);
  }
}

const hoverColor = 'hsl(220, 100%, 90%)'

const Extra = ({ call } : { call: Trace.call }) => {
  if (call.name.startsWith('...synth')) {
    return <span>[{expression(call.x as AST.Expression)}]</span>
  } else {
    return null;
  }
}

type CallProps = {
  call: Trace.call;
  setHoveredRange: (range: Range | null) => void;
}

const Call = ({ call, setHoveredRange } : CallProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const onClick = () => setExpanded(!expanded);
  const onMouseEnter = () => {
    if (call.name.startsWith('synth') || call.name.startsWith('check')) {
      const expr = call.args[1] as AST.Expression;
      if (expr.start !== null && expr.end !== null) {
        setHoveredRange({ start: expr.start, end: expr.end })
      }
    } else if (call.name.startsWith('...synth')) {
      const expr = call.x as AST.Expression;
      if (expr.start !== null && expr.end !== null) {
        setHoveredRange({ start: expr.start, end: expr.end })
      }
    }
    setHovered(true);
  }
  const onMouseLeave = () => {
    setHoveredRange(null);
    setHovered(false);
  }

  return <>
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: hovered ? hoverColor : 'transparent' }}
    >
      <span style={{ display: 'inline-block', width: '12px', textAlign: 'center' }}>
        {expanded ? '▾' : '▸'}
      </span>
      <b>{call.name}</b><Extra call={call} />(<Args call={call} />)
    </div>
    { expanded &&
      <div style={{
        marginLeft: '4px',
        borderLeft: `solid 4px ${hovered ? hoverColor : '#efefef'}`,
        paddingLeft: '4px'
      }}>
        <Calls calls={call.calls} setHoveredRange={setHoveredRange} />
      </div>
    }
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ backgroundColor: hovered ? hoverColor : 'transparent' }}
    >
      ⟸ <Result call={call} />
    </div>
  </>;
}

type CallsProps = {
  calls: Trace.call[];
  setHoveredRange: (range: Range | null) => void;
}

const Calls = ({ calls, setHoveredRange } : CallsProps) => {
  return <>{
    calls.map(call => <Call call={call} setHoveredRange={setHoveredRange} />)
  }</>;
}

type Props = {
  calls: Trace.call[];
  setHoveredRange: (range: Range | null) => void;
}

export default ({ calls, setHoveredRange } : Props) =>
  <div style={{
    fontFamily: "monospace",
    fontSize: 14,
    whiteSpace: 'nowrap',
  }}>
    <Calls calls={calls} setHoveredRange={setHoveredRange} />
  </div>
