"use strict";(self.webpackChunkjupyterlab_celltagsclasses=self.webpackChunkjupyterlab_celltagsclasses||[]).push([[84],{84:(e,t,l)=>{l.r(t),l.d(t,{Scope:()=>n,apply_on_cells:()=>a,default:()=>j,md_clean:()=>C,md_get:()=>p,md_has:()=>y,md_insert:()=>M,md_remove:()=>b,md_set:()=>h,md_toggle:()=>_,md_toggle_multi:()=>w,md_unset:()=>A});var n,o=l(809),s=l(777);!function(e){e[e.All=0]="All",e[e.Active=1]="Active",e[e.Multiple=2]="Multiple"}(n||(n={}));const a=(e,t,l)=>{var o;const s=null===(o=e.currentWidget)||void 0===o?void 0:o.content;if(void 0===s)return;let a;if(t===n.All)a=s.widgets.slice();else{const e=s.activeCell;if(null===e)return;if(t===n.Active)a=[e];else{const{anchor:t,head:l}=s.getContiguousSelection();a=null===t||null===l?[e]:s.widgets.slice(t,l+1)}}a.forEach(l)},c=e=>{console.log("cell_action on",e.node)},r=e=>{console.log("model_action on",e.node);const t=e.model,l=e.model.sharedModel.getSource();t.sharedModel.setSource(l.toUpperCase())};var d,i=l(272);!function(e){e[e.Get=0]="Get",e[e.Set=1]="Set",e[e.Unset=2]="Unset",e[e.Insert=3]="Insert",e[e.Remove=4]="Remove"}(d||(d={}));const u=e=>{if("string"==typeof e){const t=e;return 0===t.length?[]:t.split(".")}return e instanceof Array?e:(console.error(`xpath must be string or array, got ${e}`),[])},f=(e,t,l,n)=>{const{Get:o,Set:s,Unset:a,Insert:c,Remove:r}=d,i=(e,t,l,n)=>{if(0===l.length)return t===o?e:void 0;if(1===l.length){const[d]=l;switch(t){case o:return e[d];case s:return e[d]=n,n;case a:return d in e&&(delete e[d],!0);case c:if(d in e||(e[d]=[]),!(e[d]instanceof Array))return;{const t=e[d];return t.indexOf(n)<0?(t.push(n),n):void 0}case r:if(!(e[d]instanceof Array))return;const t=e[d],l=t.indexOf(n);return l>=0&&t.splice(l,1),n}}else{const[d,...u]=l;if(d in e){if(e[d]instanceof Object){const l=e[d];return i(l,t,u,n)}return}switch(t){case o:return;case s:e[d]={};const l=e[d];return i(l,t,u,n);case a:return;case c:return 0===u.length?(e[d]=[],i(e[d],t,u,n)):(e[d]={},i(e[d],t,u,n));case r:return}}},f=u(l);return i(e,t,f,n)},m=(e,t)=>f(e,d.Get,t,void 0),g=(e,t,l)=>f(e,d.Set,t,l),v=(e,t)=>((e,t)=>{const l=e=>e instanceof Array?0!==e.length:e instanceof Object?0!==Object.keys(e).length:"string"!=typeof e||0!==e.length,n=e=>e instanceof Array?(e=>e.map(n).filter(l))(e):e instanceof Object?(e=>{const t={};for(const o in e){const s=e[o],a=n(s);l(a)&&(t[o]=a)}return t})(e):e,o=u(t);if(0===o.length)return n(e);{const t=m(e,o);return void 0===t?e:g(e,o,n(t))}})(e,t),p=(e,t,l)=>{e instanceof i.Cell&&(e=e.model),t=u(t);const[n,...o]=t,s=e.getMetadata(n);return void 0===s?l:m(s,o)},h=(e,t,l)=>{t=u(t);const[n,...o]=t,s=e.model.getMetadata(n);if(0===o.length)return e.model.setMetadata(n,l),l;const a=s||{},c=g(a,o,l);return e.model.setMetadata(n,a),c},A=(e,t)=>{t=u(t);const[l,...n]=t,o=e.model.getMetadata(l);if(void 0===o)return!1;if(0===n.length)return e.model.deleteMetadata(l),!0;{const t=((e,t)=>f(e,d.Unset,t,void 0))(o,n);return e.model.setMetadata(l,o),t}},y=(e,t,l)=>{t=u(t);const[n,...o]=t,s=e.model.getMetadata(n);if(void 0===s)return!1;const a=m(s,o);return void 0!==a&&a.indexOf(l)>=0},M=(e,t,l)=>{t=u(t);const[n,...o]=t,s=e.model.getMetadata(n);if(0===o.length){let t;return void 0!==s?(t=s,t=t.slice()):t=[],t.indexOf(l)<0?(t.push(l),e.model.setMetadata(n,t),l):void 0}{const t=s||{},a=((e,t,l)=>f(e,d.Insert,t,l))(t,o,l);return e.model.setMetadata(n,t),a}},b=(e,t,l)=>{t=u(t);const[n,...o]=t,s=e.model.getMetadata(n);if(void 0!==s){if(0===o.length){if(!(s instanceof Array))return;const t=s.slice(),o=t.indexOf(l);if(o<0)return;return t.splice(o,1),e.model.setMetadata(n,t),l}{const t=s,a=((e,t,l)=>f(e,d.Remove,t,l))(t,o,l);return e.model.setMetadata(n,t),a}}},_=(e,t,l)=>(t=u(t),y(e,t,l)?b(e,t,l):M(e,t,l)),w=(e,t,l,n)=>{n.includes(l)&&_(e,t,l);for(const o of n)o!==l&&b(e,t,o)},C=(e,t)=>{t=u(t);const[l,...n]=t;if(void 0===l){console.log(e.model.metadata);for(const t of Object.entries(e.model.metadata)){const l=t,n=v(p(e,l),"");void 0===n||0===n.length?A(e,l):h(e,l,n)}}else{const t=p(e,l),o=v(t,n);void 0===o||0===o.length?A(e,l):h(e,l,o)}},j={id:"jupyterlab-celltagsclasses:plugin",autoStart:!0,requires:[o.INotebookTracker,s.ICommandPalette],activate:(e,t,l)=>{console.log("extension jupyterlab-celltagsclasses is activating"),((e,t,l)=>{const o=(n,o,s,c,r)=>{const d=`celltagsclasses:${n}`;e.commands.addCommand(d,{label:o,execute:()=>{console.log(o),a(t,s,r)}}),l.addItem({command:d,category:"celltagsclasses"}),e.commands.addKeyBinding({command:d,keys:c,selector:".jp-Notebook"})};o("single-model","perform model action on single active cell",n.Active,["Alt-K","Alt-1"],r),o("multiple-model","perform model action on multiple selected cells",n.Multiple,["Alt-K","Alt-2"],r),o("all-model","perform model action on all cells",n.All,["Alt-K","Alt-3"],r),o("single-cell","perform action on single active cell",n.Active,["Alt-K","Alt-4"],c),o("multiple-cell","perform action on multiple selected cells",n.Multiple,["Alt-K","Alt-5"],c),o("all-cell","perform action on all cells",n.All,["Alt-K","Alt-6"],c)})(e,t,l);const o=e=>`cell-tag-${e}`;t.widgetAdded.connect(((e,t)=>{const l=t.content.model;null!==l&&l.cells.changed.connect(((e,l)=>{"add"===l.type&&l.newValues.forEach((e=>{var l;const n=t.content.widgets.filter(((t,l)=>t.model.id===e.id));void 0!==n&&0!==(null==n?void 0:n.length)&&(null===(l=e.getMetadata("tags"))||void 0===l||l.forEach((e=>null==n?void 0:n.forEach((t=>{t.addClass(o(e))})))),e.metadataChanged.connect(((e,t)=>{if("tags"===t.key)if("change"===t.type){const e=t.oldValue,l=t.newValue,s=l.filter((t=>!e.includes(t))),a=e.filter((e=>!l.includes(e)));n.forEach((e=>{s.forEach((t=>{console.debug(`adding class for tag ${o(t)}`),e.addClass(o(t))})),a.forEach((t=>{console.debug(`removing class for tag ${o(t)}`),e.removeClass(o(t))}))}))}else"add"===t.type?(console.debug("celltagsclasses: add",t,t.newValue),n.forEach((e=>{for(const l of t.newValue)e.addClass(o(l))}))):"remove"===t.type&&(console.debug("celltagsclasses: remove",t,t.newValue),n.forEach((e=>{for(const l of t.newValue)e.removeClass(o(l))})))})))}))}))}))}}}}]);