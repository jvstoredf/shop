"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6531], {
        5795: function(e, t, o) {
            o.d(t, {
                CartProvider: function() {
                    return g
                },
                j: function() {
                    return h
                }
            });
            var a = o(57437),
                n = o(56225),
                i = o(2265),
                r = o(39343),
                d = o(31014),
                l = o(59772),
                u = o(16463),
                c = o(7667),
                s = o(49991);
            let m = [{
                    product: "177396201697590740948886885945",
                    category: "17739616989999874939636144",
                    variant: null,
                    type: "series",
                    name: "Curso de Photoshop Completo",
                    icon: "/imgs/photo-editor.jpg",
                    stock: 4,
                    min: 1,
                    max: 0,
                    value: 29.9,
                    amount: 1,
                    automatic: !0,
                    fields: []
                }, {
                    product: "17739616989999874939636001",
                    category: "17739616989999874939636144",
                    variant: null,
                    type: "series",
                    name: "Pack 30 Presets Lightroom",
                    icon: "/imgs/photo-pack.jpg",
                    stock: 10,
                    min: 1,
                    max: 0,
                    value: 19.9,
                    amount: 2,
                    automatic: !0,
                    fields: [{
                        id: 12043,
                        loja: "66630205101",
                        nome: "Whatsapp",
                        campo: 2981,
                        descricao: "Seu telefone para contato",
                        status: !0,
                        placeholder: "99 90000-00000",
                        tipo: "numero",
                        ref_produto: null,
                        ref_variante: null,
                        ref_categoria: "17739616989999874939636144",
                        quantidade_maxima: 11,
                        quantidade_minima: 11,
                        observacao: null,
                        obrigatorio: !0,
                        createdAt: "2026-03-26T23:09:11.000Z",
                        updatedAt: "2026-03-26T23:09:11.000Z"
                    }]
                }],
                p = (0, i.createContext)({}),
                v = ["@gmil.com", "@gmai.com", "@gmal.com", "@gail.com", "@gmalil.com", "@gnail.com", "@gamil.com", "@gmaiil.com", "@gmall.com", "@gmail.co", "@gmail.con", "@gmail.cm", "@gmaail.com", "@gmaol.com", "@gmial.com"],
                f = l.z.object({
                    method: l.z.string(),
                    bankPix: l.z.string().optional(),
                    bankCard: l.z.string().optional(),
                    hasData: l.z.boolean(),
                    name: l.z.string(),
                    cpf: l.z.string(),
                    email: l.z.string().email("Por favor informe um e-mail v\xe1lido."),
                    confirmEmail: l.z.string().email("Por favor informe um e-mail v\xe1lido."),
                    cupom: l.z.string().optional(),
                    addressCep: l.z.string().optional(),
                    addressStreet: l.z.string().optional(),
                    addressNumber: l.z.string().optional(),
                    addressComplement: l.z.string().optional(),
                    addressExtra: l.z.string().optional(),
                    phoneCountryCode: l.z.string().optional(),
                    phone: l.z.string().optional(),
                    cardNumber: l.z.string().optional(),
                    cardMonthYear: l.z.string().optional(),
                    cardCVV: l.z.string().optional()
                }),
                g = e => {
                    var t, o, g, h, b, y;
                    let {
                        children: C
                    } = e, {
                        user: I,
                        infosHeader: S
                    } = (0, c.O)(), x = "true" === (0, u.useSearchParams)().get("editor"), w = (0, i.useMemo)(() => {
                        var e;
                        return e = null == S ? void 0 : S.checkout, f.superRefine((t, o) => {
                            var a, n, i, r, d;
                            t.email !== t.confirmEmail && o.addIssue({
                                path: ["confirmEmail"],
                                code: l.z.ZodIssueCode.custom,
                                message: "Os e-mails precisam ser iguais."
                            }), v.some(e => t.confirmEmail.endsWith(e)) && o.addIssue({
                                path: ["confirmEmail"],
                                code: l.z.ZodIssueCode.custom,
                                message: "O e-mail informado \xe9 inv\xe1lido. Voc\xea quis dizer @gmail.com?"
                            });
                            let u = t.hasData || "card" === t.method && "stripe" !== t.bankCard && "efibank" !== t.bankCard || (null == e ? void 0 : e.name),
                                c = t.hasData || "card" === t.method && "stripe" !== t.bankCard && "efibank" !== t.bankCard || (null == e ? void 0 : e.cpf_cnpj);
                            if (u && (t.name && "" !== t.name.trim() ? t.name.length < 6 && o.addIssue({
                                    path: ["name"],
                                    code: l.z.ZodIssueCode.too_small,
                                    minimum: 6,
                                    type: "string",
                                    inclusive: !0,
                                    message: "\xc9 necess\xe1rio conter no m\xednimo 6 caracteres."
                                }) : o.addIssue({
                                    path: ["name"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "Voc\xea precisa informar o seu nome."
                                })), c && (t.cpf ? t.cpf.replace(/\D/g, "").length < 11 ? o.addIssue({
                                    path: ["cpf"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "O CPF deve conter 11 d\xedgitos."
                                }) : ! function(e) {
                                    let t = e.replace(/\D/g, "");
                                    if (11 !== t.length || /^(\d)\1{10}$/.test(t)) return !1;
                                    let o = 0;
                                    for (let e = 0; e < 9; e++) o += parseInt(t[e], 10) * (10 - e);
                                    let a = 10 * o % 11;
                                    if (10 === a && (a = 0), a !== parseInt(t[9], 10)) return !1;
                                    o = 0;
                                    for (let e = 0; e < 10; e++) o += parseInt(t[e], 10) * (11 - e);
                                    let n = 10 * o % 11;
                                    return 10 === n && (n = 0), n === parseInt(t[10], 10)
                                }(t.cpf) && o.addIssue({
                                    path: ["cpf"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "CPF inv\xe1lido. Verifique os n\xfameros digitados."
                                }) : o.addIssue({
                                    path: ["cpf"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "Voc\xea precisa informar o CPF."
                                })), (null == e ? void 0 : e.address) && ((!t.addressCep || t.addressCep.replace(/\D/g, "").length < 8) && o.addIssue({
                                    path: ["addressCep"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "Informe um CEP v\xe1lido (8 d\xedgitos)."
                                }), t.addressStreet && "" !== t.addressStreet.trim() ? t.addressStreet.trim().length < 3 && o.addIssue({
                                    path: ["addressStreet"],
                                    code: l.z.ZodIssueCode.too_small,
                                    minimum: 3,
                                    type: "string",
                                    inclusive: !0,
                                    message: "A rua/avenida deve ter no m\xednimo 3 caracteres."
                                }) : o.addIssue({
                                    path: ["addressStreet"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "Informe a rua ou avenida."
                                }), (null === (a = t.addressNumber) || void 0 === a ? void 0 : a.trim()) || o.addIssue({
                                    path: ["addressNumber"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "Informe o n\xfamero do endere\xe7o."
                                })), null == e ? void 0 : e.phone) {
                                let e = null !== (i = null === (n = t.phone) || void 0 === n ? void 0 : n.replace(/\D/g, "")) && void 0 !== i ? i : "",
                                    a = null !== (d = ({
                                        "+55": 11,
                                        "+1": 10,
                                        "+351": 9,
                                        "+34": 9,
                                        "+44": 10,
                                        "+49": 11,
                                        "+33": 9,
                                        "+39": 10,
                                        "+54": 11,
                                        "+52": 10,
                                        "+56": 9,
                                        "+57": 10,
                                        "+598": 8,
                                        "+595": 9
                                    })[(null !== (r = t.phoneCountryCode) && void 0 !== r ? r : "+55").trim()]) && void 0 !== d ? d : 10;
                                t.phone && "" !== t.phone.trim() ? e.length < a && o.addIssue({
                                    path: ["phone"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "Informe o n\xfamero completo (".concat(a, " d\xedgitos para este pa\xeds).")
                                }) : o.addIssue({
                                    path: ["phone"],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "Voc\xea precisa informar o telefone."
                                })
                            }
                            "card" === t.method && "stripe" !== t.bankCard && "efibank" !== t.bankCard && [
                                ["cardNumber", "N\xfamero do cart\xe3o"],
                                ["cardMonthYear", "M\xeas/Ano de vencimento"],
                                ["cardCVV", "CVV"]
                            ].forEach(e => {
                                let [a, n] = e;
                                t[a] || o.addIssue({
                                    path: [a],
                                    code: l.z.ZodIssueCode.custom,
                                    message: "".concat(n, " \xe9 obrigat\xf3rio.")
                                })
                            })
                        })
                    }, [null == S ? void 0 : S.checkout]), {
                        register: _,
                        handleSubmit: k,
                        setValue: z,
                        watch: q,
                        formState: {
                            errors: E
                        }
                    } = (0, r.cI)({
                        mode: "all",
                        criteriaMode: "all",
                        resolver: (0, d.F)(w),
                        defaultValues: {
                            method: "pix",
                            hasData: !1,
                            name: "",
                            cpf: "",
                            addressCep: "",
                            addressStreet: "",
                            addressNumber: "",
                            addressComplement: "",
                            addressExtra: "",
                            phoneCountryCode: "+55",
                            phone: ""
                        }
                    }), [P, Z] = (0, i.useState)(""), [N, j] = (0, i.useState)(!1), [V, D] = (0, i.useState)({
                        name: "",
                        taxa: null
                    }), [$, M] = (0, i.useState)({
                        pix: (null == S ? void 0 : null === (t = S.payment) || void 0 === t ? void 0 : t.pix) ? null == S ? void 0 : null === (o = S.payment) || void 0 === o ? void 0 : o.pix : null,
                        card: (null == S ? void 0 : null === (g = S.payment) || void 0 === g ? void 0 : g.card) ? null == S ? void 0 : null === (h = S.payment) || void 0 === h ? void 0 : h.card : null,
                        ltc: null != S && null !== (b = S.payment) && void 0 !== b && !!b.ltc && (null == S ? void 0 : null === (y = S.payment) || void 0 === y ? void 0 : y.ltc)
                    }), R = {
                        mercadopago: !1,
                        suitpay: !1,
                        pagseguro: !0,
                        asaas: !0,
                        stripe: !1,
                        efibank: !1
                    };
                    (0, i.useEffect)(() => {
                        var e, t, o, a, n, i;
                        (null == S ? void 0 : null === (e = S.payment) || void 0 === e ? void 0 : e.pix) && R[null == S ? void 0 : null === (t = S.payment) || void 0 === t ? void 0 : t.pix] && z("hasData", !0), (null == S ? void 0 : null === (o = S.payment) || void 0 === o ? void 0 : o.card) && z("bankCard", null == S ? void 0 : null === (n = S.payment) || void 0 === n ? void 0 : n.card), (null == S ? void 0 : null === (a = S.payment) || void 0 === a ? void 0 : a.pix) && z("bankPix", null == S ? void 0 : null === (i = S.payment) || void 0 === i ? void 0 : i.pix)
                    }, [$]), (0, i.useEffect)(() => {
                        if (x) {
                            z("email", "demo@ereemby.com"), z("confirmEmail", "demo@ereemby.com"), z("name", "Jo\xe3o Demo Silva"), z("cpf", "529.982.247-25"), z("phone", "11999999999"), z("phoneCountryCode", "+55");
                            return
                        }
                        let e = localStorage.getItem("email"),
                            t = localStorage.getItem("name"),
                            o = localStorage.getItem("cpf");
                        if (null == I ? void 0 : I.email) {
                            z("email", I.email), z("confirmEmail", I.email), t && o && (z("name", t || ""), z("cpf", o || ""));
                            return
                        }
                        if (e) {
                            z("email", e), z("confirmEmail", e), z("name", t || ""), z("cpf", o || "");
                            return
                        }
                    }, [I, x]);
                    let [L, T] = (0, i.useState)(x ? m : []);
                    (0, i.useEffect)(() => {
                        if (x) {
                            T(m);
                            return
                        } {
                            let e = localStorage.getItem("cart");
                            e && T(JSON.parse(e))
                        }
                    }, [x]), (0, i.useEffect)(() => {
                        if (!x) {
                            if (!L[0]) {
                                localStorage.removeItem("cart");
                                return
                            }
                            localStorage.setItem("cart", JSON.stringify(L))
                        }
                    }, [L, x]);
                    let [O, A] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => {
                        let e = null;
                        return O && (e = setTimeout(() => {
                            A(!1)
                        }, 2e3)), () => {
                            e && clearTimeout(e)
                        }
                    }, [O]);
                    let B = e => {
                            var t, o;
                            let {
                                product: a
                            } = e;
                            "function" == typeof window.fbq && (console.warn("AddToCart"), window.fbq("track", "AddToCart", {
                                value: a.valor,
                                currency: "BRL",
                                content_type: "product",
                                content_ids: [a.id],
                                contents: [{
                                    id: a.id,
                                    quantity: a.quantidade,
                                    item_price: a.valor,
                                    name: a.nome
                                }]
                            })), "function" == typeof window.gtag && window.gtag("event", "add_to_cart", {
                                currency: "BRL",
                                value: a.valor * a.quantidade,
                                items: [{
                                    item_id: a.id,
                                    item_name: a.nome,
                                    quantity: a.quantidade,
                                    price: a.valor
                                }]
                            }), "function" == typeof(null === (t = window.ttq) || void 0 === t ? void 0 : t.track) && (null === (o = window.ttq) || void 0 === o || o.track("AddToCart", {
                                value: a.valor * a.quantidade,
                                currency: "BRL",
                                content_type: "product",
                                content_id: String(a.variant || a.id),
                                contents: [{
                                    content_id: String(a.variant || a.id),
                                    content_type: "product",
                                    content_name: a.nome,
                                    quantity: a.quantidade,
                                    price: a.valor
                                }]
                            }))
                        },
                        [J, F] = (0, i.useState)(!1),
                        [W, Y] = (0, i.useState)(!1),
                        G = (0, u.useRouter)(),
                        [H, Q] = (0, i.useState)(""),
                        K = e => {
                            let {
                                email: t,
                                paymentID: o
                            } = e, a = null == L ? void 0 : L.reduce((e, t) => e + t.value * t.amount, 0), n = 0;
                            if (V && (V.taxa || V.discount_value)) {
                                let e = null == L ? void 0 : L.filter(e => {
                                        var t, o, a, n;
                                        let i = (null == V ? void 0 : V.products) && (null == V ? void 0 : null === (t = V.products) || void 0 === t ? void 0 : t.length) > 0,
                                            r = !!i && V.products.includes(e.product),
                                            d = (null == V ? void 0 : V.categories) && (null == V ? void 0 : null === (o = V.categories) || void 0 === o ? void 0 : o.length) > 0,
                                            l = !!d && V.categories.includes(e.category),
                                            u = (null == V ? void 0 : V.variants) && (null == V ? void 0 : null === (a = V.variants) || void 0 === a ? void 0 : a.length) > 0,
                                            c = !!u && (null == e ? void 0 : e.variant) && (null == V ? void 0 : null === (n = V.variants) || void 0 === n ? void 0 : n.includes(null == e ? void 0 : e.variant));
                                        return !(i || d || u) || r || l || c
                                    }),
                                    t = null == e ? void 0 : e.reduce((e, t) => e + t.value * t.amount, 0);
                                t > 0 && ("porcentagem" === V.type && V.taxa ? n = V.taxa / 100 * t : (null == V ? void 0 : V.type) === "fixo" && (null == V ? void 0 : V.discount_value) && (n = V.discount_value), V.max_discount && V.max_discount > 0 && (n = Math.min(n, V.max_discount)), n = Math.min(n, t))
                            }
                            let i = a - n;
                            console.warn("InitiateCheckout"), "function" == typeof window.fbq && window.fbq("track", "InitiateCheckout", {
                                value: i,
                                currency: "BRL",
                                content_type: "product",
                                content_ids: null == L ? void 0 : L.map(e => e.variant || e.product),
                                contents: null == L ? void 0 : L.map(e => ({
                                    id: e.variant || e.product,
                                    quantity: e.amount,
                                    item_price: e.value,
                                    name: e.name
                                }))
                            }), "function" == typeof window.gtag && window.gtag("event", "begin_checkout", {
                                currency: "BRL",
                                value: i,
                                coupon: (null == V ? void 0 : V.name) || void 0,
                                items: null == L ? void 0 : L.map(e => ({
                                    item_id: e.variant || e.product,
                                    item_name: e.name,
                                    quantity: e.amount,
                                    price: e.value
                                }))
                            });
                            let r = window.ttq;
                            if ((null == r ? void 0 : r.track) && (null == L ? void 0 : L.length) > 0) {
                                let e = L.reduce((e, t) => e + t.amount, 0);
                                if (r.identify) {
                                    let e = null == t ? void 0 : t.trim().toLowerCase();
                                    e && e.includes("@") && r.identify({
                                        email: e
                                    })
                                }
                                r.track("InitiateCheckout", {
                                    value: Number(i),
                                    currency: "BRL",
                                    content_type: "product",
                                    content_id: o,
                                    quantity: e,
                                    content_name: L[0].name,
                                    contents: L.map(e => {
                                        var t;
                                        return {
                                            content_id: String(null !== (t = e.variant) && void 0 !== t ? t : e.product),
                                            content_type: "product",
                                            content_name: e.name,
                                            quantity: Number(e.amount),
                                            price: Number(e.value)
                                        }
                                    }),
                                    event_id: "initiate_checkout_".concat(o)
                                })
                            }
                        },
                        U = async e => {
                            var t, o, a;
                            if (Q(""), x) return Q("Modo de demonstra\xe7\xe3o: o pagamento n\xe3o \xe9 processado.");
                            if ((null == S ? void 0 : null === (t = S.termos) || void 0 === t ? void 0 : t.conteudo) && !N) return Q("\xc9 necess\xe1rio aceitar os Termos de Servi\xe7o para continuar.");
                            Y(!0);
                            let i = L.map(e => ({
                                    categoria: e.category,
                                    produto: e.product,
                                    variante: null == e ? void 0 : e.variant,
                                    quantidade: e.amount,
                                    campos: null == e ? void 0 : e.fields.map(e => ({ ...e,
                                        conteudo: e.valor
                                    }))
                                })),
                                r = await (0, s.$1)(),
                                d = r.affiliate,
                                l = r.utm;
                            await (0, n.J)({
                                url: "/comprar",
                                data: {
                                    email: e.email,
                                    metodo: e.method,
                                    nome: "suitpay" === $.pix ? "Jos\xe9 da Silva" : e.name,
                                    cpf: "suitpay" === $.pix ? "927.300.300-18" : e.cpf,
                                    cupom: e.cupom,
                                    carrinho: i,
                                    afiliado: d,
                                    utm: l,
                                    numero: e.cardNumber,
                                    mes: null === (o = e.cardMonthYear) || void 0 === o ? void 0 : o.split("/")[0],
                                    ano: null === (a = e.cardMonthYear) || void 0 === a ? void 0 : a.split("/")[1],
                                    cvv: e.cardCVV,
                                    ...e.addressCep && {
                                        address: {
                                            zipCode: e.addressCep,
                                            street: e.addressStreet,
                                            number: e.addressNumber || "",
                                            complement: e.addressComplement || void 0,
                                            additionalInfo: e.addressExtra || void 0
                                        }
                                    },
                                    ...e.phone && {
                                        phone: "".concat((e.phoneCountryCode || "+55").replace(/\s/g, ""), " ").concat(e.phone.replace(/\D/g, ""))
                                    }
                                },
                                method: "POST",
                                auth: !1,
                                header: {
                                    "g-response": P
                                }
                            }).then(t => {
                                if (t.status) {
                                    if (localStorage.setItem("email", e.email), localStorage.setItem("name", e.name), localStorage.setItem("cpf", e.cpf), localStorage.setItem("terms", "yes"), K({
                                            email: e.email,
                                            paymentID: t.data.id
                                        }), "pix" === e.method || "ltc" === e.method) G.push("/payment/".concat(t.data.id));
                                    else if ("card" === e.method && "mercadopago" === $.card) {
                                        G.push("/payment/".concat(t.data.id));
                                        return
                                    } else if ("card" === e.method && "mercadopago" !== $.card) {
                                        let e = window.open("".concat(t.data.url), "_blank");
                                        if (!e || e.closed || void 0 === e.closed) return window.location.href = t.data.url;
                                        G.push("/payment/".concat(t.data.id))
                                    } else if (e.method.includes("checkout")) {
                                        let e = window.open("".concat(t.data.url), "_blank");
                                        if (!e || e.closed || void 0 === e.closed) return window.location.href = t.data.url;
                                        G.push("/payment/".concat(t.data.id))
                                    }
                                } else {
                                    var o, a, n, i;
                                    if (null == t ? void 0 : null === (o = t.error) || void 0 === o ? void 0 : o.motivo) {
                                        (0, s.Gj)({
                                            motivo: null == t ? void 0 : null === (a = t.error) || void 0 === a ? void 0 : a.motivo,
                                            email: null == t ? void 0 : null === (n = t.error) || void 0 === n ? void 0 : n.email,
                                            ip: null == t ? void 0 : null === (i = t.error) || void 0 === i ? void 0 : i.ip
                                        });
                                        return
                                    }(null == t ? void 0 : t.error) && Q(String(t.error))
                                }
                            }), Y(!1)
                        };
                    return (0, a.jsx)(p.Provider, {
                        value: {
                            loading: W,
                            genPayment: U,
                            register: _,
                            handleSubmit: k,
                            errors: E,
                            setValue: z,
                            watch: q,
                            addItemCart: e => {
                                ((null == e ? void 0 : e.variant) ? L.some(t => t.variant === (null == e ? void 0 : e.variant)) : L.some(t => t.product === e.id)) || (B({
                                    product: e
                                }), A(!0), T(t => {
                                    var o;
                                    return [...t, {
                                        product: null == e ? void 0 : e.id,
                                        category: null == e ? void 0 : e.categoria,
                                        variant: null == e ? void 0 : e.variant,
                                        type: null == e ? void 0 : e.type,
                                        name: e.nome,
                                        icon: (null == e ? void 0 : e.imagens) && null !== (o = null == e ? void 0 : e.imagens[0]) && void 0 !== o ? o : null,
                                        stock: null == e ? void 0 : e.estoque,
                                        min: null == e ? void 0 : e.minimo,
                                        max: null == e ? void 0 : e.maximo,
                                        value: null == e ? void 0 : e.valor,
                                        amount: null == e ? void 0 : e.quantidade,
                                        automatic: null == e ? void 0 : e.automatic,
                                        fields: (null == e ? void 0 : e.campos) || []
                                    }]
                                }))
                            },
                            cart: L,
                            setCart: T,
                            cartNotification: O,
                            isProductInCart: (e, t) => "product" === e ? L.some(e => e.product === t) : "variant" === e && L.some(e => e.variant === t),
                            payments: $,
                            setPayments: M,
                            discount: V,
                            setDiscount: D,
                            errorGen: H,
                            terms: N,
                            setTerms: j,
                            setTokenTurnstile: Z,
                            tokenTurnstile: P,
                            needsRevalidate: J,
                            setNeedsRevalidate: F,
                            triggerRevalidate: () => F(!0)
                        },
                        children: C
                    })
                },
                h = () => (0, i.useContext)(p)
        },
        50671: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = o(57437),
                n = o(76529);

            function i(e) {
                let {
                    children: t,
                    type: o,
                    optional: i,
                    required: r,
                    Weight: d,
                    Size: l,
                    Height: u,
                    className: c,
                    onClick: s
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: !o && (0, a.jsx)(n.Style, {
                        onClick: s,
                        className: c,
                        style: {
                            fontWeight: d,
                            fontSize: "".concat(l, "px"),
                            lineHeight: "".concat(u, "px")
                        },
                        children: t
                    }) || "list" === o && (0, a.jsxs)(n.List, {
                        children: [t, " ", i && (0, a.jsx)(n.Span, {
                            children: "( opcional )"
                        }), " ", r && (0, a.jsx)(n.Required, {
                            children: "*"
                        })]
                    })
                })
            }
        },
        76529: function(e, t, o) {
            o.d(t, {
                List: function() {
                    return d
                },
                Required: function() {
                    return r
                },
                Span: function() {
                    return i
                },
                Style: function() {
                    return n
                }
            });
            var a = o(37041);
            let n = a.ZP.h1.withConfig({
                    componentId: "sc-296417d8-0"
                })(["font-style:normal;font-weight:400;font-size:16px;line-height:20px;color:", ";"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.h1
                }),
                i = a.ZP.span.withConfig({
                    componentId: "sc-296417d8-1"
                })(["font-style:normal;font-weight:400 !important;font-size:11px !important;line-height:12px !important;color:", " !important;"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.p
                }),
                r = a.ZP.span.withConfig({
                    componentId: "sc-296417d8-2"
                })(["font-style:normal;font-weight:400 !important;font-size:15px !important;line-height:15px !important;color:", " !important;"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.color.red
                }),
                d = a.ZP.h1.withConfig({
                    componentId: "sc-296417d8-3"
                })(["display:flex;align-items:center;gap:0.3rem;font-style:normal;font-weight:500;font-size:13px;line-height:16px;color:", ";"], e => {
                    let {
                        theme: t
                    } = e;
                    return t.text.h1
                })
        },
        7667: function(e, t, o) {
            o.d(t, {
                GlobalProvider: function() {
                    return l
                },
                O: function() {
                    return u
                }
            });
            var a = o(57437),
                n = o(49991);
            let i = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                return Math.floor(e / 1e3)
            };
            var r = o(2265);
            let d = (0, r.createContext)({}),
                l = e => {
                    let {
                        infos: t,
                        userInfo: o,
                        children: l
                    } = e, [u, c] = (0, r.useState)(t);
                    (0, r.useEffect)(() => {
                        c(t)
                    }, [t]);
                    let s = async () => {
                        await (0, n.pQ)()
                    };
                    (0, r.useEffect)(() => {
                        var e;
                        (null == t ? void 0 : null === (e = t.user) || void 0 === e ? void 0 : e.error) && (console.warn("token deletado"), s())
                    }, [t]);
                    let [m, p] = (0, r.useState)(o || {});
                    (0, r.useEffect)(() => {
                        p(o || {})
                    }, [o]);
                    let [v, f] = (0, r.useState)(null), [g, h] = (0, r.useState)(!1), [b, y] = (0, r.useState)(!1), [C, I] = (0, r.useState)(!1), [S, x] = (0, r.useState)(0), [w, _] = (0, r.useState)(55);
                    return (0, r.useEffect)(() => {
                        let e = Number(localStorage.getItem("warning"));
                        localStorage.getItem("warning") && e > 1705553234 ? I(!1) : I(!0)
                    }, []), (0, a.jsx)(d.Provider, {
                        value: {
                            user: m,
                            setUser: p,
                            nav: g,
                            setNav: h,
                            warning: C,
                            CloseWarning: () => {
                                I(!1), localStorage.setItem("warning", String(i())), x(0)
                            },
                            warningHeight: S,
                            setWarningHeight: x,
                            crisp: b,
                            setCrisp: y,
                            headerHeight: w,
                            setHeaderHeight: _,
                            termsText: v,
                            setTermsText: f,
                            infosHeader: u
                        },
                        children: l
                    })
                },
                u = () => (0, r.useContext)(d)
        },
        49991: function(e, t, o) {
            o.d(t, {
                $1: function() {
                    return c
                },
                Eq: function() {
                    return u
                },
                Gj: function() {
                    return d
                },
                H0: function() {
                    return i
                },
                ib: function() {
                    return n
                },
                o4: function() {
                    return r
                },
                pQ: function() {
                    return s
                },
                qH: function() {
                    return l
                }
            }), o(74590);
            var a = o(58064),
                n = (0, a.$)("1fac50821c63b675bb6fd58764a33bc311ec66d5"),
                i = (0, a.$)("edd6c0b72ec54a21aaf4bf15d5f5f9db00f1af0f"),
                r = (0, a.$)("c06153c056083be1f5036d4f208ce11d5fcbb9ee"),
                d = (0, a.$)("0c54a209463a3e96a99ea0273bb516e2a7695b67"),
                l = (0, a.$)("4d9a518d4a5b69ca284694fc9e42e36b872d6399"),
                u = (0, a.$)("3e56783c76820e01cb5be665d74d7ec9828b4445"),
                c = (0, a.$)("cc7ea0cd749d9634b6e765ba21187b8d70a044d4"),
                s = (0, a.$)("14348b7426e6bd825fdb74a9b9215663cfad9d52");
            (0, a.$)("59c9bbdbbbbb5bfd5dfea7cfc303ce58d944ac3a")
        },
        56225: function(e, t, o) {
            o.d(t, {
                J: function() {
                    return a
                }
            }), o(74590);
            var a = (0, o(58064).$)("ff527700ec2f8b2375170ea0d805254f16aa5aba")
        }
    }
]);