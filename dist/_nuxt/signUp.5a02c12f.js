import{V as k}from"./verticalNav.902ef553.js";import{X as S,i as l,I as U,J as f,K as C,L as P,o as d,l as i,x as e,u as t,t as $,v as o,E as y,M as z,C as w,G as M,q as N,s as v}from"./entry.bd6f02f5.js";import{_ as E}from"./catoon.37c65e86.js";import{F as j,a as n,E as x}from"./vee-validate.esm.7ecf3aef.js";const B={class:"flex min-h-full items-center justify-center py-4 px-4 sm:px-6 lg:px-8 dark:bg-slate-900"},q={class:"w-full max-w-md space-y-8 dark:bg-slate-700 dark:p-5 dark:rounded-lg"},F={key:0,class:"mx-auto flex justify-center items-center h-12 w-auto py-3 px-5 rounded-full bg-emerald-200"},R={key:1,class:"mx-auto h-12 w-auto rounded-full",src:E,alt:"Your Company"},A=e("h2",{class:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400"}," Sign up into your account ",-1),H=e("p",{class:"mt-2 text-center text-sm text-gray-600"},[e("a",{href:"#",class:"font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"},"Welcome")],-1),J={class:"-space-y-px rounded-md shadow-sm"},L=e("label",{for:"email-address",class:"sr-only"},"Email address",-1),D=e("label",{for:"password",class:"sr-only"},"Password",-1),G=e("label",{for:"repeatPassword",class:"sr-only"},"Repeat Password",-1),I={class:"flex items-center justify-between"},K={class:"flex items-center"},O=e("label",{for:"rememberMe",class:"ml-2 block text-sm text-gray-900 dark:text-gray-400"},"Remember me",-1),T=e("div",{class:"text-sm"},[e("a",{href:"#",class:"font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-500"},"Forgot your password?")],-1),W=["disabled"],X=e("span",{class:"absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z","clip-rule":"evenodd"})])],-1),Y=e("button",{type:"submit",class:"group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},[e("span",{class:"absolute inset-y-0 left-0 flex items-center pl-3"},[e("svg",{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z","clip-rule":"evenodd"})])]),w(" Login ")],-1),Q={__name:"SignUp",setup(V){const _=S();let s=l({email:"",password:"",repeatPassword:""}),c=l(!1),u=l("");const h=U({email:f().required().email(),password:f().required().min(8),repeatPassword:f().required().min(8),rememberMe:C()});function m(p,{resetForm:a}){let g=JSON.stringify(s.value);_.create(g),c.value=!0,u=l(s.value.email.at(0).toUpperCase()),console.log(u.value),a()}return P(()=>{}),(p,a)=>{const g=M;return d(),i("div",B,[e("div",q,[e("div",null,[t(c)?(d(),i("button",F,$(t(s).email.at(0).toUpperCase()),1)):(d(),i("img",R)),A,H]),o(t(j),{class:"mt-8 space-y-6",onSubmit:m,"validation-schema":t(h)},{default:y(({isSubmitting:b})=>[o(t(n),{type:"hidden",name:"remember",value:"true"}),e("div",J,[e("div",null,[L,o(t(n),{name:"email",type:"email",modelValue:t(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>t(s).email=r),class:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-300",placeholder:"Enter email.."},null,8,["modelValue"]),o(t(x),{name:"email",class:"text-red-600 dark:text-orange-600 text-sm"})]),e("div",null,[D,o(t(n),{name:"password",type:"password",modelValue:t(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>t(s).password=r),class:"relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-300",placeholder:"password"},null,8,["modelValue"]),o(t(x),{name:"password",class:"text-red-600 dark:text-orange-600 text-sm"})]),e("div",null,[G,o(t(n),{name:"repeatPassword",modelValue:t(s).repeatPassword,"onUpdate:modelValue":a[2]||(a[2]=r=>t(s).repeatPassword=r),type:"password",class:"relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-300",placeholder:"confirm password"},null,8,["modelValue"]),o(t(x),{name:"repeatPassword",class:"text-red-600 dark:text-orange-600 text-sm"})])]),e("div",I,[e("div",K,[o(t(n),{name:"rememberMe",type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"}),O]),T]),e("div",null,[e("button",{disabled:b,class:z([{submitting:b},"group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"]),type:"submit"},[X,w(" Sign Up ")],10,W)]),e("div",null,[o(g,{to:"/login"},{default:y(()=>[Y]),_:1})])]),_:1},8,["validation-schema"])])])}}},Z={components:{VerticalNav1:k,SignUpVue1:Q}},ee={class:""},te={class:""};function oe(V,_,s,c,u,h){const m=v("VerticalNav1"),p=v("SignUpVue1");return d(),i("main",ee,[e("div",te,[o(m)]),o(p)])}const le=N(Z,[["render",oe]]);export{le as default};
