import React from 'react';
import * as AST from '@babel/types';
import Prism from 'prismjs';

import * as Trace from './util/trace';
import { bug } from './util/err';
import print from './ast/print';
import Type from './type';

type Range = { start: number, end: number };

const expression = (ast: AST.Expression) => {
  const __html = Prism.highlight(print(ast), Prism.languages.typescript, 'typescript');
  return <span dangerouslySetInnerHTML={{ __html }} />;
}

const type = (type: Type) => {
  const __html = Prism.highlight(Type.toString(type), Prism.languages.typescript, 'typescript');
  return <span dangerouslySetInnerHTML={{ __html }} />;
}

const Args = ({ call }: { call: Trace.call }) => {
  const args: React.ReactElement[] = [];
  if (call.name.startsWith('synth')) {
    args.push(expression(call.args[0] as AST.Expression));
  } else if (call.name.startsWith('check')) {
    args.push(expression(call.args[0] as AST.Expression));
    args.push(<b>, </b>);
    args.push(type(call.args[1] as Type));
  } else if (call.name === 'isSubtype') {
    args.push(type(call.args[0] as Type));
    args.push(<b>, </b>);
    args.push(type(call.args[1] as Type));
  } else bug(`unexpected call name ${call.name}`);
  return <>{args}</>;
}

const Result = ({ call }: { call: Trace.call }) => {
  if ('error' in call.result) {
    const error = call.result.error as Error;
    return <span style={{ color: 'red' }}>{error.message}</span>
  } else {
    if (call.name.startsWith('synth')) {
      return type(call.result.value as Type);
    } else if (call.name.startsWith('check')) {
      return <i style={{ color: "#aaaaaa"}}>returned</i>;
    } else if (call.name === 'isSubtype') {
      return <span>{call.result.value ? 'true' : 'false'}</span>;
    } else bug(`unexpected call name ${call.name}`);
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
      const expr = call.args[0] as AST.Expression;
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
