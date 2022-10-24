import{V as c}from"./verticalNav.1a86df71.js";import{q as _,F as l,o as g,l as x,v as e,x as n,z as h,A as r,B as d,y as f,E as w,D as b}from"./entry.0c2d2f9b.js";const y={data(){return{email:"",password:""}},components:{VerticalNav:c},data(){return{email:"",password:"",message:""}},methods:{async submit(){let t=await fetch("/api/user/AdminLogin",{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({email:this.email,password:this.password})});if(t.ok){let a=await t.json();l().success(a.message),await this.$router.push("/AdminDashboard"),location.reload()}else{let a=await t.json();l().error(a.message),await this.$router.push("/AdminLogin")}}}},v={class:""},k={class:""},A={class:"h-screen font-sans login bg-cover overflow-hidden"},V={class:"container mx-auto h-full flex flex-1 justify-center items-center"},N={class:"w-full max-w-lg"},L={class:"leading-loose"},j=e("p",{class:"text-gray-200 text-center text-lg font-bold"},"Login As Admin",-1),B={class:""},T=e("label",{class:"block text-sm text-gray-200",for:"email"},"Email",-1),q={class:"mt-2"},D=e("label",{class:"block text-sm text-gray-200"},"Password",-1),E=e("div",{class:"mt-4 items-center justify-between"},[e("button",{class:"px-4 py-1 text-white font-light tracking-wider bg-indigo-700 rounded",type:"submit"}," Login "),e("a",{class:"inline-block right-0 align-baseline font-bold text-sm text-500 p-1 text-gray-200",href:"#"}," Forgot Password? ")],-1);function P(m,t,a,S,o,i){const u=c,p=w;return g(),x("main",v,[e("span",k,[n(u)]),e("body",A,[e("div",V,[e("div",N,[e("div",L,[e("form",{class:"max-w-xl m-4 p-10 bg-slate-800 rounded shadow-xl",onSubmit:t[2]||(t[2]=h((...s)=>i.submit&&i.submit(...s),["prevent"]))},[j,e("div",B,[T,r(e("input",{class:"w-full px-5 py-1 text-gray-800 dark:text-gray-800 bg-gray-200 rounded",id:"email",name:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=s=>o.email=s),required:"",placeholder:"email",autocomplete:"true","aria-label":"email"},null,512),[[d,o.email]])]),e("div",q,[D,r(e("input",{class:"w-full px-5 py-1 text-gray-800 dark:text-gray-800 bg-gray-200 rounded",name:"password","onUpdate:modelValue":t[1]||(t[1]=s=>o.password=s),type:"password",required:"",placeholder:"*******",autocomplete:"true"},null,512),[[d,o.password]])]),E,n(p,{to:"/AdminRegister",class:"inline-block right-0 align-baseline font-bold text-sm text-500 text-gray-200"},{default:f(()=>[b(" Not registered ? ")]),_:1})],32)])])])])])}const M=_(y,[["render",P]]);export{M as default};
