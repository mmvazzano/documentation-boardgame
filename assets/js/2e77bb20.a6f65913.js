"use strict";(self.webpackChunkcartesi_boardgame=self.webpackChunkcartesi_boardgame||[]).push([[1976],{8118:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(4848),o=i(8453);const r={sidebar_position:1},a="Installation",s={id:"quick-start/instalation",title:"Installation",description:"Installing Cartesi Boardgame Libary",source:"@site/docs/quick-start/instalation.md",sourceDirName:"quick-start",slug:"/quick-start/instalation",permalink:"/documentation-boardgame/docs/quick-start/instalation",draft:!1,unlisted:!1,editUrl:"https://github.com/mmvazzano/documentation-boardgame/edit/main/docs/quick-start/instalation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick Start Guide",permalink:"/documentation-boardgame/docs/category/quick-start-guide"},next:{title:"Run a Pre-Built Example",permalink:"/documentation-boardgame/docs/quick-start/run-example"}},l={},d=[{value:"Installing Cartesi Boardgame Libary",id:"installing-cartesi-boardgame-libary",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install the Library",id:"install-the-library",level:3},{value:"Usage",id:"usage",level:4},{value:"Documentation",id:"documentation",level:4},{value:"Installing Nonodo",id:"installing-nonodo",level:3},{value:"Steps to Install Nonodo",id:"steps-to-install-nonodo",level:4},{value:"Important Caveats",id:"important-caveats",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-cartesi-boardgame-libary",children:"Installing Cartesi Boardgame Libary"}),"\n",(0,t.jsx)(n.p,{children:"To install the Cartesi Boardgame Library, follow these detailed steps:"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, ensure you have the following installed on your system:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Node.js"}),": You can check if Node.js is installed by running:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"node -v\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have Node.js installed, you can download it from ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en",children:"nodejs.org"}),". USAR NODE 20"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cartesi CLI"}),": This is required for interacting with Cartesi Rollups. Install it globally using:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install -g @cartesi/cli\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can verify the installation by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cartesi doctor\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more details on how to use Cartesi CLI, refer to the official Cartesi ",(0,t.jsx)(n.a,{href:"https://docs.cartesi.io/cartesi-rollups/1.5/development/installation/",children:"documentation"}),"."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker"}),": Ensure ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/",children:"Docker"})," is installed and running on your machine, as it is needed to manage containers for Cartesi applications."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-the-library",children:"Install the Library"}),"\n",(0,t.jsx)(n.p,{children:"To install the Cartesi Boardgame Library, run the following command in your terminal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nmp install @think-and-dev/cartesi-boardgame\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After installation, you can verify that the library has been added to your ",(0,t.jsx)(n.code,{children:"node_modules"})," folder and listed in your ",(0,t.jsx)(n.code,{children:"package.json"})," file under dependencies."]}),"\n",(0,t.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"Once installed, you can start using the library in your project. Import it into your JavaScript or TypeScript files as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"import { YourDesiredFunctionality } from '@think-and-dev/cartesi-boardgame';\n"})}),"\n",(0,t.jsx)(n.h4,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsxs)(n.p,{children:["For more information on how to use the Cartesi Boardgame Library, including examples and API references, visit the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@think-and-dev/cartesi-boardgame",children:"npm page"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"installing-nonodo",children:"Installing Nonodo"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the Cartesi Boardgame Library, you may want to install ",(0,t.jsx)(n.a,{href:"https://github.com/Calindra/nonodo",children:"Nonodo"}),". Nonodo is a development node specifically designed for Cartesi Rollups. It allows developers to run their applications directly on their host machines instead of the Cartesi Machine, eliminating the need to compile applications to RISC-V architecture during the development phase. This significantly streamlines the development workflow, enabling quick iterations and testing."]}),"\n",(0,t.jsx)(n.h4,{id:"steps-to-install-nonodo",children:"Steps to Install Nonodo"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Install Nonodo Globally"}),": To install Nonodo, run the following command:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install -g nonodo\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Verify Installation"}),": After installation, verify that Nonodo has been installed correctly by running:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nonodo --version\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Usage"}),": To start Nonodo with its default configuration, simply run:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nonodo\n"})}),"\n",(0,t.jsx)(n.h2,{id:"important-caveats",children:"Important Caveats"}),"\n",(0,t.jsx)(n.p,{children:"When using Nonodo for local development, it's important to keep the following points in mind:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Cartesi Machine operates on a RISC-V architecture, which is different from the architecture of most local development environments. This means that while your application may work correctly when running with Nonodo locally, it might not run as expected when deployed on the Cartesi Machine."}),"\n",(0,t.jsx)(n.li,{children:"Nonodo allows you to run your backend locally without the need to compile your application to RISC-V every time you make a change. However, this local setup does not replicate the exact environment of the Cartesi Machine, which can lead to discrepancies in behavior."}),"\n",(0,t.jsxs)(n.li,{children:["If your application requires specific python packages or libraries that need to be built for RISC-V, we maintain our own ",(0,t.jsx)(n.a,{href:"https://github.com/Think-and-Dev/riscv-python-wheels",children:"repository"})," to assist with this. Ensure that any dependencies are compatible with the RISC-V architecture before deploying."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);