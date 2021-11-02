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

type ValueDescriptor = ((value: any) => React.ReactElement)

type FunctionDescriptor = {
  args: ValueDescriptor[],
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
  synthTSAs: { args: [env, expression], ret: type },
  synthFunction: { args: [env, expression], ret: type },
  synthCall: { args: [env, expression], ret: type },
  synthBinary: { args: [env, expression], ret: type },
  synthLogical: { args: [env, expression], ret: type },
  synthUnary: { args: [env, expression], ret: type },
}

const Args = ({ call }: { call: Trace.call }) => {
  const args: React.ReactElement[] = [];

  const func =
    functions[call.name] ?? bug(`unexpected call name ${call.name}`);

  for (let i = 0; i < func.args.length; i++) {
    args.push(func.args[i](call.args[i]));
    if (i < func.args.length - 1)
      args.push(<b>, </b>);
  }

  return <>{args}</>;
}

const Result = ({ call }: { call: Trace.call }) => {
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
      <b>{call.name}</b>(<Args call={call} />)
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
