"use strict";(self.webpackChunkai_docs=self.webpackChunkai_docs||[]).push([[8225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),o=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=o(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),s=r,m=d["".concat(i,".").concat(s)]||d[s]||k[s]||a;return n?l.createElement(m,u(u({ref:t},c),{},{components:n})):l.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:r,u[1]=p;for(var o=2;o<a;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var l=n(7462),r=(n(7294),n(3905));const a={},u="Tutorial 01",p={unversionedId:"ubuntu_01",id:"ubuntu_01",title:"Tutorial 01",description:"1.1 \u5217\u51fa\u6587\u4ef6\u548c\u76ee\u5f55",source:"@site/docs/ubuntu_01.md",sourceDirName:".",slug:"/ubuntu_01",permalink:"/docs/ubuntu_01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ubuntu_01.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Tutorial 00",permalink:"/docs/ubuntu_00"},next:{title:"Tutorial 02",permalink:"/docs/ubuntu_02"}},i={},o=[{value:"1.1 \u5217\u51fa\u6587\u4ef6\u548c\u76ee\u5f55",id:"11-\u5217\u51fa\u6587\u4ef6\u548c\u76ee\u5f55",level:2},{value:"ls (list)",id:"ls-list",level:3},{value:"1.2 \u521b\u5efa\u76ee\u5f55",id:"12-\u521b\u5efa\u76ee\u5f55",level:2},{value:"mkdir (make directory)",id:"mkdir-make-directory",level:3},{value:"1.3 \u66f4\u6539\u4e3a\u5176\u4ed6\u76ee\u5f55",id:"13-\u66f4\u6539\u4e3a\u5176\u4ed6\u76ee\u5f55",level:2},{value:"cd (change directory)",id:"cd-change-directory",level:3},{value:"1.4 \u76ee\u5f55 . \u548c ..",id:"14-\u76ee\u5f55--\u548c-",level:2},{value:"\u5f53\u524d\u76ee\u5f55\uff08.\uff09",id:"\u5f53\u524d\u76ee\u5f55",level:3},{value:"\u7236\u76ee\u5f55\uff08..\uff09",id:"\u7236\u76ee\u5f55",level:3},{value:"1.5 \u6253\u5370\u8def\u5f84",id:"15-\u6253\u5370\u8def\u5f84",level:2},{value:"pwd (print working directory)",id:"pwd-print-working-directory",level:3},{value:"\u4e86\u89e3\u8def\u5f84",id:"\u4e86\u89e3\u8def\u5f84",level:3},{value:"~ \uff08\u4e3b\u76ee\u5f55\uff09",id:"-\u4e3b\u76ee\u5f55",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-01"},"Tutorial 01"),(0,r.kt)("h2",{id:"11-\u5217\u51fa\u6587\u4ef6\u548c\u76ee\u5f55"},"1.1 \u5217\u51fa\u6587\u4ef6\u548c\u76ee\u5f55"),(0,r.kt)("h3",{id:"ls-list"},"ls (list)"),(0,r.kt)("p",null,"\u76f4\u63a5\u542f\u52a8\u7ec8\u7aef\u65f6\uff0c\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u5c31\u662f\u4e3b\u76ee\u5f55\u3002\u4e3b\u76ee\u5f55\u4e0e\u7528\u6237\u540d\u540c\u540d\uff0c\u4f8b\u5982\u6211\u7684\u662fmumu\uff0c\u8fd9\u662f\u4fdd\u5b58\u4e2a\u4eba\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\u7684\u5730\u65b9\u3002"),(0,r.kt)("p",null,"\u8981\u4e86\u89e3\u4e3b\u76ee\u5f55\u4e2d\u7684\u5185\u5bb9\uff0c\u8bf7\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-1.png",alt:"img"})),(0,r.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0cls \u4e0d\u4f1a\u5c06\u4e3b\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u5217\u51fa\uff0c\u4ec5\u9650\u4e8e\u540d\u79f0\u4e0d\u4ee5\u70b9\uff08.\uff09\u5f00\u5934\u7684\u90a3\u4e9b\u6587\u4ef6\u3002\u4ee5\u70b9\uff08.\uff09\u5f00\u5934\u7684\u4e3a\u9690\u85cf\u6587\u4ef6\uff0c\u901a\u5e38\u5305\u542b\u91cd\u8981\u7684\u7a0b\u5e8f\u914d\u7f6e\u4fe1\u606f\u3002\u5b83\u4eec\u662f\u9690\u85cf\u7684\uff0c\u56e0\u4e3a\u4f60\u4e0d\u5e94\u8be5\u66f4\u6539\uff0c\u9664\u975e\u4f60\u975e\u5e38\u719f\u6089Linux!!!"),(0,r.kt)("p",null,"\u5217\u51fa\u4e3b\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\uff0c\u5305\u62ec\u9690\u85cf\u6587\u4ef6\uff0c\u8bf7\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -a\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-2.png",alt:"img"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"12-\u521b\u5efa\u76ee\u5f55"},"1.2 \u521b\u5efa\u76ee\u5f55"),(0,r.kt)("h3",{id:"mkdir-make-directory"},"mkdir (make directory)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-3.png",alt:"img"})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e3b\u76ee\u5f55\u4e2d\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3ahungry\u7684\u5b50\u76ee\u5f55\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"13-\u66f4\u6539\u4e3a\u5176\u4ed6\u76ee\u5f55"},"1.3 \u66f4\u6539\u4e3a\u5176\u4ed6\u76ee\u5f55"),(0,r.kt)("h3",{id:"cd-change-directory"},"cd (change directory)"),(0,r.kt)("p",null,"\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},"cd xxx")," \u8868\u793a\u66f4\u6539\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u5230\u201cxxx\u201d\u3002\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u5c31\u662f\u4f60\u6240\u5728\u7684\u76ee\u5f55\uff0c\u5373\u4f60\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u8981\u66f4\u6539\u4e3a\u521a\u521a\u521b\u5efa\u7684\u76ee\u5f55\uff0c\u8bf7\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd hungry\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"14-\u76ee\u5f55--\u548c-"},"1.4 \u76ee\u5f55 . \u548c .."),(0,r.kt)("p",null,"\u5728\u5f53\u524d\u76ee\u5f55\uff08hungry\uff09\u4e2d\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -a\n")),(0,r.kt)("p",null,"\u5982\u4f60\u6240\u89c1\uff0c\u5728\u76ee\u5f55\u4e2d\uff08\u4ee5\u53ca\u6240\u6709\u5176\u4ed6\u76ee\u5f55\u4e5f\u5982\u6b64\uff09\uff0c\u6709\u4e24\u4e2a\u7279\u6b8a\u7684\u76ee\u5f55\u79f0\u4e3a\uff08.\uff09 \u548c\uff08..)"),(0,r.kt)("h3",{id:"\u5f53\u524d\u76ee\u5f55"},"\u5f53\u524d\u76ee\u5f55\uff08.\uff09"),(0,r.kt)("p",null,"\u5728Linux\u4e2d\uff0c\uff08.\uff09\u8868\u793a\u5f53\u524d\u76ee\u5f55\uff0c\u56e0\u6b64\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd .\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1acd \u548c . \u4e4b\u95f4\u6709\u4e00\u4e2a\u7a7a\u683c")),(0,r.kt)("p",null,"\u610f\u5473\u7740\u7559\u5728\u539f\u5730\uff08hungry\uff09"),(0,r.kt)("p",null,"\u4e4d\u4e00\u770b\uff0c\u8fd9\u4f3c\u4e4e\u4e0d\u662f\u5f88\u6709\u7528\uff0c\u4f46\u662f\u4f7f\u7528 \uff08.\uff09 \u4f5c\u4e3a\u5f53\u524d\u76ee\u5f55\u7684\u540d\u79f0\u5c06\u8282\u7701\u5927\u91cf\u952e\u5165\u3002"),(0,r.kt)("h3",{id:"\u7236\u76ee\u5f55"},"\u7236\u76ee\u5f55\uff08..\uff09"),(0,r.kt)("p",null,"\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\n")),(0,r.kt)("p",null,"\u4f60\u5c06\u8fd4\u56de\u5230\u4e0a\u4e00\u7ea7\u76ee\u5f55\uff0c\u5373\u4e3b\u76ee\u5f55\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u952e\u5165\u4e0d\u5e26\u53c2\u6570\u7684cd\u603b\u662f\u4f1a\u8ba9\u4f60\u56de\u5230\u4f60\u7684\u4e3b\u76ee\u5f55\u3002\u5982\u679c\u4f60\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u8ff7\u8def\uff0c\u8fd9\u5c06\u975e\u5e38\u6709\u7528\u3002")),(0,r.kt)("h2",{id:"15-\u6253\u5370\u8def\u5f84"},"1.5 \u6253\u5370\u8def\u5f84"),(0,r.kt)("h3",{id:"pwd-print-working-directory"},"pwd (print working directory)"),(0,r.kt)("p",null,"\u8def\u5f84\u4f7f\u4f60\u80fd\u591f\u786e\u5b9a\u76f8\u5bf9\u4e8e\u6574\u4e2a\u6587\u4ef6\u7cfb\u7edf\u7684\u4f4d\u7f6e\u3002\u4f8b\u5982\uff0c\u8981\u627e\u51fahungry\u7684\u7edd\u5bf9\u8def\u5f84\u540d\uff0c\u8bf7\u952e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"cd hungry")," \u4ee5\u66f4\u6539\u81f3hungry\u76ee\u5f55\uff0c\u7136\u540e\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pwd\n")),(0,r.kt)("p",null,"\u5b8c\u6574\u7684\u8def\u5f84\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/mumu/hungry")),(0,r.kt)("h3",{id:"\u4e86\u89e3\u8def\u5f84"},"\u4e86\u89e3\u8def\u5f84"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u5728hungry\u76ee\u5f55\u4e2d\u65b0\u5efa\u4e00\u4e2aapple\u5b50\u76ee\u5f55\uff0c\u5e76\u8fd4\u56de\u4e3b\u76ee\u5f55\uff0c\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd apple\n")),(0,r.kt)("p",null,"\u4f1a\u6536\u5230\u5982\u4e0b\u6d88\u606f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-4.png",alt:"img"})),(0,r.kt)("p",null,"\u539f\u56e0\u662f\uff0capple\u4e0d\u5728\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u4e2d\u3002\u5bf9\u4e0d\u5728\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\uff08\u6216\u76ee\u5f55\uff09\u4f7f\u7528\u547d\u4ee4\uff0c\u4f60\u5fc5\u987b cd \u5230\u6b63\u786e\u7684\u76ee\u5f55\uff0c\u6216\u6307\u5b9a\u5176\u5b8c\u6574\u8def\u5f84\u3002\u60f3\u8981\u5230\u8fbeapple\uff0c\u4f60\u5fc5\u987b\u952e\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd hungry/apple\n")),(0,r.kt)("h3",{id:"-\u4e3b\u76ee\u5f55"},"~ \uff08\u4e3b\u76ee\u5f55\uff09"),(0,r.kt)("p",null,"\u4e3b\u76ee\u5f55\u4e5f\u53ef\u4ee5\u7528\u6ce2\u6d6a\u53f7 ~ \u5b57\u7b26\u8868\u793a\u3002\u5b83\u53ef\u7528\u4e8e\u6307\u5b9a\u4ece\u4e3b\u76ee\u5f55\u5f00\u59cb\u7684\u8def\u5f84\u3002\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls ~/hungry\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u610f\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ls"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u6587\u4ef6\u548c\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ls -a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u6240\u6709\u6587\u4ef6\u548c\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mkdir"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cd xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u4e3a\u6307\u5b9a\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cd"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u4e3a\u4e3b\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cd ~"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u4e3a\u4e3b\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cd .."),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u4e3a\u7236\u76ee\u5f55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pwd"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5370\u5f53\u524d\u8def\u5f84")))))}d.isMDXComponent=!0}}]);