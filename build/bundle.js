(() => {
    "use strict";
    var e,
        n,
        t,
        r,
        o,
        a,
        i,
        s,
        c,
        u,
        l,
        p,
        d,
        f,
        v = {
            314: (e, n, t) => {
                t.d(n, { Z: () => s });
                var r = t(81),
                    o = t.n(r),
                    a = t(645),
                    i = t.n(a)()(o());
                i.push([
                    e.id,
                    '*, *::after, *::before {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.button {\n  appearance: button;\n  backface-visibility: hidden;\n  background-color: #405cf5;\n  border-radius: 6px;\n  border-width: 0;\n  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;\n  font-size: 100%;\n  height: 44px;\n  line-height: 1.15;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transform: translateZ(0);\n  transition: all .2s,box-shadow .08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\n.button:disabled {\n  cursor: default;\n}\n\n.button:focus {\n  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;\n}',
                    "",
                ]);
                const s = i;
            },
            645: (e) => {
                e.exports = function (e) {
                    var n = [];
                    return (
                        (n.toString = function () {
                            return this.map(function (n) {
                                var t = "",
                                    r = void 0 !== n[5];
                                return (
                                    n[4] &&
                                        (t += "@supports (".concat(
                                            n[4],
                                            ") {"
                                        )),
                                    n[2] && (t += "@media ".concat(n[2], " {")),
                                    r &&
                                        (t += "@layer".concat(
                                            n[5].length > 0
                                                ? " ".concat(n[5])
                                                : "",
                                            " {"
                                        )),
                                    (t += e(n)),
                                    r && (t += "}"),
                                    n[2] && (t += "}"),
                                    n[4] && (t += "}"),
                                    t
                                );
                            }).join("");
                        }),
                        (n.i = function (e, t, r, o, a) {
                            "string" == typeof e && (e = [[null, e, void 0]]);
                            var i = {};
                            if (r)
                                for (var s = 0; s < this.length; s++) {
                                    var c = this[s][0];
                                    null != c && (i[c] = !0);
                                }
                            for (var u = 0; u < e.length; u++) {
                                var l = [].concat(e[u]);
                                (r && i[l[0]]) ||
                                    (void 0 !== a &&
                                        (void 0 === l[5] ||
                                            (l[1] = "@layer"
                                                .concat(
                                                    l[5].length > 0
                                                        ? " ".concat(l[5])
                                                        : "",
                                                    " {"
                                                )
                                                .concat(l[1], "}")),
                                        (l[5] = a)),
                                    t &&
                                        (l[2]
                                            ? ((l[1] = "@media "
                                                  .concat(l[2], " {")
                                                  .concat(l[1], "}")),
                                              (l[2] = t))
                                            : (l[2] = t)),
                                    o &&
                                        (l[4]
                                            ? ((l[1] = "@supports ("
                                                  .concat(l[4], ") {")
                                                  .concat(l[1], "}")),
                                              (l[4] = o))
                                            : (l[4] = "".concat(o))),
                                    n.push(l));
                            }
                        }),
                        n
                    );
                };
            },
            81: (e) => {
                e.exports = function (e) {
                    return e[1];
                };
            },
            379: (e) => {
                var n = [];
                function t(e) {
                    for (var t = -1, r = 0; r < n.length; r++)
                        if (n[r].identifier === e) {
                            t = r;
                            break;
                        }
                    return t;
                }
                function r(e, r) {
                    for (var a = {}, i = [], s = 0; s < e.length; s++) {
                        var c = e[s],
                            u = r.base ? c[0] + r.base : c[0],
                            l = a[u] || 0,
                            p = "".concat(u, " ").concat(l);
                        a[u] = l + 1;
                        var d = t(p),
                            f = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3],
                                supports: c[4],
                                layer: c[5],
                            };
                        if (-1 !== d) n[d].references++, n[d].updater(f);
                        else {
                            var v = o(f, r);
                            (r.byIndex = s),
                                n.splice(s, 0, {
                                    identifier: p,
                                    updater: v,
                                    references: 1,
                                });
                        }
                        i.push(p);
                    }
                    return i;
                }
                function o(e, n) {
                    var t = n.domAPI(n);
                    return (
                        t.update(e),
                        function (n) {
                            if (n) {
                                if (
                                    n.css === e.css &&
                                    n.media === e.media &&
                                    n.sourceMap === e.sourceMap &&
                                    n.supports === e.supports &&
                                    n.layer === e.layer
                                )
                                    return;
                                t.update((e = n));
                            } else t.remove();
                        }
                    );
                }
                e.exports = function (e, o) {
                    var a = r((e = e || []), (o = o || {}));
                    return function (e) {
                        e = e || [];
                        for (var i = 0; i < a.length; i++) {
                            var s = t(a[i]);
                            n[s].references--;
                        }
                        for (var c = r(e, o), u = 0; u < a.length; u++) {
                            var l = t(a[u]);
                            0 === n[l].references &&
                                (n[l].updater(), n.splice(l, 1));
                        }
                        a = c;
                    };
                };
            },
            569: (e) => {
                var n = {};
                e.exports = function (e, t) {
                    var r = (function (e) {
                        if (void 0 === n[e]) {
                            var t = document.querySelector(e);
                            if (
                                window.HTMLIFrameElement &&
                                t instanceof window.HTMLIFrameElement
                            )
                                try {
                                    t = t.contentDocument.head;
                                } catch (e) {
                                    t = null;
                                }
                            n[e] = t;
                        }
                        return n[e];
                    })(e);
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    r.appendChild(t);
                };
            },
            216: (e) => {
                e.exports = function (e) {
                    var n = document.createElement("style");
                    return (
                        e.setAttributes(n, e.attributes),
                        e.insert(n, e.options),
                        n
                    );
                };
            },
            565: (e, n, t) => {
                e.exports = function (e) {
                    var n = t.nc;
                    n && e.setAttribute("nonce", n);
                };
            },
            795: (e) => {
                e.exports = function (e) {
                    var n = e.insertStyleElement(e);
                    return {
                        update: function (t) {
                            !(function (e, n, t) {
                                var r = "";
                                t.supports &&
                                    (r += "@supports (".concat(
                                        t.supports,
                                        ") {"
                                    )),
                                    t.media &&
                                        (r += "@media ".concat(t.media, " {"));
                                var o = void 0 !== t.layer;
                                o &&
                                    (r += "@layer".concat(
                                        t.layer.length > 0
                                            ? " ".concat(t.layer)
                                            : "",
                                        " {"
                                    )),
                                    (r += t.css),
                                    o && (r += "}"),
                                    t.media && (r += "}"),
                                    t.supports && (r += "}");
                                var a = t.sourceMap;
                                a &&
                                    "undefined" != typeof btoa &&
                                    (r +=
                                        "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(a)
                                                    )
                                                )
                                            ),
                                            " */"
                                        )),
                                    n.styleTagTransform(r, e, n.options);
                            })(n, e, t);
                        },
                        remove: function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        },
                    };
                };
            },
            589: (e) => {
                e.exports = function (e, n) {
                    if (n.styleSheet) n.styleSheet.cssText = e;
                    else {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(e));
                    }
                };
            },
        },
        b = {};
    function h(e) {
        var n = b[e];
        if (void 0 !== n) return n.exports;
        var t = (b[e] = { id: e, exports: {} });
        return v[e](t, t.exports, h), t.exports;
    }
    (h.n = (e) => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return h.d(n, { a: n }), n;
    }),
        (h.d = (e, n) => {
            for (var t in n)
                h.o(n, t) &&
                    !h.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (h.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (e = h(379)),
        (n = h.n(e)),
        (t = h(795)),
        (r = h.n(t)),
        (o = h(569)),
        (a = h.n(o)),
        (i = h(565)),
        (s = h.n(i)),
        (c = h(216)),
        (u = h.n(c)),
        (l = h(589)),
        (p = h.n(l)),
        (d = h(314)),
        ((f = {}).styleTagTransform = p()),
        (f.setAttributes = s()),
        (f.insert = a().bind(null, "head")),
        (f.domAPI = r()),
        (f.insertStyleElement = u()),
        n()(d.Z, f),
        d.Z && d.Z.locals && d.Z.locals,
        (function () {
            var e = document.createElement("button");
            (e.classList = "button"),
                (e.textContent = "Изменить цвет страницы");
            var n = document.querySelector("body");
            n.appendChild(e),
                e.addEventListener("click", function () {
                    var e = (function () {
                        for (var e = "#", n = 0; n < 6; n++)
                            e += "0123456789ABCDEF"[
                                Math.floor(16 * Math.random())
                            ];
                        return e;
                    })();
                    console.log(e), (n.style.backgroundColor = e);
                });
        })();
})();
