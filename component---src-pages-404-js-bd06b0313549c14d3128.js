(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(A,e,t){"use strict";var n=t("q1tI"),a=t.n(n),l=(t("wcMv"),t("Wbzz")),r=function(A){return a.a.createElement("header",{id:"header",className:"alt"},a.a.createElement(l.Link,{to:"/",className:"logo"},a.a.createElement("strong",null,"Andrew"),a.a.createElement("span",null,"Zhukov")),a.a.createElement("nav",null,a.a.createElement("a",{className:"menu-link",onClick:A.onToggleMenu,href:"javascript:;"},"Menu")))},c=function(A){return a.a.createElement("nav",{id:"menu"},a.a.createElement("div",{className:"inner"},a.a.createElement("ul",{className:"links"},a.a.createElement("li",null,a.a.createElement(l.Link,{onClick:A.onToggleMenu,to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(l.Link,{onClick:A.onToggleMenu,to:"/landing"},"Landing Page")),a.a.createElement("li",null,a.a.createElement(l.Link,{onClick:A.onToggleMenu,to:"/corporate"},"Corporate website")),a.a.createElement("li",null,a.a.createElement(l.Link,{onClick:A.onToggleMenu,to:"/onlinestore"},"Online Store")),a.a.createElement("li",null,a.a.createElement(l.Link,{onClick:A.onToggleMenu,to:"/catalogwebsite"},"Catalog Website")),a.a.createElement("li",null,a.a.createElement(l.Link,{onClick:A.onToggleMenu,to:"/businesswebsite"},"Business Website")),a.a.createElement("li",null,a.a.createElement(l.Link,{onClick:A.onToggleMenu,to:"#"},"Misc")))),a.a.createElement("a",{className:"close",onClick:A.onToggleMenu,href:"javascript:;"},"Close"))},o=t("nEP8"),i=t.n(o),s=function(A){return a.a.createElement("section",{id:"contact"},a.a.createElement("div",{className:"inner"},a.a.createElement("section",{style:{backgroundImage:"url("+i.a+")"},className:"contact_logo"}),a.a.createElement("section",{className:"split"},a.a.createElement("section",null,a.a.createElement("div",{className:"contact-method"},a.a.createElement("span",{className:"icon alt fa-envelope"}),a.a.createElement("h3",null,"Email"),a.a.createElement("a",{href:"mailto:oxyblade@gmal.com"},"oxyblade@gmal.com"))),a.a.createElement("section",null,a.a.createElement("div",{className:"contact-method"},a.a.createElement("span",{className:"icon alt fa-linkedin"}),a.a.createElement("h3",null,"Linkedin"),a.a.createElement("a",{href:"https://www.linkedin.com/in/andrew-zhukov/",target:"_blank",rel:"noopener noreferrer"},"Andrew Zhukov"))),a.a.createElement("section",null,a.a.createElement("div",{className:"contact-method"},a.a.createElement("span",{className:"icon alt fa-github"}),a.a.createElement("h3",null,"GitHub"),a.a.createElement("a",{href:"https://github.com/oxyblade/projects/tree/projects/commercial",target:"_blank",rel:"noopener noreferrer"},"Andrew Zhukov"))))))},m=function(A){return a.a.createElement("footer",{id:"footer"},a.a.createElement("div",{className:"inner"},a.a.createElement("ul",{className:"icons"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.facebook.com/oxyblade",className:"icon alt fa-facebook",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",{className:"label"},"Facebook"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://twitter.com/foroxygen",className:"icon alt fa-twitter",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",{className:"label"},"Twitter"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://vk.com/oxyfly",className:"icon alt fa-vk",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("span",{className:"label"},"VK")))),a.a.createElement("ul",{className:"copyright"},a.a.createElement("li",null,"2017 - 2020"),a.a.createElement("li",null,a.a.createElement("a",{href:"/"},"Andrew Zhukov")))))};var u=function(A){var e,t;function n(e){var t;return(t=A.call(this,e)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(t)),t}t=A,(e=n).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var l=n.prototype;return l.componentDidMount=function(){var A=this;this.timeoutId=setTimeout((function(){A.setState({loading:""})}),100)},l.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},l.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},l.render=function(){var A=this.props.children;return a.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},a.a.createElement("div",{id:"wrapper"},a.a.createElement(r,{onToggleMenu:this.handleToggleMenu}),A,a.a.createElement(s,null),a.a.createElement(m,null)),a.a.createElement(c,{onToggleMenu:this.handleToggleMenu}))},n}(a.a.Component);e.a=u},nEP8:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwBAMAAAAZD678AAAAD1BMVEVHcEz96cn96cn/6sr96ck8tzdxAAAABHRSTlMAwHUzz6QcfwAAEXtJREFUeNrs3WFuo0oWBtAYsgC/Fy/A88YLiPW8gDid/a9pZjQaaToBXNdUAUWd87Ol7rTC1Qfcz+CXFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/c/0j6Ot59+CP+tPhqVb/tWVnB6hWl00P1t0BqlT3tW1Hh0hgiSz+5/C1db8cpBqdNj9Y93dHSWCJLCoJrH8TWdV5rWGuRFZ9u9EqAktkVedWx1x9fTpUdQXWVy3ODpbAElkCqx5Hh6sel4oGS7FTj+7rS2TRdmCJrHocvury4ZDV4VTZYNmSCizFjsASWWT1Wt9ciSy7UZHVqluVg6XYEVi6aIElssik+6rV0cHbsqEy58+/xv1j6BhHX/jwx9CC4zP4UxU7tQXWPbrzOpb/sReRVf9udOqAHTJFxyXYAHYiqyqHHIH1zP1ZH91NiazqA+scHMTnbs9uwXV6Z0taeWBNzUl/yrZQCkdWdBKpKLBeMx7c6KD0Iqsa11WP7Ulk7dTKZ6Nr9HpNZFVi7ZPRencObCqwhu743xa8dXjJd+vAwoH1Frzhn7ejzLGdFVlbs4FWZaU+iaKic1KiVLmsVCixocCKpEU38AGFf24zNcmsaPucfF9w00XvTOE7stRNRpY70w+Hc9uBlXGHNCuydNENBVb0cYbUtbouel+icxI/nKmReNBF78gC7XNqJoY/iSOytmuR88+cyPoUWVVapH1O3k/oovccWPfoPf7j9jl1mbna5+5ZILCOwVv8hK1k8l/LUeyIrPUt1qOk/j1d9D4s1vwWiyzFzi4C6/l8mFPs6KJrs+BN2Kxi501kVWXRzwProgXWmOusW7BSXbQtae2BNfPZ5+Qm0EOGdesXPoDJc3kVWVVb/JSTnJA57ilE1mqBtfynn4p10YqdjQfWW3AQ77ETji660cAKLyKjd/WLFjsiaxWrVCeLdtG2pGtY6Sm+YpGl2Kk0sDJdxSSfgG9rBCpFAmuRl7ukPpWqi67Tardd/ZLFjshaWpb2+f2pH12si75luGtl4cDK+SLb1Bn1kOE+AmvymJ0yHrPUJnDpKpPZVj5kpSLr5SSy1pXluvj5I1asi76KrHUDKzont8x38qW6aMXO9gLruOSNfPIS7aKLrvyW8B49dR1n/Q8uiRdDXfTcNvQPO+Ar3hMeg9f6MzePXeq8XIJX452LrDVFf/u33Ddbh9R/8BT8n766LVxT9Nff515pnxKvhA7Ra/GTwNrYbeFbMLLumQPrPGsAw0nIUveF9+gkzrl6vyTOSzc/sNwTrh1Zx+AozIisLvWnR39qZ4u1tgyH7Fj8h3erjj9FQyN69soZl7c1p5+ylzlP35/Nv8ALn69vAmt9h9Wui5N3F7f5SxGBtbzV7uSTl2gZ1rgO8yYi6z04ic/tHlPnZfUtLrkia5G2pFibYzm6Edd1EiF1XrQ5tepXuYbR5uzfKr3OgvWzNmc7kVV8T6TNEVlFDt6CbY7AWs3yR0+b04booHRzL5C1Oc1GVtFb+jltTvn7CvJZ+J4+dV7CKzOBtTHLbiH7U6E250Wbs/3IivYmgUftk/Pua37b5NCuK0Ovc8w+xav142STode5zwis8xau/CjhFjy3zYisy3JtjsDaYmQV2hgl7zZW/NQ0RSMrOonnJwNLm7NnSx3H5GhUP+/EQgdSmyOySlwrF6uftTmbtcjdferd59rvKyGfRW7vU/dlHibcdWRlfx6m2LM515yvc6Z4ZL0H4+ct0+xqc/akP80ufe8rBZY2Z9OK9zpeDdloZBXeHSVvNNTP+4+snJNY7NWQ2pz9R9ZnKLCOiXOizalc0UNarM0RWJtX8iSkzRFZRS6b1c8tK3ejn7wl0+bsUrHVZLFncwRWrZH1HpzEt1kTW+w/QF2RldjraHNaF/7uuLRLHG1O68p8xE6bQ5E10oJf9CWw6oms6B7pM2Fejol7NG1Os5GVcHBT/0kPE+5Z/l5nyTZHYG1XhldHnp+aF23OvuW+5Z/xakj1865kvufX5vDkcmg6shZ8NaTAqi2yZrw6csE2x8OEG/c6P7KO4XnxMGEDor3ORBWtzaHI/VmnzaHIRulU5tWQncBqNLLOI6csbU7LuvmR9TkSWccsk6x+rlTGXuewTJsjsGqNrHNwEn8N3mPmCSxtTrUy3v3fnvmiL23OTmXcV/YP5+WqzWk5ssLPywzky3uWn/UqsJqOrI8fF2zaHPpT8Hslr+Mxcin+MKHjVY+MX8nceZiQnLul773OOcvOTP28u8h6erl0KNvmCKzWIuv3XueYOCfanJ3LeMgP2hyez4bxk9R/7jGPpU64Aqv+yHr6Q1K39DbnI+uVHxuUtdf5KL3UoB4Z34N2e8/yE7Q5IivlxFb8B7CPyLoGA8WrIRtV+CvBtDmtKvwGGG2OyCrxoWFf9CWyiizGtTkNK3jwM3zRl11DtQqerjybI7JKPPzu1ZBtK7YSKP7t5mxbqSWmhwlFVomHaKL/bG85KrJSznHanOZdo2/7TLkY8jAhRW7fvBqSEgunDK+G1OaIrJ+TmP2LVWg0ss7zRlX9vEvZex1tDiXOXNocsl1r/xJYzN8iTW8HinylOTXKus/M8EVfHw6JyPoxPPOf/bEc3XNkvQRT5lgi/ahd9HQ0/syyNocSd3K+6ItZt/xjk6jNIXdknV980RezI2t4InzRFzOjY3AktDnMzo6hSdTmkDAo4SXp3wKL+Quln4uCe/TZHIHVggy9zuxXQ1qOiqyhSdTmkHSco5938TAhGS6l+4eDdRZYZOl11M8sEFnn4H5DmyOyxmZDm0PSoISHw6shyZAil6cDy3K08cgKX4Brc8hwpzaxJBVYTA3Ks71OuM3xyxdZKZE1/dc8TCiywtGjzeGn6Ksje/UzKTL1OtocZu4Bem0Oi0WWhwmZHVldhjZHYDUgw1Py2hzmB0ofvcTS5oislEF5DW6xBFazYlum6BpLYDUrtGY6BBfvffSZDdqMrOGycHxdbzkqslIO/iH6aSxtTsMGTlfHUGCNXzcJrKYlX2B30Q+QCqy2Iyt1UC7Bj7xrc0RWyqD00acKtTkiK2VQbsHnoAVW85KipY8+CG052rykbLkF3zWjzSEpsqJvxxJYpCycHr3T79fjQRRY7Xm8cXr4Sr9vk+iLvkiJrMcvIX2LjiptRtZbLLC+XUFpcxg5c90f3DdOX0IJLFKWA5eEwbpHFxi0YHI7MDAnf02OjjaHlMgamrqp2RFYTAzP5+TQTQ2P5SgpKTM8J+PfCK3N4SXhumhkTsY3CgKL6cj676CMTdDYSkFg8ZuxQRn787GB80Vf/GZkUEZPeWNPDVqO8rvhl4WOz8nwtZQ2h28GX288cbc4fDElsPhmcFCmFqFDkSWw+GFgUCaX6EOTqM0hJbKm37R2SfkS8rNfbPMuwY/HdMFPPdCoLjonl9ggIrLS5uQgsEjxeFC+/YWTwCLFo0H5FZ1Ev1JSBuU9OIkffqUkDMrPJfotOIg06hackz44iDRqclA+o5MosEgZlHNwErU5pAzK8E7qEnzTH426BHdSncAiRRddol8sR5kTWWNzctDmkOIQXaKfBBYpTsEl+kFg8XxkvQcn0XKUlEGZmpOr5SgprsE56QUWKfroTuomsEhxCy7Re8vRf7V3R8lpI1EUQJHEAsDRAnBGC8COFmAw+1/T1JjEkVC3+rUJNTU15/zF4avr1utLS0h8aWSda5N4sIgEgrIrfL41sIhoa8+kBoejRAyVOWkcjlI9siI56Q0sNpVB+Rb4fGNgsakMyrEyiW+Wj0BQYofoLw5HqRtZsZx0ruZQFZTomdRoYFETlENlEg0sIkE51ybxYOkIBGUX/nzrag7hkVVzJjUYWESDsqv4fOtwlGBQ6nLSu5pDLCh1OWkMLGJBOVYm0cAi4lttEo/WDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgX/G6v1z2T8ebv3bP/SXnZNEo6YafaXma/bnNx+pyebdslHL1O0CH9J8TdtaNguGSDNa4lqvZJyHhJR2XbjVXF+vGujYzh7aruTpbOMIb4SxYn3/ff+j7Xncnrsk1p5/fE39MP9zr7gT1mWB1icHU6e7UDKxTIi9tokq1ujs1A+s1G6z5ZNrq7lQMrPc2EawmUdIH3Z2Kr4THNj+xTro79drr9AkGS3cnaLyGpM1+K5y1dN2diup+2iSDtVlOLN2dmuqeCdawiJDuTkV1P2SC1SwipLsT0v3a69r83Q27ZHc/WjzKO2E6WB+305xuP667E9sJd9lgbV7600F3p9rnrtaGzqd0d+I74cdeFwuW7k7I+LmrhYKluxPzMYHewsHS3YkfNlyTFAqW7k68Yl2HTyhYujvxw4ZTPFi6O/GK9R4Olu5OyDVMb+Fg6e6EbCdBigRLdydesX7uapFg/e7ubxaPQsU6bcLB0t2JV6xzOFi6OyGz2/gCwWo8yo+IcbqrBYKluxOvWL9yFAiW7k5EN6tLgWDp7sS7+2UTDZbuzvqk+r5PPFK7HCzdnbVYPaef91gOlu7Oyv63eL726frOgHKwdHfy8yr53PanULA8351N+YvdfGr9VQ6W7k5W/n0AT6+lYOnubMoHBvXvm9DdKQ+s/V/H6654mh8+rARLd6fUsE7Hz+l1Xp5AHErd/WAlmR01TLeydvprm9khxEF3p0ozDUYz39aeS8HS3SlUrPfpP3a//vOlEKxRd2ezWr8Py39sygekujuFYB2nRf4YDZbuTmRiLZ60XQiW7k4pWO+THJ2iwdLdKQXrNAnKORos3Z3St8KPvWxbGSzdnaxmkpzh9mlEhWDp7mS1k9up+tvxsx4s3Z0V/e/kLG7ZWw+W7k55ZE0mUDRYujtrnm/fQ3EIBkt3Z9VL/3GD+/x6dCBYujsh27pgtbo7IePiiY+rwdLdiRkWMVkN1ugx3NQcPESDpbsTszw7WA2W7k5IVxcs3Z2YdtmY1oKlu1MXrLdYsHR3Ypq6YOnuxGyXj41ZC5buTsxYFSzdnYcES3cnaFhmaCVY6e7ePV/2BhgzfVWwhuSj/AYTjFywjqFgJbt756GRZL/mhYLVJl9/2Shd3BesdHcfnT9wq0tMoHyw0t199ABlNrnNLRSsdHcfXePhvmClz91HP9ohF6xTJFjp7r78jT40NcHKnLs3zuK5K1iZe2Y6E4u7gjVkXqHTCBY3tjXByt0z0woWmWCdA8HKdPfNa+/OP+4IVqq7dz++994wx13Bmr0wrN//Y/oai6PV5EvB6lffFOa0gS8Ga/0VdK7o8LVgtV96tyH/T008WI2BxSOCNa42LNWdLwartxESVnF3w0qsnuSKcrDgbp1g8RCCxUP0qcvKcK9RsHiErUvIPPJroQMDHlKyBIuHlKydleARe+GbleDPGvwUgseNLCek/Gkv2juPS5Y79fjjuue9vRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+C/6G4X6wDuFxNe/AAAAAElFTkSuQmCC"},w2l6:function(A,e,t){"use strict";t.r(e);var n=t("q1tI"),a=t.n(n),l=t("Bl7J");e.default=function(){return a.a.createElement(l.a,null,a.a.createElement("div",{id:"main",className:"alt"},a.a.createElement("section",{id:"one"},a.a.createElement("div",{className:"inner"},a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},wcMv:function(A,e,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-bd06b0313549c14d3128.js.map