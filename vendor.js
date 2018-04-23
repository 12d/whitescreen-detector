webpackJsonp([0], [function(e, t) {
    e.exports = function(e, t, n, r, i, a) {
        var o, s = e = e || {}, l = typeof e.default;
        "object" !== l && "function" !== l || (o = e,
        s = e.default);
        var u = "function" == typeof s ? s.options : s;
        t && (u.render = t.render,
        u.staticRenderFns = t.staticRenderFns,
        u._compiled = !0),
        n && (u.functional = !0),
        i && (u._scopeId = i);
        var c;
        if (a ? (c = function(e) {
            e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
            e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
            r && r.call(this, e),
            e && e._registeredComponents && e._registeredComponents.add(a)
        }
        ,
        u._ssrRegister = c) : r && (c = r),
        c) {
            var p = u.functional
              , d = p ? u.render : u.beforeCreate;
            p ? (u._injectStyles = c,
            u.render = function(e, t) {
                return c.call(t),
                d(e, t)
            }
            ) : u.beforeCreate = d ? [].concat(d, c) : [c]
        }
        return {
            esModule: o,
            exports: s,
            options: u
        }
    }
}
, function(e, t, n) {
    ;
    function r(e) {
        return "[object Array]" === _.call(e)
    }
    function i(e) {
        return "[object ArrayBuffer]" === _.call(e)
    }
    function a(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    function o(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    }
    function s(e) {
        return "string" == typeof e
    }
    function l(e) {
        return "number" == typeof e
    }
    function u(e) {
        return void 0 === e
    }
    function c(e) {
        return null !== e && "object" == typeof e
    }
    function p(e) {
        return "[object Date]" === _.call(e)
    }
    function d(e) {
        return "[object File]" === _.call(e)
    }
    function f(e) {
        return "[object Blob]" === _.call(e)
    }
    function h(e) {
        return "[object Function]" === _.call(e)
    }
    function m(e) {
        return c(e) && h(e.pipe)
    }
    function v(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }
    function g(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }
    function y() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }
    function w(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" == typeof e || r(e) || (e = [e]),
            r(e))
                for (var n = 0, i = e.length; n < i; n++)
                    t.call(null, e[n], n, e);
            else
                for (var a in e)
                    Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
    }
    function b() {
        function e(e, n) {
            "object" == typeof t[n] && "object" == typeof e ? t[n] = b(t[n], e) : t[n] = e
        }
        for (var t = {}, n = 0, r = arguments.length; n < r; n++)
            w(arguments[n], e);
        return t
    }
    function x(e, t, n) {
        return w(t, function(t, r) {
            e[r] = n && "function" == typeof t ? C(t, n) : t
        }),
        e
    }
    var C = n(11)
      , T = n(45)
      , _ = Object.prototype.toString;
    e.exports = {
        isArray: r,
        isArrayBuffer: i,
        isBuffer: T,
        isFormData: a,
        isArrayBufferView: o,
        isString: s,
        isNumber: l,
        isObject: c,
        isUndefined: u,
        isDate: p,
        isFile: d,
        isBlob: f,
        isFunction: h,
        isStream: m,
        isURLSearchParams: v,
        isStandardBrowserEnv: y,
        forEach: w,
        merge: b,
        extend: x,
        trim: g
    }
}
, function(e, t) {
    function n(e, t) {
        var n = e[1] || ""
          , i = e[3];
        if (!i)
            return n;
        if (t && "function" == typeof btoa) {
            var a = r(i);
            return [n].concat(i.sources.map(function(e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */"
            })).concat([a]).join("\n")
        }
        return [n].join("\n")
    }
    function r(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var r = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + r + "}" : r
            }).join("")
        }
        ,
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var a = this[i][0];
                "number" == typeof a && (r[a] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var o = e[i];
                "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"),
                t.push(o))
            }
        }
        ,
        t
    }
}
, function(e, t, n) {
    function r(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t]
              , r = c[n.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++)
                    r.parts[i](n.parts[i]);
                for (; i < n.parts.length; i++)
                    r.parts.push(a(n.parts[i]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                for (var o = [], i = 0; i < n.parts.length; i++)
                    o.push(a(n.parts[i]));
                c[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }
    function i() {
        var e = document.createElement("style");
        return e.type = "text/css",
        p.appendChild(e),
        e
    }
    function a(e) {
        var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
        if (r) {
            if (h)
                return m;
            r.parentNode.removeChild(r)
        }
        if (v) {
            var a = f++;
            r = d || (d = i()),
            t = o.bind(null, r, a, !1),
            n = o.bind(null, r, a, !0)
        } else
            r = i(),
            t = s.bind(null, r),
            n = function() {
                r.parentNode.removeChild(r)
            }
            ;
        return t(e),
        function(r) {
            if (r) {
                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap)
                    return;
                t(e = r)
            } else
                n()
        }
    }
    function o(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet)
            e.styleSheet.cssText = g(t, i);
        else {
            var a = document.createTextNode(i)
              , o = e.childNodes;
            o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
        }
    }
    function s(e, t) {
        var n = t.css
          , r = t.media
          , i = t.sourceMap;
        if (r && e.setAttribute("media", r),
        i && (n += "\n/*# sourceURL=" + i.sources[0] + " */",
        n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
        e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    var l = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !l)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var u = n(24)
      , c = {}
      , p = l && (document.head || document.getElementsByTagName("head")[0])
      , d = null
      , f = 0
      , h = !1
      , m = function() {}
      , v = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
    e.exports = function(e, t, n) {
        h = n;
        var i = u(e, t);
        return r(i),
        function(t) {
            for (var n = [], a = 0; a < i.length; a++) {
                var o = i[a]
                  , s = c[o.id];
                s.refs--,
                n.push(s)
            }
            t ? (i = u(e, t),
            r(i)) : i = [];
            for (var a = 0; a < n.length; a++) {
                var s = n[a];
                if (0 === s.refs) {
                    for (var l = 0; l < s.parts.length; l++)
                        s.parts[l]();
                    delete c[s.id]
                }
            }
        }
    }
    ;
    var g = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    }()
}
, function(e, t, n) {
    ;
    function r(e) {
        S && (e._devtoolHook = S,
        S.emit("vuex:init", e),
        S.on("vuex:travel-to-state", function(t) {
            e.replaceState(t)
        }),
        e.subscribe(function(e, t) {
            S.emit("vuex:mutation", e, t)
        }))
    }
    function i(e, t) {
        Object.keys(e).forEach(function(n) {
            return t(e[n], n)
        })
    }
    function a(e) {
        return null !== e && "object" == typeof e
    }
    function o(e) {
        return e && "function" == typeof e.then
    }
    function s(e, t, n) {
        if (t.update(n),
        n.modules)
            for (var r in n.modules) {
                if (!t.getChild(r))
                    return;
                s(e.concat(r), t.getChild(r), n.modules[r])
            }
    }
    function l(e, t) {
        return t.indexOf(e) < 0 && t.push(e),
        function() {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
    }
    function u(e, t) {
        e._actions = Object.create(null),
        e._mutations = Object.create(null),
        e._wrappedGetters = Object.create(null),
        e._modulesNamespaceMap = Object.create(null);
        var n = e.state;
        p(e, n, [], e._modules.root, !0),
        c(e, n, t)
    }
    function c(e, t, n) {
        var r = e._vm;
        e.getters = {};
        var a = e._wrappedGetters
          , o = {};
        i(a, function(t, n) {
            o[n] = function() {
                return t(e)
            }
            ,
            Object.defineProperty(e.getters, n, {
                get: function() {
                    return e._vm[n]
                },
                enumerable: !0
            })
        });
        var s = M.config.silent;
        M.config.silent = !0,
        e._vm = new M({
            data: {
                $$state: t
            },
            computed: o
        }),
        M.config.silent = s,
        e.strict && g(e),
        r && (n && e._withCommit(function() {
            r._data.$$state = null
        }),
        M.nextTick(function() {
            return r.$destroy()
        }))
    }
    function p(e, t, n, r, i) {
        var a = !n.length
          , o = e._modules.getNamespace(n);
        if (r.namespaced && (e._modulesNamespaceMap[o] = r),
        !a && !i) {
            var s = y(t, n.slice(0, -1))
              , l = n[n.length - 1];
            e._withCommit(function() {
                M.set(s, l, r.state)
            })
        }
        var u = r.context = d(e, o, n);
        r.forEachMutation(function(t, n) {
            h(e, o + n, t, u)
        }),
        r.forEachAction(function(t, n) {
            var r = t.root ? n : o + n
              , i = t.handler || t;
            m(e, r, i, u)
        }),
        r.forEachGetter(function(t, n) {
            v(e, o + n, t, u)
        }),
        r.forEachChild(function(r, a) {
            p(e, t, n.concat(a), r, i)
        })
    }
    function d(e, t, n) {
        var r = "" === t
          , i = {
            dispatch: r ? e.dispatch : function(n, r, i) {
                var a = w(n, r, i)
                  , o = a.payload
                  , s = a.options
                  , l = a.type;
                return s && s.root || (l = t + l),
                e.dispatch(l, o)
            }
            ,
            commit: r ? e.commit : function(n, r, i) {
                var a = w(n, r, i)
                  , o = a.payload
                  , s = a.options
                  , l = a.type;
                s && s.root || (l = t + l),
                e.commit(l, o, s)
            }
        };
        return Object.defineProperties(i, {
            getters: {
                get: r ? function() {
                    return e.getters
                }
                : function() {
                    return f(e, t)
                }
            },
            state: {
                get: function() {
                    return y(e.state, n)
                }
            }
        }),
        i
    }
    function f(e, t) {
        var n = {}
          , r = t.length;
        return Object.keys(e.getters).forEach(function(i) {
            if (i.slice(0, r) === t) {
                var a = i.slice(r);
                Object.defineProperty(n, a, {
                    get: function() {
                        return e.getters[i]
                    },
                    enumerable: !0
                })
            }
        }),
        n
    }
    function h(e, t, n, r) {
        (e._mutations[t] || (e._mutations[t] = [])).push(function(t) {
            n.call(e, r.state, t)
        })
    }
    function m(e, t, n, r) {
        (e._actions[t] || (e._actions[t] = [])).push(function(t, i) {
            var a = n.call(e, {
                dispatch: r.dispatch,
                commit: r.commit,
                getters: r.getters,
                state: r.state,
                rootGetters: e.getters,
                rootState: e.state
            }, t, i);
            return o(a) || (a = Promise.resolve(a)),
            e._devtoolHook ? a.catch(function(t) {
                throw e._devtoolHook.emit("vuex:error", t),
                t
            }) : a
        })
    }
    function v(e, t, n, r) {
        e._wrappedGetters[t] || (e._wrappedGetters[t] = function(e) {
            return n(r.state, r.getters, e.state, e.getters)
        }
        )
    }
    function g(e) {
        e._vm.$watch(function() {
            return this._data.$$state
        }, function() {}, {
            deep: !0,
            sync: !0
        })
    }
    function y(e, t) {
        return t.length ? t.reduce(function(e, t) {
            return e[t]
        }, e) : e
    }
    function w(e, t, n) {
        return a(e) && e.type && (n = t,
        t = e,
        e = e.type),
        {
            type: e,
            payload: t,
            options: n
        }
    }
    function b(e) {
        M && e === M || (M = e,
        _(M))
    }
    function x(e) {
        return Array.isArray(e) ? e.map(function(e) {
            return {
                key: e,
                val: e
            }
        }) : Object.keys(e).map(function(t) {
            return {
                key: t,
                val: e[t]
            }
        })
    }
    function C(e) {
        return function(t, n) {
            return "string" != typeof t ? (n = t,
            t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"),
            e(t, n)
        }
    }
    function T(e, t, n) {
        return e._modulesNamespaceMap[n]
    }
    n.d(t, "b", function() {
        return I
    });
    var _ = function(e) {
        function t() {
            var e = this.$options;
            e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store)
        }
        if (Number(e.version.split(".")[0]) >= 2)
            e.mixin({
                beforeCreate: t
            });
        else {
            var n = e.prototype._init;
            e.prototype._init = function(e) {
                void 0 === e && (e = {}),
                e.init = e.init ? [t].concat(e.init) : t,
                n.call(this, e)
            }
        }
    }
      , S = "undefined" != typeof window && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
      , E = function(e, t) {
        this.runtime = t,
        this._children = Object.create(null),
        this._rawModule = e;
        var n = e.state;
        this.state = ("function" == typeof n ? n() : n) || {}
    }
      , k = {
        namespaced: {
            configurable: !0
        }
    };
    k.namespaced.get = function() {
        return !!this._rawModule.namespaced
    }
    ,
    E.prototype.addChild = function(e, t) {
        this._children[e] = t
    }
    ,
    E.prototype.removeChild = function(e) {
        delete this._children[e]
    }
    ,
    E.prototype.getChild = function(e) {
        return this._children[e]
    }
    ,
    E.prototype.update = function(e) {
        this._rawModule.namespaced = e.namespaced,
        e.actions && (this._rawModule.actions = e.actions),
        e.mutations && (this._rawModule.mutations = e.mutations),
        e.getters && (this._rawModule.getters = e.getters)
    }
    ,
    E.prototype.forEachChild = function(e) {
        i(this._children, e)
    }
    ,
    E.prototype.forEachGetter = function(e) {
        this._rawModule.getters && i(this._rawModule.getters, e)
    }
    ,
    E.prototype.forEachAction = function(e) {
        this._rawModule.actions && i(this._rawModule.actions, e)
    }
    ,
    E.prototype.forEachMutation = function(e) {
        this._rawModule.mutations && i(this._rawModule.mutations, e)
    }
    ,
    Object.defineProperties(E.prototype, k);
    var A = function(e) {
        this.register([], e, !1)
    };
    A.prototype.get = function(e) {
        return e.reduce(function(e, t) {
            return e.getChild(t)
        }, this.root)
    }
    ,
    A.prototype.getNamespace = function(e) {
        var t = this.root;
        return e.reduce(function(e, n) {
            return t = t.getChild(n),
            e + (t.namespaced ? n + "/" : "")
        }, "")
    }
    ,
    A.prototype.update = function(e) {
        s([], this.root, e)
    }
    ,
    A.prototype.register = function(e, t, n) {
        var r = this;
        void 0 === n && (n = !0);
        var a = new E(t,n);
        if (0 === e.length)
            this.root = a;
        else {
            this.get(e.slice(0, -1)).addChild(e[e.length - 1], a)
        }
        t.modules && i(t.modules, function(t, i) {
            r.register(e.concat(i), t, n)
        })
    }
    ,
    A.prototype.unregister = function(e) {
        var t = this.get(e.slice(0, -1))
          , n = e[e.length - 1];
        t.getChild(n).runtime && t.removeChild(n)
    }
    ;
    var M, z = function(e) {
        var t = this;
        void 0 === e && (e = {}),
        !M && "undefined" != typeof window && window.Vue && b(window.Vue);
        var n = e.plugins;
        void 0 === n && (n = []);
        var i = e.strict;
        void 0 === i && (i = !1);
        var a = e.state;
        void 0 === a && (a = {}),
        "function" == typeof a && (a = a() || {}),
        this._committing = !1,
        this._actions = Object.create(null),
        this._actionSubscribers = [],
        this._mutations = Object.create(null),
        this._wrappedGetters = Object.create(null),
        this._modules = new A(e),
        this._modulesNamespaceMap = Object.create(null),
        this._subscribers = [],
        this._watcherVM = new M;
        var o = this
          , s = this
          , l = s.dispatch
          , u = s.commit;
        this.dispatch = function(e, t) {
            return l.call(o, e, t)
        }
        ,
        this.commit = function(e, t, n) {
            return u.call(o, e, t, n)
        }
        ,
        this.strict = i,
        p(this, a, [], this._modules.root),
        c(this, a),
        n.forEach(function(e) {
            return e(t)
        }),
        M.config.devtools && r(this)
    }, O = {
        state: {
            configurable: !0
        }
    };
    O.state.get = function() {
        return this._vm._data.$$state
    }
    ,
    O.state.set = function(e) {}
    ,
    z.prototype.commit = function(e, t, n) {
        var r = this
          , i = w(e, t, n)
          , a = i.type
          , o = i.payload
          , s = (i.options,
        {
            type: a,
            payload: o
        })
          , l = this._mutations[a];
        l && (this._withCommit(function() {
            l.forEach(function(e) {
                e(o)
            })
        }),
        this._subscribers.forEach(function(e) {
            return e(s, r.state)
        }))
    }
    ,
    z.prototype.dispatch = function(e, t) {
        var n = this
          , r = w(e, t)
          , i = r.type
          , a = r.payload
          , o = {
            type: i,
            payload: a
        }
          , s = this._actions[i];
        if (s)
            return this._actionSubscribers.forEach(function(e) {
                return e(o, n.state)
            }),
            s.length > 1 ? Promise.all(s.map(function(e) {
                return e(a)
            })) : s[0](a)
    }
    ,
    z.prototype.subscribe = function(e) {
        return l(e, this._subscribers)
    }
    ,
    z.prototype.subscribeAction = function(e) {
        return l(e, this._actionSubscribers)
    }
    ,
    z.prototype.watch = function(e, t, n) {
        var r = this;
        return this._watcherVM.$watch(function() {
            return e(r.state, r.getters)
        }, t, n)
    }
    ,
    z.prototype.replaceState = function(e) {

        var t = this;
        this._withCommit(function() {
            t._vm._data.$$state = e
        })
    }
    ,
    z.prototype.registerModule = function(e, t, n) {
        void 0 === n && (n = {}),
        "string" == typeof e && (e = [e]),
        this._modules.register(e, t),
        p(this, this.state, e, this._modules.get(e), n.preserveState),
        c(this, this.state)
    }
    ,
    z.prototype.unregisterModule = function(e) {
        var t = this;
        "string" == typeof e && (e = [e]),
        this._modules.unregister(e),
        this._withCommit(function() {
            var n = y(t.state, e.slice(0, -1));
            M.delete(n, e[e.length - 1])
        }),
        u(this)
    }
    ,
    z.prototype.hotUpdate = function(e) {
        this._modules.update(e),
        u(this, !0)
    }
    ,
    z.prototype._withCommit = function(e) {
        var t = this._committing;
        this._committing = !0,
        e(),
        this._committing = t
    }
    ,
    Object.defineProperties(z.prototype, O);
    var L = C(function(e, t) {
        var n = {};
        return x(t).forEach(function(t) {
            var r = t.key
              , i = t.val;
            n[r] = function() {
                var t = this.$store.state
                  , n = this.$store.getters;
                if (e) {
                    var r = T(this.$store, "mapState", e);
                    if (!r)
                        return;
                    t = r.context.state,
                    n = r.context.getters
                }
                return "function" == typeof i ? i.call(this, t, n) : t[i]
            }
            ,
            n[r].vuex = !0
        }),
        n
    })
      , P = C(function(e, t) {
        var n = {};
        return x(t).forEach(function(t) {
            var r = t.key
              , i = t.val;
            n[r] = function() {
                for (var t = [], n = arguments.length; n--; )
                    t[n] = arguments[n];
                var r = this.$store.commit;
                if (e) {
                    var a = T(this.$store, "mapMutations", e);
                    if (!a)
                        return;
                    r = a.context.commit
                }
                return "function" == typeof i ? i.apply(this, [r].concat(t)) : r.apply(this.$store, [i].concat(t))
            }
        }),
        n
    })
      , I = C(function(e, t) {
        var n = {};
        return x(t).forEach(function(t) {
            var r = t.key
              , i = t.val;
            i = e + i,
            n[r] = function() {
                if (!e || T(this.$store, "mapGetters", e))
                    return this.$store.getters[i]
            }
            ,
            n[r].vuex = !0
        }),
        n
    })
      , D = C(function(e, t) {
        var n = {};
        return x(t).forEach(function(t) {
            var r = t.key
              , i = t.val;
            n[r] = function() {
                for (var t = [], n = arguments.length; n--; )
                    t[n] = arguments[n];
                var r = this.$store.dispatch;
                if (e) {
                    var a = T(this.$store, "mapActions", e);
                    if (!a)
                        return;
                    r = a.context.dispatch
                }
                return "function" == typeof i ? i.apply(this, [r].concat(t)) : r.apply(this.$store, [i].concat(t))
            }
        }),
        n
    })
      , $ = function(e) {
        return {
            mapState: L.bind(null, e),
            mapGetters: I.bind(null, e),
            mapMutations: P.bind(null, e),
            mapActions: D.bind(null, e)
        }
    }
      , R = {
        Store: z,
        install: b,
        version: "2.5.0",
        mapState: L,
        mapMutations: P,
        mapGetters: I,
        mapActions: D,
        createNamespacedHelpers: $
    };
    t.a = R
}
, function(e, t, n) {
    ;
    (function(e, n) {
        function r(e) {
            return void 0 === e || null === e
        }
        function i(e) {
            return void 0 !== e && null !== e
        }
        function a(e) {
            return !0 === e
        }
        function o(e) {
            return !1 === e
        }
        function s(e) {
            return "string" == typeof e || "number" == typeof e || "boolean" == typeof e
        }
        function l(e) {
            return null !== e && "object" == typeof e
        }
        function u(e) {
            return "[object Object]" === dr.call(e)
        }
        function c(e) {
            return "[object RegExp]" === dr.call(e)
        }
        function p(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e)
        }
        function d(e) {
            return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
        }
        function f(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }
        function h(e, t) {
            for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++)
                n[r[i]] = !0;
            return t ? function(e) {
                return n[e.toLowerCase()]
            }
            : function(e) {
                return n[e]
            }
        }
        function m(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1)
                    return e.splice(n, 1)
            }
        }
        function v(e, t) {
            return hr.call(e, t)
        }
        function g(e) {
            var t = Object.create(null);
            return function(n) {
                return t[n] || (t[n] = e(n))
            }
        }
        function y(e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
            return n._length = e.length,
            n
        }
        function w(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--; )
                r[n] = e[n + t];
            return r
        }
        function b(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function x(e) {
            for (var t = {}, n = 0; n < e.length; n++)
                e[n] && b(t, e[n]);
            return t
        }
        function C(e, t, n) {}
        function T(e, t) {
            if (e === t)
                return !0;
            var n = l(e)
              , r = l(t);
            if (!n || !r)
                return !n && !r && String(e) === String(t);
            try {
                var i = Array.isArray(e)
                  , a = Array.isArray(t);
                if (i && a)
                    return e.length === t.length && e.every(function(e, n) {
                        return T(e, t[n])
                    });
                if (i || a)
                    return !1;
                var o = Object.keys(e)
                  , s = Object.keys(t);
                return o.length === s.length && o.every(function(n) {
                    return T(e[n], t[n])
                })
            } catch (e) {
                return !1
            }
        }
        function _(e, t) {
            for (var n = 0; n < e.length; n++)
                if (T(e[n], t))
                    return n;
            return -1
        }
        function S(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                e.apply(this, arguments))
            }
        }
        function E(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }
        function k(e, t, n, r) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }
        function A(e) {
            if (!kr.test(e)) {
                var t = e.split(".");
                return function(e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e)
                            return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }
        function M(e) {
            return "function" == typeof e && /native code/.test(e.toString())
        }
        function z(e) {
            Wr.target && qr.push(Wr.target),
            Wr.target = e
        }
        function O() {
            Wr.target = qr.pop()
        }
        function L(e) {
            return new Fr(void 0,void 0,void 0,String(e))
        }
        function P(e, t) {
            var n = new Fr(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);
            return n.ns = e.ns,
            n.isStatic = e.isStatic,
            n.key = e.key,
            n.isComment = e.isComment,
            n.isCloned = !0,
            t && e.children && (n.children = I(e.children)),
            n
        }
        function I(e, t) {
            for (var n = e.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = P(e[i], t);
            return r
        }
        function D(e, t, n) {
            e.__proto__ = t
        }
        function $(e, t, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                k(e, a, t[a])
            }
        }
        function R(e, t) {
            if (l(e) && !(e instanceof Fr)) {
                var n;
                return v(e, "__ob__") && e.__ob__ instanceof ti ? n = e.__ob__ : ei.shouldConvert && !Hr() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new ti(e)),
                t && n && n.vmCount++,
                n
            }
        }
        function N(e, t, n, r, i) {
            var a = new Wr
              , o = Object.getOwnPropertyDescriptor(e, t);
            if (!o || !1 !== o.configurable) {
                var s = o && o.get
                  , l = o && o.set
                  , u = !i && R(n);
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var t = s ? s.call(e) : n;
                        return Wr.target && (a.depend(),
                        u && (u.dep.depend(),
                        Array.isArray(t) && H(t))),
                        t
                    },
                    set: function(t) {
                        var r = s ? s.call(e) : n;
                        t === r || t !== t && r !== r || (l ? l.call(e, t) : n = t,
                        u = !i && R(t),
                        a.notify())
                    }
                })
            }
        }
        function B(e, t, n) {
            if (Array.isArray(e) && p(t))
                return e.length = Math.max(e.length, t),
                e.splice(t, 1, n),
                n;
            if (v(e, t))
                return e[t] = n,
                n;
            var r = e.__ob__;
            return e._isVue || r && r.vmCount ? n : r ? (N(r.value, t, n),
            r.dep.notify(),
            n) : (e[t] = n,
            n)
        }
        function j(e, t) {
            if (Array.isArray(e) && p(t))
                return void e.splice(t, 1);
            var n = e.__ob__;
            e._isVue || n && n.vmCount || v(e, t) && (delete e[t],
            n && n.dep.notify())
        }
        function H(e) {
            for (var t = void 0, n = 0, r = e.length; n < r; n++)
                t = e[n],
                t && t.__ob__ && t.__ob__.dep.depend(),
                Array.isArray(t) && H(t)
        }
        function G(e, t) {
            if (!t)
                return e;
            for (var n, r, i, a = Object.keys(t), o = 0; o < a.length; o++)
                n = a[o],
                r = e[n],
                i = t[n],
                v(e, n) ? u(r) && u(i) && G(r, i) : B(e, n, i);
            return e
        }
        function X(e, t, n) {
            return n ? e || t ? function() {
                var r = "function" == typeof t ? t.call(n) : t
                  , i = "function" == typeof e ? e.call(n) : e;
                return r ? G(r, i) : i
            }
            : void 0 : t ? e ? function() {
                return G("function" == typeof t ? t.call(this) : t, "function" == typeof e ? e.call(this) : e)
            }
            : t : e
        }
        function Y(e, t) {
            return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
        }
        function V(e, t, n, r) {
            var i = Object.create(e || null);
            return t ? b(i, t) : i
        }
        function W(e, t) {
            var n = e.props;
            if (n) {
                var r, i, a, o = {};
                if (Array.isArray(n))
                    for (r = n.length; r--; )
                        "string" == typeof (i = n[r]) && (a = vr(i),
                        o[a] = {
                            type: null
                        });
                else if (u(n))
                    for (var s in n)
                        i = n[s],
                        a = vr(s),
                        o[a] = u(i) ? i : {
                            type: i
                        };
                e.props = o
            }
        }
        function q(e, t) {
            var n = e.inject
              , r = e.inject = {};
            if (Array.isArray(n))
                for (var i = 0; i < n.length; i++)
                    r[n[i]] = {
                        from: n[i]
                    };
            else if (u(n))
                for (var a in n) {
                    var o = n[a];
                    r[a] = u(o) ? b({
                        from: a
                    }, o) : {
                        from: o
                    }
                }
        }
        function F(e) {
            var t = e.directives;
            if (t)
                for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {
                        bind: r,
                        update: r
                    })
                }
        }
        function U(e, t, n) {
            function r(r) {
                var i = ni[r] || ai;
                l[r] = i(e[r], t[r], n, r)
            }
            "function" == typeof t && (t = t.options),
            W(t, n),
            q(t, n),
            F(t);
            var i = t.extends;
            if (i && (e = U(e, i, n)),
            t.mixins)
                for (var a = 0, o = t.mixins.length; a < o; a++)
                    e = U(e, t.mixins[a], n);
            var s, l = {};
            for (s in e)
                r(s);
            for (s in t)
                v(e, s) || r(s);
            return l
        }
        function K(e, t, n, r) {
            if ("string" == typeof n) {
                var i = e[t];
                if (v(i, n))
                    return i[n];
                var a = vr(n);
                if (v(i, a))
                    return i[a];
                var o = gr(a);
                if (v(i, o))
                    return i[o];
                return i[n] || i[a] || i[o]
            }
        }
        function Q(e, t, n, r) {
            var i = t[e]
              , a = !v(n, e)
              , o = n[e];
            if (ee(Boolean, i.type) && (a && !v(i, "default") ? o = !1 : ee(String, i.type) || "" !== o && o !== wr(e) || (o = !0)),
            void 0 === o) {
                o = Z(r, i, e);
                var s = ei.shouldConvert;
                ei.shouldConvert = !0,
                R(o),
                ei.shouldConvert = s
            }
            return o
        }
        function Z(e, t, n) {
            if (v(t, "default")) {
                var r = t.default;
                return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== J(t.type) ? r.call(e) : r
            }
        }
        function J(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : ""
        }
        function ee(e, t) {
            if (!Array.isArray(t))
                return J(t) === J(e);
            for (var n = 0, r = t.length; n < r; n++)
                if (J(t[n]) === J(e))
                    return !0;
            return !1
        }
        function te(e, t, n) {
            if (t)
                for (var r = t; r = r.$parent; ) {
                    var i = r.$options.errorCaptured;
                    if (i)
                        for (var a = 0; a < i.length; a++)
                            try {
                                var o = !1 === i[a].call(r, e, t, n);
                                if (o)
                                    return
                            } catch (e) {
                                ne(e, r, "errorCaptured hook")
                            }
                }
            ne(e, t, n)
        }
        function ne(e, t, n) {
            if (Sr.errorHandler)
                try {
                    return Sr.errorHandler.call(null, e, t, n)
                } catch (e) {
                    re(e, null, "config.errorHandler")
                }
            re(e, t, n)
        }
        function re(e, t, n) {
            if (!Mr || "undefined" == typeof console)
                throw e;
            console.error(e)
        }
        function ie() {
            si = !1;
            var e = oi.slice(0);
            oi.length = 0;
            for (var t = 0; t < e.length; t++)
                e[t]()
        }
        function ae(e) {
            return e._withTask || (e._withTask = function() {
                li = !0;
                var t = e.apply(null, arguments);
                return li = !1,
                t
            }
            )
        }
        function oe(e, t) {
            var n;
            if (oi.push(function() {
                if (e)
                    try {
                        e.call(t)
                    } catch (e) {
                        te(e, t, "nextTick")
                    }
                else
                    n && n(t)
            }),
            si || (si = !0,
            li ? ii() : ri()),
            !e && "undefined" != typeof Promise)
                return new Promise(function(e) {
                    n = e
                }
                )
        }
        function se(e) {
            function t() {
                var e = arguments
                  , n = t.fns;
                if (!Array.isArray(n))
                    return n.apply(null, arguments);
                for (var r = n.slice(), i = 0; i < r.length; i++)
                    r[i].apply(null, e)
            }
            return t.fns = e,
            t
        }
        function le(e, t, n, i, a) {
            var o, s, l, u;
            for (o in e)
                s = e[o],
                l = t[o],
                u = fi(o),
                r(s) || (r(l) ? (r(s.fns) && (s = e[o] = se(s)),
                n(u.name, s, u.once, u.capture, u.passive)) : s !== l && (l.fns = s,
                e[o] = l));
            for (o in t)
                r(e[o]) && (u = fi(o),
                i(u.name, t[o], u.capture))
        }
        function ue(e, t, n) {
            function o() {
                n.apply(this, arguments),
                m(s.fns, o)
            }
            var s, l = e[t];
            r(l) ? s = se([o]) : i(l.fns) && a(l.merged) ? (s = l,
            s.fns.push(o)) : s = se([l, o]),
            s.merged = !0,
            e[t] = s
        }
        function ce(e, t, n) {
            var a = t.options.props;
            if (!r(a)) {
                var o = {}
                  , s = e.attrs
                  , l = e.props;
                if (i(s) || i(l))
                    for (var u in a) {
                        var c = wr(u);
                        pe(o, l, u, c, !0) || pe(o, s, u, c, !1)
                    }
                return o
            }
        }
        function pe(e, t, n, r, a) {
            if (i(t)) {
                if (v(t, n))
                    return e[n] = t[n],
                    a || delete t[n],
                    !0;
                if (v(t, r))
                    return e[n] = t[r],
                    a || delete t[r],
                    !0
            }
            return !1
        }
        function de(e) {
            for (var t = 0; t < e.length; t++)
                if (Array.isArray(e[t]))
                    return Array.prototype.concat.apply([], e);
            return e
        }
        function fe(e) {
            return s(e) ? [L(e)] : Array.isArray(e) ? me(e) : void 0
        }
        function he(e) {
            return i(e) && i(e.text) && o(e.isComment)
        }
        function me(e, t) {
            var n, o, l, u, c = [];
            for (n = 0; n < e.length; n++)
                o = e[n],
                r(o) || "boolean" == typeof o || (l = c.length - 1,
                u = c[l],
                Array.isArray(o) ? o.length > 0 && (o = me(o, (t || "") + "_" + n),
                he(o[0]) && he(u) && (c[l] = L(u.text + o[0].text),
                o.shift()),
                c.push.apply(c, o)) : s(o) ? he(u) ? c[l] = L(u.text + o) : "" !== o && c.push(L(o)) : he(o) && he(u) ? c[l] = L(u.text + o.text) : (a(e._isVList) && i(o.tag) && r(o.key) && i(t) && (o.key = "__vlist" + t + "_" + n + "__"),
                c.push(o)));
            return c
        }
        function ve(e, t) {
            return (e.__esModule || Xr && "Module" === e[Symbol.toStringTag]) && (e = e.default),
            l(e) ? t.extend(e) : e
        }
        function ge(e, t, n, r, i) {
            var a = Kr();
            return a.asyncFactory = e,
            a.asyncMeta = {
                data: t,
                context: n,
                children: r,
                tag: i
            },
            a
        }
        function ye(e, t, n) {
            if (a(e.error) && i(e.errorComp))
                return e.errorComp;
            if (i(e.resolved))
                return e.resolved;
            if (a(e.loading) && i(e.loadingComp))
                return e.loadingComp;
            if (!i(e.contexts)) {
                var o = e.contexts = [n]
                  , s = !0
                  , u = function() {
                    for (var e = 0, t = o.length; e < t; e++)
                        o[e].$forceUpdate()
                }
                  , c = S(function(n) {
                    e.resolved = ve(n, t),
                    s || u()
                })
                  , p = S(function(t) {
                    i(e.errorComp) && (e.error = !0,
                    u())
                })
                  , d = e(c, p);
                return l(d) && ("function" == typeof d.then ? r(e.resolved) && d.then(c, p) : i(d.component) && "function" == typeof d.component.then && (d.component.then(c, p),
                i(d.error) && (e.errorComp = ve(d.error, t)),
                i(d.loading) && (e.loadingComp = ve(d.loading, t),
                0 === d.delay ? e.loading = !0 : setTimeout(function() {
                    r(e.resolved) && r(e.error) && (e.loading = !0,
                    u())
                }, d.delay || 200)),
                i(d.timeout) && setTimeout(function() {
                    r(e.resolved) && p(null)
                }, d.timeout))),
                s = !1,
                e.loading ? e.loadingComp : e.resolved
            }
            e.contexts.push(n)
        }
        function we(e) {
            return e.isComment && e.asyncFactory
        }
        function be(e) {
            if (Array.isArray(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (i(n) && (i(n.componentOptions) || we(n)))
                        return n
                }
        }
        function xe(e) {
            e._events = Object.create(null),
            e._hasHookEvent = !1;
            var t = e.$options._parentListeners;
            t && _e(e, t)
        }
        function Ce(e, t, n) {
            n ? di.$once(e, t) : di.$on(e, t)
        }
        function Te(e, t) {
            di.$off(e, t)
        }
        function _e(e, t, n) {
            di = e,
            le(t, n || {}, Ce, Te, e)
        }
        function Se(e, t) {
            var n = {};
            if (!e)
                return n;
            for (var r = [], i = 0, a = e.length; i < a; i++) {
                var o = e[i]
                  , s = o.data;
                if (s && s.attrs && s.attrs.slot && delete s.attrs.slot,
                o.context !== t && o.functionalContext !== t || !s || null == s.slot)
                    r.push(o);
                else {
                    var l = o.data.slot
                      , u = n[l] || (n[l] = []);
                    "template" === o.tag ? u.push.apply(u, o.children) : u.push(o)
                }
            }
            return r.every(Ee) || (n.default = r),
            n
        }
        function Ee(e) {
            return e.isComment || " " === e.text
        }
        function ke(e, t) {
            t = t || {};
            for (var n = 0; n < e.length; n++)
                Array.isArray(e[n]) ? ke(e[n], t) : t[e[n].key] = e[n].fn;
            return t
        }
        function Ae(e) {
            var t = e.$options
              , n = t.parent;
            if (n && !t.abstract) {
                for (; n.$options.abstract && n.$parent; )
                    n = n.$parent;
                n.$children.push(e)
            }
            e.$parent = n,
            e.$root = n ? n.$root : e,
            e.$children = [],
            e.$refs = {},
            e._watcher = null,
            e._inactive = null,
            e._directInactive = !1,
            e._isMounted = !1,
            e._isDestroyed = !1,
            e._isBeingDestroyed = !1
        }
        function Me(e, t, n) {
            e.$el = t,
            e.$options.render || (e.$options.render = Kr),
            Ie(e, "beforeMount");
            var r;
            return r = function() {
                e._update(e._render(), n)
            }
            ,
            e._watcher = new Ci(e,r,C),
            n = !1,
            null == e.$vnode && (e._isMounted = !0,
            Ie(e, "mounted")),
            e
        }
        function ze(e, t, n, r, i) {
            var a = !!(i || e.$options._renderChildren || r.data.scopedSlots || e.$scopedSlots !== Er);
            if (e.$options._parentVnode = r,
            e.$vnode = r,
            e._vnode && (e._vnode.parent = r),
            e.$options._renderChildren = i,
            e.$attrs = r.data && r.data.attrs || Er,
            e.$listeners = n || Er,
            t && e.$options.props) {
                ei.shouldConvert = !1;
                for (var o = e._props, s = e.$options._propKeys || [], l = 0; l < s.length; l++) {
                    var u = s[l];
                    o[u] = Q(u, e.$options.props, t, e)
                }
                ei.shouldConvert = !0,
                e.$options.propsData = t
            }
            if (n) {
                var c = e.$options._parentListeners;
                e.$options._parentListeners = n,
                _e(e, n, c)
            }
            a && (e.$slots = Se(i, r.context),
            e.$forceUpdate())
        }
        function Oe(e) {
            for (; e && (e = e.$parent); )
                if (e._inactive)
                    return !0;
            return !1
        }
        function Le(e, t) {
            if (t) {
                if (e._directInactive = !1,
                Oe(e))
                    return
            } else if (e._directInactive)
                return;
            if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++)
                    Le(e.$children[n]);
                Ie(e, "activated")
            }
        }
        function Pe(e, t) {
            if (!(t && (e._directInactive = !0,
            Oe(e)) || e._inactive)) {
                e._inactive = !0;
                for (var n = 0; n < e.$children.length; n++)
                    Pe(e.$children[n]);
                Ie(e, "deactivated")
            }
        }
        function Ie(e, t) {
            var n = e.$options[t];
            if (n)
                for (var r = 0, i = n.length; r < i; r++)
                    try {
                        n[r].call(e)
                    } catch (n) {
                        te(n, e, t + " hook")
                    }
            e._hasHookEvent && e.$emit("hook:" + t)
        }
        function De() {
            bi = mi.length = vi.length = 0,
            gi = {},
            yi = wi = !1
        }
        function $e() {
            wi = !0;
            var e, t;
            for (mi.sort(function(e, t) {
                return e.id - t.id
            }),
            bi = 0; bi < mi.length; bi++)
                e = mi[bi],
                t = e.id,
                gi[t] = null,
                e.run();
            var n = vi.slice()
              , r = mi.slice();
            De(),
            Be(n),
            Re(r),
            Gr && Sr.devtools && Gr.emit("flush")
        }
        function Re(e) {
            for (var t = e.length; t--; ) {
                var n = e[t]
                  , r = n.vm;
                r._watcher === n && r._isMounted && Ie(r, "updated")
            }
        }
        function Ne(e) {
            e._inactive = !1,
            vi.push(e)
        }
        function Be(e) {
            for (var t = 0; t < e.length; t++)
                e[t]._inactive = !0,
                Le(e[t], !0)
        }
        function je(e) {
            var t = e.id;
            if (null == gi[t]) {
                if (gi[t] = !0,
                wi) {
                    for (var n = mi.length - 1; n > bi && mi[n].id > e.id; )
                        n--;
                    mi.splice(n + 1, 0, e)
                } else
                    mi.push(e);
                yi || (yi = !0,
                oe($e))
            }
        }
        function He(e) {
            Ti.clear(),
            Ge(e, Ti)
        }
        function Ge(e, t) {
            var n, r, i = Array.isArray(e);
            if ((i || l(e)) && Object.isExtensible(e)) {
                if (e.__ob__) {
                    var a = e.__ob__.dep.id;
                    if (t.has(a))
                        return;
                    t.add(a)
                }
                if (i)
                    for (n = e.length; n--; )
                        Ge(e[n], t);
                else
                    for (r = Object.keys(e),
                    n = r.length; n--; )
                        Ge(e[r[n]], t)
            }
        }
        function Xe(e, t, n) {
            _i.get = function() {
                return this[t][n]
            }
            ,
            _i.set = function(e) {
                this[t][n] = e
            }
            ,
            Object.defineProperty(e, n, _i)
        }
        function Ye(e) {
            e._watchers = [];
            var t = e.$options;
            t.props && Ve(e, t.props),
            t.methods && Qe(e, t.methods),
            t.data ? We(e) : R(e._data = {}, !0),
            t.computed && Fe(e, t.computed),
            t.watch && t.watch !== $r && Ze(e, t.watch)
        }
        function Ve(e, t) {
            var n = e.$options.propsData || {}
              , r = e._props = {}
              , i = e.$options._propKeys = []
              , a = !e.$parent;
            ei.shouldConvert = a;
            for (var o in t)
                !function(a) {
                    i.push(a);
                    var o = Q(a, t, n, e);
                    N(r, a, o),
                    a in e || Xe(e, "_props", a)
                }(o);
            ei.shouldConvert = !0
        }
        function We(e) {
            var t = e.$options.data;
            t = e._data = "function" == typeof t ? qe(t, e) : t || {},
            u(t) || (t = {});
            for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods,
            n.length); i--; ) {
                var a = n[i];
                r && v(r, a) || E(a) || Xe(e, "_data", a)
            }
            R(t, !0)
        }
        function qe(e, t) {
            try {
                return e.call(t, t)
            } catch (e) {
                return te(e, t, "data()"),
                {}
            }
        }
        function Fe(e, t) {
            var n = e._computedWatchers = Object.create(null)
              , r = Hr();
            for (var i in t) {
                var a = t[i]
                  , o = "function" == typeof a ? a : a.get;
                r || (n[i] = new Ci(e,o || C,C,Si)),
                i in e || Ue(e, i, a)
            }
        }
        function Ue(e, t, n) {
            var r = !Hr();
            "function" == typeof n ? (_i.get = r ? Ke(t) : n,
            _i.set = C) : (_i.get = n.get ? r && !1 !== n.cache ? Ke(t) : n.get : C,
            _i.set = n.set ? n.set : C),
            Object.defineProperty(e, t, _i)
        }
        function Ke(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t)
                    return t.dirty && t.evaluate(),
                    Wr.target && t.depend(),
                    t.value
            }
        }
        function Qe(e, t) {
            e.$options.props;
            for (var n in t)
                e[n] = null == t[n] ? C : y(t[n], e)
        }
        function Ze(e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++)
                        Je(e, n, r[i]);
                else
                    Je(e, n, r)
            }
        }
        function Je(e, t, n, r) {
            return u(n) && (r = n,
            n = n.handler),
            "string" == typeof n && (n = e[n]),
            e.$watch(t, n, r)
        }
        function et(e) {
            var t = e.$options.provide;
            t && (e._provided = "function" == typeof t ? t.call(e) : t)
        }
        function tt(e) {
            var t = nt(e.$options.inject, e);
            t && (ei.shouldConvert = !1,
            Object.keys(t).forEach(function(n) {
                N(e, n, t[n])
            }),
            ei.shouldConvert = !0)
        }
        function nt(e, t) {
            if (e) {
                for (var n = Object.create(null), r = Xr ? Reflect.ownKeys(e).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }) : Object.keys(e), i = 0; i < r.length; i++) {
                    for (var a = r[i], o = e[a].from, s = t; s; ) {
                        if (s._provided && o in s._provided) {
                            n[a] = s._provided[o];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s && "default"in e[a]) {
                        var l = e[a].default;
                        n[a] = "function" == typeof l ? l.call(t) : l
                    }
                }
                return n
            }
        }
        function rt(e, t) {
            var n, r, a, o, s;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length),
                r = 0,
                a = e.length; r < a; r++)
                    n[r] = t(e[r], r);
            else if ("number" == typeof e)
                for (n = new Array(e),
                r = 0; r < e; r++)
                    n[r] = t(r + 1, r);
            else if (l(e))
                for (o = Object.keys(e),
                n = new Array(o.length),
                r = 0,
                a = o.length; r < a; r++)
                    s = o[r],
                    n[r] = t(e[s], s, r);
            return i(n) && (n._isVList = !0),
            n
        }
        function it(e, t, n, r) {
            var i = this.$scopedSlots[e];
            if (i)
                return n = n || {},
                r && (n = b(b({}, r), n)),
                i(n) || t;
            var a = this.$slots[e];
            return a || t
        }
        function at(e) {
            return K(this.$options, "filters", e, !0) || xr
        }
        function ot(e, t, n, r) {
            var i = Sr.keyCodes[t] || n;
            return i ? Array.isArray(i) ? -1 === i.indexOf(e) : i !== e : r ? wr(r) !== t : void 0
        }
        function st(e, t, n, r, i) {
            if (n)
                if (l(n)) {
                    Array.isArray(n) && (n = x(n));
                    var a;
                    for (var o in n)
                        !function(o) {
                            if ("class" === o || "style" === o || fr(o))
                                a = e;
                            else {
                                var s = e.attrs && e.attrs.type;
                                a = r || Sr.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                            }
                            if (!(o in a) && (a[o] = n[o],
                            i)) {
                                (e.on || (e.on = {}))["update:" + o] = function(e) {
                                    n[o] = e
                                }
                            }
                        }(o)
                } else
                    ;return e
        }
        function lt(e, t) {
            var n = this.$options.staticRenderFns
              , r = n.cached || (n.cached = [])
              , i = r[e];
            return i && !t ? Array.isArray(i) ? I(i) : P(i) : (i = r[e] = n[e].call(this._renderProxy, null, this),
            ct(i, "__static__" + e, !1),
            i)
        }
        function ut(e, t, n) {
            return ct(e, "__once__" + t + (n ? "_" + n : ""), !0),
            e
        }
        function ct(e, t, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; r++)
                    e[r] && "string" != typeof e[r] && pt(e[r], t + "_" + r, n);
            else
                pt(e, t, n)
        }
        function pt(e, t, n) {
            e.isStatic = !0,
            e.key = t,
            e.isOnce = n
        }
        function dt(e, t) {
            if (t)
                if (u(t)) {
                    var n = e.on = e.on ? b({}, e.on) : {};
                    for (var r in t) {
                        var i = n[r]
                          , a = t[r];
                        n[r] = i ? [].concat(i, a) : a
                    }
                } else
                    ;return e
        }
        function ft(e) {
            e._o = ut,
            e._n = f,
            e._s = d,
            e._l = rt,
            e._t = it,
            e._q = T,
            e._i = _,
            e._m = lt,
            e._f = at,
            e._k = ot,
            e._b = st,
            e._v = L,
            e._e = Kr,
            e._u = ke,
            e._g = dt
        }
        function ht(e, t, n, r, i) {
            var o = i.options;
            this.data = e,
            this.props = t,
            this.children = n,
            this.parent = r,
            this.listeners = e.on || Er,
            this.injections = nt(o.inject, r),
            this.slots = function() {
                return Se(n, r)
            }
            ;
            var s = Object.create(r)
              , l = a(o._compiled)
              , u = !l;
            l && (this.$options = o,
            this.$slots = this.slots(),
            this.$scopedSlots = e.scopedSlots || Er),
            o._scopeId ? this._c = function(e, t, n, i) {
                var a = Ct(s, e, t, n, i, u);
                return a && (a.functionalScopeId = o._scopeId,
                a.functionalContext = r),
                a
            }
            : this._c = function(e, t, n, r) {
                return Ct(s, e, t, n, r, u)
            }
        }
        function mt(e, t, n, r, a) {
            var o = e.options
              , s = {}
              , l = o.props;
            if (i(l))
                for (var u in l)
                    s[u] = Q(u, l, t || Er);
            else
                i(n.attrs) && vt(s, n.attrs),
                i(n.props) && vt(s, n.props);
            var c = new ht(n,s,a,r,e)
              , p = o.render.call(null, c._c, c);
            return p instanceof Fr && (p.functionalContext = r,
            p.functionalOptions = o,
            n.slot && ((p.data || (p.data = {})).slot = n.slot)),
            p
        }
        function vt(e, t) {
            for (var n in t)
                e[vr(n)] = t[n]
        }
        function gt(e, t, n, o, s) {
            if (!r(e)) {
                var u = n.$options._base;
                if (l(e) && (e = u.extend(e)),
                "function" == typeof e) {
                    var c;
                    if (r(e.cid) && (c = e,
                    void 0 === (e = ye(c, u, n))))
                        return ge(c, t, n, o, s);
                    t = t || {},
                    kt(e),
                    i(t.model) && xt(e.options, t);
                    var p = ce(t, e, s);
                    if (a(e.options.functional))
                        return mt(e, p, t, n, o);
                    var d = t.on;
                    if (t.on = t.nativeOn,
                    a(e.options.abstract)) {
                        var f = t.slot;
                        t = {},
                        f && (t.slot = f)
                    }
                    wt(t);
                    var h = e.options.name || s;
                    return new Fr("vue-component-" + e.cid + (h ? "-" + h : ""),t,void 0,void 0,void 0,n,{
                        Ctor: e,
                        propsData: p,
                        listeners: d,
                        tag: s,
                        children: o
                    },c)
                }
            }
        }
        function yt(e, t, n, r) {
            var a = e.componentOptions
              , o = {
                _isComponent: !0,
                parent: t,
                propsData: a.propsData,
                _componentTag: a.tag,
                _parentVnode: e,
                _parentListeners: a.listeners,
                _renderChildren: a.children,
                _parentElm: n || null,
                _refElm: r || null
            }
              , s = e.data.inlineTemplate;
            return i(s) && (o.render = s.render,
            o.staticRenderFns = s.staticRenderFns),
            new a.Ctor(o)
        }
        function wt(e) {
            e.hook || (e.hook = {});
            for (var t = 0; t < ki.length; t++) {
                var n = ki[t]
                  , r = e.hook[n]
                  , i = Ei[n];
                e.hook[n] = r ? bt(i, r) : i
            }
        }
        function bt(e, t) {
            return function(n, r, i, a) {
                e(n, r, i, a),
                t(n, r, i, a)
            }
        }
        function xt(e, t) {
            var n = e.model && e.model.prop || "value"
              , r = e.model && e.model.event || "input";
            (t.props || (t.props = {}))[n] = t.model.value;
            var a = t.on || (t.on = {});
            i(a[r]) ? a[r] = [t.model.callback].concat(a[r]) : a[r] = t.model.callback
        }
        function Ct(e, t, n, r, i, o) {
            return (Array.isArray(n) || s(n)) && (i = r,
            r = n,
            n = void 0),
            a(o) && (i = Mi),
            Tt(e, t, n, r, i)
        }
        function Tt(e, t, n, r, a) {
            if (i(n) && i(n.__ob__))
                return Kr();
            if (i(n) && i(n.is) && (t = n.is),
            !t)
                return Kr();
            Array.isArray(r) && "function" == typeof r[0] && (n = n || {},
            n.scopedSlots = {
                default: r[0]
            },
            r.length = 0),
            a === Mi ? r = fe(r) : a === Ai && (r = de(r));
            var o, s;
            if ("string" == typeof t) {
                var l;
                s = e.$vnode && e.$vnode.ns || Sr.getTagNamespace(t),
                o = Sr.isReservedTag(t) ? new Fr(Sr.parsePlatformTagName(t),n,r,void 0,void 0,e) : i(l = K(e.$options, "components", t)) ? gt(l, n, e, r, t) : new Fr(t,n,r,void 0,void 0,e)
            } else
                o = gt(t, n, e, r);
            return i(o) ? (s && _t(o, s),
            o) : Kr()
        }
        function _t(e, t, n) {
            if (e.ns = t,
            "foreignObject" === e.tag && (t = void 0,
            n = !0),
            i(e.children))
                for (var o = 0, s = e.children.length; o < s; o++) {
                    var l = e.children[o];
                    i(l.tag) && (r(l.ns) || a(n)) && _t(l, t, n)
                }
        }
        function St(e) {
            e._vnode = null;
            var t = e.$options
              , n = e.$vnode = t._parentVnode
              , r = n && n.context;
            e.$slots = Se(t._renderChildren, r),
            e.$scopedSlots = Er,
            e._c = function(t, n, r, i) {
                return Ct(e, t, n, r, i, !1)
            }
            ,
            e.$createElement = function(t, n, r, i) {
                return Ct(e, t, n, r, i, !0)
            }
            ;
            var i = n && n.data;
            N(e, "$attrs", i && i.attrs || Er, null, !0),
            N(e, "$listeners", t._parentListeners || Er, null, !0)
        }
        function Et(e, t) {
            var n = e.$options = Object.create(e.constructor.options);
            n.parent = t.parent,
            n.propsData = t.propsData,
            n._parentVnode = t._parentVnode,
            n._parentListeners = t._parentListeners,
            n._renderChildren = t._renderChildren,
            n._componentTag = t._componentTag,
            n._parentElm = t._parentElm,
            n._refElm = t._refElm,
            t.render && (n.render = t.render,
            n.staticRenderFns = t.staticRenderFns)
        }
        function kt(e) {
            var t = e.options;
            if (e.super) {
                var n = kt(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = At(e);
                    r && b(e.extendOptions, r),
                    t = e.options = U(n, e.extendOptions),
                    t.name && (t.components[t.name] = e)
                }
            }
            return t
        }
        function At(e) {
            var t, n = e.options, r = e.extendOptions, i = e.sealedOptions;
            for (var a in n)
                n[a] !== i[a] && (t || (t = {}),
                t[a] = Mt(n[a], r[a], i[a]));
            return t
        }
        function Mt(e, t, n) {
            if (Array.isArray(e)) {
                var r = [];
                n = Array.isArray(n) ? n : [n],
                t = Array.isArray(t) ? t : [t];
                for (var i = 0; i < e.length; i++)
                    (t.indexOf(e[i]) >= 0 || n.indexOf(e[i]) < 0) && r.push(e[i]);
                return r
            }
            return e
        }
        function zt(e) {
            this._init(e)
        }
        function Ot(e) {
            e.use = function(e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1)
                    return this;
                var n = w(arguments, 1);
                return n.unshift(this),
                "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n),
                t.push(e),
                this
            }
        }
        function Lt(e) {
            e.mixin = function(e) {
                return this.options = U(this.options, e),
                this
            }
        }
        function Pt(e) {
            e.cid = 0;
            var t = 1;
            e.extend = function(e) {
                e = e || {};
                var n = this
                  , r = n.cid
                  , i = e._Ctor || (e._Ctor = {});
                if (i[r])
                    return i[r];
                var a = e.name || n.options.name
                  , o = function(e) {
                    this._init(e)
                };
                return o.prototype = Object.create(n.prototype),
                o.prototype.constructor = o,
                o.cid = t++,
                o.options = U(n.options, e),
                o.super = n,
                o.options.props && It(o),
                o.options.computed && Dt(o),
                o.extend = n.extend,
                o.mixin = n.mixin,
                o.use = n.use,
                Tr.forEach(function(e) {
                    o[e] = n[e]
                }),
                a && (o.options.components[a] = o),
                o.superOptions = n.options,
                o.extendOptions = e,
                o.sealedOptions = b({}, o.options),
                i[r] = o,
                o
            }
        }
        function It(e) {
            var t = e.options.props;
            for (var n in t)
                Xe(e.prototype, "_props", n)
        }
        function Dt(e) {
            var t = e.options.computed;
            for (var n in t)
                Ue(e.prototype, n, t[n])
        }
        function $t(e) {
            Tr.forEach(function(t) {
                e[t] = function(e, n) {
                    return n ? ("component" === t && u(n) && (n.name = n.name || e,
                    n = this.options._base.extend(n)),
                    "directive" === t && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }),
                    this.options[t + "s"][e] = n,
                    n) : this.options[t + "s"][e]
                }
            })
        }
        function Rt(e) {
            return e && (e.Ctor.options.name || e.tag)
        }
        function Nt(e, t) {
            return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!c(e) && e.test(t)
        }
        function Bt(e, t) {
            var n = e.cache
              , r = e.keys
              , i = e._vnode;
            for (var a in n) {
                var o = n[a];
                if (o) {
                    var s = Rt(o.componentOptions);
                    s && !t(s) && jt(n, a, r, i)
                }
            }
        }
        function jt(e, t, n, r) {
            var i = e[t];
            i && i !== r && i.componentInstance.$destroy(),
            e[t] = null,
            m(n, t)
        }
        function Ht(e) {
            for (var t = e.data, n = e, r = e; i(r.componentInstance); )
                r = r.componentInstance._vnode,
                r.data && (t = Gt(r.data, t));
            for (; i(n = n.parent); )
                n.data && (t = Gt(t, n.data));
            return Xt(t.staticClass, t.class)
        }
        function Gt(e, t) {
            return {
                staticClass: Yt(e.staticClass, t.staticClass),
                class: i(e.class) ? [e.class, t.class] : t.class
            }
        }
        function Xt(e, t) {
            return i(e) || i(t) ? Yt(e, Vt(t)) : ""
        }
        function Yt(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }
        function Vt(e) {
            return Array.isArray(e) ? Wt(e) : l(e) ? qt(e) : "string" == typeof e ? e : ""
        }
        function Wt(e) {
            for (var t, n = "", r = 0, a = e.length; r < a; r++)
                i(t = Vt(e[r])) && "" !== t && (n && (n += " "),
                n += t);
            return n
        }
        function qt(e) {
            var t = "";
            for (var n in e)
                e[n] && (t && (t += " "),
                t += n);
            return t
        }
        function Ft(e) {
            return qi(e) ? "svg" : "math" === e ? "math" : void 0
        }
        function Ut(e) {
            if (!Mr)
                return !0;
            if (Fi(e))
                return !1;
            if (e = e.toLowerCase(),
            null != Ui[e])
                return Ui[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? Ui[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Ui[e] = /HTMLUnknownElement/.test(t.toString())
        }
        function Kt(e) {
            if ("string" == typeof e) {
                var t = document.querySelector(e);
                return t || document.createElement("div")
            }
            return e
        }
        function Qt(e, t) {
            var n = document.createElement(e);
            return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"),
            n)
        }
        function Zt(e, t) {
            return document.createElementNS(Vi[e], t)
        }
        function Jt(e) {
            return document.createTextNode(e)
        }
        function en(e) {
            return document.createComment(e)
        }
        function tn(e, t, n) {
            e.insertBefore(t, n)
        }
        function nn(e, t) {
            e.removeChild(t)
        }
        function rn(e, t) {
            e.appendChild(t)
        }
        function an(e) {
            return e.parentNode
        }
        function on(e) {
            return e.nextSibling
        }
        function sn(e) {
            return e.tagName
        }
        function ln(e, t) {
            e.textContent = t
        }
        function un(e, t, n) {
            e.setAttribute(t, n)
        }
        function cn(e, t) {
            var n = e.data.ref;
            if (n) {
                var r = e.context
                  , i = e.componentInstance || e.elm
                  , a = r.$refs;
                t ? Array.isArray(a[n]) ? m(a[n], i) : a[n] === i && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i
            }
        }
        function pn(e, t) {
            return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && dn(e, t) || a(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error))
        }
        function dn(e, t) {
            if ("input" !== e.tag)
                return !0;
            var n, r = i(n = e.data) && i(n = n.attrs) && n.type, a = i(n = t.data) && i(n = n.attrs) && n.type;
            return r === a || Ki(r) && Ki(a)
        }
        function fn(e, t, n) {
            var r, a, o = {};
            for (r = t; r <= n; ++r)
                a = e[r].key,
                i(a) && (o[a] = r);
            return o
        }
        function hn(e, t) {
            (e.data.directives || t.data.directives) && mn(e, t)
        }
        function mn(e, t) {
            var n, r, i, a = e === Ji, o = t === Ji, s = vn(e.data.directives, e.context), l = vn(t.data.directives, t.context), u = [], c = [];
            for (n in l)
                r = s[n],
                i = l[n],
                r ? (i.oldValue = r.value,
                yn(i, "update", t, e),
                i.def && i.def.componentUpdated && c.push(i)) : (yn(i, "bind", t, e),
                i.def && i.def.inserted && u.push(i));
            if (u.length) {
                var p = function() {
                    for (var n = 0; n < u.length; n++)
                        yn(u[n], "inserted", t, e)
                };
                a ? ue(t.data.hook || (t.data.hook = {}), "insert", p) : p()
            }
            if (c.length && ue(t.data.hook || (t.data.hook = {}), "postpatch", function() {
                for (var n = 0; n < c.length; n++)
                    yn(c[n], "componentUpdated", t, e)
            }),
            !a)
                for (n in s)
                    l[n] || yn(s[n], "unbind", e, e, o)
        }
        function vn(e, t) {
            var n = Object.create(null);
            if (!e)
                return n;
            var r, i;
            for (r = 0; r < e.length; r++)
                i = e[r],
                i.modifiers || (i.modifiers = na),
                n[gn(i)] = i,
                i.def = K(t.$options, "directives", i.name, !0);
            return n
        }
        function gn(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }
        function yn(e, t, n, r, i) {
            var a = e.def && e.def[t];
            if (a)
                try {
                    a(n.elm, e, n, r, i)
                } catch (r) {
                    te(r, n.context, "directive " + e.name + " " + t + " hook")
                }
        }
        function wn(e, t) {
            var n = t.componentOptions;
            if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || r(e.data.attrs) && r(t.data.attrs))) {
                var a, o, s = t.elm, l = e.data.attrs || {}, u = t.data.attrs || {};
                i(u.__ob__) && (u = t.data.attrs = b({}, u));
                for (a in u)
                    o = u[a],
                    l[a] !== o && bn(s, a, o);
                (Lr || Pr) && u.value !== l.value && bn(s, "value", u.value);
                for (a in l)
                    r(u[a]) && (Gi(a) ? s.removeAttributeNS(Hi, Xi(a)) : Bi(a) || s.removeAttribute(a))
            }
        }
        function bn(e, t, n) {
            ji(t) ? Yi(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t,
            e.setAttribute(t, n)) : Bi(t) ? e.setAttribute(t, Yi(n) || "false" === n ? "false" : "true") : Gi(t) ? Yi(n) ? e.removeAttributeNS(Hi, Xi(t)) : e.setAttributeNS(Hi, t, n) : Yi(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
        }
        function xn(e, t) {
            var n = t.elm
              , a = t.data
              , o = e.data;
            if (!(r(a.staticClass) && r(a.class) && (r(o) || r(o.staticClass) && r(o.class)))) {
                var s = Ht(t)
                  , l = n._transitionClasses;
                i(l) && (s = Yt(s, Vt(l))),
                s !== n._prevClass && (n.setAttribute("class", s),
                n._prevClass = s)
            }
        }
        function Cn(e) {
            if (i(e[oa])) {
                var t = Or ? "change" : "input";
                e[t] = [].concat(e[oa], e[t] || []),
                delete e[oa]
            }
            i(e[sa]) && (e.change = [].concat(e[sa], e.change || []),
            delete e[sa])
        }
        function Tn(e, t, n) {
            var r = Ii;
            return function i() {
                null !== e.apply(null, arguments) && Sn(t, i, n, r)
            }
        }
        function _n(e, t, n, r, i) {
            t = ae(t),
            n && (t = Tn(t, e, r)),
            Ii.addEventListener(e, t, Rr ? {
                capture: r,
                passive: i
            } : r)
        }
        function Sn(e, t, n, r) {
            (r || Ii).removeEventListener(e, t._withTask || t, n)
        }
        function En(e, t) {
            if (!r(e.data.on) || !r(t.data.on)) {
                var n = t.data.on || {}
                  , i = e.data.on || {};
                Ii = t.elm,
                Cn(n),
                le(n, i, _n, Sn, t.context)
            }
        }
        function kn(e, t) {
            if (!r(e.data.domProps) || !r(t.data.domProps)) {
                var n, a, o = t.elm, s = e.data.domProps || {}, l = t.data.domProps || {};
                i(l.__ob__) && (l = t.data.domProps = b({}, l));
                for (n in s)
                    r(l[n]) && (o[n] = "");
                for (n in l) {
                    if (a = l[n],
                    "textContent" === n || "innerHTML" === n) {
                        if (t.children && (t.children.length = 0),
                        a === s[n])
                            continue;
                        1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                    }
                    if ("value" === n) {
                        o._value = a;
                        var u = r(a) ? "" : String(a);
                        An(o, u) && (o.value = u)
                    } else
                        o[n] = a
                }
            }
        }
        function An(e, t) {
            return !e.composing && ("OPTION" === e.tagName || Mn(e, t) || zn(e, t))
        }
        function Mn(e, t) {
            var n = !0;
            try {
                n = document.activeElement !== e
            } catch (e) {}
            return n && e.value !== t
        }
        function zn(e, t) {
            var n = e.value
              , r = e._vModifiers;
            return i(r) && r.number ? f(n) !== f(t) : i(r) && r.trim ? n.trim() !== t.trim() : n !== t
        }
        function On(e) {
            var t = Ln(e.style);
            return e.staticStyle ? b(e.staticStyle, t) : t
        }
        function Ln(e) {
            return Array.isArray(e) ? x(e) : "string" == typeof e ? ca(e) : e
        }
        function Pn(e, t) {
            var n, r = {};
            if (t)
                for (var i = e; i.componentInstance; )
                    i = i.componentInstance._vnode,
                    i.data && (n = On(i.data)) && b(r, n);
            (n = On(e.data)) && b(r, n);
            for (var a = e; a = a.parent; )
                a.data && (n = On(a.data)) && b(r, n);
            return r
        }
        function In(e, t) {
            var n = t.data
              , a = e.data;
            if (!(r(n.staticStyle) && r(n.style) && r(a.staticStyle) && r(a.style))) {
                var o, s, l = t.elm, u = a.staticStyle, c = a.normalizedStyle || a.style || {}, p = u || c, d = Ln(t.data.style) || {};
                t.data.normalizedStyle = i(d.__ob__) ? b({}, d) : d;
                var f = Pn(t, !0);
                for (s in p)
                    r(f[s]) && fa(l, s, "");
                for (s in f)
                    (o = f[s]) !== p[s] && fa(l, s, null == o ? "" : o)
            }
        }
        function Dn(e, t) {
            if (t && (t = t.trim()))
                if (e.classList)
                    t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                        return e.classList.add(t)
                    }) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }
        function $n(e, t) {
            if (t && (t = t.trim()))
                if (e.classList)
                    t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
                        return e.classList.remove(t)
                    }) : e.classList.remove(t),
                    e.classList.length || e.removeAttribute("class");
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0; )
                        n = n.replace(r, " ");
                    n = n.trim(),
                    n ? e.setAttribute("class", n) : e.removeAttribute("class")
                }
        }
        function Rn(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return !1 !== e.css && b(t, ga(e.name || "v")),
                    b(t, e),
                    t
                }
                return "string" == typeof e ? ga(e) : void 0
            }
        }
        function Nn(e) {
            Sa(function() {
                Sa(e)
            })
        }
        function Bn(e, t) {
            var n = e._transitionClasses || (e._transitionClasses = []);
            n.indexOf(t) < 0 && (n.push(t),
            Dn(e, t))
        }
        function jn(e, t) {
            e._transitionClasses && m(e._transitionClasses, t),
            $n(e, t)
        }
        function Hn(e, t, n) {
            var r = Gn(e, t)
              , i = r.type
              , a = r.timeout
              , o = r.propCount;
            if (!i)
                return n();
            var s = i === wa ? Ca : _a
              , l = 0
              , u = function() {
                e.removeEventListener(s, c),
                n()
            }
              , c = function(t) {
                t.target === e && ++l >= o && u()
            };
            setTimeout(function() {
                l < o && u()
            }, a + 1),
            e.addEventListener(s, c)
        }
        function Gn(e, t) {
            var n, r = window.getComputedStyle(e), i = r[xa + "Delay"].split(", "), a = r[xa + "Duration"].split(", "), o = Xn(i, a), s = r[Ta + "Delay"].split(", "), l = r[Ta + "Duration"].split(", "), u = Xn(s, l), c = 0, p = 0;
            return t === wa ? o > 0 && (n = wa,
            c = o,
            p = a.length) : t === ba ? u > 0 && (n = ba,
            c = u,
            p = l.length) : (c = Math.max(o, u),
            n = c > 0 ? o > u ? wa : ba : null,
            p = n ? n === wa ? a.length : l.length : 0),
            {
                type: n,
                timeout: c,
                propCount: p,
                hasTransform: n === wa && Ea.test(r[xa + "Property"])
            }
        }
        function Xn(e, t) {
            for (; e.length < t.length; )
                e = e.concat(e);
            return Math.max.apply(null, t.map(function(t, n) {
                return Yn(t) + Yn(e[n])
            }))
        }
        function Yn(e) {
            return 1e3 * Number(e.slice(0, -1))
        }
        function Vn(e, t) {
            var n = e.elm;
            i(n._leaveCb) && (n._leaveCb.cancelled = !0,
            n._leaveCb());
            var a = Rn(e.data.transition);
            if (!r(a) && !i(n._enterCb) && 1 === n.nodeType) {
                for (var o = a.css, s = a.type, u = a.enterClass, c = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, h = a.appearToClass, m = a.appearActiveClass, v = a.beforeEnter, g = a.enter, y = a.afterEnter, w = a.enterCancelled, b = a.beforeAppear, x = a.appear, C = a.afterAppear, T = a.appearCancelled, _ = a.duration, E = hi, k = hi.$vnode; k && k.parent; )
                    k = k.parent,
                    E = k.context;
                var A = !E._isMounted || !e.isRootInsert;
                if (!A || x || "" === x) {
                    var M = A && d ? d : u
                      , z = A && m ? m : p
                      , O = A && h ? h : c
                      , L = A ? b || v : v
                      , P = A && "function" == typeof x ? x : g
                      , I = A ? C || y : y
                      , D = A ? T || w : w
                      , $ = f(l(_) ? _.enter : _)
                      , R = !1 !== o && !Lr
                      , N = Fn(P)
                      , B = n._enterCb = S(function() {
                        R && (jn(n, O),
                        jn(n, z)),
                        B.cancelled ? (R && jn(n, M),
                        D && D(n)) : I && I(n),
                        n._enterCb = null
                    });
                    e.data.show || ue(e.data.hook || (e.data.hook = {}), "insert", function() {
                        var t = n.parentNode
                          , r = t && t._pending && t._pending[e.key];
                        r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(),
                        P && P(n, B)
                    }),
                    L && L(n),
                    R && (Bn(n, M),
                    Bn(n, z),
                    Nn(function() {
                        Bn(n, O),
                        jn(n, M),
                        B.cancelled || N || (qn($) ? setTimeout(B, $) : Hn(n, s, B))
                    })),
                    e.data.show && (t && t(),
                    P && P(n, B)),
                    R || N || B()
                }
            }
        }
        function Wn(e, t) {
            function n() {
                T.cancelled || (e.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[e.key] = e),
                h && h(a),
                b && (Bn(a, c),
                Bn(a, d),
                Nn(function() {
                    Bn(a, p),
                    jn(a, c),
                    T.cancelled || x || (qn(C) ? setTimeout(T, C) : Hn(a, u, T))
                })),
                m && m(a, T),
                b || x || T())
            }
            var a = e.elm;
            i(a._enterCb) && (a._enterCb.cancelled = !0,
            a._enterCb());
            var o = Rn(e.data.transition);
            if (r(o))
                return t();
            if (!i(a._leaveCb) && 1 === a.nodeType) {
                var s = o.css
                  , u = o.type
                  , c = o.leaveClass
                  , p = o.leaveToClass
                  , d = o.leaveActiveClass
                  , h = o.beforeLeave
                  , m = o.leave
                  , v = o.afterLeave
                  , g = o.leaveCancelled
                  , y = o.delayLeave
                  , w = o.duration
                  , b = !1 !== s && !Lr
                  , x = Fn(m)
                  , C = f(l(w) ? w.leave : w)
                  , T = a._leaveCb = S(function() {
                    a.parentNode && a.parentNode._pending && (a.parentNode._pending[e.key] = null),
                    b && (jn(a, p),
                    jn(a, d)),
                    T.cancelled ? (b && jn(a, c),
                    g && g(a)) : (t(),
                    v && v(a)),
                    a._leaveCb = null
                });
                y ? y(n) : n()
            }
        }
        function qn(e) {
            return "number" == typeof e && !isNaN(e)
        }
        function Fn(e) {
            if (r(e))
                return !1;
            var t = e.fns;
            return i(t) ? Fn(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
        }
        function Un(e, t) {
            !0 !== t.data.show && Vn(t)
        }
        function Kn(e, t, n) {
            Qn(e, t, n),
            (Or || Pr) && setTimeout(function() {
                Qn(e, t, n)
            }, 0)
        }
        function Qn(e, t, n) {
            var r = t.value
              , i = e.multiple;
            if (!i || Array.isArray(r)) {
                for (var a, o, s = 0, l = e.options.length; s < l; s++)
                    if (o = e.options[s],
                    i)
                        a = _(r, Jn(o)) > -1,
                        o.selected !== a && (o.selected = a);
                    else if (T(Jn(o), r))
                        return void (e.selectedIndex !== s && (e.selectedIndex = s));
                i || (e.selectedIndex = -1)
            }
        }
        function Zn(e, t) {
            return t.every(function(t) {
                return !T(t, e)
            })
        }
        function Jn(e) {
            return "_value"in e ? e._value : e.value
        }
        function er(e) {
            e.target.composing = !0
        }
        function tr(e) {
            e.target.composing && (e.target.composing = !1,
            nr(e.target, "input"))
        }
        function nr(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0),
            e.dispatchEvent(n)
        }
        function rr(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : rr(e.componentInstance._vnode)
        }
        function ir(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? ir(be(t.children)) : e
        }
        function ar(e) {
            var t = {}
              , n = e.$options;
            for (var r in n.propsData)
                t[r] = e[r];
            var i = n._parentListeners;
            for (var a in i)
                t[vr(a)] = i[a];
            return t
        }
        function or(e, t) {
            if (/\d-keep-alive$/.test(t.tag))
                return e("keep-alive", {
                    props: t.componentOptions.propsData
                })
        }
        function sr(e) {
            for (; e = e.parent; )
                if (e.data.transition)
                    return !0
        }
        function lr(e, t) {
            return t.key === e.key && t.tag === e.tag
        }
        function ur(e) {
            e.elm._moveCb && e.elm._moveCb(),
            e.elm._enterCb && e.elm._enterCb()
        }
        function cr(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }
        function pr(e) {
            var t = e.data.pos
              , n = e.data.newPos
              , r = t.left - n.left
              , i = t.top - n.top;
            if (r || i) {
                e.data.moved = !0;
                var a = e.elm.style;
                a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)",
                a.transitionDuration = "0s"
            }
        }
        var dr = Object.prototype.toString
          , fr = (h("slot,component", !0),
        h("key,ref,slot,slot-scope,is"))
          , hr = Object.prototype.hasOwnProperty
          , mr = /-(\w)/g
          , vr = g(function(e) {
            return e.replace(mr, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        })
          , gr = g(function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        })
          , yr = /\B([A-Z])/g
          , wr = g(function(e) {
            return e.replace(yr, "-$1").toLowerCase()
        })
          , br = function(e, t, n) {
            return !1
        }
          , xr = function(e) {
            return e
        }
          , Cr = "data-server-rendered"
          , Tr = ["component", "directive", "filter"]
          , _r = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"]
          , Sr = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: br,
            isReservedAttr: br,
            isUnknownElement: br,
            getTagNamespace: C,
            parsePlatformTagName: xr,
            mustUseProp: br,
            _lifecycleHooks: _r
        }
          , Er = Object.freeze({})
          , kr = /[^\w.$]/
          , Ar = "__proto__"in {}
          , Mr = "undefined" != typeof window
          , zr = Mr && window.navigator.userAgent.toLowerCase()
          , Or = zr && /msie|trident/.test(zr)
          , Lr = zr && zr.indexOf("msie 9.0") > 0
          , Pr = zr && zr.indexOf("edge/") > 0
          , Ir = zr && zr.indexOf("android") > 0
          , Dr = zr && /iphone|ipad|ipod|ios/.test(zr)
          , $r = (zr && /chrome\/\d+/.test(zr),
        {}.watch)
          , Rr = !1;
        if (Mr)
            try {
                var Nr = {};
                Object.defineProperty(Nr, "passive", {
                    get: function() {
                        Rr = !0
                    }
                }),
                window.addEventListener("test-passive", null, Nr)
            } catch (e) {}
        var Br, jr, Hr = function() {
            return void 0 === Br && (Br = !Mr && void 0 !== e && "server" === e.process.env.VUE_ENV),
            Br
        }, Gr = Mr && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Xr = "undefined" != typeof Symbol && M(Symbol) && "undefined" != typeof Reflect && M(Reflect.ownKeys);
        jr = "undefined" != typeof Set && M(Set) ? Set : function() {
            function e() {
                this.set = Object.create(null)
            }
            return e.prototype.has = function(e) {
                return !0 === this.set[e]
            }
            ,
            e.prototype.add = function(e) {
                this.set[e] = !0
            }
            ,
            e.prototype.clear = function() {
                this.set = Object.create(null)
            }
            ,
            e
        }();
        var Yr = C
          , Vr = 0
          , Wr = function() {
            this.id = Vr++,
            this.subs = []
        };
        Wr.prototype.addSub = function(e) {
            this.subs.push(e)
        }
        ,
        Wr.prototype.removeSub = function(e) {
            m(this.subs, e)
        }
        ,
        Wr.prototype.depend = function() {
            Wr.target && Wr.target.addDep(this)
        }
        ,
        Wr.prototype.notify = function() {
            for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++)
                e[t].update()
        }
        ,
        Wr.target = null;
        var qr = []
          , Fr = function(e, t, n, r, i, a, o, s) {
            this.tag = e,
            this.data = t,
            this.children = n,
            this.text = r,
            this.elm = i,
            this.ns = void 0,
            this.context = a,
            this.functionalContext = void 0,
            this.functionalOptions = void 0,
            this.functionalScopeId = void 0,
            this.key = t && t.key,
            this.componentOptions = o,
            this.componentInstance = void 0,
            this.parent = void 0,
            this.raw = !1,
            this.isStatic = !1,
            this.isRootInsert = !0,
            this.isComment = !1,
            this.isCloned = !1,
            this.isOnce = !1,
            this.asyncFactory = s,
            this.asyncMeta = void 0,
            this.isAsyncPlaceholder = !1
        }
          , Ur = {
            child: {
                configurable: !0
            }
        };
        Ur.child.get = function() {
            return this.componentInstance
        }
        ,
        Object.defineProperties(Fr.prototype, Ur);
        var Kr = function(e) {
            void 0 === e && (e = "");
            var t = new Fr;
            return t.text = e,
            t.isComment = !0,
            t
        }
          , Qr = Array.prototype
          , Zr = Object.create(Qr);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
            var t = Qr[e];
            k(Zr, e, function() {
                for (var n = [], r = arguments.length; r--; )
                    n[r] = arguments[r];
                var i, a = t.apply(this, n), o = this.__ob__;
                switch (e) {
                case "push":
                case "unshift":
                    i = n;
                    break;
                case "splice":
                    i = n.slice(2)
                }
                return i && o.observeArray(i),
                o.dep.notify(),
                a
            })
        });
        var Jr = Object.getOwnPropertyNames(Zr)
          , ei = {
            shouldConvert: !0
        }
          , ti = function(e) {
            if (this.value = e,
            this.dep = new Wr,
            this.vmCount = 0,
            k(e, "__ob__", this),
            Array.isArray(e)) {
                (Ar ? D : $)(e, Zr, Jr),
                this.observeArray(e)
            } else
                this.walk(e)
        };
        ti.prototype.walk = function(e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++)
                N(e, t[n], e[t[n]])
        }
        ,
        ti.prototype.observeArray = function(e) {
            for (var t = 0, n = e.length; t < n; t++)
                R(e[t])
        }
        ;
        var ni = Sr.optionMergeStrategies;
        ni.data = function(e, t, n) {
            return n ? X(e, t, n) : t && "function" != typeof t ? e : X.call(this, e, t)
        }
        ,
        _r.forEach(function(e) {
            ni[e] = Y
        }),
        Tr.forEach(function(e) {
            ni[e + "s"] = V
        }),
        ni.watch = function(e, t, n, r) {
            if (e === $r && (e = void 0),
            t === $r && (t = void 0),
            !t)
                return Object.create(e || null);
            if (!e)
                return t;
            var i = {};
            b(i, e);
            for (var a in t) {
                var o = i[a]
                  , s = t[a];
                o && !Array.isArray(o) && (o = [o]),
                i[a] = o ? o.concat(s) : Array.isArray(s) ? s : [s]
            }
            return i
        }
        ,
        ni.props = ni.methods = ni.inject = ni.computed = function(e, t, n, r) {
            if (!e)
                return t;
            var i = Object.create(null);
            return b(i, e),
            t && b(i, t),
            i
        }
        ,
        ni.provide = X;
        var ri, ii, ai = function(e, t) {
            return void 0 === t ? e : t
        }, oi = [], si = !1, li = !1;
        if (void 0 !== n && M(n))
            ii = function() {
                n(ie)
            }
            ;
        else if ("undefined" == typeof MessageChannel || !M(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString())
            ii = function() {
                setTimeout(ie, 0)
            }
            ;
        else {
            var ui = new MessageChannel
              , ci = ui.port2;
            ui.port1.onmessage = ie,
            ii = function() {
                ci.postMessage(1)
            }
        }
        if ("undefined" != typeof Promise && M(Promise)) {
            var pi = Promise.resolve();
            ri = function() {
                pi.then(ie),
                Dr && setTimeout(C)
            }
        } else
            ri = ii;
        var di, fi = g(function(e) {
            var t = "&" === e.charAt(0);
            e = t ? e.slice(1) : e;
            var n = "~" === e.charAt(0);
            e = n ? e.slice(1) : e;
            var r = "!" === e.charAt(0);
            return e = r ? e.slice(1) : e,
            {
                name: e,
                once: n,
                capture: r,
                passive: t
            }
        }), hi = null, mi = [], vi = [], gi = {}, yi = !1, wi = !1, bi = 0, xi = 0, Ci = function(e, t, n, r) {
            this.vm = e,
            e._watchers.push(this),
            r ? (this.deep = !!r.deep,
            this.user = !!r.user,
            this.lazy = !!r.lazy,
            this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1,
            this.cb = n,
            this.id = ++xi,
            this.active = !0,
            this.dirty = this.lazy,
            this.deps = [],
            this.newDeps = [],
            this.depIds = new jr,
            this.newDepIds = new jr,
            this.expression = "",
            "function" == typeof t ? this.getter = t : (this.getter = A(t),
            this.getter || (this.getter = function() {}
            )),
            this.value = this.lazy ? void 0 : this.get()
        };
        Ci.prototype.get = function() {
            z(this);
            var e, t = this.vm;
            try {
                e = this.getter.call(t, t)
            } catch (e) {
                if (!this.user)
                    throw e;
                te(e, t, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && He(e),
                O(),
                this.cleanupDeps()
            }
            return e
        }
        ,
        Ci.prototype.addDep = function(e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t),
            this.newDeps.push(e),
            this.depIds.has(t) || e.addSub(this))
        }
        ,
        Ci.prototype.cleanupDeps = function() {
            for (var e = this, t = this.deps.length; t--; ) {
                var n = e.deps[t];
                e.newDepIds.has(n.id) || n.removeSub(e)
            }
            var r = this.depIds;
            this.depIds = this.newDepIds,
            this.newDepIds = r,
            this.newDepIds.clear(),
            r = this.deps,
            this.deps = this.newDeps,
            this.newDeps = r,
            this.newDeps.length = 0
        }
        ,
        Ci.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : je(this)
        }
        ,
        Ci.prototype.run = function() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || l(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e,
                    this.user)
                        try {
                            this.cb.call(this.vm, e, t)
                        } catch (e) {
                            te(e, this.vm, 'callback for watcher "' + this.expression + '"')
                        }
                    else
                        this.cb.call(this.vm, e, t)
                }
            }
        }
        ,
        Ci.prototype.evaluate = function() {
            this.value = this.get(),
            this.dirty = !1
        }
        ,
        Ci.prototype.depend = function() {
            for (var e = this, t = this.deps.length; t--; )
                e.deps[t].depend()
        }
        ,
        Ci.prototype.teardown = function() {
            var e = this;
            if (this.active) {
                this.vm._isBeingDestroyed || m(this.vm._watchers, this);
                for (var t = this.deps.length; t--; )
                    e.deps[t].removeSub(e);
                this.active = !1
            }
        }
        ;
        var Ti = new jr
          , _i = {
            enumerable: !0,
            configurable: !0,
            get: C,
            set: C
        }
          , Si = {
            lazy: !0
        };
        ft(ht.prototype);
        var Ei = {
            init: function(e, t, n, r) {
                if (!e.componentInstance || e.componentInstance._isDestroyed) {
                    (e.componentInstance = yt(e, hi, n, r)).$mount(t ? e.elm : void 0, t)
                } else if (e.data.keepAlive) {
                    var i = e;
                    Ei.prepatch(i, i)
                }
            },
            prepatch: function(e, t) {
                var n = t.componentOptions;
                ze(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
            },
            insert: function(e) {
                var t = e.context
                  , n = e.componentInstance;
                n._isMounted || (n._isMounted = !0,
                Ie(n, "mounted")),
                e.data.keepAlive && (t._isMounted ? Ne(n) : Le(n, !0))
            },
            destroy: function(e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? Pe(t, !0) : t.$destroy())
            }
        }
          , ki = Object.keys(Ei)
          , Ai = 1
          , Mi = 2
          , zi = 0;
        !function(e) {
            e.prototype._init = function(e) {
                var t = this;
                t._uid = zi++,
                t._isVue = !0,
                e && e._isComponent ? Et(t, e) : t.$options = U(kt(t.constructor), e || {}, t),
                t._renderProxy = t,
                t._self = t,
                Ae(t),
                xe(t),
                St(t),
                Ie(t, "beforeCreate"),
                tt(t),
                Ye(t),
                et(t),
                Ie(t, "created"),
                t.$options.el && t.$mount(t.$options.el)
            }
        }(zt),
        function(e) {
            var t = {};
            t.get = function() {
                return this._data
            }
            ;
            var n = {};
            n.get = function() {
                return this._props
            }
            ,
            Object.defineProperty(e.prototype, "$data", t),
            Object.defineProperty(e.prototype, "$props", n),
            e.prototype.$set = B,
            e.prototype.$delete = j,
            e.prototype.$watch = function(e, t, n) {
                var r = this;
                if (u(t))
                    return Je(r, e, t, n);
                n = n || {},
                n.user = !0;
                var i = new Ci(r,e,t,n);
                return n.immediate && t.call(r, i.value),
                function() {
                    i.teardown()
                }
            }
        }(zt),
        function(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, n) {
                var r = this
                  , i = this;
                if (Array.isArray(e))
                    for (var a = 0, o = e.length; a < o; a++)
                        r.$on(e[a], n);
                else
                    (i._events[e] || (i._events[e] = [])).push(n),
                    t.test(e) && (i._hasHookEvent = !0);
                return i
            }
            ,
            e.prototype.$once = function(e, t) {
                function n() {
                    r.$off(e, n),
                    t.apply(r, arguments)
                }
                var r = this;
                return n.fn = t,
                r.$on(e, n),
                r
            }
            ,
            e.prototype.$off = function(e, t) {
                var n = this
                  , r = this;
                if (!arguments.length)
                    return r._events = Object.create(null),
                    r;
                if (Array.isArray(e)) {
                    for (var i = 0, a = e.length; i < a; i++)
                        n.$off(e[i], t);
                    return r
                }
                var o = r._events[e];
                if (!o)
                    return r;
                if (1 === arguments.length)
                    return r._events[e] = null,
                    r;
                if (t)
                    for (var s, l = o.length; l--; )
                        if ((s = o[l]) === t || s.fn === t) {
                            o.splice(l, 1);
                            break
                        }
                return r
            }
            ,
            e.prototype.$emit = function(e) {
                var t = this
                  , n = t._events[e];
                if (n) {
                    n = n.length > 1 ? w(n) : n;
                    for (var r = w(arguments, 1), i = 0, a = n.length; i < a; i++)
                        try {
                            n[i].apply(t, r)
                        } catch (n) {
                            te(n, t, 'event handler for "' + e + '"')
                        }
                }
                return t
            }
        }(zt),
        function(e) {
            e.prototype._update = function(e, t) {
              if(e.parent && e.parent.elm && e.parent.elm.id=='app'){

              }
                var n = this;
                n._isMounted && Ie(n, "beforeUpdate");
                var r = n.$el
                  , i = n._vnode
                  , a = hi;
                hi = n,
                n._vnode = e,
                i ? n.$el = n.__patch__(i, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm),
                n.$options._parentElm = n.$options._refElm = null),
                hi = a,
                r && (r.__vue__ = null),
                n.$el && (n.$el.__vue__ = n),
                n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }
            ,
            e.prototype.$forceUpdate = function() {
                var e = this;
                e._watcher && e._watcher.update()
            }
            ,
            e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    Ie(e, "beforeDestroy"),
                    e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || m(t.$children, e),
                    e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--; )
                        e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--,
                    e._isDestroyed = !0,
                    e.__patch__(e._vnode, null),
                    Ie(e, "destroyed"),
                    e.$off(),
                    e.$el && (e.$el.__vue__ = null),
                    e.$vnode && (e.$vnode.parent = null)
                }
            }
        }(zt),
        function(e) {
            ft(e.prototype),
            e.prototype.$nextTick = function(e) {
                return oe(e, this)
            }
            ,
            e.prototype._render = function() {
                var e = this
                  , t = e.$options
                  , n = t.render
                  , r = t._parentVnode;
                if (e._isMounted)
                    for (var i in e.$slots) {
                        var a = e.$slots[i];
                        a._rendered && (e.$slots[i] = I(a, !0))
                    }
                e.$scopedSlots = r && r.data.scopedSlots || Er,
                e.$vnode = r;
                var o;
                try {
                    o = n.call(e._renderProxy, e.$createElement)
                } catch (t) {
                    te(t, e, "render"),
                    o = e._vnode
                }
                return o instanceof Fr || (o = Kr()),
                o.parent = r,
                o
            }
        }(zt);
        var Oi = [String, RegExp, Array]
          , Li = {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: Oi,
                exclude: Oi,
                max: [String, Number]
            },
            created: function() {
                this.cache = Object.create(null),
                this.keys = []
            },
            destroyed: function() {
                var e = this;
                for (var t in e.cache)
                    jt(e.cache, t, e.keys)
            },
            watch: {
                include: function(e) {
                    Bt(this, function(t) {
                        return Nt(e, t)
                    })
                },
                exclude: function(e) {
                    Bt(this, function(t) {
                        return !Nt(e, t)
                    })
                }
            },
            render: function() {
                var e = be(this.$slots.default)
                  , t = e && e.componentOptions;
                if (t) {
                    var n = Rt(t);
                    if (n && (this.include && !Nt(this.include, n) || this.exclude && Nt(this.exclude, n)))
                        return e;
                    var r = this
                      , i = r.cache
                      , a = r.keys
                      , o = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                    i[o] ? (e.componentInstance = i[o].componentInstance,
                    m(a, o),
                    a.push(o)) : (i[o] = e,
                    a.push(o),
                    this.max && a.length > parseInt(this.max) && jt(i, a[0], a, this._vnode)),
                    e.data.keepAlive = !0
                }
                return e
            }
        }
          , Pi = {
            KeepAlive: Li
        };
        !function(e) {
            var t = {};
            t.get = function() {
                return Sr
            }
            ,
            Object.defineProperty(e, "config", t),
            e.util = {
                warn: Yr,
                extend: b,
                mergeOptions: U,
                defineReactive: N
            },
            e.set = B,
            e.delete = j,
            e.nextTick = oe,
            e.options = Object.create(null),
            Tr.forEach(function(t) {
                e.options[t + "s"] = Object.create(null)
            }),
            e.options._base = e,
            b(e.options.components, Pi),
            Ot(e),
            Lt(e),
            Pt(e),
            $t(e)
        }(zt),
        Object.defineProperty(zt.prototype, "$isServer", {
            get: Hr
        }),
        Object.defineProperty(zt.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext
            }
        }),
        zt.version = "2.5.2";
        var Ii, Di, $i = h("style,class"), Ri = h("input,textarea,option,select,progress"), Ni = function(e, t, n) {
            return "value" === n && Ri(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }, Bi = h("contenteditable,draggable,spellcheck"), ji = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), Hi = "http://www.w3.org/1999/xlink", Gi = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        }, Xi = function(e) {
            return Gi(e) ? e.slice(6, e.length) : ""
        }, Yi = function(e) {
            return null == e || !1 === e
        }, Vi = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        }, Wi = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), qi = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), Fi = function(e) {
            return Wi(e) || qi(e)
        }, Ui = Object.create(null), Ki = h("text,number,password,search,email,tel,url"), Qi = Object.freeze({
            createElement: Qt,
            createElementNS: Zt,
            createTextNode: Jt,
            createComment: en,
            insertBefore: tn,
            removeChild: nn,
            appendChild: rn,
            parentNode: an,
            nextSibling: on,
            tagName: sn,
            setTextContent: ln,
            setAttribute: un
        }), Zi = {
            create: function(e, t) {
                cn(t)
            },
            update: function(e, t) {
                e.data.ref !== t.data.ref && (cn(e, !0),
                cn(t))
            },
            destroy: function(e) {
                cn(e, !0)
            }
        }, Ji = new Fr("",{},[]), ea = ["create", "activate", "update", "remove", "destroy"], ta = {
            create: hn,
            update: hn,
            destroy: function(e) {
                hn(e, Ji)
            }
        }, na = Object.create(null), ra = [Zi, ta], ia = {
            create: wn,
            update: wn
        }, aa = {
            create: xn,
            update: xn
        }, oa = "__r", sa = "__c", la = {
            create: En,
            update: En
        }, ua = {
            create: kn,
            update: kn
        }, ca = g(function(e) {
            var t = {}
              , n = /;(?![^(]*\))/g
              , r = /:(.+)/;
            return e.split(n).forEach(function(e) {
                if (e) {
                    var n = e.split(r);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim())
                }
            }),
            t
        }), pa = /^--/, da = /\s*!important$/, fa = function(e, t, n) {
            if (pa.test(t))
                e.style.setProperty(t, n);
            else if (da.test(n))
                e.style.setProperty(t, n.replace(da, ""), "important");
            else {
                var r = ma(t);
                if (Array.isArray(n))
                    for (var i = 0, a = n.length; i < a; i++)
                        e.style[r] = n[i];
                else
                    e.style[r] = n
            }
        }, ha = ["Webkit", "Moz", "ms"], ma = g(function(e) {
            if (Di = Di || document.createElement("div").style,
            "filter" !== (e = vr(e)) && e in Di)
                return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ha.length; n++) {
                var r = ha[n] + t;
                if (r in Di)
                    return r
            }
        }), va = {
            create: In,
            update: In
        }, ga = g(function(e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        }), ya = Mr && !Lr, wa = "transition", ba = "animation", xa = "transition", Ca = "transitionend", Ta = "animation", _a = "animationend";
        ya && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (xa = "WebkitTransition",
        Ca = "webkitTransitionEnd"),
        void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ta = "WebkitAnimation",
        _a = "webkitAnimationEnd"));
        var Sa = Mr ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
            return e()
        }
          , Ea = /\b(transform|all)(,|$)/
          , ka = Mr ? {
            create: Un,
            activate: Un,
            remove: function(e, t) {
                !0 !== e.data.show ? Wn(e, t) : t()
            }
        } : {}
          , Aa = [ia, aa, la, ua, va, ka]
          , Ma = Aa.concat(ra)
          , za = function(e) {
            function t(e) {
                return new Fr(O.tagName(e).toLowerCase(),{},[],void 0,e)
            }
            function n(e, t) {
                function n() {
                    0 == --n.listeners && o(e)
                }
                return n.listeners = t,
                n
            }
            function o(e) {
                if(e.id==='app'){
                    ;
                }
                var t = O.parentNode(e);
                i(t) && O.removeChild(t, e)
            }
            function l(e, t, n, r, o) {
                if (e.isRootInsert = !o,
                !u(e, t, n, r)) {
                    var s = e.data
                      , l = e.children
                      , c = e.tag;
                    i(c) ? (e.elm = e.ns ? O.createElementNS(e.ns, c) : O.createElement(c, e),
                    g(e),
                    f(e, l, t),
                    i(s) && v(e, t),
                    d(n, e.elm, r)) : a(e.isComment) ? (e.elm = O.createComment(e.text),
                    d(n, e.elm, r)) : (e.elm = O.createTextNode(e.text),
                    d(n, e.elm, r))
                }
            }
            function u(e, t, n, r) {
                var o = e.data;
                if (i(o)) {
                    var s = i(e.componentInstance) && o.keepAlive;
                    if (i(o = o.hook) && i(o = o.init) && o(e, !1, n, r),
                    i(e.componentInstance))
                        return c(e, t),
                        a(s) && p(e, t, n, r),
                        !0
                }
            }
            function c(e, t) {
                i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert),
                e.data.pendingInsert = null),
                e.elm = e.componentInstance.$el,
                m(e) ? (v(e, t),
                g(e)) : (cn(e),
                t.push(e))
            }
            function p(e, t, n, r) {
                for (var a, o = e; o.componentInstance; )
                    if (o = o.componentInstance._vnode,
                    i(a = o.data) && i(a = a.transition)) {
                        for (a = 0; a < M.activate.length; ++a)
                            M.activate[a](Ji, o);
                        t.push(o);
                        break
                    }
                d(n, e.elm, r)
            }
            function d(e, t, n) {
                i(e) && (i(n) ? n.parentNode === e && O.insertBefore(e, t, n) : O.appendChild(e, t))
            }
            function f(e, t, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; ++r)
                        l(t[r], n, e.elm, null, !0);
                else
                    s(e.text) && O.appendChild(e.elm, O.createTextNode(e.text))
            }
            function m(e) {
                for (; e.componentInstance; )
                    e = e.componentInstance._vnode;
                return i(e.tag)
            }
            function v(e, t) {
                for (var n = 0; n < M.create.length; ++n)
                    M.create[n](Ji, e);
                k = e.data.hook,
                i(k) && (i(k.create) && k.create(Ji, e),
                i(k.insert) && t.push(e))
            }
            function g(e) {
                var t;
                if (i(t = e.functionalScopeId))
                    O.setAttribute(e.elm, t, "");
                else
                    for (var n = e; n; )
                        i(t = n.context) && i(t = t.$options._scopeId) && O.setAttribute(e.elm, t, ""),
                        n = n.parent;
                i(t = hi) && t !== e.context && t !== e.functionalContext && i(t = t.$options._scopeId) && O.setAttribute(e.elm, t, "")
            }
            function y(e, t, n, r, i, a) {
                for (; r <= i; ++r)
                    l(n[r], a, e, t)
            }
            function w(e) {
                var t, n, r = e.data;
                if (i(r))
                    for (i(t = r.hook) && i(t = t.destroy) && t(e),
                    t = 0; t < M.destroy.length; ++t)
                        M.destroy[t](e);
                if (i(t = e.children))
                    for (n = 0; n < e.children.length; ++n)
                        w(e.children[n])
            }
            function b(e, t, n, r) {
                for (; n <= r; ++n) {
                    var a = t[n];
                    i(a) && (i(a.tag) ? (x(a),
                    w(a)) : o(a.elm))
                }
            }
            function x(e, t) {
                if (i(t) || i(e.data)) {
                    var r, a = M.remove.length + 1;
                    for (i(t) ? t.listeners += a : t = n(e.elm, a),
                    i(r = e.componentInstance) && i(r = r._vnode) && i(r.data) && x(r, t),
                    r = 0; r < M.remove.length; ++r)
                        M.remove[r](e, t);
                    i(r = e.data.hook) && i(r = r.remove) ? r(e, t) : t()
                } else
                    o(e.elm)
            }
            function C(e, t, n, a, o) {
                for (var s, u, c, p, d = 0, f = 0, h = t.length - 1, m = t[0], v = t[h], g = n.length - 1, w = n[0], x = n[g], C = !o; d <= h && f <= g; )
                    r(m) ? m = t[++d] : r(v) ? v = t[--h] : pn(m, w) ? (_(m, w, a),
                    m = t[++d],
                    w = n[++f]) : pn(v, x) ? (_(v, x, a),
                    v = t[--h],
                    x = n[--g]) : pn(m, x) ? (_(m, x, a),
                    C && O.insertBefore(e, m.elm, O.nextSibling(v.elm)),
                    m = t[++d],
                    x = n[--g]) : pn(v, w) ? (_(v, w, a),
                    C && O.insertBefore(e, v.elm, m.elm),
                    v = t[--h],
                    w = n[++f]) : (r(s) && (s = fn(t, d, h)),
                    u = i(w.key) ? s[w.key] : T(w, t, d, h),
                    r(u) ? l(w, a, e, m.elm) : (c = t[u],
                    pn(c, w) ? (_(c, w, a),
                    t[u] = void 0,
                    C && O.insertBefore(e, c.elm, m.elm)) : l(w, a, e, m.elm)),
                    w = n[++f]);
                d > h ? (p = r(n[g + 1]) ? null : n[g + 1].elm,
                y(e, p, n, f, g, a)) : f > g && b(e, t, d, h)
            }
            function T(e, t, n, r) {
                for (var a = n; a < r; a++) {
                    var o = t[a];
                    if (i(o) && pn(e, o))
                        return a
                }
            }
            function _(e, t, n, o) {
                if (e !== t) {
                    var s = t.elm = e.elm;
                    if (a(e.isAsyncPlaceholder))
                        return void (i(t.asyncFactory.resolved) ? E(e.elm, t, n) : t.isAsyncPlaceholder = !0);
                    if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce)))
                        return void (t.componentInstance = e.componentInstance);
                    var l, u = t.data;
                    i(u) && i(l = u.hook) && i(l = l.prepatch) && l(e, t);
                    var c = e.children
                      , p = t.children;
                    if (i(u) && m(t)) {
                        for (l = 0; l < M.update.length; ++l)
                            M.update[l](e, t);
                        i(l = u.hook) && i(l = l.update) && l(e, t)
                    }
                    r(t.text) ? i(c) && i(p) ? c !== p && C(s, c, p, n, o) : i(p) ? (i(e.text) && O.setTextContent(s, ""),
                    y(s, null, p, 0, p.length - 1, n)) : i(c) ? b(s, c, 0, c.length - 1) : i(e.text) && O.setTextContent(s, "") : e.text !== t.text && O.setTextContent(s, t.text),
                    i(u) && i(l = u.hook) && i(l = l.postpatch) && l(e, t)
                }
            }
            function S(e, t, n) {
                if (a(n) && i(e.parent))
                    e.parent.data.pendingInsert = t;
                else
                    for (var r = 0; r < t.length; ++r)
                        t[r].data.hook.insert(t[r])
            }
            function E(e, t, n) {
                if (a(t.isComment) && i(t.asyncFactory))
                    return t.elm = e,
                    t.isAsyncPlaceholder = !0,
                    !0;
                t.elm = e;
                var r = t.tag
                  , o = t.data
                  , s = t.children;
                if (i(o) && (i(k = o.hook) && i(k = k.init) && k(t, !0),
                i(k = t.componentInstance)))
                    return c(t, n),
                    !0;
                if (i(r)) {
                    if (i(s))
                        if (e.hasChildNodes())
                            if (i(k = o) && i(k = k.domProps) && i(k = k.innerHTML)) {
                                if (k !== e.innerHTML)
                                    return !1
                            } else {
                                for (var l = !0, u = e.firstChild, p = 0; p < s.length; p++) {
                                    if (!u || !E(u, s[p], n)) {
                                        l = !1;
                                        break
                                    }
                                    u = u.nextSibling
                                }
                                if (!l || u)
                                    return !1
                            }
                        else
                            f(t, s, n);
                    if (i(o))
                        for (var d in o)
                            if (!L(d)) {
                                v(t, n);
                                break
                            }
                } else
                    e.data !== t.text && (e.data = t.text);
                return !0
            }
            var k, A, M = {}, z = e.modules, O = e.nodeOps;
            for (k = 0; k < ea.length; ++k)
                for (M[ea[k]] = [],
                A = 0; A < z.length; ++A)
                    i(z[A][ea[k]]) && M[ea[k]].push(z[A][ea[k]]);
            var L = h("attrs,style,class,staticClass,staticStyle,key");
            return function(e, n, o, s, u, c) {
                if (r(n))
                    return void (i(e) && w(e));
                var p = !1
                  , d = [];
                if (r(e))
                    p = !0,
                    l(n, d, u, c);
                else {
                    var f = i(e.nodeType);
                    if (!f && pn(e, n))
                        _(e, n, d, s);
                    else {
                        if (f) {
                            if (1 === e.nodeType && e.hasAttribute(Cr) && (e.removeAttribute(Cr),
                            o = !0),
                            a(o) && E(e, n, d))
                                return S(n, d, !0),
                                e;
                            e = t(e)
                        }
                        var h = e.elm
                          , v = O.parentNode(h);
                        if (l(n, d, h._leaveCb ? null : v, O.nextSibling(h)),
                        i(n.parent))
                            for (var g = n.parent, y = m(n); g; ) {
                                for (var x = 0; x < M.destroy.length; ++x)
                                    M.destroy[x](g);
                                if (g.elm = n.elm,
                                y) {
                                    for (var C = 0; C < M.create.length; ++C)
                                        M.create[C](Ji, g);
                                    var T = g.data.hook.insert;
                                    if (T.merged)
                                        for (var k = 1; k < T.fns.length; k++)
                                            T.fns[k]()
                                } else
                                    cn(g);
                                g = g.parent
                            }
                        i(v) ? b(v, [e], 0, 0) : i(e.tag) && w(e)
                    }
                }
                return S(n, d, p),
                n.elm
            }
        }({
            nodeOps: Qi,
            modules: Ma
        });
        Lr && document.addEventListener("selectionchange", function() {
            var e = document.activeElement;
            e && e.vmodel && nr(e, "input")
        });
        var Oa = {
            inserted: function(e, t, n) {
                "select" === n.tag ? (Kn(e, t, n.context),
                e._vOptions = [].map.call(e.options, Jn)) : ("textarea" === n.tag || Ki(e.type)) && (e._vModifiers = t.modifiers,
                t.modifiers.lazy || (e.addEventListener("change", tr),
                Ir || (e.addEventListener("compositionstart", er),
                e.addEventListener("compositionend", tr)),
                Lr && (e.vmodel = !0)))
            },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    Kn(e, t, n.context);
                    var r = e._vOptions
                      , i = e._vOptions = [].map.call(e.options, Jn);
                    if (i.some(function(e, t) {
                        return !T(e, r[t])
                    })) {
                        (e.multiple ? t.value.some(function(e) {
                            return Zn(e, i)
                        }) : t.value !== t.oldValue && Zn(t.value, i)) && nr(e, "change")
                    }
                }
            }
        }
          , La = {
            bind: function(e, t, n) {
                var r = t.value;
                n = rr(n);
                var i = n.data && n.data.transition
                  , a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                r && i ? (n.data.show = !0,
                Vn(n, function() {
                    e.style.display = a
                })) : e.style.display = r ? a : "none"
            },
            update: function(e, t, n) {
                var r = t.value;
                r !== t.oldValue && (n = rr(n),
                n.data && n.data.transition ? (n.data.show = !0,
                r ? Vn(n, function() {
                    e.style.display = e.__vOriginalDisplay
                }) : Wn(n, function() {
                    e.style.display = "none"
                })) : e.style.display = r ? e.__vOriginalDisplay : "none")
            },
            unbind: function(e, t, n, r, i) {
                i || (e.style.display = e.__vOriginalDisplay)
            }
        }
          , Pa = {
            model: Oa,
            show: La
        }
          , Ia = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        }
          , Da = {
            name: "transition",
            props: Ia,
            abstract: !0,
            render: function(e) {
                var t = this
                  , n = this.$options._renderChildren;
                if (n && (n = n.filter(function(e) {
                    return e.tag || we(e)
                }),
                n.length)) {
                    var r = this.mode
                      , i = n[0];
                    if (sr(this.$vnode))
                        return i;
                    var a = ir(i);
                    if (!a)
                        return i;
                    if (this._leaving)
                        return or(e, i);
                    var o = "__transition-" + this._uid + "-";
                    a.key = null == a.key ? a.isComment ? o + "comment" : o + a.tag : s(a.key) ? 0 === String(a.key).indexOf(o) ? a.key : o + a.key : a.key;
                    var l = (a.data || (a.data = {})).transition = ar(this)
                      , u = this._vnode
                      , c = ir(u);
                    if (a.data.directives && a.data.directives.some(function(e) {
                        return "show" === e.name
                    }) && (a.data.show = !0),
                    c && c.data && !lr(a, c) && !we(c)) {
                        var p = c.data.transition = b({}, l);
                        if ("out-in" === r)
                            return this._leaving = !0,
                            ue(p, "afterLeave", function() {
                                t._leaving = !1,
                                t.$forceUpdate()
                            }),
                            or(e, i);
                        if ("in-out" === r) {
                            if (we(a))
                                return u;
                            var d, f = function() {
                                d()
                            };
                            ue(l, "afterEnter", f),
                            ue(l, "enterCancelled", f),
                            ue(p, "delayLeave", function(e) {
                                d = e
                            })
                        }
                    }
                    return i
                }
            }
        }
          , $a = b({
            tag: String,
            moveClass: String
        }, Ia);
        delete $a.mode;
        var Ra = {
            props: $a,
            render: function(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], o = ar(this), s = 0; s < i.length; s++) {
                    var l = i[s];
                    if (l.tag)
                        if (null != l.key && 0 !== String(l.key).indexOf("__vlist"))
                            a.push(l),
                            n[l.key] = l,
                            (l.data || (l.data = {})).transition = o;
                        else
                            ;
                }
                if (r) {
                    for (var u = [], c = [], p = 0; p < r.length; p++) {
                        var d = r[p];
                        d.data.transition = o,
                        d.data.pos = d.elm.getBoundingClientRect(),
                        n[d.key] ? u.push(d) : c.push(d)
                    }
                    this.kept = e(t, null, u),
                    this.removed = c
                }
                return e(t, null, a)
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0),
                this._vnode = this.kept
            },
            updated: function() {
                var e = this.prevChildren
                  , t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(ur),
                e.forEach(cr),
                e.forEach(pr),
                this._reflow = document.body.offsetHeight,
                e.forEach(function(e) {
                    if (e.data.moved) {
                        var n = e.elm
                          , r = n.style;
                        Bn(n, t),
                        r.transform = r.WebkitTransform = r.transitionDuration = "",
                        n.addEventListener(Ca, n._moveCb = function e(r) {
                            r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ca, e),
                            n._moveCb = null,
                            jn(n, t))
                        }
                        )
                    }
                }))
            },
            methods: {
                hasMove: function(e, t) {
                    if (!ya)
                        return !1;
                    if (this._hasMove)
                        return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function(e) {
                        $n(n, e)
                    }),
                    Dn(n, t),
                    n.style.display = "none",
                    this.$el.appendChild(n);
                    var r = Gn(n);
                    return this.$el.removeChild(n),
                    this._hasMove = r.hasTransform
                }
            }
        }
          , Na = {
            Transition: Da,
            TransitionGroup: Ra
        };
        zt.config.mustUseProp = Ni,
        zt.config.isReservedTag = Fi,
        zt.config.isReservedAttr = $i,
        zt.config.getTagNamespace = Ft,
        zt.config.isUnknownElement = Ut,
        b(zt.options.directives, Pa),
        b(zt.options.components, Na),
        zt.prototype.__patch__ = Mr ? za : C,
        zt.prototype.$mount = function(e, t) {
            return e = e && Mr ? Kt(e) : void 0,
            Me(this, e, t)
        }
        ,
        zt.nextTick(function() {
            Sr.devtools && Gr && Gr.emit("init", zt)
        }, 0),
        t.a = zt
    }
    ).call(t, n(8), n(20).setImmediate)
}
, function(e, t, n) {
    ;
    (function(t) {
        function r(e, t) {
            !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var i = n(1)
          , a = n(47)
          , o = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
          , s = {
            adapter: function() {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = n(12) : void 0 !== t && (e = n(12)),
                e
            }(),
            transformRequest: [function(e, t) {
                return a(t, "Content-Type"),
                i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"),
                JSON.stringify(e)) : e
            }
            ],
            transformResponse: [function(e) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        s.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        i.forEach(["delete", "get", "head"], function(e) {
            s.headers[e] = {}
        }),
        i.forEach(["post", "put", "patch"], function(e) {
            s.headers[e] = i.merge(o)
        }),
        e.exports = s
    }
    ).call(t, n(9))
}
, function(e, t, n) {
    ;
    e.exports = n(19).polyfill()
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function i(e) {
        if (c === setTimeout)
            return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout)
            return c = setTimeout,
            setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }
    function a(e) {
        if (p === clearTimeout)
            return clearTimeout(e);
        if ((p === r || !p) && clearTimeout)
            return p = clearTimeout,
            clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }
    function o() {
        m && f && (m = !1,
        f.length ? h = f.concat(h) : v = -1,
        h.length && s())
    }
    function s() {
        if (!m) {
            var e = i(o);
            m = !0;
            for (var t = h.length; t; ) {
                for (f = h,
                h = []; ++v < t; )
                    f && f[v].run();
                v = -1,
                t = h.length
            }
            f = null,
            m = !1,
            a(e)
        }
    }
    function l(e, t) {
        this.fun = e,
        this.array = t
    }
    function u() {}
    var c, p, d = e.exports = {};
    !function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            p = r
        }
    }();
    var f, h = [], m = !1, v = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        h.push(new l(e,t)),
        1 !== h.length || m || i(s)
    }
    ,
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    d.title = "browser",
    d.browser = !0,
    d.env = {},
    d.argv = [],
    d.version = "",
    d.versions = {},
    d.on = u,
    d.addListener = u,
    d.once = u,
    d.off = u,
    d.removeListener = u,
    d.removeAllListeners = u,
    d.emit = u,
    d.prependListener = u,
    d.prependOnceListener = u,
    d.listeners = function(e) {
        return []
    }
    ,
    d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    d.cwd = function() {
        return "/"
    }
    ,
    d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    d.umask = function() {
        return 0
    }
}
, , function(e, t, n) {
    ;
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}
, function(e, t, n) {
    ;
    var r = n(1)
      , i = n(48)
      , a = n(50)
      , o = n(51)
      , s = n(52)
      , l = n(13)
      , u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(53);
    e.exports = function(e) {
        return new Promise(function(t, c) {
            var p = e.data
              , d = e.headers;
            r.isFormData(p) && delete d["Content-Type"];
            var f = new XMLHttpRequest
              , h = "onreadystatechange"
              , m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials"in f || s(e.url) || (f = new window.XDomainRequest,
            h = "onload",
            m = !0,
            f.onprogress = function() {}
            ,
            f.ontimeout = function() {}
            ),
            e.auth) {
                var v = e.auth.username || ""
                  , g = e.auth.password || "";
                d.Authorization = "Basic " + u(v + ":" + g)
            }
            if (f.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0),
            f.timeout = e.timeout,
            f[h] = function() {
                if (f && (4 === f.readyState || m) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders"in f ? o(f.getAllResponseHeaders()) : null
                      , r = e.responseType && "text" !== e.responseType ? f.response : f.responseText
                      , a = {
                        data: r,
                        status: 1223 === f.status ? 204 : f.status,
                        statusText: 1223 === f.status ? "No Content" : f.statusText,
                        headers: n,
                        config: e,
                        request: f
                    };
                    i(t, c, a),
                    f = null
                }
            }
            ,
            f.onerror = function() {
                c(l("Network Error", e, null, f)),
                f = null
            }
            ,
            f.ontimeout = function() {
                c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)),
                f = null
            }
            ,
            r.isStandardBrowserEnv()) {
                var y = n(54)
                  , w = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                w && (d[e.xsrfHeaderName] = w)
            }
            if ("setRequestHeader"in f && r.forEach(d, function(e, t) {
                void 0 === p && "content-type" === t.toLowerCase() ? delete d[t] : f.setRequestHeader(t, e)
            }),
            e.withCredentials && (f.withCredentials = !0),
            e.responseType)
                try {
                    f.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType)
                        throw t
                }
            "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken && e.cancelToken.promise.then(function(e) {
                f && (f.abort(),
                c(e),
                f = null)
            }),
            void 0 === p && (p = null),
            f.send(p)
        }
        )
    }
}
, function(e, t, n) {
    ;
    var r = n(49);
    e.exports = function(e, t, n, i, a) {
        var o = new Error(e);
        return r(o, t, n, i, a)
    }
}
, function(e, t, n) {
    ;
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}
, function(e, t, n) {
    ;
    function r(e) {
        this.message = e
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    r.prototype.__CANCEL__ = !0,
    e.exports = r
}
, , , , function(e, t) {
    !function(n, r) {
        "object" == typeof t && void 0 !== e ? e.exports = r() : "function" == typeof define && define.amd ? define(r) : n.ES6Promise = r()
    }(this, function() {
        ;
        function e(e) {
            var t = typeof e;
            return null !== e && ("object" === t || "function" === t)
        }
        function t(e) {
            return "function" == typeof e
        }
        function n(e) {
            G = e
        }
        function r(e) {
            X = e
        }
        function i() {
            return void 0 !== H ? function() {
                H(o)
            }
            : a()
        }
        function a() {
            var e = setTimeout;
            return function() {
                return e(o, 1)
            }
        }
        function o() {
            for (var e = 0; e < j; e += 2) {
                (0,
                U[e])(U[e + 1]),
                U[e] = void 0,
                U[e + 1] = void 0
            }
            j = 0
        }
        function s(e, t) {
            var n = arguments
              , r = this
              , i = new this.constructor(u);
            void 0 === i[Q] && A(i);
            var a = r._state;
            return a ? function() {
                var e = n[a - 1];
                X(function() {
                    return S(a, i, e, r._result)
                })
            }() : x(r, i, e, t),
            i
        }
        function l(e) {
            var t = this;
            if (e && "object" == typeof e && e.constructor === t)
                return e;
            var n = new t(u);
            return g(n, e),
            n
        }
        function u() {}
        function c() {
            return new TypeError("You cannot resolve a promise with itself")
        }
        function p() {
            return new TypeError("A promises callback cannot return that same promise.")
        }
        function d(e) {
            try {
                return e.then
            } catch (e) {
                return te.error = e,
                te
            }
        }
        function f(e, t, n, r) {
            try {
                e.call(t, n, r)
            } catch (e) {
                return e
            }
        }
        function h(e, t, n) {
            X(function(e) {
                var r = !1
                  , i = f(n, t, function(n) {
                    r || (r = !0,
                    t !== n ? g(e, n) : w(e, n))
                }, function(t) {
                    r || (r = !0,
                    b(e, t))
                }, "Settle: " + (e._label || " unknown promise"));
                !r && i && (r = !0,
                b(e, i))
            }, e)
        }
        function m(e, t) {
            t._state === J ? w(e, t._result) : t._state === ee ? b(e, t._result) : x(t, void 0, function(t) {
                return g(e, t)
            }, function(t) {
                return b(e, t)
            })
        }
        function v(e, n, r) {
            n.constructor === e.constructor && r === s && n.constructor.resolve === l ? m(e, n) : r === te ? (b(e, te.error),
            te.error = null) : void 0 === r ? w(e, n) : t(r) ? h(e, n, r) : w(e, n)
        }
        function g(t, n) {
            t === n ? b(t, c()) : e(n) ? v(t, n, d(n)) : w(t, n)
        }
        function y(e) {
            e._onerror && e._onerror(e._result),
            C(e)
        }
        function w(e, t) {
            e._state === Z && (e._result = t,
            e._state = J,
            0 !== e._subscribers.length && X(C, e))
        }
        function b(e, t) {
            e._state === Z && (e._state = ee,
            e._result = t,
            X(y, e))
        }
        function x(e, t, n, r) {
            var i = e._subscribers
              , a = i.length;
            e._onerror = null,
            i[a] = t,
            i[a + J] = n,
            i[a + ee] = r,
            0 === a && e._state && X(C, e)
        }
        function C(e) {
            var t = e._subscribers
              , n = e._state;
            if (0 !== t.length) {
                for (var r = void 0, i = void 0, a = e._result, o = 0; o < t.length; o += 3)
                    r = t[o],
                    i = t[o + n],
                    r ? S(n, r, i, a) : i(a);
                e._subscribers.length = 0
            }
        }
        function T() {
            this.error = null
        }
        function _(e, t) {
            try {
                return e(t)
            } catch (e) {
                return ne.error = e,
                ne
            }
        }
        function S(e, n, r, i) {
            var a = t(r)
              , o = void 0
              , s = void 0
              , l = void 0
              , u = void 0;
            if (a) {
                if (o = _(r, i),
                o === ne ? (u = !0,
                s = o.error,
                o.error = null) : l = !0,
                n === o)
                    return void b(n, p())
            } else
                o = i,
                l = !0;
            n._state !== Z || (a && l ? g(n, o) : u ? b(n, s) : e === J ? w(n, o) : e === ee && b(n, o))
        }
        function E(e, t) {
            try {
                t(function(t) {
                    g(e, t)
                }, function(t) {
                    b(e, t)
                })
            } catch (t) {
                b(e, t)
            }
        }
        function k() {
            return re++
        }
        function A(e) {
            e[Q] = re++,
            e._state = void 0,
            e._result = void 0,
            e._subscribers = []
        }
        function M(e, t) {
            this._instanceConstructor = e,
            this.promise = new e(u),
            this.promise[Q] || A(this.promise),
            B(t) ? (this.length = t.length,
            this._remaining = t.length,
            this._result = new Array(this.length),
            0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0,
            this._enumerate(t),
            0 === this._remaining && w(this.promise, this._result))) : b(this.promise, z())
        }
        function z() {
            return new Error("Array Methods must be provided an Array")
        }
        function O(e) {
            return new M(this,e).promise
        }
        function L(e) {
            var t = this;
            return new t(B(e) ? function(n, r) {
                for (var i = e.length, a = 0; a < i; a++)
                    t.resolve(e[a]).then(n, r)
            }
            : function(e, t) {
                return t(new TypeError("You must pass an array to race."))
            }
            )
        }
        function P(e) {
            var t = this
              , n = new t(u);
            return b(n, e),
            n
        }
        function I() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }
        function D() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }
        function $(e) {
            this[Q] = k(),
            this._result = this._state = void 0,
            this._subscribers = [],
            u !== e && ("function" != typeof e && I(),
            this instanceof $ ? E(this, e) : D())
        }
        function R() {
            var e = void 0;
            if ("undefined" != typeof global)
                e = global;
            else if ("undefined" != typeof self)
                e = self;
            else
                try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
            var t = e.Promise;
            if (t) {
                var n = null;
                try {
                    n = Object.prototype.toString.call(t.resolve())
                } catch (e) {}
                if ("[object Promise]" === n && !t.cast)
                    return
            }
            e.Promise = $
        }
        var N = void 0;
        N = Array.isArray ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        var B = N
          , j = 0
          , H = void 0
          , G = void 0
          , X = function(e, t) {
            U[j] = e,
            U[j + 1] = t,
            2 === (j += 2) && (G ? G(o) : K())
        }
          , Y = "undefined" != typeof window ? window : void 0
          , V = Y || {}
          , W = V.MutationObserver || V.WebKitMutationObserver
          , q = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
          , F = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel
          , U = new Array(1e3)
          , K = void 0;
        K = q ? function() {
            return function() {
                return process.nextTick(o)
            }
        }() : W ? function() {
            var e = 0
              , t = new W(o)
              , n = document.createTextNode("");
            return t.observe(n, {
                characterData: !0
            }),
            function() {
                n.data = e = ++e % 2
            }
        }() : F ? function() {
            var e = new MessageChannel;
            return e.port1.onmessage = o,
            function() {
                return e.port2.postMessage(0)
            }
        }() : void 0 === Y && "function" == typeof require ? function() {
            try {
                var e = require
                  , t = e("vertx");
                return H = t.runOnLoop || t.runOnContext,
                i()
            } catch (e) {
                return a()
            }
        }() : a();
        var Q = Math.random().toString(36).substring(16)
          , Z = void 0
          , J = 1
          , ee = 2
          , te = new T
          , ne = new T
          , re = 0;
        return M.prototype._enumerate = function(e) {
            for (var t = 0; this._state === Z && t < e.length; t++)
                this._eachEntry(e[t], t)
        }
        ,
        M.prototype._eachEntry = function(e, t) {
            var n = this._instanceConstructor
              , r = n.resolve;
            if (r === l) {
                var i = d(e);
                if (i === s && e._state !== Z)
                    this._settledAt(e._state, t, e._result);
                else if ("function" != typeof i)
                    this._remaining--,
                    this._result[t] = e;
                else if (n === $) {
                    var a = new n(u);
                    v(a, e, i),
                    this._willSettleAt(a, t)
                } else
                    this._willSettleAt(new n(function(t) {
                        return t(e)
                    }
                    ), t)
            } else
                this._willSettleAt(r(e), t)
        }
        ,
        M.prototype._settledAt = function(e, t, n) {
            var r = this.promise;
            r._state === Z && (this._remaining--,
            e === ee ? b(r, n) : this._result[t] = n),
            0 === this._remaining && w(r, this._result)
        }
        ,
        M.prototype._willSettleAt = function(e, t) {
            var n = this;
            x(e, void 0, function(e) {
                return n._settledAt(J, t, e)
            }, function(e) {
                return n._settledAt(ee, t, e)
            })
        }
        ,
        $.all = O,
        $.race = L,
        $.resolve = l,
        $.reject = P,
        $._setScheduler = n,
        $._setAsap = r,
        $._asap = X,
        $.prototype = {
            constructor: $,
            then: s,
            catch: function(e) {
                return this.then(null, e)
            }
        },
        $.polyfill = R,
        $.Promise = $,
        $
    })
}
, function(e, t, n) {
    function r(e, t) {
        this._id = e,
        this._clearFn = t
    }
    var i = Function.prototype.apply;
    t.setTimeout = function() {
        return new r(i.call(setTimeout, window, arguments),clearTimeout)
    }
    ,
    t.setInterval = function() {
        return new r(i.call(setInterval, window, arguments),clearInterval)
    }
    ,
    t.clearTimeout = t.clearInterval = function(e) {
        e && e.close()
    }
    ,
    r.prototype.unref = r.prototype.ref = function() {}
    ,
    r.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }
    ,
    t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId),
        e._idleTimeout = t
    }
    ,
    t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId),
        e._idleTimeout = -1
    }
    ,
    t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
            e._onTimeout && e._onTimeout()
        }, t))
    }
    ,
    n(21),
    t.setImmediate = setImmediate,
    t.clearImmediate = clearImmediate
}
, function(e, t, n) {
    (function(e, t) {
        !function(e, n) {
            ;
            function r(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                    t[n] = arguments[n + 1];
                var r = {
                    callback: e,
                    args: t
                };
                return u[l] = r,
                s(l),
                l++
            }
            function i(e) {
                delete u[e]
            }
            function a(e) {
                var t = e.callback
                  , r = e.args;
                switch (r.length) {
                case 0:
                    t();
                    break;
                case 1:
                    t(r[0]);
                    break;
                case 2:
                    t(r[0], r[1]);
                    break;
                case 3:
                    t(r[0], r[1], r[2]);
                    break;
                default:
                    t.apply(n, r)
                }
            }
            function o(e) {
                if (c)
                    setTimeout(o, 0, e);
                else {
                    var t = u[e];
                    if (t) {
                        c = !0;
                        try {
                            a(t)
                        } finally {
                            i(e),
                            c = !1
                        }
                    }
                }
            }
            if (!e.setImmediate) {
                var s, l = 1, u = {}, c = !1, p = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                d = d && d.setTimeout ? d : e,
                "[object process]" === {}.toString.call(e.process) ? function() {
                    s = function(e) {
                        t.nextTick(function() {
                            o(e)
                        })
                    }
                }() : function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0
                          , n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }
                        ,
                        e.postMessage("", "*"),
                        e.onmessage = n,
                        t
                    }
                }() ? function() {
                    var t = "setImmediate$" + Math.random() + "$"
                      , n = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                    };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                    s = function(n) {
                        e.postMessage(t + n, "*")
                    }
                }() : e.MessageChannel ? function() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        o(e.data)
                    }
                    ,
                    s = function(t) {
                        e.port2.postMessage(t)
                    }
                }() : p && "onreadystatechange"in p.createElement("script") ? function() {
                    var e = p.documentElement;
                    s = function(t) {
                        var n = p.createElement("script");
                        n.onreadystatechange = function() {
                            o(t),
                            n.onreadystatechange = null,
                            e.removeChild(n),
                            n = null
                        }
                        ,
                        e.appendChild(n)
                    }
                }() : function() {
                    s = function(e) {
                        setTimeout(o, 0, e)
                    }
                }(),
                d.setImmediate = r,
                d.clearImmediate = i
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(t, n(8), n(9))
}
, , , function(e, t) {
    e.exports = function(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
            var a = t[i]
              , o = a[0]
              , s = a[1]
              , l = a[2]
              , u = a[3]
              , c = {
                id: e + ":" + i,
                css: s,
                media: l,
                sourceMap: u
            };
            r[o] ? r[o].parts.push(c) : n.push(r[o] = {
                id: o,
                parts: [c]
            })
        }
        return n
    }
}
, , , , , , , , , , , , , , , , , function(e, t, n) {
    var r;
    !function(i, a) {
        ;
        var o = "model"
          , s = "name"
          , l = "type"
          , u = "vendor"
          , c = "version"
          , p = "mobile"
          , d = "tablet"
          , f = {
            extend: function(e, t) {
                var n = {};
                for (var r in e)
                    t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                return n
            },
            has: function(e, t) {
                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        }
          , h = {
            rgx: function(e, t) {
                for (var n, r, i, a, o, s, l = 0; l < t.length && !o; ) {
                    var u = t[l]
                      , c = t[l + 1];
                    for (n = r = 0; n < u.length && !o; )
                        if (o = u[n++].exec(e))
                            for (i = 0; i < c.length; i++)
                                s = o[++r],
                                a = c[i],
                                "object" == typeof a && a.length > 0 ? 2 == a.length ? "function" == typeof a[1] ? this[a[0]] = a[1].call(this, s) : this[a[0]] = a[1] : 3 == a.length ? "function" != typeof a[1] || a[1].exec && a[1].test ? this[a[0]] = s ? s.replace(a[1], a[2]) : void 0 : this[a[0]] = s ? a[1].call(this, s, a[2]) : void 0 : 4 == a.length && (this[a[0]] = s ? a[3].call(this, s.replace(a[1], a[2])) : void 0) : this[a] = s || void 0;
                    l += 2
                }
            },
            str: function(e, t) {
                for (var n in t)
                    if ("object" == typeof t[n] && t[n].length > 0) {
                        for (var r = 0; r < t[n].length; r++)
                            if (f.has(t[n][r], e))
                                return "?" === n ? void 0 : n
                    } else if (f.has(t[n], e))
                        return "?" === n ? void 0 : n;
                return e
            }
        }
          , m = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2000: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        }
          , v = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [s, c], [/(opios)[\/\s]+([\w\.]+)/i], [[s, "Opera Mini"], c], [/\s(opr)\/([\w\.]+)/i], [[s, "Opera"], c], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i], [s, c], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[s, "IE"], c], [/(edge)\/((\d+)?[\w\.]+)/i], [s, c], [/(yabrowser)\/([\w\.]+)/i], [[s, "Yandex"], c], [/(puffin)\/([\w\.]+)/i], [[s, "Puffin"], c], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[s, "UCBrowser"], c], [/(comodo_dragon)\/([\w\.]+)/i], [[s, /_/g, " "], c], [/(micromessenger)\/([\w\.]+)/i], [[s, "WeChat"], c], [/(QQ)\/([\d\.]+)/i], [s, c], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [s, c], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [c, [s, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [c, [s, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [c, [s, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[s, /(.+)/, "$1 WebView"], c], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[s, /(.+(?:g|us))(.+)/, "$1 $2"], c], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [c, [s, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [s, c], [/(dolfin)\/([\w\.]+)/i], [[s, "Dolphin"], c], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[s, "Chrome"], c], [/(coast)\/([\w\.]+)/i], [[s, "Opera Coast"], c], [/fxios\/([\w\.-]+)/i], [c, [s, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [c, [s, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [c, s], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[s, "GSA"], c], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [s, [c, h.str, m.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [s, c], [/(navigator|netscape)\/([\w\.-]+)/i], [[s, "Netscape"], c], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [s, c]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", f.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", f.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", f.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [o, u, [l, d]], [/applecoremedia\/[\w\.]+ \((ipad)/], [o, [u, "Apple"], [l, d]], [/(apple\s{0,1}tv)/i], [[o, "Apple TV"], [u, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [u, o, [l, d]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [o, [u, "Amazon"], [l, d]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[o, h.str, m.device.amazon.model], [u, "Amazon"], [l, p]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [o, u, [l, p]], [/\((ip[honed|\s\w*]+);/i], [o, [u, "Apple"], [l, p]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [u, o, [l, p]], [/\(bb10;\s(\w+)/i], [o, [u, "BlackBerry"], [l, p]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [o, [u, "Asus"], [l, d]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[u, "Sony"], [o, "Xperia Tablet"], [l, d]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [o, [u, "Sony"], [l, p]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [u, o, [l, "console"]], [/android.+;\s(shield)\sbuild/i], [o, [u, "Nvidia"], [l, "console"]], [/(playstation\s[34portablevi]+)/i], [o, [u, "Sony"], [l, "console"]], [/(sprint\s(\w+))/i], [[u, h.str, m.device.sprint.vendor], [o, h.str, m.device.sprint.model], [l, p]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [u, o, [l, d]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [u, [o, /_/g, " "], [l, p]], [/(nexus\s9)/i], [o, [u, "HTC"], [l, d]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [o, [u, "Huawei"], [l, p]], [/(microsoft);\s(lumia[\s\w]+)/i], [u, o, [l, p]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [o, [u, "Microsoft"], [l, "console"]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [u, "Microsoft"], [l, p]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [o, [u, "Motorola"], [l, p]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [o, [u, "Motorola"], [l, d]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[u, f.trim], [o, f.trim], [l, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [u, "Samsung"], [l, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [o, [u, "Sharp"], [l, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[u, "Samsung"], o, [l, d]], [/smart-tv.+(samsung)/i], [u, [l, "smarttv"], o], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[u, "Samsung"], o, [l, p]], [/sie-(\w+)*/i], [o, [u, "Siemens"], [l, p]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[u, "Nokia"], o, [l, p]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [o, [u, "Acer"], [l, d]], [/android.+([vl]k\-?\d{3})\s+build/i], [o, [u, "LG"], [l, d]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[u, "LG"], o, [l, d]], [/(lg) netcast\.tv/i], [u, o, [l, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [o, [u, "LG"], [l, p]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [o, [u, "Lenovo"], [l, d]], [/linux;.+((jolla));/i], [u, o, [l, p]], [/((pebble))app\/[\d\.]+\s/i], [u, o, [l, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [u, o, [l, p]], [/crkey/i], [[o, "Chromecast"], [u, "Google"]], [/android.+;\s(glass)\s\d/i], [o, [u, "Google"], [l, "wearable"]], [/android.+;\s(pixel c)\s/i], [o, [u, "Google"], [l, d]], [/android.+;\s(pixel xl|pixel)\s/i], [o, [u, "Google"], [l, p]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i], [[o, /_/g, " "], [u, "Xiaomi"], [l, p]], [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i], [[o, /_/g, " "], [u, "Xiaomi"], [l, d]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [o, [u, "Meizu"], [l, d]], [/android.+a000(1)\s+build/i], [o, [u, "OnePlus"], [l, p]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [o, [u, "RCA"], [l, d]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i], [o, [u, "Dell"], [l, d]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [o, [u, "Verizon"], [l, d]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[u, "Barnes & Noble"], o, [l, d]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [o, [u, "NuVision"], [l, d]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i], [[u, "ZTE"], o, [l, d]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [o, [u, "Swiss"], [l, p]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [o, [u, "Swiss"], [l, d]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [o, [u, "Zeki"], [l, d]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i], [[u, "Dragon Touch"], o, [l, d]], [/android.+[;\/]\s*(NS-?.+)\s+build/i], [o, [u, "Insignia"], [l, d]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i], [o, [u, "NextBook"], [l, d]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[u, "Voice"], o, [l, p]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i], [[u, "LvTel"], o, [l, p]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [o, [u, "Envizen"], [l, d]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i], [u, o, [l, d]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [o, [u, "MachSpeed"], [l, d]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [u, o, [l, d]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [o, [u, "Rotor"], [l, d]], [/android.+(KS(.+))\s+build/i], [o, [u, "Amazon"], [l, d]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i], [u, o, [l, d]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[l, f.lowerize], u, o], [/(android.+)[;\/].+build/i], [o, [u, "Generic"]]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [c, [s, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [s, c], [/rv\:([\w\.]+).*(gecko)/i], [c, s]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [s, c], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [s, [c, h.str, m.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[s, "Windows"], [c, h.str, m.os.windows.version]], [/\((bb)(10);/i], [[s, "BlackBerry"], c], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [s, c], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[s, "Symbian"], c], [/\((series40);/i], [s], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[s, "Firefox OS"], c], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [s, c], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[s, "Chromium OS"], c], [/(sunos)\s?([\w\.]+\d)*/i], [[s, "Solaris"], c], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [s, c], [/(haiku)\s(\w+)/i], [s, c], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[c, /_/g, "."], [s, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[s, "Mac OS"], [c, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [s, c]]
        }
          , g = function(e, t) {
            if ("object" == typeof e && (t = e,
            e = void 0),
            !(this instanceof g))
                return new g(e,t).getResult();
            var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : "")
              , r = t ? f.extend(v, t) : v;
            return this.getBrowser = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return h.rgx.call(e, n, r.browser),
                e.major = f.major(e.version),
                e
            }
            ,
            this.getCPU = function() {
                var e = {
                    architecture: void 0
                };
                return h.rgx.call(e, n, r.cpu),
                e
            }
            ,
            this.getDevice = function() {
                var e = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return h.rgx.call(e, n, r.device),
                e
            }
            ,
            this.getEngine = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return h.rgx.call(e, n, r.engine),
                e
            }
            ,
            this.getOS = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return h.rgx.call(e, n, r.os),
                e
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return n
            }
            ,
            this.setUA = function(e) {
                return n = e,
                this
            }
            ,
            this
        };
        g.VERSION = "0.7.17",
        g.BROWSER = {
            NAME: s,
            MAJOR: "major",
            VERSION: c
        },
        g.CPU = {
            ARCHITECTURE: "architecture"
        },
        g.DEVICE = {
            MODEL: o,
            VENDOR: u,
            TYPE: l,
            CONSOLE: "console",
            MOBILE: p,
            SMARTTV: "smarttv",
            TABLET: d,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
        },
        g.ENGINE = {
            NAME: s,
            VERSION: c
        },
        g.OS = {
            NAME: s,
            VERSION: c
        },
        void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = g),
        t.UAParser = g) : n(42) ? void 0 !== (r = function() {
            return g
        }
        .call(t, n, t, e)) && (e.exports = r) : i && (i.UAParser = g);
        var y = i && (i.jQuery || i.Zepto);
        if (void 0 !== y) {
            var w = new g;
            y.ua = w.getResult(),
            y.ua.get = function() {
                return w.getUA()
            }
            ,
            y.ua.set = function(e) {
                w.setUA(e);
                var t = w.getResult();
                for (var n in t)
                    y.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(e, t) {
    (function(t) {
        e.exports = t
    }
    ).call(t, {})
}
, function(e, t, n) {
    e.exports = n(44)
}
, function(e, t, n) {
    ;
    function r(e) {
        var t = new o(e)
          , n = a(o.prototype.request, t);
        return i.extend(n, o.prototype, t),
        i.extend(n, t),
        n
    }
    var i = n(1)
      , a = n(11)
      , o = n(46)
      , s = n(6)
      , l = r(s);
    l.Axios = o,
    l.create = function(e) {
        return r(i.merge(s, e))
    }
    ,
    l.Cancel = n(15),
    l.CancelToken = n(60),
    l.isCancel = n(14),
    l.all = function(e) {
        return Promise.all(e)
    }
    ,
    l.spread = n(61),
    e.exports = l,
    e.exports.default = l
}
, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    function r(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }
    e.exports = function(e) {
        return null != e && (n(e) || r(e) || !!e._isBuffer)
    }
}
, function(e, t, n) {
    ;
    function r(e) {
        this.defaults = e,
        this.interceptors = {
            request: new o,
            response: new o
        }
    }
    var i = n(6)
      , a = n(1)
      , o = n(55)
      , s = n(56)
      , l = n(58)
      , u = n(59);
    r.prototype.request = function(e) {
        "string" == typeof e && (e = a.merge({
            url: arguments[0]
        }, arguments[1])),
        e = a.merge(i, this.defaults, {
            method: "get"
        }, e),
        e.method = e.method.toLowerCase(),
        e.baseURL && !l(e.url) && (e.url = u(e.baseURL, e.url));
        var t = [s, void 0]
          , n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
            t.unshift(e.fulfilled, e.rejected)
        }),
        this.interceptors.response.forEach(function(e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length; )
            n = n.then(t.shift(), t.shift());
        return n
    }
    ,
    a.forEach(["delete", "get", "head", "options"], function(e) {
        r.prototype[e] = function(t, n) {
            return this.request(a.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    }),
    a.forEach(["post", "put", "patch"], function(e) {
        r.prototype[e] = function(t, n, r) {
            return this.request(a.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }),
    e.exports = r
}
, function(e, t, n) {
    ;
    var r = n(1);
    e.exports = function(e, t) {
        r.forEach(e, function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
            delete e[r])
        })
    }
}
, function(e, t, n) {
    ;
    var r = n(13);
    e.exports = function(e, t, n) {
        var i = n.config.validateStatus;
        n.status && i && !i(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}
, function(e, t, n) {
    ;
    e.exports = function(e, t, n, r, i) {
        return e.config = t,
        n && (e.code = n),
        e.request = r,
        e.response = i,
        e
    }
}
, function(e, t, n) {
    ;
    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var i = n(1);
    e.exports = function(e, t, n) {
        if (!t)
            return e;
        var a;
        if (n)
            a = n(t);
        else if (i.isURLSearchParams(t))
            a = t.toString();
        else {
            var o = [];
            i.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (i.isArray(e) && (t += "[]"),
                i.isArray(e) || (e = [e]),
                i.forEach(e, function(e) {
                    i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)),
                    o.push(r(t) + "=" + r(e))
                }))
            }),
            a = o.join("&")
        }
        return a && (e += (-1 === e.indexOf("?") ? "?" : "&") + a),
        e
    }
}
, function(e, t, n) {
    ;
    var r = n(1);
    e.exports = function(e) {
        var t, n, i, a = {};
        return e ? (r.forEach(e.split("\n"), function(e) {
            i = e.indexOf(":"),
            t = r.trim(e.substr(0, i)).toLowerCase(),
            n = r.trim(e.substr(i + 1)),
            t && (a[t] = a[t] ? a[t] + ", " + n : n)
        }),
        a) : a
    }
}
, function(e, t, n) {
    ;
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function() {
        function e(e) {
            var t = e;
            return n && (i.setAttribute("href", t),
            t = i.href),
            i.setAttribute("href", t),
            {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
        var t, n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
        return t = e(window.location.href),
        function(n) {
            var i = r.isString(n) ? e(n) : n;
            return i.protocol === t.protocol && i.host === t.host
        }
    }() : function() {
        return function() {
            return !0
        }
    }()
}
, function(e, t, n) {
    ;
    function r() {
        this.message = "String contains an invalid character"
    }
    function i(e) {
        for (var t, n, i = String(e), o = "", s = 0, l = a; i.charAt(0 | s) || (l = "=",
        s % 1); o += l.charAt(63 & t >> 8 - s % 1 * 8)) {
            if ((n = i.charCodeAt(s += .75)) > 255)
                throw new r;
            t = t << 8 | n
        }
        return o
    }
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    r.prototype = new Error,
    r.prototype.code = 5,
    r.prototype.name = "InvalidCharacterError",
    e.exports = i
}
, function(e, t, n) {
    ;
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, t, n, i, a, o) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                r.isString(i) && s.push("path=" + i),
                r.isString(a) && s.push("domain=" + a),
                !0 === o && s.push("secure"),
                document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}
, function(e, t, n) {
    ;
    function r() {
        this.handlers = []
    }
    var i = n(1);
    r.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }),
        this.handlers.length - 1
    }
    ,
    r.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    ,
    r.prototype.forEach = function(e) {
        i.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }
    ,
    e.exports = r
}
, function(e, t, n) {
    ;
    function r(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var i = n(1)
      , a = n(57)
      , o = n(14)
      , s = n(6);
    e.exports = function(e) {
        return r(e),
        e.headers = e.headers || {},
        e.data = a(e.data, e.headers, e.transformRequest),
        e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}),
        i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }),
        (e.adapter || s.adapter)(e).then(function(t) {
            return r(e),
            t.data = a(t.data, t.headers, e.transformResponse),
            t
        }, function(t) {
            return o(t) || (r(e),
            t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))),
            Promise.reject(t)
        })
    }
}
, function(e, t, n) {
    ;
    var r = n(1);
    e.exports = function(e, t, n) {
        return r.forEach(n, function(n) {
            e = n(e, t)
        }),
        e
    }
}
, function(e, t, n) {
    ;
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}
, function(e, t, n) {
    ;
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}
, function(e, t, n) {
    ;
    function r(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        }
        );
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new i(e),
            t(n.reason))
        })
    }
    var i = n(15);
    r.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    r.source = function() {
        var e;
        return {
            token: new r(function(t) {
                e = t
            }
            ),
            cancel: e
        }
    }
    ,
    e.exports = r
}
, function(e, t, n) {
    ;
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}
, , function(e, t, n) {
    ;
    function r(e, t) {}
    function i(e) {
        return Object.prototype.toString.call(e).indexOf("Error") > -1
    }
    function a(e, t) {
        switch (typeof t) {
        case "undefined":
            return;
        case "object":
            return t;
        case "function":
            return t(e);
        case "boolean":
            return t ? e.params : void 0
        }
    }
    function o(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function s(e, t, n) {
        void 0 === t && (t = {});
        var r, i = n || l;
        try {
            r = i(e || "")
        } catch (e) {
            r = {}
        }
        for (var a in t)
            r[a] = t[a];
        return r
    }
    function l(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var n = e.replace(/\+/g, " ").split("=")
              , r = je(n.shift())
              , i = n.length > 0 ? je(n.join("=")) : null;
            void 0 === t[r] ? t[r] = i : Array.isArray(t[r]) ? t[r].push(i) : t[r] = [t[r], i]
        }),
        t) : t
    }
    function u(e) {
        var t = e ? Object.keys(e).map(function(t) {
            var n = e[t];
            if (void 0 === n)
                return "";
            if (null === n)
                return Be(t);
            if (Array.isArray(n)) {
                var r = [];
                return n.forEach(function(e) {
                    void 0 !== e && (null === e ? r.push(Be(t)) : r.push(Be(t) + "=" + Be(e)))
                }),
                r.join("&")
            }
            return Be(t) + "=" + Be(n)
        }).filter(function(e) {
            return e.length > 0
        }).join("&") : null;
        return t ? "?" + t : ""
    }
    function c(e, t, n, r) {
        var i = r && r.options.stringifyQuery
          , a = t.query || {};
        try {
            a = p(a)
        } catch (e) {}
        var o = {
            name: t.name || e && e.name,
            meta: e && e.meta || {},
            path: t.path || "/",
            hash: t.hash || "",
            query: a,
            params: t.params || {},
            fullPath: f(t, i),
            matched: e ? d(e) : []
        };
        return n && (o.redirectedFrom = f(n, i)),
        Object.freeze(o)
    }
    function p(e) {
        if (Array.isArray(e))
            return e.map(p);
        if (e && "object" == typeof e) {
            var t = {};
            for (var n in e)
                t[n] = p(e[n]);
            return t
        }
        return e
    }
    function d(e) {
        for (var t = []; e; )
            t.unshift(e),
            e = e.parent;
        return t
    }
    function f(e, t) {
        var n = e.path
          , r = e.query;
        void 0 === r && (r = {});
        var i = e.hash;
        void 0 === i && (i = "");
        var a = t || u;
        return (n || "/") + a(r) + i
    }
    function h(e, t) {
        return t === Ge ? e === t : !!t && (e.path && t.path ? e.path.replace(He, "") === t.path.replace(He, "") && e.hash === t.hash && m(e.query, t.query) : !(!e.name || !t.name) && (e.name === t.name && e.hash === t.hash && m(e.query, t.query) && m(e.params, t.params)))
    }
    function m(e, t) {
        if (void 0 === e && (e = {}),
        void 0 === t && (t = {}),
        !e || !t)
            return e === t;
        var n = Object.keys(e)
          , r = Object.keys(t);
        return n.length === r.length && n.every(function(n) {
            var r = e[n]
              , i = t[n];
            return "object" == typeof r && "object" == typeof i ? m(r, i) : String(r) === String(i)
        })
    }
    function v(e, t) {
        return 0 === e.path.replace(He, "/").indexOf(t.path.replace(He, "/")) && (!t.hash || e.hash === t.hash) && g(e.query, t.query)
    }
    function g(e, t) {
        for (var n in t)
            if (!(n in e))
                return !1;
        return !0
    }
    function y(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                if (/\b_blank\b/i.test(e.currentTarget.getAttribute("target")))
                    return
            }
            return e.preventDefault && e.preventDefault(),
            !0
        }
    }
    function w(e) {
        if (e)
            for (var t, n = 0; n < e.length; n++) {
                if (t = e[n],
                "a" === t.tag)
                    return t;
                if (t.children && (t = w(t.children)))
                    return t
            }
    }
    function b(e) {
        if (!b.installed || Ie !== e) {
            b.installed = !0,
            Ie = e;
            var t = function(e) {
                return void 0 !== e
            }
              , n = function(e, n) {
                var r = e.$options._parentVnode;
                t(r) && t(r = r.data) && t(r = r.registerRouteInstance) && r(e, n)
            };
            e.mixin({
                beforeCreate: function() {
                    t(this.$options.router) ? (this._routerRoot = this,
                    this._router = this.$options.router,
                    this._router.init(this),
                    e.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this,
                    n(this, this)
                },
                destroyed: function() {
                    n(this)
                }
            }),
            Object.defineProperty(e.prototype, "$router", {
                get: function() {
                    return this._routerRoot._router
                }
            }),
            Object.defineProperty(e.prototype, "$route", {
                get: function() {
                    return this._routerRoot._route
                }
            }),
            e.component("router-view", De),
            e.component("router-link", Ve);
            var r = e.config.optionMergeStrategies;
            r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate = r.created
        }
    }
    function x(e, t, n) {
        var r = e.charAt(0);
        if ("/" === r)
            return e;
        if ("?" === r || "#" === r)
            return t + e;
        var i = t.split("/");
        n && i[i.length - 1] || i.pop();
        for (var a = e.replace(/^\//, "").split("/"), o = 0; o < a.length; o++) {
            var s = a[o];
            ".." === s ? i.pop() : "." !== s && i.push(s)
        }
        return "" !== i[0] && i.unshift(""),
        i.join("/")
    }
    function C(e) {
        var t = ""
          , n = ""
          , r = e.indexOf("#");
        r >= 0 && (t = e.slice(r),
        e = e.slice(0, r));
        var i = e.indexOf("?");
        return i >= 0 && (n = e.slice(i + 1),
        e = e.slice(0, i)),
        {
            path: e,
            query: n,
            hash: t
        }
    }
    function T(e) {
        return e.replace(/\/\//g, "/")
    }
    function _(e, t) {
        for (var n, r = [], i = 0, a = 0, o = "", s = t && t.delimiter || "/"; null != (n = Je.exec(e)); ) {
            var l = n[0]
              , u = n[1]
              , c = n.index;
            if (o += e.slice(a, c),
            a = c + l.length,
            u)
                o += u[1];
            else {
                var p = e[a]
                  , d = n[2]
                  , f = n[3]
                  , h = n[4]
                  , m = n[5]
                  , v = n[6]
                  , g = n[7];
                o && (r.push(o),
                o = "");
                var y = null != d && null != p && p !== d
                  , w = "+" === v || "*" === v
                  , b = "?" === v || "*" === v
                  , x = n[2] || s
                  , C = h || m;
                r.push({
                    name: f || i++,
                    prefix: d || "",
                    delimiter: x,
                    optional: b,
                    repeat: w,
                    partial: y,
                    asterisk: !!g,
                    pattern: C ? z(C) : g ? ".*" : "[^" + M(x) + "]+?"
                })
            }
        }
        return a < e.length && (o += e.substr(a)),
        o && r.push(o),
        r
    }
    function S(e, t) {
        return A(_(e, t))
    }
    function E(e) {
        return encodeURI(e).replace(/[\/?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    function k(e) {
        return encodeURI(e).replace(/[?#]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    function A(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++)
            "object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
        return function(n, r) {
            for (var i = "", a = n || {}, o = r || {}, s = o.pretty ? E : encodeURIComponent, l = 0; l < e.length; l++) {
                var u = e[l];
                if ("string" != typeof u) {
                    var c, p = a[u.name];
                    if (null == p) {
                        if (u.optional) {
                            u.partial && (i += u.prefix);
                            continue
                        }
                        throw new TypeError('Expected "' + u.name + '" to be defined')
                    }
                    if (qe(p)) {
                        if (!u.repeat)
                            throw new TypeError('Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(p) + "`");
                        if (0 === p.length) {
                            if (u.optional)
                                continue;
                            throw new TypeError('Expected "' + u.name + '" to not be empty')
                        }
                        for (var d = 0; d < p.length; d++) {
                            if (c = s(p[d]),
                            !t[l].test(c))
                                throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(c) + "`");
                            i += (0 === d ? u.prefix : u.delimiter) + c
                        }
                    } else {
                        if (c = u.asterisk ? k(p) : s(p),
                        !t[l].test(c))
                            throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + c + '"');
                        i += u.prefix + c
                    }
                } else
                    i += u
            }
            return i
        }
    }
    function M(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
    }
    function z(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1")
    }
    function O(e, t) {
        return e.keys = t,
        e
    }
    function L(e) {
        return e.sensitive ? "" : "i"
    }
    function P(e, t) {
        var n = e.source.match(/\((?!\?)/g);
        if (n)
            for (var r = 0; r < n.length; r++)
                t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                });
        return O(e, t)
    }
    function I(e, t, n) {
        for (var r = [], i = 0; i < e.length; i++)
            r.push(R(e[i], t, n).source);
        return O(new RegExp("(?:" + r.join("|") + ")",L(n)), t)
    }
    function D(e, t, n) {
        return $(_(e, n), t, n)
    }
    function $(e, t, n) {
        qe(t) || (n = t || n,
        t = []),
        n = n || {};
        for (var r = n.strict, i = !1 !== n.end, a = "", o = 0; o < e.length; o++) {
            var s = e[o];
            if ("string" == typeof s)
                a += M(s);
            else {
                var l = M(s.prefix)
                  , u = "(?:" + s.pattern + ")";
                t.push(s),
                s.repeat && (u += "(?:" + l + u + ")*"),
                u = s.optional ? s.partial ? l + "(" + u + ")?" : "(?:" + l + "(" + u + "))?" : l + "(" + u + ")",
                a += u
            }
        }
        var c = M(n.delimiter || "/")
          , p = a.slice(-c.length) === c;
        return r || (a = (p ? a.slice(0, -c.length) : a) + "(?:" + c + "(?=$))?"),
        a += i ? "$" : r && p ? "" : "(?=" + c + "|$)",
        O(new RegExp("^" + a,L(n)), t)
    }
    function R(e, t, n) {
        return qe(t) || (n = t || n,
        t = []),
        n = n || {},
        e instanceof RegExp ? P(e, t) : qe(e) ? I(e, t, n) : D(e, t, n)
    }
    function N(e, t, n) {
        try {
            return (et[e] || (et[e] = Fe.compile(e)))(t || {}, {
                pretty: !0
            })
        } catch (e) {
            return ""
        }
    }
    function B(e, t, n, r) {
        var i = t || []
          , a = n || Object.create(null)
          , o = r || Object.create(null);
        e.forEach(function(e) {
            j(i, a, o, e)
        });
        for (var s = 0, l = i.length; s < l; s++)
            "*" === i[s] && (i.push(i.splice(s, 1)[0]),
            l--,
            s--);
        return {
            pathList: i,
            pathMap: a,
            nameMap: o
        }
    }
    function j(e, t, n, r, i, a) {
        var o = r.path
          , s = r.name
          , l = r.pathToRegexpOptions || {}
          , u = G(o, i, l.strict);
        "boolean" == typeof r.caseSensitive && (l.sensitive = r.caseSensitive);
        var c = {
            path: u,
            regex: H(u, l),
            components: r.components || {
                default: r.component
            },
            instances: {},
            name: s,
            parent: i,
            matchAs: a,
            redirect: r.redirect,
            beforeEnter: r.beforeEnter,
            meta: r.meta || {},
            props: null == r.props ? {} : r.components ? r.props : {
                default: r.props
            }
        };
        if (r.children && r.children.forEach(function(r) {
            var i = a ? T(a + "/" + r.path) : void 0;
            j(e, t, n, r, c, i)
        }),
        void 0 !== r.alias) {
            (Array.isArray(r.alias) ? r.alias : [r.alias]).forEach(function(a) {
                var o = {
                    path: a,
                    children: r.children
                };
                j(e, t, n, o, i, c.path || "/")
            })
        }
        t[c.path] || (e.push(c.path),
        t[c.path] = c),
        s && (n[s] || (n[s] = c))
    }
    function H(e, t) {
        var n = Fe(e, [], t);
        return n
    }
    function G(e, t, n) {
        return n || (e = e.replace(/\/$/, "")),
        "/" === e[0] ? e : null == t ? e : T(t.path + "/" + e)
    }
    function X(e, t, n, r) {
        var i = "string" == typeof e ? {
            path: e
        } : e;
        if (i.name || i._normalized)
            return i;
        if (!i.path && i.params && t) {
            i = Y({}, i),
            i._normalized = !0;
            var a = Y(Y({}, t.params), i.params);
            if (t.name)
                i.name = t.name,
                i.params = a;
            else if (t.matched.length) {
                var o = t.matched[t.matched.length - 1].path;
                i.path = N(o, a, "path " + t.path)
            }
            return i
        }
        var l = C(i.path || "")
          , u = t && t.path || "/"
          , c = l.path ? x(l.path, u, n || i.append) : u
          , p = s(l.query, i.query, r && r.options.parseQuery)
          , d = i.hash || l.hash;
        return d && "#" !== d.charAt(0) && (d = "#" + d),
        {
            _normalized: !0,
            path: c,
            query: p,
            hash: d
        }
    }
    function Y(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function V(e, t) {
        function n(e) {
            B(e, l, u, p)
        }
        function r(e, n, r) {
            var i = X(e, n, !1, t)
              , a = i.name;
            if (a) {
                var s = p[a];
                if (!s)
                    return o(null, i);
                var c = s.regex.keys.filter(function(e) {
                    return !e.optional
                }).map(function(e) {
                    return e.name
                });
                if ("object" != typeof i.params && (i.params = {}),
                n && "object" == typeof n.params)
                    for (var d in n.params)
                        !(d in i.params) && c.indexOf(d) > -1 && (i.params[d] = n.params[d]);
                if (s)
                    return i.path = N(s.path, i.params, 'named route "' + a + '"'),
                    o(s, i, r)
            } else if (i.path) {
                i.params = {};
                for (var f = 0; f < l.length; f++) {
                    var h = l[f]
                      , m = u[h];
                    if (W(m.regex, i.path, i.params))
                        return o(m, i, r)
                }
            }
            return o(null, i)
        }
        function i(e, n) {
            var i = e.redirect
              , a = "function" == typeof i ? i(c(e, n, null, t)) : i;
            if ("string" == typeof a && (a = {
                path: a
            }),
            !a || "object" != typeof a)
                return o(null, n);
            var s = a
              , l = s.name
              , u = s.path
              , d = n.query
              , f = n.hash
              , h = n.params;
            if (d = s.hasOwnProperty("query") ? s.query : d,
            f = s.hasOwnProperty("hash") ? s.hash : f,
            h = s.hasOwnProperty("params") ? s.params : h,
            l) {
                p[l];
                return r({
                    _normalized: !0,
                    name: l,
                    query: d,
                    hash: f,
                    params: h
                }, void 0, n)
            }
            if (u) {
                var m = q(u, e);
                return r({
                    _normalized: !0,
                    path: N(m, h, 'redirect route with path "' + m + '"'),
                    query: d,
                    hash: f
                }, void 0, n)
            }
            return o(null, n)
        }
        function a(e, t, n) {
            var i = N(n, t.params, 'aliased route with path "' + n + '"')
              , a = r({
                _normalized: !0,
                path: i
            });
            if (a) {
                var s = a.matched
                  , l = s[s.length - 1];
                return t.params = a.params,
                o(l, t)
            }
            return o(null, t)
        }
        function o(e, n, r) {
            return e && e.redirect ? i(e, r || n) : e && e.matchAs ? a(e, n, e.matchAs) : c(e, n, r, t)
        }
        var s = B(e)
          , l = s.pathList
          , u = s.pathMap
          , p = s.nameMap;
        return {
            match: r,
            addRoutes: n
        }
    }
    function W(e, t, n) {
        var r = t.match(e);
        if (!r)
            return !1;
        if (!n)
            return !0;
        for (var i = 1, a = r.length; i < a; ++i) {
            var o = e.keys[i - 1]
              , s = "string" == typeof r[i] ? decodeURIComponent(r[i]) : r[i];
            o && (n[o.name] = s)
        }
        return !0
    }
    function q(e, t) {
        return x(e, t.parent ? t.parent.path : "/", !0)
    }
    function F() {
        window.history.replaceState({
            key: ae()
        }, ""),
        window.addEventListener("popstate", function(e) {
            K(),
            e.state && e.state.key && oe(e.state.key)
        })
    }
    function U(e, t, n, r) {
        if (e.app) {
            var i = e.options.scrollBehavior;
            i && e.app.$nextTick(function() {
                var e = Q()
                  , a = i(t, n, r ? e : null);
                a && ("function" == typeof a.then ? a.then(function(t) {
                    re(t, e)
                }).catch(function(e) {}) : re(a, e))
            })
        }
    }
    function K() {
        var e = ae();
        e && (tt[e] = {
            x: window.pageXOffset,
            y: window.pageYOffset
        })
    }
    function Q() {
        var e = ae();
        if (e)
            return tt[e]
    }
    function Z(e, t) {
        var n = document.documentElement
          , r = n.getBoundingClientRect()
          , i = e.getBoundingClientRect();
        return {
            x: i.left - r.left - t.x,
            y: i.top - r.top - t.y
        }
    }
    function J(e) {
        return ne(e.x) || ne(e.y)
    }
    function ee(e) {
        return {
            x: ne(e.x) ? e.x : window.pageXOffset,
            y: ne(e.y) ? e.y : window.pageYOffset
        }
    }
    function te(e) {
        return {
            x: ne(e.x) ? e.x : 0,
            y: ne(e.y) ? e.y : 0
        }
    }
    function ne(e) {
        return "number" == typeof e
    }
    function re(e, t) {
        var n = "object" == typeof e;
        if (n && "string" == typeof e.selector) {
            var r = document.querySelector(e.selector);
            if (r) {
                var i = e.offset && "object" == typeof e.offset ? e.offset : {};
                i = te(i),
                t = Z(r, i)
            } else
                J(e) && (t = ee(e))
        } else
            n && J(e) && (t = ee(e));
        t && window.scrollTo(t.x, t.y)
    }
    function ie() {
        return rt.now().toFixed(3)
    }
    function ae() {
        return it
    }
    function oe(e) {
        it = e
    }
    function se(e, t) {
        K();
        var n = window.history;
        try {
            t ? n.replaceState({
                key: it
            }, "", e) : (it = ie(),
            n.pushState({
                key: it
            }, "", e))
        } catch (n) {
            window.location[t ? "replace" : "assign"](e)
        }
    }
    function le(e) {
        se(e, !0)
    }
    function ue(e, t, n) {
        var r = function(i) {
            i >= e.length ? n() : e[i] ? t(e[i], function() {
                r(i + 1)
            }) : r(i + 1)
        };
        r(0)
    }
    function ce(e) {
        return function(t, n, r) {
            var a = !1
              , o = 0
              , s = null;
            pe(e, function(e, t, n, l) {
                if ("function" == typeof e && void 0 === e.cid) {
                    a = !0,
                    o++;
                    var u, c = he(function(t) {
                        fe(t) && (t = t.default),
                        e.resolved = "function" == typeof t ? t : Ie.extend(t),
                        n.components[l] = t,
                        --o <= 0 && r()
                    }), p = he(function(e) {
                        var t = "Failed to resolve async component " + l + ": " + e;
                        s || (s = i(e) ? e : new Error(t),
                        r(s))
                    });
                    try {
                        u = e(c, p)
                    } catch (e) {
                        p(e)
                    }
                    if (u)
                        if ("function" == typeof u.then)
                            u.then(c, p);
                        else {
                            var d = u.component;
                            d && "function" == typeof d.then && d.then(c, p)
                        }
                }
            }),
            a || r()
        }
    }
    function pe(e, t) {
        return de(e.map(function(e) {
            return Object.keys(e.components).map(function(n) {
                return t(e.components[n], e.instances[n], e, n)
            })
        }))
    }
    function de(e) {
        return Array.prototype.concat.apply([], e)
    }
    function fe(e) {
        return e.__esModule || at && "Module" === e[Symbol.toStringTag]
    }
    function he(e) {
        var t = !1;
        return function() {
            for (var n = [], r = arguments.length; r--; )
                n[r] = arguments[r];
            if (!t)
                return t = !0,
                e.apply(this, n)
        }
    }
    function me(e) {
        if (!e)
            if (We) {
                var t = document.querySelector("base");
                e = t && t.getAttribute("href") || "/",
                e = e.replace(/^https?:\/\/[^\/]+/, "")
            } else
                e = "/";
        return "/" !== e.charAt(0) && (e = "/" + e),
        e.replace(/\/$/, "")
    }
    function ve(e, t) {
        var n, r = Math.max(e.length, t.length);
        for (n = 0; n < r && e[n] === t[n]; n++)
            ;
        return {
            updated: t.slice(0, n),
            activated: t.slice(n),
            deactivated: e.slice(n)
        }
    }
    function ge(e, t, n, r) {
        var i = pe(e, function(e, r, i, a) {
            var o = ye(e, t);
            if (o)
                return Array.isArray(o) ? o.map(function(e) {
                    return n(e, r, i, a)
                }) : n(o, r, i, a)
        });
        return de(r ? i.reverse() : i)
    }
    function ye(e, t) {
        return "function" != typeof e && (e = Ie.extend(e)),
        e.options[t]
    }
    function we(e) {
        return ge(e, "beforeRouteLeave", xe, !0)
    }
    function be(e) {
        return ge(e, "beforeRouteUpdate", xe)
    }
    function xe(e, t) {
        if (t)
            return function() {
                return e.apply(t, arguments)
            }
    }
    function Ce(e, t, n) {
        return ge(e, "beforeRouteEnter", function(e, r, i, a) {
            return Te(e, i, a, t, n)
        })
    }
    function Te(e, t, n, r, i) {
        return function(a, o, s) {
            return e(a, o, function(e) {
                s(e),
                "function" == typeof e && r.push(function() {
                    _e(e, t.instances, n, i)
                })
            })
        }
    }
    function _e(e, t, n, r) {
        t[n] ? e(t[n]) : r() && setTimeout(function() {
            _e(e, t, n, r)
        }, 16)
    }
    function Se(e) {
        var t = window.location.pathname;
        return e && 0 === t.indexOf(e) && (t = t.slice(e.length)),
        (t || "/") + window.location.search + window.location.hash
    }
    function Ee(e) {
        var t = Se(e);
        if (!/^\/#/.test(t))
            return window.location.replace(T(e + "/#" + t)),
            !0
    }
    function ke() {
        var e = Ae();
        return "/" === e.charAt(0) || (Oe("/" + e),
        !1)
    }
    function Ae() {
        var e = window.location.href
          , t = e.indexOf("#");
        return -1 === t ? "" : e.slice(t + 1)
    }
    function Me(e) {
        var t = window.location.href
          , n = t.indexOf("#");
        return (n >= 0 ? t.slice(0, n) : t) + "#" + e
    }
    function ze(e) {
        nt ? se(Me(e)) : window.location.hash = e
    }
    function Oe(e) {
        nt ? le(Me(e)) : window.location.replace(Me(e))
    }
    function Le(e, t) {
        return e.push(t),
        function() {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
    }
    function Pe(e, t, n) {
        var r = "hash" === n ? "#" + t : t;
        return e ? T(e + "/" + r) : r
    }
    var Ie, De = {
        name: "router-view",
        functional: !0,
        props: {
            name: {
                type: String,
                default: "default"
            }
        },
        render: function(e, t) {
            var n = t.props
              , r = t.children
              , i = t.parent
              , s = t.data;
            s.routerView = !0;
            for (var l = i.$createElement, u = n.name, c = i.$route, p = i._routerViewCache || (i._routerViewCache = {}), d = 0, f = !1; i && i._routerRoot !== i; )
                i.$vnode && i.$vnode.data.routerView && d++,
                i._inactive && (f = !0),
                i = i.$parent;
            if (s.routerViewDepth = d,
            f)
                return l(p[u], s, r);
            var h = c.matched[d];
            if (!h)
                return p[u] = null,
                l();
            var m = p[u] = h.components[u];
            s.registerRouteInstance = function(e, t) {
                var n = h.instances[u];
                (t && n !== e || !t && n === e) && (h.instances[u] = t)
            }
            ,
            (s.hook || (s.hook = {})).prepatch = function(e, t) {
                h.instances[u] = t.componentInstance
            }
            ;
            var v = s.props = a(c, h.props && h.props[u]);
            if (v) {
                v = s.props = o({}, v);
                var g = s.attrs = s.attrs || {};
                for (var y in v)
                    m.props && y in m.props || (g[y] = v[y],
                    delete v[y])
            }
            return l(m, s, r)
        }
    }, $e = /[!'()*]/g, Re = function(e) {
        return "%" + e.charCodeAt(0).toString(16)
    }, Ne = /%2C/g, Be = function(e) {
        return encodeURIComponent(e).replace($e, Re).replace(Ne, ",")
    }, je = decodeURIComponent, He = /\/?$/, Ge = c(null, {
        path: "/"
    }), Xe = [String, Object], Ye = [String, Array], Ve = {
        name: "router-link",
        props: {
            to: {
                type: Xe,
                required: !0
            },
            tag: {
                type: String,
                default: "a"
            },
            exact: Boolean,
            append: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            event: {
                type: Ye,
                default: "click"
            }
        },
        render: function(e) {
            var t = this
              , n = this.$router
              , r = this.$route
              , i = n.resolve(this.to, r, this.append)
              , a = i.location
              , o = i.route
              , s = i.href
              , l = {}
              , u = n.options.linkActiveClass
              , p = n.options.linkExactActiveClass
              , d = null == u ? "router-link-active" : u
              , f = null == p ? "router-link-exact-active" : p
              , m = null == this.activeClass ? d : this.activeClass
              , g = null == this.exactActiveClass ? f : this.exactActiveClass
              , b = a.path ? c(null, a, null, n) : o;
            l[g] = h(r, b),
            l[m] = this.exact ? l[g] : v(r, b);
            var x = function(e) {
                y(e) && (t.replace ? n.replace(a) : n.push(a))
            }
              , C = {
                click: y
            };
            Array.isArray(this.event) ? this.event.forEach(function(e) {
                C[e] = x
            }) : C[this.event] = x;
            var T = {
                class: l
            };
            if ("a" === this.tag)
                T.on = C,
                T.attrs = {
                    href: s
                };
            else {
                var _ = w(this.$slots.default);
                if (_) {
                    _.isStatic = !1;
                    var S = Ie.util.extend;
                    (_.data = S({}, _.data)).on = C;
                    (_.data.attrs = S({}, _.data.attrs)).href = s
                } else
                    T.on = C
            }
            return e(this.tag, T, this.$slots.default)
        }
    }, We = "undefined" != typeof window, qe = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
    , Fe = R, Ue = _, Ke = S, Qe = A, Ze = $, Je = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
    Fe.parse = Ue,
    Fe.compile = Ke,
    Fe.tokensToFunction = Qe,
    Fe.tokensToRegExp = Ze;
    var et = Object.create(null)
      , tt = Object.create(null)
      , nt = We && function() {
        var e = window.navigator.userAgent;
        return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && (window.history && "pushState"in window.history)
    }()
      , rt = We && window.performance && window.performance.now ? window.performance : Date
      , it = ie()
      , at = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag
      , ot = function(e, t) {
        this.router = e,
        this.base = me(t),
        this.current = Ge,
        this.pending = null,
        this.ready = !1,
        this.readyCbs = [],
        this.readyErrorCbs = [],
        this.errorCbs = []
    };
    ot.prototype.listen = function(e) {
        this.cb = e
    }
    ,
    ot.prototype.onReady = function(e, t) {
        this.ready ? e() : (this.readyCbs.push(e),
        t && this.readyErrorCbs.push(t))
    }
    ,
    ot.prototype.onError = function(e) {
        this.errorCbs.push(e)
    }
    ,
    ot.prototype.transitionTo = function(e, t, n) {
        var r = this
          , i = this.router.match(e, this.current);
        this.confirmTransition(i, function() {
            r.updateRoute(i),
            t && t(i),
            r.ensureURL(),
            r.ready || (r.ready = !0,
            r.readyCbs.forEach(function(e) {
                e(i)
            }))
        }, function(e) {
            n && n(e),
            e && !r.ready && (r.ready = !0,
            r.readyErrorCbs.forEach(function(t) {
                t(e)
            }))
        })
    }
    ,
    ot.prototype.confirmTransition = function(e, t, n) {
        var a = this
          , o = this.current
          , s = function(e) {
            i(e) && (a.errorCbs.length ? a.errorCbs.forEach(function(t) {
                t(e)
            }) : (r(!1, "uncaught error during route navigation:"),
            console.error(e))),
            n && n(e)
        };
        if (h(e, o) && e.matched.length === o.matched.length)
            return this.ensureURL(),
            s();
        var l = ve(this.current.matched, e.matched)
          , u = l.updated
          , c = l.deactivated
          , p = l.activated
          , d = [].concat(we(c), this.router.beforeHooks, be(u), p.map(function(e) {
            return e.beforeEnter
        }), ce(p));
        this.pending = e;
        var f = function(t, n) {
            if (a.pending !== e)
                return s();
            try {
                t(e, o, function(e) {
                    !1 === e || i(e) ? (a.ensureURL(!0),
                    s(e)) : "string" == typeof e || "object" == typeof e && ("string" == typeof e.path || "string" == typeof e.name) ? (s(),
                    "object" == typeof e && e.replace ? a.replace(e) : a.push(e)) : n(e)
                })
            } catch (e) {
                s(e)
            }
        };
        ue(d, f, function() {
            var n = [];
            ue(Ce(p, n, function() {
                return a.current === e
            }).concat(a.router.resolveHooks), f, function() {
                if (a.pending !== e)
                    return s();
                a.pending = null,
                t(e),
                a.router.app && a.router.app.$nextTick(function() {
                    n.forEach(function(e) {
                        e()
                    })
                })
            })
        })
    }
    ,
    ot.prototype.updateRoute = function(e) {
        var t = this.current;
        this.current = e,
        this.cb && this.cb(e),
        this.router.afterHooks.forEach(function(n) {
            n && n(e, t)
        })
    }
    ;
    var st = function(e) {
        function t(t, n) {
            var r = this;
            e.call(this, t, n);
            var i = t.options.scrollBehavior;
            i && F();
            var a = Se(this.base);
            window.addEventListener("popstate", function(e) {
                var n = r.current
                  , o = Se(r.base);
                r.current === Ge && o === a || r.transitionTo(o, function(e) {
                    i && U(t, e, n, !0)
                })
            })
        }
        return e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t,
        t.prototype.go = function(e) {
            window.history.go(e)
        }
        ,
        t.prototype.push = function(e, t, n) {
            var r = this
              , i = this
              , a = i.current;
            this.transitionTo(e, function(e) {
                se(T(r.base + e.fullPath)),
                U(r.router, e, a, !1),
                t && t(e)
            }, n)
        }
        ,
        t.prototype.replace = function(e, t, n) {
            var r = this
              , i = this
              , a = i.current;
            this.transitionTo(e, function(e) {
                le(T(r.base + e.fullPath)),
                U(r.router, e, a, !1),
                t && t(e)
            }, n)
        }
        ,
        t.prototype.ensureURL = function(e) {
            if (Se(this.base) !== this.current.fullPath) {
                var t = T(this.base + this.current.fullPath);
                e ? se(t) : le(t)
            }
        }
        ,
        t.prototype.getCurrentLocation = function() {
            return Se(this.base)
        }
        ,
        t
    }(ot)
      , lt = function(e) {
        function t(t, n, r) {
            e.call(this, t, n),
            r && Ee(this.base) || ke()
        }
        return e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t,
        t.prototype.setupListeners = function() {
            var e = this
              , t = this.router
              , n = t.options.scrollBehavior
              , r = nt && n;
            r && F(),
            window.addEventListener(nt ? "popstate" : "hashchange", function() {
                var t = e.current;
                ke() && e.transitionTo(Ae(), function(n) {
                    r && U(e.router, n, t, !0),
                    nt || Oe(n.fullPath)
                })
            })
        }
        ,
        t.prototype.push = function(e, t, n) {
            var r = this
              , i = this
              , a = i.current;
            this.transitionTo(e, function(e) {
                ze(e.fullPath),
                U(r.router, e, a, !1),
                t && t(e)
            }, n)
        }
        ,
        t.prototype.replace = function(e, t, n) {
            var r = this
              , i = this
              , a = i.current;
            this.transitionTo(e, function(e) {
                Oe(e.fullPath),
                U(r.router, e, a, !1),
                t && t(e)
            }, n)
        }
        ,
        t.prototype.go = function(e) {
            window.history.go(e)
        }
        ,
        t.prototype.ensureURL = function(e) {
            var t = this.current.fullPath;
            Ae() !== t && (e ? ze(t) : Oe(t))
        }
        ,
        t.prototype.getCurrentLocation = function() {
            return Ae()
        }
        ,
        t
    }(ot)
      , ut = function(e) {
        function t(t, n) {
            e.call(this, t, n),
            this.stack = [],
            this.index = -1
        }
        return e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t,
        t.prototype.push = function(e, t, n) {
            var r = this;
            this.transitionTo(e, function(e) {
                r.stack = r.stack.slice(0, r.index + 1).concat(e),
                r.index++,
                t && t(e)
            }, n)
        }
        ,
        t.prototype.replace = function(e, t, n) {
            var r = this;
            this.transitionTo(e, function(e) {
                r.stack = r.stack.slice(0, r.index).concat(e),
                t && t(e)
            }, n)
        }
        ,
        t.prototype.go = function(e) {
            var t = this
              , n = this.index + e;
            if (!(n < 0 || n >= this.stack.length)) {
                var r = this.stack[n];
                this.confirmTransition(r, function() {
                    t.index = n,
                    t.updateRoute(r)
                })
            }
        }
        ,
        t.prototype.getCurrentLocation = function() {
            var e = this.stack[this.stack.length - 1];
            return e ? e.fullPath : "/"
        }
        ,
        t.prototype.ensureURL = function() {}
        ,
        t
    }(ot)
      , ct = function(e) {
        void 0 === e && (e = {}),
        this.app = null,
        this.apps = [],
        this.options = e,
        this.beforeHooks = [],
        this.resolveHooks = [],
        this.afterHooks = [],
        this.matcher = V(e.routes || [], this);
        var t = e.mode || "hash";
        switch (this.fallback = "history" === t && !nt && !1 !== e.fallback,
        this.fallback && (t = "hash"),
        We || (t = "abstract"),
        this.mode = t,
        t) {
        case "history":
            this.history = new st(this,e.base);
            break;
        case "hash":
            this.history = new lt(this,e.base,this.fallback);
            break;
        case "abstract":
            this.history = new ut(this,e.base)
        }
    }
      , pt = {
        currentRoute: {
            configurable: !0
        }
    };
    ct.prototype.match = function(e, t, n) {
        return this.matcher.match(e, t, n)
    }
    ,
    pt.currentRoute.get = function() {
        return this.history && this.history.current
    }
    ,
    ct.prototype.init = function(e) {
        var t = this;
        if (this.apps.push(e),
        !this.app) {
            this.app = e;
            var n = this.history;
            if (n instanceof st)
                n.transitionTo(n.getCurrentLocation());
            else if (n instanceof lt) {
                var r = function() {
                    n.setupListeners()
                };
                n.transitionTo(n.getCurrentLocation(), r, r)
            }
            n.listen(function(e) {
                t.apps.forEach(function(t) {
                    t._route = e
                })
            })
        }
    }
    ,
    ct.prototype.beforeEach = function(e) {
        return Le(this.beforeHooks, e)
    }
    ,
    ct.prototype.beforeResolve = function(e) {
        return Le(this.resolveHooks, e)
    }
    ,
    ct.prototype.afterEach = function(e) {
        return Le(this.afterHooks, e)
    }
    ,
    ct.prototype.onReady = function(e, t) {
        this.history.onReady(e, t)
    }
    ,
    ct.prototype.onError = function(e) {
        this.history.onError(e)
    }
    ,
    ct.prototype.push = function(e, t, n) {
        this.history.push(e, t, n)
    }
    ,
    ct.prototype.replace = function(e, t, n) {
        this.history.replace(e, t, n)
    }
    ,
    ct.prototype.go = function(e) {
        this.history.go(e)
    }
    ,
    ct.prototype.back = function() {
        this.go(-1)
    }
    ,
    ct.prototype.forward = function() {
        this.go(1)
    }
    ,
    ct.prototype.getMatchedComponents = function(e) {
        var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
        return t ? [].concat.apply([], t.matched.map(function(e) {
            return Object.keys(e.components).map(function(t) {
                return e.components[t]
            })
        })) : []
    }
    ,
    ct.prototype.resolve = function(e, t, n) {
        var r = X(e, t || this.history.current, n, this)
          , i = this.match(r, t)
          , a = i.redirectedFrom || i.fullPath;
        return {
            location: r,
            route: i,
            href: Pe(this.history.base, a, this.mode),
            normalizedTo: r,
            resolved: i
        }
    }
    ,
    ct.prototype.addRoutes = function(e) {
        this.matcher.addRoutes(e),
        this.history.current !== Ge && this.history.transitionTo(this.history.getCurrentLocation())
    }
    ,
    Object.defineProperties(ct.prototype, pt),
    ct.install = b,
    ct.version = "2.8.1",
    We && window.Vue && window.Vue.use(ct),
    t.a = ct
}
, , , , , , function(e, t) {
    function n(e, t) {
        var r = {
            name: e.name,
            path: e.path,
            hash: e.hash,
            query: e.query,
            params: e.params,
            fullPath: e.fullPath,
            meta: e.meta
        };
        return t && (r.from = n(t)),
        Object.freeze(r)
    }
    t.sync = function(e, t, r) {
        var i = (r || {}).moduleName || "route";
        e.registerModule(i, {
            namespaced: !0,
            state: n(t.currentRoute),
            mutations: {
                ROUTE_CHANGED: function(t, r) {
                    e.state[i] = n(r.to, r.from)
                }
            }
        });
        var a, o = !1, s = e.watch(function(e) {
            return e[i]
        }, function(e) {
            var n = e.fullPath;
            n !== a && (null != a && (o = !0,
            t.push(e)),
            a = n)
        }, {
            sync: !0
        }), l = t.afterEach(function(t, n) {
            if (o)
                return void (o = !1);
            a = t.fullPath,
            e.commit(i + "/ROUTE_CHANGED", {
                to: t,
                from: n
            })
        });
        return function() {
            null != l && l(),
            null != s && s(),
            e.unregisterModule(i)
        }
    }
}
, function(e, t, n) {
    !function(t, n) {
        e.exports = n()
    }(0, function() {
        ;
        function e(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                return n > -1 ? e.splice(n, 1) : void 0
            }
        }
        function t(e, t) {
            if (!e || !t)
                return e || {};
            if (e instanceof Object)
                for (var n in t)
                    e[n] = t[n];
            return e
        }
        function n(e, t) {
            for (var n = !1, r = 0, i = e.length; r < i; r++)
                if (t(e[r])) {
                    n = !0;
                    break
                }
            return n
        }
        function r(e, t) {
            if ("IMG" === e.tagName && e.getAttribute("data-srcset")) {
                var n = e.getAttribute("data-srcset")
                  , r = []
                  , i = e.parentNode
                  , a = i.offsetWidth * t
                  , o = void 0
                  , s = void 0
                  , l = void 0;
                n = n.trim().split(","),
                n.map(function(e) {
                    e = e.trim(),
                    o = e.lastIndexOf(" "),
                    -1 === o ? (s = e,
                    l = 999998) : (s = e.substr(0, o),
                    l = parseInt(e.substr(o + 1, e.length - o - 2), 10)),
                    r.push([l, s])
                }),
                r.sort(function(e, t) {
                    if (e[0] < t[0])
                        return -1;
                    if (e[0] > t[0])
                        return 1;
                    if (e[0] === t[0]) {
                        if (-1 !== t[1].indexOf(".webp", t[1].length - 5))
                            return 1;
                        if (-1 !== e[1].indexOf(".webp", e[1].length - 5))
                            return -1
                    }
                    return 0
                });
                for (var u = "", c = void 0, p = r.length, d = 0; d < p; d++)
                    if (c = r[d],
                    c[0] >= a) {
                        u = c[1];
                        break
                    }
                return u
            }
        }
        function i(e, t) {
            for (var n = void 0, r = 0, i = e.length; r < i; r++)
                if (t(e[r])) {
                    n = e[r];
                    break
                }
            return n
        }
        function a() {
            if (!d)
                return !1;
            var e = !0
              , t = document;
            try {
                var n = t.createElement("object");
                n.type = "image/webp",
                n.style.visibility = "hidden",
                n.innerHTML = "!",
                t.body.appendChild(n),
                e = !n.offsetWidth,
                t.body.removeChild(n)
            } catch (t) {
                e = !1
            }
            return e
        }
        function o(e, t) {
            var n = null
              , r = 0;
            return function() {
                if (!n) {
                    var i = Date.now() - r
                      , a = this
                      , o = arguments
                      , s = function() {
                        r = Date.now(),
                        n = !1,
                        e.apply(a, o)
                    };
                    i >= t ? s() : n = setTimeout(s, t)
                }
            }
        }
        function s(e) {
            return null !== e && "object" === (void 0 === e ? "undefined" : p(e))
        }
        function l(e) {
            if (!(e instanceof Object))
                return [];
            if (Object.keys)
                return Object.keys(e);
            var t = [];
            for (var n in e)
                e.hasOwnProperty(n) && t.push(n);
            return t
        }
        function u(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , d = "undefined" != typeof window
          , f = d && "IntersectionObserver"in window
          , h = {
            event: "event",
            observer: "observer"
        }
          , m = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return d && window.devicePixelRatio || e
        }
          , v = function() {
            if (d) {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }
        }()
          , g = {
            on: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                v ? e.addEventListener(t, n, {
                    capture: r,
                    passive: !0
                }) : e.addEventListener(t, n, r)
            },
            off: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.removeEventListener(t, n, r)
            }
        }
          , y = function(e, t, n) {
            var r = new Image;
            r.src = e.src,
            r.onload = function() {
                t({
                    naturalHeight: r.naturalHeight,
                    naturalWidth: r.naturalWidth,
                    src: r.src
                })
            }
            ,
            r.onerror = function(e) {
                n(e)
            }
        }
          , w = function(e, t) {
            return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }
          , b = function(e) {
            return w(e, "overflow") + w(e, "overflow-y") + w(e, "overflow-x")
        }
          , x = function(e) {
            if (d) {
                if (!(e instanceof HTMLElement))
                    return window;
                for (var t = e; t && t !== document.body && t !== document.documentElement && t.parentNode; ) {
                    if (/(scroll|auto)/.test(b(t)))
                        return t;
                    t = t.parentNode
                }
                return window
            }
        }
          , C = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , T = {}
          , _ = function() {
            function e(t) {
                var n = t.el
                  , r = t.src
                  , i = t.error
                  , a = t.loading
                  , o = t.bindType
                  , s = t.$parent
                  , l = t.options
                  , c = t.elRenderer;
                u(this, e),
                this.el = n,
                this.src = r,
                this.error = i,
                this.loading = a,
                this.bindType = o,
                this.attempt = 0,
                this.naturalHeight = 0,
                this.naturalWidth = 0,
                this.options = l,
                this.filter(),
                this.initState(),
                this.performanceData = {
                    init: Date.now(),
                    loadStart: null,
                    loadEnd: null
                },
                this.rect = n.getBoundingClientRect(),
                this.$parent = s,
                this.elRenderer = c,
                this.render("loading", !1)
            }
            return C(e, [{
                key: "initState",
                value: function() {
                    this.state = {
                        error: !1,
                        loaded: !1,
                        rendered: !1
                    }
                }
            }, {
                key: "record",
                value: function(e) {
                    this.performanceData[e] = Date.now()
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = e.src
                      , n = e.loading
                      , r = e.error
                      , i = this.src;
                    this.src = t,
                    this.loading = n,
                    this.error = r,
                    this.filter(),
                    i !== this.src && (this.attempt = 0,
                    this.initState())
                }
            }, {
                key: "getRect",
                value: function() {
                    this.rect = this.el.getBoundingClientRect()
                }
            }, {
                key: "checkInView",
                value: function() {
                    return this.getRect(),
                    this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0
                }
            }, {
                key: "filter",
                value: function() {
                    var e = this;
                    l(this.options.filter).map(function(t) {
                        e.options.filter[t](e, e.options)
                    })
                }
            }, {
                key: "renderLoading",
                value: function(e) {
                    var t = this;
                    y({
                        src: this.loading
                    }, function(n) {
                        t.render("loading", !1),
                        e()
                    })
                }
            }, {
                key: "load",
                value: function() {
                    var e = this;
                    return this.attempt > this.options.attempt - 1 && this.state.error ? void (this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times")) : this.state.loaded || T[this.src] ? this.render("loaded", !0) : void this.renderLoading(function() {
                        e.attempt++,
                        e.record("loadStart"),
                        y({
                            src: e.src
                        }, function(t) {
                            e.naturalHeight = t.naturalHeight,
                            e.naturalWidth = t.naturalWidth,
                            e.state.loaded = !0,
                            e.state.error = !1,
                            e.record("loadEnd"),
                            e.render("loaded", !1),
                            T[e.src] = 1
                        }, function(t) {
                            e.state.error = !0,
                            e.state.loaded = !1,
                            e.render("error", !1)
                        })
                    })
                }
            }, {
                key: "render",
                value: function(e, t) {
                    this.elRenderer(this, e, t)
                }
            }, {
                key: "performance",
                value: function() {
                    var e = "loading"
                      , t = 0;
                    return this.state.loaded && (e = "loaded",
                    t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3),
                    this.state.error && (e = "error"),
                    {
                        src: this.src,
                        state: e,
                        time: t
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.el = null,
                    this.src = null,
                    this.error = null,
                    this.loading = null,
                    this.bindType = null,
                    this.attempt = 0
                }
            }]),
            e
        }()
          , S = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , E = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          , k = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"]
          , A = {
            rootMargin: "0px",
            threshold: 0
        }
          , M = function(l) {
            return function() {
                function u(e) {
                    var t = e.preLoad
                      , n = e.error
                      , r = e.throttleWait
                      , i = e.preLoadTop
                      , s = e.dispatchEvent
                      , l = e.loading
                      , p = e.attempt
                      , d = e.silent
                      , f = e.scale
                      , v = e.listenEvents
                      , g = (e.hasbind,
                    e.filter)
                      , y = e.adapter
                      , w = e.observer
                      , b = e.observerOptions;
                    c(this, u),
                    this.version = "1.1.3",
                    this.mode = h.event,
                    this.ListenerQueue = [],
                    this.TargetIndex = 0,
                    this.TargetQueue = [],
                    this.options = {
                        silent: d || !0,
                        dispatchEvent: !!s,
                        throttleWait: r || 200,
                        preLoad: t || 1.3,
                        preLoadTop: i || 0,
                        error: n || E,
                        loading: l || E,
                        attempt: p || 3,
                        scale: f || m(f),
                        ListenEvents: v || k,
                        hasbind: !1,
                        supportWebp: a(),
                        filter: g || {},
                        adapter: y || {},
                        observer: !!w,
                        observerOptions: b || A
                    },
                    this._initEvent(),
                    this.lazyLoadHandler = o(this._lazyLoadHandler.bind(this), this.options.throttleWait),
                    this.setMode(this.options.observer ? h.observer : h.event)
                }
                return S(u, [{
                    key: "config",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t(this.options, e)
                    }
                }, {
                    key: "performance",
                    value: function() {
                        var e = [];
                        return this.ListenerQueue.map(function(t) {
                            e.push(t.performance())
                        }),
                        e
                    }
                }, {
                    key: "addLazyBox",
                    value: function(e) {
                        this.ListenerQueue.push(e),
                        d && (this._addListenerTarget(window),
                        this._observer && this._observer.observe(e.el),
                        e.$el && e.$el.parentNode && this._addListenerTarget(e.$el.parentNode))
                    }
                }, {
                    key: "add",
                    value: function(e, t, i) {
                        var a = this;
                        if (n(this.ListenerQueue, function(t) {
                            return t.el === e
                        }))
                            return this.update(e, t),
                            l.nextTick(this.lazyLoadHandler);
                        var o = this._valueFormatter(t.value)
                          , s = o.src
                          , u = o.loading
                          , c = o.error;
                        l.nextTick(function() {
                            s = r(e, a.options.scale) || s,
                            a._observer && a._observer.observe(e);
                            var n = Object.keys(t.modifiers)[0]
                              , o = void 0;
                            n && (o = i.context.$refs[n],
                            o = o ? o.$el || o : document.getElementById(n)),
                            o || (o = x(e));
                            var p = new _({
                                bindType: t.arg,
                                $parent: o,
                                el: e,
                                loading: u,
                                error: c,
                                src: s,
                                elRenderer: a._elRenderer.bind(a),
                                options: a.options
                            });
                            a.ListenerQueue.push(p),
                            d && (a._addListenerTarget(window),
                            a._addListenerTarget(o)),
                            a.lazyLoadHandler(),
                            l.nextTick(function() {
                                return a.lazyLoadHandler()
                            })
                        })
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var n = this
                          , a = this._valueFormatter(t.value)
                          , o = a.src
                          , s = a.loading
                          , u = a.error;
                        o = r(e, this.options.scale) || o;
                        var c = i(this.ListenerQueue, function(t) {
                            return t.el === e
                        });
                        c && c.update({
                            src: o,
                            loading: s,
                            error: u
                        }),
                        this._observer && this._observer.observe(e),
                        this.lazyLoadHandler(),
                        l.nextTick(function() {
                            return n.lazyLoadHandler()
                        })
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        if (t) {
                            this._observer && this._observer.unobserve(t);
                            var n = i(this.ListenerQueue, function(e) {
                                return e.el === t
                            });
                            n && (this._removeListenerTarget(n.$parent),
                            this._removeListenerTarget(window),
                            e(this.ListenerQueue, n) && n.destroy())
                        }
                    }
                }, {
                    key: "removeComponent",
                    value: function(t) {
                        t && (e(this.ListenerQueue, t),
                        this._observer && this._observer.unobserve(t.el),
                        t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode),
                        this._removeListenerTarget(window))
                    }
                }, {
                    key: "setMode",
                    value: function(e) {
                        var t = this;
                        f || e !== h.observer || (e = h.event),
                        this.mode = e,
                        e === h.event ? (this._observer && (this.ListenerQueue.forEach(function(e) {
                            t._observer.unobserve(e.el)
                        }),
                        this._observer = null),
                        this.TargetQueue.forEach(function(e) {
                            t._initListen(e.el, !0)
                        })) : (this.TargetQueue.forEach(function(e) {
                            t._initListen(e.el, !1)
                        }),
                        this._initIntersectionObserver())
                    }
                }, {
                    key: "_addListenerTarget",
                    value: function(e) {
                        if (e) {
                            var t = i(this.TargetQueue, function(t) {
                                return t.el === e
                            });
                            return t ? t.childrenCount++ : (t = {
                                el: e,
                                id: ++this.TargetIndex,
                                childrenCount: 1,
                                listened: !0
                            },
                            this.mode === h.event && this._initListen(t.el, !0),
                            this.TargetQueue.push(t)),
                            this.TargetIndex
                        }
                    }
                }, {
                    key: "_removeListenerTarget",
                    value: function(e) {
                        var t = this;
                        this.TargetQueue.forEach(function(n, r) {
                            n.el === e && (--n.childrenCount || (t._initListen(n.el, !1),
                            t.TargetQueue.splice(r, 1),
                            n = null))
                        })
                    }
                }, {
                    key: "_initListen",
                    value: function(e, t) {
                        var n = this;
                        this.options.ListenEvents.forEach(function(r) {
                            return g[t ? "on" : "off"](e, r, n.lazyLoadHandler)
                        })
                    }
                }, {
                    key: "_initEvent",
                    value: function() {
                        var t = this;
                        this.Event = {
                            listeners: {
                                loading: [],
                                loaded: [],
                                error: []
                            }
                        },
                        this.$on = function(e, n) {
                            t.Event.listeners[e].push(n)
                        }
                        ,
                        this.$once = function(e, n) {
                            function r() {
                                i.$off(e, r),
                                n.apply(i, arguments)
                            }
                            var i = t;
                            t.$on(e, r)
                        }
                        ,
                        this.$off = function(n, r) {
                            return r ? void e(t.Event.listeners[n], r) : void (t.Event.listeners[n] = [])
                        }
                        ,
                        this.$emit = function(e, n, r) {
                            t.Event.listeners[e].forEach(function(e) {
                                return e(n, r)
                            })
                        }
                    }
                }, {
                    key: "_lazyLoadHandler",
                    value: function() {
                        var e = !1;
                        this.ListenerQueue.forEach(function(t) {
                            t.state.loaded || (e = t.checkInView()) && t.load()
                        })
                    }
                }, {
                    key: "_initIntersectionObserver",
                    value: function() {
                        var e = this;
                        f && (this._observer = new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),
                        this.ListenerQueue.length && this.ListenerQueue.forEach(function(t) {
                            e._observer.observe(t.el)
                        }))
                    }
                }, {
                    key: "_observerHandler",
                    value: function(e, t) {
                        var n = this;
                        e.forEach(function(e) {
                            e.isIntersecting && n.ListenerQueue.forEach(function(t) {
                                if (t.el === e.target) {
                                    if (t.state.loaded)
                                        return n._observer.unobserve(t.el);
                                    t.load()
                                }
                            })
                        })
                    }
                }, {
                    key: "_elRenderer",
                    value: function(e, t, n) {
                        if (e.el) {
                            var r = e.el
                              , i = e.bindType
                              , a = void 0;
                            switch (t) {
                            case "loading":
                                a = e.loading;
                                break;
                            case "error":
                                a = e.error;
                                break;
                            default:
                                a = e.src
                            }
                            if (i ? r.style[i] = "url(" + a + ")" : r.getAttribute("src") !== a && r.setAttribute("src", a),
                            r.setAttribute("lazy", t),
                            this.$emit(t, e, n),
                            this.options.adapter[t] && this.options.adapter[t](e, this.options),
                            this.options.dispatchEvent) {
                                var o = new CustomEvent(t,{
                                    detail: e
                                });
                                r.dispatchEvent(o)
                            }
                        }
                    }
                }, {
                    key: "_valueFormatter",
                    value: function(e) {
                        var t = e
                          , n = this.options.loading
                          , r = this.options.error;
                        return s(e) && (e.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + e),
                        t = e.src,
                        n = e.loading || this.options.loading,
                        r = e.error || this.options.error),
                        {
                            src: t,
                            loading: n,
                            error: r
                        }
                    }
                }]),
                u
            }()
        }
          , z = function(e) {
            return {
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e) {
                    return !1 === this.show ? e(this.tag) : e(this.tag, null, this.$slots.default)
                },
                data: function() {
                    return {
                        el: null,
                        state: {
                            loaded: !1
                        },
                        rect: {},
                        show: !1
                    }
                },
                mounted: function() {
                    this.el = this.$el,
                    e.addLazyBox(this),
                    e.lazyLoadHandler()
                },
                beforeDestroy: function() {
                    e.removeComponent(this)
                },
                methods: {
                    getRect: function() {
                        this.rect = this.$el.getBoundingClientRect()
                    },
                    checkInView: function() {
                        return this.getRect(),
                        d && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0
                    },
                    load: function() {
                        this.show = !0,
                        this.state.loaded = !0,
                        this.$emit("show", this)
                    }
                }
            }
        };
        return {
            install: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = M(e)
                  , i = new r(n)
                  , a = "2" === e.version.split(".")[0];
                e.prototype.$Lazyload = i,
                n.lazyComponent && e.component("lazy-component", z(i)),
                a ? e.directive("lazy", {
                    bind: i.add.bind(i),
                    update: i.update.bind(i),
                    componentUpdated: i.lazyLoadHandler.bind(i),
                    unbind: i.remove.bind(i)
                }) : e.directive("lazy", {
                    bind: i.lazyLoadHandler.bind(i),
                    update: function(e, n) {
                        t(this.vm.$refs, this.vm.$els),
                        i.add(this.el, {
                            modifiers: this.modifiers || {},
                            arg: this.arg,
                            value: e,
                            oldValue: n
                        }, {
                            context: this.vm
                        })
                    },
                    unbind: function() {
                        i.remove(this.el)
                    }
                })
            }
        }
    })
}
, , , , function(e, t, n) {
    !function() {
        ;
        var e, t = function(r, i) {
            function a(e) {
                return Math.floor(e)
            }
            function o() {
                var e = x.params.autoplay
                  , t = x.slides.eq(x.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay),
                x.autoplayTimeoutId = setTimeout(function() {
                    x.params.loop ? (x.fixLoop(),
                    x._slideNext(),
                    x.emit("onAutoplay", x)) : x.isEnd ? i.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0),
                    x.emit("onAutoplay", x)) : (x._slideNext(),
                    x.emit("onAutoplay", x))
                }, e)
            }
            function s(t, n) {
                var r = e(t.target);
                if (!r.is(n))
                    if ("string" == typeof n)
                        r = r.parents(n);
                    else if (n.nodeType) {
                        var i;
                        return r.parents().each(function(e, t) {
                            t === n && (i = n)
                        }),
                        i ? n : void 0
                    }
                if (0 !== r.length)
                    return r[0]
            }
            function l(e, t) {
                t = t || {};
                var n = window.MutationObserver || window.WebkitMutationObserver
                  , r = new n(function(e) {
                    e.forEach(function(e) {
                        x.onResize(!0),
                        x.emit("onObserverUpdate", x, e)
                    })
                }
                );
                r.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }),
                x.observers.push(r)
            }
            function u(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t))
                    return !1;
                if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t))
                    return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var n = !1;
                        if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length)
                            return;
                        var r = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        }
                          , i = window.innerWidth
                          , a = window.innerHeight
                          , o = x.container.offset();
                        x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                        for (var s = [[o.left, o.top], [o.left + x.width, o.top], [o.left, o.top + x.height], [o.left + x.width, o.top + x.height]], l = 0; l < s.length; l++) {
                            var u = s[l];
                            u[0] >= r.left && u[0] <= r.left + i && u[1] >= r.top && u[1] <= r.top + a && (n = !0)
                        }
                        if (!n)
                            return
                    }
                    x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(),
                    (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    40 === t && x.slideNext(),
                    38 === t && x.slidePrev()),
                    x.emit("onKeyPress", x, t)
                }
            }
            function c(e) {
                var t = 0
                  , n = 0
                  , r = 0
                  , i = 0;
                return "detail"in e && (n = e.detail),
                "wheelDelta"in e && (n = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
                n = 0),
                r = 10 * t,
                i = 10 * n,
                "deltaY"in e && (i = e.deltaY),
                "deltaX"in e && (r = e.deltaX),
                (r || i) && e.deltaMode && (1 === e.deltaMode ? (r *= 40,
                i *= 40) : (r *= 800,
                i *= 800)),
                r && !t && (t = r < 1 ? -1 : 1),
                i && !n && (n = i < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: n,
                    pixelX: r,
                    pixelY: i
                }
            }
            function p(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0
                  , n = x.rtl ? -1 : 1
                  , r = c(e);
                if (x.params.mousewheelForceToAxis)
                    if (x.isHorizontal()) {
                        if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY)))
                            return;
                        t = r.pixelX * n
                    } else {
                        if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX)))
                            return;
                        t = r.pixelY
                    }
                else
                    t = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * n : -r.pixelY;
                if (0 !== t) {
                    if (x.params.mousewheelInvert && (t = -t),
                    x.params.freeMode) {
                        var i = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity
                          , a = x.isBeginning
                          , o = x.isEnd;
                        if (i >= x.minTranslate() && (i = x.minTranslate()),
                        i <= x.maxTranslate() && (i = x.maxTranslate()),
                        x.setWrapperTransition(0),
                        x.setWrapperTranslate(i),
                        x.updateProgress(),
                        x.updateActiveIndex(),
                        (!a && x.isBeginning || !o && x.isEnd) && x.updateClasses(),
                        x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout),
                        x.mousewheel.timeout = setTimeout(function() {
                            x.slideReset()
                        }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(),
                        x.emit("onScroll", x, e),
                        x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(),
                        0 === i || i === x.maxTranslate())
                            return
                    } else {
                        if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)
                            if (t < 0)
                                if (x.isEnd && !x.params.loop || x.animating) {
                                    if (x.params.mousewheelReleaseOnEdges)
                                        return !0
                                } else
                                    x.slideNext(),
                                    x.emit("onScroll", x, e);
                            else if (x.isBeginning && !x.params.loop || x.animating) {
                                if (x.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                x.slidePrev(),
                                x.emit("onScroll", x, e);
                        x.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    !1
                }
            }
            function d(t, n) {
                t = e(t);
                var r, i, a, o = x.rtl ? -1 : 1;
                r = t.attr("data-swiper-parallax") || "0",
                i = t.attr("data-swiper-parallax-x"),
                a = t.attr("data-swiper-parallax-y"),
                i || a ? (i = i || "0",
                a = a || "0") : x.isHorizontal() ? (i = r,
                a = "0") : (a = r,
                i = "0"),
                i = i.indexOf("%") >= 0 ? parseInt(i, 10) * n * o + "%" : i * n * o + "px",
                a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n + "%" : a * n + "px",
                t.transform("translate3d(" + i + ", " + a + ",0px)")
            }
            function f(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                e
            }
            if (!(this instanceof t))
                return new t(r,i);
            var h = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            }
              , m = i && i.virtualTranslate;
            i = i || {};
            var v = {};
            for (var g in i)
                if ("object" != typeof i[g] || null === i[g] || (i[g].nodeType || i[g] === window || i[g] === document || void 0 !== n && i[g]instanceof n || "undefined" != typeof jQuery && i[g]instanceof jQuery))
                    v[g] = i[g];
                else {
                    v[g] = {};
                    for (var y in i[g])
                        v[g][y] = i[g][y]
                }
            for (var w in h)
                if (void 0 === i[w])
                    i[w] = h[w];
                else if ("object" == typeof i[w])
                    for (var b in h[w])
                        void 0 === i[w][b] && (i[w][b] = h[w][b]);
            var x = this;
            if (x.params = i,
            x.originalParams = v,
            x.classNames = [],
            void 0 !== e && void 0 !== n && (e = n),
            (void 0 !== e || (e = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n)) && (x.$ = e,
            x.currentBreakpoint = void 0,
            x.getActiveBreakpoint = function() {
                if (!x.params.breakpoints)
                    return !1;
                var e, t = !1, n = [];
                for (e in x.params.breakpoints)
                    x.params.breakpoints.hasOwnProperty(e) && n.push(e);
                n.sort(function(e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var r = 0; r < n.length; r++)
                    (e = n[r]) >= window.innerWidth && !t && (t = e);
                return t || "max"
            }
            ,
            x.setBreakpoint = function() {
                var e = x.getActiveBreakpoint();
                if (e && x.currentBreakpoint !== e) {
                    var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams
                      , n = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                    for (var r in t)
                        x.params[r] = t[r];
                    x.currentBreakpoint = e,
                    n && x.destroyLoop && x.reLoop(!0)
                }
            }
            ,
            x.params.breakpoints && x.setBreakpoint(),
            x.container = e(r),
            0 !== x.container.length)) {
                if (x.container.length > 1) {
                    var C = [];
                    return x.container.each(function() {
                        C.push(new t(this,i))
                    }),
                    C
                }
                x.container[0].swiper = x,
                x.container.data("swiper", x),
                x.classNames.push(x.params.containerModifierClass + x.params.direction),
                x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"),
                x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"),
                x.params.slidesPerColumn = 1),
                x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"),
                (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0),
                x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
                ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0,
                x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"),
                "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect),
                "cube" === x.params.effect && (x.params.resistanceRatio = 0,
                x.params.slidesPerView = 1,
                x.params.slidesPerColumn = 1,
                x.params.slidesPerGroup = 1,
                x.params.centeredSlides = !1,
                x.params.spaceBetween = 0,
                x.params.virtualTranslate = !0),
                "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1,
                x.params.slidesPerColumn = 1,
                x.params.slidesPerGroup = 1,
                x.params.watchSlidesProgress = !0,
                x.params.spaceBetween = 0,
                void 0 === m && (x.params.virtualTranslate = !0)),
                x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
                x.wrapper = x.container.children("." + x.params.wrapperClass),
                x.params.pagination && (x.paginationContainer = e(x.params.pagination),
                x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)),
                "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1,
                x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)),
                (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton),
                x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))),
                x.params.prevButton && (x.prevButton = e(x.params.prevButton),
                x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))),
                x.isHorizontal = function() {
                    return "horizontal" === x.params.direction
                }
                ,
                x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")),
                x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"),
                x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
                x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"),
                x.device.android && x.classNames.push(x.params.containerModifierClass + "android"),
                x.container.addClass(x.classNames.join(" ")),
                x.translate = 0,
                x.progress = 0,
                x.velocity = 0,
                x.lockSwipeToNext = function() {
                    x.params.allowSwipeToNext = !1,
                    !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor()
                }
                ,
                x.lockSwipeToPrev = function() {
                    x.params.allowSwipeToPrev = !1,
                    !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor()
                }
                ,
                x.lockSwipes = function() {
                    x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1,
                    x.params.grabCursor && x.unsetGrabCursor()
                }
                ,
                x.unlockSwipeToNext = function() {
                    x.params.allowSwipeToNext = !0,
                    !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor()
                }
                ,
                x.unlockSwipeToPrev = function() {
                    x.params.allowSwipeToPrev = !0,
                    !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor()
                }
                ,
                x.unlockSwipes = function() {
                    x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0,
                    x.params.grabCursor && x.setGrabCursor()
                }
                ,
                x.setGrabCursor = function(e) {
                    x.container[0].style.cursor = "move",
                    x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    x.container[0].style.cursor = e ? "grabbing" : "grab"
                }
                ,
                x.unsetGrabCursor = function() {
                    x.container[0].style.cursor = ""
                }
                ,
                x.params.grabCursor && x.setGrabCursor(),
                x.imagesToLoad = [],
                x.imagesLoaded = 0,
                x.loadImage = function(e, t, n, r, i, a) {
                    function o() {
                        a && a()
                    }
                    var s;
                    e.complete && i ? o() : t ? (s = new window.Image,
                    s.onload = o,
                    s.onerror = o,
                    r && (s.sizes = r),
                    n && (s.srcset = n),
                    t && (s.src = t)) : o()
                }
                ,
                x.preloadImages = function() {
                    function e() {
                        void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++,
                        x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(),
                        x.emit("onImagesReady", x)))
                    }
                    x.imagesToLoad = x.container.find("img");
                    for (var t = 0; t < x.imagesToLoad.length; t++)
                        x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e)
                }
                ,
                x.autoplayTimeoutId = void 0,
                x.autoplaying = !1,
                x.autoplayPaused = !1,
                x.startAutoplay = function() {
                    return void 0 === x.autoplayTimeoutId && (!!x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0,
                    x.emit("onAutoplayStart", x),
                    void o())))
                }
                ,
                x.stopAutoplay = function(e) {
                    x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                    x.autoplaying = !1,
                    x.autoplayTimeoutId = void 0,
                    x.emit("onAutoplayStop", x))
                }
                ,
                x.pauseAutoplay = function(e) {
                    x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                    x.autoplayPaused = !0,
                    0 === e ? (x.autoplayPaused = !1,
                    o()) : x.wrapper.transitionEnd(function() {
                        x && (x.autoplayPaused = !1,
                        x.autoplaying ? o() : x.stopAutoplay())
                    }))
                }
                ,
                x.minTranslate = function() {
                    return -x.snapGrid[0]
                }
                ,
                x.maxTranslate = function() {
                    return -x.snapGrid[x.snapGrid.length - 1]
                }
                ,
                x.updateAutoHeight = function() {
                    var e, t = [], n = 0;
                    if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                            var r = x.activeIndex + e;
                            if (r > x.slides.length)
                                break;
                            t.push(x.slides.eq(r)[0])
                        }
                    else
                        t.push(x.slides.eq(x.activeIndex)[0]);
                    for (e = 0; e < t.length; e++)
                        if (void 0 !== t[e]) {
                            var i = t[e].offsetHeight;
                            n = i > n ? i : n
                        }
                    n && x.wrapper.css("height", n + "px")
                }
                ,
                x.updateContainerSize = function() {
                    var e, t;
                    e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth,
                    t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight,
                    0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10),
                    t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10),
                    x.width = e,
                    x.height = t,
                    x.size = x.isHorizontal() ? x.width : x.height)
                }
                ,
                x.updateSlidesSize = function() {
                    x.slides = x.wrapper.children("." + x.params.slideClass),
                    x.snapGrid = [],
                    x.slidesGrid = [],
                    x.slidesSizesGrid = [];
                    var e, t = x.params.spaceBetween, n = -x.params.slidesOffsetBefore, r = 0, i = 0;
                    if (void 0 !== x.size) {
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size),
                        x.virtualSize = -t,
                        x.rtl ? x.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : x.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var o;
                        x.params.slidesPerColumn > 1 && (o = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn,
                        "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (o = Math.max(o, x.params.slidesPerView * x.params.slidesPerColumn)));
                        var s, l = x.params.slidesPerColumn, u = o / l, c = u - (x.params.slidesPerColumn * u - x.slides.length);
                        for (e = 0; e < x.slides.length; e++) {
                            s = 0;
                            var p = x.slides.eq(e);
                            if (x.params.slidesPerColumn > 1) {
                                var d, f, h;
                                "column" === x.params.slidesPerColumnFill ? (f = Math.floor(e / l),
                                h = e - f * l,
                                (f > c || f === c && h === l - 1) && ++h >= l && (h = 0,
                                f++),
                                d = f + h * o / l,
                                p.css({
                                    "-webkit-box-ordinal-group": d,
                                    "-moz-box-ordinal-group": d,
                                    "-ms-flex-order": d,
                                    "-webkit-order": d,
                                    order: d
                                })) : (h = Math.floor(e / u),
                                f = e - h * u),
                                p.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", f).attr("data-swiper-row", h)
                            }
                            "none" !== p.css("display") && ("auto" === x.params.slidesPerView ? (s = x.isHorizontal() ? p.outerWidth(!0) : p.outerHeight(!0),
                            x.params.roundLengths && (s = a(s))) : (s = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView,
                            x.params.roundLengths && (s = a(s)),
                            x.isHorizontal() ? x.slides[e].style.width = s + "px" : x.slides[e].style.height = s + "px"),
                            x.slides[e].swiperSlideSize = s,
                            x.slidesSizesGrid.push(s),
                            x.params.centeredSlides ? (n = n + s / 2 + r / 2 + t,
                            0 === r && 0 !== e && (n = n - x.size / 2 - t),
                            0 === e && (n = n - x.size / 2 - t),
                            Math.abs(n) < .001 && (n = 0),
                            i % x.params.slidesPerGroup == 0 && x.snapGrid.push(n),
                            x.slidesGrid.push(n)) : (i % x.params.slidesPerGroup == 0 && x.snapGrid.push(n),
                            x.slidesGrid.push(n),
                            n = n + s + t),
                            x.virtualSize += s + t,
                            r = s,
                            i++)
                        }
                        x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                        var m;
                        if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px"
                        }),
                        x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px"
                        }) : x.wrapper.css({
                            height: x.virtualSize + x.params.spaceBetween + "px"
                        })),
                        x.params.slidesPerColumn > 1 && (x.virtualSize = (s + x.params.spaceBetween) * o,
                        x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween,
                        x.isHorizontal() ? x.wrapper.css({
                            width: x.virtualSize + x.params.spaceBetween + "px"
                        }) : x.wrapper.css({
                            height: x.virtualSize + x.params.spaceBetween + "px"
                        }),
                        x.params.centeredSlides)) {
                            for (m = [],
                            e = 0; e < x.snapGrid.length; e++)
                                x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                            x.snapGrid = m
                        }
                        if (!x.params.centeredSlides) {
                            for (m = [],
                            e = 0; e < x.snapGrid.length; e++)
                                x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                            x.snapGrid = m,
                            Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                        }
                        0 === x.snapGrid.length && (x.snapGrid = [0]),
                        0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                            marginLeft: t + "px"
                        }) : x.slides.css({
                            marginRight: t + "px"
                        }) : x.slides.css({
                            marginBottom: t + "px"
                        })),
                        x.params.watchSlidesProgress && x.updateSlidesOffset()
                    }
                }
                ,
                x.updateSlidesOffset = function() {
                    for (var e = 0; e < x.slides.length; e++)
                        x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
                }
                ,
                x.currentSlidesPerView = function() {
                    var e, t, n = 1;
                    if (x.params.centeredSlides) {
                        var r, i = x.slides[x.activeIndex].swiperSlideSize;
                        for (e = x.activeIndex + 1; e < x.slides.length; e++)
                            x.slides[e] && !r && (i += x.slides[e].swiperSlideSize,
                            n++,
                            i > x.size && (r = !0));
                        for (t = x.activeIndex - 1; t >= 0; t--)
                            x.slides[t] && !r && (i += x.slides[t].swiperSlideSize,
                            n++,
                            i > x.size && (r = !0))
                    } else
                        for (e = x.activeIndex + 1; e < x.slides.length; e++)
                            x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && n++;
                    return n
                }
                ,
                x.updateSlidesProgress = function(e) {
                    if (void 0 === e && (e = x.translate || 0),
                    0 !== x.slides.length) {
                        void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                        var t = -e;
                        x.rtl && (t = e),
                        x.slides.removeClass(x.params.slideVisibleClass);
                        for (var n = 0; n < x.slides.length; n++) {
                            var r = x.slides[n]
                              , i = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + x.params.spaceBetween);
                            if (x.params.watchSlidesVisibility) {
                                var a = -(t - r.swiperSlideOffset)
                                  , o = a + x.slidesSizesGrid[n];
                                (a >= 0 && a < x.size || o > 0 && o <= x.size || a <= 0 && o >= x.size) && x.slides.eq(n).addClass(x.params.slideVisibleClass)
                            }
                            r.progress = x.rtl ? -i : i
                        }
                    }
                }
                ,
                x.updateProgress = function(e) {
                    void 0 === e && (e = x.translate || 0);
                    var t = x.maxTranslate() - x.minTranslate()
                      , n = x.isBeginning
                      , r = x.isEnd;
                    0 === t ? (x.progress = 0,
                    x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t,
                    x.isBeginning = x.progress <= 0,
                    x.isEnd = x.progress >= 1),
                    x.isBeginning && !n && x.emit("onReachBeginning", x),
                    x.isEnd && !r && x.emit("onReachEnd", x),
                    x.params.watchSlidesProgress && x.updateSlidesProgress(e),
                    x.emit("onProgress", x, x.progress)
                }
                ,
                x.updateActiveIndex = function() {
                    var e, t, n, r = x.rtl ? x.translate : -x.translate;
                    for (t = 0; t < x.slidesGrid.length; t++)
                        void 0 !== x.slidesGrid[t + 1] ? r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] && (e = t + 1) : r >= x.slidesGrid[t] && (e = t);
                    x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                    n = Math.floor(e / x.params.slidesPerGroup),
                    n >= x.snapGrid.length && (n = x.snapGrid.length - 1),
                    e !== x.activeIndex && (x.snapIndex = n,
                    x.previousIndex = x.activeIndex,
                    x.activeIndex = e,
                    x.updateClasses(),
                    x.updateRealIndex())
                }
                ,
                x.updateRealIndex = function() {
                    x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
                }
                ,
                x.updateClasses = function() {
                    x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                    var t = x.slides.eq(x.activeIndex);
                    t.addClass(x.params.slideActiveClass),
                    i.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                    var n = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                    x.params.loop && 0 === n.length && (n = x.slides.eq(0),
                    n.addClass(x.params.slideNextClass));
                    var r = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                    if (x.params.loop && 0 === r.length && (r = x.slides.eq(-1),
                    r.addClass(x.params.slidePrevClass)),
                    i.loop && (n.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass),
                    r.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)),
                    x.paginationContainer && x.paginationContainer.length > 0) {
                        var a, o = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                        if (x.params.loop ? (a = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup),
                        a > x.slides.length - 1 - 2 * x.loopedSlides && (a -= x.slides.length - 2 * x.loopedSlides),
                        a > o - 1 && (a -= o),
                        a < 0 && "bullets" !== x.params.paginationType && (a = o + a)) : a = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0,
                        "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass),
                        x.paginationContainer.length > 1 ? x.bullets.each(function() {
                            e(this).index() === a && e(this).addClass(x.params.bulletActiveClass)
                        }) : x.bullets.eq(a).addClass(x.params.bulletActiveClass)),
                        "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(a + 1),
                        x.paginationContainer.find("." + x.params.paginationTotalClass).text(o)),
                        "progress" === x.params.paginationType) {
                            var s = (a + 1) / o
                              , l = s
                              , u = 1;
                            x.isHorizontal() || (u = s,
                            l = 1),
                            x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")").transition(x.params.speed)
                        }
                        "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, a + 1, o)),
                        x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                    }
                    x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass),
                    x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass),
                    x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))),
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass),
                    x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass),
                    x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
                }
                ,
                x.updatePagination = function() {
                    if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === x.params.paginationType) {
                            for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, n = 0; n < t; n++)
                                x.params.paginationBulletRender ? e += x.params.paginationBulletRender(x, n, x.params.bulletClass) : e += "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                            x.paginationContainer.html(e),
                            x.bullets = x.paginationContainer.find("." + x.params.bulletClass),
                            x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                        }
                        "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>',
                        x.paginationContainer.html(e)),
                        "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>',
                        x.paginationContainer.html(e)),
                        "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                    }
                }
                ,
                x.update = function(e) {
                    function t() {
                        x.rtl,
                        x.translate;
                        n = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()),
                        x.setWrapperTranslate(n),
                        x.updateActiveIndex(),
                        x.updateClasses()
                    }
                    if (x) {
                        x.updateContainerSize(),
                        x.updateSlidesSize(),
                        x.updateProgress(),
                        x.updatePagination(),
                        x.updateClasses(),
                        x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                        var n;
                        if (e) {
                            x.controller && x.controller.spline && (x.controller.spline = void 0),
                            x.params.freeMode ? (t(),
                            x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t()
                        } else
                            x.params.autoHeight && x.updateAutoHeight()
                    }
                }
                ,
                x.onResize = function(e) {
                    x.params.onBeforeResize && x.params.onBeforeResize(x),
                    x.params.breakpoints && x.setBreakpoint();
                    var t = x.params.allowSwipeToPrev
                      , n = x.params.allowSwipeToNext;
                    x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0,
                    x.updateContainerSize(),
                    x.updateSlidesSize(),
                    ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(),
                    x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                    x.controller && x.controller.spline && (x.controller.spline = void 0);
                    var r = !1;
                    if (x.params.freeMode) {
                        var i = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                        x.setWrapperTranslate(i),
                        x.updateActiveIndex(),
                        x.updateClasses(),
                        x.params.autoHeight && x.updateAutoHeight()
                    } else
                        x.updateClasses(),
                        r = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                    x.params.lazyLoading && !r && x.lazy && x.lazy.load(),
                    x.params.allowSwipeToPrev = t,
                    x.params.allowSwipeToNext = n,
                    x.params.onAfterResize && x.params.onAfterResize(x)
                }
                ,
                x.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }),
                x.touchEvents = {
                    start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                    move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                    end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
                },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction),
                x.initEvents = function(e) {
                    var t = e ? "off" : "on"
                      , n = e ? "removeEventListener" : "addEventListener"
                      , r = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0]
                      , a = x.support.touch ? r : document
                      , o = !!x.params.nested;
                    if (x.browser.ie)
                        r[n](x.touchEvents.start, x.onTouchStart, !1),
                        a[n](x.touchEvents.move, x.onTouchMove, o),
                        a[n](x.touchEvents.end, x.onTouchEnd, !1);
                    else {
                        if (x.support.touch) {
                            var s = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r[n](x.touchEvents.start, x.onTouchStart, s),
                            r[n](x.touchEvents.move, x.onTouchMove, o),
                            r[n](x.touchEvents.end, x.onTouchEnd, s)
                        }
                        (i.simulateTouch && !x.device.ios && !x.device.android || i.simulateTouch && !x.support.touch && x.device.ios) && (r[n]("mousedown", x.onTouchStart, !1),
                        document[n]("mousemove", x.onTouchMove, o),
                        document[n]("mouseup", x.onTouchEnd, !1))
                    }
                    window[n]("resize", x.onResize),
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext),
                    x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)),
                    x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev),
                    x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)),
                    x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex),
                    x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)),
                    (x.params.preventClicks || x.params.preventClicksPropagation) && r[n]("click", x.preventClicks, !0)
                }
                ,
                x.attachEvents = function() {
                    x.initEvents()
                }
                ,
                x.detachEvents = function() {
                    x.initEvents(!0)
                }
                ,
                x.allowClick = !0,
                x.preventClicks = function(e) {
                    x.allowClick || (x.params.preventClicks && e.preventDefault(),
                    x.params.preventClicksPropagation && x.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
                }
                ,
                x.onClickNext = function(e) {
                    e.preventDefault(),
                    x.isEnd && !x.params.loop || x.slideNext()
                }
                ,
                x.onClickPrev = function(e) {
                    e.preventDefault(),
                    x.isBeginning && !x.params.loop || x.slidePrev()
                }
                ,
                x.onClickIndex = function(t) {
                    t.preventDefault();
                    var n = e(this).index() * x.params.slidesPerGroup;
                    x.params.loop && (n += x.loopedSlides),
                    x.slideTo(n)
                }
                ,
                x.updateClickedSlide = function(t) {
                    var n = s(t, "." + x.params.slideClass)
                      , r = !1;
                    if (n)
                        for (var i = 0; i < x.slides.length; i++)
                            x.slides[i] === n && (r = !0);
                    if (!n || !r)
                        return x.clickedSlide = void 0,
                        void (x.clickedIndex = void 0);
                    if (x.clickedSlide = n,
                    x.clickedIndex = e(n).index(),
                    x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                        var a, o = x.clickedIndex, l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                        if (x.params.loop) {
                            if (x.animating)
                                return;
                            a = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10),
                            x.params.centeredSlides ? o < x.loopedSlides - l / 2 || o > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(),
                            o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                            setTimeout(function() {
                                x.slideTo(o)
                            }, 0)) : x.slideTo(o) : o > x.slides.length - l ? (x.fixLoop(),
                            o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                            setTimeout(function() {
                                x.slideTo(o)
                            }, 0)) : x.slideTo(o)
                        } else
                            x.slideTo(o)
                    }
                }
                ;
                var T, _, S, E, k, A, M, z, O, L, P = "input, select, textarea, button, video", I = Date.now(), D = [];
                x.animating = !1,
                x.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var $, R;
                x.onTouchStart = function(t) {
                    if (t.originalEvent && (t = t.originalEvent),
                    ($ = "touchstart" === t.type) || !("which"in t) || 3 !== t.which) {
                        if (x.params.noSwiping && s(t, "." + x.params.noSwipingClass))
                            return void (x.allowClick = !0);
                        if (!x.params.swipeHandler || s(t, x.params.swipeHandler)) {
                            var n = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX
                              , r = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                            if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && n <= x.params.iOSEdgeSwipeThreshold)) {
                                if (T = !0,
                                _ = !1,
                                S = !0,
                                k = void 0,
                                R = void 0,
                                x.touches.startX = n,
                                x.touches.startY = r,
                                E = Date.now(),
                                x.allowClick = !0,
                                x.updateContainerSize(),
                                x.swipeDirection = void 0,
                                x.params.threshold > 0 && (z = !1),
                                "touchstart" !== t.type) {
                                    var i = !0;
                                    e(t.target).is(P) && (i = !1),
                                    document.activeElement && e(document.activeElement).is(P) && document.activeElement.blur(),
                                    i && t.preventDefault()
                                }
                                x.emit("onTouchStart", x, t)
                            }
                        }
                    }
                }
                ,
                x.onTouchMove = function(t) {
                    if (t.originalEvent && (t = t.originalEvent),
                    !$ || "mousemove" !== t.type) {
                        if (t.preventedByNestedSwiper)
                            return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                            void (x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                        if (x.params.onlyExternal)
                            return x.allowClick = !1,
                            void (T && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                            x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                            E = Date.now()));
                        if ($ && x.params.touchReleaseOnEdges && !x.params.loop)
                            if (x.isHorizontal()) {
                                if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate())
                                    return
                            } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate())
                                return;
                        if ($ && document.activeElement && t.target === document.activeElement && e(t.target).is(P))
                            return _ = !0,
                            void (x.allowClick = !1);
                        if (S && x.emit("onTouchMove", x, t),
                        !(t.targetTouches && t.targetTouches.length > 1)) {
                            if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                            x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                            void 0 === k) {
                                var n;
                                x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? k = !1 : (n = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI,
                                k = x.isHorizontal() ? n > x.params.touchAngle : 90 - n > x.params.touchAngle)
                            }
                            if (k && x.emit("onTouchMoveOpposite", x, t),
                            void 0 === R && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (R = !0)),
                            T) {
                                if (k)
                                    return void (T = !1);
                                if (R) {
                                    x.allowClick = !1,
                                    x.emit("onSliderMove", x, t),
                                    t.preventDefault(),
                                    x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(),
                                    _ || (i.loop && x.fixLoop(),
                                    M = x.getWrapperTranslate(),
                                    x.setWrapperTransition(0),
                                    x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                    x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()),
                                    L = !1,
                                    !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)),
                                    _ = !0;
                                    var r = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                    r *= x.params.touchRatio,
                                    x.rtl && (r = -r),
                                    x.swipeDirection = r > 0 ? "prev" : "next",
                                    A = r + M;
                                    var a = !0;
                                    if (r > 0 && A > x.minTranslate() ? (a = !1,
                                    x.params.resistance && (A = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + M + r, x.params.resistanceRatio))) : r < 0 && A < x.maxTranslate() && (a = !1,
                                    x.params.resistance && (A = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - M - r, x.params.resistanceRatio))),
                                    a && (t.preventedByNestedSwiper = !0),
                                    !x.params.allowSwipeToNext && "next" === x.swipeDirection && A < M && (A = M),
                                    !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && A > M && (A = M),
                                    x.params.threshold > 0) {
                                        if (!(Math.abs(r) > x.params.threshold || z))
                                            return void (A = M);
                                        if (!z)
                                            return z = !0,
                                            x.touches.startX = x.touches.currentX,
                                            x.touches.startY = x.touches.currentY,
                                            A = M,
                                            void (x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                    }
                                    x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(),
                                    x.params.freeMode && (0 === D.length && D.push({
                                        position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                        time: E
                                    }),
                                    D.push({
                                        position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                        time: (new window.Date).getTime()
                                    })),
                                    x.updateProgress(A),
                                    x.setWrapperTranslate(A))
                                }
                            }
                        }
                    }
                }
                ,
                x.onTouchEnd = function(t) {
                    if (t.originalEvent && (t = t.originalEvent),
                    S && x.emit("onTouchEnd", x, t),
                    S = !1,
                    T) {
                        x.params.grabCursor && _ && T && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                        var n = Date.now()
                          , r = n - E;
                        if (x.allowClick && (x.updateClickedSlide(t),
                        x.emit("onTap", x, t),
                        r < 300 && n - I > 300 && (O && clearTimeout(O),
                        O = setTimeout(function() {
                            x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass),
                            x.emit("onClick", x, t))
                        }, 300)),
                        r < 300 && n - I < 300 && (O && clearTimeout(O),
                        x.emit("onDoubleTap", x, t))),
                        I = Date.now(),
                        setTimeout(function() {
                            x && (x.allowClick = !0)
                        }, 0),
                        !T || !_ || !x.swipeDirection || 0 === x.touches.diff || A === M)
                            return void (T = _ = !1);
                        T = _ = !1;
                        var i;
                        if (i = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -A,
                        x.params.freeMode) {
                            if (i < -x.minTranslate())
                                return void x.slideTo(x.activeIndex);
                            if (i > -x.maxTranslate())
                                return void (x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                            if (x.params.freeModeMomentum) {
                                if (D.length > 1) {
                                    var a = D.pop()
                                      , o = D.pop()
                                      , s = a.position - o.position
                                      , l = a.time - o.time;
                                    x.velocity = s / l,
                                    x.velocity = x.velocity / 2,
                                    Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0),
                                    (l > 150 || (new window.Date).getTime() - a.time > 300) && (x.velocity = 0)
                                } else
                                    x.velocity = 0;
                                x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio,
                                D.length = 0;
                                var u = 1e3 * x.params.freeModeMomentumRatio
                                  , c = x.velocity * u
                                  , p = x.translate + c;
                                x.rtl && (p = -p);
                                var d, f = !1, h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                                if (p < x.maxTranslate())
                                    x.params.freeModeMomentumBounce ? (p + x.maxTranslate() < -h && (p = x.maxTranslate() - h),
                                    d = x.maxTranslate(),
                                    f = !0,
                                    L = !0) : p = x.maxTranslate();
                                else if (p > x.minTranslate())
                                    x.params.freeModeMomentumBounce ? (p - x.minTranslate() > h && (p = x.minTranslate() + h),
                                    d = x.minTranslate(),
                                    f = !0,
                                    L = !0) : p = x.minTranslate();
                                else if (x.params.freeModeSticky) {
                                    var m, v = 0;
                                    for (v = 0; v < x.snapGrid.length; v += 1)
                                        if (x.snapGrid[v] > -p) {
                                            m = v;
                                            break
                                        }
                                    p = Math.abs(x.snapGrid[m] - p) < Math.abs(x.snapGrid[m - 1] - p) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1],
                                    x.rtl || (p = -p)
                                }
                                if (0 !== x.velocity)
                                    u = x.rtl ? Math.abs((-p - x.translate) / x.velocity) : Math.abs((p - x.translate) / x.velocity);
                                else if (x.params.freeModeSticky)
                                    return void x.slideReset();
                                x.params.freeModeMomentumBounce && f ? (x.updateProgress(d),
                                x.setWrapperTransition(u),
                                x.setWrapperTranslate(p),
                                x.onTransitionStart(),
                                x.animating = !0,
                                x.wrapper.transitionEnd(function() {
                                    x && L && (x.emit("onMomentumBounce", x),
                                    x.setWrapperTransition(x.params.speed),
                                    x.setWrapperTranslate(d),
                                    x.wrapper.transitionEnd(function() {
                                        x && x.onTransitionEnd()
                                    }))
                                })) : x.velocity ? (x.updateProgress(p),
                                x.setWrapperTransition(u),
                                x.setWrapperTranslate(p),
                                x.onTransitionStart(),
                                x.animating || (x.animating = !0,
                                x.wrapper.transitionEnd(function() {
                                    x && x.onTransitionEnd()
                                }))) : x.updateProgress(p),
                                x.updateActiveIndex()
                            }
                            return void ((!x.params.freeModeMomentum || r >= x.params.longSwipesMs) && (x.updateProgress(),
                            x.updateActiveIndex()))
                        }
                        var g, y = 0, w = x.slidesSizesGrid[0];
                        for (g = 0; g < x.slidesGrid.length; g += x.params.slidesPerGroup)
                            void 0 !== x.slidesGrid[g + x.params.slidesPerGroup] ? i >= x.slidesGrid[g] && i < x.slidesGrid[g + x.params.slidesPerGroup] && (y = g,
                            w = x.slidesGrid[g + x.params.slidesPerGroup] - x.slidesGrid[g]) : i >= x.slidesGrid[g] && (y = g,
                            w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                        var b = (i - x.slidesGrid[y]) / w;
                        if (r > x.params.longSwipesMs) {
                            if (!x.params.longSwipes)
                                return void x.slideTo(x.activeIndex);
                            "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)),
                            "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
                        } else {
                            if (!x.params.shortSwipes)
                                return void x.slideTo(x.activeIndex);
                            "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup),
                            "prev" === x.swipeDirection && x.slideTo(y)
                        }
                    }
                }
                ,
                x._slideTo = function(e, t) {
                    return x.slideTo(e, t, !0, !0)
                }
                ,
                x.slideTo = function(e, t, n, r) {
                    void 0 === n && (n = !0),
                    void 0 === e && (e = 0),
                    e < 0 && (e = 0),
                    x.snapIndex = Math.floor(e / x.params.slidesPerGroup),
                    x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                    var i = -x.snapGrid[x.snapIndex];
                    if (x.params.autoplay && x.autoplaying && (r || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()),
                    x.updateProgress(i),
                    x.params.normalizeSlideIndex)
                        for (var a = 0; a < x.slidesGrid.length; a++)
                            -Math.floor(100 * i) >= Math.floor(100 * x.slidesGrid[a]) && (e = a);
                    return !(!x.params.allowSwipeToNext && i < x.translate && i < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && i > x.translate && i > x.maxTranslate() && (x.activeIndex || 0) !== e) && (void 0 === t && (t = x.params.speed),
                    x.previousIndex = x.activeIndex || 0,
                    x.activeIndex = e,
                    x.updateRealIndex(),
                    x.rtl && -i === x.translate || !x.rtl && i === x.translate ? (x.params.autoHeight && x.updateAutoHeight(),
                    x.updateClasses(),
                    "slide" !== x.params.effect && x.setWrapperTranslate(i),
                    !1) : (x.updateClasses(),
                    x.onTransitionStart(n),
                    0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(i),
                    x.setWrapperTransition(0),
                    x.onTransitionEnd(n)) : (x.setWrapperTranslate(i),
                    x.setWrapperTransition(t),
                    x.animating || (x.animating = !0,
                    x.wrapper.transitionEnd(function() {
                        x && x.onTransitionEnd(n)
                    }))),
                    !0)))
                }
                ,
                x.onTransitionStart = function(e) {
                    void 0 === e && (e = !0),
                    x.params.autoHeight && x.updateAutoHeight(),
                    x.lazy && x.lazy.onTransitionStart(),
                    e && (x.emit("onTransitionStart", x),
                    x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x),
                    x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
                }
                ,
                x.onTransitionEnd = function(e) {
                    x.animating = !1,
                    x.setWrapperTransition(0),
                    void 0 === e && (e = !0),
                    x.lazy && x.lazy.onTransitionEnd(),
                    e && (x.emit("onTransitionEnd", x),
                    x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x),
                    x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))),
                    x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex),
                    x.params.hashnav && x.hashnav && x.hashnav.setHash()
                }
                ,
                x.slideNext = function(e, t, n) {
                    if (x.params.loop) {
                        if (x.animating)
                            return !1;
                        x.fixLoop();
                        x.container[0].clientLeft;
                        return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
                    }
                    return x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
                }
                ,
                x._slideNext = function(e) {
                    return x.slideNext(!0, e, !0)
                }
                ,
                x.slidePrev = function(e, t, n) {
                    if (x.params.loop) {
                        if (x.animating)
                            return !1;
                        x.fixLoop();
                        x.container[0].clientLeft;
                        return x.slideTo(x.activeIndex - 1, t, e, n)
                    }
                    return x.slideTo(x.activeIndex - 1, t, e, n)
                }
                ,
                x._slidePrev = function(e) {
                    return x.slidePrev(!0, e, !0)
                }
                ,
                x.slideReset = function(e, t, n) {
                    return x.slideTo(x.activeIndex, t, e)
                }
                ,
                x.disableTouchControl = function() {
                    return x.params.onlyExternal = !0,
                    !0
                }
                ,
                x.enableTouchControl = function() {
                    return x.params.onlyExternal = !1,
                    !0
                }
                ,
                x.setWrapperTransition = function(e, t) {
                    x.wrapper.transition(e),
                    "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e),
                    x.params.parallax && x.parallax && x.parallax.setTransition(e),
                    x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e),
                    x.params.control && x.controller && x.controller.setTransition(e, t),
                    x.emit("onSetTransition", x, e)
                }
                ,
                x.setWrapperTranslate = function(e, t, n) {
                    var r = 0
                      , i = 0;
                    x.isHorizontal() ? r = x.rtl ? -e : e : i = e,
                    x.params.roundLengths && (r = a(r),
                    i = a(i)),
                    x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + r + "px, " + i + "px, 0px)") : x.wrapper.transform("translate(" + r + "px, " + i + "px)")),
                    x.translate = x.isHorizontal() ? r : i;
                    var o, s = x.maxTranslate() - x.minTranslate();
                    o = 0 === s ? 0 : (e - x.minTranslate()) / s,
                    o !== x.progress && x.updateProgress(e),
                    t && x.updateActiveIndex(),
                    "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate),
                    x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate),
                    x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate),
                    x.params.control && x.controller && x.controller.setTranslate(x.translate, n),
                    x.emit("onSetTranslate", x, x.translate)
                }
                ,
                x.getTranslate = function(e, t) {
                    var n, r, i, a;
                    return void 0 === t && (t = "x"),
                    x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (i = window.getComputedStyle(e, null),
                    window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform,
                    r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")),
                    a = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (a = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                    n = a.toString().split(",")),
                    "x" === t && (r = window.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                    "y" === t && (r = window.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                    x.rtl && r && (r = -r),
                    r || 0)
                }
                ,
                x.getWrapperTranslate = function(e) {
                    return void 0 === e && (e = x.isHorizontal() ? "x" : "y"),
                    x.getTranslate(x.wrapper[0], e)
                }
                ,
                x.observers = [],
                x.initObservers = function() {
                    if (x.params.observeParents)
                        for (var e = x.container.parents(), t = 0; t < e.length; t++)
                            l(e[t]);
                    l(x.container[0], {
                        childList: !1
                    }),
                    l(x.wrapper[0], {
                        attributes: !1
                    })
                }
                ,
                x.disconnectObservers = function() {
                    for (var e = 0; e < x.observers.length; e++)
                        x.observers[e].disconnect();
                    x.observers = []
                }
                ,
                x.createLoop = function() {
                    x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                    var t = x.wrapper.children("." + x.params.slideClass);
                    "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length),
                    x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10),
                    x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides,
                    x.loopedSlides > t.length && (x.loopedSlides = t.length);
                    var n, r = [], i = [];
                    for (t.each(function(n, a) {
                        var o = e(this);
                        n < x.loopedSlides && i.push(a),
                        n < t.length && n >= t.length - x.loopedSlides && r.push(a),
                        o.attr("data-swiper-slide-index", n)
                    }),
                    n = 0; n < i.length; n++)
                        x.wrapper.append(e(i[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                    for (n = r.length - 1; n >= 0; n--)
                        x.wrapper.prepend(e(r[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
                }
                ,
                x.destroyLoop = function() {
                    x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(),
                    x.slides.removeAttr("data-swiper-slide-index")
                }
                ,
                x.reLoop = function(e) {
                    var t = x.activeIndex - x.loopedSlides;
                    x.destroyLoop(),
                    x.createLoop(),
                    x.updateSlidesSize(),
                    e && x.slideTo(t + x.loopedSlides, 0, !1)
                }
                ,
                x.fixLoop = function() {
                    var e;
                    x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex,
                    e += x.loopedSlides,
                    x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides,
                    e += x.loopedSlides,
                    x.slideTo(e, 0, !1, !0))
                }
                ,
                x.appendSlide = function(e) {
                    if (x.params.loop && x.destroyLoop(),
                    "object" == typeof e && e.length)
                        for (var t = 0; t < e.length; t++)
                            e[t] && x.wrapper.append(e[t]);
                    else
                        x.wrapper.append(e);
                    x.params.loop && x.createLoop(),
                    x.params.observer && x.support.observer || x.update(!0)
                }
                ,
                x.prependSlide = function(e) {
                    x.params.loop && x.destroyLoop();
                    var t = x.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var n = 0; n < e.length; n++)
                            e[n] && x.wrapper.prepend(e[n]);
                        t = x.activeIndex + e.length
                    } else
                        x.wrapper.prepend(e);
                    x.params.loop && x.createLoop(),
                    x.params.observer && x.support.observer || x.update(!0),
                    x.slideTo(t, 0, !1)
                }
                ,
                x.removeSlide = function(e) {
                    x.params.loop && (x.destroyLoop(),
                    x.slides = x.wrapper.children("." + x.params.slideClass));
                    var t, n = x.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var r = 0; r < e.length; r++)
                            t = e[r],
                            x.slides[t] && x.slides.eq(t).remove(),
                            t < n && n--;
                        n = Math.max(n, 0)
                    } else
                        t = e,
                        x.slides[t] && x.slides.eq(t).remove(),
                        t < n && n--,
                        n = Math.max(n, 0);
                    x.params.loop && x.createLoop(),
                    x.params.observer && x.support.observer || x.update(!0),
                    x.params.loop ? x.slideTo(n + x.loopedSlides, 0, !1) : x.slideTo(n, 0, !1)
                }
                ,
                x.removeAllSlides = function() {
                    for (var e = [], t = 0; t < x.slides.length; t++)
                        e.push(t);
                    x.removeSlide(e)
                }
                ,
                x.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < x.slides.length; e++) {
                                var t = x.slides.eq(e)
                                  , n = t[0].swiperSlideOffset
                                  , r = -n;
                                x.params.virtualTranslate || (r -= x.translate);
                                var i = 0;
                                x.isHorizontal() || (i = r,
                                r = 0);
                                var a = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({
                                    opacity: a
                                }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (x.slides.transition(e),
                            x.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                x.slides.transitionEnd(function() {
                                    if (!t && x) {
                                        t = !0,
                                        x.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++)
                                            x.wrapper.trigger(e[n])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var t = 0; t < x.slides.length; t++) {
                                var n = x.slides.eq(t)
                                  , r = n[0].progress;
                                x.params.flip.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                                var i = n[0].swiperSlideOffset
                                  , a = -180 * r
                                  , o = a
                                  , s = 0
                                  , l = -i
                                  , u = 0;
                                if (x.isHorizontal() ? x.rtl && (o = -o) : (u = l,
                                l = 0,
                                s = -o,
                                o = 0),
                                n[0].style.zIndex = -Math.abs(Math.round(r)) + x.slides.length,
                                x.params.flip.slideShadows) {
                                    var c = x.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top")
                                      , p = x.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                    n.append(c)),
                                    0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    n.append(p)),
                                    c.length && (c[0].style.opacity = Math.max(-r, 0)),
                                    p.length && (p[0].style.opacity = Math.max(r, 0))
                                }
                                n.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + s + "deg) rotateY(" + o + "deg)")
                            }
                        },
                        setTransition: function(t) {
                            if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                            x.params.virtualTranslate && 0 !== t) {
                                var n = !1;
                                x.slides.eq(x.activeIndex).transitionEnd(function() {
                                    if (!n && x && e(this).hasClass(x.params.slideActiveClass)) {
                                        n = !0,
                                        x.animating = !1;
                                        for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < t.length; r++)
                                            x.wrapper.trigger(t[r])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var t, n = 0;
                            x.params.cube.shadow && (x.isHorizontal() ? (t = x.wrapper.find(".swiper-cube-shadow"),
                            0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                            x.wrapper.append(t)),
                            t.css({
                                height: x.width + "px"
                            })) : (t = x.container.find(".swiper-cube-shadow"),
                            0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                            x.container.append(t))));
                            for (var r = 0; r < x.slides.length; r++) {
                                var i = x.slides.eq(r)
                                  , a = 90 * r
                                  , o = Math.floor(a / 360);
                                x.rtl && (a = -a,
                                o = Math.floor(-a / 360));
                                var s = Math.max(Math.min(i[0].progress, 1), -1)
                                  , l = 0
                                  , u = 0
                                  , c = 0;
                                r % 4 == 0 ? (l = 4 * -o * x.size,
                                c = 0) : (r - 1) % 4 == 0 ? (l = 0,
                                c = 4 * -o * x.size) : (r - 2) % 4 == 0 ? (l = x.size + 4 * o * x.size,
                                c = x.size) : (r - 3) % 4 == 0 && (l = -x.size,
                                c = 3 * x.size + 4 * x.size * o),
                                x.rtl && (l = -l),
                                x.isHorizontal() || (u = l,
                                l = 0);
                                var p = "rotateX(" + (x.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (x.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + c + "px)";
                                if (s <= 1 && s > -1 && (n = 90 * r + 90 * s,
                                x.rtl && (n = 90 * -r - 90 * s)),
                                i.transform(p),
                                x.params.cube.slideShadows) {
                                    var d = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                      , f = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                    i.append(d)),
                                    0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    i.append(f)),
                                    d.length && (d[0].style.opacity = Math.max(-s, 0)),
                                    f.length && (f[0].style.opacity = Math.max(s, 0))
                                }
                            }
                            if (x.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                                "transform-origin": "50% 50% -" + x.size / 2 + "px"
                            }),
                            x.params.cube.shadow)
                                if (x.isHorizontal())
                                    t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90)
                                      , m = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                      , v = x.params.cube.shadowScale
                                      , g = x.params.cube.shadowScale / m
                                      , y = x.params.cube.shadowOffset;
                                    t.transform("scale3d(" + v + ", 1, " + g + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / g + "px) rotateX(-90deg)")
                                }
                            var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                            x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : n) + "deg) rotateY(" + (x.isHorizontal() ? -n : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var t = x.translate, n = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, r = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, i = x.params.coverflow.depth, a = 0, o = x.slides.length; a < o; a++) {
                                var s = x.slides.eq(a)
                                  , l = x.slidesSizesGrid[a]
                                  , u = s[0].swiperSlideOffset
                                  , c = (n - u - l / 2) / l * x.params.coverflow.modifier
                                  , p = x.isHorizontal() ? r * c : 0
                                  , d = x.isHorizontal() ? 0 : r * c
                                  , f = -i * Math.abs(c)
                                  , h = x.isHorizontal() ? 0 : x.params.coverflow.stretch * c
                                  , m = x.isHorizontal() ? x.params.coverflow.stretch * c : 0;
                                Math.abs(m) < .001 && (m = 0),
                                Math.abs(h) < .001 && (h = 0),
                                Math.abs(f) < .001 && (f = 0),
                                Math.abs(p) < .001 && (p = 0),
                                Math.abs(d) < .001 && (d = 0);
                                var v = "translate3d(" + m + "px," + h + "px," + f + "px)  rotateX(" + d + "deg) rotateY(" + p + "deg)";
                                if (s.transform(v),
                                s[0].style.zIndex = 1 - Math.abs(Math.round(c)),
                                x.params.coverflow.slideShadows) {
                                    var g = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                                      , y = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                    0 === g.length && (g = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                    s.append(g)),
                                    0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    s.append(y)),
                                    g.length && (g[0].style.opacity = c > 0 ? c : 0),
                                    y.length && (y[0].style.opacity = -c > 0 ? -c : 0)
                                }
                            }
                            if (x.browser.ie) {
                                x.wrapper[0].style.perspectiveOrigin = n + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                },
                x.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(t, n) {
                        if (void 0 !== t && (void 0 === n && (n = !0),
                        0 !== x.slides.length)) {
                            var r = x.slides.eq(t)
                              , i = r.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                            !r.hasClass(x.params.lazyLoadingClass) || r.hasClass(x.params.lazyStatusLoadedClass) || r.hasClass(x.params.lazyStatusLoadingClass) || (i = i.add(r[0])),
                            0 !== i.length && i.each(function() {
                                var t = e(this);
                                t.addClass(x.params.lazyStatusLoadingClass);
                                var i = t.attr("data-background")
                                  , a = t.attr("data-src")
                                  , o = t.attr("data-srcset")
                                  , s = t.attr("data-sizes");
                                x.loadImage(t[0], a || i, o, s, !1, function() {
                                    if (void 0 !== x && null !== x && x) {
                                        if (i ? (t.css("background-image", 'url("' + i + '")'),
                                        t.removeAttr("data-background")) : (o && (t.attr("srcset", o),
                                        t.removeAttr("data-srcset")),
                                        s && (t.attr("sizes", s),
                                        t.removeAttr("data-sizes")),
                                        a && (t.attr("src", a),
                                        t.removeAttr("data-src"))),
                                        t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),
                                        r.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(),
                                        x.params.loop && n) {
                                            var e = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(x.params.slideDuplicateClass)) {
                                                var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                                x.lazy.loadImageInSlide(l.index(), !1)
                                            } else {
                                                var u = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                x.lazy.loadImageInSlide(u.index(), !1)
                                            }
                                        }
                                        x.emit("onLazyImageReady", x, r[0], t[0])
                                    }
                                }),
                                x.emit("onLazyImageLoad", x, r[0], t[0])
                            })
                        }
                    },
                    load: function() {
                        var t, n = x.params.slidesPerView;
                        if ("auto" === n && (n = 0),
                        x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0),
                        x.params.watchSlidesVisibility)
                            x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                                x.lazy.loadImageInSlide(e(this).index())
                            });
                        else if (n > 1)
                            for (t = x.activeIndex; t < x.activeIndex + n; t++)
                                x.slides[t] && x.lazy.loadImageInSlide(t);
                        else
                            x.lazy.loadImageInSlide(x.activeIndex);
                        if (x.params.lazyLoadingInPrevNext)
                            if (n > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                                var r = x.params.lazyLoadingInPrevNextAmount
                                  , i = n
                                  , a = Math.min(x.activeIndex + i + Math.max(r, i), x.slides.length)
                                  , o = Math.max(x.activeIndex - Math.max(i, r), 0);
                                for (t = x.activeIndex + n; t < a; t++)
                                    x.slides[t] && x.lazy.loadImageInSlide(t);
                                for (t = o; t < x.activeIndex; t++)
                                    x.slides[t] && x.lazy.loadImageInSlide(t)
                            } else {
                                var s = x.wrapper.children("." + x.params.slideNextClass);
                                s.length > 0 && x.lazy.loadImageInSlide(s.index());
                                var l = x.wrapper.children("." + x.params.slidePrevClass);
                                l.length > 0 && x.lazy.loadImageInSlide(l.index())
                            }
                    },
                    onTransitionStart: function() {
                        x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                    },
                    onTransitionEnd: function() {
                        x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                    }
                },
                x.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var t = x.scrollbar
                          , n = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                          , r = n - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2
                          , i = -x.minTranslate() * t.moveDivider
                          , a = -x.maxTranslate() * t.moveDivider;
                        r < i ? r = i : r > a && (r = a),
                        r = -r / t.moveDivider,
                        x.updateProgress(r),
                        x.setWrapperTranslate(r, !0)
                    },
                    dragStart: function(e) {
                        var t = x.scrollbar;
                        t.isTouched = !0,
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.setDragPosition(e),
                        clearTimeout(t.dragTimeout),
                        t.track.transition(0),
                        x.params.scrollbarHide && t.track.css("opacity", 1),
                        x.wrapper.transition(100),
                        t.drag.transition(100),
                        x.emit("onScrollbarDragStart", x)
                    },
                    dragMove: function(e) {
                        var t = x.scrollbar;
                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                        t.setDragPosition(e),
                        x.wrapper.transition(0),
                        t.track.transition(0),
                        t.drag.transition(0),
                        x.emit("onScrollbarDragMove", x))
                    },
                    dragEnd: function(e) {
                        var t = x.scrollbar;
                        t.isTouched && (t.isTouched = !1,
                        x.params.scrollbarHide && (clearTimeout(t.dragTimeout),
                        t.dragTimeout = setTimeout(function() {
                            t.track.css("opacity", 0),
                            t.track.transition(400)
                        }, 1e3)),
                        x.emit("onScrollbarDragEnd", x),
                        x.params.scrollbarSnapOnRelease && x.slideReset())
                    },
                    draggableEvents: function() {
                        return !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop
                    }(),
                    enableDraggable: function() {
                        var t = x.scrollbar
                          , n = x.support.touch ? t.track : document;
                        e(t.track).on(t.draggableEvents.start, t.dragStart),
                        e(n).on(t.draggableEvents.move, t.dragMove),
                        e(n).on(t.draggableEvents.end, t.dragEnd)
                    },
                    disableDraggable: function() {
                        var t = x.scrollbar
                          , n = x.support.touch ? t.track : document;
                        e(t.track).off(t.draggableEvents.start, t.dragStart),
                        e(n).off(t.draggableEvents.move, t.dragMove),
                        e(n).off(t.draggableEvents.end, t.dragEnd)
                    },
                    set: function() {
                        if (x.params.scrollbar) {
                            var t = x.scrollbar;
                            t.track = e(x.params.scrollbar),
                            x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)),
                            t.drag = t.track.find(".swiper-scrollbar-drag"),
                            0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                            t.track.append(t.drag)),
                            t.drag[0].style.width = "",
                            t.drag[0].style.height = "",
                            t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight,
                            t.divider = x.size / x.virtualSize,
                            t.moveDivider = t.divider * (t.trackSize / x.size),
                            t.dragSize = t.trackSize * t.divider,
                            x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px",
                            t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "",
                            x.params.scrollbarHide && (t.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (x.params.scrollbar) {
                            var e, t = x.scrollbar, n = (x.translate,
                            t.dragSize);
                            e = (t.trackSize - t.dragSize) * x.progress,
                            x.rtl && x.isHorizontal() ? (e = -e,
                            e > 0 ? (n = t.dragSize - e,
                            e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : e < 0 ? (n = t.dragSize + e,
                            e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
                            x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"),
                            t.drag[0].style.width = n + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"),
                            t.drag[0].style.height = n + "px"),
                            x.params.scrollbarHide && (clearTimeout(t.timeout),
                            t.track[0].style.opacity = 1,
                            t.timeout = setTimeout(function() {
                                t.track[0].style.opacity = 0,
                                t.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        x.params.scrollbar && x.scrollbar.drag.transition(e)
                    }
                },
                x.controller = {
                    LinearSpline: function(e, t) {
                        var n = function() {
                            var e, t, n;
                            return function(r, i) {
                                for (t = -1,
                                e = r.length; e - t > 1; )
                                    r[n = e + t >> 1] <= i ? t = n : e = n;
                                return e
                            }
                        }();
                        this.x = e,
                        this.y = t,
                        this.lastIndex = e.length - 1;
                        var r, i;
                        this.x.length;
                        this.interpolate = function(e) {
                            return e ? (i = n(this.x, e),
                            r = i - 1,
                            (e - this.x[r]) * (this.y[i] - this.y[r]) / (this.x[i] - this.x[r]) + this.y[r]) : 0
                        }
                    },
                    getInterpolateFunction: function(e) {
                        x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid,e.snapGrid))
                    },
                    setTranslate: function(e, n) {
                        function r(t) {
                            e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate,
                            "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t),
                            a = -x.controller.spline.interpolate(-e)),
                            a && "container" !== x.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()),
                            a = (e - x.minTranslate()) * i + t.minTranslate()),
                            x.params.controlInverse && (a = t.maxTranslate() - a),
                            t.updateProgress(a),
                            t.setWrapperTranslate(a, !1, x),
                            t.updateActiveIndex()
                        }
                        var i, a, o = x.params.control;
                        if (Array.isArray(o))
                            for (var s = 0; s < o.length; s++)
                                o[s] !== n && o[s]instanceof t && r(o[s]);
                        else
                            o instanceof t && n !== o && r(o)
                    },
                    setTransition: function(e, n) {
                        function r(t) {
                            t.setWrapperTransition(e, x),
                            0 !== e && (t.onTransitionStart(),
                            t.wrapper.transitionEnd(function() {
                                a && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(),
                                t.onTransitionEnd())
                            }))
                        }
                        var i, a = x.params.control;
                        if (Array.isArray(a))
                            for (i = 0; i < a.length; i++)
                                a[i] !== n && a[i]instanceof t && r(a[i]);
                        else
                            a instanceof t && n !== a && r(a)
                    }
                },
                x.hashnav = {
                    onHashCange: function(e, t) {
                        var n = document.location.hash.replace("#", "");
                        n !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + n + '"]').index())
                    },
                    attachEvents: function(t) {
                        var n = t ? "off" : "on";
                        e(window)[n]("hashchange", x.hashnav.onHashCange)
                    },
                    setHash: function() {
                        if (x.hashnav.initialized && x.params.hashnav)
                            if (x.params.replaceState && window.history && window.history.replaceState)
                                window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                            else {
                                var e = x.slides.eq(x.activeIndex)
                                  , t = e.attr("data-hash") || e.attr("data-history");
                                document.location.hash = t || ""
                            }
                    },
                    init: function() {
                        if (x.params.hashnav && !x.params.history) {
                            x.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var t = 0, n = x.slides.length; t < n; t++) {
                                    var r = x.slides.eq(t)
                                      , i = r.attr("data-hash") || r.attr("data-history");
                                    if (i === e && !r.hasClass(x.params.slideDuplicateClass)) {
                                        var a = r.index();
                                        x.slideTo(a, 0, x.params.runCallbacksOnInit, !0)
                                    }
                                }
                            x.params.hashnavWatchState && x.hashnav.attachEvents()
                        }
                    },
                    destroy: function() {
                        x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                    }
                },
                x.history = {
                    init: function() {
                        if (x.params.history) {
                            if (!window.history || !window.history.pushState)
                                return x.params.history = !1,
                                void (x.params.hashnav = !0);
                            x.history.initialized = !0,
                            this.paths = this.getPathValues(),
                            (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit),
                            x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    },
                    setHistoryPopState: function() {
                        x.history.paths = x.history.getPathValues(),
                        x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                    },
                    getPathValues: function() {
                        var e = window.location.pathname.slice(1).split("/")
                          , t = e.length;
                        return {
                            key: e[t - 2],
                            value: e[t - 1]
                        }
                    },
                    setHistory: function(e, t) {
                        if (x.history.initialized && x.params.history) {
                            var n = x.slides.eq(t)
                              , r = this.slugify(n.attr("data-history"));
                            window.location.pathname.includes(e) || (r = e + "/" + r),
                            x.params.replaceState ? window.history.replaceState(null, null, r) : window.history.pushState(null, null, r)
                        }
                    },
                    slugify: function(e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function(e, t, n) {
                        if (t)
                            for (var r = 0, i = x.slides.length; r < i; r++) {
                                var a = x.slides.eq(r)
                                  , o = this.slugify(a.attr("data-history"));
                                if (o === t && !a.hasClass(x.params.slideDuplicateClass)) {
                                    var s = a.index();
                                    x.slideTo(s, e, n)
                                }
                            }
                        else
                            x.slideTo(0, e, n)
                    }
                },
                x.disableKeyboardControl = function() {
                    x.params.keyboardControl = !1,
                    e(document).off("keydown", u)
                }
                ,
                x.enableKeyboardControl = function() {
                    x.params.keyboardControl = !0,
                    e(document).on("keydown", u)
                }
                ,
                x.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                },
                x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var e = "onwheel"in document;
                    if (!e) {
                        var t = document.createElement("div");
                        t.setAttribute("onwheel", "return;"),
                        e = "function" == typeof t.onwheel
                    }
                    return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
                    e
                }() ? "wheel" : "mousewheel"),
                x.disableMousewheelControl = function() {
                    if (!x.mousewheel.event)
                        return !1;
                    var t = x.container;
                    return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                    t.off(x.mousewheel.event, p),
                    x.params.mousewheelControl = !1,
                    !0
                }
                ,
                x.enableMousewheelControl = function() {
                    if (!x.mousewheel.event)
                        return !1;
                    var t = x.container;
                    return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                    t.on(x.mousewheel.event, p),
                    x.params.mousewheelControl = !0,
                    !0
                }
                ,
                x.parallax = {
                    setTranslate: function() {
                        x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            d(this, x.progress)
                        }),
                        x.slides.each(function() {
                            var t = e(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                d(this, Math.min(Math.max(t[0].progress, -1), 1))
                            })
                        })
                    },
                    setTransition: function(t) {
                        void 0 === t && (t = x.params.speed),
                        x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var n = e(this)
                              , r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (r = 0),
                            n.transition(r)
                        })
                    }
                },
                x.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: x.params.zoomMax
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    },
                    getDistanceBetweenTouches: function(e) {
                        if (e.targetTouches.length < 2)
                            return 1;
                        var t = e.targetTouches[0].pageX
                          , n = e.targetTouches[0].pageY
                          , r = e.targetTouches[1].pageX
                          , i = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(r - t, 2) + Math.pow(i - n, 2))
                    },
                    onGestureStart: function(t) {
                        var n = x.zoom;
                        if (!x.support.gestures) {
                            if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                                return;
                            n.gesture.scaleStart = n.getDistanceBetweenTouches(t)
                        }
                        if (!(n.gesture.slide && n.gesture.slide.length || (n.gesture.slide = e(this),
                        0 === n.gesture.slide.length && (n.gesture.slide = x.slides.eq(x.activeIndex)),
                        n.gesture.image = n.gesture.slide.find("img, svg, canvas"),
                        n.gesture.imageWrap = n.gesture.image.parent("." + x.params.zoomContainerClass),
                        n.gesture.zoomMax = n.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax,
                        0 !== n.gesture.imageWrap.length)))
                            return void (n.gesture.image = void 0);
                        n.gesture.image.transition(0),
                        n.isScaling = !0
                    },
                    onGestureChange: function(e) {
                        var t = x.zoom;
                        if (!x.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                                return;
                            t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                        }
                        t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                        t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                        t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)),
                        t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                    },
                    onGestureEnd: function(e) {
                        var t = x.zoom;
                        !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin),
                        t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                        t.currentScale = t.scale,
                        t.isScaling = !1,
                        1 === t.scale && (t.gesture.slide = void 0))
                    },
                    onTouchStart: function(e, t) {
                        var n = e.zoom;
                        n.gesture.image && 0 !== n.gesture.image.length && (n.image.isTouched || ("android" === e.device.os && t.preventDefault(),
                        n.image.isTouched = !0,
                        n.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        n.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                    },
                    onTouchMove: function(e) {
                        var t = x.zoom;
                        if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1,
                        t.image.isTouched && t.gesture.slide)) {
                            t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                            t.image.height = t.gesture.image[0].offsetHeight,
                            t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                            t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                            t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                            t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                            t.gesture.imageWrap.transition(0),
                            x.rtl && (t.image.startX = -t.image.startX),
                            x.rtl && (t.image.startY = -t.image.startY));
                            var n = t.image.width * t.scale
                              , r = t.image.height * t.scale;
                            if (!(n < t.gesture.slideWidth && r < t.gesture.slideHeight)) {
                                if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - n / 2, 0),
                                t.image.maxX = -t.image.minX,
                                t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0),
                                t.image.maxY = -t.image.minY,
                                t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                !t.image.isMoved && !t.isScaling) {
                                    if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x)
                                        return void (t.image.isTouched = !1);
                                    if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)
                                        return void (t.image.isTouched = !1)
                                }
                                e.preventDefault(),
                                e.stopPropagation(),
                                t.image.isMoved = !0,
                                t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                                t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                                t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                                t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                                t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                                t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                                t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                                t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                                t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                                t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                                t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                                Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                                Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                                t.velocity.prevPositionX = t.image.touchesCurrent.x,
                                t.velocity.prevPositionY = t.image.touchesCurrent.y,
                                t.velocity.prevTime = Date.now(),
                                t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function(e, t) {
                        var n = e.zoom;
                        if (n.gesture.image && 0 !== n.gesture.image.length) {
                            if (!n.image.isTouched || !n.image.isMoved)
                                return n.image.isTouched = !1,
                                void (n.image.isMoved = !1);
                            n.image.isTouched = !1,
                            n.image.isMoved = !1;
                            var r = 300
                              , i = 300
                              , a = n.velocity.x * r
                              , o = n.image.currentX + a
                              , s = n.velocity.y * i
                              , l = n.image.currentY + s;
                            0 !== n.velocity.x && (r = Math.abs((o - n.image.currentX) / n.velocity.x)),
                            0 !== n.velocity.y && (i = Math.abs((l - n.image.currentY) / n.velocity.y));
                            var u = Math.max(r, i);
                            n.image.currentX = o,
                            n.image.currentY = l;
                            var c = n.image.width * n.scale
                              , p = n.image.height * n.scale;
                            n.image.minX = Math.min(n.gesture.slideWidth / 2 - c / 2, 0),
                            n.image.maxX = -n.image.minX,
                            n.image.minY = Math.min(n.gesture.slideHeight / 2 - p / 2, 0),
                            n.image.maxY = -n.image.minY,
                            n.image.currentX = Math.max(Math.min(n.image.currentX, n.image.maxX), n.image.minX),
                            n.image.currentY = Math.max(Math.min(n.image.currentY, n.image.maxY), n.image.minY),
                            n.gesture.imageWrap.transition(u).transform("translate3d(" + n.image.currentX + "px, " + n.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function(e) {
                        var t = e.zoom;
                        t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                        t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                        t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                        t.scale = t.currentScale = 1)
                    },
                    toggleZoom: function(t, n) {
                        var r = t.zoom;
                        if (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex),
                        r.gesture.image = r.gesture.slide.find("img, svg, canvas"),
                        r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)),
                        r.gesture.image && 0 !== r.gesture.image.length) {
                            var i, a, o, s, l, u, c, p, d, f, h, m, v, g, y, w, b, x;
                            void 0 === r.image.touchesStart.x && n ? (i = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX,
                            a = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (i = r.image.touchesStart.x,
                            a = r.image.touchesStart.y),
                            r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1,
                            r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                            r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax,
                            n ? (b = r.gesture.slide[0].offsetWidth,
                            x = r.gesture.slide[0].offsetHeight,
                            o = r.gesture.slide.offset().left,
                            s = r.gesture.slide.offset().top,
                            l = o + b / 2 - i,
                            u = s + x / 2 - a,
                            d = r.gesture.image[0].offsetWidth,
                            f = r.gesture.image[0].offsetHeight,
                            h = d * r.scale,
                            m = f * r.scale,
                            v = Math.min(b / 2 - h / 2, 0),
                            g = Math.min(x / 2 - m / 2, 0),
                            y = -v,
                            w = -g,
                            c = l * r.scale,
                            p = u * r.scale,
                            c < v && (c = v),
                            c > y && (c = y),
                            p < g && (p = g),
                            p > w && (p = w)) : (c = 0,
                            p = 0),
                            r.gesture.imageWrap.transition(300).transform("translate3d(" + c + "px, " + p + "px,0)"),
                            r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))
                        }
                    },
                    attachEvents: function(t) {
                        var n = t ? "off" : "on";
                        if (x.params.zoom) {
                            var r = (x.slides,
                            !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            });
                            x.support.gestures ? (x.slides[n]("gesturestart", x.zoom.onGestureStart, r),
                            x.slides[n]("gesturechange", x.zoom.onGestureChange, r),
                            x.slides[n]("gestureend", x.zoom.onGestureEnd, r)) : "touchstart" === x.touchEvents.start && (x.slides[n](x.touchEvents.start, x.zoom.onGestureStart, r),
                            x.slides[n](x.touchEvents.move, x.zoom.onGestureChange, r),
                            x.slides[n](x.touchEvents.end, x.zoom.onGestureEnd, r)),
                            x[n]("touchStart", x.zoom.onTouchStart),
                            x.slides.each(function(t, r) {
                                e(r).find("." + x.params.zoomContainerClass).length > 0 && e(r)[n](x.touchEvents.move, x.zoom.onTouchMove)
                            }),
                            x[n]("touchEnd", x.zoom.onTouchEnd),
                            x[n]("transitionEnd", x.zoom.onTransitionEnd),
                            x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                        }
                    },
                    init: function() {
                        x.zoom.attachEvents()
                    },
                    destroy: function() {
                        x.zoom.attachEvents(!0)
                    }
                },
                x._plugins = [];
                for (var N in x.plugins) {
                    var B = x.plugins[N](x, x.params[N]);
                    B && x._plugins.push(B)
                }
                return x.callPlugins = function(e) {
                    for (var t = 0; t < x._plugins.length; t++)
                        e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                x.emitterEventListeners = {},
                x.emit = function(e) {
                    x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (x.emitterEventListeners[e])
                        for (t = 0; t < x.emitterEventListeners[e].length; t++)
                            x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                x.on = function(e, t) {
                    return e = f(e),
                    x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []),
                    x.emitterEventListeners[e].push(t),
                    x
                }
                ,
                x.off = function(e, t) {
                    var n;
                    if (e = f(e),
                    void 0 === t)
                        return x.emitterEventListeners[e] = [],
                        x;
                    if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                        for (n = 0; n < x.emitterEventListeners[e].length; n++)
                            x.emitterEventListeners[e][n] === t && x.emitterEventListeners[e].splice(n, 1);
                        return x
                    }
                }
                ,
                x.once = function(e, t) {
                    e = f(e);
                    var n = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                        x.off(e, n)
                    };
                    return x.on(e, n),
                    x
                }
                ,
                x.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"),
                        e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t),
                        e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t),
                        e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0),
                        e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1),
                        e
                    },
                    onEnterKey: function(t) {
                        13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t),
                        x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t),
                        x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)),
                        e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click())
                    },
                    liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = x.a11y.liveRegion;
                        0 !== t.length && (t.html(""),
                        t.html(e))
                    },
                    init: function() {
                        x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton),
                        x.a11y.addRole(x.nextButton, "button"),
                        x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                        x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton),
                        x.a11y.addRole(x.prevButton, "button"),
                        x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                        e(x.container).append(x.a11y.liveRegion)
                    },
                    initPagination: function() {
                        x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                            var t = e(this);
                            x.a11y.makeFocusable(t),
                            x.a11y.addRole(t, "button"),
                            x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                        })
                    },
                    destroy: function() {
                        x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                    }
                },
                x.init = function() {
                    x.params.loop && x.createLoop(),
                    x.updateContainerSize(),
                    x.updateSlidesSize(),
                    x.updatePagination(),
                    x.params.scrollbar && x.scrollbar && (x.scrollbar.set(),
                    x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
                    "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(),
                    x.effects[x.params.effect].setTranslate()),
                    x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit),
                    0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(),
                    x.lazy && x.params.lazyLoading && (x.lazy.load(),
                    x.lazy.initialImageLoaded = !0))),
                    x.attachEvents(),
                    x.params.observer && x.support.observer && x.initObservers(),
                    x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(),
                    x.params.zoom && x.zoom && x.zoom.init(),
                    x.params.autoplay && x.startAutoplay(),
                    x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(),
                    x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(),
                    x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState),
                    x.params.history && x.history && x.history.init(),
                    x.params.hashnav && x.hashnav && x.hashnav.init(),
                    x.params.a11y && x.a11y && x.a11y.init(),
                    x.emit("onInit", x)
                }
                ,
                x.cleanupStyles = function() {
                    x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
                    x.wrapper.removeAttr("style"),
                    x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                    x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass),
                    x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass),
                    x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),
                    x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),
                    x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"),
                    x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
                }
                ,
                x.destroy = function(e, t) {
                    x.detachEvents(),
                    x.stopAutoplay(),
                    x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(),
                    x.params.loop && x.destroyLoop(),
                    t && x.cleanupStyles(),
                    x.disconnectObservers(),
                    x.params.zoom && x.zoom && x.zoom.destroy(),
                    x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(),
                    x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(),
                    x.params.a11y && x.a11y && x.a11y.destroy(),
                    x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState),
                    x.params.hashnav && x.hashnav && x.hashnav.destroy(),
                    x.emit("onDestroy"),
                    !1 !== e && (x = null)
                }
                ,
                x.init(),
                x
            }
        };
        t.prototype = {
            isSafari: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9: function() {
                    var e = document.createElement("div");
                    return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                    1 === e.getElementsByTagName("i").length
                }()
            },
            device: function() {
                var e = window.navigator.userAgent
                  , t = e.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , n = e.match(/(iPad).*OS\s([\d_]+)/)
                  , r = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , i = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {
                    ios: n || i || r,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || function() {
                    return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
                }(),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                        if (t[n]in e)
                            return !0
                }(),
                observer: function() {
                    return "MutationObserver"in window || "WebkitMutationObserver"in window
                }(),
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: function() {
                    return "ongesturestart"in window
                }()
            },
            plugins: {}
        };
        for (var n = (function() {
            var e = function(e) {
                var t = this
                  , n = 0;
                for (n = 0; n < e.length; n++)
                    t[n] = e[n];
                return t.length = e.length,
                this
            }
              , t = function(t, n) {
                var r = []
                  , i = 0;
                if (t && !n && t instanceof e)
                    return t;
                if (t)
                    if ("string" == typeof t) {
                        var a, o, s = t.trim();
                        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === s.indexOf("<li") && (l = "ul"),
                            0 === s.indexOf("<tr") && (l = "tbody"),
                            0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (l = "tr"),
                            0 === s.indexOf("<tbody") && (l = "table"),
                            0 === s.indexOf("<option") && (l = "select"),
                            o = document.createElement(l),
                            o.innerHTML = t,
                            i = 0; i < o.childNodes.length; i++)
                                r.push(o.childNodes[i])
                        } else
                            for (a = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])],
                            i = 0; i < a.length; i++)
                                a[i] && r.push(a[i])
                    } else if (t.nodeType || t === window || t === document)
                        r.push(t);
                    else if (t.length > 0 && t[0].nodeType)
                        for (i = 0; i < t.length; i++)
                            r.push(t[i]);
                return new e(r)
            };
            return e.prototype = {
                addClass: function(e) {
                    if (void 0 === e)
                        return this;
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var r = 0; r < this.length; r++)
                            this[r].classList.add(t[n]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var r = 0; r < this.length; r++)
                            this[r].classList.remove(t[n]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var r = 0; r < this.length; r++)
                            this[r].classList.toggle(t[n]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e)
                        return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var n = 0; n < this.length; n++)
                        if (2 === arguments.length)
                            this[n].setAttribute(e, t);
                        else
                            for (var r in e)
                                this[n][r] = e[r],
                                this[n].setAttribute(r, e[r]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t++)
                        this[t].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    if (void 0 !== t) {
                        for (var n = 0; n < this.length; n++) {
                            var r = this[n];
                            r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                            r.dom7ElementDataStorage[e] = t
                        }
                        return this
                    }
                    if (this[0]) {
                        var i = this[0].getAttribute("data-" + e);
                        return i || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                    }
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                    }
                    return this
                },
                on: function(e, n, r, i) {
                    function a(e) {
                        var i = e.target;
                        if (t(i).is(n))
                            r.call(i, e);
                        else
                            for (var a = t(i).parents(), o = 0; o < a.length; o++)
                                t(a[o]).is(n) && r.call(a[o], e)
                    }
                    var o, s, l = e.split(" ");
                    for (o = 0; o < this.length; o++)
                        if ("function" == typeof n || !1 === n)
                            for ("function" == typeof n && (r = arguments[1],
                            i = arguments[2] || !1),
                            s = 0; s < l.length; s++)
                                this[o].addEventListener(l[s], r, i);
                        else
                            for (s = 0; s < l.length; s++)
                                this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []),
                                this[o].dom7LiveListeners.push({
                                    listener: r,
                                    liveListener: a
                                }),
                                this[o].addEventListener(l[s], a, i);
                    return this
                },
                off: function(e, t, n, r) {
                    for (var i = e.split(" "), a = 0; a < i.length; a++)
                        for (var o = 0; o < this.length; o++)
                            if ("function" == typeof t || !1 === t)
                                "function" == typeof t && (n = arguments[1],
                                r = arguments[2] || !1),
                                this[o].removeEventListener(i[a], n, r);
                            else if (this[o].dom7LiveListeners)
                                for (var s = 0; s < this[o].dom7LiveListeners.length; s++)
                                    this[o].dom7LiveListeners[s].listener === n && this[o].removeEventListener(i[a], this[o].dom7LiveListeners[s].liveListener, r);
                    return this
                },
                once: function(e, t, n, r) {
                    function i(o) {
                        n(o),
                        a.off(e, t, i, r)
                    }
                    var a = this;
                    "function" == typeof t && (t = !1,
                    n = arguments[1],
                    r = arguments[2]),
                    a.on(e, t, i, r)
                },
                trigger: function(e, t) {
                    for (var n = 0; n < this.length; n++) {
                        var r;
                        try {
                            r = new window.CustomEvent(e,{
                                detail: t,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (n) {
                            r = document.createEvent("Event"),
                            r.initEvent(e, !0, !0),
                            r.detail = t
                        }
                        this[n].dispatchEvent(r)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function t(a) {
                        if (a.target === this)
                            for (e.call(this, a),
                            n = 0; n < r.length; n++)
                                i.off(r[n], t)
                    }
                    var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
                    if (e)
                        for (n = 0; n < r.length; n++)
                            i.on(r[n], t);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0]
                          , t = e.getBoundingClientRect()
                          , n = document.body
                          , r = e.clientTop || n.clientTop || 0
                          , i = e.clientLeft || n.clientLeft || 0
                          , a = window.pageYOffset || e.scrollTop
                          , o = window.pageXOffset || e.scrollLeft;
                        return {
                            top: t.top + a - r,
                            left: t.left + o - i
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var n;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (n = 0; n < this.length; n++)
                                for (var r in e)
                                    this[n].style[r] = e[r];
                            return this
                        }
                        if (this[0])
                            return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (n = 0; n < this.length; n++)
                            this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var t = 0; t < this.length; t++)
                        e.call(this[t], t, this[t]);
                    return this
                },
                html: function(e) {
                    if (void 0 === e)
                        return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t++)
                        this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e)
                        return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++)
                        this[t].textContent = e;
                    return this
                },
                is: function(n) {
                    if (!this[0])
                        return !1;
                    var r, i;
                    if ("string" == typeof n) {
                        var a = this[0];
                        if (a === document)
                            return n === document;
                        if (a === window)
                            return n === window;
                        if (a.matches)
                            return a.matches(n);
                        if (a.webkitMatchesSelector)
                            return a.webkitMatchesSelector(n);
                        if (a.mozMatchesSelector)
                            return a.mozMatchesSelector(n);
                        if (a.msMatchesSelector)
                            return a.msMatchesSelector(n);
                        for (r = t(n),
                        i = 0; i < r.length; i++)
                            if (r[i] === this[0])
                                return !0;
                        return !1
                    }
                    if (n === document)
                        return this[0] === document;
                    if (n === window)
                        return this[0] === window;
                    if (n.nodeType || n instanceof e) {
                        for (r = n.nodeType ? [n] : n,
                        i = 0; i < r.length; i++)
                            if (r[i] === this[0])
                                return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], t = 0; null !== (e = e.previousSibling); )
                            1 === e.nodeType && t++;
                        return t
                    }
                },
                eq: function(t) {
                    if (void 0 === t)
                        return this;
                    var n, r = this.length;
                    return t > r - 1 ? new e([]) : t < 0 ? (n = r + t,
                    new e(n < 0 ? [] : [this[n]])) : new e([this[t]])
                },
                append: function(t) {
                    var n, r;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof t) {
                            var i = document.createElement("div");
                            for (i.innerHTML = t; i.firstChild; )
                                this[n].appendChild(i.firstChild)
                        } else if (t instanceof e)
                            for (r = 0; r < t.length; r++)
                                this[n].appendChild(t[r]);
                        else
                            this[n].appendChild(t);
                    return this
                },
                prepend: function(t) {
                    var n, r;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof t) {
                            var i = document.createElement("div");
                            for (i.innerHTML = t,
                            r = i.childNodes.length - 1; r >= 0; r--)
                                this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                        } else if (t instanceof e)
                            for (r = 0; r < t.length; r++)
                                this[n].insertBefore(t[r], this[n].childNodes[0]);
                        else
                            this[n].insertBefore(t, this[n].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var n = t(e), r = 0; r < this.length; r++)
                        if (1 === n.length)
                            n[0].parentNode.insertBefore(this[r], n[0]);
                        else if (n.length > 1)
                            for (var i = 0; i < n.length; i++)
                                n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i])
                },
                insertAfter: function(e) {
                    for (var n = t(e), r = 0; r < this.length; r++)
                        if (1 === n.length)
                            n[0].parentNode.insertBefore(this[r], n[0].nextSibling);
                        else if (n.length > 1)
                            for (var i = 0; i < n.length; i++)
                                n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i].nextSibling)
                },
                next: function(n) {
                    return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(n) {
                    var r = []
                      , i = this[0];
                    if (!i)
                        return new e([]);
                    for (; i.nextElementSibling; ) {
                        var a = i.nextElementSibling;
                        n ? t(a).is(n) && r.push(a) : r.push(a),
                        i = a
                    }
                    return new e(r)
                },
                prev: function(n) {
                    return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(n) {
                    var r = []
                      , i = this[0];
                    if (!i)
                        return new e([]);
                    for (; i.previousElementSibling; ) {
                        var a = i.previousElementSibling;
                        n ? t(a).is(n) && r.push(a) : r.push(a),
                        i = a
                    }
                    return new e(r)
                },
                parent: function(e) {
                    for (var n = [], r = 0; r < this.length; r++)
                        e ? t(this[r].parentNode).is(e) && n.push(this[r].parentNode) : n.push(this[r].parentNode);
                    return t(t.unique(n))
                },
                parents: function(e) {
                    for (var n = [], r = 0; r < this.length; r++)
                        for (var i = this[r].parentNode; i; )
                            e ? t(i).is(e) && n.push(i) : n.push(i),
                            i = i.parentNode;
                    return t(t.unique(n))
                },
                find: function(t) {
                    for (var n = [], r = 0; r < this.length; r++)
                        for (var i = this[r].querySelectorAll(t), a = 0; a < i.length; a++)
                            n.push(i[a]);
                    return new e(n)
                },
                children: function(n) {
                    for (var r = [], i = 0; i < this.length; i++)
                        for (var a = this[i].childNodes, o = 0; o < a.length; o++)
                            n ? 1 === a[o].nodeType && t(a[o]).is(n) && r.push(a[o]) : 1 === a[o].nodeType && r.push(a[o]);
                    return new e(t.unique(r))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++)
                        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, n, r = this;
                    for (e = 0; e < arguments.length; e++) {
                        var i = t(arguments[e]);
                        for (n = 0; n < i.length; n++)
                            r[r.length] = i[n],
                            r.length++
                    }
                    return r
                }
            },
            t.fn = e.prototype,
            t.unique = function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }
            ,
            t
        }()), r = ["jQuery", "Zepto", "Dom7"], i = 0; i < r.length; i++)
            window[r[i]] && function(e) {
                e.fn.swiper = function(n) {
                    var r;
                    return e(this).each(function() {
                        var e = new t(this,n);
                        r || (r = e)
                    }),
                    r
                }
            }(window[r[i]]);
        var a;
        a = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n,
        a && ("transitionEnd"in a.fn || (a.fn.transitionEnd = function(e) {
            function t(a) {
                if (a.target === this)
                    for (e.call(this, a),
                    n = 0; n < r.length; n++)
                        i.off(r[n], t)
            }
            var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
            if (e)
                for (n = 0; n < r.length; n++)
                    i.on(r[n], t);
            return this
        }
        ),
        "transform"in a.fn || (a.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
            }
            return this
        }
        ),
        "transition"in a.fn || (a.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
            }
            return this
        }
        ),
        "outerWidth"in a.fn || (a.fn.outerWidth = function(e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        }
        )),
        window.Swiper = t
    }(),
    e.exports = window.Swiper
}
]);
