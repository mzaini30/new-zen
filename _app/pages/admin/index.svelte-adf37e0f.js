import{S as s,i as t,s as a,l,f as e,e as r,t as n,c,a as o,g as i,d as h,b as u,E as d,h as f,J as m,k as p,I as g,n as v,G as E,K as k,L as b}from"../../chunks/vendor-84ea97d9.js";import{s as I,k as j}from"../../chunks/api-b46f828b.js";function y(s,t,a){const l=s.slice();return l[2]=t[a],l}function x(s){let t,a=s[0],r=[];for(let l=0;l<a.length;l+=1)r[l]=A(y(s,a,l));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=l()},l(s){for(let t=0;t<r.length;t+=1)r[t].l(s);t=l()},m(s,a){for(let t=0;t<r.length;t+=1)r[t].m(s,a);e(s,t,a)},p(s,l){if(1&l){let e;for(a=s[0],e=0;e<a.length;e+=1){const n=y(s,a,e);r[e]?r[e].p(n,l):(r[e]=A(n),r[e].c(),r[e].m(t.parentNode,t))}for(;e<r.length;e+=1)r[e].d(1);r.length=a.length}},d(s){m(r,s),s&&h(t)}}}function A(s){let t,a,l,m=s[2].judul+"";return{c(){t=r("a"),a=n(m),this.h()},l(s){t=c(s,"A",{href:!0,class:!0});var l=o(t);a=i(l,m),l.forEach(h),this.h()},h(){u(t,"href",l="/admin/olah?action=edit&slug="+s[2].slug),u(t,"class","list-group-item list-group-item-action")},m(s,l){e(s,t,l),d(t,a)},p(s,e){1&e&&m!==(m=s[2].judul+"")&&f(a,m),1&e&&l!==(l="/admin/olah?action=edit&slug="+s[2].slug)&&u(t,"href",l)},d(s){s&&h(t)}}}function D(s){let t,a,l,n,i,f,m,k=s[0]&&x(s);return{c(){t=p(),a=r("div"),l=r("form"),n=r("input"),i=p(),f=r("div"),m=r("div"),k&&k.c(),this.h()},l(s){g('[data-svelte="svelte-13s6o7t"]',document.head).forEach(h),t=v(s),a=c(s,"DIV",{class:!0});var e=o(a);l=c(e,"FORM",{action:!0});var r=o(l);n=c(r,"INPUT",{type:!0,class:!0,placeholder:!0,required:!0}),r.forEach(h),e.forEach(h),i=v(s),f=c(s,"DIV",{class:!0});var u=o(f);m=c(u,"DIV",{class:!0});var d=o(m);k&&k.l(d),d.forEach(h),u.forEach(h),this.h()},h(){document.title="Admin",u(n,"type","text"),u(n,"class","form-control"),u(n,"placeholder","Cari Apa?"),n.required=!0,u(l,"action",""),u(a,"class","mb-3"),u(m,"class","list-group"),u(f,"class","mb-3")},m(s,r){e(s,t,r),e(s,a,r),d(a,l),d(l,n),e(s,i,r),e(s,f,r),d(f,m),k&&k.m(m,null)},p(s,[t]){s[0]?k?k.p(s,t):(k=x(s),k.c(),k.m(m,null)):k&&(k.d(1),k=null)},i:E,o:E,d(s){s&&h(t),s&&h(a),s&&h(i),s&&h(f),k&&k.d()}}}function V(s,t,a){let l;return async function(){let s=await k.post(I,b.stringify({id:j,kunci:"ringkasan"}));s=s.data,a(0,l=s)}(),[l]}export default class extends s{constructor(s){super(),t(this,s,V,D,a,{})}}