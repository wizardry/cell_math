(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4],{199:function(t,e,n){var content=n(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("9cc4765e",content,!0,{sourceMap:!1})},200:function(t,e,n){"use strict";var r=n(8),o=n(5),l=n(81),c=n(12),h=n(9),d=n(35),f=n(157),v=n(55),m=n(4),y=n(43),_=n(56).f,w=n(24).f,x=n(11).f,A=n(202).trim,C="Number",S=o.Number,N=S.prototype,k=d(y(N))==C,D=function(t){var e,n,r,o,l,c,h,code,d=v(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=A(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,h=0;h<c;h++)if((code=l.charCodeAt(h))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(l(C,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var M,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(k?m((function(){N.valueOf.call(n)})):d(n)!=C)?f(new S(D(e)),n,T):D(e)},I=r?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;I.length>$;$++)h(S,M=I[$])&&!h(T,M)&&x(T,M,w(S,M));T.prototype=N,N.constructor=T,c(o,C,T)}},201:function(t,e,n){var content=n(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("3e8d22c0",content,!0,{sourceMap:!1})},202:function(t,e,n){var r=n(15),o="["+n(203)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),h=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},203:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},204:function(t,e,n){"use strict";n(199)},205:function(t,e,n){var r=n(112)(!1);r.push([t.i,".correct input{background:#7fffd4}.fail input{background:#ffb6c1}",""]),t.exports=r},206:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(82);var o=n(114),l=n(58);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},207:function(t,e,n){"use strict";n.r(e);n(200);var r={add:"+",sub:"-",multi:"×",div:"÷"},o={props:{answer:{type:Number,required:!0},columnValue:{type:Number,required:!0},rowValue:{type:Number,required:!0},calcType:{type:String,required:!0},position:{type:Number,required:!0},isFirstFocus:{type:Boolean,default:!1}},data:function(){return{inputAnswer:"",isCorrect:!1,isChange:!1}},computed:{operator:function(){return r[this.calcType]},cellClass:function(){return{correct:this.isChange&&this.isCorrect,fail:this.isChange&&!this.isCorrect}}},mounted:function(){this.isFirstFocus&&this.$refs.input.focus()},methods:{onChange:function(t){this.isChange||(this.isChange=!0),this.isCorrect=Number(this.inputAnswer)===Number(this.answer),this.$emit("change",{isCorrect:this.isCorrect,position:this.position})},onNextRow:function(){this.$emit("next-row",this.position)},onNextCol:function(){this.$emit("next-col",this.position)},onPrevRow:function(){this.$emit("prev-row",this.position)},onPrevCol:function(){this.$emit("prev-col",this.position)}}},l=(n(204),n(33)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.cellClass},[n("span",[t._v(t._s(t.columnValue)+" "+t._s(t.operator)+" "+t._s(t.rowValue))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAnswer,expression:"inputAnswer"}],ref:"input",attrs:{type:"number"},domProps:{value:t.inputAnswer},on:{change:t.onChange,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.onNextRow.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.onNextRow.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.onPrevRow.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:(e.preventDefault(),"button"in e&&0!==e.button?null:t.onPrevCol.apply(null,arguments))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?null:(e.preventDefault(),"button"in e&&2!==e.button?null:t.onNextCol.apply(null,arguments))}],input:function(e){e.target.composing||(t.inputAnswer=e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("d3ab42f8",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";n(201)},210:function(t,e,n){var r=n(112)(!1);r.push([t.i,".nuxt-logo{height:180px}",""]),t.exports=r},211:function(t,e,n){"use strict";n.r(e);var r=n(206),o=(n(34),n(158),{props:{columnData:{type:Array,default:function(){return[]}},rowData:{type:Array,default:function(){return[]}},calcType:{type:String,default:"add"}},data:function(){return{inputAnswers:Object(r.a)(Array(this.rowData.length*this.columnData.length))}},computed:{answers:function(){var t=this;return Object(r.a)(Array(this.rowData.length)).map((function(e,n){return Object(r.a)(Array(t.columnData.length)).map((function(e,r){return t.columnData[r].value+t.rowData[n].value}))}))}},watch:{inputAnswers:{handler:function(t,e){this.$emit("change",t),t.every((function(t){return!0===t}))&&this.$emit("done")},deep:!0}},mounted:function(){},methods:{onChange:function(t){this.inputAnswers.splice(t.position,1,t.isCorrect)},onNextRow:function(t){var e=t+this.columnData.length;e>this.$refs.input.length||this.$refs.input[e].$refs.input.focus()},onNextCol:function(t){var e=t+1;e>this.$refs.input.length||this.$refs.input[e].$refs.input.focus()},onPrevRow:function(t){var e=t-this.columnData.length;e<0||this.$refs.input[e].$refs.input.focus()},onPrevCol:function(t){var e=t-1;e<0||this.$refs.input[e].$refs.input.focus()}}}),l=(n(209),n(33)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",[n("thead",[n("tr",[n("th"),t._v(" "),t._l(t.columnData,(function(e){return n("th",{key:"thx:"+e.id},[t._v("\n          "+t._s(e.value)+"\n        ")])}))],2)]),t._v(" "),n("tbody",t._l(t.rowData,(function(e,r){return n("tr",{key:"r:"+r},[n("th",[t._v(t._s(e.value))]),t._v(" "),t._l(t.columnData,(function(o,l){return n("td",{key:"y:"+r+",x"+o.id},[n("cell-input",{ref:"input",refInFor:!0,attrs:{answer:t.answers[r][l],"column-value":o.value,"row-value":e.value,"calc-type":t.calcType,position:l+r*t.columnData.length,"is-first-focus":0===r&&0===l},on:{change:t.onChange,"next-row":t.onNextRow,"next-col":t.onNextCol,"prev-row":t.onPrevRow,"prev-col":t.onPrevCol}})],1)}))],2)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CellInput:n(207).default})},212:function(t,e,n){"use strict";n(208)},213:function(t,e,n){var r=n(112)(!1);r.push([t.i,".nuxt-logo{height:180px}",""]),t.exports=r},215:function(t,e,n){"use strict";n.r(e);var r=n(206),o=(n(57),n(36),n(200),n(34),{data:function(){return{widthSize:10,heightSize:10,minMath:1,maxMath:9,correctCount:0,coutnTimer:null,countTime:0,inputAdd:!0,inputSub:!1,inputMulti:!1,inputDiv:!1,isStarted:!1,startDatetime:null,mathData:[]}},computed:{totalSectionCount:function(){return this.widthSize*this.heightSize},countTimeText:function(){return Math.floor(100*this.countTime)/100}},methods:{onStart:function(){var t=this;this.generateMathData(),this.isStarted=!0,this.startDatetime=new Date,this.coutnTimer=setInterval((function(){t.countTime=.001*(Date.now()-t.startDatetime)}),10)},onFinish:function(){this.isStarted=!1,clearInterval(this.coutnTimer),this.countTimer=null,this.startDatetime=null,this.countTime=0},onReset:function(){var t=this;this.isStarted=!1,this.$nextTick((function(){return t.isStarted=!0}))},onChange:function(t){this.correctCount=t.filter((function(t){return t})).length},onDone:function(){this.isStarted=!1,clearInterval(this.coutnTimer)},generateMathData:function(){var t=[this.inputAdd?"add":null,this.inputSub?"sub":null,this.inputMulti?"multi":null,this.inputDiv?"div":null].filter(Boolean),e=Math.ceil(Number(this.minMath)),n=Math.floor(Number(this.maxMath)),o=Number(this.widthSize),l=Number(this.heightSize),c=t[Math.floor(Math.random()*t.length)];this.mathData={x:Object(r.a)(Array(o)).map((function(t,r){return{id:r,value:Math.floor(Math.random()*(n-e)+e)}})),y:Object(r.a)(Array(l)).map((function(t,r){return{id:r,value:Math.floor(Math.random()*(n-e)+e)}})),calcType:c}}}}),l=(n(212),n(33)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("100マスけいさん")]),t._v(" "),n("div",{staticClass:"setting"},[n("dl",[n("dt",[t._v("よこマス")]),t._v(" "),n("dd",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.widthSize,expression:"widthSize"}],attrs:{type:"number",min:"1",max:"100"},domProps:{value:t.widthSize},on:{input:function(e){e.target.composing||(t.widthSize=e.target.value)}}})]),t._v(" "),n("dt",[t._v("たてマス")]),t._v(" "),n("dd",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.heightSize,expression:"heightSize"}],attrs:{type:"number",min:"1",max:"100"},domProps:{value:t.heightSize},on:{input:function(e){e.target.composing||(t.heightSize=e.target.value)}}})]),t._v(" "),n("dt",[t._v("ちいさいすうじ")]),t._v(" "),n("dd",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.minMath,expression:"minMath"}],attrs:{type:"number",min:"1",max:"100"},domProps:{value:t.minMath},on:{input:function(e){e.target.composing||(t.minMath=e.target.value)}}})]),t._v(" "),n("dt",[t._v("おおきいすうじ")]),t._v(" "),n("dd",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.maxMath,expression:"maxMath"}],attrs:{type:"number",min:"1",max:"100"},domProps:{value:t.maxMath},on:{input:function(e){e.target.composing||(t.maxMath=e.target.value)}}})]),t._v(" "),n("dt",[t._v(" つかう けいさん ")]),t._v(" "),n("dd",[n("label",{attrs:{for:""}},[t._v("\n          たしざん\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAdd,expression:"inputAdd"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputAdd)?t._i(t.inputAdd,null)>-1:t.inputAdd},on:{change:function(e){var n=t.inputAdd,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.inputAdd=n.concat([null])):l>-1&&(t.inputAdd=n.slice(0,l).concat(n.slice(l+1)))}else t.inputAdd=o}}})]),t._v(" "),n("label",{attrs:{for:""}},[t._v("\n          ひきざん\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputSub,expression:"inputSub"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputSub)?t._i(t.inputSub,null)>-1:t.inputSub},on:{change:function(e){var n=t.inputSub,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.inputSub=n.concat([null])):l>-1&&(t.inputSub=n.slice(0,l).concat(n.slice(l+1)))}else t.inputSub=o}}})]),t._v(" "),n("label",{attrs:{for:""}},[t._v("\n          かけざん\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputMulti,expression:"inputMulti"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputMulti)?t._i(t.inputMulti,null)>-1:t.inputMulti},on:{change:function(e){var n=t.inputMulti,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.inputMulti=n.concat([null])):l>-1&&(t.inputMulti=n.slice(0,l).concat(n.slice(l+1)))}else t.inputMulti=o}}})]),t._v(" "),n("label",{attrs:{for:""}},[t._v("\n          わりざん\n          "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDiv,expression:"inputDiv"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputDiv)?t._i(t.inputDiv,null)>-1:t.inputDiv},on:{change:function(e){var n=t.inputDiv,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.inputDiv=n.concat([null])):l>-1&&(t.inputDiv=n.slice(0,l).concat(n.slice(l+1)))}else t.inputDiv=o}}})])])]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.isStarted,expression:"!isStarted"}],on:{click:t.onStart}},[t._v("\n      はじめる\n    ")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isStarted,expression:"isStarted"}],on:{click:t.onReset}},[t._v("\n      ぜんぶからにする\n    ")]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isStarted,expression:"isStarted"}],on:{click:t.onFinish}},[t._v("\n      おわる\n    ")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"hudWrapper"},[n("ul",[n("li",[t._v("じかん: "+t._s(t.countTimeText))]),t._v(" "),n("li",[t._v("せいかい： "+t._s(t.correctCount)+" / "+t._s(t.totalSectionCount))])])]),t._v(" "),n("div",{staticClass:"cellMathContent"},[t.isStarted?n("cell-math",{attrs:{"column-data":t.mathData.x,"row-data":t.mathData.y,"calc-type":t.mathData.calcType},on:{done:t.onDone,change:t.onChange}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CellMath:n(211).default})},218:function(t,e,n){"use strict";n.r(e);var r={},o=n(33),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("cell-math-wrapper")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CellMathWrapper:n(215).default})}}]);