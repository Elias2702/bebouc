(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{24:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n(0),r=n(64),l=n(52);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=null,b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,c(t).apply(this,arguments))}var n,a,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){f=this.props.isJunior?o.createElement(l.a,null):o.createElement(r.a,null)}},{key:"render",value:function(){return o.createElement("div",{className:"backgroundhome"},f)}}])&&u(n.prototype,a),b&&u(n,b),t}()},39:function(e,t,n){"use strict";var o=n(0),r=n(2),l=n.n(r),a=n(40),u=n(19);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=s(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?b(o):r).state={books:[],showModal:""},n.handleClick=n.handleClick.bind(b(b(n))),n.handleClose=n.handleClose.bind(b(b(n))),n}var n,r,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;l.a.get("/api/books").then(function(t){var n=t.data;e.setState({books:n})})}},{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"render",value:function(){var e=this.state.books.map(function(e,t){var n=t+1;return o.createElement(a.a,{index:n,key:e._id,bookid:e._id,title:e.title,author:e.author,isbn:e.isbn,language:e.language,owner:e.owner,book:e.isBook,ebook:e.isEbook})});return o.createElement(o.Fragment,null,o.createElement("button",{className:"submit-button",onClick:this.handleClick}," ","Add a Book"," "),o.createElement(u.b,{show:this.state.showModal,close:this.handleClose}),o.createElement("table",{className:"table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Title"),o.createElement("th",null,"Author"),o.createElement("th",null,"ISBN"),o.createElement("th",null,"Language"),o.createElement("th",null,"Owner"),o.createElement("th",null,"Book?"),o.createElement("th",null,"Ebook?"),o.createElement("th",null))),o.createElement("tbody",null,e)))}}])&&c(n.prototype,r),h&&c(n,h),t}();t.a=h},41:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var o=n(0),r=n(2),l=n.n(r),a=n(42),u=n(18);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=s(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?b(o):r).state={users:[],showModal:""},n.handleClick=n.handleClick.bind(b(b(n))),n.handleClose=n.handleClose.bind(b(b(n))),n}var n,r,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;l.a.get("/api/users").then(function(t){var n=t.data;e.setState({users:n}),console.log(n)})}},{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"render",value:function(){var e=this.state.users.map(function(e,t){var n=t+1;return o.createElement(a.a,{index:n,key:e._id,userid:e._id,name:e.name,surname:e.surname,admin:e.admin,email:e.email})});return o.createElement(o.Fragment,null,o.createElement("button",{className:"submit-button",onClick:this.handleClick}," ","Add a User"," "),o.createElement(u.b,{show:this.state.showModal,close:this.handleClose}),o.createElement("table",{className:"table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Email"),o.createElement("th",null,"Name"),o.createElement("th",null,"Surname"),o.createElement("th",null,"Admin"),o.createElement("th",null))),o.createElement("tbody",null,e)))}}])&&c(n.prototype,r),h&&c(n,h),t}()},43:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var o=n(0),r=n(2),l=n.n(r),a=n(20),u=n(44);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=s(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?b(o):r).state={loans:[],showModal:""},n.handleClick=n.handleClick.bind(b(b(n))),n.handleClose=n.handleClose.bind(b(b(n))),n}var n,r,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;l.a.get("/api/loans").then(function(t){var n=t.data;e.setState({loans:n})})}},{key:"handleClick",value:function(){this.setState({showModal:"is-active"})}},{key:"handleClose",value:function(){this.setState({showModal:""})}},{key:"render",value:function(){var e=this.state.loans.map(function(e,t){var n=t+1;return o.createElement(u.a,{index:n,key:e._id,loanid:e._id,book:e.bookID,borrower:e.borrowerID,date:e.updatedAt})});return o.createElement(o.Fragment,null,o.createElement("button",{className:"submit-button",onClick:this.handleClick}," ","Add a Loan"," "),o.createElement(a.b,{show:this.state.showModal,close:this.handleClose}),o.createElement("table",{className:"table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Book"),o.createElement("th",null,"User"),o.createElement("th",null,"Date"),o.createElement("th",null))),o.createElement("tbody",null,e)))}}])&&c(n.prototype,r),h&&c(n,h),t}()}}]);