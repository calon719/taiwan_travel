"use strict";(self["webpackChunktravel_taiwan"]=self["webpackChunktravel_taiwan"]||[]).push([[768],{3138:function(t,e){e["Z"]={data(){return{openShareLinkModal:!1,shareUrl:""}},methods:{toggleShareLinkModal(t){this.openShareLinkModal=t}}}},4781:function(t,e){function a(t){const e={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},a=new Date(t);return a.toLocaleString("zh-TW",e)}e["Z"]=a},611:function(t,e,a){a.d(e,{Z:function(){return N}});var i=a(3396),r=a(7139),s=a.p+"img/Vector-white.31f402f9.svg",n=a(6883),o=a(8303),l=a(3251);const c={class:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-x-4 md:gap-x-6 mb-10"},h=["onClick"],d=(0,i._)("img",{src:s,alt:"icon"},null,-1),m=[d],u={class:"flex flex-col h-full"},g={class:"h-41 flex items-center justify-center overflow-hidden rounded-t-2xl"},p=["src","alt"],f={class:"bg-white py-2 px-4 sm:p-3 rounded-b-2xl text-sm text-gray-800 grow"},b={class:"text-lg text-dark font-bold mb-2.5"},w={class:"flex items-center mb-2"},k=(0,i._)("img",{src:n,alt:"icon"},null,-1),_={class:"ml-2"},y={key:0,class:"flex items-center mb-2"},v=(0,i._)("img",{src:o,alt:"icon"},null,-1),x={class:"ml-2"},D={key:1,class:"flex items-center mb-2"},C=(0,i._)("img",{src:l,alt:"icon"},null,-1),S={class:"ml-2"};function L(t,e,a,s,n,o){const l=(0,i.up)("RouterLink"),d=(0,i.up)("ShareLinkModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.cardData,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"card shadow-default hover:shadow-lg rounded-2xl relative h-100 transition-all duration-300",key:o.filterData(t,"ID")},[(0,i.Wm)(l,{to:{path:"/tourism",query:{data:`${o.filterData(t,"ID")}-${o.getCategoryString(t)}`}},class:"block absolute inset-0 z-10"},null,8,["to"]),(0,i._)("button",{type:"button",class:"absolute top-3 right-3 p-3 bg-primary-op-20 rounded-2xl hover:bg-primary z-20",onClick:e=>o.showShareLinkModal(t)},m,8,h),(0,i._)("div",u,[(0,i._)("div",g,[(0,i._)("img",{class:"card-top-img object-cover transtion-transform duration-300",src:t?.Picture?.PictureUrl1??n.defaultImg,alt:t?.Picture?.PictureDescription1??o.filterData(t,"Name")},null,8,p)]),(0,i._)("div",f,[(0,i._)("h4",b,(0,r.zw)(o.filterData(t,"Name")),1),(0,i._)("div",w,[k,(0,i._)("p",_,(0,r.zw)(t.Address),1)]),t.OpenTime??t.StartTime?((0,i.wg)(),(0,i.iD)("div",y,[v,(0,i._)("p",x,[t.OpenTime?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,r.zw)(t.OpenTime),1)],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,r.zw)(o.formatTime(t.StartTime))+" 至 "+(0,r.zw)(o.formatTime(t.EndTime)),1)],64))])])):(0,i.kq)("",!0),t.Phone?((0,i.wg)(),(0,i.iD)("div",D,[C,(0,i._)("p",S,(0,r.zw)(t.Phone),1)])):(0,i.kq)("",!0)])])])))),128))]),(0,i.Wm)(d,{class:(0,r.C_)({hidden:!t.openShareLinkModal}),tourismName:n.tourismName,shareUrl:t.shareUrl,onHideShareLinkModal:t.toggleShareLinkModal},null,8,["class","tourismName","shareUrl","onHideShareLinkModal"])],64)}var $=a(1018),M=a(3138),T=a(4781),U={data(){return{tourismName:"",defaultImg:"https://raw.githubusercontent.com/calon719/2021_the_f2e_taiwan_travel/master/public/images/image_default.jpg"}},props:{cardData:{type:Array,required:!0}},inject:["filterData"],mixins:[M.Z],methods:{formatTime:T.Z,getCategoryString(t){const e=Object.keys(t),a=e.find((t=>t.includes("ID"))),i=a.split("");i.splice(-2);const r=i.join("");return r},showShareLinkModal(t){const e=this.getCategoryString(t),a=this.filterData(t,"ID");this.shareUrl=`https://calon719.github.io/taiwan_travel/tourism?data=${a}-${e}`,this.tourismName=this.filterData(t,"Name"),this.openShareLinkModal=!0}},components:{ShareLinkModal:$.Z}},z=a(89);const j=(0,z.Z)(U,[["render",L]]);var N=j},1018:function(t,e,a){a.d(e,{Z:function(){return z}});var i=a(3396),r=a(7139);const s=["onclick"],n={class:"bg-white rounded-xl pb-6 pt-12 px-10 m-4 relative"},o=(0,i._)("i",{class:"bi bi-x-lg"},null,-1),l=[o],c={class:"text-xl font-bold mb-4"},h=(0,i.Uk)(" 分享 "),d={class:"underline"},m=(0,i.Uk)(" 至... "),u={class:"text-white text-lg whitespace-nowrap text-center flex flex-col items-center"},g={class:"mb-3"},p=["href"],f=(0,i._)("i",{class:"bi bi-facebook"},null,-1),b=(0,i._)("span",{class:"ml-1"},"Facebook",-1),w=[f,b],k={class:"mb-3"},_=["href"],y=(0,i._)("i",{class:"bi bi-twitter"},null,-1),v=(0,i._)("span",{class:"ml-1"},"Twitter",-1),x=[y,v],D=["href"],C=(0,i._)("i",{class:"bi bi-line"},null,-1),S=(0,i._)("span",{class:"ml-1"},"Line",-1),L=[C,S];function $(t,e,a,o,f,b){return(0,i.wg)(),(0,i.iD)("div",{href:"#",class:"bg-dark-op-30 fixed inset-0 flex items-center justify-center z-50","data-js":"modalContainer",onclick:b.checkEl},[(0,i._)("div",n,[(0,i._)("button",{type:"button",class:"hover:opacity-75 absolute top-4 right-5",onClick:e[0]||(e[0]=(...t)=>b.hideModal&&b.hideModal(...t))},l),(0,i._)("h3",c,[h,(0,i._)("span",d,(0,r.zw)(this.tourismName),1),m]),(0,i._)("ul",u,[(0,i._)("li",g,[(0,i._)("a",{target:"_blank",class:"bg-fb block rounded px-3 py-1 hover:opacity-75 w-32",href:`https://www.facebook.com/sharer.php?u=${a.shareUrl}`},w,8,p)]),(0,i._)("li",k,[(0,i._)("a",{target:"_blank",class:"block bg-twitter rounded px-3 py-1 hover:opacity-75 w-32",href:`https://twitter.com/share?url=${a.shareUrl}&text=Trave Taiwan ${a.tourismName}`},x,8,_)]),(0,i._)("li",null,[(0,i._)("a",{target:"_blank",class:"block bg-line rounded px-3 py-1 hover:opacity-75 w-32",href:`http://line.naver.jp/R/msg/text/?${a.shareUrl}`},L,8,D)])])])],8,s)}var M={props:{tourismName:{type:String},shareUrl:{type:String,requird:!0}},methods:{hideModal(){this.$emit("hide-share-link-modal",!1)},checkEl(t){t.target.dataset.js&&this.hideModal()}}},T=a(89);const U=(0,T.Z)(M,[["render",$]]);var z=U},5176:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var i=a(3396),r=a(7139);const s=t=>((0,i.dD)("data-v-9f846d0c"),t=t(),(0,i.Cn)(),t),n=s((()=>(0,i._)("div",{class:"banner h-38 md:h-59 lg:h-84 bg-white rounded-xl shadow-default flex items-center mb-10"},[(0,i._)("h2",{class:"text-2xl md:text-3xl font-bold leading-tight ml-6 sm:ml-7 md:ml-12"},[(0,i.Uk)(" 探索。 "),(0,i._)("br"),(0,i.Uk)(" 福爾摩沙 ")])],-1)));function o(t,e,a,s,o,l){const c=(0,i.up)("ThemesComponent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.tourismCategories,((t,e)=>((0,i.wg)(),(0,i.j4)(c,{key:`home${t}`,theme:t,category:e,tourismData:this[`${e.toLowerCase()}Data`],class:(0,r.C_)({"mb-10":e!==o.apiPath[o.apiPath.length-1]})},null,8,["theme","category","tourismData","class"])))),128))],64)}var l=a.p+"img/Location-1.18e0e68e.svg";const c={class:"flex items-center mb-4"},h=(0,i._)("img",{src:l,alt:"icon"},null,-1),d={class:"text-xl font-bold ml-3"};function m(t,e,a,s,n,o){const l=(0,i.up)("RouterLink"),m=(0,i.up)("CardList");return(0,i.wg)(),(0,i.iD)("section",null,[(0,i._)("div",c,[h,(0,i._)("h3",d,(0,r.zw)(a.theme),1),(0,i.Wm)(l,{to:{path:"/search",query:{category:a.category}},class:"hidden sm:inline text-primary ml-auto hover:underline underline-offset-1"},{default:(0,i.w5)((()=>[(0,i.Uk)("更多"+(0,r.zw)(a.theme),1)])),_:1},8,["to"])]),(0,i.Wm)(m,{cardData:a.tourismData},null,8,["cardData"]),(0,i.Wm)(l,{to:{path:"/search",query:{category:a.category}},class:"block text-center sm:hidden text-primary ml-auto hover:underline underline-offset-1"},{default:(0,i.w5)((()=>[(0,i.Uk)("更多"+(0,r.zw)(a.theme),1)])),_:1},8,["to"])])}var u=a(611),g={props:{theme:{type:String,required:!0},category:{type:String,required:!0},tourismData:{type:Array,required:!0}},components:{CardList:u.Z}},p=a(89);const f=(0,p.Z)(g,[["render",m]]);var b=f;const w={ScenicSpot:"熱門景點",Activity:"觀光活動",Restaurant:"美食品嚐",Hotel:"住宿推薦"};var k=w,_={data(){return{tourismCategories:k,scenicspotData:[],hotelData:[],restaurantData:[],activityData:[],apiPath:[...Object.keys(k)]}},emits:["emit-loading-status"],inject:["getAuthorizationHeader","showErrMessage"],methods:{getData(){this.$emit("emit-loading-status",!0),this.apiPath.forEach(this.catchErr(this.asyncFn))},async asyncFn(t){const e=await this.$http.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${t}?$top=3&$format=JSON`,{headers:this.getAuthorizationHeader()});this[`${t.toLowerCase(t)}Data`]=e.data},catchErr(t){return e=>t(e).catch((()=>{this.showErrMessage(),this.$emit("emit-loading-status",!1)})).then((()=>{const t=[];this.apiPath.forEach((a=>{const i=this[`${a.toLowerCase(e)}Data`].length>0;t.push(i)})),t.every((t=>t))&&this.$emit("emit-loading-status",!1)}))}},created(){this.getData()},components:{ThemesComponent:b}};const y=(0,p.Z)(_,[["render",o],["__scopeId","data-v-9f846d0c"]]);var v=y},3251:function(t,e,a){t.exports=a.p+"img/Calling.b8afc8ae.svg"},6883:function(t,e,a){t.exports=a.p+"img/Location.d0e5c25e.svg"},8303:function(t,e,a){t.exports=a.p+"img/Time_Circle.88dae92f.svg"}}]);
//# sourceMappingURL=768.1dabacd1.js.map