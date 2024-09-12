/*! For license information please see 5312.4aa4c75fb2deee33c916.js.LICENSE.txt */
"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[5312,72],{80072:(e,t,n)=>{n.r(t),n.d(t,{BaseUrlProvider:()=>w,GridSystemProvider:()=>O,ProjectProvider:()=>$,ReferencesProvider:()=>S,SiteProvider:()=>B,TabStateProvider:()=>F,Theme:()=>s,ThemeProvider:()=>m,UiStateProvider:()=>E,XRefProvider:()=>q,isTheme:()=>f,useBaseurl:()=>_,useFrontmatter:()=>N,useGridSystemProvider:()=>P,useLinkProvider:()=>y,useMediaQuery:()=>i,useNavLinkProvider:()=>C,useNavOpen:()=>U,useNodeRenderers:()=>x,useProjectManifest:()=>J,useReferences:()=>k,useSiteManifest:()=>A,useTabSet:()=>I,useTheme:()=>p,useThemeTop:()=>g,useXRefState:()=>X,withBaseurl:()=>L});var r=n(76512),o=n.n(r);function i(e){const t="undefined"==typeof document,n=e=>!t&&window.matchMedia(e).matches,[o,i]=(0,r.useState)(n(e));function s(){i(n(e))}return(0,r.useEffect)((()=>{if(t)return;const n=window.matchMedia(e);return s(),n.addEventListener("change",s),()=>{n.removeEventListener("change",s)}}),[e]),o}var s,u,c=n(17624);!function(e){e.light="light",e.dark="dark"}(s||(s={})),function(e){e.noSite="Site was not found",e.noArticle="Article was not found"}(u||(u={}));var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function a(e){var{to:t,className:n,children:r,prefetch:o}=e,i=l(e,["to","className","children","prefetch"]);return(0,c.jsx)("a",Object.assign({href:t,className:n},i,{children:r}))}function d(e){var{to:t,className:n,children:r,prefetch:o}=e,i=l(e,["to","className","children","prefetch"]);const s="function"==typeof n?n({isActive:!1}):n;return(0,c.jsx)("a",Object.assign({href:t,className:s},i,{children:r}))}function f(e){return"string"==typeof e&&Object.values(s).includes(e)}const h=o().createContext(void 0);h.displayName="ThemeContext";const v="(prefers-color-scheme: light)";function m({children:e,theme:t=s.light,renderers:n,Link:r,top:i,NavLink:u}){const[l,a]=o().useState((()=>t?f(t)?t:null:"undefined"==typeof document?null:window.matchMedia(v).matches?s.light:s.dark)),d=o().useCallback((e=>{if(!e||e===l||!f(e))return;"undefined"!=typeof document&&(document.getElementsByTagName("html")[0].className=e);const t=new XMLHttpRequest;t.open("POST","/api/theme"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify({theme:e})),a(e)}),[l]);return(0,c.jsx)(h.Provider,{value:{theme:l,setTheme:d,renderers:n,Link:r,NavLink:u,top:i},children:e})}function p(){const e=o().useContext(h);if(void 0===e){const e="useTheme should be used within a ThemeProvider",t=()=>{throw new Error(e)};return console.error(e),{theme:s.light,isLight:!0,isDark:!1,setTheme:t,nextTheme:t}}const{theme:t,setTheme:n}=e,r=t===s.dark,i=t===s.light,u=o().useCallback((()=>{const e=t===s.light?s.dark:s.light;n(e)}),[t]);return{theme:t,isLight:i,isDark:r,setTheme:n,nextTheme:u}}function x(){const e=o().useContext(h),{renderers:t}=null!=e?e:{};return null!=t?t:{}}function y(){const e=o().useContext(h),{Link:t}=null!=e?e:{};return null!=t?t:a}function C(){const e=o().useContext(h),{NavLink:t}=null!=e?e:{};return null!=t?t:d}function g(){const e=o().useContext(h),{top:t}=null!=e?e:{};return t||0}const j=o().createContext(void 0);function O({children:e,gridSystem:t}){return(0,c.jsx)(j.Provider,{value:{gridSystem:t},children:e})}function P(){const e=o().useContext(j),{gridSystem:t}=null!=e?e:{};return t||"article-grid"}j.displayName="GridSystemContext";const b=o().createContext({});function S({references:e,frontmatter:t,children:n}){return(0,c.jsx)(b.Provider,{value:{references:e,frontmatter:t},children:n})}function k(){const e=(0,r.useContext)(b);return null==e?void 0:e.references}function N(){const e=(0,r.useContext)(b);return null==e?void 0:e.frontmatter}const T=o().createContext({});function w({baseurl:e,children:t}){return(0,c.jsx)(T.Provider,{value:{baseurl:e},children:t})}function _(){const e=(0,r.useContext)(T);return null==e?void 0:e.baseurl}function L(e,t){return t?t+e:e}const R=(0,r.createContext)(void 0);function E({children:e}){const t=i("(min-width: 1280px)"),[n,o]=(0,r.useState)({isNavOpen:!1});return(0,r.useEffect)((()=>{t&&o(Object.assign(Object.assign({},n),{isNavOpen:!1}))}),[t]),(0,c.jsx)(R.Provider,{value:[n,o],children:e})}function U(){var e,t;const[n,o]=null!==(e=(0,r.useContext)(R))&&void 0!==e?e:[];return[null!==(t=null==n?void 0:n.isNavOpen)&&void 0!==t&&t,e=>{e!==(null==n?void 0:n.isNavOpen)&&(null==o||o(Object.assign(Object.assign({},n),{isNavOpen:e})))}]}const M=o().createContext(void 0);function B({config:e,children:t}){return(0,c.jsx)(M.Provider,{value:e,children:t})}function A(){return(0,r.useContext)(M)}const D=(0,r.createContext)(void 0);function F({children:e}){const[t,n]=(0,r.useState)("");return(0,c.jsx)(D.Provider,{value:[t,n],children:e})}function I(){return(0,r.useContext)(D)}const G=(0,r.createContext)(void 0);function X(){var e;return null!==(e=(0,r.useContext)(G))&&void 0!==e?e:{inCrossRef:!1,remote:!1}}function q({remote:e,url:t,dataUrl:n,children:r}){const o=X(),i={inCrossRef:!0,remote:null!=e?e:o.remote,url:null!=t?t:o.url,dataUrl:null!=n?n:o.dataUrl};return i.remote&&!i.url&&(i.remote=!1),(0,c.jsx)(G.Provider,{value:i,children:r})}const H=o().createContext(void 0);function $({project:e,children:t}){var n;const r=A();return(0,c.jsx)(H.Provider,{value:null!=e?e:null===(n=null==r?void 0:r.projects)||void 0===n?void 0:n[0],children:t})}function J(){return(0,r.useContext)(H)}},44808:(e,t,n)=>{var r=n(76512),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:a,props:i,_owner:u.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)}}]);