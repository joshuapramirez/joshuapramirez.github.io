(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],Array(19).concat([function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),r=n(8),c=n.n(r),o=n(4),s=(n(19),n(1));function l(e){return e.isPhone?null:Object(s.jsxs)("div",{className:"socials",children:[Object(s.jsx)("a",{href:"https://github.com/MedericCar",title:"Github",children:Object(s.jsx)("i",{class:"fab fa-github"})}),Object(s.jsx)("a",{href:"mailto: carriatmederic@gmail.com",title:"Mail",children:Object(s.jsx)("i",{class:"far fa-envelope"})}),Object(s.jsx)("a",{href:"https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/",title:"LinkedIn",children:Object(s.jsx)("i",{class:"fab fa-linkedin"})}),Object(s.jsx)("a",{href:"https://resume.medericcarriat.com",title:"Resume",children:Object(s.jsx)("i",{class:"far fa-id-card"})})]})}var d=n(12),u=(n(21),function(e){return e?Object(s.jsx)("button",{disabled:!0,style:{cursor:"default",color:"var(--green)",backgroundColor:"var(--bg-green)",border:"1px var(--green) solid"},children:"Thank you !"}):Object(s.jsx)("button",{type:"submit",children:"Send"})});function j(e){var t=e.isPhone,n=Object(i.useState)(""),a=Object(o.a)(n,2),r=a[0],c=a[1],j=Object(i.useState)(""),h=Object(o.a)(j,2),b=h[0],f=h[1],m=Object(i.useState)(""),p=Object(o.a)(m,2),g=p[0],x=p[1],v=Object(i.useState)(""),O=Object(o.a)(v,2),w=O[0],y=O[1],k=Object(i.useState)(!1),C=Object(o.a)(k,2),A=C[0],S=C[1];return Object(s.jsxs)("div",{className:"contact",id:"contact",children:[Object(s.jsxs)("div",{className:"form-wrapper",children:[Object(s.jsxs)("h1",{id:"title",children:[Object(s.jsx)("span",{className:"blue",children:"Contact"})," me !"]}),Object(s.jsx)("p",{id:"description",children:"If you have an opportunity for me, feel free to leave a message"}),Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),r&&b&&g&&w){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(g).toLowerCase()))return void alert("Please enter a valid email.");var t={name:r,company:b,mail:g,message:w};d.a.send("SERVICE_ID","TEMPLATE_ID",t,"USER_ID").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})),c(""),f(""),x(""),y(""),S(!0)}else alert("Please fill in all fields.")},children:[Object(s.jsx)("input",{type:"text",placeholder:"Name",value:r,onChange:function(e){return c(e.target.value)}}),Object(s.jsx)("input",{type:"text",placeholder:"Company",value:b,onChange:function(e){return f(e.target.value)}}),Object(s.jsx)("input",{type:"text",placeholder:"Email",value:g,onChange:function(e){return x(e.target.value)}}),Object(s.jsx)("textarea",{placeholder:"Message",value:w,onChange:function(e){return y(e.target.value)}}),u(A)]})]}),t?Object(s.jsx)(l,{}):"",Object(s.jsxs)("p",{id:"footer",children:["\xa9 ",(new Date).getFullYear()," M\xe9d\xe9ric Carriat"]})]})}var h=n(5),b={p:[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],vertexShader:'\n    \n    varying float maxDelta;\n    varying float delta;\n\n    uniform int p[496]; \n    uniform float time;\n    \n    // Permutation array, repeated to avoid overflow\n    \n    // Smooth function\n    float fade(float v)\n    {\n      return (v * v * v * (v * (v * 6.0 - 15.0) + 10.0));\n    }\n    \n    // Pseudo-random direction : compute dot product between distance vector (fx, fy, fz) \n    // in the cube with a random gradient vector (12 possibilities)\n    float grad(int hash, float x, float y, float z)\n    {\n      float val = mod(float(hash), 15.0);\n      if (val == 0.0) return  x + y;\n      else if (val == 1.0) return -x + y;\n      else if (val == 2.0) return  x - y;\n      else if (val == 3.0) return -x - y;\n      else if (val == 4.0) return  x + z;\n      else if (val == 5.0) return -x + z;\n      else if (val == 6.0) return  x - z;\n      else if (val == 7.0) return -x - z;\n      else if (val == 8.0) return  y + z;\n      else if (val == 9.0) return -y + z;\n      else if (val == 10.0) return  y - z;\n      else if (val == 11.0) return -y - z;\n      else if (val == 12.0) return  y + x;\n      else if (val == 13.0) return -y + z;\n      else if (val == 14.0) return  y - x;\n      else if (val == 15.0) return -y - z;\n      else return 0.0;\n    }\n    \n    // Noise function based on pseudo-random gradient values\n    // Perlin, Ken. 2002. "Improving Noise." \n    float noise(float x, float y, float z)\n    {\n      // Unit cube of the point (bounds are [i, i+1])\n      int ix = int(mod(floor(x), 255.0));\n      int iy = int(mod(floor(y), 255.0));\n      int iz = int(mod(floor(z), 255.0));\n    \n      // Position in the cube (fractional part)\n      float fx = x - float(ix);\n      float fy = y - float(iy);\n      float fz = z - float(iz);\n    \n      // Smooth the coordinates for smoother transition between gradients\n      float u = fade(fx);\n      float v = fade(fy);\n      float w = fade(fz);\n    \n      // Hash coordinates of cube corners\n      int A =  p[ix     ] + iy;\n      int B =  p[ix  + 1] + iy;\n      int AA = p[A      ] + iz;\n      int BA = p[B      ] + iz;\n      int AB = p[A   + 1] + iz;\n      int BB = p[B   + 1] + iz;\n    \n      // Interpolate axis by axis\n      return mix(\n        mix(\n          mix(\n            grad(p[AA  ], fx  , fy  , fz  ),\n            grad(p[BA  ], fx-1.0, fy  , fz  ),\n            u\n          ),\n          mix(\n            grad(p[AB  ], fx  , fy-1.0, fz  ),\n            grad(p[BB  ], fx-1.0, fy-1.0, fz  ),\n            u\n          ),\n          v\n        ),\n        mix(\n          mix(\n            grad(p[AA+1], fx  , fy  , fz-1.0),\n            grad(p[BA+1], fx-1.0, fy  , fz-1.0),\n            u\n          ),\n          mix(\n            grad(p[AB+1], fx  , fy-1.0, fz-1.0),\n            grad(p[BB+1], fx-1.0, fy-1.0, fz-1.0),\n            u\n          ),\n          v\n        ),\n        w\n      );\n    }\n    \n    void main()\n    {\n      float freq = 0.0075;\n      float amplitude = 0.2;\n\n      // Conversion to clip\n      vec4 pos = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);\n      pos.xyz /= pos.w;\n      pos.w = 1.0 / pos.w;\n      pos.xyz += vec3(15);\n      pos.xy *= vec2(1000);\n    \n      maxDelta = amplitude;\n      delta = noise(pos.x*freq, pos.y*freq, time) * amplitude;\n      //delta = noise(pos.x*freq, pos.y*freq, time) * amplitude;\n    \n      vec3 FragWorldPosDisplaced = vec3(modelMatrix * vec4(position + normal * delta, 1.0));\n      gl_Position = projectionMatrix * viewMatrix * vec4(FragWorldPosDisplaced, 1.0);\n    }\n    ',fragmentShader:"\n    \n    varying float maxDelta;\n    varying float delta;\n      \n    uniform float time;\n    uniform vec4 color1;\n    uniform vec4 color2;\n\n\n    void main()\n    {\n        vec4 color = mix(color1, color2, delta / maxDelta);\n        gl_FragColor = color;\n    } \n    "};n(22);function f(e){var t=e.darkTheme,n=e.active,a=e.setActivePage,r=Object(i.useRef)(null),c=Object(i.useState)(null),l=Object(o.a)(c,2),d=l[0],u=l[1];Object(i.useEffect)((function(){var e,i,a,c=r.current,o=Date.now(),s=new h.f,l=new h.d(75,window.innerWidth/window.innerHeight,.1,1e3),j=new h.i({antialias:!0});j.setClearColor(t?0:16250871,1),j.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(j.domElement);t?(e=new h.e(12,2,70,50),a=new h.a(53759),i=new h.a(265045)):(e=new h.e(12,2,70,50),a=new h.a(5387176),i=new h.a(1549275));var f=new h.g({glslVersion:h.b,wireframe:!0,vertexShader:b.vertexShader,fragmentShader:b.fragmentShader,uniforms:{p:{value:b.p},time:{value:0},color1:{value:new h.h(i.r,i.g,i.b,1)},color2:{value:new h.h(a.r,a.g,a.b,1)}}}),m=new h.c(e,f);m.rotateX(-1.1),m.position.z=2,m.position.y=-1.15,s.add(m);var p=new h.c(e,f);p.rotateX(1.1),p.position.z=2,p.position.y=1.15,s.add(p),l.position.z=5;return window.addEventListener("resize",(function(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),j.setSize(window.innerWidth,window.innerHeight)}),!1),function e(){if(!n)return cancelAnimationFrame(d),void u(null);u(requestAnimationFrame(e));var t=Date.now()-o;m.material.uniforms.time.value=t/1e3/2,m.material.uniforms.time.value%=30,j.render(s,l)}(),function(){return c.removeChild(j.domElement)}}),[t,n]);return Object(s.jsxs)("div",{className:"intro",id:"intro",children:[Object(s.jsx)("div",{id:"c",ref:r}),Object(s.jsxs)("div",{className:"info",children:[Object(s.jsx)("h1",{className:"blue",children:"M\xe9d\xe9ric Carriat"}),Object(s.jsx)("h4",{className:"blue",children:"Software Engineer looking for a 6-month internship"})]}),Object(s.jsx)("div",{className:"arrow-border",children:Object(s.jsx)("a",{className:"arrow-container",href:"#experience",onClick:function(){var e=[!1,!1,!1,!1];e[1]=!0,a(e)},children:Object(s.jsx)("span",{className:"arrow",children:Object(s.jsx)("i",{class:"fas fa-arrow-right blue"})})})})]})}var m=n.p+"static/media/epita.f88f36c3.png",p=n.p+"static/media/ens.c48c41c3.png",g=n.p+"static/media/siemens.4aa8efa4.png",x=n.p+"static/media/concordia.586d2aff.png",v=n.p+"static/media/pathtracer.7fb61344.png",O=n.p+"static/media/website.9319c4d9.png",w=n.p+"static/media/wce.a743c1d0.png",y=n.p+"static/media/stoch.8e4b04f6.png",k=n.p+"static/media/tau.8b7e67b6.png",C=n.p+"static/media/tiger.09d00f4c.jpg",A=[{company:"EPITA",logo:m,title:"Bachelor in Computer Science",startDate:new Date(2017,9),endDate:new Date(2020,7),description:[Object(s.jsx)("p",{children:"Courses in programming, mathematics, algorithmics, computer architecture."}),Object(s.jsxs)("p",{children:["Tags : ",Object(s.jsx)("b",{children:"OCaml, Python, C, C++, Unix"})]})],color:"blue",position:"center"},{company:"Concordia",logo:x,title:"Volunteering",startDate:new Date(2018,7,1),endDate:new Date(2018,8,31),description:[Object(s.jsx)("p",{children:"Renovation of Latresnes' church with 10 other international students."})],color:"red",position:"bottom"},{company:"Tampere University",logo:m,title:"Exchange semester in Finland",startDate:new Date(2019,1,1),endDate:new Date(2019,5),description:[Object(s.jsx)("p",{children:"Courses in Machine Learning, Signal Compression and Software Engineering."}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"3rd out of 105 teams"})," at the university's ",Object(s.jsx)("u",{children:Object(s.jsx)("a",{href:"https://www.kaggle.com/c/robotsurface/overview",children:"Kaggle competition"})}),"."]})],color:"purple",position:"top"},{company:"ENS - PSL",logo:p,title:"Internship",startDate:new Date(2019,5,1),endDate:new Date(2019,8,31),description:[Object(s.jsxs)("p",{children:["Benchmarking of the ",Object(s.jsx)("u",{children:Object(s.jsx)("a",{href:"https://divime.readthedocs.io/en/latest/initial_questions.html#what-is-the-aclew-divime",children:"DiViMe"})})," speech processing tool."]}),Object(s.jsxs)("p",{children:["Implementation of the ",Object(s.jsx)("u",{children:Object(s.jsx)("a",{href:"https://www.sciencedirect.com/science/article/pii/S0167639318304205",children:"automatic word count estimation algorithm"})})," (R\xe4s\xe4nen, Okko, et al., 2019)."]}),Object(s.jsxs)("p",{children:["Tags: ",Object(s.jsx)("b",{children:"MATLAB, Python, Docker"})]})],color:"yellow",position:"bottom"},{company:"EPITA",logo:m,title:"Master in Image Processing and Computer Graphics",startDate:new Date(2020,9,1),endDate:new Date(2022,7),description:[Object(s.jsx)("p",{children:"Courses in Image Processing, Computer Vision and Computer Graphics."}),Object(s.jsxs)("p",{children:["Tags: ",Object(s.jsx)("b",{children:"C++, Python, OpenGL, CUDA"})]})],color:"blue",position:"center"},{company:"Factonics",logo:"data:image/png;base64,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",title:"Internship",startDate:new Date(2020,9,1),endDate:new Date(2021,2,31),description:[Object(s.jsxs)("p",{children:["Improvement of Factonics' ",Object(s.jsx)("b",{children:"ML deployment"})," platform."]}),Object(s.jsxs)("p",{children:["Development of a ",Object(s.jsx)("b",{children:"Named-entity recognition "}),"program specific to the French health system."]}),Object(s.jsxs)("p",{children:["PoC for a ",Object(s.jsx)("b",{children:"newsletter recommendation"})," system on behalf of ",Object(s.jsx)("i",{children:"BPI France"}),"."]}),Object(s.jsxs)("p",{children:["Tags: ",Object(s.jsx)("b",{children:"Python, AWS, Docker"})]})],color:"orange",position:"bottom"},{company:"Siemens Healthineers",logo:g,title:"End-of-study project",startDate:new Date(2021,3,15),endDate:new Date(2022,2,31),description:[Object(s.jsxs)("p",{children:["Research of a web based solution for ",Object(s.jsx)("b",{children:"real-time transparency"}),"."]}),Object(s.jsxs)("p",{children:["Implementation of ",Object(s.jsx)("u",{children:Object(s.jsx)("a",{href:"https://luebke.us/publications/StochasticTransparency_I3D2010.pdf",children:"Stochastic Transparency"})})," (Enderton, Eric, et al., 2010) with ThreeJS."]}),Object(s.jsxs)("p",{children:["Tags: ",Object(s.jsx)("b",{children:"Typescript, GLSL, ThreeJS"})]})],color:"green",position:"bottom"}],S=[{id:0,title:"Word count estimator",image:w,link:"https://github.com/bootphon/word-count-estimator",description:Object(s.jsxs)("p",{children:["Implementation of the ",Object(s.jsx)("b",{children:Object(s.jsx)("a",{href:"https://www.sciencedirect.com/science/article/pii/S0167639318304205",children:"automatic word count estimation algorithm"})})," (R\xe4s\xe4nen, Okko, et al., 2019)."]}),tags:[{text:"Python",color:"var(--green)",backgroundColor:"var(--bg-green)"},{text:"ML",color:"var(--red)",backgroundColor:"var(--bg-red)"}]},{id:1,title:"Robot Surface Detection",image:k,description:Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Kaggle competition"})," : recognize floor surfaces using data collected from Inertial Sensors."]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Third team"})," out of 105."]})]}),link:"https://www.kaggle.com/c/robotsurface/overview",tags:[{text:"Python",color:"var(--green)",backgroundColor:"var(--bg-green)"},{text:"ML",color:"var(--red)",backgroundColor:"var(--bg-red)"}]},{id:2,title:"Tiger Compiler",image:C,description:Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["Semester long school project to build the ",Object(s.jsx)("b",{children:"frontend of a Tiger compiler"})]})}),link:"https://assignments.lrde.epita.fr/index.html",tags:[{text:"C++",color:"var(--blue)",backgroundColor:"var(--bg-blue)"}]},{id:3,title:"Real-time transparency",image:y,description:Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Stochastic methods"})," for real-time transparency in the ",Object(s.jsx)("b",{children:"browser"}),"."]}),link:"https://github.com/SabineHU/PFEE_Stochastic_Transparency",tags:[{text:"JS",color:"var(--orange)",backgroundColor:"var(--bg-orange)"},{text:"ThreeJS",color:"var(--cyan)",backgroundColor:"var(--bg-cyan)"},{text:"GLSL",color:"var(--pink)",backgroundColor:"var(--bg-pink)"}]},{id:4,title:"Path tracer",image:v,description:Object(s.jsxs)("p",{children:["Path tracing in C++ for Physically Based Rendering. ",Object(s.jsx)("b",{children:"CPU parallelized"})," and optimized with ",Object(s.jsx)("b",{children:"Bounding Volume Hierarchy"}),"."]}),link:"https://github.com/MedericCar/pathtracer",tags:[{text:"C++",color:"var(--blue)",backgroundColor:"var(--bg-blue)"}]},{id:5,title:"Personal website",image:O,description:Object(s.jsxs)("p",{children:["Website made from scratch in ",Object(s.jsx)("b",{children:"functional React"}),". Features a ",Object(s.jsx)("b",{children:"homepage 3D animation"}),"."]}),link:"https://github.com/MedericCar/portfolio",tags:[{text:"React",color:"var(--purple)",backgroundColor:"var(--bg-purple)"},{text:"ThreeJS",color:"var(--cyan)",backgroundColor:"var(--bg-cyan)"},{text:"GLSL",color:"var(--pink)",backgroundColor:"var(--bg-pink)"}]}],P=n(7),D=n(37);n(24);function I(e){var t=e.data,n=e.idx,a=e.darkTheme,r=e.smallViewport,c=Object(i.useState)(-1),l=Object(o.a)(c,2),d=l[0],u=l[1],j=Object(i.useState)(!1),h=Object(o.a)(j,2),b=h[0],f=h[1],m=r?{height:t.width,top:t.startPos}:{width:t.width,left:t.startPos};return Object(s.jsx)("div",{className:"timeline-element ".concat(t.position),style:Object(P.a)(Object(P.a)({},m),{},{background:"var(--".concat(a?"bg-":"").concat(t.color,")")}),onMouseEnter:function(){return u(n)},onMouseLeave:function(){return u(-1)},children:Object(s.jsx)("div",{className:"info",style:{},children:Object(s.jsxs)("div",{className:"text",children:[Object(s.jsx)("h3",{children:t.company}),Object(s.jsx)("h5",{children:function(){var e=t.startDate.getFullYear(),n=t.endDate.getFullYear();return n===e?"".concat(e):"".concat(e," - ").concat(n)}()}),Object(s.jsx)("p",{className:"title",children:t.title}),Object(s.jsx)(D.a,{in:d===n&&!r,timeout:{enter:300,exit:200},classNames:"description",onEntered:function(){return f(!0)},onExited:function(){return f(!1)},unmountOnExit:!0,children:Object(s.jsx)("div",{className:"description",children:function(e,t){if(t)return Object(s.jsx)("ul",{children:e.description.map((function(e,t){return Object(s.jsx)("li",{children:e},t)}))})}(t,b)})})]})})})}n(27);function E(e){var t=e.experience,n=e.darkTheme,i=e.smallViewport,a=function(e){var t=e.reduce((function(e,t){return e.startDate>t.startDate?t:e})),n=e.reduce((function(e,t){return e.endDate<t.endDate?t:e}));return[t.startDate,n.endDate]}(t),r=Object(o.a)(a,2);return function(e,t,n){var i=function(e){var t=(e.endDate-e.startDate)/864e5;e.width="".concat(t/o*100,"%")},a=function(e){var n=(e.startDate-t)/864e5;e.startPos="".concat(n/o*100,"%")},r=function(e,t){var i;i=t?(t.startDate-e.startDate)/864e5:(n-e.startDate)/864e5,e.textLim="".concat(i/o*100*.9,"vw")},c=function(e){var t,n;e.sort((function(e,t){return e.startDate>t.startDate}));for(var c=0;c<e.length-1;c++)t=e[c],n=e[c+1],i(t),a(t),r(t,n);i(n),a(n),r(n)},o=(n-t)/864e5;c(e.filter((function(e){return"top"===e.position||"center"===e.position}))),c(e.filter((function(e){return"bottom"===e.position})))}(t,r[0],r[1]),Object(s.jsx)("div",{className:"timeline",id:"timeline",children:t.map((function(e,t){return Object(s.jsx)(I,{data:e,idx:t,darkTheme:n,smallViewport:i},t)}))})}n(28);function T(e){var t=e.darkTheme,n=e.smallViewport;return Object(s.jsxs)("div",{className:"experience",id:"experience",children:[Object(s.jsxs)("h1",{id:"title",children:["Hi, I'm ",Object(s.jsx)("span",{className:"blue",children:"M\xe9d\xe9ric"})]}),Object(s.jsxs)("div",{id:"description",children:[Object(s.jsxs)("p",{children:["Student at ",Object(s.jsx)("a",{href:"https://www.epita.fr/",children:"EPITA"})," currently in the last year of the Image Processing & Computer Graphics Master, I am looking for a ",Object(s.jsx)("b",{className:"blue",children:"6-month internship"})," starting in ",Object(s.jsx)("b",{className:"blue",children:"February 2021"}),"."]}),Object(s.jsx)("p",{children:"This is what I've been up to the last 5 years."})]}),Object(s.jsx)(E,{experience:A,darkTheme:t,smallViewport:n})]})}n(29);function B(e){var t=e.data,n=e.onClick,i=e.active,a="tag ".concat(i?"active":"inactive"," ").concat(n?"clickable":""),r={color:t.color,backgroundColor:t.backgroundColor,cursor:n?"pointer":"default"};return Object(s.jsx)("div",{className:a,style:r,onClick:function(){return n?n():null},children:t.text})}n(30);function z(e){var t=e.data,n=e.show,i=e.selectedTags;return n?Object(s.jsx)("div",{className:"project-card",style:{animation:"fadeIn 1s"},children:Object(s.jsxs)("a",{href:t.link,children:[Object(s.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.image,")")}}),Object(s.jsxs)("div",{className:"text",children:[Object(s.jsx)("h3",{children:t.title}),Object(s.jsx)("div",{className:"tags",children:t.tags.map((function(e,t){return Object(s.jsx)(B,{data:e,active:i[e.text]||i.All},t)}))}),Object(s.jsx)("p",{className:"description",children:t.description})]})]})}):Object(s.jsx)("div",{className:"project-card",style:{display:"none"}})}n(31);var N=function(e){var t=e.data,n=e.showCards,i=e.selectedTags;return Object(s.jsx)("div",{className:"row",children:t.map((function(e){return Object(s.jsx)(z,{data:e,show:n,selectedTags:i},e.id)}))})},L=function(e){var t=e.tags,n=e.selectedTags,i=e.setSelectedTags,a={text:"All",color:"var(--gray2)",backgroundColor:"var(--gray5)"};return Object(s.jsxs)("div",{className:"filter-list",children:[Object(s.jsx)(B,{data:a,onClick:function(){return function(e){var t=Object.assign({},n);n.All||Object.keys(n).forEach((function(e){return t[e]=!1})),t.All=!n.All,i(t)}()},active:n.All},-1),t.map((function(e,t){return Object(s.jsx)(B,{data:e,onClick:function(){return function(e){var t=Object.assign({},n);t[e.text]=!n[e.text],n[e.text]?Object.values(t).some((function(e){return!0===e}))||(t.All=!0):t.All=!1,i(t)}(e)},active:n[e.text]},t)}))]})};function F(e){var t=e.isTablet,n=function(e){var t=e.map((function(e){return e.tags}));t=[].concat.apply([],t);var n=[];return{totTags:t=t.filter((function(e){return!n.includes(e.text)&&(n.push(e.text),!0)})),totLabels:n}}(S),a=n.totTags,r=n.totLabels;a.sort((function(e,t){return-e.text.localeCompare(t.text)}));var c=Object.fromEntries(r.map((function(e){return[e,!1]})));c=Object(P.a)(Object(P.a)({},c),{},{All:!0});var l=Object(i.useState)(c),d=Object(o.a)(l,2),u=d[0],j=d[1],h=Object(i.useState)([]),b=Object(o.a)(h,2),f=b[0],m=b[1],p=Object(i.useState)(!0),g=Object(o.a)(p,2),x=g[0],v=g[1];Object(i.useEffect)((function(){v(!1),setTimeout((function(){return v(!0)}),300),m(Object.keys(u).filter((function(e){return u[e]&&parseInt(e)}))),S.sort((function(e,t){return parseInt(e.tags[e.tags.length-1].text)<parseInt(t.tags[t.tags.length-1].text)?1:-1}))}),[u]);var O;return Object(s.jsxs)("div",{className:"projects",id:"projects",children:[Object(s.jsxs)("h1",{id:"title",className:"",children:["A few ",Object(s.jsx)("span",{className:"blue",children:"projects"})]}),Object(s.jsx)("div",{id:"description",children:Object(s.jsx)("p",{children:"Here is a list of projects I have done on my personal time or for work/studies"})}),Object(s.jsx)(L,{tags:a,selectedTags:u,setSelectedTags:j}),Object(s.jsx)("div",{className:"cards",children:(O=S,function(e,t){for(var n=[],i=0;i<e.length;i+=t){var a=e.slice(i,i+t);n.push(a)}return n}(O.filter((function(e){return function(e){var t=e.tags.map((function(e){return e.text})),n=Object.keys(u).filter((function(e){return u[e]&&!parseInt(e)}));return!!u.All||(0===n.length?t.some((function(e){return u[e]})):!(0!==f.length&&!t.some((function(e){return f.includes(e)})))&&t.some((function(e){return u[e]&&!f.includes(e)})))}(e)})),t?2:3).map((function(e,t){return Object(s.jsx)(N,{data:e,showCards:x,selectedTags:u},t)})))})]})}n(32);var R=function(e){var t=e.idx,n=e.href,i=e.text,a=e.activePage,r=e.setActivePage,c=e.isPhone,o=e.icon,l=[!1,!1,!1,!1];return l[t]=!0,Object(s.jsxs)("a",{href:n,onClick:function(){return r(l)},className:"link ".concat(a[t]?"active":""),children:[Object(s.jsx)("span",{id:"icon",children:c?o:""}),Object(s.jsx)("div",{id:"text",className:"".concat(c&&a[t]?"blue":""),children:i})]})};function J(e){var t=e.toShow,n=e.activePage,i=e.setActivePage,a=e.isPhone;return Object(s.jsx)(D.a,{in:t,timeout:400,classNames:"topbar",children:Object(s.jsx)("div",{className:"topbar",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("a",{href:"#intro",onClick:function(){return i([!0,!1,!1,!1])},children:Object(s.jsx)("h1",{color:"secondary",children:Object(s.jsx)("b",{className:"blue",children:"MC"})})})}),Object(s.jsx)(l,{isPhone:a}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)(R,{idx:0,href:"#intro",text:"Home",activePage:n,setActivePage:i,isPhone:a,icon:Object(s.jsx)("i",{class:"fas fa-home ".concat(a&&n[0]?"blue":"")})}),Object(s.jsx)(R,{idx:1,href:"#experience",text:"About",activePage:n,setActivePage:i,isPhone:a,icon:Object(s.jsx)("i",{class:"fas fa-user ".concat(a&&n[1]?"blue":"")})}),Object(s.jsx)(R,{idx:2,href:"#projects",text:"Projects",activePage:n,setActivePage:i,isPhone:a,icon:Object(s.jsx)("i",{class:"fas fa-code-branch ".concat(a&&n[2]?"blue":"")})}),Object(s.jsx)(R,{idx:3,href:"#contact",text:"Contact",activePage:n,setActivePage:i,isPhone:a,icon:Object(s.jsx)("i",{class:"fas fa-paper-plane ".concat(a&&n[3]?"blue":"")})})]})]})})})}n(33);function M(e){var t=e.darkTheme,n=e.setDarkTheme;return Object(s.jsxs)("div",{className:"switch",onClick:function(){return n(!t)},children:[Object(s.jsx)("input",{type:"checkbox",defaultChecked:!1,checked:t}),Object(s.jsx)("i",{class:"fas fa-adjust blue"})]})}n(34);var W=function(e){for(var t=e.activePage,n=e.setActivePage,i=0,a=0;a<t.length;a++)t[a]&&(i=a);var r="";switch(i){case 0:return null;case 1:r="#intro";break;case 2:r="#experience";break;case 3:r="#projects";break;default:console.log("Should not be happening")}console.log("left",r);var c=[!1,!1,!1,!1];return c[i-1]=!0,Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("a",{href:r,onClick:function(){return setTimeout((function(){return n(c)}),100)},children:Object(s.jsx)("i",{class:"fas fa-chevron-left"})})})},K=function(e){for(var t=e.activePage,n=e.setActivePage,i=0,a=0;a<t.length;a++)t[a]&&(i=a);console.log(t);var r="";switch(i){case 0:return null;case 1:r="#projects";break;case 2:r="#contact";break;case 3:return null;default:console.log("Should not be happening")}console.log("right",r);var c=[!1,!1,!1,!1];return c[i+1]=!0,Object(s.jsx)("div",{className:"right",children:Object(s.jsx)("a",{href:r,onClick:function(){return setTimeout((function(){return n(c)}),100)},children:Object(s.jsx)("i",{class:"fas fa-chevron-right"})})})};function H(e){var t=e.activePage,n=e.setActivePage;return e.isPhone?null:Object(s.jsxs)("div",{className:"nav-arrows",children:[Object(s.jsx)(W,{activePage:t,setActivePage:n}),Object(s.jsx)(K,{activePage:t,setActivePage:n})]})}n(35);var U=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=a.a.useState(window.innerHeight),l=Object(o.a)(c,2),d=l[0],u=l[1],h=a.a.useState(window.innerWidth),b=Object(o.a)(h,2),m=b[0],p=b[1],g=a.a.useState(window.innerWidth<=991&&window.innerWidth>481),x=Object(o.a)(g,2),v=x[0],O=x[1],w=a.a.useState(window.innerWidth<=481),y=Object(o.a)(w,2),k=y[0],C=y[1];document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px")),Object(i.useEffect)((function(){var e=function(){u(window.innerHeight),p(window.innerWidth),O(window.innerWidth<=991&&window.innerWidth>481),C(window.innerWidth<=481),document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[k]);var A=Object(i.useState)(0),S=Object(o.a)(A,2),P=S[0],D=S[1],I=Object(i.useCallback)((function(){var e=document.getElementsByClassName("sections")[0].scrollLeft;(e-P<0?"left":e-P>0?"right":null)&&D(e)}),[P]);Object(i.useEffect)((function(){var e=document.getElementsByClassName("sections")[0];return e.addEventListener("scroll",I,{passive:!0}),function(){return e.removeEventListener("scroll",I)}}),[I]);var E=Object(i.useState)([!0,!1,!1,!1]),B=Object(o.a)(E,2),z=B[0],N=B[1];return Object(i.useEffect)((function(){var e=function(e){var t=[!1,!1,!1,!1];t[Math.floor(P/m)]=!0,N(t)};return window.addEventListener("load",e),I(),function(){return window.removeEventListener("load",e)}}),[d,m,P,k,v,I]),Object(s.jsxs)("div",{className:"app ".concat(n?"theme-dark":"theme-light"),children:[Object(s.jsx)(J,{toShow:P>=m/2,activePage:z,setActivePage:N,isPhone:k}),Object(s.jsx)(H,{activePage:z,setActivePage:N,isPhone:k}),Object(s.jsx)("div",{className:"lightModeSwitch",children:Object(s.jsx)(M,{darkTheme:n,setDarkTheme:r})}),Object(s.jsxs)("div",{className:"sections",children:[Object(s.jsx)(f,{darkTheme:n,active:P<m,setActivePage:N}),Object(s.jsx)(T,{darkTheme:n,smallViewport:k||v}),Object(s.jsx)(F,{isTablet:v}),Object(s.jsx)(j,{isPhone:k})]})]})};c.a.render(Object(s.jsx)(U,{}),document.getElementById("root"))}]),[[36,1,2]]]);
//# sourceMappingURL=main.fa92b421.chunk.js.map