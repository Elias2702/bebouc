(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        18: function(e, t, n) {
            n.d(t, "a", () => {
                return f;
            });
            let a = n(0),
                o = n(2),
                r = n.n(o);

            function l(e) {
                return (l =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  typeof Symbol == "function" &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : typeof e;
                          })(e);
            }
            function i(e) {
                return (
                    (function(e) {
                        if (Array.isArray(e)) {
                            for (
                                var t = 0, n = new Array(e.length);
                                t < e.length;
                                t++
                            ) {
                                n[t] = e[t];
                            }
                            return n;
                        }
                    })(e) ||
                    (function(e) {
                        if (
                            Symbol.iterator in Object(e) ||
                            Object.prototype.toString.call(e) ===
                                "[object Arguments]"
                        ) {
                            return Array.from(e);
                        }
                    })(e) ||
                    (function() {
                        throw new TypeError(
                            "Invalid attempt to spread non-iterable instance",
                        );
                    })()
                );
            }
            function c(e, t) {
                for (let n = 0; n < t.length; n++) {
                    let a = t[n];

                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a);
                }
            }
            function s(e) {
                return (s = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function u(e, t) {
                return (u =
                    Object.setPrototypeOf ||
                    function(e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function m(e) {
                if (void 0 === e) {
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                }
                return e;
            }
            var f = (function(e) {
                function t(e) {
                    let n, a, o;

                    return (
                        (function(e, t) {
                            if (!(e instanceof t)) {
                                throw new TypeError(
                                    "Cannot call a class as a function",
                                );
                            }
                        })(this, t),
                        (a = this),
                        ((n =
                            !(o = s(t).call(this, e)) ||
                            (l(o) !== "object" && typeof o != "function")
                                ? m(a)
                                : o).handleSubmit = n.handleSubmit.bind(
                            m(m(n)),
                        )),
                        (n.handleChange = n.handleChange.bind(m(m(n)))),
                        (n.state = {books: [], isBook: !1, isEbook: !1}),
                        n
                    );
                }
                let n, o, f;

                return (
                    (function(e, t) {
                        if (typeof t != "function" && t !== null) {
                            throw new TypeError(
                                "Super expression must either be null or a function",
                            );
                        }
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            t && u(e, t);
                    })(t, a.Component),
                    (n = t),
                    (o = [
                        {
                            key: "componentDidMount",
                            value: function() {
                                let e = this;

                                r.a.get("/api/books").then(t => {
                                    let n = t.data;

                                    e.setState({books: n}), console.log(n);
                                });
                            },
                        },
                        {
                            key: "handleChange",
                            value: function(e) {
                                let t,
                                    n,
                                    a,
                                    o = e.target;

                                this.setState(
                                    ((t = {}),
                                    (n = o.name),
                                    (a =
                                        o.type === "checkbox"
                                            ? o.checked
                                            : o.value),
                                    n in t
                                        ? Object.defineProperty(t, n, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[n] = a),
                                    t),
                                );
                            },
                        },
                        {
                            key: "handleSubmit",
                            value: function(e) {
                                let t = this;

                                e.preventDefault(),
                                    r.a
                                        .post("http://localhost/api/books", {
                                            title: this.state.title,
                                            author: this.state.author,
                                            isbn: this.state.isbn,
                                            language: this.state.language,
                                            summary: this.state.summary,
                                            owner: "John",
                                            isEbook: !0,
                                            isBook: !1,
                                        })
                                        .then(e => {
                                            e.status !== 200
                                                ? console.log(
                                                      "Livre déjà existant",
                                                  )
                                                : t.setState(t => {
                                                      return {
                                                          books: [].concat(
                                                              i(t.books),
                                                              [e.data],
                                                          ),
                                                      };
                                                  });
                                        })
                                        .catch(e => {
                                            console.log(e);
                                        });
                            },
                        },
                        {
                            key: "render",
                            value: function() {
                                return a.createElement(
                                    "div",
                                    {
                                        className: "modal ".concat(
                                            this.props.show,
                                        ),
                                    },
                                    a.createElement("div", {
                                        className: "modal-background",
                                    }),
                                    a.createElement(
                                        "div",
                                        {className: "modal-content"},
                                        a.createElement(
                                            "div",
                                            {className: "container"},
                                            a.createElement(
                                                "section",
                                                {
                                                    className:
                                                        "section_addusers_title",
                                                },
                                                a.createElement(
                                                    "h1",
                                                    {
                                                        className:
                                                            "addusers_title",
                                                    },
                                                    " ",
                                                    " Add New book",
                                                    " ",
                                                ),
                                                " ",
                                            ),
                                            " ",
                                            a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "adduser-component",
                                                },
                                                a.createElement(
                                                    "form",
                                                    {
                                                        onSubmit: this
                                                            .handleSubmit,
                                                    },
                                                    a.createElement("label", {
                                                        id: "icon-input-field",
                                                        htmlFor: "title",
                                                    }),
                                                    a.createElement("input", {
                                                        className:
                                                            "input is-info is-small",
                                                        type: "text",
                                                        name: "title",
                                                        id: "title",
                                                        placeholder: "title",
                                                        value: this.state.title,
                                                        onChange: this
                                                            .handleChange,
                                                        required: !0,
                                                    }),
                                                    a.createElement("br", null),
                                                    a.createElement("label", {
                                                        id: "icon-input-field",
                                                        htmlFor: "author",
                                                    }),
                                                    a.createElement("input", {
                                                        className:
                                                            "input is-info is-small",
                                                        type: "text",
                                                        name: "author",
                                                        id: "author",
                                                        placeholder: "author",
                                                        value: this.state
                                                            .author,
                                                        onChange: this
                                                            .handleChange,
                                                        required: !0,
                                                    }),
                                                    a.createElement("br", null),
                                                    a.createElement("label", {
                                                        id: "icon-input-field",
                                                        htmlFor: "isbn",
                                                    }),
                                                    a.createElement("input", {
                                                        className:
                                                            "input is-info is-small",
                                                        type: "text",
                                                        name: "isbn",
                                                        id: "isbn",
                                                        placeholder: "ISBN ",
                                                        value: this.state.isbn,
                                                        onChange: this
                                                            .handleChange,
                                                        required: !0,
                                                    }),
                                                    a.createElement("br", null),
                                                    a.createElement("label", {
                                                        id: "icon-input-field",
                                                        htmlFor: "language",
                                                    }),
                                                    a.createElement("input", {
                                                        className:
                                                            "input is-info is-small",
                                                        type: "text",
                                                        name: "language",
                                                        id: "language",
                                                        placeholder: "Language",
                                                        value: this.state
                                                            .language,
                                                        onChange: this
                                                            .handleChange,
                                                        required: !0,
                                                    }),
                                                    a.createElement("br", null),
                                                    a.createElement(
                                                        "textarea",
                                                        {
                                                            className:
                                                                "textarea is-info is-small",
                                                            type: "text",
                                                            name: "summary",
                                                            id: "summary",
                                                            placeholder:
                                                                "summary",
                                                            value: this.state
                                                                .summary,
                                                            onChange: this
                                                                .handleChange,
                                                            cols: "30",
                                                            rows: "5",
                                                            required: !0,
                                                        },
                                                    ),
                                                    a.createElement("br", null),
                                                    a.createElement("input", {
                                                        className:
                                                            "input is-info is-small",
                                                        type: "text",
                                                        name: "owner",
                                                        id: "owner",
                                                        placeholder: "owner",
                                                        value: this.state.owner,
                                                        onChange: this
                                                            .handleChange,
                                                        required: !0,
                                                    }),
                                                    a.createElement("br", null),
                                                    a.createElement("br", null),
                                                    a.createElement(
                                                        "button",
                                                        {
                                                            type: "submit",
                                                            className:
                                                                "primary-button",
                                                        },
                                                        "Add Book",
                                                    ),
                                                ),
                                                a.createElement("hr", null),
                                                a.createElement(
                                                    "a",
                                                    {href: "/"},
                                                    " ",
                                                    a.createElement(
                                                        "button",
                                                        {
                                                            type: "submit",
                                                            className:
                                                                "secondary-button",
                                                        },
                                                        "Back",
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    a.createElement("button", {
                                        onClick: this.props.close,
                                        className: "modal-close is-large",
                                        "aria-label": "close",
                                    }),
                                );
                            },
                        },
                    ]) && c(n.prototype, o),
                    f && c(n, f),
                    t
                );
            })();

            t.b = f;
        },
        19: function(e, t, n) {
            n.d(t, "a", () => {
                return m;
            });
            let a = n(0),
                o = n(2),
                r = n.n(o);

            function l(e) {
                return (l =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                        ? function(e) {
                              return typeof e;
                          }
                        : function(e) {
                              return e &&
                                  typeof Symbol == "function" &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : typeof e;
                          })(e);
            }
            function i(e, t) {
                for (let n = 0; n < t.length; n++) {
                    let a = t[n];

                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a);
                }
            }
            function c(e, t) {
                return !t || (l(t) !== "object" && typeof t != "function")
                    ? (function(e) {
                          if (void 0 === e) {
                              throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called",
                              );
                          }
                          return e;
                      })(e)
                    : t;
            }
            function s(e) {
                return (s = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function u(e, t) {
                return (u =
                    Object.setPrototypeOf ||
                    function(e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            var m = (function(e) {
                function t(e) {
                    let n;

                    return (
                        (function(e, t) {
                            if (!(e instanceof t)) {
                                throw new TypeError(
                                    "Cannot call a class as a function",
                                );
                            }
                        })(this, t),
                        ((n = c(this, s(t).call(this, e))).state = {loans: []}),
                        n
                    );
                }
                let n, o, l;

                return (
                    (function(e, t) {
                        if (typeof t != "function" && t !== null) {
                            throw new TypeError(
                                "Super expression must either be null or a function",
                            );
                        }
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            t && u(e, t);
                    })(t, a.Component),
                    (n = t),
                    (o = [
                        {
                            key: "componentDidMount",
                            value: function() {
                                let e = this;

                                r.a
                                    .get("http://localhost/api/loans")
                                    .then(t => {
                                        let n = t.data;

                                        e.setState({loans: n}), console.log(n);
                                    });
                            },
                        },
                        {
                            key: "handleChange",
                            value: function(e) {
                                let t,
                                    n,
                                    a,
                                    o = e.target;

                                this.setState(
                                    ((t = {}),
                                    (n = o.name),
                                    (a =
                                        o.type === "checkbox"
                                            ? o.checked
                                            : o.value),
                                    n in t
                                        ? Object.defineProperty(t, n, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[n] = a),
                                    t),
                                );
                            },
                        },
                        {
                            key: "render",
                            value: function() {
                                return a.createElement(
                                    "div",
                                    {
                                        className: "modal ".concat(
                                            this.props.show,
                                        ),
                                    },
                                    a.createElement("div", {
                                        className: "modal-background",
                                    }),
                                    a.createElement(
                                        "div",
                                        {className: "modal-content"},
                                        a.createElement(
                                            "div",
                                            {className: "container"},
                                            a.createElement(
                                                "section",
                                                {className: "hero is-info"},
                                                a.createElement(
                                                    "div",
                                                    {className: "hero-body"},
                                                    a.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "container",
                                                        },
                                                        a.createElement(
                                                            "h1",
                                                            {
                                                                className:
                                                                    "title",
                                                            },
                                                            " Add a Loan",
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    a.createElement("button", {
                                        onClick: this.props.close,
                                        className: "modal-close is-large",
                                        "aria-label": "close",
                                    }),
                                );
                            },
                        },
                    ]) && i(n.prototype, o),
                    l && i(n, l),
                    t
                );
            })();

            t.b = m;
        },
    },
]);
