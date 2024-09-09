"use strict";(self.webpackChunkcartesi_boardgame=self.webpackChunkcartesi_boardgame||[]).push([[4928],{7371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(4848),a=n(8453);const o={sidebar_position:3},r="Cartesi Integration",s={id:"core-concepts/cartesi-integration",title:"Cartesi Integration",description:"Boardgame Example",source:"@site/docs/core-concepts/cartesi-integration.md",sourceDirName:"core-concepts",slug:"/core-concepts/cartesi-integration",permalink:"/documentation-boardgame/docs/core-concepts/cartesi-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/mmvazzano/documentation-boardgame/edit/main/docs/core-concepts/cartesi-integration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/documentation-boardgame/docs/core-concepts/architecture/storage"},next:{title:"Game Development",permalink:"/documentation-boardgame/docs/category/game-development"}},c={},l=[];function d(e){const t={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"cartesi-integration",children:"Cartesi Integration"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Boardgame Example",src:n(1098).A+"",width:"825",height:"415"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"T&D Game Client Logic:"}),"\n",(0,i.jsx)(t.p,{children:"Control of the game logic at the client level. Here the G and ctx states are handled on the client side. It inherits all the functionalities of boardgame.io. For communication, both with the backend and with other clients, it uses DappTransport."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Dapp Transport:"}),"\n",(0,i.jsx)(t.p,{children:"A new module that acts as transport. Integrates Cartesify frontend for the communication part with the CVM. The chat functionality is integrated using the XMTP protocol."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Backend Cartesify:"}),"\n",(0,i.jsx)(t.p,{children:"CVM input. Gets all the info from the frontend. Allows to establish communication with the CVM in a simple way to handle inputs and outputs as web2 REST API calls."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Backend Logic:"}),"\n",(0,i.jsx)(t.p,{children:"Control of the game logic at the server level. Here the states are managed and the game state is replicated to guarantee the correct execution of the game and its evolution."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"DRAND:"}),"\n",(0,i.jsx)(t.p,{children:"If the game requires it, it can make use of the DRAND module to obtain random numbers reliably in the Cartesi environment. Implementations are already available for integration."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Lobby:"}),"\n",(0,i.jsx)(t.p,{children:"To manage the creation, modification, and the way in which clients join and leave a game you will make use of the Lobby. It is intended to be implemented for the initial moment. The rest of the communication between clients will be via XMTP (see section 2)."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Storage:"}),"\n",(0,i.jsx)(t.p,{children:"The storage management will be done in two possible ways. First, the flat-file scheme provided natively by boardgame.io will be used. In this, as its name indicates, the DB is stored in a file. In a second step, a SQLite adapter will be generated for this purpose. It is possible to integrate Cartesi SQLite. At the end of the development process, both strategies will be available."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1098:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/diagram-99a31a8bc8ab4a4e631e9b627656e769.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);