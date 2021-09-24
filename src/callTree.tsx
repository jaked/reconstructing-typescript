import React from 'react';
import * as AST from '@babel/types';
import Prism from 'prismjs';

import * as Trace from './util/trace';
import { bug } from './util/err';
import print from './ast/print';
import Type from './type';

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

const Call = ({ call } : { call: Trace.call }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const onClick = () => setExpanded(!expanded);
  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

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
        marginLeft: '5px',
        borderLeft: `solid 2px ${hovered ? hoverColor : '#efefef'}`,
        paddingLeft: '5px'
      }}>
        <Calls calls={call.calls} />
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

export const Calls = ({ calls } : { calls: Trace.call[] }) => {
  return <>{calls.map(call => <Call call={call} />)}</>;
}

export default ({ calls } : { calls: Trace.call[] }) =>
  <div style={{
    fontFamily: "monospace",
    fontSize: 14,
    whiteSpace: 'nowrap',
  }}>
    <Calls calls={calls} />
  </div>
