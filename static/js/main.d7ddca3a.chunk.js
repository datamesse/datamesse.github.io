(this["webpackJsonpdatamesse.github.io"]=this["webpackJsonpdatamesse.github.io"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1632578400,"title":"Power BI Find date for the nth specific day of a month\\r","date":"September 26, 2021\\r","content":"\\r\\nUsing Power Query to find the 1st, 2nd, 3rd or 4th specific day of a month/year (e.g. date of 3rd Tuesday), based on another date column.\\r\\n\\r\\nIn Power BI this can be used for the conditional logic of other Custom Columns. For example, to create indicators that data rows occur on or fall between relative date ranges e.g. Black Friday sales. The following involves adding a Custom Column in Power Query i.e. M code, not DAX.\\r\\n\\r\\nFinds the 1st Monday of the month, where our dependent date column is OurDateField.\\r\\n\\r\\n```\\r\\nDate.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/\\" & Text.From((7 - (Date.DayOfWeek(Date.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/1\\"),Day.Monday)))))\\r\\n```\\r\\n\\r\\n![Power Query: 1st Sunday of month](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--1.png?raw=true)\\r\\n\\r\\n**How it works**\\r\\n\\r\\nTo find the first Sunday of a specific month/year relative to another date, first establish the start of the month e.g. 1/10 (1st October), passing in the date field you are using e.g. [OurDateField], to append its year.\\r\\n\\r\\n```\\r\\nDate.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/1\\")\\r\\n```\\r\\n\\r\\n In this example, we are hard-coding October regardless of OurDateField\u2019s month value, but if you need it to be relative to its month too, simply add an extra concatenation for month in the same way year is treated, i.e. using Date.Month().\\r\\n\\r\\nNow we need to identify what day of the week that this first day of the month is, using Date.DayOfWeek, and setting the optional parameter for what the start of the week is, as Day.Monday\\r\\n\\r\\n```\\r\\nDate.DayOfWeek(Date.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/1\\"),Day.Monday)\\r\\n```\\r\\n\\r\\n![Power Query: Day of week number](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--2.png?raw=true)\\r\\n\\r\\n \\r\\nIn this example, 1st October 2021 is a Friday, and Friday\u2019s day number is 4 (with Monday being 0).\\r\\n\\r\\n![Calendar: Weekday of 1st day of month](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--3.png?raw=true)\\r\\n\\r\\nIf you do not provide the Day.Monday parameter, it will default to Day.Monday in the background. If another parameter is used e.g. Day.Sunday, then the assignment numbers will change.\\r\\n\\r\\nNow we subtract the weekday number 4 from 7, and get 3, which is the first Sunday\u2019s date.\\r\\n\\r\\n```\\r\\n7 - (Date.DayOfWeek(Date.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/1\\"),Day.Monday))\\r\\n```\\r\\n\\r\\n![Power Query: Date of 1st Sunday](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--4.png?raw=true)\\r\\n\\r\\nThen concatenate this with the year month retrieved earlier\\r\\n\\r\\n```\\r\\nDate.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/\\" & Text.From((7 - (Date.DayOfWeek(Date.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/1\\"),Day.Monday)))))\\r\\n```\\r\\n\\r\\n![Power Query: Concatenate the month year to the date](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--5.png?raw=true)\\r\\n\\r\\nIf you need to change the weekday that Power Query needs to find, simply increment the Day.Monday parameter to the following day of the desired weekday.\\r\\n\\r\\nFor example, if you want to find the first Wednesday, change the parameter to Day.Thursday.\\r\\n\\r\\n```\\r\\nDate.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/\\" & Text.From((7 - (Date.DayOfWeek(Date.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/1\\"),Day.Thursday)))))\\r\\n```\\r\\n\\r\\n![Power Query: 1st Wednesday of month](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--6.png?raw=true)\\r\\n\\r\\n![Calendar: 1st Wednesday of the month](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--7.png?raw=true)\\r\\n\\r\\nIf you need to change the position from first, to second, third, or fourth Sunday, simply add 7 for the second, 14 for the third, and 21 for the fourth.\\r\\n\\r\\nFor example, we will retrieve the 3rd Sunday.\\r\\n\\r\\n```\\r\\nDate.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/\\" & Text.From((7 - (Date.DayOfWeek(Date.FromText(Text.From(Date.Year([OurDateField])) & \\"/10/1\\"),Day.Monday)) + 14 )))\\r\\n```\\r\\n\\r\\n![Calendar: 3rd Sunday of the month](https://raw.githubusercontent.com/datamesse/datamesse.github.io/main/src/assets-blog/2021-09-26--8.png?raw=true)"}]')},14:function(e,A,t){},34:function(e,A,t){},43:function(e,A,t){"use strict";t.r(A);var a=t(9),s=(t(1),t(21)),r=t.n(s),n=t(10),i=t(4),c=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(A){var t=A.getCLS,a=A.getFID,s=A.getFCP,r=A.getLCP,n=A.getTTFB;t(e),a(e),s(e),r(e),n(e)}))},o=(t(34),t(14),t.p+"static/media/bannervideo-cityoceanswisshumanity.5a02ce6b.mp4"),d=(t.p,t.p,t.p,t.p,t.p+"static/media/logo-github.69068f5c.svg"),l=t.p+"static/media/logo-html.aff8a9cb.svg",h=(t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p+"static/media/logo-tableau.be3c5104.svg"),b=t.p+"static/media/logo-twitter.d9f209d1.svg",m=(t.p,t.p,t.p,t.p+"static/media/logoblue-github.08098522.svg"),j=(t.p,t.p,t.p+"static/media/logoblue-tableau.35e372b8.svg"),g=t.p+"static/media/logoblue-twitter.72da10de.svg",p=(t.p,t(0));function x(){return Object(p.jsx)("div",{className:"banner",children:Object(p.jsxs)("div",{className:"banner-navigation",children:[Object(p.jsxs)("center",{children:[Object(p.jsxs)("div",{className:"banner-title",children:[Object(p.jsx)("h4",{children:"DATA MESSE"}),Object(p.jsx)("p",{children:"Analyst from Australia"})]}),Object(p.jsx)("div",{className:"menu-overlay",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{to:"/",children:"PROJECTS"})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{to:"/blog",children:"BLOG"})})]})}),Object(p.jsxs)("div",{className:"banner-elements",children:[Object(p.jsx)("img",{src:"data:image/jpeg;base64,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",class:"banner-avatar"}),Object(p.jsxs)("ul",{className:"banner-button-list",children:[Object(p.jsx)("li",{children:Object(p.jsxs)("a",{href:"https://github.com/datamesse/",target:"_blank",children:[Object(p.jsxs)("span",{className:"banner-icon",children:[Object(p.jsx)("img",{src:m}),Object(p.jsx)("img",{src:d})]}),Object(p.jsx)("span",{className:"banner-label",children:"GitHub"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{href:"https://public.tableau.com/profile/data.messe#!/",target:"_blank",children:[Object(p.jsxs)("span",{className:"banner-icon",children:[Object(p.jsx)("img",{src:j}),Object(p.jsx)("img",{src:h})]}),Object(p.jsx)("span",{className:"banner-label",children:"Tableau"})]})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{href:"https://twitter.com/data_messe/",target:"_blank",children:[Object(p.jsxs)("span",{className:"banner-icon",children:[Object(p.jsx)("img",{src:g}),Object(p.jsx)("img",{src:b})]}),Object(p.jsx)("span",{className:"banner-label",children:"Twitter"})]})})]})]})]}),Object(p.jsx)("video",{class:"banner-video",autoPlay:!0,loop:!0,muted:!0,playsinline:!0,width:!0,children:Object(p.jsx)("source",{src:o,type:"video/mp4"})})]})})}var u=[{title:"Project portfolio",description:"My portfolio website coded using HTML, CSS, and JavaScript with React.js and GitHub Pages",stamp:"2021-09",stack:l,photo:t.p+"static/media/img-2021-09-portfolio-website-react.3968b2e4.png",siteURL:"https://datamesse.github.io/",codeURL:"https://github.com/datamesse/datamesse.github.io/"}];var w=t(13),y=t(15);function O(){var e=w.map((function(e){return e.content.split(" ").slice(0,20).join(" ")}));return console.log(w),Object(p.jsx)("div",{className:"postlist",children:w.length&&w.map((function(A,t){return Object(p.jsxs)("div",{className:"post-card",children:[Object(p.jsx)("h2",{children:Object(p.jsx)(n.b,{to:"/post/".concat(A.id),children:A.title})}),Object(p.jsxs)("small",{children:["Published ",A.date]}),Object(p.jsx)(y.a,{escapeHtml:!1,children:e[t]}),Object(p.jsx)("small",{children:Object(p.jsx)(n.b,{to:"/post/".concat(A.id),children:"Read more..."})}),Object(p.jsx)("hr",{})]},t)}))})}function B(e){var A=parseInt(e.match.params.id);if(!A)return Object(p.jsx)(i.a,{to:"/404"});var t={},a=!1;return w.forEach((function(e,s){A===e.id&&(t.title=e.title?e.title:"No title given",t.date=e.date?e.date:"No date given",t.content=e.content?e.content:"No content given",a=!0)})),!1===a?Object(p.jsx)(i.a,{to:"/404"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:"post",children:[Object(p.jsx)("h2",{children:t.title}),Object(p.jsx)("small",{children:t.date}),Object(p.jsx)(y.a,{escapeHtml:!1,children:t.content})]})]})}r.a.render(Object(p.jsx)(n.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(i.b,{exact:!0,path:"/",component:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{}),Object(p.jsx)("div",{className:"projects",children:Object(p.jsxs)("center",{children:[Object(p.jsx)("h1",{children:"PROJECTS"}),Object(p.jsx)("div",{className:"project-set",children:u.map((function(e,A){return Object(p.jsxs)("div",{className:"project-tile",children:[Object(p.jsx)("span",{className:"stack-overlay",children:Object(p.jsx)("img",{src:e.stack,alt:""})}),Object(p.jsx)("div",{className:"stamp-overlay",children:e.stamp}),Object(p.jsx)("img",{src:e.photo,alt:""}),Object(p.jsxs)("div",{className:"project-desc",children:[Object(p.jsx)("p",{className:"project-title",children:e.title}),Object(p.jsx)("p",{children:e.description})]}),Object(p.jsxs)("div",{className:"project-link",children:[Object(p.jsx)("a",{href:e.siteURL,target:"_blank",children:"SITE"}),Object(p.jsx)("a",{href:e.codeURL,target:"_blank",children:"CODE"})]})]},A)}))})]})})]})}}),Object(p.jsx)(i.b,{exact:!0,path:"/blog",component:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{}),Object(p.jsx)("div",{className:"blog",children:Object(p.jsxs)("center",{children:[Object(p.jsx)("h1",{children:"BLOG"}),Object(p.jsx)(O,{})]})})]})}}),Object(p.jsx)(i.b,{exact:!0,path:"/404",component:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{}),Object(p.jsx)("h1",{children:"The page you are looking for does not exist."})]})}}),Object(p.jsx)(i.b,{exact:!0,path:"/post/:id",render:function(e){return Object(p.jsx)(B,Object(a.a)({},e))}})]})}),document.getElementById("root")),c()}},[[43,1,2]]]);
//# sourceMappingURL=main.d7ddca3a.chunk.js.map