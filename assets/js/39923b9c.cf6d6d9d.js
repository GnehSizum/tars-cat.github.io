"use strict";(self.webpackChunkai_docs=self.webpackChunkai_docs||[]).push([[3883],{3905:(t,l,n)=>{n.d(l,{Zo:()=>o,kt:()=>g});var e=n(7294);function a(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function i(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?i(Object(n),!0).forEach((function(l){a(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function r(t,l){if(null==t)return{};var n,e,a=function(t,l){if(null==t)return{};var n,e,a={},i=Object.keys(t);for(e=0;e<i.length;e++)n=i[e],l.indexOf(n)>=0||(a[n]=t[n]);return a}(t,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)n=i[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=e.createContext({}),p=function(t){var l=e.useContext(s),n=l;return t&&(n="function"==typeof t?t(l):u(u({},l),t)),n},o=function(t){var l=p(t.components);return e.createElement(s.Provider,{value:l},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},b=e.forwardRef((function(t,l){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,o=r(t,["components","mdxType","originalType","parentName"]),c=p(n),b=a,g=c["".concat(s,".").concat(b)]||c[b]||m[b]||i;return n?e.createElement(g,u(u({ref:l},o),{},{components:n})):e.createElement(g,u({ref:l},o))}));function g(t,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof t||a){var i=n.length,u=new Array(i);u[0]=b;var r={};for(var s in l)hasOwnProperty.call(l,s)&&(r[s]=l[s]);r.originalType=t,r[c]="string"==typeof t?t:a,u[1]=r;for(var p=2;p<i;p++)u[p]=n[p];return e.createElement.apply(null,u)}return e.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5512:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>s,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var e=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},u="Ubuntu \u5b89\u88c5\u6559\u7a0b\uff08\u865a\u62df\u673a\uff09",r={unversionedId:"ubuntu_install_vm",id:"ubuntu_install_vm",title:"Ubuntu \u5b89\u88c5\u6559\u7a0b\uff08\u865a\u62df\u673a\uff09",description:"VMware\u5b89\u88c5",source:"@site/docs/ubuntu_install_vm.md",sourceDirName:".",slug:"/ubuntu_install_vm",permalink:"/docs/ubuntu_install_vm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ubuntu_install_vm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"\u5173\u4e8eUbuntu\u7684\u5b89\u88c5",permalink:"/docs/about_ubuntu"},next:{title:"Ubuntu \u5b89\u88c5\u6559\u7a0b\uff08\u53cc\u7cfb\u7edf\uff09",permalink:"/docs/ubuntu_install_dual"}},s={},p=[{value:"VMware\u5b89\u88c5",id:"vmware\u5b89\u88c5",level:2},{value:"Ubuntu\u955c\u50cf\u4e0b\u8f7d",id:"ubuntu\u955c\u50cf\u4e0b\u8f7d",level:2},{value:"\u865a\u62df\u673a\u914d\u7f6e",id:"\u865a\u62df\u673a\u914d\u7f6e",level:2},{value:"1.\u65b0\u5efa\u865a\u62df\u673a",id:"1\u65b0\u5efa\u865a\u62df\u673a",level:3},{value:"1.1 \u9009\u62e9\u81ea\u5b9a\u4e49",id:"11-\u9009\u62e9\u81ea\u5b9a\u4e49",level:4},{value:"1.2 \u76f4\u63a5\u4e0b\u4e00\u6b65",id:"12-\u76f4\u63a5\u4e0b\u4e00\u6b65",level:4},{value:"1.3 \u9009\u62e9\u7a0d\u540e\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf",id:"13-\u9009\u62e9\u7a0d\u540e\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf",level:4},{value:"1.4 \u9009\u62e9Linux \u7248\u672cUbuntu64\u4f4d",id:"14-\u9009\u62e9linux-\u7248\u672cubuntu64\u4f4d",level:4},{value:"1.5 \u865a\u62df\u673a\u540d\u79f0\u4e0e\u5b89\u88c5\u4f4d\u7f6e\u6309\u9700\u586b\u5199",id:"15-\u865a\u62df\u673a\u540d\u79f0\u4e0e\u5b89\u88c5\u4f4d\u7f6e\u6309\u9700\u586b\u5199",level:4},{value:"1.6 \u5904\u7406\u5668\u6309\u9700\u914d\u7f6e",id:"16-\u5904\u7406\u5668\u6309\u9700\u914d\u7f6e",level:4},{value:"1.7 \u5185\u5b58\u6309\u9700\u914d\u7f6e",id:"17-\u5185\u5b58\u6309\u9700\u914d\u7f6e",level:4},{value:"1.8 \u9009\u62e9\u4f7f\u7528\u7f51\u7edc\u5730\u5740\u8f6c\u6362",id:"18-\u9009\u62e9\u4f7f\u7528\u7f51\u7edc\u5730\u5740\u8f6c\u6362",level:4},{value:"1.9 \u9009\u62e9LSI Logic",id:"19-\u9009\u62e9lsi-logic",level:4},{value:"1.10 \u9009\u62e9SCSI",id:"110-\u9009\u62e9scsi",level:4},{value:"1.11 \u9009\u62e9\u521b\u5efa\u65b0\u865a\u62df\u78c1\u76d8",id:"111-\u9009\u62e9\u521b\u5efa\u65b0\u865a\u62df\u78c1\u76d8",level:4},{value:"1.12 \u78c1\u76d8\u5bb9\u91cf\u6309\u9700\u8bbe\u7f6e \u9009\u62e9\u5c06\u865a\u62df\u78c1\u76d8\u62c6\u5206\u6210\u591a\u4e2a\u6587\u4ef6",id:"112-\u78c1\u76d8\u5bb9\u91cf\u6309\u9700\u8bbe\u7f6e-\u9009\u62e9\u5c06\u865a\u62df\u78c1\u76d8\u62c6\u5206\u6210\u591a\u4e2a\u6587\u4ef6",level:4},{value:"1.13 \u76f4\u63a5\u4e0b\u4e00\u6b65",id:"113-\u76f4\u63a5\u4e0b\u4e00\u6b65",level:4},{value:"1.14 \u786e\u8ba4\u8bbe\u7f6e\u65e0\u8bef \u70b9\u51fb\u5b8c\u6210",id:"114-\u786e\u8ba4\u8bbe\u7f6e\u65e0\u8bef-\u70b9\u51fb\u5b8c\u6210",level:4},{value:"2.\u914d\u7f6e\u6620\u50cf\u6587\u4ef6",id:"2\u914d\u7f6e\u6620\u50cf\u6587\u4ef6",level:3},{value:"Ubuntu\u5b89\u88c5",id:"ubuntu\u5b89\u88c5",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"Ubuntu\u5378\u8f7d",id:"ubuntu\u5378\u8f7d",level:2}],o={toc:p};function c(t){let{components:l,...n}=t;return(0,a.kt)("wrapper",(0,e.Z)({},o,n,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ubuntu-\u5b89\u88c5\u6559\u7a0b\u865a\u62df\u673a"},"Ubuntu \u5b89\u88c5\u6559\u7a0b\uff08\u865a\u62df\u673a\uff09"),(0,a.kt)("h2",{id:"vmware\u5b89\u88c5"},"VMware\u5b89\u88c5"),(0,a.kt)("p",null,"\u81ea\u884c\u5b89\u88c5\u3002\u7565\u3002"),(0,a.kt)("h2",{id:"ubuntu\u955c\u50cf\u4e0b\u8f7d"},"Ubuntu\u955c\u50cf\u4e0b\u8f7d"),(0,a.kt)("p",null,"\u4ee5\u6e05\u534e\u6e90\u4e3a\u4f8b\u3002",(0,a.kt)("br",null),"\u6e05\u534e\u5927\u5b66\u5f00\u6e90\u8f6f\u4ef6\u955c\u50cf\u7ad9\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/"},"https://mirrors.tuna.tsinghua.edu.cn/")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/mirrors01.jpg",alt:"img"})),(0,a.kt)("p",null,"\u4e0b\u8f7dUbuntu18\u955c\u50cf\u6587\u4ef6\u3002\uff08\u6b64\u8fc7\u7a0b\u53ef\u80fd\u8017\u65f6\u8f83\u957f\uff0c\u6162\u6162\u7b49\u53ed\uff09"),(0,a.kt)("h2",{id:"\u865a\u62df\u673a\u914d\u7f6e"},"\u865a\u62df\u673a\u914d\u7f6e"),(0,a.kt)("h3",{id:"1\u65b0\u5efa\u865a\u62df\u673a"},"1.\u65b0\u5efa\u865a\u62df\u673a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/create-new-vm.jpg",alt:"img"})),(0,a.kt)("h4",{id:"11-\u9009\u62e9\u81ea\u5b9a\u4e49"},"1.1 \u9009\u62e9\u81ea\u5b9a\u4e49"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-1.png",alt:"img"})),(0,a.kt)("h4",{id:"12-\u76f4\u63a5\u4e0b\u4e00\u6b65"},"1.2 \u76f4\u63a5\u4e0b\u4e00\u6b65"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-2.png",alt:"img"})),(0,a.kt)("h4",{id:"13-\u9009\u62e9\u7a0d\u540e\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf"},"1.3 \u9009\u62e9\u7a0d\u540e\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-3.png",alt:"img"})),(0,a.kt)("h4",{id:"14-\u9009\u62e9linux-\u7248\u672cubuntu64\u4f4d"},"1.4 \u9009\u62e9Linux \u7248\u672cUbuntu64\u4f4d"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-4.png",alt:"img"})),(0,a.kt)("h4",{id:"15-\u865a\u62df\u673a\u540d\u79f0\u4e0e\u5b89\u88c5\u4f4d\u7f6e\u6309\u9700\u586b\u5199"},"1.5 \u865a\u62df\u673a\u540d\u79f0\u4e0e\u5b89\u88c5\u4f4d\u7f6e\u6309\u9700\u586b\u5199"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-5.png",alt:"img"})),(0,a.kt)("h4",{id:"16-\u5904\u7406\u5668\u6309\u9700\u914d\u7f6e"},"1.6 \u5904\u7406\u5668\u6309\u9700\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0d\u8981\u8d85\u8fc7\u7535\u8111\u914d\u7f6e\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u540e\u671f\u8fd8\u53ef\u66f4\u6539\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-6.png",alt:"img"})),(0,a.kt)("h4",{id:"17-\u5185\u5b58\u6309\u9700\u914d\u7f6e"},"1.7 \u5185\u5b58\u6309\u9700\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0d\u8981\u8d85\u8fc7\u7535\u8111\u5185\u5b58\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u540e\u671f\u8fd8\u53ef\u66f4\u6539\u3002\u5efa\u8bae\u4e0d\u8981\u8d85\u8fc7\u7535\u8111\u5185\u5b58\u7684\u4e00\u534a\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-7.png",alt:"img"})),(0,a.kt)("h4",{id:"18-\u9009\u62e9\u4f7f\u7528\u7f51\u7edc\u5730\u5740\u8f6c\u6362"},"1.8 \u9009\u62e9\u4f7f\u7528\u7f51\u7edc\u5730\u5740\u8f6c\u6362"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-8.png",alt:"img"})),(0,a.kt)("h4",{id:"19-\u9009\u62e9lsi-logic"},"1.9 \u9009\u62e9LSI Logic"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-9.png",alt:"img"})),(0,a.kt)("h4",{id:"110-\u9009\u62e9scsi"},"1.10 \u9009\u62e9SCSI"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-10.png",alt:"img"})),(0,a.kt)("h4",{id:"111-\u9009\u62e9\u521b\u5efa\u65b0\u865a\u62df\u78c1\u76d8"},"1.11 \u9009\u62e9\u521b\u5efa\u65b0\u865a\u62df\u78c1\u76d8"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-11.png",alt:"img"})),(0,a.kt)("h4",{id:"112-\u78c1\u76d8\u5bb9\u91cf\u6309\u9700\u8bbe\u7f6e-\u9009\u62e9\u5c06\u865a\u62df\u78c1\u76d8\u62c6\u5206\u6210\u591a\u4e2a\u6587\u4ef6"},"1.12 \u78c1\u76d8\u5bb9\u91cf\u6309\u9700\u8bbe\u7f6e \u9009\u62e9\u5c06\u865a\u62df\u78c1\u76d8\u62c6\u5206\u6210\u591a\u4e2a\u6587\u4ef6"),(0,a.kt)("p",null,"\u78c1\u76d8\u5bb9\u91cf40\u5de6\u53f3\u591f\u7528\uff0c\u60f3\u8981\u66f4\u591a\u770b\u4f60\u5fc3\u60c5",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-12.png",alt:"img"})),(0,a.kt)("h4",{id:"113-\u76f4\u63a5\u4e0b\u4e00\u6b65"},"1.13 \u76f4\u63a5\u4e0b\u4e00\u6b65"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-13.png",alt:"img"})),(0,a.kt)("h4",{id:"114-\u786e\u8ba4\u8bbe\u7f6e\u65e0\u8bef-\u70b9\u51fb\u5b8c\u6210"},"1.14 \u786e\u8ba4\u8bbe\u7f6e\u65e0\u8bef \u70b9\u51fb\u5b8c\u6210"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-14.png",alt:"img"})),(0,a.kt)("h3",{id:"2\u914d\u7f6e\u6620\u50cf\u6587\u4ef6"},"2.\u914d\u7f6e\u6620\u50cf\u6587\u4ef6"),(0,a.kt)("p",null,"\u70b9\u51fb\u201c\u7f16\u8f91\u865a\u62df\u673a\u8bbe\u7f6e\u201d\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-1.jpg",alt:"img"}),(0,a.kt)("br",null),"\u70b9\u51fb\u201cCD/DVD (SATA)\u201d\uff0c\u9009\u62e9\u201c\u4f7f\u7528ISO\u6620\u50cf\u6587\u4ef6\u201d\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-2.png",alt:"img"}),(0,a.kt)("br",null),"\u70b9\u51fb\u201c\u6d4f\u89c8\u201d\uff0c\u627e\u5230\u521a\u521a\u4e0b\u8f7d\u597d\u7684ISO\u6620\u50cf\u6587\u4ef6\uff0c\u70b9\u51fb\u201c\u6253\u5f00\u201d\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-3.png",alt:"img"}),(0,a.kt)("br",null),"\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-4.png",alt:"img"})),(0,a.kt)("h2",{id:"ubuntu\u5b89\u88c5"},"Ubuntu\u5b89\u88c5"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b21\u5f00\u542f\u865a\u62df\u673a\uff0c\u81ea\u52a8\u8fdb\u5165\u5b89\u88c5\u7a0b\u5e8f\u3002",(0,a.kt)("br",null),"\u8bed\u8a00\u53ef\u4ee5\u9009\u62e9\u4e2d\u6587\uff0c\u4e5f\u53ef\u4ee5\u82f1\u6587\u5b89\u88c5\uff0c\u8bed\u8a00\u540e\u671f\u8fd8\u53ef\u66f4\u6539\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-1.png",alt:"img"}),(0,a.kt)("br",null),"\u7136\u540e\u4e00\u8defcontinue\u3002",(0,a.kt)("br",null),'\u70b9\u51fb\u201cInstall Now"\u3002',(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-2.png",alt:"img"}),(0,a.kt)("br",null),"\u70b9\u51fbcontinue\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-3.png",alt:"img"}),(0,a.kt)("br",null),"\u70b9\u51fb\u4e2d\u56fd\u5730\u56fe\u3002\u70b9\u54ea\u90fd\u662fshanghai",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-4.png",alt:"img"}),(0,a.kt)("br",null),"\u586b\u5199\u4fe1\u606f",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-5.png",alt:"img"}),(0,a.kt)("br",null),"\u5b89\u88c5\u4e2d\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-6.png",alt:"img"}),(0,a.kt)("br",null),"\u5b89\u88c5\u5b8c\u6210\u540e\u91cd\u65b0\u542f\u52a8\u3002",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-7.png",alt:"img"}),(0,a.kt)("br",null),"\u82e5\u957f\u65f6\u95f4\u672a\u6210\u529f\u91cd\u65b0\u542f\u52a8\uff0c\u53ef\u4ee5\u5728VMware\u5f3a\u5236\u5173\u6389\u6b64\u865a\u62df\u673a\uff0c\u7136\u540e\u518d\u5f00\u673a\u3002",(0,a.kt)("br",null),"\u91cd\u542f\u540e\uff0c\u51fa\u73b0\u6b64\u754c\u9762\uff0c\u6309\u201cEnter\u201d",(0,a.kt)("br",null),(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-9.png",alt:"img"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5f00\u673a\u540e\u53d1\u73b0\uff0c\u55ef\uff0c\u8fd9\u6837\u2193"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-10.png",alt:"img"})),(0,a.kt)("p",null,"\u55ef\uff0c\u4f60\u53ef\u4ee5\u81ea\u884c\u4e0a\u7f51\u641c\u7d22\u5982\u4f55\u5b89\u88c5Vmware Tools"),(0,a.kt)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u6253\u5f00\u7ec8\u7aef\uff0c\u8f93\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install open-vm-tools\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install open-vm-tools-desktop\n")),(0,a.kt)("p",null,"\u4e4b\u540e\u6700\u597d\u91cd\u542f\u4e00\u4e0b"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"ubuntu\u5378\u8f7d"},"Ubuntu\u5378\u8f7d"),(0,a.kt)("p",null,"\u5728\u5e93\u4e2d\u53f3\u51fb\u4f60\u60f3\u8981\u5220\u9664\u7684\u865a\u62df\u673a\uff0c\u5728\u201c\u7ba1\u7406\u201d\u4e2d\u70b9\u51fb\u201c\u4ece\u78c1\u76d8\u4e2d\u5220\u9664\u201d\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-8.png",alt:"img"})))}c.isMDXComponent=!0}}]);