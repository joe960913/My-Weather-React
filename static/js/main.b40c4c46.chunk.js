(this["webpackJsonpmy-weather"]=this["webpackJsonpmy-weather"]||[]).push([[0],[,,,function(e,a,t){e.exports={ErrorNoticeWrapper:"_3jLXYVsbDVoedoGxrjZXr1",NotFound404:"_2aJsK8UQTsHuMXxyI-WgDa",NotFoundHeading:"_2zGKU59WyMLEUj1KxSrSSC",NotFoundDetails:"B7nDuv1zsHTLOYn0Qv3jW",ErrorTextWrapper:"_2MdLPaNMkDP8nvDUVB_xyq"}},,function(e){e.exports=JSON.parse('{"_colorDesc":{"lilac":"#C0B3BC","red":"#EF9A9A","blue":"#18B2D8","yellow":"#FCC418","grey":"#D9DEDF"},"colors":{"default":"#C0B3BC","error":"#EF9A9A","Rain":"#18B2D8","Clear":"#FCC418","Thunderstorm":"#D9DEDF","Snow":"#D9DEDF","Drizzle":"#18B2D8","Clouds":"#FCC418"},"icons":{"Rain":"Rain.svg","Drizzle":"Drizzle.svg","Clouds":"Clouds.svg","Clear":"Clear.svg","Snow":"Snow.svg","Thunderstorm":"Thunderstorm.svg"}}')},function(e,a,t){e.exports={Logo:"_3scRJnKU8Bdwav8FiMV-2y",Light:"_3Hc-msTVm2Qaj6MJEuKa7G",dark:"_1OJmoW4WHq7Wv1KCIziTIf"}},function(e,a,t){e.exports={WeatherDetailsWrapper:"_3-Q8T32pWzsMXjbVZeImcT",fadein:"_2WIWjzYUG1qY7lRnSxZEy9",WeatherIconWrapper:"_1jJth4wrWkP28m_k6K0idT",WeatherDataWrapper:"_1szUWWHnzrFIy9xCXr75Qh"}},,function(e,a,t){e.exports={wrapper:"_2C8pUjJsCNdLQItL5VkBfc",main:"kDt5Ki_7_yCNlhDnAUX2o"}},function(e,a,t){e.exports={Footer:"_2pEytBpEDhU7pMbKAOu9hT",seperator:"_2X7yf8C8l-VuHClW4_-Wy_"}},function(e,a,t){e.exports={ButtonWrapper:"_1-kK6dsnWqyPk_UvVCSzIo",FormButtonWrapper:"_3BQLBYpWRKyUNwcu68AcRl"}},function(e,a,t){e.exports={TemperatureWrapper:"_19gQb0-DWaC_UjLse1Tg4v",TemperatureSymbol:"_24K6z0YctO6JG3u3wYuzdl"}},,function(e,a,t){e.exports=t.p+"static/media/Preview.29a0aca0.svg"},,,,function(e,a,t){e.exports={Card:"_3D2sxVRzxD9x6V5BC30IKK"}},function(e,a,t){e.exports={Header:"_3zfGd8l6xLglskseFxX5NS"}},function(e,a,t){e.exports={InputFieldWrapper:"_19l93b5dYwqo0L7abWVnbx"}},function(e,a,t){e.exports={SearchBar:"_3lbBn46bE6juwDayQZiAR1"}},function(e,a,t){e.exports={Icon:"_3GWrhAeFIufgslVuoEQJXJ"}},function(e,a,t){e.exports={DescriptionWrapper:"_2sFr65j2Dl6D74yONFOztZ"}},,function(e,a,t){e.exports={DateWrapper:"_14NjOTrtoVoN1TSqJ4Qvst"}},function(e,a,t){e.exports={Preview:"_2-jEHReFKq7UNp_iZpjAvS"}},function(e,a,t){e.exports=t(68)},,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){var r={"./Clear.svg":56,"./Cloud-wind.svg":57,"./Clouds.svg":58,"./Drizzle.svg":59,"./Moon.svg":60,"./Night-rainy.svg":61,"./Night.svg":62,"./Preview.svg":14,"./Rain.svg":63,"./Snow.svg":64,"./Thunderstorm.svg":65,"./Tonado.svg":66};function n(e){var a=o(e);return t(a)}function o(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=55},function(e,a,t){e.exports=t.p+"static/media/Clear.f963a166.svg"},function(e,a,t){e.exports=t.p+"static/media/Cloud-wind.a82005aa.svg"},function(e,a,t){e.exports=t.p+"static/media/Clouds.a98369fb.svg"},function(e,a,t){e.exports=t.p+"static/media/Drizzle.1ca35fb1.svg"},function(e,a,t){e.exports=t.p+"static/media/Moon.e3158b56.svg"},function(e,a,t){e.exports=t.p+"static/media/Night-rainy.06f78ffe.svg"},function(e,a,t){e.exports=t.p+"static/media/Night.7d9c9233.svg"},function(e,a,t){e.exports=t.p+"static/media/Rain.b5e8855f.svg"},function(e,a,t){e.exports=t.p+"static/media/Snow.104ea80a.svg"},function(e,a,t){e.exports=t.p+"static/media/Thunderstorm.c623741c.svg"},function(e,a,t){e.exports=t.p+"static/media/Tonado.cd8d7fce.svg"},,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(15),c=t.n(o),i=(t(32),t(4)),l=t(16),s=t(9),u=t.n(s),p=t(5),m=t(18),d=t.n(m),v=function(e){return n.a.createElement("div",{className:d.a.Card},e.children)},f=t(19),h=t.n(f),g=t(6),E=t.n(g);function C(e){var a=[E.a.Logo,"dark"===e.logoScheme?E.a.dark:E.a.light];return n.a.createElement("div",null,n.a.createElement("h1",{className:a.join(" "),onClick:e.clicked},"My weather"))}function W(e){return n.a.createElement("header",null,n.a.createElement("header",{className:h.a.Header,style:{backgroundColor:e.color}},n.a.createElement(C,{logoScheme:"light",clicked:e.onClickHandler})))}var N=t(10),y=t.n(N);function x(e){return n.a.createElement("div",null,n.a.createElement("footer",{className:y.a.Footer},n.a.createElement(C,{logoScheme:"dark",clicked:e.onClickHandler}),n.a.createElement("div",{className:y.a.seperator})))}var D=t(20),w=t.n(D);function b(e){return n.a.createElement("div",null,n.a.createElement("div",{className:w.a.InputFieldWrapper},n.a.createElement("label",{htmlFor:e.name},e.label),n.a.createElement("input",{type:e.type,id:e.name,placeholder:e.placeholder,value:e.value,onChange:e.onChange,style:e.error?{borderBottomColor:p.colors.error}:null,required:!0})))}var _=t(11),k=t.n(_);function F(e){var a=[k.a.ButtonWrapper,k.a.FormButtonWrapper];return n.a.createElement("div",{className:a.join(" ")},n.a.createElement("button",{onClick:e.goSearch,type:e.type,name:e.name},e.children))}var S=t(21),j=t.n(S);function T(e){return n.a.createElement("div",{className:j.a.SearchBar},n.a.createElement(b,{type:"text",name:e.city,onChange:e.onChangeHandler,error:e.error,placeholder:"Enter a city",label:"Location",value:e.value}),n.a.createElement(F,{goSearch:e.onClickHandler,name:"searchSubmit",type:"submit",position:"onForm"},"Search"))}var B=t(7),z=t.n(B),H=t(22),O=t.n(H),I=function(e){return n.a.createElement("img",{src:t(55)("./".concat(e.type,".svg")),alt:e.type,className:O.a.Icon})},L=t(12),U=t.n(L),K=function(e){return n.a.createElement("div",{className:U.a.TemperatureWrapper},Math.round(e.degrees),n.a.createElement("span",{className:U.a.TemperatureSymbol},"\xb0"))},M=t(23),V=t.n(M),J=function(e){return n.a.createElement("div",{className:V.a.DescriptionWrapper},e.type)},A=t(24),R=t.n(A),Q=t(25),q=t.n(Q),P=function(e){var a=new Date;return n.a.createElement("div",{className:q.a.DateWrapper},R()(a,"dddd, mmmm dd"))},X=function(e){return n.a.createElement("div",{className:z.a.WeatherDetailsWrapper},n.a.createElement("div",{className:z.a.WeatherIconWrapper},n.a.createElement(I,{type:e.data.description})),n.a.createElement("div",{className:z.a.WeatherDataWrapper},n.a.createElement(K,{degrees:e.data.temperature}),n.a.createElement(J,{type:e.data.description}),n.a.createElement(P,null)))},Y=t(26),G=t.n(Y),Z=function(e){return n.a.createElement("img",{src:t(14),alt:"Weather App Icon",className:G.a.Preview})},$=t(3),ee=t.n($),ae=function(e){return n.a.createElement("div",{className:ee.a.ErrorNoticeWrapper},n.a.createElement("h1",{className:ee.a.NotFound404},"404"),n.a.createElement("div",{className:ee.a.ErrorTextWrapper},n.a.createElement("h2",{className:ee.a.NotFoundHeading},"Oops!"),n.a.createElement("p",{className:ee.a.NotFoundDetails},"We can't find the city you are looking for."),n.a.createElement(F,{name:"tryAgain",type:"button",position:"onErrorNotice",goSearch:e.onClickHandler},"Try again")))},te=function(){var e=Object(r.useState)(""),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)({temperature:null,description:""}),s=Object(i.a)(c,2),m=s[0],d=s[1],f=Object(r.useState)(!1),h=Object(i.a)(f,2),g=h[0],E=h[1],C=Object(r.useState)(!1),N=Object(i.a)(C,2),y=N[0],D=N[1],w=function(){o(""),d({}),D(!1)},b=n.a.createElement(Z,null);return g?b=n.a.createElement(l.MoonLoader,null):y?b=n.a.createElement(ae,{onClickHandler:w}):m.temperature&&""!==m.description&&(b=n.a.createElement(X,{data:m})),n.a.createElement("div",{className:u.a.wrapper},n.a.createElement(W,{color:p.colors[y?"error":m.description],onClickHandler:w}),n.a.createElement("main",{className:u.a.main},n.a.createElement(T,{value:t,onChangeHandler:function(e){o(e.target.value)},onClickHandler:function(){var e="https://api.openweathermap.org/data/2.5/weather"+"?q=".concat(t,"&appid=").concat("adab95682ba390a869429c0983ed4df6","&units=metric");new Promise((function(e){d({}),E(!0),D(!1),e()})).then((function(){fetch(e).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw e.cod;d({temperature:e.main.temp,description:e.weather[0].main}),E(!1)})).catch((function(e){console.log(e),D(!0),E(!1)}))}))},error:y}),n.a.createElement(v,null,b)),n.a.createElement(x,{onClickHandler:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(67);c.a.render(n.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.b40c4c46.chunk.js.map