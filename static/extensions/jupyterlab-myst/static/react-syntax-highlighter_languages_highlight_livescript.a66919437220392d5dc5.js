(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[8076],{45772:e=>{const n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);e.exports=function(e){const r={keyword:n.concat(["then","unless","until","loop","of","by","when","and","or","is","isnt","not","it","that","otherwise","from","to","til","fallthrough","case","enum","native","list","map","__hasProp","__extends","__slice","__bind","__indexOf"]),literal:a.concat(["yes","no","on","off","it","that","void"]),built_in:t.concat(["npm","print"])},s="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",i=e.inherit(e.TITLE_MODE,{begin:s}),o={className:"subst",begin:/#\{/,end:/\}/,keywords:r},c={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:r},l=[e.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,o,c]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,o,c]},{begin:/\\/,end:/(\s|$)/,excludeEnd:!0}]},{className:"regexp",variants:[{begin:"//",end:"//[gim]*",contains:[o,e.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/}]},{begin:"@"+s},{begin:"``",end:"``",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];o.contains=l;const d={className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(l)}]};return{name:"LiveScript",aliases:["ls"],keywords:r,illegal:/\/\*/,contains:l.concat([e.COMMENT("\\/\\*","\\*\\/"),e.HASH_COMMENT_MODE,{begin:"(#=>|=>|\\|>>|-?->|!->)"},{className:"function",contains:[i,d],returnBegin:!0,variants:[{begin:"("+s+"\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?",end:"->\\*?"},{begin:"("+s+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+s+"\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[i]},i]},{begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);