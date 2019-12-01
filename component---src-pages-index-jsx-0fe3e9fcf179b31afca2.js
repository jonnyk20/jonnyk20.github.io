(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(157),o=a(169),i=a(170),l=a(153),s=a(151),m=(a(171),a(158)),d=(a(172),a(147),a(173),function(e){var t,a=e.project;return c.a.createElement("div",{className:"project"},c.a.createElement("div",{className:"project__image"},c.a.createElement("img",{src:a.image_url})),c.a.createElement("div",{className:"project__info"},c.a.createElement("h3",null,a.title),c.a.createElement("p",null,a.description),c.a.createElement("div",{className:"project__badge-container"},c.a.createElement("a",{href:a.project_url},c.a.createElement("div",{className:"badge"},"Try it out")),!(!(t=a.code_url)||""==t)&&c.a.createElement("a",{href:a.code_url},c.a.createElement("div",{className:"badge"},"See the Code")))))}),p=function(){return c.a.createElement("div",{className:"bio"},c.a.createElement("div",{className:"bio__image"},c.a.createElement("img",{class:"img-fluid",src:"https://s3.ca-central-1.amazonaws.com/jonnyk-misc/portfolio/profile.jpg",alt:"bio image"})),c.a.createElement("div",{className:"bio__info"},c.a.createElement("p",null,"I'm a web developer with a passion for technology and cultures. I also make tutorials on Medium and Youtube. When I'm not coding, I enjoy studying languages, being in nature and taking care of my pet turtle Roshi. Check out some of my projects below!")))},u=a(174),f="#1f96f3",g=function(){return c.a.createElement("div",{className:"contact-card"},c.a.createElement("h3",null,"Get in touch!"),c.a.createElement("div",{className:"contact-card__contacts-container"},c.a.createElement("a",{href:"https://github.com/jonnyk20"},c.a.createElement("div",{className:"social-icon"},c.a.createElement(u.a,{icon:["fab","apple"],color:f,size:"3x"}))),c.a.createElement("a",{href:"https://www.linkedin.com/in/jonnykalambay/"},c.a.createElement("div",{className:"social-icon"},c.a.createElement(u.a,{icon:["fab","linkedin"],color:f,size:"3x"}))),c.a.createElement("a",{href:"https://medium.com/@jonnykalambay"},c.a.createElement("div",{className:"social-icon"},c.a.createElement(u.a,{icon:["fab","medium"],color:f,size:"3x"}))),c.a.createElement("a",{href:"https://www.youtube.com/channel/UCUm0chMKj4MA7q9CWZXWhiA"},c.a.createElement("div",{className:"social-icon"},c.a.createElement(u.a,{icon:["fab","youtube"],color:f,size:"3x"}))),c.a.createElement("a",{href:"http://instagram.com/jonnykalambay"},c.a.createElement("div",{className:"social-icon"},c.a.createElement(u.a,{icon:["fab","instagram"],color:f,size:"3x"}))),c.a.createElement("a",{href:"mailto:jonnyk_78@hotmail.com"},c.a.createElement("div",{className:"social-icon"},c.a.createElement(u.a,{icon:"envelope",color:f,size:"3x"})))))},y=function(){return c.a.createElement("div",{className:"portfolio"},c.a.createElement(p,null),m.projects.map(function(e){return c.a.createElement(d,{key:e.title,project:e})}),c.a.createElement(g,null))};r.b.add(o.a,i.a),console.log({projects:m});t.default=function(){return c.a.createElement(l.a,null,c.a.createElement(s.a,{title:"Portfolio",keywords:["gatsby","application","react"]}),c.a.createElement("div",{className:"container",style:{marginBottom:"1.45rem"}},c.a.createElement(y,null)))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=a(33),l=a.n(i);a.d(t,"a",function(){return l.a});a(148);var s=c.a.createContext({}),m=function(e){return c.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Jonny Kalambay"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var n=a(152),c=a(0),r=a.n(c),o=a(4),i=a.n(o),l=a(155),s=a.n(l);function m(e){var t=e.description,a=e.lang,c=e.meta,o=e.keywords,i=e.title,l=n.data.site,m=t||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(c)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Jonny Kalambay",description:"Portfolio site for web developer Jonny Kalambay.",author:"@jonnykalambay"}}}}},153:function(e,t,a){"use strict";var n=a(149),c=a(0),r=a.n(c),o=a(4),i=a.n(o),l=a(147),s=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"#2196f3",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:i.a.string},s.defaultProps={siteTitle:""};var m=s,d=(a(154),function(e){var t=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t)))},data:n})});d.propTypes={children:i.a.node.isRequired};t.a=d},158:function(e){e.exports={projects:[{title:"Youtube Tutorials",image_url:"https://s3.ca-central-1.amazonaws.com/jonnyk-misc/portfolio/youtube-screen.png",description:"My most popular content. Here is where I post long-form tutorials to accompany my Medium articles.",project_url:"https://www.youtube.com/channel/UCUm0chMKj4MA7q9CWZXWhiA",code_url:""},{title:"Names Challenge",image_url:"https://s3.ca-central-1.amazonaws.com/jonnyk-misc/portfolio/names-challenge.jpg",description:"I learned Flutter in order to build myself an app to get better at remembering people's names.",project_url:"https://itunes.apple.com/us/app/names-challenge/id1450894774?ls=1&mt=8",code_url:"https://github.com/jonnyk20/names-challenge-app"},{title:"Saiyan Says",image_url:"https://s3.ca-central-1.amazonaws.com/jonnyk-misc/images/saiyan-says.png",description:" My final project for FreeCodeCamp. A Dragon Ball Z themed Simon-Says game.",project_url:"https://codepen.io/jonnnyk20/full/XaPqrR/",code_url:"https://codepen.io/jonnnyk20/full/XaPqrR/"},{title:"Oxcord",image_url:"https://s3.ca-central-1.amazonaws.com/jonnyk-misc/portfolio/flexride-screen.png",description:"An app democratize music selection at parties, using Spotify's API.",project_url:"http://oxcord.io",code_url:"https://github.com/jonnyk20/oxcord"}]}},172:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e1fed/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/08283/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59257/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/26d9e/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a3fa0/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0fe3e9fcf179b31afca2.js.map