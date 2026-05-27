(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7976], {
        69693: function(o, n, e) {
            Promise.resolve().then(e.bind(e, 25782))
        },
        25782: function(o, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return v
                }
            });
            var r = e(57437),
                i = e(37041);
            let d = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-0"
                })(["min-height:100vh;display:flex;align-items:center;justify-content:center;background-color:#0f0f0f;font-family:monospace;padding:2rem;"]),
                t = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-1"
                })(["max-width:640px;width:100%;background-color:#1a1a1a;border:1px solid #333;border-radius:8px;overflow:hidden;"]),
                c = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-2"
                })(["background-color:#2a1a1a;border-bottom:1px solid #4a2a2a;padding:1rem 1.5rem;display:flex;align-items:center;gap:0.75rem;"]),
                l = i.ZP.span.withConfig({
                    componentId: "sc-8b48528f-3"
                })(["font-size:1.25rem;color:#ff6b6b;"]),
                a = i.ZP.span.withConfig({
                    componentId: "sc-8b48528f-4"
                })(["color:#ff6b6b;font-weight:bold;font-size:1rem;"]),
                s = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-5"
                })(["padding:1.5rem;"]),
                f = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-6"
                })(["margin-bottom:1.25rem;"]),
                m = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-7"
                })(["color:#888;font-size:0.75rem;margin-bottom:0.25rem;"]),
                p = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-8"
                })(["color:#ffd166;font-size:0.95rem;background-color:#252010;padding:0.5rem 0.75rem;border-radius:4px;border:1px solid #4a3a10;"]),
                h = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-9"
                })(["display:flex;gap:1rem;"]),
                b = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-10"
                })(["color:#a8dadc;span{color:#888;}"]),
                u = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-11"
                })(["color:#aaa;font-size:0.8rem;background-color:#111;padding:0.75rem;border-radius:4px;border:1px solid #2a2a2a;word-break:break-all;white-space:pre-wrap;"]),
                g = i.ZP.div.withConfig({
                    componentId: "sc-8b48528f-12"
                })(["border-top:1px solid #2a2a2a;padding:1rem 1.5rem;display:flex;gap:0.75rem;justify-content:flex-end;"]),
                x = i.ZP.button.withConfig({
                    componentId: "sc-8b48528f-13"
                })(["background-color:transparent;border:1px solid #444;color:#aaa;padding:0.5rem 1rem;border-radius:4px;cursor:pointer;font-size:0.85rem;font-family:monospace;&:hover{border-color:#666;color:#ccc;}"]),
                j = i.ZP.button.withConfig({
                    componentId: "sc-8b48528f-14"
                })(["background-color:#2a1a1a;border:1px solid #4a2a2a;color:#ff6b6b;padding:0.5rem 1rem;border-radius:4px;cursor:pointer;font-size:0.85rem;font-family:monospace;&:hover{background-color:#3a2020;border-color:#6a3a3a;}"]);

            function v(o) {
                var n;
                let {
                    error: e,
                    reset: i
                } = o, v = function(o) {
                    if (!o || "string" != typeof o) return null;
                    let n = o.match(/template:([^\s,]+)/i),
                        e = o.match(/file:([^\s,]+)/i),
                        r = o.match(/line:(\d+)/i),
                        i = o.match(/col:(\d+)/i);
                    return n || e || r || i ? {
                        template: null == n ? void 0 : n[1],
                        file: null == e ? void 0 : e[1],
                        line: null == r ? void 0 : r[1],
                        col: null == i ? void 0 : i[1]
                    } : null
                }(null !== (n = null == e ? void 0 : e.digest) && void 0 !== n ? n : "");
                return (0, r.jsx)(d, {
                    children: (0, r.jsxs)(t, {
                        children: [(0, r.jsxs)(c, {
                            children: [(0, r.jsx)(l, {
                                children: "⚠"
                            }), (0, r.jsx)(a, {
                                children: "Erro no template Liquid"
                            })]
                        }), (0, r.jsx)(s, {
                            children: v ? (0, r.jsxs)(r.Fragment, {
                                children: [v.template && (0, r.jsxs)(f, {
                                    children: [(0, r.jsx)(m, {
                                        children: "TEMPLATE"
                                    }), (0, r.jsx)(p, {
                                        children: v.template
                                    })]
                                }), v.file && (0, r.jsxs)(f, {
                                    children: [(0, r.jsx)(m, {
                                        children: "ARQUIVO"
                                    }), (0, r.jsx)(p, {
                                        children: v.file
                                    })]
                                }), (v.line || v.col) && (0, r.jsxs)(f, {
                                    style: {
                                        marginBottom: 0
                                    },
                                    children: [(0, r.jsx)(m, {
                                        children: "LOCALIZA\xc7\xc3O"
                                    }), (0, r.jsxs)(h, {
                                        children: [v.line && (0, r.jsxs)(b, {
                                            children: [(0, r.jsx)("span", {
                                                children: "Linha "
                                            }), v.line]
                                        }), v.col && (0, r.jsxs)(b, {
                                            children: [(0, r.jsx)("span", {
                                                children: "Coluna "
                                            }), v.col]
                                        })]
                                    })]
                                })]
                            }) : (0, r.jsxs)(f, {
                                style: {
                                    marginBottom: 0
                                },
                                children: [(0, r.jsx)(m, {
                                    children: "MENSAGEM"
                                }), (0, r.jsx)(u, {
                                    children: "Ocorreu um erro inesperado. Verifique o template e tente novamente."
                                })]
                            })
                        }), (0, r.jsxs)(g, {
                            children: [(0, r.jsx)(x, {
                                onClick: () => window.history.back(),
                                children: "Voltar"
                            }), (0, r.jsx)(j, {
                                onClick: i,
                                children: "Tentar novamente"
                            })]
                        })]
                    })
                })
            }
        }
    },
    function(o) {
        o.O(0, [7041, 2971, 7023, 1744], function() {
            return o(o.s = 69693)
        }), _N_E = o.O()
    }
]);