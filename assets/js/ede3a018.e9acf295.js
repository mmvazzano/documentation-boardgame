"use strict";(self.webpackChunkcartesi_boardgame=self.webpackChunkcartesi_boardgame||[]).push([[8504],{1641:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});n(6540);var t=n(6588),l=n(5435),s=n(6137),o=n(4848);function c(){const e=(0,t.Ay)();return(0,o.jsxs)(l.A,{children:[(0,o.jsx)("h2",{children:"Global data"}),(0,o.jsx)(s.A,{src:e,collapseDepth:3})]})}},6137:(e,a,n)=>{n.d(a,{A:()=>P});var t=n(6540);const l=e=>!!e&&e instanceof Date;let s=1;const o=()=>s++;function c(e){let{field:a,value:n,data:l,lastElement:s,openBracket:c,closeBracket:r,level:i,style:u,shouldExpandNode:d,clickToExpandNode:m}=e;const b=(0,t.useRef)(!1),[_,E,v]=function(e){const[a,n]=(0,t.useState)(e());return[a,()=>n((e=>!e)),n]}((()=>d(i,n,a)));(0,t.useEffect)((()=>{b.current?v(d(i,n,a)):b.current=!0}),[d]);const x=_?u.collapseIcon:u.expandIcon,f=_?"collapse JSON":"expand JSON",h=function(){const e=(0,t.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${o()}:`),e.current}(),N=i+1,k=l.length-1,g=e=>{" "===e.key&&(e.preventDefault(),E())};return(0,t.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,t.createElement)("span",{className:x,onClick:E,onKeyDown:g,role:"button",tabIndex:0,"aria-label":f,"aria-expanded":_,"aria-controls":_?h:void 0}),a&&(m?(0,t.createElement)("span",{className:u.clickableLabel,onClick:E,onKeyDown:g,role:"button",tabIndex:-1},a,":"):(0,t.createElement)("span",{className:u.label},a,":")),(0,t.createElement)("span",{className:u.punctuation},c),_?(0,t.createElement)("div",{id:h},l.map(((e,a)=>(0,t.createElement)(p,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===k,level:N,shouldExpandNode:d,clickToExpandNode:m})))):(0,t.createElement)("span",{className:u.collapsedContent,onClick:E,onKeyDown:g,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":f,"aria-expanded":_}),(0,t.createElement)("span",{className:u.punctuation},r),!s&&(0,t.createElement)("span",{className:u.punctuation},","))}function r(e){let{field:a,openBracket:n,closeBracket:l,lastElement:s,style:o}=e;return(0,t.createElement)("div",{className:o.basicChildStyle,role:"listitem"},a&&(0,t.createElement)("span",{className:o.label},a,":"),(0,t.createElement)("span",{className:o.punctuation},n),(0,t.createElement)("span",{className:o.punctuation},l),!s&&(0,t.createElement)("span",{className:o.punctuation},","))}function i(e){let{field:a,value:n,style:t,lastElement:l,shouldExpandNode:s,clickToExpandNode:o,level:i}=e;return 0===Object.keys(n).length?r({field:a,openBracket:"{",closeBracket:"}",lastElement:l,style:t}):c({field:a,value:n,lastElement:l||!1,level:i,openBracket:"{",closeBracket:"}",style:t,shouldExpandNode:s,clickToExpandNode:o,data:Object.keys(n).map((e=>[e,n[e]]))})}function u(e){let{field:a,value:n,style:t,lastElement:l,level:s,shouldExpandNode:o,clickToExpandNode:i}=e;return 0===n.length?r({field:a,openBracket:"[",closeBracket:"]",lastElement:l,style:t}):c({field:a,value:n,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:t,shouldExpandNode:o,clickToExpandNode:i,data:n.map((e=>[void 0,e]))})}function d(e){let{field:a,value:n,style:s,lastElement:o}=e,c=n,r=s.otherValue;var i;return null===n?(c="null",r=s.nullValue):void 0===n?(c="undefined",r=s.undefinedValue):"string"==typeof(i=n)||i instanceof String?(c=s.noQuotesForStringValues?n:`"${n}"`,r=s.stringValue):(e=>"boolean"==typeof e||e instanceof Boolean)(n)?(c=n?"true":"false",r=s.booleanValue):(e=>"number"==typeof e||e instanceof Number)(n)?(c=n.toString(),r=s.numberValue):(e=>"bigint"==typeof e||e instanceof BigInt)(n)?(c=`${n.toString()}n`,r=s.numberValue):c=l(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,t.createElement)("div",{className:s.basicChildStyle,role:"listitem"},a&&(0,t.createElement)("span",{className:s.label},a,":"),(0,t.createElement)("span",{className:r},c),!o&&(0,t.createElement)("span",{className:s.punctuation},","))}function p(e){const a=e.value;return n=a,Array.isArray(n)?(0,t.createElement)(u,Object.assign({},e)):(e=>e instanceof Object&&null!==e)(a)&&!l(a)?(0,t.createElement)(i,Object.assign({},e)):(0,t.createElement)(d,Object.assign({},e));var n}var m="_2bkNM";const b={container:"_2IvMF _GzYRV",basicChildStyle:m,label:"_1MGIk",clickableLabel:"_2YKJg _1MGIk _1MFti",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},_=()=>!0,E=e=>{let{data:a,style:n=b,shouldExpandNode:l=_,clickToExpandNode:s=!1}=e;return(0,t.createElement)("div",{className:n.container},(0,t.createElement)(p,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:l,clickToExpandNode:s}))},v="containerParaiso_cQJv",x="basicElementParaiso_QZsA",f="labelParaiso_wRN4",h="nullValueParaiso_AoA7",N="undefinedValueParaiso_FhTI",k="stringValueParaiso_V3BI",g="booleanValueParaiso_DtTx",y="numberValueParaiso_QJS7",V="otherValueParaiso_LEJn",j="punctuationParaiso_IgdH",I="expandIconParaiso_FXv1",S="collapseIconParaiso_vUhq",C="collapseContentParaiso_r7rr";var A=n(4848);const B={container:v,basicChildStyle:x,label:f,nullValue:h,undefinedValue:N,stringValue:k,booleanValue:g,numberValue:y,otherValue:V,punctuation:j,collapseIcon:S,expandIcon:I,collapsedContent:C};function P(e){let{src:a,collapseDepth:n}=e;return(0,A.jsx)(E,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:B})}},5435:(e,a,n)=>{n.d(a,{A:()=>r});n(6540);var t=n(5260),l=n(8774);const s={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var o=n(4848);function c(e){let{to:a,children:n}=e;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function r(e){let{children:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(c,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:a})]})]})}}}]);