(this.webpackJsonpmoksha=this.webpackJsonpmoksha||[]).push([[0],{47:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var o=r(8),n=r(21),i=r.n(n),a=r(7),c=r(11),s=r(50),l=r(2),f=r(15),u=r.n(f),h=r(14),d=r(22),m={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"Content - 1",image:"/3163.jpg",aspect:1.51,text:"Since the Meta Hunters do not have a physical form they need the best cutting edge technology to survive and be sentient. The only technology that is shared by our planet and the Meta Planet is blockchain technology."},{offset:2,factor:2,header:"Content - 2",image:"/photo-1519608487953-e999c86e7455.jpeg",aspect:1.5,text:"Since they lost theiir sentience they cannot inject themselves back into the blockchain. Hence it is our duty to help them get there, from where they can start building toward getting back to their planet and reality."},{offset:3,factor:2.25,header:"Content - 3",image:"/ph1.jpg",aspect:1.5037,text:"Text area."},{offset:4,factor:2,header:"Content - 4",image:"/ph3.jpg",aspect:1,text:"Text area."},{offset:5,factor:1.75,header:"Content - 5",image:"/photo-1533577116850-9cc66cad8a9b.jpeg",aspect:1.55,text:"Text area."},{offset:7,factor:1.05,header:"Content - 6",image:"/photo-1548191265-cc70d3d45ba1.jpeg",aspect:1.77,text:"Text area."}],stripes:[{offset:0,color:"#000",height:13},{offset:6.3,color:"#000",height:20}],diamonds:[{x:0,offset:0,pos:new l.Vector3,scale:10,factor:4},{x:0,offset:8,pos:new l.Vector3,scale:2.5,factor:6}],top:Object(a.createRef)()},v=r(9),p=["children","size","left","right","top","bottom","color","opacity","height","layers","font"],j=["text","size","lineHeight","position"];function b(e){var t=e.children,r=e.size,n=void 0===r?1:r,i=e.left,s=e.right,f=e.top,j=e.bottom,b=e.color,g=void 0===b?"white":b,x=e.opacity,O=void 0===x?1:x,y=e.height,w=void 0===y?.01:y,M=(e.layers,e.font),N=void 0===M?"/MOONGET_Heavy.blob":M,z=Object(h.a)(e,p),C=Object(c.d)(l.FontLoader,N),T=Object(d.a)((function(){return new Promise((function(e){return e(new l.TextBufferGeometry(t,{font:C,size:1,height:w,curveSegments:32}))}))}),[t]),k=Object(a.useCallback)((function(e){var t=new l.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=i?0:s?-t.x:-t.x/2,e.position.y=f?0:j?-t.y:-t.y/2}),[i,s,f,j]),D=Object(a.useRef)(),S=m.top.current;return Object(c.c)((function(){D.current.shift=u()(D.current.shift,(m.top.current-S)/100,.1),S=m.top.current})),Object(v.jsx)("group",Object(o.a)(Object(o.a)({},z),{},{scale:[n,n,.1],children:Object(v.jsx)("mesh",{geometry:T,onUpdate:k,frustumCulled:!1,children:Object(v.jsx)("customMaterial",{ref:D,color:g,transparent:!0,opacity:O})})}))}var g=function(e){var t=e.text,r=e.size,n=void 0===r?1:r,i=e.lineHeight,a=void 0===i?1:i,c=e.position,s=void 0===c?[0,0,0]:c,l=Object(h.a)(e,j);return t.split("\n").map((function(e,t){return Object(v.jsx)(b,Object(o.a)(Object(o.a)({size:n},l),{},{position:[s[0],s[1]-t*a,s[2]],children:e}),t)}))},x=r(12),O=r(39),y=r(1),w=r(0),M=r(3),N=r(4),z=function(e){Object(M.a)(r,e);var t=Object(N.a)(r);function r(){return Object(w.a)(this,r),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:l.BackSide})}return Object(y.a)(r)}(l.ShaderMaterial),C=function(e){Object(M.a)(r,e);var t=Object(N.a)(r);function r(e){return Object(w.a)(this,r),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);\n      }\n      void main() {\n        vec2 uv = gl_FragCoord.xy / resolution;\n        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;\n        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/1.5).xy);\n        //gl_FragColor = vec4(mix(color.rgb, vec3(0.15), fresnelFunc(viewDirection, normal)), 1.0);\n        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);\n      }",uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}}})}return Object(y.a)(r)}(l.ShaderMaterial),T=["children","offset","factor"],k=Object(a.createContext)(0);function D(e){var t=e.children,r=e.offset,n=e.factor,i=Object(h.a)(e,T),s=S(),l=s.offset,f=s.sectionHeight,d=Object(a.useRef)();return r=void 0!==r?r:l,Object(c.c)((function(){var e=d.current.position.y,t=m.top.current;d.current.position.y=u()(e,t/m.zoom*n,.1)})),Object(v.jsx)(k.Provider,{value:r,children:Object(v.jsx)("group",Object(o.a)(Object(o.a)({},i),{},{position:[0,-f*r*n,0],children:Object(v.jsx)("group",{ref:d,children:t})}))})}function S(){var e=m.sections,t=m.pages,r=m.zoom,o=Object(c.e)(),n=o.size,i=o.viewport,s=Object(a.useContext)(k),l=i.width*r,f=i.height*r,u=l/r,h=f/r,d=n.width<700;return{viewport:i,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:h,mobile:d,margin:u*(d?.2:.1),contentMaxWidth:u*(d?.8:.6),sectionHeight:h*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var F=new l.Object3D;function H(){var e=Object(c.d)(O.a,"/diamond.glb").nodes;Object(a.useLayoutEffect)((function(){return e.pCone1_lambert1_0.geometry.center()}),[]);var t=Object(c.e)(),r=t.size,o=t.gl,n=t.scene,i=t.camera,s=t.clock,f=S(),h=f.contentMaxWidth,d=f.sectionHeight,p=f.mobile,j=Object(a.useRef)(),b=o.getPixelRatio(),g=Object(a.useMemo)((function(){var e=new l.WebGLRenderTarget(r.width*b,r.height*b),t=new l.WebGLRenderTarget(r.width*b,r.height*b);return[e,t,new z,new C({envMap:e.texture,backfaceMap:t.texture,resolution:[r.width*b,r.height*b]})]}),[r,b]),y=Object(x.a)(g,4),w=y[0],M=y[1],N=y[2],T=y[3];return Object(c.c)((function(){m.diamonds.forEach((function(e,t){var r=s.getElapsedTime()/2,o=e.x,n=e.offset,i=e.scale,a=e.factor,c=h/35*i;e.pos.set(p?0:o,u()(e.pos.y,-d*n*a+m.top.current/m.zoom*a,.1),0),F.position.copy(e.pos),t===m.diamonds.length-1?F.rotation.set(0,r,0):F.rotation.set(r,r,r),F.scale.set(c,c,c),F.updateMatrix(),j.current.setMatrixAt(t,F.matrix),j.current.instanceMatrix.needsUpdate=!0})),o.autoClear=!1,i.layers.set(0),o.setRenderTarget(w),o.clearColor(),o.render(n,i),o.clearDepth(),i.layers.set(1),j.current.material=N,o.setRenderTarget(M),o.clearDepth(),o.render(n,i),i.layers.set(0),o.setRenderTarget(null),o.render(n,i),o.clearDepth(),i.layers.set(1),j.current.material=T,o.render(n,i)}),1),Object(v.jsx)("instancedMesh",{ref:j,layers:1,args:[e.pCone1_lambert1_0.geometry,null,m.diamonds.length],position:[0,0,50]})}var P=function(e){Object(M.a)(r,e);var t=Object(N.a)(r);function r(){return Object(w.a)(this,r),t.call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D tex;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(tex, p + offset);\n        vec4 cga = texture2D(tex, p);\n        vec4 cb = texture2D(tex, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new l.Color("white")}}})}return Object(y.a)(r,[{key:"scale",get:function(){return this.uniforms.scale.value},set:function(e){this.uniforms.scale.value=e}},{key:"shift",get:function(){return this.uniforms.shift.value},set:function(e){this.uniforms.shift.value=e}},{key:"map",get:function(){return this.uniforms.tex.value},set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.tex.value=e}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),r}(l.ShaderMaterial);Object(c.b)({CustomMaterial:P});var R=["color","shift","opacity","args","map"],_=Object(a.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"white":r,i=e.shift,s=void 0===i?1:i,l=e.opacity,f=void 0===l?1:l,d=e.args,p=e.map,j=Object(h.a)(e,R),b=S(),g=b.viewportHeight,x=b.offsetFactor,O=Object(a.useRef)(),y=m.top.current;return Object(c.c)((function(){var e=m.pages,t=m.top;O.current.scale=u()(O.current.scale,x-t.current/((e-1)*g),.1),O.current.shift=u()(O.current.shift,(t.current-y)/s*1.5,.1),y=t.current})),Object(v.jsxs)("mesh",Object(o.a)(Object(o.a)({ref:t},j),{},{children:[Object(v.jsx)("planeBufferGeometry",{args:d}),Object(v.jsx)("customMaterial",{ref:O,color:n,map:p,transparent:!0,opacity:f})]}))}));r(47);function E(){var e=Object(a.useRef)();return Object(c.c)((function(){return e.current.material.opacity=u()(e.current.material.opacity,0,.025)})),Object(v.jsx)(_,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function A(e){var t=e.image,r=e.index,o=e.offset,n=e.factor,i=e.header,a=e.aspect,c=e.text,l=S(),f=l.contentMaxWidth,u=l.canvasWidth,h=l.margin,d=l.mobile,p=a<1&&!d?.65:1,j=(u-f*p-h)/2,g=f*m.zoom*p,x=!(r%2),O=r%2?"#D40749":"#2FE8C3";return Object(v.jsx)(D,{factor:n,offset:o,children:Object(v.jsxs)("group",{position:[x?-j:j,0,0],children:[Object(v.jsx)(_,{map:t,args:[1,1,32,32],shift:75,size:p,aspect:a,scale:[f*p,f*p/a,1],frustumCulled:!1}),Object(v.jsx)(s.a,{style:{width:g/(d?1:2),textAlign:x?"left":"right"},position:[x||d?-f*p/2:0,-f*p/2/a-.4,1],children:Object(v.jsx)("div",{tabIndex:r,children:c})}),Object(v.jsx)(b,{left:x,right:!x,size:.04*f,color:O,top:!0,position:[(x?-f:f)*p/2,f*p/a/2+.5,-1],children:i}),Object(v.jsx)(D,{factor:.2,children:Object(v.jsx)(b,{opacity:.5,size:.5*f,color:"#1A1E2A",position:[(x?f:-f)/2*p,f*p/a/1,-10],children:"0"+(r+1)})})]})})}function W(){var e=Object(c.d)(l.TextureLoader,m.paragraphs.map((function(e){return e.image})));Object(a.useMemo)((function(){return e.forEach((function(e){return e.minFilter=l.LinearFilter}))}),[e]);var t=S(),r=t.contentMaxWidth,n=t.canvasWidth,i=t.canvasHeight,f=t.mobile;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(D,{factor:1,offset:0,children:[Object(v.jsx)(D,{factor:1.2,children:Object(v.jsx)(b,{left:!0,size:.08*r,position:[-r/2.2,.5,-1],color:"#d40749",children:"META HUNTERS"})}),Object(v.jsx)(D,{factor:1,children:Object(v.jsxs)(s.a,{className:"bottom-left",style:{color:"white"},position:[-n/2,-i/2,0],children:["YEAR 2022.",f?Object(v.jsx)("br",{}):" ","THEY AWAIT."]})}),Object(v.jsx)(D,{factor:.2,children:Object(v.jsx)(b,{left:!0,size:.02*r,color:"#fff",position:[-n/3,-i/3,0],children:"In the the year 2022. The Meta Hunters find themselves on earth."})}),Object(v.jsx)(D,{factor:.2,children:Object(v.jsx)(b,{left:!0,size:.02*r,color:"#fff",position:[-n/3,-i/2,0],children:"They seek revenge from their planet that exiled them."})})]}),Object(v.jsx)(D,{factor:1.2,offset:5.7,children:Object(v.jsx)(g,{top:!0,center:!0,size:.1*r,lineHeight:r/5,position:[0,0,-1],color:"#2fe8c3",text:"10,000\nMeta\nHunters"})}),m.paragraphs.map((function(t,r){return Object(v.jsx)(A,Object(o.a)(Object(o.a)({index:r},t),{},{image:e[r]}),r)})),m.stripes.map((function(e,t){var r=e.offset,o=e.color,n=e.height;return Object(v.jsx)(D,{factor:-1.5,offset:r,children:Object(v.jsx)(_,{args:[50,n,32,32],shift:-4,color:o,rotation:[0,0,Math.PI/8],position:[0,0,-10]})},t)})),Object(v.jsx)(D,{factor:1.25,offset:8,children:Object(v.jsx)(s.a,{style:{color:"white"},className:"bottom-left",position:[-n/2,-i/2,0],children:"Culture is not your friend."})})]})}function I(){var e=Object(a.useRef)(),t=function(e){return m.top.current=e.target.scrollTop};return Object(a.useEffect)((function(){t({target:e.current})}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(c.a,{linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:m.zoom,position:[0,0,500]},children:Object(v.jsxs)(a.Suspense,{fallback:Object(v.jsx)(s.a,{center:!0,className:"loading",children:"Loading..."}),children:[Object(v.jsx)(W,{}),Object(v.jsx)(H,{}),Object(v.jsx)(E,{})]})}),Object(v.jsx)("div",{className:"scrollArea",ref:e,onScroll:t,children:new Array(m.sections).fill().map((function(e,t){return Object(v.jsx)("div",{id:"0"+t,style:{height:"".concat(m.pages/m.sections*100,"vh")}},t)}))})]})}i.a.render(Object(v.jsx)(I,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.12c18a50.chunk.js.map