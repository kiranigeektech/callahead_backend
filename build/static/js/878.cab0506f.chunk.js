"use strict";(self.webpackChunktruck_tracking=self.webpackChunktruck_tracking||[]).push([[878],{9878:function(e,a,r){r.r(a),r.d(a,{default:function(){return f}});var n=r(1413),t=r(885),s=r(2791),o=r(4270),l=r(2144),c=r(9743),d=r(2677),i=r(4849),m=r(3855),h=r(6157),u=r(6871),p=r(5543),x=r(8979),v=r(4834),_=r(577),g=r(184),f=function(){var e=(0,u.s0)(),a=(0,u.TH)(),r=(0,s.useRef)(null),f={firstName:"",lastName:"",phone:"",id:"",county:"",route:"",route_day:"",route_down:"",truck:"",notes:"",mb:"",photo:"",is_friday_drivers:!1},N=(0,s.useState)(f),j=(0,t.Z)(N,2),Z=j[0],b=j[1],C=(0,s.useState)({imagepreview:""}),y=(0,t.Z)(C,2),A=y[0],D=y[1],I=(0,s.useState)(!1),F=(0,t.Z)(I,2),w=F[0],E=F[1],k=(0,s.useState)(""),S=(0,t.Z)(k,2),L=S[0],R=S[1],O=(0,s.useState)(),P=(0,t.Z)(O,2),U=P[0],T=P[1],G=(0,s.useState)(""),H=(0,t.Z)(G,2),B=H[0],K=H[1],M=(0,s.useState)({id:"",new_code:""}),J=(0,t.Z)(M,2),Y=J[0],q=J[1],W=(0,s.useState)({old_code:"",new_code:""}),z=(0,t.Z)(W,2),Q=z[0],V=z[1],X=(0,s.useState)(!1),$=(0,t.Z)(X,2),ee=$[0],ae=$[1],re=a.pathname.includes("driver/edit");s.useEffect((function(){if(a&&a.pathname.includes("driver/edit")){var r=localStorage.getItem("edit_user"),n=JSON.parse(r);if(n){var t={name:n.NAME,phone:n.PHONE,id:n.ID,county:n.COUNTY,route:n.ROUTE,route_day:n.ROUTE_DAY,route_down:n.ROUTE_DOWN,truck:n.TRUCK,notes:n.NOTES,mb:n.MB,photo:n.PHOTO,is_friday_drivers:n.is_friday_drivers};if(b(t),T(t.id),""===t.id||void 0===t.id){var s=n.D_ID;K(s)}}else e("/dashboard/driver/add")}return function(){localStorage.removeItem("edit_user"),b(f)}}),[a]),s.useEffect((function(){re&&(""===U||void 0===U?q({id:String(B),new_code:Z.id}):V({old_code:U,new_code:Z.id}))}),[Z.id,B]),s.useEffect((function(){var e=localStorage.getItem("auth");R(JSON.parse(e))}),[]),s.useEffect((function(){if(!Z.id&&Z.firstName&&Z.lastName&&Z.phone.length>9){var e=Z.firstName.charAt(0)+Z.lastName.charAt(0)+Z.phone.slice(Z.phone.length-4);e&&b((0,n.Z)((0,n.Z)({},Z),{},{id:e.toUpperCase()}))}}),[Z]);var ne=function(e){var r=e.target,n=r.value,t=r.name,s=Object.assign({},Z);s[t]=n;var o=null;a&&a.pathname.includes("driver/add")&&("firstName"===t&&n.length>0&&Z.phone.length>3&&Z.lastName&&(o=n.charAt(0)+Z.lastName.charAt(0)+Z.phone.slice(Z.phone.length-4)),"lastName"===t&&n.length>0&&Z.firstName&&Z.phone.length>3&&(o=n.charAt(0)+Z.firstName.charAt(0)+Z.phone.slice(Z.phone.length-4)),"phone"===t&&n.length>3&&Z.firstName&&Z.lastName&&(o=Z.firstName.charAt(0)+Z.lastName.charAt(0)+n.slice(n.length-4))),o&&(s.id=o.toUpperCase()),b(s)},te=function(e){e.preventDefault();var a=URL.createObjectURL(e.target.files[0]),r=Object.assign({},A);r.imagepreview=a,D(r);var n=new FormData;n.append("upload_image",e.target.files[0]),E(!0);(0,p.lR)(L,n,!0).then((function(e){if(e.data.success){E(!1);var a=Object.assign({},Z);a.photo=e.data.data,b(a)}})).catch((function(e){console.log(e)}))};return s.useEffect((function(){ae(!0)}),[Z]),(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(o.q,{children:(0,g.jsx)("title",{children:"Truck Tracking | Dashboard | Add Driver"})}),(0,g.jsx)(x.Z,{children:(0,g.jsxs)("div",{className:"AddDriver",children:[(0,g.jsx)("div",{className:"AddDriver--text",children:(0,g.jsxs)("p",{className:"p",children:[" ",re?"Edit":"Add"," Driver"]})}),(0,g.jsx)("div",{className:"AddDriver__content",children:(0,g.jsx)(l.Z,{className:"common_card",children:(0,g.jsxs)("div",{className:"AddDriver__content--card",children:[(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(d.Z,{lg:4,md:12,sm:12,children:(0,g.jsx)("div",{className:"AddDriver__content__Imagediv",children:(0,g.jsxs)("div",{className:"AddDriver__content__Imagediv".concat(""!==A.imagepreview||Z.photo?w?"--loadphoto":"--photo":"--initphoto"),onClick:function(){r.current.click()},children:[(0,g.jsx)("div",{id:"main_img-div",style:{width:"12rem",height:"12rem"},children:re?Z.photo?w?(0,g.jsx)(i.Z,{className:"AddDriver__content__Imagediv--spinner",animation:"border"}):(0,g.jsx)("img",{className:"AddDriver__content__Imagediv--Uploadimage",src:Z.photo}):(0,g.jsx)("div",{children:(0,g.jsx)("img",{className:"AddDriver__content__Imagediv--Uploadimage",src:v.fm})}):""===A.imagepreview?(0,g.jsx)("div",{children:(0,g.jsx)("img",{className:"AddDriver__content__Imagediv--Uploadimage",src:v.fm})}):w?(0,g.jsx)(i.Z,{className:"AddDriver__content__Imagediv--spinner",animation:"border"}):(0,g.jsx)("img",{className:"AddDriver__content__Imagediv--Uploadimage",src:A.imagepreview})}),(0,g.jsx)("input",{type:"file",style:{display:"none"},ref:r,accept:"image/png, image/gif, image/jpeg",onChange:te}),re?Z.photo?w?null:(0,g.jsx)("div",{className:"AddDriver__content__Imagediv__editbtn",children:(0,g.jsx)("img",{src:v.gR,style:{padding:"7px"},width:"40px",height:"40px",onChange:te})}):null:A.imagepreview?(0,g.jsx)("div",{className:"AddDriver__content__Imagediv__editbtn",children:w?null:(0,g.jsx)("img",{src:v.gR,style:{padding:"7px"},width:"40px",height:"40px",onChange:te})}):null]})})}),(0,g.jsxs)(d.Z,{lg:8,md:12,children:[(0,g.jsx)(c.Z,{children:re?(0,g.jsx)(d.Z,{md:12,sm:12,lg:12,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Name"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.name,onChange:ne,name:"name",placeholder:"Enter first name"})]})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.Z,{sm:12,md:6,lg:6,className:"AddDriver__content",children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"First Name"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.firstName,onChange:ne,name:"firstName",placeholder:"Enter first name"})]})}),(0,g.jsx)(d.Z,{children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Last Name"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.lastName,onChange:ne,name:"lastName",placeholder:"Enter last name"})]})})]})}),(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(d.Z,{sm:12,md:6,lg:6,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Phone Number"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",maxLength:"15",onKeyPress:function(e){return function(e){/[0-9]+/g.test(e.key)||e.preventDefault()}(e)},value:Z.phone,onChange:ne,name:"phone",placeholder:"Enter phone number"})]})}),(0,g.jsx)(d.Z,{children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Truck Number"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",onChange:ne,name:"truck",value:Z.truck,placeholder:"Enter truck number"})]})})]})]})]}),(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(d.Z,{sm:12,md:6,lg:6,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Code"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.id,onChange:ne,name:"id",placeholder:"Enter code"})]})}),(0,g.jsx)(d.Z,{children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"County"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.county,onChange:ne,name:"county",placeholder:"Enter county"})]})})]}),(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(d.Z,{lg:4,md:6,sm:12,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Route"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",onChange:ne,name:"route",value:Z.route,placeholder:"Enter route",maxLength:"7"})]})}),(0,g.jsx)(d.Z,{lg:4,md:6,sm:12,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Route Day"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.route_day,onChange:ne,name:"route_day",placeholder:"Enter route day",maxLength:"1"})]})}),(0,g.jsx)(d.Z,{lg:4,md:6,sm:12,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Route Down"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.route_down,onChange:ne,name:"route_down",placeholder:"Enter route down"})]})}),(0,g.jsx)(d.Z,{lg:6,sm:12,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"MB"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.mb,onChange:ne,name:"mb",placeholder:"Enter mb",maxlength:"4"})]})}),(0,g.jsx)(d.Z,{lg:6,sm:12,children:(0,g.jsxs)(m.Z.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[(0,g.jsx)(m.Z.Label,{className:"AddDriver__content--Form_lable",children:"Notes"}),(0,g.jsx)(m.Z.Control,{className:"Form_control",type:"text",value:Z.notes,onChange:ne,name:"notes",placeholder:"Enter notes"})]})})]}),(0,g.jsxs)("div",{style:{textAlign:"right"},className:"mt-3 ",children:[(0,g.jsx)(h.Z,{onClick:function(a){if(a.preventDefault(),re||Z.firstName&&Z.lastName)if(Z.phone.length>4)if(re)Q.old_code!==Q.new_code||Y.id!==Y.new_code?(0,p.S8)(""===Q.old_code||void 0===Q.old_code?Y:Q).then((function(a){a.data.success&&(Q.old_code===Q.new_code&&Y.id===Y.new_code||(0,p.K8)(L,Z).then((function(a){a.data.success&&(_.Am.success("Driver suceessfully Update!"),e("/dashboard/driver"))})).catch((function(e){console.log(e.message)})))})).catch((function(e){console.log(e)})):ee&&(0,p.K8)(L,Z).then((function(a){a.data.success&&(_.Am.success("Driver suceessfully Update!"),e("/dashboard/driver"))})).catch((function(e){console.log(e.message)}));else{var r=localStorage.getItem("switchData"),t=(0,n.Z)((0,n.Z)({name:Z.firstName+" "+Z.lastName},Z),{},{is_friday_driver:"true"==r});(0,p.eu)(L,t).then((function(a){console.log("response",a),a.data.success&&(_.Am.success("Driver suceessfully added!"),e("/dashboard/driver"))})).catch((function(e){console.log(e)}))}else _.Am.error("Please fill out phone number.");else _.Am.error("Please fill out first name and last name.")},children:"Save"}),(0,g.jsx)(h.Z,{className:"btn btn-danger mx-2",onClick:function(){e("/dashboard/driver")},children:"Cancel"})]})]})})})]})})]})}},2144:function(e,a,r){r.d(a,{Z:function(){return E}});var n=r(1413),t=r(5987),s=r(1694),o=r.n(s),l=r(2791),c=r(162),d=r(6543),i=r(7472),m=r(184),h=["bsPrefix","className","variant","as"],u=l.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.variant,d=e.as,i=void 0===d?"img":d,u=(0,t.Z)(e,h),p=(0,c.vE)(r,"card-img");return(0,m.jsx)(i,(0,n.Z)({ref:a,className:o()(l?"".concat(p,"-").concat(l):p,s)},u))}));u.displayName="CardImg";var p=u,x=l.createContext(null);x.displayName="CardHeaderContext";var v=x,_=["bsPrefix","className","as"],g=l.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,d=e.as,i=void 0===d?"div":d,h=(0,t.Z)(e,_),u=(0,c.vE)(r,"card-header"),p=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return(0,m.jsx)(v.Provider,{value:p,children:(0,m.jsx)(i,(0,n.Z)((0,n.Z)({ref:a},h),{},{className:o()(s,u)}))})}));g.displayName="CardHeader";var f=g,N=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,i.Z)("h5"),Z=(0,i.Z)("h6"),b=(0,d.Z)("card-body"),C=(0,d.Z)("card-title",{Component:j}),y=(0,d.Z)("card-subtitle",{Component:Z}),A=(0,d.Z)("card-link",{Component:"a"}),D=(0,d.Z)("card-text",{Component:"p"}),I=(0,d.Z)("card-footer"),F=(0,d.Z)("card-img-overlay"),w=l.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.bg,d=e.text,i=e.border,h=e.body,u=e.children,p=e.as,x=void 0===p?"div":p,v=(0,t.Z)(e,N),_=(0,c.vE)(r,"card");return(0,m.jsx)(x,(0,n.Z)((0,n.Z)({ref:a},v),{},{className:o()(s,_,l&&"bg-".concat(l),d&&"text-".concat(d),i&&"border-".concat(i)),children:h?(0,m.jsx)(b,{children:u}):u}))}));w.displayName="Card",w.defaultProps={body:!1};var E=Object.assign(w,{Img:p,Title:C,Subtitle:y,Body:b,Link:A,Text:D,Header:f,Footer:I,ImgOverlay:F})},9743:function(e,a,r){var n=r(1413),t=r(5987),s=r(1694),o=r.n(s),l=r(2791),c=r(162),d=r(184),i=["bsPrefix","className","as"],m=l.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,l=e.as,m=void 0===l?"div":l,h=(0,t.Z)(e,i),u=(0,c.vE)(r,"row"),p=(0,c.pi)(),x="".concat(u,"-cols"),v=[];return p.forEach((function(e){var a,r=h[e];delete h[e],a=null!=r&&"object"===typeof r?r.cols:r;var n="xs"!==e?"-".concat(e):"";null!=a&&v.push("".concat(x).concat(n,"-").concat(a))})),(0,d.jsx)(m,(0,n.Z)((0,n.Z)({ref:a},h),{},{className:o().apply(void 0,[s,u].concat(v))}))}));m.displayName="Row",a.Z=m}}]);
//# sourceMappingURL=878.cab0506f.chunk.js.map