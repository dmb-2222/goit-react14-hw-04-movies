(this["webpackJsonpgoit-react14-hw-04-movies"]=this["webpackJsonpgoit-react14-hw-04-movies"]||[]).push([[0],{19:function(e,t,a){e.exports={trend:"TrendMoviesList_trend__m8Ugj",listTrend:"TrendMoviesList_listTrend__2Qz05"}},31:function(e,t,a){e.exports={nav:"Nav_nav__1GoHf",activeLink:"Nav_activeLink__rdpLI",test:"Nav_test__1wKw0"}},35:function(e,t,a){e.exports={input:"SearchBar_input__28wWe"}},37:function(e,t,a){e.exports={movieDetailsPage:"MovieDetailsPage_movieDetailsPage__1Nmmi",reviews:"MovieDetailsPage_reviews__DsOah"}},38:function(e,t,a){e.exports={credit:"\u0421redit_credit__uPvqg"}},39:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),i=a.n(c),o=a(2),l=a(12),s=a(31),u=a.n(s),m=function(){return r.a.createElement("section",{className:u.a.nav},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/",exact:!0,activeStyle:{color:"red"}},"Home")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/movies",exact:!0,style:{color:"green"},activeStyle:{color:"red"}},"Movies"))))},p=a(6),h=a(7),v=a(9),d=a(8),f=a(10),b=a(14),g=a.n(b),y="361cf82cbf562fb184f0e8222e304a01",E=function(e){return g.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(y,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){return e.data}))},O=a(19),j=a.n(O),_=Object(l.g)((function(e){var t=e.trendList,a=e.location,n=e.handleQuery;return r.a.createElement("ul",{className:j.a.trend},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(o.c,{className:j.a.listTrend,to:{pathname:"/movies/".concat(e.id),state:{from:a,id:e.id,parsQuery:n}}},e.title," ",e.name))})))})),k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={dataTrend:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(y)).then((function(e){return e.data.results})).then((function(t){return e.setState({dataTrend:t,locationFromHome:e.props.location})}))}},{key:"render",value:function(){var e=this.state.dataTrend;return r.a.createElement(_,{trendList:e})}}]),t}(n.Component),w=a(34),D=a(35),S=a.n(D),P=function(e){var t=e.handleInput,a=e.handleClick,n=e.value;return r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"text",className:S.a.input,onChange:t}),r.a.createElement(o.b,{to:"/movies?query=".concat(n),onClick:a},"Search"))},C=a(36),x=a.n(C);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var M=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={dataFilms:[],value:""},a.handleInput=function(e){var t=e.target.value;a.setState({value:t})},a.handleClick=function(){var e=a.state.value;E(e).then((function(e){return a.setState({dataFilms:e})})),a.props.history.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(w.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.props.location,{search:"query=".concat(e)}))},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.location.search){var t=x.a.parse(this.props.location.search).query;E(t).then((function(t){return e.setState({dataFilms:t})}))}}},{key:"render",value:function(){var e=this.state,t=e.dataFilms,a=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{handleInput:this.handleInput,handleClick:this.handleClick,value:a}),0!==t.length&&r.a.createElement(_,{trendList:t.results,handleQuery:a}))}}]),t}(n.Component),F=a(37),L=a.n(F),T=a(38),q=a.n(T),I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={credit:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:423204;return g.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(y)).then((function(e){return e.data}))})(this.props.match.params.id).then((function(t){return e.setState({credit:t})}))}},{key:"render",value:function(){var e=this.state.credit;return r.a.createElement("div",null,0!==e.length&&r.a.createElement("ul",{className:q.a.credit},e.cast.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/original/".concat(e.profile_path),alt:"c.name",style:{width:"60px",display:"block"}}),e.name)}))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:423204;return g.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(y,"&language=en-US&page=1")).then((function(e){return e.data}))})(this.props.match.params.id).then((function(t){return e.setState({reviews:t})}))}},{key:"render",value:function(){var e=this.state.reviews;return 0!==e.length&&(0!==e.results.length?e.results.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",null,e.author),r.a.createElement("p",null,e.content))})):r.a.createElement("h3",null,"No reviews"))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={movieDetals:[]},a.handleGoBack=function(){var e=a.props,t=e.location,n=e.history;t.state?n.push(t.state.from):n.push("/movies")},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:423204;return g.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(y)).then((function(e){return e.data}))})(this.props.match.params.id||this.props.location.state.id).then((function(t){return e.setState({movieDetals:t})}))}},{key:"render",value:function(){var e=this.state.movieDetals,t=e.original_title,a=e.overview,n=e.poster_path,c=e.genres,i=this.props.match.params.id,s=this.props.location.state;return 0!==this.state.movieDetals.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.handleGoBack},"Go back"),r.a.createElement("div",{className:L.a.movieDetailsPage},r.a.createElement("div",null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/original".concat(n),alt:t,style:{width:"200px"}})),r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,a),r.a.createElement("h4",null,"Genres"),c.map((function(e){return r.a.createElement("ul",{key:e.id},r.a.createElement("li",null,e.name," "))})))),r.a.createElement("h3",null,"Editional information"),r.a.createElement(o.b,{to:{pathname:"/movies/".concat(i,"/cast"),state:s}},"Cast"),r.a.createElement(o.b,{to:{pathname:"/movies/".concat(i,"/reviews"),state:s}},"Reviews"),r.a.createElement(l.b,{path:"".concat(this.props.match.path,"/cast/"),component:I}),r.a.createElement(l.b,{path:"".concat(this.props.match.path,"/reviews/"),component:A}))}}]),t}(n.Component),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,component:k}),r.a.createElement(l.b,{path:"/movies/:id",component:G}),r.a.createElement(l.b,{path:"/movies?:query",component:M}),r.a.createElement(l.b,{path:"/movies",component:M}),r.a.createElement(l.a,{to:"/"})))};i.a.render(r.a.createElement(o.a,{basename:"/"},r.a.createElement(B,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3ec093bc.chunk.js.map