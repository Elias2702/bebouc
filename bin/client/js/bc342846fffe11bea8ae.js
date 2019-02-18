(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
        66: function(e, t, n) {
            n.r(t);
            let a = n(0),
                o = n.n(a),
                r = n(26),
                c = n.n(r),
                i = n(102),
                u = n(2),
                l = n.n(u),
                s = n(101),
                p = n(11),
                m = n(38),
                f = n(17),
                d = n(24),
                h = n(18),
                g = n(19),
                b = n(53),
                y = n(54),
                E = n(20),
                v = n(15),
                w = n(22),
                S = n(56);

            n(93);
            function x(e) {
                return (x =
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
            function J(e, t) {
                for (let n = 0; n < t.length; n++) {
                    let a = t[n];

                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a);
                }
            }
            function O(e) {
                return (O = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function k(e, t) {
                return (k =
                    Object.setPrototypeOf ||
                    function(e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function L(e) {
                if (void 0 === e) {
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    );
                }
                return e;
            }
            v.b.add(w.b), v.b.add(w.a);
            let _ = (function(e) {
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
                            !(o = O(t).call(this, e)) ||
                            (x(o) !== "object" && typeof o != "function")
                                ? L(a)
                                : o).logout = n.logout.bind(L(L(n)))),
                        (n.isLogged = n.isLogged.bind(L(L(n)))),
                        (n.state = {auth: !1, isJunior: !1}),
                        n
                    );
                }
                let n, r, c;

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
                            t && k(e, t);
                    })(t, a.Component),
                    (n = t),
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function() {
                                let e = this;

                                l.a
                                    .get("/api/auth")
                                    .then(t => {
                                        console.log(t.data),
                                            t.status === 200
                                                ? (!0 === t.data.admin &&
                                                      e.setState({
                                                          auth: !0,
                                                          isJunior: !1,
                                                      }),
                                                  !1 === reponse.data.admin &&
                                                      e.setState({
                                                          auth: !0,
                                                          isJunior: !0,
                                                      }))
                                                : e.setState({auth: !1});
                                    })
                                    .then(e => {
                                        console.log(e);
                                    });
                            },
                        },
                        {
                            key: "isLogged",
                            value: function() {
                                console.log("is Logged"),
                                    this.setState({auth: !0});
                            },
                        },
                        {
                            key: "logout",
                            value: function() {
                                console.log("Logout"),
                                    this.setState({auth: !1, isJunior: !1}),
                                    localStorage.removeItem("token"),
                                    (window.location = "/");
                            },
                        },
                        {
                            key: "render",
                            value: function() {
                                let e = this,
                                    t = "";

                                return (
                                    (t = this.state.auth
                                        ? o.a.createElement(
                                              o.a.Fragment,
                                              null,
                                              o.a.createElement(
                                                  "div",
                                                  {className: "App"},
                                                  o.a.createElement(
                                                      "div",
                                                      {
                                                          className:
                                                              "App-content",
                                                      },
                                                      o.a.createElement(y.a, {
                                                          isJunior: this.state
                                                              .isJunior,
                                                          isLogout: this.logout,
                                                      }),
                                                      o.a.createElement(
                                                          s.a,
                                                          null,
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path: "/",
                                                                  component:
                                                                      d.a,
                                                              },
                                                          ),
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path:
                                                                      "/addbook",
                                                                  component:
                                                                      h.a,
                                                              },
                                                          ),
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path:
                                                                      "/addloan",
                                                                  component:
                                                                      g.a,
                                                              },
                                                          ),
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path:
                                                                      "/catalogue",
                                                                  component:
                                                                      E.a,
                                                              },
                                                          ),
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path:
                                                                      "/editprofil",
                                                                  component:
                                                                      b.a,
                                                              },
                                                          ),
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path:
                                                                      "/admin",
                                                                  component:
                                                                      d.a,
                                                                  render: function() {
                                                                      return o.a.createElement(
                                                                          d.a,
                                                                          {
                                                                              isJunior:
                                                                                  e
                                                                                      .state
                                                                                      .isJunior,
                                                                          },
                                                                      );
                                                                  },
                                                              },
                                                          ),
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path:
                                                                      "/Register",
                                                                  component:
                                                                      f.a,
                                                              },
                                                          ),
                                                          o.a.createElement(
                                                              p.a,
                                                              {
                                                                  exact: !0,
                                                                  path: "*",
                                                                  component:
                                                                      S.a,
                                                              },
                                                          ),
                                                      ),
                                                  ),
                                              ),
                                          )
                                        : o.a.createElement(
                                              o.a.Fragment,
                                              null,
                                              o.a.createElement(p.a, {
                                                  exact: !0,
                                                  path: "/",
                                                  render: function() {
                                                      return o.a.createElement(
                                                          m.a,
                                                          {
                                                              isLogged:
                                                                  e.isLogged,
                                                          },
                                                      );
                                                  },
                                              }),
                                          )),
                                    o.a.createElement(
                                        "div",
                                        {className: "App"},
                                        t,
                                    )
                                );
                            },
                        },
                    ]) && J(n.prototype, r),
                    c && J(n, c),
                    t
                );
            })();

            c.a.render(
                o.a.createElement(i.a, null, o.a.createElement(_, null)),
                document.getElementById("app"),
            );
        },
    },
]);
