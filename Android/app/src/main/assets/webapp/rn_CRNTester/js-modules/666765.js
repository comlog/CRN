__d(function(g,r,i,a,m,e,d){'use strict';var o=r(d[0]),t=r(d[1]),b=t.StyleSheet,l=t.View,n=b.create({box:{width:100,height:100},wrapper:{flexDirection:'row'},border1:{borderWidth:10,borderColor:'brown'},borderRadius:{borderWidth:10,borderRadius:10,borderColor:'cyan'},border2:{borderWidth:10,borderTopColor:'red',borderRightColor:'yellow',borderBottomColor:'green',borderLeftColor:'blue'},border3:{borderColor:'purple',borderTopWidth:10,borderRightWidth:20,borderBottomWidth:30,borderLeftWidth:40},border4:{borderTopWidth:10,borderTopColor:'red',borderRightWidth:20,borderRightColor:'yellow',borderBottomWidth:30,borderBottomColor:'green',borderLeftWidth:40,borderLeftColor:'blue'},border5:{borderRadius:50,borderTopWidth:10,borderTopColor:'red',borderRightWidth:20,borderRightColor:'yellow',borderBottomWidth:30,borderBottomColor:'green',borderLeftWidth:40,borderLeftColor:'blue'},border6:{borderTopWidth:10,borderTopColor:'red',borderRightWidth:20,borderRightColor:'yellow',borderBottomWidth:30,borderBottomColor:'green',borderLeftWidth:40,borderLeftColor:'blue',borderTopLeftRadius:100},border7:{borderWidth:10,borderColor:'#f007',borderRadius:30,overflow:'hidden'},border7_inner:{backgroundColor:'blue',width:100,height:100},border8:{width:60,height:60,borderColor:'black',marginRight:10,backgroundColor:'lightgrey'},border8Top:{borderTopWidth:5},border8Left:{borderLeftWidth:5},border8Bottom:{borderBottomWidth:5},border8Right:{borderRightWidth:5},border9:{borderWidth:10,borderTopLeftRadius:10,borderBottomRightRadius:20,borderColor:'black'},border10:{borderWidth:10,backgroundColor:'white',borderTopLeftRadius:10,borderBottomRightRadius:20,borderColor:'black',elevation:10},border11:{width:0,height:0,borderStyle:'solid',overflow:'hidden',borderTopWidth:50,borderRightWidth:0,borderBottomWidth:50,borderLeftWidth:100,borderTopColor:'transparent',borderRightColor:'transparent',borderBottomColor:'transparent',borderLeftColor:'red'},border12:{borderStyle:'solid',overflow:'hidden',borderTopWidth:10,borderRightWidth:20,borderBottomWidth:30,borderLeftWidth:40,borderRadius:20},border13:{borderStyle:'solid',overflow:'hidden',borderTopWidth:10,borderRightWidth:20,borderBottomWidth:30,borderLeftWidth:40,borderTopColor:'red',borderRightColor:'green',borderBottomColor:'blue',borderLeftColor:'magenta',borderRadius:20},border14:{borderStyle:'solid',overflow:'hidden',borderTopWidth:10,borderRightWidth:20,borderBottomWidth:30,borderLeftWidth:40,borderTopColor:'red',borderRightColor:'green',borderBottomColor:'blue',borderLeftColor:'magenta',borderTopLeftRadius:10,borderTopRightRadius:40,borderBottomRightRadius:30,borderBottomLeftRadius:40}});e.title='Border',e.description='Demonstrates some of the border styles available to Views.',e.examples=[{title:'Equal-Width / Same-Color',description:'borderWidth & borderColor',render:function(){return o.createElement(l,{style:[n.box,n.border1]})}},{title:'Equal-Width / Same-Color',description:'borderWidth & borderColor & borderRadius',render:function(){return o.createElement(l,{style:[n.box,n.borderRadius]})}},{title:'Equal-Width Borders',description:'borderWidth & border*Color',render:function(){return o.createElement(l,{style:[n.box,n.border2]})}},{title:'Same-Color Borders',description:'border*Width & borderColor',render:function(){return o.createElement(l,{style:[n.box,n.border3]})}},{title:'Custom Borders',description:'border*Width & border*Color',render:function(){return o.createElement(l,{style:[n.box,n.border4]})}},{title:'Custom Borders',description:'border*Width & border*Color',platform:'ios',render:function(){return o.createElement(l,{style:[n.box,n.border5]})}},{title:'Custom Borders',description:'border*Width & border*Color',platform:'ios',render:function(){return o.createElement(l,{style:[n.box,n.border6]})}},{title:'Custom Borders',description:'borderRadius & clipping',platform:'ios',render:function(){return o.createElement(l,{style:[n.box,n.border7]},o.createElement(l,{style:n.border7_inner}))}},{title:'Single Borders',description:'top, left, bottom right',render:function(){return o.createElement(l,{style:n.wrapper},o.createElement(l,{style:[n.box,n.border8,n.border8Top]}),o.createElement(l,{style:[n.box,n.border8,n.border8Left]}),o.createElement(l,{style:[n.box,n.border8,n.border8Bottom]}),o.createElement(l,{style:[n.box,n.border8,n.border8Right]}))}},{title:'Corner Radii',description:'borderTopLeftRadius & borderBottomRightRadius',render:function(){return o.createElement(l,{style:[n.box,n.border9]})}},{title:'Corner Radii / Elevation',description:'borderTopLeftRadius & borderBottomRightRadius & elevation',platform:'android',render:function(){return o.createElement(l,{style:[n.box,n.border10]})}},{title:'CSS Trick - Triangle',description:'create a triangle by manipulating border colors and widths',render:function(){return o.createElement(l,{style:[n.border11]})}},{title:'Curved border(Left|Right|Bottom|Top)Width',description:'Make a non-uniform width curved border',render:function(){return o.createElement(l,{style:[n.box,n.border12]})}},{title:'Curved border(Left|Right|Bottom|Top)Color',description:'Make a non-uniform color curved border',render:function(){return o.createElement(l,{style:[n.box,n.border13]})}},{title:'Curved border(Top|Bottom)(Left|Right)Radius',description:'Make a non-uniform radius curved border',render:function(){return o.createElement(l,{style:[n.box,n.border14]})}}]},666765,[11,15]);