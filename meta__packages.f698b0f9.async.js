"use strict";(self.webpackChunkwang_react_hooks=self.webpackChunkwang_react_hooks||[]).push([[56],{52968:function(l,t,e){e.r(t),e.d(t,{demos:function(){return s}});var a=e(75271),r=e(53216),s={}},64661:function(l,t,e){var a;e.r(t),e.d(t,{demos:function(){return p}});var r=e(90228),s=e.n(r),_=e(87999),v=e.n(_),o=e(75271),i=e(15848),I=e(88133),p={"packages-hooks-src-use-toggle-demo-demo1":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,51197))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(11578).Z},react:{type:"NPM",value:"18.3.1"},"encode-hooks":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:a||(a=e.t(o,2)),encodeHooks:I},renderOpts:{compile:function(){var c=v()(s()().mark(function g(){var d,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(499).then(e.bind(e,42499));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,m));case 3:case"end":return n.stop()}},g)}));function u(){return c.apply(this,arguments)}return u}()}},"packages-hooks-src-use-toggle-demo-demo2":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,99870))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88052).Z},react:{type:"NPM",value:"18.3.1"},"encode-hooks":{type:"NPM",value:"1.0.0"}},entry:"index.tsx",title:"\u5728\u4EFB\u610F\u4E24\u4E2A\u503C\u4E4B\u95F4\u5207\u6362"},context:{react:a||(a=e.t(o,2)),encodeHooks:I},renderOpts:{compile:function(){var c=v()(s()().mark(function g(){var d,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(499).then(e.bind(e,42499));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,m));case 3:case"end":return n.stop()}},g)}));function u(){return c.apply(this,arguments)}return u}()}}}},88133:function(l,t,e){e.r(t),e.d(t,{useToggle:function(){return v}});var a=e(48305),r=e.n(a),s=e(75271);function _(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=arguments.length>1?arguments[1]:void 0,I=(0,s.useState)(o),p=r()(I,2),c=p[0],u=p[1],g=(0,s.useMemo)(function(){var d=i===void 0?!o:i,m=function(){return u(function(x){return x===o?d:o})},f=function(x){return u(x)},n=function(){return u(o)},E=function(){return u(d)};return{toggle:m,set:f,setLeft:n,setRight:E}},[]);return[c,g]}var v=_},30321:function(l,t,e){e.r(t),e.d(t,{texts:function(){return r}});var a=e(53216);const r=[]},67998:function(l,t,e){e.r(t),e.d(t,{texts:function(){return r}});var a=e(15848);const r=[{value:"\u7528\u4E8E\u5728\u4E24\u4E2A\u72B6\u6001\u503C\u95F4\u5207\u6362\u7684 Hook\u3002",paraId:0,tocIndex:0},{value:`const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);
`,paraId:1,tocIndex:6},{value:"\u53C2\u6570",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"defaultValue",paraId:2,tocIndex:7},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:7},{value:"T",paraId:2,tocIndex:7},{value:"false",paraId:2,tocIndex:7},{value:"reverseValue",paraId:2,tocIndex:7},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u53D6\u53CD\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:7},{value:"U",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"state",paraId:3,tocIndex:8},{value:"\u72B6\u6001\u503C",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"actions",paraId:3,tocIndex:8},{value:"\u64CD\u4F5C\u96C6\u5408",paraId:3,tocIndex:8},{value:"Actions",paraId:3,tocIndex:8},{value:"\u53C2\u6570",paraId:4,tocIndex:9},{value:"\u8BF4\u660E",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"toggle",paraId:4,tocIndex:9},{value:"\u5207\u6362 state",paraId:4,tocIndex:9},{value:"() => void",paraId:4,tocIndex:9},{value:"set",paraId:4,tocIndex:9},{value:"\u4FEE\u6539 state",paraId:4,tocIndex:9},{value:"(state: T | U) => void",paraId:4,tocIndex:9},{value:"setLeft",paraId:4,tocIndex:9},{value:"\u8BBE\u7F6E\u4E3A defaultValue",paraId:4,tocIndex:9},{value:"() => void",paraId:4,tocIndex:9},{value:"setRight",paraId:4,tocIndex:9},{value:"\u5982\u679C\u4F20\u5165\u4E86 reverseValue, \u5219\u8BBE\u7F6E\u4E3A reverseValue\u3002 \u5426\u5219\u8BBE\u7F6E\u4E3A defaultValue \u7684\u53CD\u503C",paraId:4,tocIndex:9},{value:"() => void",paraId:4,tocIndex:9}]},11578:function(l,t){t.Z=`import React from 'react';
import { useToggle } from 'encodeHooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <div>
      <p>Effects\uFF1A{\`\${state}\`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
    </div>
  );
};
`},88052:function(l,t){t.Z=`import React from 'react';
import { useToggle } from 'encodeHooks';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <div>
      <p>Effects\uFF1A{state}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>
          Set Hello
        </button>
        <button type="button" onClick={() => set('World')}>
          Set World
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Set Left
        </button>
        <button type="button" onClick={setRight}>
          Set Right
        </button>
      </p>
    </div>
  );
};
`}}]);
