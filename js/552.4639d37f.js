"use strict";(self["webpackChunktravel_taiwan"]=self["webpackChunktravel_taiwan"]||[]).push([[552],{3138:function(t,e){e["Z"]={data(){return{openShareLinkModal:!1,shareUrl:""}},methods:{toggleShareLinkModal(t){this.openShareLinkModal=t}}}},4781:function(t,e){function a(t){const e={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},a=new Date(t);return a.toLocaleString("zh-TW",e)}e["Z"]=a},611:function(t,e,a){a.d(e,{Z:function(){return L}});var i=a(3396),r=a(7139),s=a.p+"img/Vector-white.31f402f9.svg",o=a(6883),n=a(8303),l=a(3251);const c={class:"grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-x-4 md:gap-x-6 mb-10"},u=["onClick"],h=(0,i._)("img",{src:s,alt:"icon"},null,-1),g=[h],d={class:"flex flex-col h-full"},m={class:"h-41 flex items-center justify-center overflow-hidden rounded-t-2xl"},p=["src","alt"],y={class:"bg-white py-2 px-4 sm:p-3 rounded-b-2xl text-sm text-gray-800 grow"},b={class:"text-lg text-dark font-bold mb-2.5"},f={class:"flex items-center mb-2"},w=(0,i._)("img",{src:o,alt:"icon"},null,-1),_={class:"ml-2"},x={key:0,class:"flex items-center mb-2"},v=(0,i._)("img",{src:n,alt:"icon"},null,-1),k={class:"ml-2"},D={key:1,class:"flex items-center mb-2"},$=(0,i._)("img",{src:l,alt:"icon"},null,-1),P={class:"ml-2"};function C(t,e,a,s,o,n){const l=(0,i.up)("RouterLink"),h=(0,i.up)("ShareLinkModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.cardData,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"card shadow-default hover:shadow-lg rounded-2xl relative h-100 transition-all duration-300",key:n.filterData(t,"ID")},[(0,i.Wm)(l,{to:{path:"/tourism",query:{data:`${n.filterData(t,"ID")}-${n.getCategoryString(t)}`}},class:"block absolute inset-0 z-10"},null,8,["to"]),(0,i._)("button",{type:"button",class:"absolute top-3 right-3 p-3 bg-primary-op-20 rounded-2xl hover:bg-primary z-20",onClick:e=>n.showShareLinkModal(t)},g,8,u),(0,i._)("div",d,[(0,i._)("div",m,[(0,i._)("img",{class:"card-top-img object-cover transtion-transform duration-300",src:t?.Picture?.PictureUrl1??o.defaultImg,alt:t?.Picture?.PictureDescription1??n.filterData(t,"Name")},null,8,p)]),(0,i._)("div",y,[(0,i._)("h4",b,(0,r.zw)(n.filterData(t,"Name")),1),(0,i._)("div",f,[w,(0,i._)("p",_,(0,r.zw)(t.Address),1)]),t.OpenTime??t.StartTime?((0,i.wg)(),(0,i.iD)("div",x,[v,(0,i._)("p",k,[t.OpenTime?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,r.zw)(t.OpenTime),1)],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,r.zw)(n.formatTime(t.StartTime))+" 至 "+(0,r.zw)(n.formatTime(t.EndTime)),1)],64))])])):(0,i.kq)("",!0),t.Phone?((0,i.wg)(),(0,i.iD)("div",D,[$,(0,i._)("p",P,(0,r.zw)(t.Phone),1)])):(0,i.kq)("",!0)])])])))),128))]),(0,i.Wm)(h,{class:(0,r.C_)({hidden:!t.openShareLinkModal}),tourismName:o.tourismName,shareUrl:t.shareUrl,onHideShareLinkModal:t.toggleShareLinkModal},null,8,["class","tourismName","shareUrl","onHideShareLinkModal"])],64)}var q=a(1018),N=a(3138),S=a(4781),T={data(){return{tourismName:"",defaultImg:"https://raw.githubusercontent.com/calon719/2021_the_f2e_taiwan_travel/master/public/images/image_default.jpg"}},props:{cardData:{type:Array,required:!0}},inject:["filterData"],mixins:[N.Z],methods:{formatTime:S.Z,getCategoryString(t){const e=Object.keys(t),a=e.find((t=>t.includes("ID"))),i=a.split("");i.splice(-2);const r=i.join("");return r},showShareLinkModal(t){const e=this.getCategoryString(t),a=this.filterData(t,"ID");this.shareUrl=`https://calon719.github.io/taiwan_travel/tourism?data=${a}-${e}`,this.tourismName=this.filterData(t,"Name"),this.openShareLinkModal=!0}},components:{ShareLinkModal:q.Z}},j=a(89);const M=(0,j.Z)(T,[["render",C]]);var L=M},1018:function(t,e,a){a.d(e,{Z:function(){return j}});var i=a(3396),r=a(7139);const s=["onclick"],o={class:"bg-white rounded-xl pb-6 pt-12 px-10 m-4 relative"},n=(0,i._)("i",{class:"bi bi-x-lg"},null,-1),l=[n],c={class:"text-xl font-bold mb-4"},u=(0,i.Uk)(" 分享 "),h={class:"underline"},g=(0,i.Uk)(" 至... "),d={class:"text-white text-lg whitespace-nowrap text-center flex flex-col items-center"},m={class:"mb-3"},p=["href"],y=(0,i._)("i",{class:"bi bi-facebook"},null,-1),b=(0,i._)("span",{class:"ml-1"},"Facebook",-1),f=[y,b],w={class:"mb-3"},_=["href"],x=(0,i._)("i",{class:"bi bi-twitter"},null,-1),v=(0,i._)("span",{class:"ml-1"},"Twitter",-1),k=[x,v],D=["href"],$=(0,i._)("i",{class:"bi bi-line"},null,-1),P=(0,i._)("span",{class:"ml-1"},"Line",-1),C=[$,P];function q(t,e,a,n,y,b){return(0,i.wg)(),(0,i.iD)("div",{href:"#",class:"bg-dark-op-30 fixed inset-0 flex items-center justify-center z-50","data-js":"modalContainer",onclick:b.checkEl},[(0,i._)("div",o,[(0,i._)("button",{type:"button",class:"hover:opacity-75 absolute top-4 right-5",onClick:e[0]||(e[0]=(...t)=>b.hideModal&&b.hideModal(...t))},l),(0,i._)("h3",c,[u,(0,i._)("span",h,(0,r.zw)(this.tourismName),1),g]),(0,i._)("ul",d,[(0,i._)("li",m,[(0,i._)("a",{target:"_blank",class:"bg-fb block rounded px-3 py-1 hover:opacity-75 w-32",href:`https://www.facebook.com/sharer.php?u=${a.shareUrl}`},f,8,p)]),(0,i._)("li",w,[(0,i._)("a",{target:"_blank",class:"block bg-twitter rounded px-3 py-1 hover:opacity-75 w-32",href:`https://twitter.com/share?url=${a.shareUrl}&text=Trave Taiwan ${a.tourismName}`},k,8,_)]),(0,i._)("li",null,[(0,i._)("a",{target:"_blank",class:"block bg-line rounded px-3 py-1 hover:opacity-75 w-32",href:`http://line.naver.jp/R/msg/text/?${a.shareUrl}`},C,8,D)])])])],8,s)}var N={props:{tourismName:{type:String},shareUrl:{type:String,requird:!0}},methods:{hideModal(){this.$emit("hide-share-link-modal",!1)},checkEl(t){t.target.dataset.js&&this.hideModal()}}},S=a(89);const T=(0,S.Z)(N,[["render",q]]);var j=T},8965:function(t,e,a){a.r(e),a.d(e,{default:function(){return R}});var i=a(3396),r=a(7139),s=a(9242),o=a.p+"img/ic_baseline-sort.1b8ddd41.svg";const n={class:"flex items-center mb-8"},l=(0,i._)("img",{src:o,alt:"icon"},null,-1),c={class:"grid grid-cols-4 gap-3 text-lg ml-4 overflow-auto"},u=(0,i.Uk)(" 觀光 "),h=(0,i.Uk)(" 餐飲 "),g=(0,i.Uk)(" 旅宿 "),d=(0,i.Uk)(" 活動 "),m={key:1};function p(t,e,a,o,p,y){const b=(0,i.up)("RouterLink"),f=(0,i.up)("CardList"),w=(0,i.up)("PaginationComponent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.wy)((0,i._)("h3",{class:"text-2xl font-bold mb-4"},(0,r.zw)(p.cityName),513),[[s.F8,""!==p.cityName]]),(0,i._)("div",n,[l,(0,i._)("ul",c,[(0,i._)("li",null,[(0,i.Wm)(b,{to:{path:"/search",query:{category:"ScenicSpot",city:t.$route.query.city}},class:(0,r.C_)(["block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white rounded-lg","ScenicSpot"===t.$route.query.category?"text-white bg-primary cursor-default":""])},{default:(0,i.w5)((()=>[u])),_:1},8,["to","class"])]),(0,i._)("li",null,[(0,i.Wm)(b,{to:{path:"/search",query:{category:"Restaurant",city:t.$route.query.city}},class:(0,r.C_)(["block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white rounded-lg","Restaurant"===t.$route.query.category?"text-white bg-primary cursor-default":""])},{default:(0,i.w5)((()=>[h])),_:1},8,["to","class"])]),(0,i._)("li",null,[(0,i.Wm)(b,{to:{path:"/search",query:{category:"Hotel",city:t.$route.query.city}},class:(0,r.C_)(["block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white rounded-lg","Hotel"===t.$route.query.category?"text-white bg-primary cursor-default":""])},{default:(0,i.w5)((()=>[g])),_:1},8,["to","class"])]),(0,i._)("li",null,[(0,i.Wm)(b,{to:{path:"/search",query:{category:"Activity",city:t.$route.query.city}},class:(0,r.C_)(["block py-2 px-3 bg-white border border-primary hover:bg-primary hover:text-white rounded-lg","Activity"===t.$route.query.category?"text-white bg-primary cursor-default":""])},{default:(0,i.w5)((()=>[d])),_:1},8,["to","class"])])])]),p.tourismData.length?((0,i.wg)(),(0,i.j4)(f,{key:0,cardData:y.curPageData},null,8,["cardData"])):((0,i.wg)(),(0,i.iD)("p",m,"沒有符合的搜尋結果，請試著換關鍵字在搜尋一次。")),(0,i.wy)((0,i.Wm)(w,{paginationData:p.paginationData,onChangePage:y.getPageData},null,8,["paginationData","onChangePage"]),[[s.F8,p.paginationData.totalPages>1]])],64)}const y=t=>((0,i.dD)("data-v-f144e700"),t=t(),(0,i.Cn)(),t),b={class:"flex justify-center"},f=["disabled"],w=y((()=>(0,i._)("i",{class:"bi bi-chevron-bar-left"},null,-1))),_=[w],x={class:"ml-3"},v=["disabled"],k=y((()=>(0,i._)("i",{class:"bi bi-chevron-left"},null,-1))),D=[k],$={class:"h-11 w-11 flex justify-center items-center ml-3"},P={class:"ml-3"},C=["disabled"],q=y((()=>(0,i._)("i",{class:"bi bi-chevron-right"},null,-1))),N=[q],S={class:"ml-3"},T=["disabled"],j=y((()=>(0,i._)("i",{class:"bi bi-chevron-bar-right"},null,-1))),M=[j];function L(t,e,a,s,o,n){return(0,i.wg)(),(0,i.iD)("ul",b,[(0,i._)("li",null,[(0,i._)("button",{type:"button",class:"pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white flex justify-center items-center transition-all duration-300",disabled:1===a.paginationData.curPage,onClick:e[0]||(e[0]=e=>t.$emit("change-page",1))},_,8,f)]),(0,i._)("li",x,[(0,i._)("button",{type:"button",class:"pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white flex justify-center items-center transition-all duration-300",disabled:!a.paginationData.hasPrePage,onClick:e[1]||(e[1]=e=>t.$emit("change-page",a.paginationData.curPage-1))},D,8,v)]),(0,i._)("li",$,(0,r.zw)(a.paginationData.curPage),1),(0,i._)("li",P,[(0,i._)("button",{type:"button",class:"pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white flex justify-center items-center transition-all duration-300",disabled:!a.paginationData.hasNextPage,onClick:e[2]||(e[2]=e=>t.$emit("change-page",a.paginationData.curPage+1))},N,8,C)]),(0,i._)("li",S,[(0,i._)("button",{type:"button",class:"pagination-btn h-11 w-11 rounded-full hover:bg-primary hover:text-white flex justify-center items-center transition-all duration-300",disabled:a.paginationData.curPage===a.paginationData.totalPages,onClick:e[3]||(e[3]=e=>t.$emit("change-page",a.paginationData.totalPages))},M,8,T)])])}var U={props:{paginationData:{type:Object,required:!0}}},z=a(89);const Z=(0,z.Z)(U,[["render",L],["__scopeId","data-v-f144e700"]]);var H=Z,I=a(611),O=a(8793),W=a(3571),A={data(){return{tourismData:[],tourismThemes:O.Z,regionsOfTaiwan:W.Z,cityName:"",paginationData:{totalPages:1,curPage:1,hasPrePage:!1,hasNextPage:!1}}},inject:["getAuthorizationHeader","showErrMessage"],emits:["emit-loading-status"],computed:{curPageData(){const t=this.paginationData.curPage,e=9*(t-1),a=9*t,i=this.tourismData.filter(((t,i)=>i>=e&&i<a));return i}},watch:{$route(){"search"===this.$route.name&&(this.getData(),this.getCityName())},tourismData:{handler(){this.paginationData.totalPages=Math.ceil(this.tourismData.length/9),this.getPageData()},deep:!0}},methods:{getCityName(){let t="";if(""!==this.$route.query.city){let e=Object.values(this.regionsOfTaiwan);e=e.flat(1);const a=e.findIndex((t=>this.$route.query.city===t.englishName));t=e[a]?.city}this.cityName=t},getData(){let t="";if(this.$route.query.category){const{category:e}=this.$route.query,a=this.$route.query.city??"";t=`https://ptx.transportdata.tw/MOTC/v2/Tourism/${e}/${a}`}else if(this.$route.query.theme){const{theme:e,city:a,keywords:i}=this.$route.query,r=this.tourismThemes.findIndex((t=>t.themeName===e)),{query:s,baseApi:o,category:n}=this.tourismThemes[r],l=""===a?"":`/${a}`;let c="";if(""!==s&&""!==i)c=`?$filter=${s} and contains(${n}Name, '${i}')`;else if(""!==s||""!==i){const t=""===i?"":`contains(${n}Name, '${i}')`;c=`?$filter=${s+t}`}t=o+l+c}""===t?this.$router.push({name:"home"}):(this.$emit("emit-loading-status",!0),this.$http.get(t,{headers:this.getAuthorizationHeader()}).then((t=>{this.tourismData=t.data,this.$emit("emit-loading-status",!1)})).catch((()=>{this.$emit("emit-loading-status",!1),this.showErrMessage()})))},getPageData(t=1){window.scrollTo(0,0),this.paginationData.curPage=t,this.paginationData.hasPrePage=t>1,this.paginationData.hasNextPage=t<this.paginationData.totalPages}},components:{PaginationComponent:H,CardList:I.Z},created(){this.getData(),this.getCityName()}};const E=(0,z.Z)(A,[["render",p]]);var R=E},3251:function(t,e,a){t.exports=a.p+"img/Calling.b8afc8ae.svg"},6883:function(t,e,a){t.exports=a.p+"img/Location.d0e5c25e.svg"},8303:function(t,e,a){t.exports=a.p+"img/Time_Circle.88dae92f.svg"}}]);
//# sourceMappingURL=552.4639d37f.js.map