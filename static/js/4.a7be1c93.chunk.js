(this["webpackJsonpresume-react"]=this["webpackJsonpresume-react"]||[]).push([[4],{102:function(e,n,t){"use strict";var r=t(98),c=t(4),a=t.n(c),o=t(143),i=t(100);function l(){var e=Object(r.a)(["\n        font-family: ",";\n        font-size: ",";\n        color: ",";\n    "]);return l=function(){return e},e}n.a=function(e){var n=e.type||"default",t=Object(o.b)();return a.a.createElement(i.a.div(l(),t.text[n].family,t.text[n].size,t.text[n].color),e)}},108:function(e,n,t){"use strict";var r=t(12),c=(t(4),t(33)),a=t(28),o=t.n(a);n.a=function(e){var n=Object(c.useQuery)(o()(e.query)),t=n.data,a=n.loading,i=n.error;return a?Object(r.jsx)("div",{children:"loading from db"}):t&&e.render?e.render({data:t,loading:a,error:i}):Object(r.jsx)("code",{children:JSON.stringify(t)})}},110:function(e,n,t){"use strict";var r=t(9),c=t(98),a=t(4),o=t.n(a),i=t(100);function l(){var e=Object(c.a)(["\n        display: block;\n        padding: 20px;\n    "]);return l=function(){return e},e}n.a=function(e){return o.a.createElement(i.a.div(l()),Object(r.a)({},e))}},111:function(e,n,t){"use strict";var r=t(9),c=t(98),a=t(4),o=t.n(a),i=t(100);function l(){var e=Object(c.a)(["\n        display: flex;\n        flex-direction: ",";\n        padding: 20px;\n    "]);return l=function(){return e},e}n.a=function(e){return o.a.createElement(i.a.div(l(),e.flexDirection),Object(r.a)(Object(r.a)({},e),{},{children:[o.a.Children.map(e.children,(function(e,n){return console.log(e),o.a.cloneElement(e,{style:{padding:"10px"},key:n})}))]}))}},112:function(e,n,t){"use strict";var r=t(98),c=t(4),a=t.n(c),o=t(143),i=t(100);function l(){var e=Object(r.a)(["\n        font-family: ",";\n        font-size: ",";\n        color: ",";\n    "]);return l=function(){return e},e}n.a=function(e){var n=e.type||"default",t=Object(o.b)();return a.a.createElement(i.a.a(l(),t.link[n].family,t.link[n].size,t.link[n].color),e)}},113:function(e,n,t){"use strict";var r=t(98),c=t(4),a=t.n(c),o=t(105),i=t(143),l=t(100);function u(){var e=Object(r.a)(["\n        font-family: ",";\n        font-size: ",";\n        color: ",";\n    "]);return u=function(){return e},e}n.a=function(e){var n=e.type||"default",t=Object(i.b)();return a.a.createElement(Object(l.a)(o.b)(u(),t.navlink[n].family,t.navlink[n].size,t.navlink[n].color),e)}},115:function(e,n,t){"use strict";var r=t(21),c=t(12),a=t(4),o=t.n(a);n.a=function(e){var n=e.contentSchematic,i=n.template,l=n.data,u=function(){switch(i){case"about":return o.a.createElement(o.a.lazy((function(){return Promise.all([t.e(6).then(t.bind(null,126)),new Promise((function(e){return setTimeout(e,300)}))]).then((function(e){return Object(r.a)(e,1)[0]}))})),{data:l});default:return Object(c.jsx)("div",{children:"content template does not exist"})}}();return Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)("div",{children:"Building Content"}),children:u})}},116:function(e,n,t){"use strict";var r=t(98),c=t(9),a=t(21),o=t(12),i=t(4),l=t.n(i),u=t(124),s=t(125),j=t(143),d=t(100);function b(){var e=Object(r.a)(["\n        font-family: ",";\n        font-size: ",";\n        background-color: ",";\n        color: ",";\n        &:hover {\n            cursor: pointer;\n            background-color: ",";\n            color: ",";\n        }\n    "]);return b=function(){return e},e}var f=function(e){var n=e.type||"default",t=Object(j.b)();return l.a.createElement(d.a.div(b(),t.button[n].family,t.button[n].size,t.button[n].backgroundColor,t.button[n].color,t.button[n].hover.backgroundColor,t.button[n].hover.color),e)},p=t(102);function h(){var e=Object(r.a)(["\n        font-family: ",";\n        font-size: ",";\n        color: ",";\n        &:hover {\n            cursor: pointer;\n            color: ","\n        }\n    "]);return h=function(){return e},e}n.a=function(e){var n=e.type||"default",t=Object(j.b)(),r=Object(i.useState)(!0),b=Object(a.a)(r,2),m=b[0],x=b[1],O=l.a.Children.map(e.children,(function(n,t){return l.a.cloneElement(n,Object(c.a)(Object(c.a)({},n.props),{},{key:t,to:e.base+n.props.to,style:{display:m?"block":"none"}}))}));return l.a.createElement(d.a.div(h(),t.navlinkgroup[n].family,t.navlinkgroup[n].size,t.navlinkgroup[n].color,t.navlinkgroup[n].hover.color),Object(c.a)(Object(c.a)({},e),{},{children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(f,{onClick:function(){x(!m)},style:{display:"flex",alignItems:"center",flexDirection:"row"},children:[Object(o.jsx)(u.a,{icon:m?s.a:s.b}),Object(o.jsx)(p.a,{style:{paddingLeft:"10px"},children:e.name})]}),O]})}))}},141:function(e,n,t){"use strict";t.r(n);var r=t(9),c=t(98),a=t(12),o=t(4),i=t.n(o),l=t(99),u=t(105),s=t(117),j=t(143),d=t(108),b=t(100),f=t(110),p=t(111),h=t(102),m=t(112),x=t(113),O=t(116),v=t(115);function y(){var e=Object(c.a)(["\n            grid-row: 1 / 4;\n            grid-column: 2 / 3;\n        "]);return y=function(){return e},e}function g(){var e=Object(c.a)(["\n            grid-row: 1 / 4;\n            grid-column: 1 / 2;\n        "]);return g=function(){return e},e}function k(){var e=Object(c.a)(["\n            height: 100vh;\n            display: grid;\n            grid-template-rows: 2fr 1fr 7fr;\n            grid-template-columns: 1fr 4fr;\n        "]);return k=function(){return e},e}n.default=function(e){var n=e.configs,t=function(e){return i.a.createElement(b.a.div(k()),e)};return t.Sidebar=function(e){return i.a.createElement(b.a.div(g()),Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(p.a,{flexDirection:"column",children:[Object(a.jsx)(h.a,{type:"brand",children:"Jonathan Crawford"}),Object(a.jsx)(h.a,{type:"tagline",children:"Software Engineer"})]}),Object(a.jsxs)(p.a,{flexDirection:"row",children:[Object(a.jsx)(m.a,{type:"social",href:"https://www.linkedin.com/in/jonathantcrawford/",target:"_blank",children:"LinkedIn"}),Object(a.jsx)(m.a,{type:"social",href:"https://github.com/jonathantcrawford",target:"_blank",children:"GitHub"})]}),Object(a.jsxs)(p.a,{flexDirection:"column",children:[Object(a.jsx)(x.a,{to:"/about",children:"About"}),Object(a.jsxs)(O.a,{name:"Work Experience",base:"/work-experience",children:[Object(a.jsx)(x.a,{to:"/bryx",children:"Bryx"}),Object(a.jsx)(x.a,{to:"/catertrax",children:"CaterTrax"})]}),Object(a.jsxs)(O.a,{name:"Projects",base:"/projects",children:[Object(a.jsx)(x.a,{to:"/resume",children:"Resume"}),Object(a.jsx)(x.a,{to:"/todo-app",children:"Todo App"}),Object(a.jsx)(x.a,{to:"/nfl-pickem",children:"NFL Pickem"}),Object(a.jsx)(x.a,{to:"/simplescope",children:"VST Plugin: SimpleScope"}),Object(a.jsx)(x.a,{to:"/3d-audio-demo",children:"3D Audio Demo"})]})]})]})}))},t.View=function(e){return i.a.createElement(b.a.div(y()),Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/about",render:function(e){return Object(a.jsx)(d.a,Object(r.a)(Object(r.a)({},e),{},{query:'\n                                    query {\n                                        content(query: { AND: [{ template: "'.concat(e.match.path.substring(1),'" }] }) {\n                                            template\n                                            data {\n                                                headshot_url\n                                            }\n                                        }\n                                    }\n                                '),render:function(e){var n=e.data;return Object(a.jsx)(v.a,{contentSchematic:n.content})}}))}}),Object(a.jsx)(l.b,{path:"/work-experience/:company",render:function(e){return Object(a.jsx)(d.a,Object(r.a)(Object(r.a)({},e),{},{query:'\n                                    query {\n                                        work_experience(query: { AND: [{ slug: "'.concat(e.match.params.company,'" }] }) {\n                                        company\n                                        role\n                                        location\n                                        duration\n                                        highlights\n                                        }\n                                    }\n                                '),render:function(e){var n=e.data;return Object(a.jsxs)(f.a,{children:[Object(a.jsx)(h.a,{children:n.work_experience.company}),Object(a.jsx)(h.a,{children:n.work_experience.location}),Object(a.jsx)(h.a,{children:n.work_experience.role}),Object(a.jsx)(h.a,{children:n.work_experience.duration}),n.work_experience.highlights.map((function(e,n){return Object(a.jsx)(h.a,{children:e},n)}))]})}}))}}),Object(a.jsx)(l.b,{path:"/projects/:title",component:function(e){return Object(a.jsx)(d.a,Object(r.a)(Object(r.a)({},e),{},{query:'\n                                    query {\n                                        project(query: { AND: [{ slug: "'.concat(e.match.params.title,'" }] }) {\n                                            title\n                                            links {\n                                                title\n                                                url\n                                            }\n                                            highlights\n                                            date\n                                            tools\n                                        }\n                                    }\n                                '),render:function(e){var n=e.data;return Object(a.jsxs)(f.a,{children:[Object(a.jsx)(h.a,{children:n.project.title}),Object(a.jsx)(h.a,{children:n.project.date}),n.project.highlights.map((function(e,n){return Object(a.jsx)(h.a,{children:e},n)})),n.project.tools.map((function(e,n){return Object(a.jsx)(h.a,{children:e},n)})),n.project.links.map((function(e,n){return Object(a.jsx)(m.a,{href:e.url,target:"_blank",children:e.title},n)}))]})}}))}}),Object(a.jsx)(l.b,{path:"*",children:Object(a.jsx)(l.a,{to:"/about"})})]})}))},Object(a.jsx)(j.a,{theme:s.defaultsDeep(n,{text:{default:{family:"'Fira Mono', monospace",size:"12px",color:"black"},brand:{family:"'Fira Mono', monospace",size:"24px",color:"blue"},tagline:{family:"'Fira Mono', monospace",size:"16px",color:"purple"}},link:{default:{family:"'Fira Mono', monospace",size:"10px",color:"purple"},social:{family:"'Fira Mono', monospace",size:"10px",color:"purple"}},navlink:{default:{family:"'Fira Mono', monospace",size:"16px",color:"red"}},navlinkgroup:{default:{family:"'Fira Mono', monospace",size:"18px",color:"pink",hover:{color:"purple"}}},button:{default:{family:"'Fira Mono', monospace",size:"16px",color:"red",backgroundColor:"yellow",hover:{color:"blue",backgroundColor:"orange"}}}}),children:Object(a.jsx)(u.a,{basename:"/",children:Object(a.jsxs)(t,{children:[Object(a.jsx)(t.Sidebar,{}),Object(a.jsx)(t.View,{})]})})})}}}]);
//# sourceMappingURL=4.a7be1c93.chunk.js.map