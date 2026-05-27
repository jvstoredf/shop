(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5952], {
        36452: function(e, t, r) {
            Promise.resolve().then(r.t.bind(r, 231, 23)), Promise.resolve().then(r.bind(r, 48264)), Promise.resolve().then(r.bind(r, 90088)), Promise.resolve().then(r.bind(r, 15625)), Promise.resolve().then(r.bind(r, 65722)), Promise.resolve().then(r.bind(r, 83063)), Promise.resolve().then(r.bind(r, 23153)), Promise.resolve().then(r.bind(r, 10096)), Promise.resolve().then(r.bind(r, 89684)), Promise.resolve().then(r.bind(r, 76529)), Promise.resolve().then(r.bind(r, 3249)), Promise.resolve().then(r.bind(r, 39203))
        },
        48264: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r(57437),
                i = r(10096),
                o = r(7667);

            function l() {
                let {
                    infosHeader: e
                } = (0, o.O)(), t = null == e ? void 0 : e.infos;
                return (0, n.jsx)(n.Fragment, {
                    children: (null == t ? void 0 : t.banner) && (0, n.jsx)(i.Banner, {
                        children: (0, n.jsx)("img", {
                            src: null == t ? void 0 : t.banner,
                            alt: "banner",
                            loading: "eager",
                            fetchPriority: "high"
                        })
                    })
                })
            }
        },
        90088: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return m
                }
            });
            var n = r(57437),
                i = r(37041);
            let o = i.ZP.div.withConfig({
                    componentId: "sc-5dfe3080-0"
                })(["display:flex;flex-direction:column;gap:2rem;@media (max-width:766px){gap:1.5rem;}"]),
                l = i.ZP.div.withConfig({
                    componentId: "sc-5dfe3080-1"
                })(["display:flex;flex-direction:column;gap:1.5rem;@keyframes AnimeCategory{0%{transform:translateY(-25px);opacity:0;}100%{transform:translateY(0);opacity:1;}}@media (max-width:766px){gap:1rem;}"]),
                a = i.ZP.div.withConfig({
                    componentId: "sc-5dfe3080-2"
                })(["display:flex;h1{display:flex;backdrop-filter:blur(10px);padding:0.5rem 1rem;border-radius:10px;background-color:", "40;border:2px solid ", "40;@media (max-width:766px){font-weight:450;font-size:12px;line-height:18px;}}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                });
            var c = r(95032),
                s = r(2265),
                d = r(56225),
                u = r(96929),
                f = r(22221),
                h = r(59539);

            function g(e, t) {
                if (!t || !Array.isArray(t)) return [];
                let r = t.find(t => t.category === e);
                return r ? r.products : []
            }

            function p(e) {
                var t;
                let {
                    id: r,
                    type: i
                } = e, [o, l] = (0, s.useState)(!0), a = (0, s.useRef)(null), [p, x] = (0, s.useState)(!1), {
                    categorys: m,
                    setCategorys: v
                } = (0, h.Q)(), b = g(r, m);
                return (0, s.useEffect)(() => {
                    if (p || b.length > 0) return;
                    let e = new IntersectionObserver(t => {
                        t[0].isIntersecting && ((0, d.J)({
                            url: "".concat("/produtos", "?categoria=").concat(r, "&page=1"),
                            method: "GET",
                            auth: !1
                        }).then(e => {
                            e.status && e.data ? (l(!1), v(t => t.some(e => e.category === r) ? t : [...t, {
                                category: r,
                                products: e.data.itens
                            }])) : console.error(e.error || "Erro desconhecido")
                        }).catch(e => {
                            console.error("Error fetching products:", e)
                        }), x(!0), e.disconnect())
                    }, {
                        threshold: 0,
                        rootMargin: "500px"
                    });
                    return a.current && e.observe(a.current), () => {
                        e && a.current && e.unobserve(a.current)
                    }
                }, [p, r]), (0, n.jsx)(c.ck, {
                    ref: a,
                    children: b.length <= 0 && o ? (0, n.jsxs)(c.BR, {
                        children: [(0, n.jsx)(u.Z, {
                            height: "250px"
                        }), (0, n.jsx)(u.Z, {
                            height: "250px"
                        }), (0, n.jsx)(u.Z, {
                            height: "250px"
                        }), (0, n.jsx)(u.Z, {
                            height: "250px"
                        }), (0, n.jsx)(u.Z, {
                            height: "250px"
                        })]
                    }) : (0, n.jsx)(c.BR, {
                        className: "home" === i ? "home" : "category",
                        children: null === (t = g(r, m)) || void 0 === t ? void 0 : t.map((e, t) => (0, n.jsx)(f.Z, {
                            product: e,
                            category: r
                        }, t))
                    })
                })
            }
            var x = r(50671);

            function m(e) {
                let {
                    categorys: t,
                    type: r
                } = e, i = (e => {
                    if (!e || !Array.isArray(e)) return [];
                    let t = [],
                        r = e => {
                            e && Array.isArray(e) && (null == e || e.forEach(e => {
                                var n;
                                t.push(e), (null == e ? void 0 : e.sub_categorys) && (null == e ? void 0 : null === (n = e.sub_categorys) || void 0 === n ? void 0 : n.length) > 0 && r(null == e ? void 0 : e.sub_categorys)
                            }))
                        };
                    return r(e), t
                })(t).filter(e => {
                    var t;
                    return (null == e ? void 0 : null === (t = e.sub_categorys) || void 0 === t ? void 0 : t.length) === 0
                });
                return (0, n.jsx)(o, {
                    children: null == i ? void 0 : i.map(e => (0, n.jsx)(s.Fragment, {
                        children: (0, n.jsxs)(l, {
                            children: [(0, n.jsx)(a, {
                                children: (0, n.jsx)(x.Z, {
                                    Size: 14,
                                    Height: 20,
                                    children: e.nome
                                })
                            }), (0, n.jsx)(p, {
                                id: e.id,
                                type: r
                            })]
                        }, e.id)
                    }, e.id))
                })
            }
        },
        58967: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return l
                }
            });
            var n = r(57437),
                i = r(84815),
                o = r(2265);

            function l(e) {
                let {
                    item: t
                } = e;
                return (0, n.jsx)(o.Fragment, {
                    children: (null == t ? void 0 : t.icon) && (0, n.jsxs)(i.Category, {
                        className: "card_category",
                        href: "/category/".concat(t.slug || t.id),
                        "aria-label": "Categoria ".concat(null == t ? void 0 : t.title),
                        draggable: !1,
                        prefetch: !1,
                        children: [(0, n.jsx)(i.Icon, {
                            className: (null == t ? void 0 : t.sub_title) ? "cartontitle" : "",
                            src: null == t ? void 0 : t.icon,
                            alt: "",
                            draggable: !1
                        }), (0, n.jsx)(i.NameContainer, {
                            children: (null == t ? void 0 : t.sub_title) && (0, n.jsx)(i.Name, {
                                children: null == t ? void 0 : t.sub_title
                            })
                        })]
                    })
                })
            }
        },
        15625: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r(57437),
                i = r(84815),
                o = r(2265),
                l = r(58967);

            function a(e) {
                let {
                    categorys: t
                } = e, r = (0, o.useRef)(null), a = (0, o.useRef)(!1), c = (0, o.useRef)(0), s = (0, o.useRef)(0), [d, u] = (0, o.useState)(!1), [f, h] = (0, o.useState)(!1), g = () => {
                    let e = r.current;
                    if (!e) return;
                    let t = e.scrollLeft,
                        n = e.scrollWidth - e.clientWidth;
                    u(t > 0), h(t < n - 1)
                }, p = e => {
                    let t = r.current;
                    if (!t) return;
                    let n = t.offsetWidth / 2;
                    t.scrollBy({
                        left: "left" === e ? -n : n,
                        behavior: "smooth"
                    }), setTimeout(g, 300)
                };
                (0, o.useEffect)(() => {
                    g();
                    let e = r.current;
                    return e && e.addEventListener("scroll", g), () => {
                        e && e.removeEventListener("scroll", g)
                    }
                }, []);
                let x = (e => {
                        let t = [],
                            r = e => {
                                null == e || e.forEach(e => {
                                    t.push(e), e.sub_categorys && e.sub_categorys.length > 0 && r(e.sub_categorys)
                                })
                            };
                        return r(e), t
                    })(t).filter(e => {
                        var t;
                        return (null == e ? void 0 : null === (t = e.sub_categorys) || void 0 === t ? void 0 : t.length) === 0
                    }),
                    m = null == x ? void 0 : x.some(e => null == e ? void 0 : e.icon);
                return (0, n.jsx)(n.Fragment, {
                    children: m && (0, n.jsxs)(i.W2, {
                        children: [(0, n.jsx)(i.zx, {
                            className: "left ".concat(d ? "" : "off"),
                            onClick: () => p("left"),
                            disabled: !d,
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "#ffffff",
                                viewBox: "0 0 256 256",
                                children: (0, n.jsx)("path", {
                                    d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
                                })
                            })
                        }), (0, n.jsx)(i.zx, {
                            className: "right ".concat(f ? "" : "off"),
                            onClick: () => p("right"),
                            disabled: !f,
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "#ffffff",
                                viewBox: "0 0 256 256",
                                children: (0, n.jsx)("path", {
                                    d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                                })
                            })
                        }), (0, n.jsx)(i.qX, {
                            ref: r,
                            onMouseDown: e => {
                                var t, n;
                                a.current = !0, c.current = e.pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0), s.current = (null === (n = r.current) || void 0 === n ? void 0 : n.scrollLeft) || 0
                            },
                            onMouseLeave: () => {
                                a.current = !1
                            },
                            onMouseUp: () => {
                                a.current = !1, g()
                            },
                            onMouseMove: e => {
                                var t;
                                if (!a.current) return;
                                let n = (e.pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0) - c.current) * 1.8;
                                r.current && (r.current.scrollLeft = s.current - n, g())
                            },
                            onTouchStart: e => {
                                var t, n;
                                a.current = !0, c.current = e.touches[0].pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0), s.current = (null === (n = r.current) || void 0 === n ? void 0 : n.scrollLeft) || 0
                            },
                            onTouchMove: e => {
                                var t;
                                if (!a.current) return;
                                let n = (e.touches[0].pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0) - c.current) * 1.8;
                                r.current && (r.current.scrollLeft = s.current - n, g())
                            },
                            onTouchEnd: () => {
                                a.current = !1, g()
                            },
                            className: "".concat(f ? "right" : "", " ").concat(d ? "left" : ""),
                            children: null == x ? void 0 : x.map((e, t) => (0, n.jsx)(l.Z, {
                                item: e
                            }, t))
                        })]
                    })
                })
            }
        },
        84815: function(e, t, r) {
            "use strict";
            r.d(t, {
                Category: function() {
                    return c
                },
                Icon: function() {
                    return a
                },
                Name: function() {
                    return d
                },
                NameContainer: function() {
                    return s
                },
                W2: function() {
                    return o
                },
                qX: function() {
                    return l
                },
                zx: function() {
                    return u
                }
            });
            var n = r(87138),
                i = r(37041);
            let o = i.ZP.div.withConfig({
                    componentId: "sc-2877a2a6-0"
                })(["display:flex;flex-direction:column;gap:1rem;position:relative;"]),
                l = i.ZP.div.withConfig({
                    componentId: "sc-2877a2a6-1"
                })(["display:flex;align-items:center;gap:1rem;overflow-x:auto;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;&::-webkit-scrollbar{display:none;}touch-action:pan-x;touch-action:pan-y;cursor:grab;&:active{cursor:grabbing;}.card_category{width:calc(100% / 2.2 - 1rem) !important;max-width:160px !important;}@media (max-width:769px){.card_category{max-width:120px !important;}}&.right{mask-image:linear-gradient( to right,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );-webkit-mask-image:linear-gradient( to right,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );}&.left{mask-image:linear-gradient( to left,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );-webkit-mask-image:linear-gradient( to left,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );}&.left.right{mask-image:linear-gradient( to right,transparent 0%,black 30px,black calc(100% - ", "px),transparent 100% );-webkit-mask-image:linear-gradient( to right,transparent 0%,black 30px,black calc(100% - ", "px),transparent 100% );}"], 30, 30, 30, 30, 30, 30),
                a = i.ZP.img.withConfig({
                    componentId: "sc-2877a2a6-2"
                })(["position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;z-index:1;&.cartontitle{mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );-webkit-mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );}"]),
                c = (0, i.ZP)(n.default).withConfig({
                    componentId: "sc-2877a2a6-3"
                })(["flex:0 0 auto;width:100%;aspect-ratio:180 / 250;position:relative;background:", ";box-shadow:", ";border-radius:10px;margin:2px;color:", ";background:linear-gradient( to top,", ",rgb(0,0,0),rgb(0,0,0) );border:1px solid ", ";overflow:hidden;display:flex;align-items:center;justify-content:center;transition:0.2s;&:hover{transform:scale(0.97);border:1px solid ", ";box-shadow:none;}cursor:pointer;&:active{transform:scale(1);}user-select:none;-webkit-user-drag:none;"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.shadow.bottom
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.h1
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.border.border
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.reverse
                }),
                s = i.ZP.div.withConfig({
                    componentId: "sc-2877a2a6-4"
                })(["position:absolute;bottom:0;z-index:2;margin:0.5rem;height:50px;max-height:50px;"]),
                d = i.ZP.div.withConfig({
                    componentId: "sc-2877a2a6-5"
                })(["text-align:center;font-style:normal;font-size:clamp(11px,3vw,15px);font-weight:400;line-height:20px;color:", ";overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;word-break:break-word;"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.h1
                }),
                u = i.ZP.button.withConfig({
                    componentId: "sc-2877a2a6-6"
                })(["position:absolute;display:flex;justify-content:center;align-items:center;top:50%;transform:translateY(-50%);&.left{left:-16px;}&.right{right:-16px;}z-index:4;background:", ";border:none;padding:0;font-size:1.2rem;border-radius:8px;cursor:pointer;transition:0.2s;svg{padding:0.3rem;width:24px;height:24px;fill:", ";}&.off{opacity:0;pointer-events:none;}&:active{transform:scale(0.97);}@media (max-width:769px){display:none;}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.buttons.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.buttons.text.text
                })
        },
        65722: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return v
                }
            });
            var n = r(57437),
                i = r(2265),
                o = r(53463),
                l = r(90088),
                a = r(15625),
                c = r(31877),
                s = r(23153),
                d = r(37104),
                u = r(50671);

            function f(e) {
                let {
                    categorys: t
                } = e, r = (null == t ? void 0 : t.length) > 0 ? null == t ? void 0 : t.filter(e => {
                    var t;
                    return (null == e ? void 0 : null === (t = e.sub_categorys) || void 0 === t ? void 0 : t.length) > 0
                }) : [];
                return (0, n.jsx)(n.Fragment, {
                    children: (null == r ? void 0 : r.length) > 0 && (0, n.jsx)(s.Container, {
                        children: null == r ? void 0 : r.map((e, t) => (0, n.jsxs)(s.Group, {
                            href: "/category/".concat((null == e ? void 0 : e.slug) || (null == e ? void 0 : e.id)),
                            prefetch: !1,
                            $animationDelay: .1 * t,
                            children: [(0, n.jsx)("div", {
                                className: "group_banner",
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: e.banner ? "url(".concat(e.banner, ")") : "none",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    opacity: .18
                                }
                            }), (0, n.jsxs)(s.GroupIcons, {
                                children: [(0, n.jsx)(s.GroupIcon1, {
                                    src: e.icon + "?width=100&height=100",
                                    alt: ""
                                }), (0, n.jsx)(s.GroupIcon2, {
                                    src: e.icon + "?width=100&height=100",
                                    alt: ""
                                })]
                            }), (0, n.jsxs)(s.GroupHeader, {
                                children: [(0, n.jsxs)(s.GroupTitle, {
                                    children: [(0, n.jsx)(u.Z, {
                                        Weight: 600,
                                        Size: 20,
                                        Height: 25,
                                        children: e.nome
                                    }), (0, n.jsx)(d.Z, {
                                        Size: 13,
                                        Height: 16,
                                        children: "Visualizar produtos da categoria"
                                    })]
                                }), (0, n.jsxs)(s.GroupButton, {
                                    children: ["Ver produtos", (0, n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        fill: "#ffffff",
                                        viewBox: "0 0 256 256",
                                        children: (0, n.jsx)("path", {
                                            d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                                        })
                                    })]
                                })]
                            })]
                        }, t))
                    })
                })
            }
            var h = r(83063),
                g = r(84815),
                p = r(58967);

            function x(e) {
                let {
                    categorys: t
                } = e, r = (0, i.useRef)(null), o = (0, i.useRef)(!1), l = (0, i.useRef)(0), a = (0, i.useRef)(0), [c, s] = (0, i.useState)(!1), [d, u] = (0, i.useState)(!1), f = () => {
                    let e = r.current;
                    if (!e) return;
                    let t = e.scrollLeft,
                        n = e.scrollWidth - e.clientWidth;
                    s(t > 0), u(t < n - 1)
                }, h = e => {
                    let t = r.current;
                    if (!t) return;
                    let n = t.offsetWidth / 2;
                    t.scrollBy({
                        left: "left" === e ? -n : n,
                        behavior: "smooth"
                    }), setTimeout(f, 300)
                };
                (0, i.useEffect)(() => {
                    f();
                    let e = r.current;
                    return e && e.addEventListener("scroll", f), () => {
                        e && e.removeEventListener("scroll", f)
                    }
                }, []);
                let x = (e => {
                        let t = [],
                            r = e => {
                                null == e || e.forEach(e => {
                                    var n;
                                    t.push(e), (null == e ? void 0 : e.sub_categorys) && (null == e ? void 0 : null === (n = e.sub_categorys) || void 0 === n ? void 0 : n.length) > 0 && r(null == e ? void 0 : e.sub_categorys)
                                })
                            };
                        return r(e), t
                    })(t),
                    m = null == x ? void 0 : x.some(e => null == e ? void 0 : e.icon);
                return (0, n.jsx)(n.Fragment, {
                    children: m && (0, n.jsxs)(g.W2, {
                        children: [(0, n.jsx)(g.zx, {
                            className: "left ".concat(c ? "" : "off"),
                            onClick: () => h("left"),
                            disabled: !c,
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "#ffffff",
                                viewBox: "0 0 256 256",
                                children: (0, n.jsx)("path", {
                                    d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
                                })
                            })
                        }), (0, n.jsx)(g.zx, {
                            className: "right ".concat(d ? "" : "off"),
                            onClick: () => h("right"),
                            disabled: !d,
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "#ffffff",
                                viewBox: "0 0 256 256",
                                children: (0, n.jsx)("path", {
                                    d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                                })
                            })
                        }), (0, n.jsx)(g.qX, {
                            ref: r,
                            onMouseDown: e => {
                                var t, n;
                                o.current = !0, l.current = e.pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0), a.current = (null === (n = r.current) || void 0 === n ? void 0 : n.scrollLeft) || 0
                            },
                            onMouseLeave: () => {
                                o.current = !1
                            },
                            onMouseUp: () => {
                                o.current = !1, f()
                            },
                            onMouseMove: e => {
                                var t;
                                if (!o.current) return;
                                let n = (e.pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0) - l.current) * 1.8;
                                r.current && (r.current.scrollLeft = a.current - n, f())
                            },
                            onTouchStart: e => {
                                var t, n;
                                o.current = !0, l.current = e.touches[0].pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0), a.current = (null === (n = r.current) || void 0 === n ? void 0 : n.scrollLeft) || 0
                            },
                            onTouchMove: e => {
                                var t;
                                if (!o.current) return;
                                let n = (e.touches[0].pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0) - l.current) * 1.8;
                                r.current && (r.current.scrollLeft = a.current - n, f())
                            },
                            onTouchEnd: () => {
                                o.current = !1, f()
                            },
                            className: "".concat(d ? "right" : "", " ").concat(c ? "left" : ""),
                            children: null == x ? void 0 : x.map((e, t) => (0, n.jsx)(p.Z, {
                                item: e
                            }, t))
                        })]
                    })
                })
            }
            var m = r(48264);

            function v(e) {
                var t, r, i, s, d;
                let {
                    page: u,
                    categorys: g
                } = e, p = {
                    COMPONENT_CATEGORYS_CARDS: (0, n.jsx)(a.default, {
                        categorys: g
                    }, "categories"),
                    COMPONENT_PRODUCTS_CARDS: (0, n.jsx)(l.default, {
                        categorys: g,
                        type: "home"
                    }, "products"),
                    COMPONENT_SUB_CATEGORYS_CARDS: (0, n.jsx)(f, {
                        categorys: g
                    }, "sub_categorys"),
                    COMPONENT_FEEDBACKS_CARDS: (0, n.jsx)(h.default, {}, "feedbacks"),
                    COMPONENT_CATEGORYS_CARDS_ALL: (0, n.jsx)(x, {
                        categorys: g
                    }, "categorys_all"),
                    COMPONENT_BACKGROUND_IMAGE: (0, n.jsx)(m.default, {}, "background_image")
                };
                return (0, n.jsxs)("div", {
                    className: "page-container",
                    children: [(null == u ? void 0 : null === (t = u.page) || void 0 === t ? void 0 : t.css) && (0, n.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: u.page.css
                        }
                    }), (null == u ? void 0 : null === (r = u.page) || void 0 === r ? void 0 : r.html) && (0, o.ZP)(null == u ? void 0 : null === (i = u.page) || void 0 === i ? void 0 : i.html, {
                        replace: e => {
                            if (e instanceof o.W_) {
                                delete e.attribs.onclick, delete e.attribs.onmouseover;
                                let t = e.attribs.id;
                                if (t && p[t]) return p[t]
                            }
                            return null
                        }
                    }), (null == u ? void 0 : null === (s = u.page) || void 0 === s ? void 0 : s.js) && (0, n.jsx)(c.default, {
                        id: "page-js-home",
                        strategy: "afterInteractive",
                        children: null == u ? void 0 : null === (d = u.page) || void 0 === d ? void 0 : d.js
                    })]
                })
            }
        },
        83063: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return G
                }
            });
            var n = r(57437),
                i = r(37041);
            let o = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-0"
                })(["display:flex;flex-direction:column;gap:1.5rem;margin-top:2rem;"]),
                l = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-1"
                })(["display:flex;h1{display:flex;backdrop-filter:blur(10px);padding:0.5rem 1rem;border-radius:10px;background-color:", "40;border:2px solid ", "40;@media (max-width:766px){font-weight:450;font-size:12px;line-height:18px;}}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }),
                a = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-2"
                })(["display:flex;gap:1rem;"]),
                c = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-3"
                })(["display:flex;flex-direction:column;justify-content:space-between;gap:0.5rem;flex:1;border-radius:10px;background-color:", ";border:1px solid ", ";padding:1rem;min-width:200px;"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.border.border
                });
            i.ZP.div.withConfig({
                componentId: "sc-c23da882-4"
            })(["display:flex;flex-direction:column;"]);
            let s = i.ZP.div.withConfig({
                componentId: "sc-c23da882-5"
            })(["display:flex;align-items:center;gap:0.5rem;svg.user-icon-feedback{width:35px;height:35px;min-width:35px;min-height:35px;fill:", ";}"], e => {
                let {
                    theme: t
                } = e;
                return t.text.p
            });
            i.ZP.div.withConfig({
                componentId: "sc-c23da882-6"
            })(["font-style:normal;font-weight:400;font-size:11px;line-height:15px;color:", ";"], e => {
                let {
                    theme: t
                } = e;
                return t.text.p
            }), i.ZP.img.withConfig({
                componentId: "sc-c23da882-7"
            })([""]);
            let d = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-8"
                })(["display:flex;align-items:center;gap:0.2rem;"]),
                u = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-9"
                })(["display:flex;align-items:center;justify-content:center;svg{cursor:pointer;width:18px;height:18px;min-width:18px;min-height:18px;fill:", "40;&:active{transform:scale(0.9);}}svg.active{fill:", ";}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.yellow
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.yellow
                }),
                f = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-10"
                })([""]),
                h = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-11"
                })(["font-style:normal;font-weight:400;font-size:10px;line-height:13px;color:", ";"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.p
                }),
                g = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-12"
                })(["display:flex;flex-direction:column;gap:0.25rem;.feedback-description{font-style:normal;font-weight:400;font-size:10px;line-height:13px;color:", ";overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.p
                }),
                p = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-13"
                })(["display:flex;flex-direction:column;gap:0.5rem;"]),
                x = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-14"
                })(["display:flex;flex-direction:column;gap:0.5rem;"]),
                m = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-15"
                })(["padding:0.5rem;border-radius:6px;background-color:", "10;border:1px solid ", ";box-shadow:0px 0px 10px 0px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:space-between;gap:0.5rem;svg.feedback-product-arrow{width:20px;height:20px;min-width:20px;min-height:20px;fill:", ";}cursor:pointer;user-select:none;&:hover{background-color:", ";}&:active{transform:scale(0.95);}transition:all 0.1s ease-in-out;"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.reverse
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.border.border
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.p
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.border.border
                }),
                v = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-16"
                })(["display:flex;max-height:40px;img{width:100%;max-width:70px;min-width:60px;height:100%;max-height:33px;object-fit:cover;border-radius:6px;}"]),
                b = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-17"
                })(["display:flex;align-items:center;gap:0.5rem;"]),
                w = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-18"
                })(["display:flex;flex-direction:column;h1{font-style:normal;font-weight:400;font-size:14px;line-height:18px;color:", ";overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.h1
                }),
                y = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-19"
                })(["display:flex;align-items:center;gap:0.3rem;.feedback-price{font-style:normal;font-weight:500;font-size:12px;line-height:18px;color:", ";}.feedback-compare-at-price{font-style:normal;font-weight:400;font-size:11px;line-height:12px;color:", ";text-decoration:line-through;}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.green
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.p
                }),
                j = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-20"
                })(["display:flex;gap:1rem;"]),
                k = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-21"
                })(["display:flex;flex-direction:column;gap:.5rem;min-width:209px;width:100%;background-color:", ";padding:1rem;border:1px solid ", ";border-radius:10px;"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.border.border
                }),
                C = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-22"
                })(["display:flex;gap:.5rem;"]),
                Z = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-23"
                })([""]),
                P = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-24"
                })(["display:flex;flex-direction:column;gap:.4rem;width:100%;"]),
                I = i.ZP.div.withConfig({
                    componentId: "sc-c23da882-25"
                })(["display:flex;flex-direction:column;gap:.5rem;"]);
            var L = r(87138);
            let S = i.ZP.div.withConfig({
                    componentId: "sc-3eb78f8-0"
                })(["display:flex;flex-direction:column;gap:1rem;position:relative;"]),
                _ = i.ZP.div.withConfig({
                    componentId: "sc-3eb78f8-1"
                })(["display:flex;align-items:center;gap:1rem;user-select:none;overflow-x:auto;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;&::-webkit-scrollbar{display:none;}touch-action:pan-x;touch-action:pan-y;cursor:grab;&:active{cursor:grabbing;}.card_category{width:calc(100% / 2.2 - 1rem) !important;max-width:160px !important;}@media (max-width:769px){.card_category{max-width:120px !important;}}&.right{mask-image:linear-gradient( to right,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );-webkit-mask-image:linear-gradient( to right,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );}&.left{mask-image:linear-gradient( to left,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );-webkit-mask-image:linear-gradient( to left,rgb(0,0,0) 0%,rgba(0,0,0,1) calc(100% - ", "px),rgba(0,0,0,0) 100% );}&.left.right{mask-image:linear-gradient( to right,transparent 0%,black 30px,black calc(100% - ", "px),transparent 100% );-webkit-mask-image:linear-gradient( to right,transparent 0%,black 30px,black calc(100% - ", "px),transparent 100% );}"], 30, 30, 30, 30, 30, 30);
            i.ZP.img.withConfig({
                componentId: "sc-3eb78f8-2"
            })(["position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;z-index:1;&.cartontitle{mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );-webkit-mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );}"]), (0, i.ZP)(L.default).withConfig({
                componentId: "sc-3eb78f8-3"
            })(["flex:0 0 auto;width:100%;aspect-ratio:180 / 250;position:relative;background:", ";box-shadow:", ";border-radius:10px;margin:2px;color:", ";background:linear-gradient( to top,", ",rgb(0,0,0),rgb(0,0,0) );border:1px solid ", ";overflow:hidden;display:flex;align-items:center;justify-content:center;transition:0.2s;&:hover{transform:scale(0.97);border:1px solid ", ";box-shadow:none;}cursor:pointer;&:active{transform:scale(1);}user-select:none;-webkit-user-drag:none;"], e => {
                let {
                    theme: t
                } = e;
                return t.color.primary
            }, e => {
                let {
                    theme: t
                } = e;
                return t.shadow.bottom
            }, e => {
                let {
                    theme: t
                } = e;
                return t.text.h1
            }, e => {
                let {
                    theme: t
                } = e;
                return t.color.primary
            }, e => {
                let {
                    theme: t
                } = e;
                return t.border.border
            }, e => {
                let {
                    theme: t
                } = e;
                return t.color.reverse
            }), i.ZP.div.withConfig({
                componentId: "sc-3eb78f8-4"
            })(["position:absolute;bottom:0;z-index:2;margin:0.5rem;height:50px;max-height:50px;"]), i.ZP.div.withConfig({
                componentId: "sc-3eb78f8-5"
            })(["text-align:center;font-style:normal;font-size:clamp(11px,3vw,15px);font-weight:400;line-height:20px;color:", ";overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;word-break:break-word;"], e => {
                let {
                    theme: t
                } = e;
                return t.text.h1
            });
            let M = i.ZP.button.withConfig({
                componentId: "sc-3eb78f8-6"
            })(["position:absolute;display:flex;justify-content:center;align-items:center;top:50%;transform:translateY(-50%);&.left{left:-16px;}&.right{right:-16px;}z-index:4;background:", ";border:none;padding:0;font-size:1.2rem;border-radius:8px;cursor:pointer;transition:0.2s;svg{padding:0.3rem;width:24px;height:24px;fill:", ";}&.off{opacity:0;pointer-events:none;}&:active{transform:scale(0.97);}@media (max-width:769px){display:none;}"], e => {
                let {
                    theme: t
                } = e;
                return t.buttons.primary
            }, e => {
                let {
                    theme: t
                } = e;
                return t.buttons.text.text
            });
            var z = r(2265);

            function N(e) {
                let {
                    children: t
                } = e, r = (0, z.useRef)(null), i = (0, z.useRef)(!1), o = (0, z.useRef)(0), l = (0, z.useRef)(0), [a, c] = (0, z.useState)(!1), [s, d] = (0, z.useState)(!1), u = () => {
                    let e = r.current;
                    if (!e) return;
                    let t = e.scrollLeft,
                        n = e.scrollWidth - e.clientWidth;
                    c(t > 0), d(t < n - 1)
                }, f = e => {
                    let t = r.current;
                    if (!t) return;
                    let n = t.offsetWidth / 2;
                    t.scrollBy({
                        left: "left" === e ? -n : n,
                        behavior: "smooth"
                    }), setTimeout(u, 300)
                };
                return (0, z.useEffect)(() => {
                    u();
                    let e = r.current;
                    return e && e.addEventListener("scroll", u), () => {
                        e && e.removeEventListener("scroll", u)
                    }
                }, []), (0, n.jsxs)(S, {
                    children: [(0, n.jsx)(M, {
                        className: "left ".concat(a ? "" : "off"),
                        onClick: () => f("left"),
                        disabled: !a,
                        children: (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "#ffffff",
                            viewBox: "0 0 256 256",
                            children: (0, n.jsx)("path", {
                                d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
                            })
                        })
                    }), (0, n.jsx)(M, {
                        className: "right ".concat(s ? "" : "off"),
                        onClick: () => f("right"),
                        disabled: !s,
                        children: (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "#ffffff",
                            viewBox: "0 0 256 256",
                            children: (0, n.jsx)("path", {
                                d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                            })
                        })
                    }), (0, n.jsx)(_, {
                        ref: r,
                        onMouseDown: e => {
                            var t, n;
                            i.current = !0, o.current = e.pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0), l.current = (null === (n = r.current) || void 0 === n ? void 0 : n.scrollLeft) || 0
                        },
                        onMouseLeave: () => {
                            i.current = !1
                        },
                        onMouseUp: () => {
                            i.current = !1, u()
                        },
                        onMouseMove: e => {
                            var t;
                            if (!i.current) return;
                            let n = (e.pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0) - o.current) * 1.8;
                            r.current && (r.current.scrollLeft = l.current - n, u())
                        },
                        onTouchStart: e => {
                            var t, n;
                            i.current = !0, o.current = e.touches[0].pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0), l.current = (null === (n = r.current) || void 0 === n ? void 0 : n.scrollLeft) || 0
                        },
                        onTouchMove: e => {
                            var t;
                            if (!i.current) return;
                            let n = (e.touches[0].pageX - ((null === (t = r.current) || void 0 === t ? void 0 : t.offsetLeft) || 0) - o.current) * 1.8;
                            r.current && (r.current.scrollLeft = l.current - n, u())
                        },
                        onTouchEnd: () => {
                            i.current = !1, u()
                        },
                        className: "".concat(s ? "right" : "", " ").concat(a ? "left" : ""),
                        children: t
                    })]
                })
            }
            var A = r(50671),
                E = r(37104),
                T = r(56225),
                R = r(40633),
                D = r(30474),
                O = r(96929),
                B = r(7667);

            function G() {
                let {
                    infosHeader: e
                } = (0, B.O)(), [t, r] = (0, z.useState)([]), [i, j] = (0, z.useState)(!1), k = (0, z.useRef)(null), [C, Z] = (0, z.useState)(!0);
                return ((0, z.useEffect)(() => {
                    if (i || t.length > 0) return;
                    let e = new IntersectionObserver(t => {
                        t[0].isIntersecting && ((0, T.J)({
                            url: "".concat("/feedback"),
                            method: "GET",
                            auth: !1
                        }).then(e => {
                            e.status && e.data ? (Z(!1), r(e.data)) : console.error(e.error || "Erro desconhecido")
                        }).catch(e => {
                            console.error("Error fetching feedbacks:", e)
                        }), j(!0), e.disconnect())
                    }, {
                        threshold: 0,
                        rootMargin: "500px"
                    });
                    return k.current && e.observe(k.current), () => {
                        e && k.current && e.unobserve(k.current)
                    }
                }, [i]), null == e ? void 0 : e.feedback) ? (0, n.jsx)(o, {
                    ref: k,
                    children: t.length > 0 && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l, {
                            children: (0, n.jsx)(A.Z, {
                                Size: 14,
                                Height: 20,
                                children: "Avalia\xe7\xf5es"
                            })
                        }), (0, n.jsx)(N, {
                            children: C ? (0, n.jsx)(W, {}) : (0, n.jsx)(a, {
                                children: null == t ? void 0 : t.map((e, t) => {
                                    var r, i, o, l, a, j, k, C;
                                    return (0, n.jsxs)(c, {
                                        children: [(0, n.jsxs)(p, {
                                            children: [(0, n.jsxs)(s, {
                                                children: [(0, n.jsx)("svg", {
                                                    className: "user-icon-feedback",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    fill: "#ffffff",
                                                    viewBox: "0 0 256 256",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"
                                                    })
                                                }), (0, n.jsx)(f, {
                                                    children: (0, n.jsx)(d, {
                                                        children: Array.from({
                                                            length: 5
                                                        }).map((t, r) => (0, n.jsx)(u, {
                                                            children: e.star > r ? (0, n.jsx)("svg", {
                                                                className: "active",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                fill: "#ffffff",
                                                                viewBox: "0 0 256 256",
                                                                children: (0, n.jsx)("path", {
                                                                    d: "M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"
                                                                })
                                                            }) : (0, n.jsx)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                fill: "#ffffff",
                                                                viewBox: "0 0 256 256",
                                                                children: (0, n.jsx)("path", {
                                                                    d: "M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"
                                                                })
                                                            })
                                                        }, r))
                                                    })
                                                })]
                                            }), (0, n.jsxs)(g, {
                                                children: [(0, n.jsx)(A.Z, {
                                                    Size: 12,
                                                    Height: 16,
                                                    children: "Coment\xe1rio"
                                                }), (0, n.jsxs)(E.Z, {
                                                    className: "feedback-description",
                                                    Size: 12,
                                                    Height: 16,
                                                    children: ["“", (null == e ? void 0 : e.comment) ? null == e ? void 0 : e.comment : "Sem coment\xe1rio", "”"]
                                                })]
                                            })]
                                        }), (0, n.jsxs)(x, {
                                            children: [(0, n.jsx)(h, {
                                                children: (0, D.kg)(null == e ? void 0 : e.createdAt)
                                            }), (0, n.jsx)(L.default, {
                                                href: "/product/".concat(null == e ? void 0 : e.product_id),
                                                children: (0, n.jsxs)(m, {
                                                    title: null == e ? void 0 : null === (r = e.product) || void 0 === r ? void 0 : r.name,
                                                    children: [(0, n.jsxs)(b, {
                                                        children: [(null == e ? void 0 : null === (i = e.product) || void 0 === i ? void 0 : i.image) && (0, n.jsx)(v, {
                                                            children: (0, n.jsx)("img", {
                                                                src: null === (o = e.product) || void 0 === o ? void 0 : o.image,
                                                                alt: null === (l = e.product) || void 0 === l ? void 0 : l.name
                                                            })
                                                        }), (0, n.jsxs)(w, {
                                                            children: [(0, n.jsx)(A.Z, {
                                                                Size: 12,
                                                                Height: 20,
                                                                children: null === (a = e.product) || void 0 === a ? void 0 : a.name
                                                            }), (0, n.jsxs)(y, {
                                                                children: [(0, n.jsx)("span", {
                                                                    className: "feedback-price",
                                                                    children: (0, R.h)(null === (j = e.product) || void 0 === j ? void 0 : j.valor)
                                                                }), (null === (k = e.product) || void 0 === k ? void 0 : k.comparacao) > 0 && (0, n.jsx)("span", {
                                                                    className: "feedback-compare-at-price",
                                                                    children: (0, R.h)(null === (C = e.product) || void 0 === C ? void 0 : C.comparacao)
                                                                })]
                                                            })]
                                                        })]
                                                    }), (0, n.jsx)("svg", {
                                                        className: "feedback-product-arrow",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        fill: "#ffffff",
                                                        viewBox: "0 0 256 256",
                                                        children: (0, n.jsx)("path", {
                                                            d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })]
                                    }, t)
                                })
                            })
                        })]
                    })
                }) : null
            }
            let W = () => (0, n.jsxs)(j, {
                    children: [(0, n.jsx)(X, {}), (0, n.jsx)(X, {}), (0, n.jsx)(X, {}), (0, n.jsx)(X, {}), (0, n.jsx)(X, {})]
                }),
                X = () => (0, n.jsxs)(k, {
                    children: [(0, n.jsxs)(C, {
                        children: [(0, n.jsx)(Z, {
                            children: (0, n.jsx)(O.Z, {
                                height: "30px",
                                minWidth: "30px"
                            })
                        }), (0, n.jsxs)(P, {
                            children: [(0, n.jsx)(O.Z, {
                                height: "15px",
                                maxWidth: "100px"
                            }), (0, n.jsx)(O.Z, {
                                height: "15px",
                                maxWidth: "200px"
                            })]
                        })]
                    }), (0, n.jsxs)(I, {
                        children: [(0, n.jsx)(O.Z, {
                            height: "15px",
                            maxWidth: "100px"
                        }), (0, n.jsx)(O.Z, {
                            height: "15px",
                            maxWidth: "300px"
                        })]
                    }), (0, n.jsx)(O.Z, {
                        height: "45px",
                        maxWidth: "300px"
                    })]
                })
        },
        23153: function(e, t, r) {
            "use strict";
            r.d(t, {
                Container: function() {
                    return o
                },
                Group: function() {
                    return l
                },
                GroupButton: function() {
                    return f
                },
                GroupHeader: function() {
                    return d
                },
                GroupIcon1: function() {
                    return c
                },
                GroupIcon2: function() {
                    return s
                },
                GroupIcons: function() {
                    return a
                },
                GroupTitle: function() {
                    return u
                }
            });
            var n = r(37041),
                i = r(87138);
            let o = n.ZP.div.withConfig({
                    componentId: "sc-e27bcbc9-0"
                })(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1rem;margin:1rem 0;"]),
                l = (0, n.ZP)(i.default).withConfig({
                    componentId: "sc-e27bcbc9-1"
                })(["position:relative;padding:1rem;border:1px solid ", ";border-radius:10px;box-shadow:", ";background:", ";color:", ";display:flex;align-items:center;gap:1rem;overflow:hidden;@media (max-width:769px){width:100%;}cursor:pointer;user-select:none;transition:0.2s all;opacity:0;transform:translateY(20px);animation:slideInUp 0.6s ease-out forwards;animation-delay:", "s;&::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient( 90deg,transparent,rgba(255,255,255,0.1),rgba(255,255,255,0.3),rgba(255,255,255,0.1),transparent );animation:shine 5s infinite ease-in-out;animation-delay:", "s;z-index:2;pointer-events:none;}@keyframes slideInUp{0%{opacity:0;transform:scale(0.9);}100%{opacity:1;transform:scale(1);}}@keyframes shine{0%{left:-100%;}20%{left:100%;}100%{left:100%;}}&:hover{transform:scale(1.02);border:1px solid ", ";& .group_banner{transition:0.2s all;filter:blur(03px);}}transition:0.2s all;&:active{transition:0.2s all;transform:scale(0.96) !important;}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.border.border
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.shadow.bottom
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.h1
                }, e => {
                    let {
                        $animationDelay: t = 0
                    } = e;
                    return t
                }, e => {
                    let {
                        $animationDelay: t = 0
                    } = e;
                    return t + 2
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.border.focus
                }),
                a = n.ZP.div.withConfig({
                    componentId: "sc-e27bcbc9-2"
                })(["position:relative;border-radius:11px;display:flex;align-items:center;justify-content:center;border:3px solid #ffffff15;"]),
                c = n.ZP.img.withConfig({
                    componentId: "sc-e27bcbc9-3"
                })(["position:relative;z-index:1;object-fit:cover;width:100%;height:100%;aspect-ratio:110 / 110;min-width:100px;max-height:100px;border-radius:10px;"]),
                s = n.ZP.img.withConfig({
                    componentId: "sc-e27bcbc9-4"
                })(["position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;filter:blur(25px) brightness(1.5);opacity:0.6;z-index:0;"]),
                d = n.ZP.div.withConfig({
                    componentId: "sc-e27bcbc9-5"
                })(["display:flex;flex-direction:column;gap:0.5rem;z-index:1;"]),
                u = n.ZP.div.withConfig({
                    componentId: "sc-e27bcbc9-6"
                })([""]),
                f = n.ZP.button.withConfig({
                    componentId: "sc-e27bcbc9-7"
                })(["display:flex;align-items:center;justify-content:center;gap:0.5rem;width:fit-content;height:30px;border-radius:6px;padding:0 1rem;border:none;background:", ";color:", ";cursor:pointer;font-size:13px;line-height:18px;font-weight:500;transition:0.2s all;svg{width:18px;height:18px;min-width:18px;min-height:18px;fill:", ";animation:arrowSlide 2s ease-in-out infinite;}@keyframes arrowSlide{0%,100%{transform:translateX(0);}50%{transform:translateX(5px);}}&:hover{transform:scale(1.02);}"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.buttons.primary
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.buttons.text.text
                }, e => {
                    let {
                        theme: t
                    } = e;
                    return t.buttons.text.text
                })
        },
        10096: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Banner: function() {
                    return l
                },
                Category: function() {
                    return c
                },
                Categorys: function() {
                    return a
                },
                Container: function() {
                    return o
                },
                Grid: function() {
                    return s
                },
                Page: function() {
                    return i
                }
            });
            var n = r(37041);
            let i = n.ZP.div.withConfig({
                    componentId: "sc-bce61202-0"
                })(["display:flex;flex-direction:column;gap:1rem;"]),
                o = n.ZP.div.withConfig({
                    componentId: "sc-bce61202-1"
                })(["display:flex;flex-direction:column;gap:2rem;"]),
                l = n.ZP.div.withConfig({
                    componentId: "sc-bce61202-2"
                })(["img{position:fixed;z-index:-1 !important;user-select:none;pointer-events:none;top:47px;left:0px;right:0px;width:100%;height:100%;max-height:700px;object-fit:cover;mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );-webkit-mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );opacity:50%;}"]),
                a = n.ZP.div.withConfig({
                    componentId: "sc-bce61202-3"
                })(["display:flex;flex-direction:column;gap:2rem;"]),
                c = n.ZP.div.withConfig({
                    componentId: "sc-bce61202-4"
                })(["display:flex;flex-direction:column;gap:1.5rem;"]),
                s = n.ZP.div.withConfig({
                    componentId: "sc-bce61202-5"
                })(["display:grid;grid-template-columns:repeat(auto-fill,minmax(201px,1fr));gap:1rem;"])
        },
        89684: function(e, t, r) {
            "use strict";
            r.d(t, {
                PageSpacing: function() {
                    return o
                },
                gY: function() {
                    return i
                }
            });
            var n = r(37041);
            n.ZP.div.withConfig({
                componentId: "sc-4110af4d-0"
            })(["width:100%;display:flex;background-color:", ";left:0;right:0;"], e => {
                let {
                    theme: t
                } = e;
                return t.background_color
            }), n.ZP.div.withConfig({
                componentId: "sc-4110af4d-1"
            })(["z-index:2;max-width:1280px;margin-right:auto;margin-left:auto;"]);
            let i = n.ZP.section.withConfig({
                    componentId: "sc-4110af4d-2"
                })(["display:flex;flex-direction:column;flex:1;"]),
                o = n.ZP.div.withConfig({
                    componentId: "sc-4110af4d-3"
                })(["padding:1rem;max-width:1280px;margin-right:auto;margin-left:auto;width:100%;flex:1;"])
        },
        37104: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(57437),
                i = r(3249);

            function o(e) {
                let {
                    children: t,
                    Weight: r,
                    Size: o,
                    Height: l,
                    className: a
                } = e;
                return (0, n.jsx)(i.Style, {
                    style: {
                        fontWeight: r,
                        fontSize: "".concat(o, "px"),
                        lineHeight: "".concat(l, "px")
                    },
                    className: a,
                    children: t
                })
            }
        },
        3249: function(e, t, r) {
            "use strict";
            r.d(t, {
                Style: function() {
                    return n
                }
            });
            let n = r(37041).ZP.p.withConfig({
                componentId: "sc-5e82d9e5-0"
            })(["font-style:normal;font-weight:400;font-size:17px;line-height:25px;color:", ";"], e => {
                let {
                    theme: t
                } = e;
                return t.text.p
            })
        },
        30474: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return i(Math.floor(new Date(e).getTime() / 1e3), t)
            }
            r.d(t, {
                f2: function() {
                    return n
                },
                kg: function() {
                    return o
                }
            });
            let i = (e, t) => {
                let r = new Date(1e3 * e),
                    n = r.getDate(),
                    i = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][r.getMonth()],
                    o = r.getFullYear(),
                    l = r.getHours(),
                    a = r.getMinutes();
                return 1 === t ? "".concat(l, ":").concat(a.toString().padStart(2, "0")) : 2 === t ? "".concat(n, ", ").concat(i, " ").concat(o) : "".concat(n, ", ").concat(i, " ").concat(o, " ").concat(l, ":").concat(a.toString().padStart(2, "0"))
            };

            function o(e) {
                let t = new Date(e),
                    r = new Date,
                    n = t.toDateString() === r.toDateString(),
                    i = new Date;
                i.setDate(r.getDate() - 1);
                let o = t.toDateString() === i.toDateString();
                return n ? t.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit"
                }) : o ? "Ontem" : "".concat(t.getDate(), " ").concat(["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][t.getMonth()], " ").concat(t.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit"
                }))
            }
        }
    },
    function(e) {
        e.O(0, [7041, 231, 822, 5223, 8726, 6531, 5426, 2971, 7023, 1744], function() {
            return e(e.s = 36452)
        }), _N_E = e.O()
    }
]);