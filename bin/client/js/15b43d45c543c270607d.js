(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,t,n){"use strict";var o=n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,i(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){return o.createElement("div",{className:"modal ".concat(this.props.show)},o.createElement("div",{className:"modal-background"}),o.createElement("div",{className:"modal-card"},o.createElement("header",{className:"modal-card-head"},o.createElement("p",{className:"modal-card-title"},"Delete ".concat(this.props.name)),o.createElement("button",{className:"delete","aria-label":"close",onClick:this.props.closeModal})),o.createElement("section",{className:"modal-card-body"},"Are you sure you want to delete :",o.createElement("br",null),o.createElement("strong",{className:"delete-book-title"},o.createElement("p",null," ","".concat(this.props.title)," ")," ")),o.createElement("footer",{className:"modal-card-foot"},o.createElement("form",{onSubmit:this.props.delete},o.createElement("button",{className:"secondary-button",type:"submit",onClick:this.props.closeModal},"Delete")),o.createElement("button",{className:"submit-button","aria-label":"close",onClick:this.props.closeModal},"Cancel"))))}}])&&l(n.prototype,r),s&&l(n,s),t}();t.a=s},40:function(e,t,n){"use strict";var o=n(0),r=n(13),l=n(2),a=n.n(l);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=s(t).call(this,e),(n=!r||"object"!==i(r)&&"function"!=typeof r?p(o):r).handleDelete=function(e){e.preventDefault(),a.a.delete("/api/books/".concat(n.props.bookid)).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},n.state={showmodal:""},n.handleClick=n.handleClick.bind(p(p(n))),n.handleClose=n.handleClose.bind(p(p(n))),n.handleDelete=n.handleDelete.bind(p(p(n))),n}var n,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o["Component"]),n=t,(l=[{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"render",value:function(){var e=this.props.book,t=this.props.ebook;return o.createElement("tr",null,o.createElement("th",null,this.props.title),o.createElement("td",null,this.props.author),o.createElement("td",null,this.props.isbn),o.createElement("td",null,this.props.language),o.createElement("td",null,this.props.owner),o.createElement("td",null,e?"Yes":"No"),o.createElement("td",null,t?"Yes":"No"),o.createElement("td",null,o.createElement("button",{className:"secondary-button"},"Edit"),o.createElement("button",{className:"selected-button",onClick:this.handleClick},"Delete")),o.createElement(r.a,{name:"a book",closeModal:this.handleClose,show:this.state.showModal,title:this.props.title,delete:this.handleDelete}))}}])&&c(n.prototype,l),f&&c(n,f),t}();t.a=f},49:function(e,t,n){"use strict";var o=n(0),r=n(50),l=n(12),a=n.n(l),i=n(2),c=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=p(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?h(o):r).state={showModal:"",thumbnail:a.a},n.handleClick=n.handleClick.bind(h(h(n))),n.handleClose=n.handleClose.bind(h(h(n))),n}var n,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(l=[{key:"componentDidMount",value:function(){var e=this;c.a.get("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(this.props.isbn)).then(function(t){var n=t.data.items[0].volumeInfo.imageLinks.thumbnail;e.setState({thumbnail:n})})}},{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"render",value:function(){return o.createElement("div",{id:"bookCard"},o.createElement("ul",null,o.createElement("h1",{id:"bookCardHeader"},"".concat(this.props.title)),o.createElement("li",null,o.createElement("img",{src:this.state.thumbnail,id:"cardImage",onClick:this.handleClick})),o.createElement("li",null,"Author : ".concat(this.props.author)),o.createElement("li",null,"Language : ".concat(this.props.language)),o.createElement("li",{id:"bookCardFooter"}," ",o.createElement(r.a,{thumbnail:this.state.thumbnail,closeModal:this.handleClose,show:this.state.showModal,index:this.props.index,key:this.props._id,id:this.props.id,title:this.props.title,author:this.props.author,language:this.props.language,owner:this.props.owner,summary:this.props.summary}))))}}])&&u(n.prototype,l),i&&u(n,i),t}();t.a=m}}]);