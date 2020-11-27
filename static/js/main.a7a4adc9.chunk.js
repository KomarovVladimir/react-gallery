(this["webpackJsonpreact-gallery"]=this["webpackJsonpreact-gallery"]||[]).push([[0],{14:function(e,t,a){e.exports={gallery:"layout_gallery__3womD",item:"layout_item__2R4Y3",appear:"layout_appear__2iSgk"}},21:function(e,t,a){e.exports={item:"album_item__HqEl5",thumbnail:"album_thumbnail__f6ICF",meta:"album_meta__3zpkn",name:"album_name__3czYe",label:"album_label__2Ju1L"}},25:function(e,t,a){e.exports={h1:"typography_h1__kQ9fz",a:"typography_a__8hNGT"}},38:function(e,t,a){e.exports={item:"image_item__326qo"}},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(1),r=a.n(c),s=a(26),o=a.n(s),u=a(7),i=a(20),l=a(24),p=a(40),b=a(16),m=a.n(b),j=a(15),d=a(37),g=a(17),f={items:[],currentAlbumImages:[],currentImage:{},isLoading:!1,popapIsOpenned:!1},_=Object(l.b)({name:"albums",initialState:f,reducers:{reset:function(e){return f},getAlbums:function(e){e.isLoading=!0},getAlbumsSuccess:function(e,t){e.isLoading=!1,e.items=Object(i.a)(t.payload)},getAlbumsFailure:function(e){e.isLoading=!1},setCurrentAlbumId:function(e,t){e.currentAlbumId=t.payload},getAlbumImages:function(e){e.isLoading=!0},getAlbumImagesSuccess:function(e,t){e.isLoading=!1,e.currentAlbumImages=Object(i.a)(t.payload)},getAlbumImagesFailure:function(e){e.isLoading=!1},getImages:function(e){e.isLoading=!0},getImagesSuccess:function(e,t){e.isLoading=!1,e.items=Object(i.a)(t.payload)},getImagesFailure:function(e){e.isLoading=!1},setCurrentImage:function(e,t){e.currentImage=e.currentAlbumImages.find((function(e){return e.id===t.payload}))},openPopup:function(e){e.popapIsOpenned=!0},closePopup:function(e){e.popapIsOpenned=!1}}}),O=_.actions,h=O.reset,x=O.getAlbums,v=O.getAlbumsSuccess,y=O.getAlbumsFailure,I=O.getAlbumImages,N=O.getAlbumImagesSuccess,k=O.getAlbumImagesFailure,w=O.setCurrentAlbumId,A=O.setCurrentImage,C=O.openPopup,L=O.closePopup,S=_.reducer,F=m.a.mark(z),P=m.a.mark(J),q=m.a.mark(B);function z(){var e,t,a,n,c,r,s,o,u;return m.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,fetch("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=16");case 3:return e=i.sent,i.next=6,e.json();case 6:t=i.sent,a=[],n=Object(d.a)(t),i.prev=9,n.s();case 11:if((c=n.n()).done){i.next=23;break}return r=c.value,i.next=15,fetch("https://jsonplaceholder.typicode.com/albums/".concat(r.id,"/photos?_start=0&_limit=1"));case 15:return s=i.sent,o=s.headers.get("x-total-count"),i.next=19,s.json();case 19:u=i.sent,a.push(Object(j.a)(Object(j.a)({},r),{},{thumbnailUrl:u[0].url,imagesNumber:o}));case 21:i.next=11;break;case 23:i.next=28;break;case 25:i.prev=25,i.t0=i.catch(9),n.e(i.t0);case 28:return i.prev=28,n.f(),i.finish(28);case 31:return i.next=33,Object(g.a)({type:v.type,payload:a});case 33:i.next=40;break;case 35:return i.prev=35,i.t1=i.catch(0),console.error(i.t1),i.next=40,Object(g.a)({type:y.type});case 40:case"end":return i.stop()}}),F,null,[[0,35],[9,25,28,31]])}function J(e){var t,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/albums/".concat(e.payload,"/photos"));case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,n.next=9,Object(g.a)({type:N.type,payload:a});case 9:n.next=16;break;case 11:return n.prev=11,n.t0=n.catch(0),console.error(n.t0),n.next=16,Object(g.a)({type:k.type});case 16:case"end":return n.stop()}}),P,null,[[0,11]])}function B(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(x.type,z);case 2:return e.next=4,Object(g.b)(I.type,J);case 4:case"end":return e.stop()}}),q)}var E=B,R=Object(p.a)(),U=Object(l.a)({reducer:{albums:S},middleware:[].concat(Object(i.a)(Object(l.c)()),[R])});R.run(E);var Y=U,H=a(29),D=a(6),G=a(21),K=a.n(G),M=a(14),Q=a.n(M);var T=function(e){var t=Object(u.b)(),a=Object(D.f)();return Object(n.jsxs)("div",{className:"".concat(Q.a.item," ").concat(K.a.item),onClick:function(){a.push("/album/".concat(e.title)),t(w(e.id))},children:[Object(n.jsx)("img",{className:K.a.thumbnail,src:e.thumbnailUrl,alt:e.title}),Object(n.jsxs)("div",{className:K.a.meta,children:[Object(n.jsx)("span",{className:K.a.name,children:e.title}),Object(n.jsxs)("span",{className:K.a.label,children:[e.imagesNumber," images"]})]})]})};var V=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.albums}));return Object(c.useEffect)((function(){e(h()),e(x())}),[]),Object(n.jsx)("div",{className:Q.a.gallery,children:t.items.map((function(e){return Object(n.jsx)(T,Object(j.a)({},e),e.id)}))})},W=a(38),X=a.n(W);var Z=function(e){var t=Object(u.b)();return Object(n.jsx)("div",{className:Q.a.item,onClick:function(){t(C()),t(A(e.id))},children:Object(n.jsx)("img",{className:X.a.item,src:e.url,alt:e.title})})},$=a(39),ee=a(8),te=a.n(ee);var ae=function(e){var t=Object(u.b)(),a=Object(u.c)((function(e){return e.albums.currentAlbumImages})),r=Object(u.c)((function(e){return e.albums.currentImage})),s=Object(c.useState)(0),o=Object($.a)(s,2),i=o[0],l=o[1];return Object(n.jsx)("div",{className:te.a.popup,children:Object(n.jsxs)("div",{className:te.a.content,children:[Object(n.jsxs)("div",{className:te.a.viewport,children:[Object(n.jsx)("img",{className:te.a.image,src:r.url,alt:e.alt}),Object(n.jsx)("button",{className:"".concat(te.a.navigation," ").concat(te.a.navigationPrev),onClick:function(){var e=a.findIndex((function(e){return e.id===r.id}));e>0&&t(A(a[e-1].id))}}),Object(n.jsx)("button",{className:"".concat(te.a.navigation," ").concat(te.a.navigationNext),onClick:function(){var e=a.findIndex((function(e){return e.id===r.id}));e<=a.length-2&&t(A(a[e].id+1))}})]}),Object(n.jsx)("button",{className:te.a.close,onClick:function(){t(L())}}),Object(n.jsxs)("div",{className:te.a.carousel,children:[i>0&&Object(n.jsx)("button",{className:"".concat(te.a.arrow," ").concat(te.a.arrowLeft),onClick:function(){i>0&&l(i-1)}}),i<a.length-1&&Object(n.jsx)("button",{className:"".concat(te.a.arrow," ").concat(te.a.arrowRight),onClick:function(){i<a.length&&l(i+1)}}),Object(n.jsx)("div",{className:te.a.carouselContent,style:{left:9*-i+"rem"},children:a&&a.map((function(e){return Object(n.jsx)("img",{className:te.a.carouselItem,src:e.thumbnailUrl,alt:e.title,onClick:(a=e.id,function(){t(A(a))})},e.id);var a}))})]})]})})};var ne=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.albums.currentAlbumId})),a=Object(u.c)((function(e){return e.albums.currentAlbumImages})),r=Object(u.c)((function(e){return e.albums.popapIsOpenned}));return Object(c.useEffect)((function(){e(I(t))}),[]),Object(n.jsxs)("div",{className:Q.a.gallery,children:[r&&Object(n.jsx)(ae,{}),a&&a.map((function(e){return Object(n.jsx)(Z,Object(j.a)({},e),e.id)}))]})},ce=a(25),re=a.n(ce);var se=function(){return Object(n.jsx)(H.a,{basename:"/react-gallery",children:Object(n.jsxs)(D.c,{children:[Object(n.jsxs)(D.a,{exact:!0,path:"/",children:[Object(n.jsx)("h1",{className:re.a.h1,children:"Albums"}),Object(n.jsx)(V,{})]}),Object(n.jsxs)(D.a,{path:"/album",children:[Object(n.jsx)("h1",{className:re.a.h1,children:Object(n.jsx)(H.b,{className:"".concat(re.a.h1," ").concat(re.a.a),to:"/",children:"Back to albums"})}),Object(n.jsx)(ne,{})]})]})})};a(52);o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(u.a,{store:Y,children:Object(n.jsx)(se,{})})}),document.getElementById("root"))},8:function(e,t,a){e.exports={popup:"popup_popup__2YH9o",content:"popup_content__3VHBz",close:"popup_close__3KaXq",navigation:"popup_navigation__3Wnr6",navigationPrev:"popup_navigationPrev__q9f0D",navigationNext:"popup_navigationNext__2a18i",viewport:"popup_viewport__zkdCj",image:"popup_image__2uNB1",carousel:"popup_carousel__9ZFPa",arrow:"popup_arrow__3CqmY",carouselContent:"popup_carouselContent__3uJKs",carouselItem:"popup_carouselItem__2qF0f",arrowLeft:"popup_arrowLeft__1G9Un",arrowRight:"popup_arrowRight__1J-7z"}}},[[53,1,2]]]);
//# sourceMappingURL=main.a7a4adc9.chunk.js.map