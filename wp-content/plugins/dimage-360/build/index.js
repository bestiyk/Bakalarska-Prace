!function(e){var t={};function l(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,l){"use strict";l.r(t);var a=l(0),o=l(1),r=wp.i18n.__,n=wp.blocks.registerBlockType,c=wp.editor,i=c.MediaUpload;c.PlainText;n("dimage-360/dimage-block",{title:r("Dimage 360"),icon:"smiley",category:"common",keywords:[r("Dimage 360"),r("gts")],attributes:{rotate:{type:"string",default:!0},control:{type:"string",default:!0},zoom:{type:"string",default:!0},zoomlevel:{type:"string",default:0},speed:{type:"string",default:2},image:{type:"string",default:""},position:{type:"string",default:0}},edit:function(e){var t=e.attributes.image;return Object(a.createElement)("div",{className:e.className},Object(a.createElement)("h3",{className:"text-center"},"Dimage 360"),Object(a.createElement)("div",{className:"components-base-control"},Object(a.createElement)("div",{className:"components-base-control__label"},Object(a.createElement)("label",null,"Select Image"))),Object(a.createElement)(i,{onSelect:function(t){t.sizes.medium?t.sizes.medium.url:t.url;e.setAttributes({image:t.url})},type:"image",render:function(e){var t=e.open;return Object(a.createElement)("div",{className:"col-md-4"},Object(a.createElement)("a",{href:"#",className:"gts__picture__image btn btn-primary",onClick:t},"Select Image"))}}),Object(a.createElement)("div",{className:"col-md-8"},t?Object(a.createElement)("img",{width:"100",src:e.attributes.image}):Object(a.createElement)("div",{class:"alert alert-danger",role:"alert"},"No Image Selected.")),Object(a.createElement)("div",{className:"clear-both"}),Object(a.createElement)("br",null),Object(a.createElement)("div",{className:"col-md-6"},Object(a.createElement)(o.SelectControl,{label:"Auto Rotate ",value:e.attributes.rotate,options:[{label:"true",value:"true"},{label:"false",value:"false"}],onChange:function(t){e.setAttributes({rotate:t})}})),Object(a.createElement)("div",{className:"col-md-6"},Object(a.createElement)(o.SelectControl,{label:"Control ",value:e.attributes.conrol,options:[{label:"true",value:"true"},{label:"false",value:"false"}],onChange:function(t){e.setAttributes({control:t})}})),Object(a.createElement)("div",{className:"clear-both"}),Object(a.createElement)("div",{className:"col-md-6"},Object(a.createElement)(o.SelectControl,{label:"Allow Scroll to Zoom ",value:e.attributes.zoom,options:[{label:"true",value:"true"},{label:"false",value:"false"}],onChange:function(t){e.setAttributes({zoom:t})}})),Object(a.createElement)("div",{className:"col-md-6"},Object(a.createElement)(o.SelectControl,{label:"Zoom Level ",value:e.attributes.zoomlevel,options:[{label:"0",value:"0"},{label:"2",value:"2"},{label:"4",value:"4"},{label:"6",value:"6"},{label:"8",value:"8"},{label:"10",value:"10"},{label:"12",value:"12"}],onChange:function(t){e.setAttributes({zoomlevel:t})}})),Object(a.createElement)("div",{className:"clear-both"}),Object(a.createElement)("div",{className:"col-md-6"},Object(a.createElement)(o.SelectControl,{label:"Animation Speed ",value:e.attributes.speed,options:[{label:"0",value:"0"},{label:"2",value:"2"},{label:"4",value:"4"},{label:"6",value:"6"},{label:"8",value:"8"},{label:"10",value:"10"},{label:"12",value:"12"}],onChange:function(t){e.setAttributes({speed:t})}})),Object(a.createElement)("div",{className:"col-md-6"},Object(a.createElement)(o.SelectControl,{label:"Position ",value:e.attributes.position,options:[{label:"0",value:"0"},{label:"2",value:"2"},{label:"4",value:"4"},{label:"6",value:"6"},{label:"8",value:"8"},{label:"10",value:"10"},{label:"12",value:"12"}],onChange:function(t){e.setAttributes({position:t})}})),Object(a.createElement)("div",{className:"clear-both"}))},save:function(e){return wp.element.createElement("div","",'[dimage url="'+e.attributes.image+'" control="'+e.attributes.control+'" auto-rotate="'+e.attributes.rotate+'" allow_scroll_to_zoom="'+e.attributes.zoom+'" zoom_level="'+e.attributes.zoomlevel+'" anim_speed="'+e.attributes.speed+'" default_position="'+e.attributes.position+'"]')},deprecated:[{attributes:{rotate:{type:"string",default:!0},control:{type:"string",default:!0},zoom:{type:"string",default:!0},zoomlevel:{type:"string",default:0},speed:{type:"string",default:2},image:{type:"string",default:""},position:{type:"string",default:0}},save:function(e){return wp.element.createElement("div","",'[dimage url="'+e.attributes.image+'" control="'+e.attributes.control+'" auto-rotate="'+e.attributes.rotate+'" allow_scroll_to_zoom="'+e.attributes.zoom+'" zoom_level="'+e.attributes.zoomlevel+'" anim_speed="'+e.attributes.speed+'"]')}}]})}]);