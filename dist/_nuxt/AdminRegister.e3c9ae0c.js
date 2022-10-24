import{_ as x}from"./Terms.a3230a6d.js";import{V as p}from"./verticalNav.21ed9f02.js";import{q as f,F as n,o as m,l as u,x as i,v as t,z as w,A as r,B as d,y,E as b,D as v}from"./entry.5e531372.js";const k={components:{VerticalNav:p},data(){return{name:"",email:"",password:"",auth:!1,msg:""}},methods:{async submit(){let e=await fetch("/api/user/AdminRegister",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,password:this.password})});if(e.ok){let a=await e.json();n().success(a.message),await this.$router.push("/AdminLogin")}else{let a=await e.json();n().error(a.message)}},async logout(){let e=await fetch("/api/user/AdminLogout",{method:"POST",credentials:"include",headers:{"Content-type":"application/json"}});if(e.ok){let a=await e.json();n().success(a.message),await this.$router.push("/AdminLogin"),location.reload()}else{let a=await e.json();console.log(a),await this.$router.push("/AdminRegister"),location.reload()}}},async mounted(){try{const s=await fetch("/api/user/",{credentials:"include",headers:{"Content-type":"application/json"}});if(s.ok){const e=await s.json();this.auth=!0,console.log(e)}else{const e=await s.json();this.msg=e.message,this.auth=!1,console.log(e)}}catch(s){console.log(s)}}},j={key:0,class:"flex justify-center flex-col gap-y-3 items-center mx-auto p-3 text-slate-900 text-3xl dark:bg-slate-800 bg-slate-400"},A={key:1},V={class:"h-screen font-sans login bg-cover overflow-hidden"},N={class:"container mx-auto h-full flex flex-1 justify-center items-center"},R={class:"w-full max-w-lg"},T={class:"leading-loose"},U=t("p",{class:"text-gray-300 text-center text-lg font-bold"},"Register as Admin",-1),q={class:""},B=t("label",{class:"block text-sm text-gray-200",for:"username"},"Username",-1),C={class:""},L=t("label",{class:"block text-sm text-gray-200",for:"email"},"Email",-1),P={class:"mt-2"},S=t("label",{class:"block text-sm text-gray-200",for:"password"},"Password",-1),E=t("div",{class:"mt-4 items-center justify-between"},[t("button",{class:"px-4 py-1 text-white font-light tracking-wider bg-indigo-600 rounded",type:"submit"}," Register "),t("a",{class:"inline-block right-0 align-baseline font-bold text-sm text-500 p-1 text-gray-300",href:"#"}," Forgot Password? ")],-1);function O(s,e,a,D,o,c){const g=x,_=p,h=b;return o.auth?(m(),u("div",A,[i(_),t("body",V,[t("div",N,[t("div",R,[t("div",T,[t("form",{class:"max-w-xl m-4 p-10 bg-slate-800 rounded shadow-xl",onSubmit:e[3]||(e[3]=w((...l)=>c.submit&&c.submit(...l),["prevent"]))},[U,t("div",q,[B,r(t("input",{class:"w-full px-5 py-1 text-black rounded",id:"username",name:"username","onUpdate:modelValue":e[0]||(e[0]=l=>o.name=l),type:"text",required:"",placeholder:"User Name","aria-label":"username"},null,512),[[d,o.name]])]),t("div",C,[L,r(t("input",{class:"w-full px-5 py-1 text-black bg-gray-200 rounded",id:"email",name:"email",type:"email","onUpdate:modelValue":e[1]||(e[1]=l=>o.email=l),required:"",placeholder:"email..","aria-label":"email"},null,512),[[d,o.email]])]),t("div",P,[S,r(t("input",{class:"w-full px-5 py-1 text-black bg-gray-200 rounded",id:"password",name:"password","onUpdate:modelValue":e[2]||(e[2]=l=>o.password=l),type:"password",required:"",placeholder:"*******","aria-label":"password"},null,512),[[d,o.password]])]),E,i(h,{to:"/AdminLogin",class:"inline-block right-0 align-baseline font-bold text-sm text-500 text-gray-200"},{default:y(()=>[v(" Already have account ? ")]),_:1})],32)])])])])])):(m(),u("div",j,[i(g,{msg:o.msg},null,8,["msg"])]))}const J=f(k,[["render",O]]);export{J as default};