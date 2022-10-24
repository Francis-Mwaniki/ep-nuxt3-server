import{_ as y}from"./Terms.a3230a6d.js";import{_ as k}from"./toggleMode.969af69d.js";import{q as M,i as g,F as w,o as c,l as h,x as i,v as e,t as u,A as p,G as v,y as x,D as a,H as f,I as _,C as z,E as H}from"./entry.5e531372.js";import{_ as C}from"./catoon.37c65e86.js";const j={setup(){let l=g(!1),t=g(!1),s=g(""),r=g(!1),b=g(""),n=g([]),m=g([]);return{auth:l,msg:s,id:b,closeAccount:r,mode:t,users:n,songs:m}},async mounted(){try{const l=await fetch("/api/user/",{credentials:"include",headers:{"Content-type":"application/json"}});if(l.ok){const t=await l.json();this.auth=!0,this.msg=t.message.name,this.id=t.message.email,console.log(t)}else{const t=await l.json();this.msg=t.message,this.auth=!1,console.log(t)}}catch(l){console.log(l)}this.getAllUsers(),this.getAllSongs()},methods:{async logout(){let t=await fetch("/api/user/AdminLogout",{method:"POST",credentials:"include",headers:{"Content-type":"application/json"}});if(t.ok){let s=await t.json();w().success(s.message),setTimeout(async()=>{await this.$router.push("/AdminLogin")},6e3),location.reload()}else{let s=await t.json();w().error(s.message),await this.$router.push("/AdminRegister"),location.reload()}},async getAllSongs(){const t=await fetch("/api/s1/Songs",{method:"GET",headers:{"Content-type":"application/json"}});if(t.ok){const s=await t.json();this.songs=[...this.songs,s]}else{const s=await t.json();console.log(s)}},async getAllUsers(){const t=await fetch("/api/v1/getUsers",{method:"GET",headers:{"Content-type":"application/json"}});if(t.ok){const s=await t.json();this.users=[...this.users,s]}else{const s=await t.json();console.log(s)}},toggleMode(){this.mode=!this.mode}},components:{Terms:y,ToggleMode:k},computed:{}},S={key:0,class:"flex justify-center flex-col gap-y-3 items-center mx-auto p-3 text-slate-900 text-3xl dark:bg-slate-800 bg-slate-400"},B={key:1,class:"font-sans bg-grey-lighter flex flex-col min-h-screen w-full dark:bg-slate-900 bg-slate-200"},L={class:"dark:bg-slate-800 bg-slate-200"},T={class:"container mx-auto px-4"},V={class:"flex items-center md:justify-between py-4"},U=e("span",{class:"sr-only"},"Close main menu",-1),D={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 fill-black",viewBox:"0 0 20 20",fill:"currentColor"},E=e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),N=[E],R={key:1,class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},G=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),O=[G],P={class:"w-1/4 md:w-auto md:flex text-right"},F=e("div",null,[e("img",{class:"inline-block h-8 w-8 rounded-full bg-slate-700 dark:bg-slate-800",src:C,alt:""})],-1),q={class:"hidden md:block md:flex md:items-center ml-2 dark:text-white"},I={class:"dark:text-white text-black text-sm mr-1"},Y=e("div",null,[e("svg",{class:"fill-current dark:text-white text-gray-700 h-4 w-4 block opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"})])],-1),J={class:"block md:hidden dark:bg-slate-800 bg-slate-200 pl-32"},K=e("div",{class:"flex"},[e("a",{href:"#",class:"no-underline dark:text-white text-black md:text-white flex items-center py-4 border-b border-blue-dark"},[e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{"fill-rule":"evenodd",d:"M3.889 3h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H3.89A.9.9 0 0 1 3 12.09V3.91A.9.9 0 0 1 3.889 3zM3.889 15h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H3.89C3.398 21 3 20.616 3 20.143v-4.286c0-.473.398-.857.889-.857zM13.889 11h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H13.89a.9.9 0 0 1-.889-.91v-8.18a.9.9 0 0 1 .889-.91zM13.889 3h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H13.89C13.398 9 13 8.616 13 8.143V3.857c0-.473.398-.857.889-.857z"})]),a(" Dashboard ")])],-1),Q={class:"flex"},W=e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M8 7h10V5l4 3.5-4 3.5v-2H8V7zm-6 8.5L6 12v2h10v3H6v2l-4-3.5z","fill-rule":"nonzero"})],-1),X={class:"flex"},Z={class:"relative inline-block text-left pt-2"},$=e("svg",{class:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})],-1),ee={class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"},te={class:"py-1 dark:bg-slate-800 bg-slate-300 border-white rounded-md",role:"none"},se={method:"POST",action:"#",role:"none"},oe={class:"flex"},re=e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M11 12h2v2h9s-.149-4.459-.2-5.854C21.75 6.82 21.275 6 19.8 6h-3.208l-1.197-2.256C15.064 3.121 14.951 3 14.216 3H9.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H4.199c-1.476 0-1.945.82-2 2.146C2.145 9.473 2 14 2 14h9v-2zM9.649 4.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L14.924 6h-5.85l.575-1.084zM13 17h-2v-2H2.5s.124 1.797.199 3.322c.031.633.218 1.678 1.8 1.678H19.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H13v2z","fill-rule":"nonzero"})],-1),ae={class:"flex"},le=e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M18.783 12c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615-.58.172-1.14.403-1.671.691.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 3.6 9.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643.173.58.404 1.14.691 1.672 1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711.532.288 1.092.52 1.672.693.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883.287-.532.52-1.092.692-1.672-.973-.569-1.619-1.395-1.619-2.442zM12 15.652a3.653 3.653 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z","fill-rule":"nonzero"})],-1),ie={class:"hidden bg-blue-dark md:block dark:bg-slate-800 bg-indigo-600 md:border-b"},ne={class:"container mx-auto px-4"},de={class:"md:flex"},ce=e("div",{class:"flex -mb-px mr-8"},[e("a",{href:"#",class:"no-underline dark:text-white text-gray-600 md:text-white flex items-center py-4 border-b border-blue-dark"},[e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{"fill-rule":"evenodd",d:"M3.889 3h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H3.89A.9.9 0 0 1 3 12.09V3.91A.9.9 0 0 1 3.889 3zM3.889 15h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H3.89C3.398 21 3 20.616 3 20.143v-4.286c0-.473.398-.857.889-.857zM13.889 11h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H13.89a.9.9 0 0 1-.889-.91v-8.18a.9.9 0 0 1 .889-.91zM13.889 3h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H13.89C13.398 9 13 8.616 13 8.143V3.857c0-.473.398-.857.889-.857z"})]),a(" Dashboard ")])],-1),he={class:"flex -mb-px mr-8"},xe=e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M8 7h10V5l4 3.5-4 3.5v-2H8V7zm-6 8.5L6 12v2h10v3H6v2l-4-3.5z","fill-rule":"nonzero"})],-1),ge={class:"flex -mb-px mr-8"},me={class:"relative inline-block text-left pt-2"},ue=e("svg",{class:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})],-1),pe={class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"menu-button",tabindex:"-1"},ve={class:"py-1 dark:bg-slate-800 bg-slate-300 border border-white rounded-md",role:"none"},be={method:"POST",action:"#",role:"none"},we={class:"flex -mb-px mr-8"},fe=e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M11 12h2v2h9s-.149-4.459-.2-5.854C21.75 6.82 21.275 6 19.8 6h-3.208l-1.197-2.256C15.064 3.121 14.951 3 14.216 3H9.783c-.735 0-.847.121-1.179.744-.165.311-.7 1.318-1.196 2.256H4.199c-1.476 0-1.945.82-2 2.146C2.145 9.473 2 14 2 14h9v-2zM9.649 4.916c.23-.432.308-.516.817-.516h3.067c.509 0 .588.084.816.516L14.924 6h-5.85l.575-1.084zM13 17h-2v-2H2.5s.124 1.797.199 3.322c.031.633.218 1.678 1.8 1.678H19.5c1.582 0 1.765-1.047 1.8-1.678.087-1.568.2-3.322.2-3.322H13v2z","fill-rule":"nonzero"})],-1),_e={class:"flex -mb-px"},ye=e("svg",{class:"h-6 w-6 fill-current mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M18.783 12c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615-.58.172-1.14.403-1.671.691.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 3.6 9.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643.173.58.404 1.14.691 1.672 1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711.532.288 1.092.52 1.672.693.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883.287-.532.52-1.092.692-1.672-.973-.569-1.619-1.395-1.619-2.442zM12 15.652a3.653 3.653 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z","fill-rule":"nonzero"})],-1),ke={class:"flex-grow container mx-auto sm:px-4 pt-6 pb-8"},ze=z('<div class="dark:bg-slate-800 bg-slate-300 border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6"><div class="border-b px-6"><div class="flex justify-between -mb-px"><div class="hidden lg:flex"><button type="button" class="appearance-none py-4 dark:text-white text-gray-700 border-b border-blue-dark mr-6"> .... </button><button type="button" class="appearance-none py-4 dark:text-white text-gray-700 border-b border-transparent hover:border-grey-dark mr-6"> .... </button><button type="button" class="appearance-none py-4 dark:text-white text-gray-700 border-b border-transparent hover:border-grey-dark"> .... </button></div></div></div><div class="flex items-center px-6 lg:hidden"><div class="flex-grow flex-no-shrink py-6"><div class="dark:text-white text-gray-700 mb-2"><span class="text-5xl dark:text-white text-gray-700">Users</span><span class="text-3xl align-top dark:text-white text-gray-700 rounded-full p-1"></span></div></div></div><div class="hidden lg:flex"><div class="w-1/3 text-center py-8"><div class="border-r"><div class="text-white mb-2"><span class="text-5xl dark:text-white text-gray-700">Users</span><span class="text-xl align-top text-white rounded-full bg-blue-600 p-1">74</span></div><div class="text-sm uppercase text-grey tracking-wide dark:text-white text-gray-700"> All User </div></div></div><div class="w-1/3 text-center py-8"><div class="border-r"><div class="dark:text-white text-gray-700 mb-2"><span class="text-5xl dark:text-white text-gray-700">You</span><span class="text-xl align-top text-white rounded-full bg-blue-600 p-1">-</span></div><div class="text-sm uppercase text-grey tracking-wide dark:text-white text-gray-700"> ... </div></div></div><div class="w-1/3 text-center py-8"><div><div class="text-whiteer mb-2"><span class="text-5xl dark:text-white text-gray-700">Track</span><span class="text-xl align-top text-white rounded-full bg-blue-600 p-1">-</span></div><div class="text-sm uppercase text-grey tracking-wide dark:text-white text-gray-700"> percentage(%) </div></div></div></div></div>',1),Ae={class:"flex flex-wrap -mx-4"},Me={class:"w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col"},He={class:"flex-grow flex flex-col dark:bg-slate-800 bg-slate-300 border-t border-b sm:rounded sm:border shadow overflow-hidden"},Ce=e("div",{class:"border-b"},[e("div",{class:"flex justify-between px-6 -mb-px flex-row"},[e("h3",{class:"dark:text-white text-gray-700 py-4 font-normal text-lg"}," All Users ")])],-1),je={class:"w-2/5 xl:w-1/4 px-4 flex items-center"},Se={class:"bg-orange inline-flex mr-3"},Be=e("span",{class:"text-lg dark:text-white text-gray-700"},null,-1),Le=z('<div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center"><div class="bg-orange h-2 rounded-full flex-grow mr-2 dark:text-white text-gray-700"></div></div><div class="flex w-3/5 md:w/12"><div class="w-1/2 px-4"><div class="text-right dark:text-white text-gray-700"></div></div><div class="w-1/2 px-4"><div class="text-right text-grey dark:text-white text-gray-700"> .... </div></div></div>',2),Te=e("div",{class:"px-6 py-4"},[e("div",{class:"text-center text-grey dark:text-white text-gray-700"}," Users emails ")],-1),Ve={class:"w-full lg:w-1/2 px-4"},Ue={class:"dark:bg-slate-800 border-t border-b sm:rounded sm:border shadow bg-slate-300"},De=e("div",{class:"border-b"},[e("div",{class:"flex justify-between px-6 -mb-px"},[e("h3",{class:"dark:text-white text-gray-700 py-4 font-normal text-lg"}," Recent Activity ")])],-1),Ee={class:"text-center px-6 py-4"},Ne={class:"py-8"},Re=e("div",{class:"mb-4"},[e("svg",{class:"inline-block fill-current dark:text-white text-gray-700 h-16 w-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"})])],-1),Ge=e("p",{class:"text-2xl font-medium mb-4 dark:text-white text-gray-700"}," ALL songs you've added ",-1),Oe={class:"text-grey max-w-xs mx-auto lowercase font-mono dark:text-white text-gray-700"};function Pe(l,t,s,r,b,n){const m=y,A=k,d=H;return r.auth?(c(),h("div",B,[e("div",null,[e("div",L,[e("div",T,[e("div",V,[e("button",{type:"button",class:"inline-flex md:hidden items-center justify-center rounded-md bg-white dark:border-indigo-500 dark:bg-slate-300 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:t[0]||(t[0]=(...o)=>n.toggleMode&&n.toggleMode(...o))},[U,r.mode?(c(),h("svg",R,O)):(c(),h("svg",D,N))]),e("div",null,[i(A)]),e("div",P,[F,e("div",q,[e("span",I,u(r.auth?r.msg:"not signed in"),1),Y])])])])]),p(e("div",J,[K,e("div",Q,[i(d,{to:"/",class:"no-underline dark:text-white text-black md:text-white md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:x(()=>[W,a(" Home ")]),_:1})]),e("div",X,[e("div",Z,[e("div",null,[e("button",{onClick:t[1]||(t[1]=o=>this.closeAccount=!this.closeAccount),type:"button",class:"inline-flex w-full justify-center rounded-md border dark:border-gray-300 border-indigo-700 bg-slate-800 px-4 py-2 text-sm bg-transparent font-medium dark:text-gray-200 text-indigo-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},[a(" Accounts "),$])]),p(e("div",ee,[e("div",te,[i(d,{to:"/AdminRegister",href:"#",class:"text-gray-700 dark:text-gray-400 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-0"},{default:x(()=>[a("Add Account")]),_:1}),e("form",se,[e("button",{onClick:t[2]||(t[2]=(...o)=>n.logout&&n.logout(...o)),type:"submit",class:"text-gray-700 dark:text-gray-400 block w-full px-4 py-2 text-left text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-3"}," Sign out ")])])],512),[[v,r.closeAccount]])])]),e("div",oe,[i(d,{to:"/AddSong",class:"no-underline dark:text-white text-black md:text-white md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:x(()=>[re,a(" Add Song ")]),_:1})]),e("div",ae,[i(d,{to:"/Setting",class:"no-underline dark:text-white text-black md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:x(()=>[le,a(" Settings ")]),_:1})])],512),[[v,r.mode]]),e("div",ie,[e("div",ne,[e("div",de,[ce,e("div",he,[i(d,{to:"/",class:"no-underline text-white opacity-50 md:text-white md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:x(()=>[xe,a(" Home ")]),_:1})]),e("div",ge,[e("div",me,[e("div",null,[e("button",{onClick:t[3]||(t[3]=o=>this.closeAccount=!this.closeAccount),type:"button",class:"inline-flex w-full justify-center rounded-md border border-gray-300bg-slate-800 px-4 py-2 text-sm bg-transparent font-medium text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},[a(" Accounts "),ue])]),p(e("div",pe,[e("div",ve,[i(d,{to:"/AdminRegister",href:"#",class:"text-gray-700 dark:text-gray-400 block px-4 py-2 text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-0"},{default:x(()=>[a("Add Account")]),_:1}),e("form",be,[e("button",{onClick:t[4]||(t[4]=(...o)=>n.logout&&n.logout(...o)),type:"submit",class:"text-gray-700 dark:text-gray-400 block w-full px-4 py-2 text-left text-sm",role:"menuitem",tabindex:"-1",id:"menu-item-3"}," Sign out ")])])],512),[[v,r.closeAccount]])])]),e("div",we,[i(d,{to:"/AddSong",class:"no-underline text-white opacity-50 md:text-white md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:x(()=>[fe,a(" Add Song ")]),_:1})]),e("div",_e,[i(d,{to:"/Setting",class:"no-underline text-white opacity-50 md:text-white md:opacity-100 flex items-center py-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"},{default:x(()=>[ye,a(" Settings ")]),_:1})])])])])]),e("div",ke,[ze,e("div",Ae,[e("div",Me,[e("div",He,[Ce,(c(!0),h(f,null,_(r.users[0],o=>(c(),h("div",{class:"flex-grow flex px-6 py-6 dark:text-white text-gray-700 items-center border-b -mx-4",key:o._id},[e("div",je,[e("div",Se,u(o.email),1),Be]),Le]))),128)),Te])]),e("div",Ve,[e("div",Ue,[De,e("div",null,[e("div",Ee,[e("div",Ne,[Re,Ge,(c(!0),h(f,null,_(r.songs[0],o=>(c(),h("div",{class:"",key:o._id},[e("p",Oe,u(o.title),1)]))),128))])])])])])])])])):(c(),h("div",S,[i(m,{msg:r.msg},null,8,["msg"])]))}const Je=M(j,[["render",Pe]]);export{Je as default};