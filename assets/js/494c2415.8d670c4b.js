"use strict";(self.webpackChunkai_docs=self.webpackChunkai_docs||[]).push([[2125],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),o=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=o(a),c=l,s=d["".concat(i,".").concat(c)]||d[c]||k[c]||r;return a?n.createElement(s,u(u({ref:e},m),{},{components:a})):n.createElement(s,u({ref:e},m))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,u=new Array(r);u[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:l,u[1]=p;for(var o=2;o<r;o++)u[o]=a[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8222:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={},u="Tutorial 03",p={unversionedId:"ubuntu_03",id:"ubuntu_03",title:"Tutorial 03",description:"3.1 \u901a\u914d\u7b26",source:"@site/docs/ubuntu_03.md",sourceDirName:".",slug:"/ubuntu_03",permalink:"/docs/ubuntu_03",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ubuntu_03.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Tutorial 02",permalink:"/docs/ubuntu_02"},next:{title:"Tutorial 04",permalink:"/docs/ubuntu_04"}},i={},o=[{value:"3.1 \u901a\u914d\u7b26",id:"31-\u901a\u914d\u7b26",level:2},{value:"* \u901a\u914d\u7b26",id:"-\u901a\u914d\u7b26",level:3},{value:"? \u901a\u914d\u7b26",id:"-\u901a\u914d\u7b26-1",level:3},{value:"3.2 \u6587\u4ef6\u540d\u7ea6\u5b9a",id:"32-\u6587\u4ef6\u540d\u7ea6\u5b9a",level:2},{value:"3.3 \u83b7\u53d6\u5e2e\u52a9",id:"33-\u83b7\u53d6\u5e2e\u52a9",level:2},{value:"\u5728\u7ebf\u624b\u518c",id:"\u5728\u7ebf\u624b\u518c",level:3},{value:"help",id:"help",level:3},{value:"3.4 \u66f4\u6539\u8bbf\u95ee\u6743\u9650",id:"34-\u66f4\u6539\u8bbf\u95ee\u6743\u9650",level:2},{value:"chmod ()",id:"chmod-",level:3},{value:"3.5 \u7ec8\u6b62\u8fdb\u7a0b",id:"35-\u7ec8\u6b62\u8fdb\u7a0b",level:2},{value:"^C",id:"c",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4",id:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4",level:2}],m={toc:o};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tutorial-03"},"Tutorial 03"),(0,l.kt)("h2",{id:"31-\u901a\u914d\u7b26"},"3.1 \u901a\u914d\u7b26"),(0,l.kt)("h3",{id:"-\u901a\u914d\u7b26"},"* \u901a\u914d\u7b26"),(0,l.kt)("p",null,"\u5b57\u7b26 * \u79f0\u4e3a\u901a\u914d\u7b26\uff0c\u5728\u6587\u4ef6\uff08\u6216\u76ee\u5f55\uff09\u540d\u79f0\u4e2d\u5339\u914d\u4efb\u4f55\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls ab*\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u4e2d\u6240\u6709\u4ee5ab\u5f00\u5934\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-1.png",alt:"img"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-2.png",alt:"img"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls *fg\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u5217\u51fa\u5f53\u524d\u76ee\u5f55\u4e2d\u6240\u6709\u4ee5fg\u5f00\u5934\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u3002"),(0,l.kt)("h3",{id:"-\u901a\u914d\u7b26-1"},"? \u901a\u914d\u7b26"),(0,l.kt)("p",null,"\u5b57\u7b26 ? \u53ea\u5339\u914d\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-3.png",alt:"img"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"32-\u6587\u4ef6\u540d\u7ea6\u5b9a"},"3.2 \u6587\u4ef6\u540d\u7ea6\u5b9a"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u76ee\u5f55\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u6587\u4ef6\u3002\u547d\u540d\u6587\u4ef6\u7684\u89c4\u5219\u548c\u7ea6\u5b9a\u4e5f\u9002\u7528\u4e8e\u76ee\u5f55\u3002"),(0,l.kt)("p",null,"\u5728\u547d\u540d\u6587\u4ef6\u4e2d\uff0c\u5177\u6709\u7279\u6b8a\u542b\u4e49\u7684\u5b57\u7b26\uff0c\u4f8b\u5982 / * \u548c % \uff0c\u5e94\u907f\u514d\u4f7f\u7528\u3002\u6b64\u5916\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u907f\u514d\u5728\u540d\u79f0\u4e2d\u4f7f\u7528\u7a7a\u683c"),"\u3002\u6700\u5b89\u5168\u7684\u547d\u540d\u65b9\u5f0f\u662f\u4ec5\u4f7f\u7528\u5b57\u6bcd \u6570\u5b57 \u4ee5\u53ca _\uff08\u4e0b\u5212\u7ebf\uff09\u548c .\uff08\u70b9\uff09\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"33-\u83b7\u53d6\u5e2e\u52a9"},"3.3 \u83b7\u53d6\u5e2e\u52a9"),(0,l.kt)("h3",{id:"\u5728\u7ebf\u624b\u518c"},"\u5728\u7ebf\u624b\u518c"),(0,l.kt)("p",null,"\u4ee5ls\u547d\u4ee4\u4e3a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"whatis ls\n")),(0,l.kt)("p",null,"\u63d0\u4f9b\u547d\u4ee4\u7684\u5355\u884c\u63cf\u8ff0\uff0c\u4f46\u7701\u7565\u6709\u5173\u9009\u9879\u7b49\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-4.png",alt:"img"})),(0,l.kt)("p",null,"\u5728\u7ebf\u624b\u518c\u63d0\u4f9b\u6709\u5173\u5927\u591a\u6570\u547d\u4ee4\u7684\u4fe1\u606f\u3002\u624b\u518c\u4f1a\u544a\u8bc9\u4f60\u7279\u5b9a\u547d\u4ee4\u53ef\u4ee5\u91c7\u7528\u54ea\u4e9b\u9009\u9879\uff0c\u4ee5\u53ca\u5982\u4f55\u91c7\u7528\u9009\u9879\u4fee\u6539\u547d\u4ee4\u7684\u884c\u4e3a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"man ls\n")),(0,l.kt)("p",null,"\u663e\u793a\u6709\u5173ls\u547d\u4ee4\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-5.png",alt:"img"})),(0,l.kt)("h3",{id:"help"},"help"),(0,l.kt)("p",null,"\u4ee5ls\u547d\u4ee4\u4e3a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls --help\n")),(0,l.kt)("p",null,"\u5373\u53ef\u83b7\u53d6\u5e2e\u52a9\u3002\u4e2a\u4eba\u63a8\u8350\u8fd9\u4e2a\u529e\u6cd5\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"34-\u66f4\u6539\u8bbf\u95ee\u6743\u9650"},"3.4 \u66f4\u6539\u8bbf\u95ee\u6743\u9650"),(0,l.kt)("h3",{id:"chmod-"},"chmod ()"),(0,l.kt)("p",null,"\u53ea\u6709\u6587\u4ef6\u7684\u6240\u6709\u8005\u53ef\u4ee5\u4f7f\u7528 chmod \u66f4\u6539\u6743\u9650\u3002chmod\u7684\u9009\u9879\u5982\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u610f\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u"),(0,l.kt)("td",{parentName:"tr",align:null},"user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"g"),(0,l.kt)("td",{parentName:"tr",align:null},"group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"o"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5176\u4ed6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"a"),(0,l.kt)("td",{parentName:"tr",align:null},"all")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bfb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"w"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5199\u5165\uff08\u548c\u5220\u9664\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\uff08\u548c\u8bbf\u95ee\u76ee\u5f55\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u6743\u9650")))),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u7ed9\u67d0\u6587\u4ef6\u6dfb\u52a0\u6267\u884c\u6743\u9650\uff0c\u952e\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x file\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"35-\u7ec8\u6b62\u8fdb\u7a0b"},"3.5 \u7ec8\u6b62\u8fdb\u7a0b"),(0,l.kt)("h3",{id:"c"},"^C"),(0,l.kt)("p",null,"\u6709\u65f6\u9700\u8981\u7ec8\u6b62\u8fdb\u7a0b\uff08\u4f8b\u5982\uff0c\u5f53\u6267\u884c\u7a0b\u5e8f\u5904\u4e8e\u65e0\u9650\u5faa\u73af\u4e2d\uff09"),(0,l.kt)("p",null,"\u82e5\u8981\u7ec8\u6b62\u5728\u524d\u53f0\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u8bf7\u952e\u5165 ^C\uff08\u6309",(0,l.kt)("strong",{parentName:"p"},"Ctrl+C"),"\uff09\u3002"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u7b26/\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u610f\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4efb\u610f\u6570\u91cf\u7684\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"whatis cmd"),(0,l.kt)("td",{parentName:"tr",align:null},"cmd\u547d\u4ee4\u7684\u7b80\u8981\u8bf4\u660e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"man cmd"),(0,l.kt)("td",{parentName:"tr",align:null},"cmd\u547d\u4ee4\u7684\u8be6\u7ec6\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chmod"),(0,l.kt)("td",{parentName:"tr",align:null},"\u66f4\u6539\u6743\u9650")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"^C"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec8\u6b62\u8fdb\u7a0b")))),(0,l.kt)("h2",{id:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4"},"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u610f\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poweroff"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5173\u673a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reboot"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91cd\u542f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shutdown -h n"),(0,l.kt)("td",{parentName:"tr",align:null},"n\u5206\u949f\u4e2d\u81ea\u52a8\u5173\u673a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shutdown -r n"),(0,l.kt)("td",{parentName:"tr",align:null},"n\u5206\u949f\u540e\u81ea\u52a8\u91cd\u542f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shutdown -c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u5173\u673a/\u91cd\u542f")))))}d.isMDXComponent=!0}}]);