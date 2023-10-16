(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    2011: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = i(6927),
        n = i(5909),
        s = n._(i(6006)),
        o = r._(i(9619)),
        a = i(9080),
        l = i(9600),
        c = i(5934);
      i(4169);
      let u = r._(i(8697)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/assets/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function d(t) {
        return void 0 !== t.default;
      }
      function p(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function f(t, e, i, r, n, s, o) {
        if (!t || t["data-loaded-src"] === e) return;
        t["data-loaded-src"] = e;
        let a = "decode" in t ? t.decode() : Promise.resolve();
        a.catch(() => {}).then(() => {
          if (t.parentElement && t.isConnected) {
            if (("blur" === i && s(!0), null == r ? void 0 : r.current)) {
              let e = new Event("load");
              Object.defineProperty(e, "target", { writable: !1, value: t });
              let i = !1,
                n = !1;
              r.current({
                ...e,
                nativeEvent: e,
                currentTarget: t,
                target: t,
                isDefaultPrevented: () => i,
                isPropagationStopped: () => n,
                persist: () => {},
                preventDefault: () => {
                  (i = !0), e.preventDefault();
                },
                stopPropagation: () => {
                  (n = !0), e.stopPropagation();
                },
              });
            }
            (null == n ? void 0 : n.current) && n.current(t);
          }
        });
      }
      function m(t) {
        let [e, i] = s.version.split("."),
          r = parseInt(e, 10),
          n = parseInt(i, 10);
        return r > 18 || (18 === r && n >= 3)
          ? { fetchPriority: t }
          : { fetchpriority: t };
      }
      let v = (0, s.forwardRef)((t, e) => {
          let {
            imgAttributes: i,
            heightInt: r,
            widthInt: n,
            qualityInt: o,
            className: a,
            imgStyle: l,
            blurStyle: c,
            isLazy: u,
            fetchPriority: h,
            fill: d,
            placeholder: p,
            loading: v,
            srcString: g,
            config: y,
            unoptimized: C,
            loader: M,
            onLoadRef: b,
            onLoadingCompleteRef: x,
            setBlurComplete: z,
            setShowAltText: P,
            onLoad: V,
            onError: w,
            ...L
          } = t;
          return (
            (v = u ? "lazy" : v),
            s.default.createElement("img", {
              ...L,
              ...m(h),
              loading: v,
              width: n,
              height: r,
              decoding: "async",
              "data-nimg": d ? "fill" : "1",
              className: a,
              style: { ...l, ...c },
              ...i,
              ref: (0, s.useCallback)(
                (t) => {
                  e &&
                    ("function" == typeof e
                      ? e(t)
                      : "object" == typeof e && (e.current = t)),
                    t &&
                      (w && (t.src = t.src),
                      t.complete && f(t, g, p, b, x, z, C));
                },
                [g, p, b, x, z, w, C, e]
              ),
              onLoad: (t) => {
                let e = t.currentTarget;
                f(e, g, p, b, x, z, C);
              },
              onError: (t) => {
                P(!0), "blur" === p && z(!0), w && w(t);
              },
            })
          );
        }),
        g = (0, s.forwardRef)((t, e) => {
          var i;
          let r,
            n,
            {
              src: f,
              sizes: g,
              unoptimized: y = !1,
              priority: C = !1,
              loading: M,
              className: b,
              quality: x,
              width: z,
              height: P,
              fill: V,
              style: w,
              onLoad: L,
              onLoadingComplete: S,
              placeholder: k = "empty",
              blurDataURL: E,
              fetchPriority: T,
              layout: A,
              objectFit: O,
              objectPosition: j,
              lazyBoundary: D,
              lazyRoot: R,
              ...F
            } = t,
            H = (0, s.useContext)(c.ImageConfigContext),
            _ = (0, s.useMemo)(() => {
              let t = h || H || l.imageConfigDefault,
                e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
                i = t.deviceSizes.sort((t, e) => t - e);
              return { ...t, allSizes: e, deviceSizes: i };
            }, [H]),
            B = F.loader || u.default;
          delete F.loader;
          let I = "__next_img_default" in B;
          if (I) {
            if ("custom" === _.loader)
              throw Error(
                'Image with src "' +
                  f +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              );
          } else {
            let t = B;
            B = (e) => {
              let { config: i, ...r } = e;
              return t(r);
            };
          }
          if (A) {
            "fill" === A && (V = !0);
            let t = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[A];
            t && (w = { ...w, ...t });
            let e = { responsive: "100vw", fill: "100vw" }[A];
            e && !g && (g = e);
          }
          let U = "",
            N = p(z),
            $ = p(P);
          if ("object" == typeof (i = f) && (d(i) || void 0 !== i.src)) {
            let t = d(f) ? f.default : f;
            if (!t.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(t)
              );
            if (!t.height || !t.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(t)
              );
            if (
              ((r = t.blurWidth),
              (n = t.blurHeight),
              (E = E || t.blurDataURL),
              (U = t.src),
              !V)
            ) {
              if (N || $) {
                if (N && !$) {
                  let e = N / t.width;
                  $ = Math.round(t.height * e);
                } else if (!N && $) {
                  let e = $ / t.height;
                  N = Math.round(t.width * e);
                }
              } else (N = t.width), ($ = t.height);
            }
          }
          let Z = !C && ("lazy" === M || void 0 === M);
          (!(f = "string" == typeof f ? f : U) ||
            f.startsWith("data:") ||
            f.startsWith("blob:")) &&
            ((y = !0), (Z = !1)),
            _.unoptimized && (y = !0),
            I && f.endsWith(".svg") && !_.dangerouslyAllowSVG && (y = !0),
            C && (T = "high");
          let [W, Y] = (0, s.useState)(!1),
            [G, q] = (0, s.useState)(!1),
            K = p(x),
            X = Object.assign(
              V
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: O,
                    objectPosition: j,
                  }
                : {},
              G ? {} : { color: "transparent" },
              w
            ),
            J =
              "blur" === k && E && !W
                ? {
                    backgroundSize: X.objectFit || "cover",
                    backgroundPosition: X.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,' +
                      (0, a.getImageBlurSvg)({
                        widthInt: N,
                        heightInt: $,
                        blurWidth: r,
                        blurHeight: n,
                        blurDataURL: E,
                        objectFit: X.objectFit,
                      }) +
                      '")',
                  }
                : {},
            Q = (function (t) {
              let {
                config: e,
                src: i,
                unoptimized: r,
                width: n,
                quality: s,
                sizes: o,
                loader: a,
              } = t;
              if (r) return { src: i, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: c } = (function (t, e, i) {
                  let { deviceSizes: r, allSizes: n } = t;
                  if (i) {
                    let t = /(^|\s)(1?\d?\d)vw/g,
                      e = [];
                    for (let r; (r = t.exec(i)); r) e.push(parseInt(r[2]));
                    if (e.length) {
                      let t = 0.01 * Math.min(...e);
                      return {
                        widths: n.filter((e) => e >= r[0] * t),
                        kind: "w",
                      };
                    }
                    return { widths: n, kind: "w" };
                  }
                  if ("number" != typeof e) return { widths: r, kind: "w" };
                  let s = [
                    ...new Set(
                      [e, 2 * e].map(
                        (t) => n.find((e) => e >= t) || n[n.length - 1]
                      )
                    ),
                  ];
                  return { widths: s, kind: "x" };
                })(e, n, o),
                u = l.length - 1;
              return {
                sizes: o || "w" !== c ? o : "100vw",
                srcSet: l
                  .map(
                    (t, r) =>
                      a({ config: e, src: i, quality: s, width: t }) +
                      " " +
                      ("w" === c ? t : r + 1) +
                      c
                  )
                  .join(", "),
                src: a({ config: e, src: i, quality: s, width: l[u] }),
              };
            })({
              config: _,
              src: f,
              unoptimized: y,
              width: N,
              quality: K,
              sizes: g,
              loader: B,
            }),
            tt = f,
            te = (0, s.useRef)(L);
          (0, s.useEffect)(() => {
            te.current = L;
          }, [L]);
          let ti = (0, s.useRef)(S);
          (0, s.useEffect)(() => {
            ti.current = S;
          }, [S]);
          let tr = {
            isLazy: Z,
            imgAttributes: Q,
            heightInt: $,
            widthInt: N,
            qualityInt: K,
            className: b,
            imgStyle: X,
            blurStyle: J,
            loading: M,
            config: _,
            fetchPriority: T,
            fill: V,
            unoptimized: y,
            placeholder: k,
            loader: B,
            srcString: tt,
            onLoadRef: te,
            onLoadingCompleteRef: ti,
            setBlurComplete: Y,
            setShowAltText: q,
            ...F,
          };
          return s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(v, { ...tr, ref: e }),
            C
              ? s.default.createElement(
                  o.default,
                  null,
                  s.default.createElement("link", {
                    key: "__nimg-" + Q.src + Q.srcSet + Q.sizes,
                    rel: "preload",
                    as: "image",
                    href: Q.srcSet ? void 0 : Q.src,
                    imageSrcSet: Q.srcSet,
                    imageSizes: Q.sizes,
                    crossOrigin: F.crossOrigin,
                    ...m(T),
                  })
                )
              : null
          );
        }),
        y = g;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    4920: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(6927),
        n = r._(i(6006)),
        s = n.default.createContext({});
    },
    5224: function (t, e) {
      "use strict";
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: r = !1,
        } = void 0 === t ? {} : t;
        return e || (i && r);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    9619: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          defaultHead: function () {
            return u;
          },
          default: function () {
            return f;
          },
        });
      let r = i(6927),
        n = i(5909),
        s = n._(i(6006)),
        o = r._(i(2776)),
        a = i(4920),
        l = i(508),
        c = i(5224);
      function u(t) {
        void 0 === t && (t = !1);
        let e = [s.default.createElement("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              s.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function h(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === s.default.Fragment
          ? t.concat(
              s.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(4169);
      let d = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(h, [])
          .reverse()
          .concat(u(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                r = {};
              return (n) => {
                let s = !0,
                  o = !1;
                if (
                  n.key &&
                  "number" != typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = n.key.slice(n.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    e.has(n.type) ? (s = !1) : e.add(n.type);
                    break;
                  case "meta":
                    for (let t = 0, e = d.length; t < e; t++) {
                      let e = d[t];
                      if (n.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = n.props[e],
                            i = r[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (r[e] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let r = t.key || e;
            if (
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                s.default.cloneElement(t, e)
              );
            }
            return s.default.cloneElement(t, { key: r });
          });
      }
      let f = function (t) {
        let { children: e } = t,
          i = (0, s.useContext)(a.AmpStateContext),
          r = (0, s.useContext)(l.HeadManagerContext);
        return s.default.createElement(
          o.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: (0, c.isInAmpMode)(i),
          },
          e
        );
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    9080: function (t, e) {
      "use strict";
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: r,
            blurHeight: n,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = r || e,
          l = n || i,
          c = s.startsWith("data:image/jpeg")
            ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
            : "";
        return a && l
          ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " +
              a +
              " " +
              l +
              "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" +
              (r && n ? "1" : "20") +
              "'/%3E" +
              c +
              "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" +
              s +
              "'/%3E%3C/svg%3E"
          : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" +
              ("contain" === o
                ? "xMidYMid"
                : "cover" === o
                ? "xMidYMid slice"
                : "none") +
              "' x='0' y='0' height='100%25' width='100%25' href='" +
              s +
              "'/%3E%3C/svg%3E";
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    5934: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = i(6927),
        n = r._(i(6006)),
        s = i(9600),
        o = n.default.createContext(s.imageConfigDefault);
    },
    9600: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/assets/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    8697: function (t, e) {
      "use strict";
      function i(t) {
        let { config: e, src: i, width: r, quality: n } = t;
        return (
          e.path +
          "?url=" +
          encodeURIComponent(i) +
          "&w=" +
          r +
          "&q=" +
          (n || 75)
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (i.__next_img_default = !0);
      let r = i;
    },
    2776: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = i(5909),
        n = r._(i(6006)),
        s = n.useLayoutEffect,
        o = n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function r() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(r, t));
          }
        }
        return (
          s(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = r),
              () => {
                e && (e._pendingUpdate = r);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    4169: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "warnOnce", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = (t) => {};
    },
    3177: function (t, e, i) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = i(6006),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(t, e, i) {
        var r,
          s = {},
          c = null,
          u = null;
        for (r in (void 0 !== i && (c = "" + i),
        void 0 !== e.key && (c = "" + e.key),
        void 0 !== e.ref && (u = e.ref),
        e))
          o.call(e, r) && !l.hasOwnProperty(r) && (s[r] = e[r]);
        if (t && t.defaultProps)
          for (r in (e = t.defaultProps)) void 0 === s[r] && (s[r] = e[r]);
        return {
          $$typeof: n,
          type: t,
          key: c,
          ref: u,
          props: s,
          _owner: a.current,
        };
      }
      (e.Fragment = s), (e.jsx = c), (e.jsxs = c);
    },
    9268: function (t, e, i) {
      "use strict";
      t.exports = i(3177);
    },
    6394: function (t, e, i) {
      t.exports = i(2011);
    },
    7611: function (t, e, i) {
      "use strict";
      var r = i(6054);
      function n() {}
      function s() {}
      (s.resetWarningCache = n),
        (t.exports = function () {
          function t(t, e, i, n, s, o) {
            if (o !== r) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: s,
            resetWarningCache: n,
          };
          return (i.PropTypes = i), i;
        });
    },
    9497: function (t, e, i) {
      t.exports = i(7611)();
    },
    6054: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    8274: function (t, e, i) {
      "use strict";
      var r = i(9268),
        n = i(6006),
        s = function () {
          return (s =
            Object.assign ||
            function (t) {
              for (var e, i = 1, r = arguments.length; i < r; i++)
                for (var n in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        };
      function o(t, e) {
        var i, r;
        switch (e.type) {
          case "TYPE":
            return s(s({}, t), {
              speed: e.speed,
              text:
                null === (i = e.payload) || void 0 === i
                  ? void 0
                  : i.substring(0, t.text.length + 1),
            });
          case "DELAY":
            return s(s({}, t), { speed: e.payload });
          case "DELETE":
            return s(s({}, t), {
              speed: e.speed,
              text:
                null === (r = e.payload) || void 0 === r
                  ? void 0
                  : r.substring(0, t.text.length - 1),
            });
          case "COUNT":
            return s(s({}, t), { count: t.count + 1 });
          default:
            return t;
        }
      }
      !(function (t, e) {
        void 0 === e && (e = {});
        var i = e.insertAt;
        if (t && "undefined" != typeof document) {
          var r = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("style");
          (n.type = "text/css"),
            "top" === i && r.firstChild
              ? r.insertBefore(n, r.firstChild)
              : r.appendChild(n),
            n.styleSheet
              ? (n.styleSheet.cssText = t)
              : n.appendChild(document.createTextNode(t));
        }
      })(
        ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
      );
      var a = n.memo(function (t) {
        var e = t.cursorBlinking,
          i = t.cursorStyle,
          n = t.cursorColor;
        return r.jsx(
          "span",
          s(
            {
              style: { color: void 0 === n ? "inherit" : n },
              className: ""
                .concat("styles-module_blinkingCursor__yugAC", " ")
                .concat(
                  void 0 === e || e ? "styles-module_blinking__9VXRT" : ""
                ),
            },
            { children: void 0 === i ? "|" : i }
          )
        );
      });
      (e.CF = a),
        (e.Ku = function (t) {
          var e = t.words,
            i =
              void 0 === e
                ? ["Hello World!", "This is", "a simple Typewriter"]
                : e,
            r = t.loop,
            s = void 0 === r ? 1 : r,
            a = t.typeSpeed,
            l = void 0 === a ? 80 : a,
            c = t.deleteSpeed,
            u = void 0 === c ? 50 : c,
            h = t.delaySpeed,
            d = void 0 === h ? 1500 : h,
            p = t.onLoopDone,
            f = t.onType,
            m = t.onDelete,
            v = t.onDelay,
            g = n.useReducer(o, { speed: l, text: "", count: 0 }),
            y = g[0],
            C = y.speed,
            M = y.text,
            b = y.count,
            x = g[1],
            z = n.useRef(0),
            P = n.useRef(!1),
            V = n.useRef(!1),
            w = n.useRef(!1),
            L = n.useRef(!1),
            S = n.useCallback(
              function () {
                var t = b % i.length,
                  e = i[t];
                V.current
                  ? (x({ type: "DELETE", payload: e, speed: u }),
                    "" === M && ((V.current = !1), x({ type: "COUNT" })))
                  : (x({ type: "TYPE", payload: e, speed: l }),
                    (w.current = !0),
                    M === e &&
                      (x({ type: "DELAY", payload: d }),
                      (w.current = !1),
                      (L.current = !0),
                      setTimeout(function () {
                        (L.current = !1), (V.current = !0);
                      }, d),
                      s > 0 &&
                        ((z.current += 1),
                        z.current / i.length === s &&
                          ((L.current = !1), (P.current = !0))))),
                  w.current && f && f(z.current),
                  V.current && m && m(),
                  L.current && v && v();
              },
              [b, d, u, s, l, i, M, f, m, v]
            );
          return (
            n.useEffect(
              function () {
                var t = setTimeout(S, C);
                return (
                  P.current && clearTimeout(t),
                  function () {
                    return clearTimeout(t);
                  }
                );
              },
              [S, C]
            ),
            n.useEffect(
              function () {
                p && P.current && p();
              },
              [p]
            ),
            [
              M,
              {
                isType: w.current,
                isDelay: L.current,
                isDelete: V.current,
                isDone: P.current,
              },
            ]
          );
        });
    },
    4171: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
          icon: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",
          mask: "M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z",
          color: "#7f7f7f",
        },
        r = {
          icon: "M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",
          mask: "M0,0v64h64V0H0z M 11.886719 33.476562 C 15.617188 31.421875 19.78125 29.707031 23.671875 27.980469 C 30.367188 25.15625 37.085938 22.382812 43.875 19.800781 C 45.199219 19.359375 47.570312 18.929688 47.804688 20.886719 C 47.675781 23.660156 47.152344 26.414062 46.792969 29.167969 C 45.878906 35.222656 44.824219 41.261719 43.796875 47.300781 C 43.441406 49.308594 40.921875 50.351562 39.308594 49.0625 C 35.4375 46.449219 31.53125 43.855469 27.710938 41.179688 C 26.457031 39.90625 27.617188 38.078125 28.738281 37.167969 C 31.925781 34.023438 35.3125 31.351562 38.335938 28.046875 C 39.152344 26.074219 36.742188 27.734375 35.945312 28.246094 C 31.578125 31.253906 27.316406 34.449219 22.710938 37.09375 C 20.359375 38.390625 17.617188 37.28125 15.265625 36.558594 C 13.15625 35.6875 10.066406 34.808594 11.886719 33.476562 Z M 11.886719 33.476562",
          color: "#49a9e9",
        };
      e.default = {
        bandsintown: {
          icon: "M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z",
          mask: "M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z",
          color: "#1B8793",
        },
        behance: {
          icon: "M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z",
          mask: "M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z",
          color: "#007CFF",
        },
        clubhouse: {
          icon: "M 0,0 H 64 V 64 H 0 Z",
          mask: "M.03516.10352v64.16796h64.16796V.10352H.03517zm32.67578 15.42773c1.27648 0 2.23913.56594 2.80273 1.83984.82354-.53787 1.95547-.7372 2.91797-.48242 1.30479.33971 2.09883 1.24658 2.58008 4.02344.16985.88015.42298 1.95643.73437 2.89062.39633 1.19156.84993 2.12458 1.64258 3.51172.25478.42464.56556.90643.87696 1.35938l.25585-.50977c.76435-1.55957 2.26748-3.08789 4.44727-3.08789.93677 0 1.9553.34023 2.52148 1.30274.36802.53787.50977 1.1594.50977 1.69726 0 .73604-.31162 1.47288-.5664 2.03906-.05662.11324-.084.16896-.084.19727-.6511 1.35883-1.52929 3.06134-1.52929 5.04297 0 5.7493-2.12565 8.69592-3.76758 10.2246-1.6728 1.55958-4.27695 2.88868-7.30859 2.88868-2.15148 0-4.39038-.62256-6.23047-1.83984-2.5195-1.67023-4.05036-4.24896-5.4375-6.51368-1.13493-1.8967-1.95654-3.42436-3.17383-6.31445-.70772-1.61361-1.35861-3.28684-1.89648-5.07031-.48125-1.55957-.22765-2.6917.39258-3.42774.62537-.76434 1.50429-1.13283 2.4668-1.18945.16985 0 .3399.00099.50976.0293-.14155-.56618-.19922-1.04802-.19922-1.47266 0-1.84266 1.44707-3.20117 3.4004-3.20117.25477 0 .50985.02737.73632.08398-.0283-.3114-.05664-.56553-.05664-.8203 0-2.01252 1.6433-3.20118 3.45508-3.20118zm0 1.70117c-.82096 0-1.81055.42426-1.81055 1.5 0 .70773.19637 1.75487.39453 2.60156.33971.82354.39763 1.33373.82227 3.1172.25478 1.05.56555 1.95539.87695 2.74804.36802.96508.79223 1.78657 1.38672 2.89062.28309.53787.42605.53794 1.10547.16993.53787-.2831 1.32934-.6241 1.92383-.82227-1.01913-2.2081-1.86834-4.05043-2.29297-5.60742-.11324-.45295-.50981-2.2679-.62305-3.06055-.08493-.79265-.16902-1.471-.36719-2.20703-.22647-.90589-.53843-1.33008-1.41601-1.33008zm4.86718 1.25c-.44454-.00398-.9176.13975-1.21484.39453-.3114.2831-.42477.50806-.33984 1.13086.14154 1.3614.36826 2.40958.62304 3.4004.5945 2.32133 1.5842 4.13519 2.09375 5.21093.16986.36802.31262.51073.5957.48242.39633-.0283.62218-.0576.87696-.0293.3397.02831.5957.2267.5957.56641 0 .2831-.14278.39653-.65234.50977-1.04743.22647-2.37943.59404-3.68164 1.33008-1.10663.62537-2.06969 1.39009-2.94727 2.49414-.08492.11323-.17095.16992-.3125.16992-.19816 0-.36725-.22666-.5371-.45313-.16986-.22647-.2832-.39655-.2832-.5664 0-.19817.08503-.36827.2832-.62305.3114-.42464.67968-.73543.67968-.9336 0-.14154-.254-.48062-.48047-.87695-.36801-.67941-.99138-2.04142-1.41601-3.06054-.6511-1.557-1.1046-3.54053-1.35938-4.75782-.3114-1.33052-.79326-1.69921-1.5293-1.69921-1.01912 0-1.69726.5941-1.69726 1.5 0 .59706.19742 1.38919.59375 2.6914.25478.84927.50986 1.69848.73633 2.29297.36801 1.0217.82047 2.15466 1.2168 3.06055.36801.82096.90537 1.78437 1.16015 2.26562.14155.25478.39649.67882.39649.9336 0 .45294-.33808.70703-.79102.70703-.25478 0-.48155-.11344-.73633-.50977-.3114-.45552-.9914-1.78457-1.47265-2.77539-.36802-.82096-.99134-2.29533-1.30274-3.31445-.50956-1.61361-.84898-2.2373-1.72656-2.20899-.50956.02831-.9347.1984-1.2461.5664-.3114.39634-.33876 1.0189-.08398 1.83985.53787 1.72685 1.16229 3.31164 1.83398 4.93555 1.19156 2.8026 1.9565 4.24976 3.06055 6.08984 1.38714 2.26472 2.74794 4.53085 4.92774 5.97461 1.557 1.01913 3.45679 1.5586 5.29687 1.5586 2.57612 0 4.75934-1.13529 6.14649-2.4375 1.41802-1.30222 3.22851-3.85202 3.22851-8.97852 0-2.34965 1.01978-4.39213 1.64258-5.72266.16985-.3397.5371-1.04707.5371-1.55664 0-.22647-.05571-.5372-.19726-.76367-.25478-.39632-.65156-.53906-1.1328-.53906-1.50296 0-2.46605 1.13418-3.00392 2.125-.22647.42463-.39556.87617-.5371 1.35742-.3114 1.04744-.62341 1.47295-1.5293 2.20899-.48126.42463-1.07436.96208-1.41406 1.38672-.56618.76691-.73737 1.41837-.87891 2.4375-.02831.25478-.50903.36718-1.10352.36718-.3397 0-.45312-.11252-.45312-.65039 0-.56618.19841-1.41534.62305-2.17969.59448-1.04743 1.24537-1.61447 1.89648-2.15234.6511-.53787.84965-.7638.9629-1.10352-.5945-.79522-1.16035-1.61555-1.6133-2.4082-.82095-1.44376-1.35856-2.522-1.7832-3.82422-.3397-1.0217-.6231-2.21228-.79296-3.14648-.33971-1.9842-.67897-2.49226-1.33008-2.66211-.13447-.03539-.27955-.05336-.42773-.05469zm-23.04296.3125c.20637-.01372.43669.0524.69726.1875.80552.41949 3.64839 2.63281 4.1914 3.07031.52501.42207.45311.64058.17774 1.1836s-.5325.68176-1.02148.52734c-.97795-.30882-3.8801-2.06658-4.63672-2.51953-.68456-.41177-.77298-.78223-.29688-1.68555.2638-.49862.54472-.7408.88868-.76367zm-1.78907 9.43555c.1387-.014.29568-.00501.46875.01172.80295.0772 4.52137.68056 5.11328.86328.6125.19044.69768.4686.62305 1.0039-.09522.69486-.40907.82698-.81055.83985-.85441.02316-4.40417-.1292-5.21484-.20899-.70515-.06948-.99127-.38064-.91406-1.40234.06176-.82225.3183-1.06544.73437-1.10742zm7.76368 7.58398c.30798.01846.53917.21806.71289.65235.25478.63566.08012.88943-.4629 1.22656-.59963.37059-3.77807 2.0357-4.49609 2.30078-.51213.19044-1.06769.14539-1.39453-.82227-.40147-1.1967.1619-1.47961.96484-1.79101.7103-.27537 3.65724-1.34205 4.3418-1.52734.12031-.03217.23133-.04522.33399-.03907z",
          color: "#1F1F1A",
        },
        codepen: {
          icon: "M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z",
          mask: "M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z",
          color: "#151515",
        },
        discord: {
          icon: "M 0,0 H 64 V 64 H 0 Z",
          mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 26.404297 16.828125 L 26.769531 17.259766 C 20.186671 19.137498 17.152344 21.990234 17.152344 21.990234 C 17.152344 21.990234 17.957407 21.557233 19.310547 20.943359 C 23.223697 19.246178 26.331328 18.778253 27.611328 18.669922 C 27.830758 18.633812 28.012992 18.597656 28.232422 18.597656 C 30.463282 18.308769 32.987954 18.236508 35.621094 18.525391 C 39.095384 18.922604 42.825476 19.931951 46.628906 21.990234 C 46.628906 21.990234 43.738624 19.282029 37.521484 17.404297 L 38.035156 16.828125 C 38.035156 16.828125 43.044257 16.719236 48.310547 20.619141 C 48.310547 20.619141 53.576172 30.044365 53.576172 41.671875 C 53.576172 41.671875 50.468999 46.907386 42.386719 47.160156 C 42.386719 47.160156 41.069796 45.606565 39.972656 44.234375 C 44.763516 42.898295 46.591797 39.9375 46.591797 39.9375 C 45.092367 40.91248 43.666719 41.598919 42.386719 42.068359 C 40.558139 42.826669 38.802844 43.332214 37.083984 43.621094 C 33.573124 44.271074 30.354188 44.091468 27.611328 43.585938 C 25.526758 43.188727 23.735758 42.610963 22.236328 42.033203 C 21.395188 41.708213 20.480696 41.310228 19.566406 40.804688 C 19.456696 40.732487 19.346048 40.69722 19.236328 40.625 C 19.163228 40.5889 19.126414 40.551755 19.089844 40.515625 C 18.431554 40.154535 18.066406 39.902344 18.066406 39.902344 C 18.066406 39.902344 19.822217 42.789919 24.466797 44.162109 C 23.369647 45.534299 22.015625 47.160156 22.015625 47.160156 C 13.933335 46.907386 10.861328 41.671875 10.861328 41.671875 C 10.861328 30.044375 16.128906 20.619141 16.128906 20.619141 C 21.395196 16.719236 26.404297 16.828125 26.404297 16.828125 z M 25.380859 30.296875 C 23.296289 30.296875 21.650391 32.101957 21.650391 34.304688 C 21.650391 36.507407 23.332859 38.3125 25.380859 38.3125 C 27.465429 38.3125 29.111328 36.507407 29.111328 34.304688 C 29.147928 32.101957 27.465429 30.296875 25.380859 30.296875 z M 38.728516 30.296875 C 36.643946 30.296875 34.998047 32.101957 34.998047 34.304688 C 34.998047 36.507407 36.680516 38.3125 38.728516 38.3125 C 40.813086 38.3125 42.458984 36.507407 42.458984 34.304688 C 42.458984 32.101957 40.813086 30.296875 38.728516 30.296875 z ",
          color: "#7289DA",
        },
        dribbble: {
          icon: "M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z",
          mask: "M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z",
          color: "#ea4c89",
        },
        dropbox: {
          icon: "M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z",
          mask: "M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z",
          color: "#1081DE",
        },
        email: i,
        facebook: {
          icon: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
          mask: "M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z",
          color: "#3b5998",
        },
        fivehundredpix: {
          icon: "M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z",
          mask: "M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z",
          color: "#222222",
        },
        flickr: {
          icon: "M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z",
          mask: "M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z",
          color: "#0063db",
        },
        foursquare: {
          icon: "M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z",
          mask: "M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z",
          color: "#0072b1",
        },
        github: {
          icon: "M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z",
          mask: "M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z",
          color: "#24292e",
        },
        gitlab: {
          icon: "m50.402 32.559l-1.9688-6.0664v0.007812-0.007812-0.003907l-3.9141-12.035c-0.21484-0.63672-0.80469-1.0586-1.4766-1.0547-0.67969 0.003906-1.25 0.42187-1.4609 1.0625l-3.7148 11.426h-11.719l-3.7227-11.426c-0.21094-0.64063-0.78125-1.0586-1.4609-1.0625h-0.007813c-0.66406 0-1.2578 0.42187-1.4727 1.0625l-3.9023 12.027v0.003907s0 0.003906-0.003906 0.007812c0.003906-0.003906 0.003906-0.007812 0.003906-0.007812l-1.9805 6.0664c-0.29687 0.91406 0.027344 1.9102 0.80469 2.4766l17.082 12.402c0.003907 0 0.007813 0 0.007813 0.003906 0.007812 0.003906 0.015625 0.011719 0.023437 0.015625-0.007812-0.003906-0.011719-0.011719-0.019531-0.015625l0.003906 0.003906h0.003906c0.023438 0.019532 0.050782 0.035157 0.082032 0.050782l0.007812 0.007812h0.003906l0.003907 0.003906h0.007812c0 0.003907 0 0.003907 0.003907 0.003907 0.003906 0 0.003906 0.003906 0.007812 0.003906 0.015625 0.007813 0.03125 0.011719 0.046875 0.019531 0.015625 0.003906 0.027344 0.011719 0.042969 0.015625v0.003907h0.007812c0.003906 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0.019532 0.007812 0.039063 0.011719 0.0625 0.015625 0.007813 0.003906 0.015625 0.007813 0.023438 0.007813h0.003906c0.003906 0 0.003906 0.003906 0.007812 0.003906h0.015626c0.003906 0 0.003906 0 0.007812 0.003906h0.003906c0.039063 0.003906 0.082032 0.007812 0.12109 0.007812h0.003906c0.039063 0 0.082032-0.003906 0.12109-0.007812h0.003906c0.003906-0.003906 0.007813-0.003906 0.011719-0.003906h0.011719c0.003906 0 0.007812-0.003906 0.007812-0.003906h0.003906c0.007813-0.003907 0.015626-0.003907 0.027344-0.007813 0.019532-0.003906 0.039063-0.007813 0.0625-0.015625h0.003906c0.003907 0 0.007813 0 0.011719-0.003906h0.003907s0.003906 0 0.007812-0.003906h0.007812v-0.003907c0.015626-0.003906 0.03125-0.011719 0.046876-0.015625 0.015624-0.007812 0.027343-0.011718 0.042968-0.019531 0.003906 0 0.007813-0.003906 0.007813-0.003906h0.003906c0.003906-0.003907 0.003906-0.003907 0.007813-0.003907 0.003906 0 0.003906-0.003906 0.007812-0.003906 0.003906-0.003906 0.007812-0.003906 0.011719-0.007812 0.027343-0.015625 0.054687-0.03125 0.082031-0.050782 0 0 0.003906 0 0.003906-0.003906h0.003906c0.003907-0.003906 0.003907-0.003906 0.007813-0.003906l17.086-12.402c0.77734-0.56641 1.1016-1.5625 0.80078-2.4766zm-7.3516-16.98l3.3516 10.309h-6.6992zm2.7656 12.051l-1.3672 1.75-10.086 12.91 4.7695-14.66zm-14.645 19.371c0.003906 0.003906 0.003906 0.003906 0.003906 0.007812 0-0.003906 0-0.003906-0.003906-0.007812zm-1.5273-4.707l-11.445-14.664h6.6797zm-8.6875-26.715l3.3555 10.309h-6.7031zm-5.5234 18.047c-0.16797-0.12109-0.23438-0.33203-0.17188-0.52734l1.4727-4.5117 10.773 13.805zm16.027 13.789c-0.003907-0.003906-0.007813-0.007812-0.011719-0.007812v-0.003906c-0.007813-0.003906-0.015625-0.011719-0.019531-0.015625-0.015626-0.011719-0.027344-0.023438-0.039063-0.035157 0.003906 0 0.003906 0.003907 0.003906 0.003907s0.003907 0 0.003907 0.003906c0.027343 0.023437 0.050781 0.046875 0.078124 0.066406h0.003907s0 0.003907 0.003906 0.003907c-0.007813-0.003907-0.015625-0.011719-0.023437-0.015626zm0.54297-3.5039l-2.8047-8.625-2.4844-7.6562h10.586zm0.57422 3.4766c-0.007813 0.003906-0.015625 0.011719-0.019531 0.015625-0.003906 0-0.003906 0-0.003906 0.003906-0.003907 0-0.007813 0.003906-0.007813 0.007812-0.007813 0.003907-0.015625 0.011719-0.023437 0.015626 0 0 0-0.003907 0.003906-0.003907 0.027344-0.019531 0.054687-0.042969 0.078125-0.066406l0.003906-0.003906s0.003906 0 0.003906-0.003907c-0.011719 0.011719-0.023437 0.023438-0.035156 0.035157zm15.996-13.762l-12.074 8.7617 10.781-13.797 1.4648 4.5078c0.0625 0.19531-0.003906 0.40625-0.17188 0.52734z",
          mask: "m0 0v64h64v-64h-64zm50.402 32.559l-1.9688-6.0664v0.007812-0.007812-0.003907l-3.9141-12.035c-0.21484-0.63672-0.80469-1.0586-1.4766-1.0547-0.67969 0.003906-1.25 0.42187-1.4609 1.0625l-3.7148 11.426h-11.719l-3.7227-11.426c-0.21094-0.64063-0.78125-1.0586-1.4609-1.0625h-0.007813c-0.66406 0-1.2578 0.42187-1.4727 1.0625l-3.9023 12.027v0.003907s0 0.003906-0.003906 0.007812c0.003906-0.003906 0.003906-0.007812 0.003906-0.007812l-1.9805 6.0664c-0.29687 0.91406 0.027344 1.9102 0.80469 2.4766l17.082 12.402c0.003907 0 0.007813 0 0.007813 0.003906 0.007812 0.003906 0.015625 0.011719 0.023437 0.015625-0.007812-0.003906-0.011719-0.011719-0.019531-0.015625l0.003906 0.003906h0.003906c0.023438 0.019532 0.050782 0.035157 0.082032 0.050782l0.007812 0.007812h0.003906l0.003907 0.003906h0.007812c0 0.003907 0 0.003907 0.003907 0.003907 0.003906 0 0.003906 0.003906 0.007812 0.003906 0.015625 0.007813 0.03125 0.011719 0.046875 0.019531 0.015625 0.003906 0.027344 0.011719 0.042969 0.015625v0.003907h0.007812c0.003906 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0 0.003906 0.007813 0.003906 0.011719 0.003906h0.003906c0.019532 0.007812 0.039063 0.011719 0.0625 0.015625 0.007813 0.003906 0.015625 0.007813 0.023438 0.007813h0.003906c0.003906 0 0.003906 0.003906 0.007812 0.003906h0.015626c0.003906 0 0.003906 0 0.007812 0.003906h0.003906c0.039063 0.003906 0.082032 0.007812 0.12109 0.007812h0.003906c0.039063 0 0.082032-0.003906 0.12109-0.007812h0.003906c0.003906-0.003906 0.007813-0.003906 0.011719-0.003906h0.011719c0.003906 0 0.007812-0.003906 0.007812-0.003906h0.003906c0.007813-0.003907 0.015626-0.003907 0.027344-0.007813 0.019532-0.003906 0.039063-0.007813 0.0625-0.015625h0.003906c0.003907 0 0.007813 0 0.011719-0.003906h0.003907s0.003906 0 0.007812-0.003906h0.007812v-0.003907c0.015626-0.003906 0.03125-0.011719 0.046876-0.015625 0.015624-0.007812 0.027343-0.011718 0.042968-0.019531 0.003906 0 0.007813-0.003906 0.007813-0.003906h0.003906c0.003906-0.003907 0.003906-0.003907 0.007813-0.003907 0.003906 0 0.003906-0.003906 0.007812-0.003906 0.003906-0.003906 0.007812-0.003906 0.011719-0.007812 0.027343-0.015625 0.054687-0.03125 0.082031-0.050782 0 0 0.003906 0 0.003906-0.003906h0.003906c0.003907-0.003906 0.003907-0.003906 0.007813-0.003906l17.086-12.402c0.77734-0.56641 1.1016-1.5625 0.80078-2.4766zm-7.3516-16.98l3.3516 10.309h-6.6992zm2.7656 12.051l-1.3672 1.75-10.086 12.91 4.7695-14.66zm-14.645 19.371c0.003906 0.003906 0.003906 0.003906 0.003906 0.007812 0-0.003906 0-0.003906-0.003906-0.007812zm-1.5273-4.707l-11.445-14.664h6.6797zm-8.6875-26.715l3.3555 10.309h-6.7031zm-5.5234 18.047c-0.16797-0.12109-0.23438-0.33203-0.17188-0.52734l1.4727-4.5117 10.773 13.805zm16.027 13.789c-0.003907-0.003906-0.007813-0.007812-0.011719-0.007812v-0.003906c-0.007813-0.003906-0.015625-0.011719-0.019531-0.015625-0.015626-0.011719-0.027344-0.023438-0.039063-0.035157 0.003906 0 0.003906 0.003907 0.003906 0.003907s0.003907 0 0.003907 0.003906c0.027343 0.023437 0.050781 0.046875 0.078124 0.066406h0.003907s0 0.003907 0.003906 0.003907c-0.007813-0.003907-0.015625-0.011719-0.023437-0.015626zm0.54297-3.5039l-2.8047-8.625-2.4844-7.6562h10.586zm0.57422 3.4766c-0.007813 0.003906-0.015625 0.011719-0.019531 0.015625-0.003906 0-0.003906 0-0.003906 0.003906-0.003907 0-0.007813 0.003906-0.007813 0.007812-0.007813 0.003907-0.015625 0.011719-0.023437 0.015626 0 0 0-0.003907 0.003906-0.003907 0.027344-0.019531 0.054687-0.042969 0.078125-0.066406l0.003906-0.003906s0.003906 0 0.003906-0.003907c-0.011719 0.011719-0.023437 0.023438-0.035156 0.035157zm15.996-13.762l-12.074 8.7617 10.781-13.797 1.4648 4.5078c0.0625 0.19531-0.003906 0.40625-0.17188 0.52734z",
          color: "#f96424",
        },
        google: {
          icon: "M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z",
          mask: "M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z",
          color: "#dd4b39",
        },
        google_play: {
          icon: "M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z",
          mask: "M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z",
          color: "#40BBC1",
        },
        groupme: {
          icon: "M40.321,39.43448a10.40049,9.51724 0 0 1 -16.64078,0a2.60012,2.37931 0 1 0 -4.16019,2.85517a15.60073,14.27586 0 0 0 24.96117,0a2.60012,2.37931 0 0 0 -4.16019,-2.85517zm-17.42081,-12.84828a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l5.20024,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-4.75862l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-5.20024,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-1.30006,0a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,4.75862l-1.30006,0zm6.5003,-4.75862l5.20024,0l0,4.75862l-5.20024,0l0,-4.75862z",
          mask: "M0,0v64h64V0H0z M40.321,39.43448a10.40049,9.51724 0 0 1 -16.64078,0a2.60012,2.37931 0 1 0 -4.16019,2.85517a15.60073,14.27586 0 0 0 24.96117,0a2.60012,2.37931 0 0 0 -4.16019,-2.85517zm-17.42081,-12.84828a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l5.20024,0l0,1.18966a2.60012,2.37931 0 0 0 5.20024,0l0,-1.18966l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-4.75862l1.30006,0a2.60012,2.37931 0 0 0 0,-4.75862l-1.30006,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-5.20024,0l0,-1.18966a2.60012,2.37931 0 0 0 -5.20024,0l0,1.18966l-1.30006,0a2.60012,2.37931 0 0 0 0,4.75862l1.30006,0l0,4.75862l-1.30006,0zm6.5003,-4.75862l5.20024,0l0,4.75862l-5.20024,0l0,-4.75862z",
          color: "#00aff0",
        },
        instagram: {
          icon: "M 39.88,25.89 C 40.86,25.89 41.65,25.10 41.65,24.12 41.65,23.14 40.86,22.35 39.88,22.35 38.90,22.35 38.11,23.14 38.11,24.12 38.11,25.10 38.90,25.89 39.88,25.89 Z M 32.00,24.42 C 27.82,24.42 24.42,27.81 24.42,32.00 24.42,36.19 27.82,39.58 32.00,39.58 36.18,39.58 39.58,36.18 39.58,32.00 39.58,27.82 36.18,24.42 32.00,24.42 Z M 32.00,36.92 C 29.28,36.92 27.08,34.72 27.08,32.00 27.08,29.28 29.28,27.08 32.00,27.08 34.72,27.08 36.92,29.28 36.92,32.00 36.92,34.72 34.72,36.92 32.00,36.92 Z M 32.00,19.90 C 35.94,19.90 36.41,19.92 37.96,19.99 39.41,20.05 40.19,20.29 40.71,20.50 41.40,20.77 41.89,21.08 42.41,21.60 42.92,22.12 43.24,22.61 43.51,23.30 43.71,23.82 43.95,24.60 44.02,26.04 44.09,27.60 44.11,28.06 44.11,32.01 44.11,35.95 44.09,36.41 44.02,37.97 43.95,39.41 43.71,40.19 43.51,40.71 43.24,41.40 42.92,41.90 42.41,42.41 41.89,42.93 41.40,43.25 40.71,43.51 40.19,43.71 39.41,43.96 37.96,44.02 36.41,44.09 35.94,44.11 32.00,44.11 28.06,44.11 27.59,44.09 26.04,44.02 24.59,43.96 23.81,43.72 23.29,43.51 22.60,43.24 22.11,42.93 21.59,42.41 21.08,41.90 20.76,41.40 20.49,40.71 20.29,40.19 20.05,39.41 19.98,37.97 19.91,36.41 19.89,35.95 19.89,32.01 19.89,28.06 19.91,27.60 19.98,26.04 20.05,24.60 20.29,23.82 20.49,23.30 20.76,22.61 21.08,22.12 21.59,21.60 22.11,21.08 22.60,20.76 23.29,20.50 23.81,20.30 24.59,20.05 26.04,19.99 27.59,19.91 28.06,19.90 32.00,19.90 Z M 32.00,17.24 C 27.99,17.24 27.49,17.26 25.91,17.33 24.34,17.40 23.27,17.65 22.33,18.01 21.36,18.39 20.54,18.90 19.72,19.72 18.90,20.54 18.39,21.37 18.01,22.33 17.65,23.27 17.40,24.34 17.33,25.92 17.26,27.49 17.24,27.99 17.24,32.00 17.24,36.01 17.26,36.51 17.33,38.09 17.40,39.66 17.65,40.73 18.01,41.67 18.39,42.65 18.90,43.47 19.72,44.29 20.54,45.11 21.37,45.61 22.33,45.99 23.27,46.36 24.34,46.61 25.92,46.68 27.49,46.75 27.99,46.77 32.01,46.77 36.02,46.77 36.52,46.75 38.09,46.68 39.66,46.61 40.74,46.36 41.68,45.99 42.65,45.62 43.47,45.11 44.29,44.29 45.11,43.47 45.62,42.64 46.00,41.67 46.36,40.74 46.61,39.66 46.68,38.09 46.75,36.51 46.77,36.01 46.77,32.00 46.77,27.99 46.75,27.49 46.68,25.91 46.61,24.34 46.36,23.27 46.00,22.33 45.62,21.35 45.11,20.53 44.29,19.71 43.47,18.89 42.65,18.39 41.68,18.01 40.74,17.64 39.67,17.39 38.09,17.32 36.51,17.26 36.01,17.24 32.00,17.24 Z",
          mask: "M0,0v64h64V0H0z M 42.03,23.99 C 42.03,24.99 41.22,25.79 40.23,25.79 39.23,25.79 38.43,24.99 38.43,23.99 38.43,22.99 39.23,22.19 40.23,22.19 41.22,22.19 42.03,22.99 42.03,23.99 Z M 24.52,31.99 C 24.52,27.74 27.97,24.29 32.22,24.29 36.47,24.29 39.92,27.75 39.92,31.99 39.92,36.24 36.47,39.70 32.22,39.70 27.97,39.70 24.52,36.25 24.52,31.99 Z M 27.22,31.99 C 27.22,34.76 29.46,36.99 32.22,36.99 34.98,36.99 37.22,34.76 37.22,31.99 37.22,29.23 34.98,27.00 32.22,27.00 29.46,27.00 27.22,29.23 27.22,31.99 Z M 38.28,19.79 C 36.70,19.72 36.22,19.70 32.22,19.70 28.22,19.70 27.74,19.71 26.17,19.79 24.69,19.85 23.90,20.11 23.37,20.31 22.67,20.58 22.17,20.90 21.65,21.43 21.13,21.96 20.80,22.46 20.53,23.16 20.33,23.68 20.08,24.48 20.01,25.94 19.94,27.52 19.92,27.99 19.92,32.01 19.92,36.01 19.94,36.48 20.01,38.06 20.08,39.52 20.33,40.32 20.53,40.84 20.80,41.54 21.13,42.05 21.65,42.57 22.17,43.10 22.67,43.41 23.37,43.69 23.90,43.90 24.69,44.15 26.17,44.21 27.74,44.28 28.22,44.30 32.22,44.30 36.22,44.30 36.70,44.28 38.28,44.21 39.75,44.15 40.54,43.89 41.07,43.69 41.77,43.42 42.27,43.10 42.80,42.57 43.32,42.05 43.64,41.54 43.91,40.84 44.12,40.32 44.36,39.52 44.43,38.06 44.50,36.48 44.52,36.01 44.52,32.01 44.52,27.99 44.50,27.52 44.43,25.94 44.36,24.48 44.12,23.68 43.91,23.16 43.64,22.46 43.32,21.96 42.80,21.43 42.27,20.90 41.77,20.59 41.07,20.31 40.54,20.10 39.75,19.85 38.28,19.79 Z M 26.03,17.09 C 27.64,17.02 28.15,17.00 32.22,17.00 36.27,17.00 36.80,17.02 38.38,17.08 38.38,17.08 38.41,17.08 38.41,17.08 40.01,17.15 41.10,17.41 42.06,17.78 43.04,18.17 43.87,18.68 44.71,19.51 45.54,20.34 46.06,21.18 46.44,22.17 46.81,23.13 47.06,24.21 47.14,25.81 47.21,27.41 47.23,27.92 47.23,31.99 47.23,36.07 47.21,36.58 47.14,38.18 47.06,39.78 46.81,40.87 46.44,41.82 46.06,42.80 45.54,43.65 44.71,44.48 43.87,45.31 43.04,45.83 42.06,46.21 41.10,46.58 40.00,46.84 38.41,46.91 36.81,46.98 36.31,47.00 32.23,47.00 28.15,47.00 27.64,46.98 26.04,46.91 24.44,46.84 23.35,46.58 22.40,46.21 21.42,45.82 20.58,45.31 19.75,44.48 18.91,43.65 18.39,42.81 18.01,41.82 17.64,40.86 17.39,39.78 17.32,38.18 17.25,36.58 17.23,36.07 17.23,31.99 17.23,27.92 17.25,27.41 17.32,25.82 17.39,24.21 17.64,23.13 18.01,22.17 18.39,21.20 18.91,20.35 19.75,19.52 20.58,18.69 21.41,18.17 22.40,17.78 23.35,17.42 24.44,17.16 26.03,17.09 Z",
          color: "#e94475",
        },
        "itch.io": {
          icon: "M 0,0 H 64 V 64 H 0 Z",
          mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 32 16 C 36.482469 15.999275 39.489763 16.027944 43.828125 16.197266 C 45.223688 17.11826 47.973899 20.631595 48 21.552734 L 48 23.076172 C 48 25.008914 46.375769 26.707031 44.900391 26.707031 C 43.128974 26.707031 41.652344 25.07576 41.652344 23.138672 C 41.652344 25.07576 40.226756 26.707031 38.455078 26.707031 C 36.68353 26.707031 35.302734 25.07576 35.302734 23.138672 C 35.302734 25.07576 33.787432 26.707031 32.015625 26.707031 L 31.984375 26.707031 C 30.212699 26.707031 28.697266 25.07576 28.697266 23.138672 C 28.697266 25.07576 27.316728 26.707031 25.544922 26.707031 C 23.773245 26.707031 22.347656 25.07576 22.347656 23.138672 C 22.347526 25.07576 20.871157 26.707031 19.099609 26.707031 C 17.624234 26.707031 16 25.008624 16 23.076172 L 16 21.552734 C 16.026082 20.63174 18.776052 17.11855 20.171875 16.197266 C 21.406769 16.077682 27.517662 16.000435 32 16 z M 28.673828 25.796875 A 3.6505562 4.0580007 0 0 0 29.292969 26.689453 A 3.7155025 4.1301957 0 0 0 31.894531 27.867188 C 31.930136 27.867188 31.964779 27.866621 32 27.865234 C 32.035221 27.866088 32.07219 27.867188 32.107422 27.867188 A 3.7155025 4.1301957 0 0 0 34.708984 26.689453 A 3.6502954 4.0577109 0 0 0 35.326172 25.796875 A 3.6548598 4.0627847 0 0 0 35.949219 26.689453 C 36.617985 27.416189 37.534472 27.867188 38.544922 27.867188 A 3.7141985 4.1287462 0 0 0 41.146484 26.689453 C 41.388792 26.425753 41.573442 26.142952 41.742188 25.814453 C 41.910814 26.143677 42.1458 26.425338 42.388672 26.689453 A 3.7168066 4.1316454 0 0 0 44.990234 27.867188 C 45.112172 27.867188 45.239291 27.830162 45.341797 27.791016 C 45.484209 29.439616 45.543344 31.01503 45.564453 32.164062 L 45.566406 32.169922 C 45.569073 32.753426 45.571445 33.23411 45.574219 33.900391 C 45.546831 37.359375 45.881298 45.110721 44.201172 47.015625 C 41.597581 47.690463 36.806287 47.998187 32 48 C 27.193582 47.998115 22.402421 47.690463 19.798828 47.015625 C 18.118702 45.110865 18.455126 37.359375 18.427734 33.900391 C 18.430401 33.233965 18.432987 32.753281 18.435547 32.169922 L 18.435547 32.164062 C 18.456799 31.015319 18.515782 29.439616 18.658203 27.791016 C 18.760709 27.830151 18.887947 27.867188 19.009766 27.867188 A 3.7168066 4.1316454 0 0 0 21.611328 26.689453 C 21.85416 26.425316 22.089324 26.143533 22.257812 25.814453 C 22.426437 26.142953 22.611207 26.425606 22.853516 26.689453 A 3.7144592 4.129036 0 0 0 25.455078 27.867188 C 26.465659 27.867188 27.382014 27.416332 28.050781 26.689453 A 3.6548598 4.0627847 0 0 0 28.673828 25.796875 z M 37.998047 29.636719 L 37.998047 29.638672 L 37.996094 29.638672 C 36.938044 29.640989 35.998583 29.639715 34.833984 31.052734 C 33.917302 30.94591 32.958545 30.891191 32 30.892578 C 31.041455 30.890977 30.082567 30.945897 29.166016 31.052734 C 28.001416 29.63986 27.061956 29.641019 26.003906 29.638672 L 26.001953 29.638672 C 25.502078 29.638672 23.502722 29.638165 22.109375 33.988281 L 20.613281 39.955078 C 19.504239 44.394801 20.966648 44.503759 22.792969 44.507812 C 25.50128 44.395752 27.001953 42.209586 27.001953 40.023438 C 28.501065 40.296565 30.250885 40.433594 32 40.433594 C 33.748987 40.433449 35.498804 40.296562 36.998047 40.023438 C 36.998047 42.209586 38.496636 44.395759 41.205078 44.507812 C 43.031397 44.503898 44.495762 44.39464 43.386719 39.955078 L 41.890625 33.988281 C 40.497278 29.638166 38.497925 29.636719 37.998047 29.636719 z M 32 33.056641 C 32 33.056641 34.851013 35.967594 35.363281 37.001953 L 33.498047 36.919922 L 33.498047 38.728516 C 33.498047 38.813166 32.749101 38.778784 32 38.740234 C 31.250641 38.778805 30.501953 38.813177 30.501953 38.728516 L 30.501953 36.919922 L 28.636719 37.001953 C 29.148854 35.967594 31.997653 33.059414 32 33.056641 z ",
          color: "#fa5c5c",
        },
        itunes: {
          icon: "M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z",
          mask: "M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z",
          color: "#E049D1",
        },
        linkedin: {
          icon: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",
          mask: "M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z",
          color: "#007fb1",
        },
        linktree: {
          icon: "M27.43603,19.38636c-0.60084,-0.94849 -2.16195,-0.94849 -2.76234,0l-10.32917,16.44343c-0.48058,0.84332 0.24007,1.79182 1.32104,1.79182l6.96599,0l0,6.21877c0,0.63259 0.60084,1.15962 1.32149,1.15962l4.08339,0c0.72065,0 1.32104,-0.52703 1.32104,-1.15962l0,-6.21877l-1.92144,0c-0.84091,0 -1.4413,-0.52703 -1.56156,-1.15962c0,-0.21073 0,-0.42147 0.12026,-0.63454l5.7652,-9.17021l-4.3239,-7.27088zm9.12794,0c0.60084,-0.94849 2.16195,-0.94849 2.76234,0l10.32917,16.44343c0.48058,0.84332 -0.24007,1.79182 -1.32104,1.79182l-6.84618,0l0,6.21877c0,0.63259 -0.60039,1.15962 -1.32238,1.15962l-4.32257,0c-0.72065,0 -1.32104,-0.52703 -1.32104,-1.15962l0,-6.21877l1.92188,0c0.84046,0 1.44086,-0.52703 1.56111,-1.15962c0,-0.21073 0,-0.42147 -0.12026,-0.63454l-5.76476,-9.16786l4.44371,-7.27322z",
          mask: "M0,0v64h64V0H0z M27.43603,19.38636c-0.60084,-0.94849 -2.16195,-0.94849 -2.76234,0l-10.32917,16.44343c-0.48058,0.84332 0.24007,1.79182 1.32104,1.79182l6.96599,0l0,6.21877c0,0.63259 0.60084,1.15962 1.32149,1.15962l4.08339,0c0.72065,0 1.32104,-0.52703 1.32104,-1.15962l0,-6.21877l-1.92144,0c-0.84091,0 -1.4413,-0.52703 -1.56156,-1.15962c0,-0.21073 0,-0.42147 0.12026,-0.63454l5.7652,-9.17021l-4.3239,-7.27088zm9.12794,0c0.60084,-0.94849 2.16195,-0.94849 2.76234,0l10.32917,16.44343c0.48058,0.84332 -0.24007,1.79182 -1.32104,1.79182l-6.84618,0l0,6.21877c0,0.63259 -0.60039,1.15962 -1.32238,1.15962l-4.32257,0c-0.72065,0 -1.32104,-0.52703 -1.32104,-1.15962l0,-6.21877l1.92188,0c0.84046,0 1.44086,-0.52703 1.56111,-1.15962c0,-0.21073 0,-0.42147 -0.12026,-0.63454l-5.76476,-9.16786l4.44371,-7.27322z",
          color: "#39e09b",
        },
        mailto: i,
        medium: {
          icon: "M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",
          mask: "M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z",
          color: "#333332",
        },
        meetup: {
          icon: "M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z",
          mask: "M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z",
          color: "#E51937",
        },
        pinterest: {
          icon: "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",
          mask: "M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z",
          color: "#cb2128",
        },
        pixiv: {
          icon: "M 33.552734 16.46875 C 21.708875 16.46875 13.650391 25.615234 13.650391 25.615234 L 15.919922 29.220703 C 15.919922 29.220703 17.180054 29.327146 16.511719 27.203125 C 17.085451 26.116698 18.210086 24.658325 20.404297 22.970703 L 20.404297 46.978516 C 19.458253 47.247074 18.209962 47.747072 19.064453 48.601562 L 25.582031 48.601562 C 26.442627 47.740968 25.088743 47.222673 24.261719 46.978516 L 24.261719 41.316406 C 24.261719 41.316406 28.730963 43.072266 33.552734 43.072266 C 37.78552 43.072266 41.640263 41.811762 44.505859 39.535156 C 47.374506 37.270752 49.218055 33.892818 49.208984 30.029297 C 49.227296 26.306156 47.618647 22.755613 44.798828 20.320312 C 42.006468 17.881962 38.093741 16.472656 33.552734 16.472656 L 33.552734 16.46875 z M 33.15625 18.496094 C 36.757322 18.499147 39.580706 19.856689 41.494141 21.925781 C 43.401491 24.000973 44.442052 26.756349 44.451172 29.966797 C 44.438968 33.091793 43.327375 35.664185 41.34375 37.638672 C 39.363164 39.597898 36.479609 40.833984 33.15625 40.833984 L 33.134766 40.833984 C 29.436041 40.833984 26.318602 40.114744 24.261719 39.101562 L 24.261719 21.087891 C 26.523068 19.482668 30.189947 18.489893 33.15625 18.496094 z ",
          mask: "M0,0v64h64V0H0z M 33.552734 16.46875 C 21.708875 16.46875 13.650391 25.615234 13.650391 25.615234 L 15.919922 29.220703 C 15.919922 29.220703 17.180054 29.327146 16.511719 27.203125 C 17.085451 26.116698 18.210086 24.658325 20.404297 22.970703 L 20.404297 46.978516 C 19.458253 47.247074 18.209962 47.747072 19.064453 48.601562 L 25.582031 48.601562 C 26.442627 47.740968 25.088743 47.222673 24.261719 46.978516 L 24.261719 41.316406 C 24.261719 41.316406 28.730963 43.072266 33.552734 43.072266 C 37.78552 43.072266 41.640263 41.811762 44.505859 39.535156 C 47.374506 37.270752 49.218055 33.892818 49.208984 30.029297 C 49.227296 26.306156 47.618647 22.755613 44.798828 20.320312 C 42.006468 17.881962 38.093741 16.472656 33.552734 16.472656 L 33.552734 16.46875 z M 33.15625 18.496094 C 36.757322 18.499147 39.580706 19.856689 41.494141 21.925781 C 43.401491 24.000973 44.442052 26.756349 44.451172 29.966797 C 44.438968 33.091793 43.327375 35.664185 41.34375 37.638672 C 39.363164 39.597898 36.479609 40.833984 33.15625 40.833984 L 33.134766 40.833984 C 29.436041 40.833984 26.318602 40.114744 24.261719 39.101562 L 24.261719 21.087891 C 26.523068 19.482668 30.189947 18.489893 33.15625 18.496094 z ",
          color: "#0097fa",
        },
        ravelry: {
          icon: "m 42.692268,28.943187 c 0,0 -2.183968,-0.39738 -3.751944,-0.39738 -3.583932,0 -4.423932,1.986862 -4.423932,4.938744 v 12.48877 h -9.68784 v -25.43168 h 9.68784 v 4.257542 c 1.175992,-3.576324 3.527958,-4.825204 8.175876,-4.825204 z",
          mask: "m 63.924726,29.096387 c -0.159216,-1.37862 -0.223986,-2.77672 -0.49359,-4.132644 -0.32719,-1.64706 -0.744786,-3.286822 -1.26799,-4.880344 -0.914378,-2.785641 -2.24955,-5.367746 -4.06872,-7.666806 C 57.306434,11.420731 56.508042,10.42083 55.614454,9.5247095 53.750496,7.6562678 51.67293,6.055426 49.405762,4.7092447 47.043398,3.3062835 44.565046,2.1693223 41.930674,1.4199816 40.478706,1.0072007 38.995526,0.69580128 37.513944,0.40466133 36.620358,0.22946083 35.701974,0.18246043 34.795604,0.07380026 34.753982,0.06979694 34.716296,0.02600006 34.677222,0 33.258834,8.1989087e-4 31.840466,8.1989087e-4 30.422078,8.1989087e-4 30.104492,0.05262056 29.788486,0.12402026 29.468494,0.15402006 c -1.53998,0.14520013 -3.035156,0.50360058 -4.51433,0.94640074 -1.82077,0.5441412 -3.55994,1.2926611 -5.24071,2.1806619 -1.760773,0.9309812 -3.427949,2.0184831 -5.018319,3.2211239 -0.812793,0.6146996 -1.616767,1.2480602 -2.368755,1.9357611 -1.340791,1.227781 -2.6847606,2.4580233 -3.9439328,3.7693433 -1.700776,1.771942 -3.1671654,3.739324 -4.434328,5.859985 -1.123196,1.880602 -2.0455666,3.849625 -2.7007613,5.945945 -0.4727961,1.514064 -0.8143915,3.054064 -1.01357978,4.634626 -0.19839916,1.576502 -0.28319628,3.157882 -0.20481124,4.736824 0.08957116,1.796262 0.25360212,3.586864 0.58320198,5.365286 0.45679544,2.46452 1.17117854,4.831704 2.20476394,7.106446 0.8551724,1.880602 1.9239546,3.622543 3.1631412,5.270425 1.039188,1.38106 2.2159696,2.629922 3.4735436,3.78878 1.6863734,1.553804 3.5335414,2.901628 5.5063064,4.07833 2.339162,1.395656 4.794331,2.507478 7.36709,3.370342 1.750374,0.587138 3.54155,1.00558 5.355908,1.311318 0.799988,0.1346 1.617576,0.167 2.426364,0.249782 0.05446,0.006 0.10476,0.04942 0.15684,0.0746 1.41839,0 2.836758,0 4.255146,0 0.33039,-0.0518 0.65918,-0.1248 0.991976,-0.1524 2.152778,-0.1776 4.231136,-0.711222 6.258296,-1.428904 2.267166,-0.803656 4.441528,-1.83034 6.451108,-3.17572 1.28478,-0.85962 2.555948,-1.743562 3.787124,-2.679402 0.762404,-0.57984 1.447982,-1.26672 2.148768,-1.92766 0.5224,-0.493062 1.023192,-1.010444 1.516784,-1.533524 1.590368,-1.68922 2.963142,-3.547122 4.141522,-5.551825 1.257592,-2.139302 2.287174,-4.387284 2.93915,-6.790146 0.376814,-1.388362 0.652002,-2.805922 0.924798,-4.220246 0.13594,-0.703898 0.16474,-1.42972 0.246402,-2.14498 0.0038,-0.0422 0.04714,-0.0802 0.0728,-0.12 0,-1.64706 0,-3.2941 0,-4.941162 -0.02566,-0.0794 -0.0655,-0.1566 -0.07518,-0.23762 z m -21.232458,-0.1532 c 0,0 -2.183968,-0.39738 -3.751944,-0.39738 -3.583932,0 -4.423932,1.986862 -4.423932,4.938744 v 12.48877 h -9.68784 v -25.43168 h 9.68784 v 4.257542 c 1.175992,-3.576324 3.527958,-4.825204 8.175876,-4.825204 z",
          color: "#EE6E62",
        },
        rdio: {
          icon: "M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z",
          mask: "M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z",
          color: "#0475C5",
        },
        reddit: {
          icon: "M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",
          mask: "M0,0v64h64V0H0z M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",
          color: "#FF4500",
        },
        rss: {
          icon: "M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z",
          mask: "M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z",
          color: "#EF8733",
        },
        sharethis: {
          icon: "M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",
          mask: "M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z",
          color: "#00BF00",
        },
        slack: {
          icon: "m 12.636243,37.559371 c 0,5.066504 8,5.066504 8,0 v -3.79988 h -4 c -2.209139,0 -4,1.701264 -4,3.79988 z m 25.28,-6.34579 c 2.209139,0 4,-1.701264 4,-3.79988 v -10.12667 c 0,-5.066504 -8,-5.066504 -8,0 v 10.12667 c -1.11e-4,2.113545 1.815256,3.821015 4.04,3.79988 z m 14.640001,-3.79988 c 0,-5.066504 -8.000001,-5.066504 -8.000001,0 v 3.79988 h 4.000001 c 2.240313,0.04257 4.080448,-1.671223 4.08,-3.79988 z m -25.240001,6.34579 c -2.209139,0 -4,1.701264 -4,3.79988 v 10.12667 c 0,5.066504 8,5.066504 8,0 v -10.12667 c 0,-2.098616 -1.790861,-3.79988 -4,-3.79988 z m 10.64,10.12667 h -4 v 3.79988 c 0,3.385567 4.308554,5.080452 6.828283,2.686784 2.51973,-2.393667 0.735584,-6.486664 -2.828283,-6.486664 z M 48.636244,33.759491 H 37.956243 c -5.324679,0.0082 -5.324679,7.591544 0,7.59975 h 10.680001 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z M 27.316243,23.613821 h -10.68 c -5.341983,-0.0082 -5.341983,7.607982 0,7.59975 h 10.68 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z m 0,-10.12667 c -5.324679,0.0082 -5.324679,7.591545 0,7.59975 h 4 v -3.79988 c 0,-2.098615 -1.790861,-3.79988 -4,-3.79988 z",
          mask: "M 0,0 V 64 H 64 V 0 Z m 12.636243,37.559371 c 0,5.066505 8,5.066505 8,0 v -3.79988 h -4 c -2.209139,0 -4,1.701265 -4,3.79988 z m 25.28,-6.34579 c 2.209139,0 4,-1.701264 4,-3.79988 v -10.12667 c 0,-5.066504 -8,-5.066504 -8,0 v 10.12667 c -1.11e-4,2.113546 1.815256,3.821016 4.04,3.79988 z m 14.64,-3.79988 c 0,-5.066504 -8,-5.066504 -8,0 v 3.79988 h 4 c 2.240314,0.04257 4.080448,-1.671223 4.08,-3.79988 z m -25.24,6.34579 c -2.209139,0 -4,1.701265 -4,3.79988 v 10.12667 c 0,5.066505 8,5.066505 8,0 v -10.12667 c 0,-2.098615 -1.790861,-3.79988 -4,-3.79988 z m 10.64,10.12667 h -4 v 3.79988 c 0,3.385567 4.308554,5.080452 6.828283,2.686785 2.51973,-2.393667 0.735584,-6.486665 -2.828283,-6.486665 z m 10.68,-10.12667 h -10.68 c -5.324679,0.0082 -5.324679,7.591545 0,7.59975 h 10.68 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z m -21.32,-10.14567 h -10.68 c -5.341983,-0.0082 -5.341983,7.607983 0,7.59975 h 10.68 c 5.324679,-0.0082 5.324679,-7.591544 0,-7.59975 z m 0,-10.12667 c -5.324679,0.0082 -5.324679,7.591545 0,7.59975 h 4 v -3.79988 c 0,-2.125738 -1.803765,-3.79987 -4,-3.79987 z",
          color: "#4A164A",
        },
        smugmug: {
          icon: "M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z",
          mask: "M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z",
          color: "#8cca1e",
        },
        snapchat: {
          icon: "M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z",
          mask: "M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z",
          color: "#FFC91B",
        },
        soundcloud: {
          icon: "M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z",
          mask: "M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z",
          color: "#FF5700",
        },
        spotify: {
          icon: "M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2",
          mask: "M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z",
          color: "#2EBD59",
        },
        squarespace: {
          icon: "M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z",
          mask: "M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z",
          color: "#1C1C1C",
        },
        stackoverflow: {
          icon: "M 0,0 H 64 V 64 H 0 Z",
          mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 37.623047 12.775391 L 47.613281 26.207031 L 44.925781 28.203125 L 34.9375 14.771484 L 37.623047 12.775391 z M 31.462891 18.119141 L 44.326172 28.832031 L 42.183594 31.404297 L 29.320312 20.691406 L 31.462891 18.119141 z M 26.533203 25.103516 L 41.708984 32.167969 L 40.294922 35.205078 L 25.121094 28.136719 L 26.533203 25.103516 z M 23.640625 32.705078 L 40.021484 36.150391 L 39.333984 39.423828 L 22.953125 35.980469 L 23.640625 32.705078 z M 15.984375 36.972656 L 19.318359 36.972656 L 19.318359 46.978516 L 42.666016 46.978516 L 42.666016 36.972656 L 46 36.972656 L 46 50.3125 L 15.984375 50.3125 L 15.984375 36.972656 z M 22.654297 40.308594 L 39.330078 40.308594 L 39.330078 43.642578 L 22.654297 43.642578 L 22.654297 40.308594 z",
          color: "#ed803d",
        },
        "t.me": r,
        telegram: r,
        tiktok: {
          icon: "M 0,0 H 64 V 64 H 0 Z",
          mask: "M 0 0 L 0 64 L 64 64 L 64 0 L 0 0 z M 33.330078 16 L 38.845703 16 C 38.841484 16.464979 38.879928 16.930827 38.960938 17.388672 L 38.962891 17.388672 C 39.347214 19.450699 40.563022 21.263117 42.324219 22.402344 C 43.560373 23.223837 45.011906 23.660664 46.496094 23.660156 L 46.496094 24.853516 C 46.499654 24.854516 46.504312 24.854771 46.507812 24.855469 L 46.507812 29.123047 C 43.760055 29.129293 41.080342 28.271577 38.847656 26.669922 L 38.847656 37.882812 C 38.835889 43.478203 34.296575 48.007827 28.701172 48.007812 C 26.63222 48.048166 24.599665 47.449168 22.884766 46.291016 C 22.767781 46.167585 22.658664 46.038312 22.548828 45.910156 C 19.166219 43.334883 17.735525 38.905122 19.021484 34.820312 C 20.351327 30.5961 24.272588 27.726928 28.701172 27.736328 C 29.158607 27.742889 29.614526 27.781926 30.066406 27.853516 L 30.054688 33.488281 C 29.612312 33.350917 29.152646 33.277637 28.689453 33.273438 C 26.564626 33.28434 24.721455 34.740631 24.216797 36.804688 C 23.712137 38.868744 24.676556 41.009904 26.556641 42 C 27.215641 42.344292 27.967447 42.505495 28.710938 42.511719 C 31.19892 42.507676 33.238354 40.539029 33.330078 38.052734 L 33.330078 16 z",
          color: "#000000",
        },
        tumblr: {
          icon: "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",
          mask: "M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z",
          color: "#2c4762",
        },
        twitch: {
          icon: "M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z",
          mask: "M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z",
          color: "#6441A5",
        },
        twitter: {
          icon: "m 48.1,22.1 c -1.223105,0.430685 -2.4,0.761371 -3.8,1 1.4,-0.8 2.4,-2.1 2.9,-3.6 -1.3,0.8 -2.7,1.3 -4.2,1.6 -1.2,-1.3 -3,-2.1 -4.8,-2.1 -3.6,0 -6.6,2.9 -6.6,6.6 0,0.5 0.1,1 0.2,1.5 -5.5,-0.3 -10.3,-2.9 -13.5,-6.9 -0.6,1 -0.9,2.1 -0.9,3.3 0,2.3 1.2,4.3 2.9,5.5 -1.1,0 -2.1,-0.3 -3,-0.8 v 0.1 c 0,3.2 2.3,5.8 5.3,6.4 -0.6,0.1 -1.1,0.2 -1.7,0.2 -0.4,0 -0.8,0 -1.2,-0.1 0.8,2.6 3.3,4.5 6.1,4.6 -2.2,1.8 -5.1,2.8 -8.2,2.8 -0.5,0 -1.1,0 -1.6,-0.1 C 18.9,44 22.4,45 26.1,45 38.2,45 44.43575,34.996634 44.67774,26.3 L 44.7,25.5 c 1.2,-1 2.5,-2.1 3.4,-3.4 z",
          mask: "M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z",
          color: "#00aced",
        },
        upwork: {
          icon: "M 0,0 H 64 V 64 H 0 Z",
          mask: "M 32 0 C 14.272 0 0 14.272 0 32 C 0 49.728 14.272 64 32 64 C 49.728 64 64 49.728 64 32 C 64 14.272 49.728 0 32 0 z M 24.9375 17.111328 L 30.537109 17.111328 C 31.637109 20.911328 33.636719 25.310938 36.136719 29.210938 C 37.736719 23.710938 41.737109 20.210938 47.037109 20.210938 C 53.137109 20.210938 58.136719 25.2125 58.136719 31.3125 C 58.136719 37.7125 53.137109 42.710938 47.037109 42.710938 C 44.037109 42.710937 41.537891 41.911719 39.337891 40.511719 L 36.9375 52.412109 L 31.236328 52.412109 L 34.736328 36.111328 C 33.236328 34.011328 31.836328 31.612109 30.736328 29.412109 L 30.736328 31.912109 C 30.736328 38.012109 25.837891 42.912109 19.837891 42.912109 C 13.837891 42.912109 8.9375 38.012109 8.9375 31.912109 L 8.9375 17.210938 L 14.337891 17.210938 L 14.337891 31.8125 C 14.337891 34.7125 16.736719 37.111328 19.636719 37.111328 C 22.536719 37.111328 24.9375 34.7125 24.9375 31.8125 L 24.9375 17.111328 z M 47.136719 25.912109 C 43.036719 25.912109 41.737891 29.9125 41.337891 32.3125 L 41.337891 32.412109 L 40.736328 34.611328 C 42.536328 36.111328 44.837109 37.111328 47.037109 37.111328 C 49.937109 37.111328 52.636328 34.611719 52.736328 31.511719 C 52.736328 28.411719 50.236719 25.912109 47.136719 25.912109 z ",
          color: "#3da800",
        },
        vevo: {
          icon: "M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z",
          mask: "M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z",
          color: "#ED1A3B",
        },
        vimeo: {
          icon: "M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z",
          mask: "M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z",
          color: "#1ab7ea",
        },
        vine: {
          icon: "M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z",
          mask: "M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z",
          color: "#00BF8F",
        },
        vk: {
          icon: "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
          mask: "M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
          color: "#45668e",
        },
        vsco: {
          icon: "M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z",
          mask: "M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z",
          color: "#83878A",
        },
        wechat: {
          icon: "M48.769,46.072c2.85-2.068,4.672-5.121,4.672-8.518c0-6.219-6.053-11.262-13.518-11.262s-13.519,5.043-13.519,11.262 c0,6.221,6.054,11.266,13.519,11.266c1.541,0,3.031-0.219,4.412-0.617l0.396-0.061c0.262,0,0.494,0.08,0.717,0.209l2.963,1.709 l0.26,0.084c0.248,0,0.449-0.201,0.449-0.451l-0.074-0.328l-0.607-2.275l-0.047-0.285C48.392,46.5,48.54,46.232,48.769,46.072z M24.782,13.854c-8.959,0-16.222,6.053-16.222,13.519c0,4.072,2.185,7.74,5.604,10.219c0.274,0.193,0.455,0.514,0.455,0.879 l-0.057,0.344l-0.731,2.729l-0.088,0.395c0,0.299,0.243,0.541,0.541,0.541l0.313-0.102l3.551-2.051 c0.266-0.152,0.548-0.248,0.86-0.248l0.477,0.07c1.657,0.479,3.445,0.742,5.296,0.742l0.891-0.021 c-0.352-1.055-0.544-2.166-0.544-3.311c0-6.811,6.623-12.33,14.794-12.33l0.881,0.022C39.581,18.794,32.874,13.854,24.782,13.854z M35.415,35.754c-0.994,0-1.801-0.807-1.801-1.803s0.807-1.803,1.801-1.803c0.998,0,1.803,0.807,1.803,1.803 S36.413,35.754,35.415,35.754z M44.431,35.754c-0.998,0-1.805-0.807-1.805-1.803s0.807-1.803,1.805-1.803 c0.992,0,1.799,0.807,1.799,1.803S45.423,35.754,44.431,35.754z M19.375,25.21c-1.195,0-2.162-0.969-2.162-2.162 c0-1.194,0.967-2.163,2.162-2.163c1.194,0,2.163,0.969,2.163,2.163C21.538,24.241,20.569,25.21,19.375,25.21z M30.188,25.21 c-1.196,0-2.162-0.969-2.162-2.162c0-1.194,0.966-2.163,2.162-2.163c1.195,0,2.162,0.969,2.162,2.163 C32.351,24.241,31.384,25.21,30.188,25.21z",
          mask: "M65.6,65.6H-1.6V-1.6H65.6V65.6z M49.738,46.043c2.846-2.061,4.662-5.107,4.662-8.498 c0-6.207-6.043-11.244-13.492-11.244c-7.453,0-13.494,5.037-13.494,11.244c0,6.213,6.041,11.246,13.494,11.246 c1.537,0,3.025-0.221,4.402-0.615l0.395-0.059c0.262,0,0.498,0.078,0.717,0.207l2.955,1.707l0.26,0.082 c0.252,0,0.451-0.203,0.451-0.449l-0.074-0.328l-0.605-2.271l-0.047-0.287C49.361,46.477,49.508,46.211,49.738,46.043L49.738,46.043 z M25.793,13.887C16.85,13.887,9.6,19.93,9.6,27.383c0,4.066,2.182,7.723,5.596,10.197c0.275,0.195,0.453,0.518,0.453,0.879 l-0.055,0.344l-0.732,2.725l-0.086,0.393c0,0.301,0.24,0.541,0.539,0.541l0.311-0.1l3.545-2.049c0.27-0.152,0.551-0.248,0.861-0.248 l0.475,0.068c1.654,0.479,3.439,0.742,5.287,0.742l0.891-0.021c-0.354-1.053-0.543-2.16-0.543-3.309 c0-6.793,6.611-12.305,14.768-12.305l0.879,0.021C40.564,18.818,33.871,13.887,25.793,13.887z M36.408,35.746 c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799s1.799,0.807,1.799,1.799 C38.207,34.941,37.404,35.746,36.408,35.746z M45.404,35.746c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799 s1.799,0.807,1.799,1.799C47.203,34.941,46.4,35.746,45.404,35.746z M20.395,25.221c-1.189,0-2.158-0.965-2.158-2.158 s0.969-2.158,2.158-2.158c1.193,0,2.162,0.965,2.162,2.158S21.588,25.221,20.395,25.221z M31.191,25.221 c-1.193,0-2.158-0.965-2.158-2.158s0.965-2.158,2.158-2.158s2.158,0.965,2.158,2.158S32.385,25.221,31.191,25.221z",
          color: "#00c80f",
        },
        whatsapp: {
          icon: "M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",
          mask: "M0,0v64h64V0H0z M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688",
          color: "#25D366",
        },
        yelp: {
          icon: "M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z",
          mask: "M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z",
          color: "#B90C04",
        },
        youtube: {
          icon: "M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z",
          mask: "M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z",
          color: "#ff3333",
        },
      };
    },
    8858: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r,
        n = (r = i(6006)) && r.__esModule ? r : { default: r },
        s = i(6878);
      function o() {
        return (o =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      e.default = function (t) {
        t.networkKey;
        var e = (function (t, e) {
          if (null == t) return {};
          var i,
            r,
            n = (function (t, e) {
              if (null == t) return {};
              var i,
                r,
                n = {},
                s = Object.keys(t);
              for (r = 0; r < s.length; r++)
                (i = s[r]), e.indexOf(i) >= 0 || (n[i] = t[i]);
              return n;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            for (r = 0; r < s.length; r++)
              (i = s[r]),
                !(e.indexOf(i) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, i) &&
                  (n[i] = t[i]);
          }
          return n;
        })(t, ["networkKey"]);
        return n.default.createElement(
          "g",
          o({}, e, {
            className: "social-svg-background",
            style: s.socialSvgContent,
          }),
          n.default.createElement("circle", { cx: "32", cy: "32", r: "31" })
        );
      };
    },
    1601: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = a(i(9497)),
        n = a(i(6006)),
        s = i(7321),
        o = i(6878);
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l() {
        return (l =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t) {
        var e = t.fgColor,
          i = t.networkKey,
          r = (function (t, e) {
            if (null == t) return {};
            var i,
              r,
              n = (function (t, e) {
                if (null == t) return {};
                var i,
                  r,
                  n = {},
                  s = Object.keys(t);
                for (r = 0; r < s.length; r++)
                  (i = s[r]), e.indexOf(i) >= 0 || (n[i] = t[i]);
                return n;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(t);
              for (r = 0; r < s.length; r++)
                (i = s[r]),
                  !(e.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, i) &&
                    (n[i] = t[i]);
            }
            return n;
          })(t, ["fgColor", "networkKey"]);
        return n.default.createElement(
          "g",
          l({}, r, {
            className: "social-svg-icon",
            style: (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {},
                  r = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(i).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(i, t).enumerable;
                    })
                  )),
                  r.forEach(function (e) {
                    var r, n;
                    (r = t),
                      (n = i[e]),
                      e in r
                        ? Object.defineProperty(r, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[e] = n);
                  });
              }
              return t;
            })({}, o.socialSvgContent, { fill: e || "transparent" }),
          }),
          n.default.createElement("path", { d: (0, s.iconFor)(i) })
        );
      }
      (c.propTypes = {
        fgColor: r.default.string,
        networkKey: r.default.string.isRequired,
      }),
        (e.default = c);
    },
    8043: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = a(i(9497)),
        n = a(i(6006)),
        s = i(7321),
        o = i(6878);
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l() {
        return (l =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t) {
        var e,
          i,
          r,
          a = t.bgColor,
          c = t.networkKey,
          u = (function (t, e) {
            if (null == t) return {};
            var i,
              r,
              n = (function (t, e) {
                if (null == t) return {};
                var i,
                  r,
                  n = {},
                  s = Object.keys(t);
                for (r = 0; r < s.length; r++)
                  (i = s[r]), e.indexOf(i) >= 0 || (n[i] = t[i]);
                return n;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(t);
              for (r = 0; r < s.length; r++)
                (i = s[r]),
                  !(e.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, i) &&
                    (n[i] = t[i]);
            }
            return n;
          })(t, ["bgColor", "networkKey"]);
        return n.default.createElement(
          "g",
          l({}, u, {
            className: "social-svg-mask",
            style:
              ((i = (e = { bgColor: a, networkKey: c }).bgColor),
              (r = e.networkKey),
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(i);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(i).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable;
                      })
                    )),
                    r.forEach(function (e) {
                      var r, n;
                      (r = t),
                        (n = i[e]),
                        e in r
                          ? Object.defineProperty(r, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (r[e] = n);
                    });
                }
                return t;
              })({}, o.socialSvgMask, { fill: i || (0, s.colorFor)(r) })),
          }),
          n.default.createElement("path", { d: (0, s.maskFor)(c) })
        );
      }
      (c.propTypes = {
        bgColor: r.default.string,
        networkKey: r.default.string.isRequired,
      }),
        (e.default = c);
    },
    7321: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.keyTo = function (t, e) {
          var i = e.icon,
            r = e.mask,
            s = e.color;
          n.default[t] = { icon: i, mask: r, color: s };
        }),
        (e.iconFor = function (t) {
          return n.default[t] ? n.default[t].icon : null;
        }),
        (e.maskFor = function (t) {
          return n.default[t] ? n.default[t].mask : null;
        }),
        (e.colorFor = function (t) {
          return n.default[t] ? n.default[t].color : null;
        }),
        (e.keyFor = l),
        (e.keysFor = function (t) {
          return t && Array.isArray(t) && 0 !== t.length ? t.map(l) : [];
        }),
        (e.KEYS = e.DEFAULT_KEY = void 0);
      var r,
        n = (r = i(4171)) && r.__esModule ? r : { default: r },
        s = "sharethis";
      e.DEFAULT_KEY = s;
      var o = Object.keys(n.default);
      e.KEYS = o;
      var a = RegExp(
        "(?:https?:\\/\\/(?:[a-z0-9-]*.)?)?(" +
          o
            .sort(function (t, e) {
              return e.length - t.length;
            })
            .join("|") +
          ").*"
      );
      function l(t) {
        if (!t) return s;
        var e = t.replace(a, "$1");
        return e === t ? s : e;
      }
    },
    9607: function (t, e, i) {
      "use strict";
      e.QZ = void 0;
      var r,
        n = (r = i(4989)) && r.__esModule ? r : { default: r },
        s = (i(7321), n.default);
      e.QZ = s;
    },
    4989: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = u(i(9497)),
        n = u(i(6006)),
        s = u(i(8858)),
        o = u(i(1601)),
        a = u(i(8043)),
        l = i(7321),
        c = i(6878);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function h() {
        return (h =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function d(t) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t) {
        var e,
          i = t.url,
          r = t.network,
          u = t.bgColor,
          p = t.fgColor,
          f = t.className,
          m = t.label,
          v = t.children,
          g = t.defaultSVG,
          y = t.style,
          C = (function (t, e) {
            if (null == t) return {};
            var i,
              r,
              n = (function (t, e) {
                if (null == t) return {};
                var i,
                  r,
                  n = {},
                  s = Object.keys(t);
                for (r = 0; r < s.length; r++)
                  (i = s[r]), e.indexOf(i) >= 0 || (n[i] = t[i]);
                return n;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(t);
              for (r = 0; r < s.length; r++)
                (i = s[r]),
                  !(e.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, i) &&
                    (n[i] = t[i]);
            }
            return n;
          })(t, [
            "url",
            "network",
            "bgColor",
            "fgColor",
            "className",
            "label",
            "children",
            "defaultSVG",
            "style",
          ]);
        "object" === d(g) && null !== g && (0, l.keyTo)(l.DEFAULT_KEY, g);
        var M = (e = { url: i, network: r }).network || (0, l.keyFor)(e.url);
        return n.default.createElement(
          "a",
          h({}, C, {
            href: i,
            className: "social-icon" + (f ? " " + f : ""),
            style: (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {},
                  r = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(i).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(i, t).enumerable;
                    })
                  )),
                  r.forEach(function (e) {
                    var r, n;
                    (r = t),
                      (n = i[e]),
                      e in r
                        ? Object.defineProperty(r, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (r[e] = n);
                  });
              }
              return t;
            })({}, c.socialIcon, y),
            "aria-label": m || M,
          }),
          n.default.createElement(
            "div",
            { className: "social-container", style: c.socialContainer },
            n.default.createElement(
              "svg",
              {
                className: "social-svg",
                style: c.socialSvg,
                viewBox: "0 0 64 64",
              },
              n.default.createElement(s.default, null),
              n.default.createElement(o.default, { networkKey: M, fgColor: p }),
              n.default.createElement(a.default, { networkKey: M, bgColor: u })
            )
          ),
          v
        );
      }
      (p.propTypes = {
        className: r.default.string,
        bgColor: r.default.string,
        fgColor: r.default.string,
        label: r.default.string,
        network: r.default.string,
        url: r.default.string,
        defaultSVG: r.default.exact({
          icon: r.default.string,
          mask: r.default.string,
          color: r.default.string,
        }),
        style: r.default.PropTypes.object,
        children: r.default.node,
      }),
        (e.default = p);
    },
    6878: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.socialSvgMask =
          e.socialSvgContent =
          e.socialSvg =
          e.socialContainer =
          e.socialIcon =
            void 0),
        (e.socialIcon = {
          display: "inline-block",
          width: "50px",
          height: "50px",
          position: "relative",
          overflow: "hidden",
          verticalAlign: "middle",
        }),
        (e.socialContainer = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }),
        (e.socialSvg = {
          borderRadius: "50%",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          fillRule: "evenodd",
        });
      var i = {
        msTransition: "fill 170ms ease-in-out",
        OTransition: "fill 170ms ease-in-out",
        MozTransition: "fill 170ms ease-in-out",
        WebkitTransition: "fill 170ms ease-in-out",
        transition: "fill 170ms ease-in-out",
        fill: "transparent",
      };
      e.socialSvgContent = i;
      var r = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(i).filter(function (t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              var r, n;
              (r = t),
                (n = i[e]),
                e in r
                  ? Object.defineProperty(r, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[e] = n);
            });
        }
        return t;
      })({}, i, { fill: "#0f0b0b" });
      e.socialSvgMask = r;
    },
    4646: function (t, e, i) {
      "use strict";
      i.d(e, {
        E: function () {
          return nB;
        },
      });
      var r,
        n = i(6006);
      let s = (0, n.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        o = (0, n.createContext)({}),
        a = (0, n.createContext)(null),
        l = "undefined" != typeof document,
        c = l ? n.useLayoutEffect : n.useEffect,
        u = (0, n.createContext)({ strict: !1 });
      function h(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function d(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function p(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let f = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        m = ["initial", ...f];
      function v(t) {
        return p(t.animate) || m.some((e) => d(t[e]));
      }
      function g(t) {
        return !!(v(t) || t.variants);
      }
      function y(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let C = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        M = {};
      for (let t in C) M[t] = { isEnabled: (e) => C[t].some((t) => !!e[t]) };
      let b = (0, n.createContext)({}),
        x = (0, n.createContext)({}),
        z = Symbol.for("motionComponentSymbol"),
        P = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function V(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (P.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let w = {},
        L = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        S = new Set(L);
      function k(t, { layout: e, layoutId: i }) {
        return (
          S.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!w[t] || "opacity" === t))
        );
      }
      let E = (t) => !!(t && t.getVelocity),
        T = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        A = L.length,
        O = (t) => (e) => "string" == typeof e && e.startsWith(t),
        j = O("--"),
        D = O("var(--"),
        R = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        F = (t, e, i) => Math.min(Math.max(i, t), e),
        H = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        _ = { ...H, transform: (t) => F(0, 1, t) },
        B = { ...H, default: 1 },
        I = (t) => Math.round(1e5 * t) / 1e5,
        U = /(-)?([\d]*\.?[\d])+/g,
        N =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        $ =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function Z(t) {
        return "string" == typeof t;
      }
      let W = (t) => ({
          test: (e) => Z(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        Y = W("deg"),
        G = W("%"),
        q = W("px"),
        K = W("vh"),
        X = W("vw"),
        J = {
          ...G,
          parse: (t) => G.parse(t) / 100,
          transform: (t) => G.transform(100 * t),
        },
        Q = { ...H, transform: Math.round },
        tt = {
          borderWidth: q,
          borderTopWidth: q,
          borderRightWidth: q,
          borderBottomWidth: q,
          borderLeftWidth: q,
          borderRadius: q,
          radius: q,
          borderTopLeftRadius: q,
          borderTopRightRadius: q,
          borderBottomRightRadius: q,
          borderBottomLeftRadius: q,
          width: q,
          maxWidth: q,
          height: q,
          maxHeight: q,
          size: q,
          top: q,
          right: q,
          bottom: q,
          left: q,
          padding: q,
          paddingTop: q,
          paddingRight: q,
          paddingBottom: q,
          paddingLeft: q,
          margin: q,
          marginTop: q,
          marginRight: q,
          marginBottom: q,
          marginLeft: q,
          rotate: Y,
          rotateX: Y,
          rotateY: Y,
          rotateZ: Y,
          scale: B,
          scaleX: B,
          scaleY: B,
          scaleZ: B,
          skew: Y,
          skewX: Y,
          skewY: Y,
          distance: q,
          translateX: q,
          translateY: q,
          translateZ: q,
          x: q,
          y: q,
          z: q,
          perspective: q,
          transformPerspective: q,
          opacity: _,
          originX: J,
          originY: J,
          originZ: q,
          zIndex: Q,
          fillOpacity: _,
          strokeOpacity: _,
          numOctaves: Q,
        };
      function te(t, e, i, r) {
        let { style: n, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          c = !1,
          u = !0;
        for (let t in e) {
          let i = e[t];
          if (j(t)) {
            s[t] = i;
            continue;
          }
          let r = tt[t],
            h = R(i, r);
          if (S.has(t)) {
            if (((l = !0), (o[t] = h), !u)) continue;
            i !== (r.default || 0) && (u = !1);
          } else t.startsWith("origin") ? ((c = !0), (a[t] = h)) : (n[t] = h);
        }
        if (
          (!e.transform &&
            (l || r
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  r,
                  n
                ) {
                  let s = "";
                  for (let e = 0; e < A; e++) {
                    let i = L[e];
                    if (void 0 !== t[i]) {
                      let e = T[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    n ? (s = n(t, r ? "" : s)) : i && r && (s = "none"),
                    s
                  );
                })(t.transform, i, u, r))
              : n.transform && (n.transform = "none")),
          c)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let ti = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tr(t, e, i) {
        for (let r in e) E(e[r]) || k(r, i) || (t[r] = e[r]);
      }
      function tn(t, e, i) {
        let r = {},
          s = (function (t, e, i) {
            let r = t.style || {},
              s = {};
            return (
              tr(s, r, t),
              Object.assign(
                s,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, n.useMemo)(() => {
                    let r = ti();
                    return (
                      te(r, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, r.vars, r.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              t.transformValues ? t.transformValues(s) : s
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (r.tabIndex = 0),
          (r.style = s),
          r
        );
      }
      let ts = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function to(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          ts.has(t)
        );
      }
      let ta = (t) => !to(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (ta = (t) => (t.startsWith("on") ? !to(t) : r(t)));
      } catch (t) {}
      function tl(t, e, i) {
        return "string" == typeof t ? t : q.transform(e + i * t);
      }
      let tc = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tu = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function th(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...c
        },
        u,
        h,
        d
      ) {
        if ((te(t, c, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: f, dimensions: m } = t;
        p.transform && (m && (f.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== n || void 0 !== s || f.transform) &&
            (f.transformOrigin = (function (t, e, i) {
              let r = tl(e, t.x, t.width),
                n = tl(i, t.y, t.height);
              return `${r} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== r && (p.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? tc : tu;
              t[s.offset] = q.transform(-r);
              let o = q.transform(e),
                a = q.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let td = () => ({ ...ti(), attrs: {} }),
        tp = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tf(t, e, i, r) {
        let s = (0, n.useMemo)(() => {
          let i = td();
          return (
            th(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              tp(r),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          tr(e, t.style, t), (s.style = { ...e, ...s.style });
        }
        return s;
      }
      let tm = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tv(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let tg = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function ty(t, e, i, r) {
        for (let i in (tv(t, e, void 0, r), e.attrs))
          t.setAttribute(tg.has(i) ? i : tm(i), e.attrs[i]);
      }
      function tC(t, e) {
        let { style: i } = t,
          r = {};
        for (let n in i)
          (E(i[n]) || (e.style && E(e.style[n])) || k(n, t)) && (r[n] = i[n]);
        return r;
      }
      function tM(t, e) {
        let i = tC(t, e);
        for (let r in t)
          if (E(t[r]) || E(e[r])) {
            let e =
              -1 !== L.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r;
            i[e] = t[r];
          }
        return i;
      }
      function tb(t, e, i, r = {}, n = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          e
        );
      }
      let tx = (t) => Array.isArray(t),
        tz = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tP = (t) => (tx(t) ? t[t.length - 1] || 0 : t);
      function tV(t) {
        let e = E(t) ? t.get() : t;
        return tz(e) ? e.toValue() : e;
      }
      let tw = (t) => (e, i) => {
          let r = (0, n.useContext)(o),
            s = (0, n.useContext)(a),
            l = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                r,
                n,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, i, r) {
                    let n = {},
                      s = r(t, {});
                    for (let t in s) n[t] = tV(s[t]);
                    let { initial: o, animate: a } = t,
                      l = v(t),
                      c = g(t);
                    e &&
                      c &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let u = !!i && !1 === i.initial;
                    u = u || !1 === o;
                    let h = u ? a : o;
                    if (h && "boolean" != typeof h && !p(h)) {
                      let e = Array.isArray(h) ? h : [h];
                      e.forEach((e) => {
                        let i = tb(t, e);
                        if (!i) return;
                        let { transitionEnd: r, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = u ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (n[t] = e);
                        }
                        for (let t in r) n[t] = r[t];
                      });
                    }
                    return n;
                  })(r, n, s, t),
                  renderState: e(),
                };
                return i && (o.mount = (t) => i(r, t, o)), o;
              })(t, e, r, s);
          return i
            ? l()
            : (function (t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(l);
        },
        tL = {
          useVisualState: tw({
            scrapeMotionValuesFromProps: tM,
            createRenderState: td,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              th(
                i,
                r,
                { enableHardwareAcceleration: !1 },
                tp(e.tagName),
                t.transformTemplate
              ),
                ty(e, i);
            },
          }),
        },
        tS = {
          useVisualState: tw({
            scrapeMotionValuesFromProps: tC,
            createRenderState: ti,
          }),
        };
      function tk(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      let tE = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tT(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tA = (t) => (e) => tE(e) && t(e, tT(e));
      function tO(t, e, i, r) {
        return tk(t, e, tA(i), r);
      }
      let tj = (t, e) => (i) => e(t(i)),
        tD = (...t) => t.reduce(tj);
      function tR(t) {
        let e = null;
        return () => {
          let i = () => {
            e = null;
          };
          return null === e && ((e = t), i);
        };
      }
      let tF = tR("dragHorizontal"),
        tH = tR("dragVertical");
      function t_(t) {
        let e = !1;
        if ("y" === t) e = tH();
        else if ("x" === t) e = tF();
        else {
          let t = tF(),
            i = tH();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tB() {
        let t = t_(!0);
        return !t || (t(), !1);
      }
      class tI {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      let tU = { delta: 0, timestamp: 0, isProcessing: !1 },
        tN = !0,
        t$ = !1,
        tZ = ["read", "update", "preRender", "render", "postRender"],
        tW = tZ.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                i = [],
                r = 0,
                n = !1,
                s = !1,
                o = new WeakSet(),
                a = {
                  schedule: (t, s = !1, a = !1) => {
                    let l = a && n,
                      c = l ? e : i;
                    return (
                      s && o.add(t),
                      -1 === c.indexOf(t) &&
                        (c.push(t), l && n && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = i.indexOf(t);
                    -1 !== e && i.splice(e, 1), o.delete(t);
                  },
                  process: (l) => {
                    if (n) {
                      s = !0;
                      return;
                    }
                    if (
                      ((n = !0),
                      ([e, i] = [i, e]),
                      (i.length = 0),
                      (r = e.length))
                    )
                      for (let i = 0; i < r; i++) {
                        let r = e[i];
                        r(l), o.has(r) && (a.schedule(r), t());
                      }
                    (n = !1), s && ((s = !1), a.process(l));
                  },
                };
              return a;
            })(() => (t$ = !0))),
            t
          ),
          {}
        ),
        tY = (t) => tW[t].process(tU),
        tG = (t) => {
          (t$ = !1),
            (tU.delta = tN
              ? 1e3 / 60
              : Math.max(Math.min(t - tU.timestamp, 40), 1)),
            (tU.timestamp = t),
            (tU.isProcessing = !0),
            tZ.forEach(tY),
            (tU.isProcessing = !1),
            t$ && ((tN = !1), requestAnimationFrame(tG));
        },
        tq = () => {
          (t$ = !0), (tN = !0), tU.isProcessing || requestAnimationFrame(tG);
        },
        tK = tZ.reduce((t, e) => {
          let i = tW[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (t$ || tq(), i.schedule(t, e, r))), t
          );
        }, {});
      function tX(t) {
        tZ.forEach((e) => tW[e].cancel(t));
      }
      function tJ(t, e) {
        let i = "onHover" + (e ? "Start" : "End"),
          r = (r, n) => {
            if ("touch" === r.type || tB()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && tK.update(() => s[i](r, n));
          };
        return tO(t.current, "pointer" + (e ? "enter" : "leave"), r, {
          passive: !t.getProps()[i],
        });
      }
      let tQ = (t, e) => !!e && (t === e || tQ(t, e.parentElement)),
        t0 = (t) => t;
      function t1(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tT(i));
      }
      let t2 = new WeakMap(),
        t3 = new WeakMap(),
        t4 = (t) => {
          let e = t2.get(t.target);
          e && e(t);
        },
        t6 = (t) => {
          t.forEach(t4);
        },
        t5 = { some: 0, all: 1 };
      function t9(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function t7(t, e, i) {
        let r = t.getProps();
        return tb(
          r,
          e,
          void 0 !== i ? i : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let t8 = "data-" + tm("framerAppearId"),
        et = (t) => 1e3 * t,
        ee = (t) => t / 1e3,
        ei = { current: !1 },
        er = (t) => Array.isArray(t) && "number" == typeof t[0],
        en = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        es = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: en([0, 0.65, 0.55, 1]),
          circOut: en([0.55, 0, 1, 0.45]),
          backIn: en([0.31, 0.01, 0.66, -0.59]),
          backOut: en([0.33, 1.53, 0.69, 0.99]),
        },
        eo = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        ea = {},
        el = {};
      for (let t in eo)
        el[t] = () => (void 0 === ea[t] && (ea[t] = eo[t]()), ea[t]);
      let ec = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function eu(t, e, i, r) {
        if (t === e && i === r) return t0;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do
              (s = ec((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ec(n(t), e, r));
      }
      let eh = eu(0.42, 0, 1, 1),
        ed = eu(0, 0, 0.58, 1),
        ep = eu(0.42, 0, 0.58, 1),
        ef = (t) => Array.isArray(t) && "number" != typeof t[0],
        em = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        ev = (t) => (e) => 1 - t(1 - e),
        eg = (t) => 1 - Math.sin(Math.acos(t)),
        ey = ev(eg),
        eC = em(ey),
        eM = eu(0.33, 1.53, 0.69, 0.99),
        eb = ev(eM),
        ex = em(eb),
        ez = (t) =>
          (t *= 2) < 1 ? 0.5 * eb(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        eP = {
          linear: t0,
          easeIn: eh,
          easeInOut: ep,
          easeOut: ed,
          circIn: eg,
          circInOut: eC,
          circOut: ey,
          backIn: eb,
          backInOut: ex,
          backOut: eM,
          anticipate: ez,
        },
        eV = (t) => {
          if (Array.isArray(t)) {
            t0(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return eu(e, i, r, n);
          }
          return "string" == typeof t
            ? (t0(void 0 !== eP[t], `Invalid easing type '${t}'`), eP[t])
            : t;
        },
        ew = (t, e) => (i) =>
          !!(
            (Z(i) && $.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eL = (t, e, i) => (r) => {
          if (!Z(r)) return r;
          let [n, s, o, a] = r.match(U);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eS = (t) => F(0, 255, t),
        ek = { ...H, transform: (t) => Math.round(eS(t)) },
        eE = {
          test: ew("rgb", "red"),
          parse: eL("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            ek.transform(t) +
            ", " +
            ek.transform(e) +
            ", " +
            ek.transform(i) +
            ", " +
            I(_.transform(r)) +
            ")",
        },
        eT = {
          test: ew("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: eE.transform,
        },
        eA = {
          test: ew("hsl", "hue"),
          parse: eL("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            G.transform(I(e)) +
            ", " +
            G.transform(I(i)) +
            ", " +
            I(_.transform(r)) +
            ")",
        },
        eO = {
          test: (t) => eE.test(t) || eT.test(t) || eA.test(t),
          parse: (t) =>
            eE.test(t) ? eE.parse(t) : eA.test(t) ? eA.parse(t) : eT.parse(t),
          transform: (t) =>
            Z(t)
              ? t
              : t.hasOwnProperty("red")
              ? eE.transform(t)
              : eA.transform(t),
        },
        ej = (t, e, i) => -i * t + i * e + t;
      function eD(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let eR = (t, e, i) => {
          let r = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - r) + r));
        },
        eF = [eT, eE, eA],
        eH = (t) => eF.find((e) => e.test(t));
      function e_(t) {
        let e = eH(t);
        t0(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eA &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                (n = eD(a, r, t + 1 / 3)),
                  (s = eD(a, r, t)),
                  (o = eD(a, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let eB = (t, e) => {
          let i = e_(t),
            r = e_(e),
            n = { ...i };
          return (t) => (
            (n.red = eR(i.red, r.red, t)),
            (n.green = eR(i.green, r.green, t)),
            (n.blue = eR(i.blue, r.blue, t)),
            (n.alpha = ej(i.alpha, r.alpha, t)),
            eE.transform(n)
          );
        },
        eI = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: t0,
        },
        eU = { regex: N, countKey: "Colors", token: "${c}", parse: eO.parse },
        eN = { regex: U, countKey: "Numbers", token: "${n}", parse: H.parse };
      function e$(t, { regex: e, countKey: i, token: r, parse: n }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, r)),
          t.values.push(...s.map(n)));
      }
      function eZ(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && e$(i, eI), e$(i, eU), e$(i, eN), i;
      }
      function eW(t) {
        return eZ(t).values;
      }
      function eY(t) {
        let { values: e, numColors: i, numVars: r, tokenised: n } = eZ(t),
          s = e.length;
        return (t) => {
          let e = n;
          for (let n = 0; n < s; n++)
            e =
              n < r
                ? e.replace(eI.token, t[n])
                : n < r + i
                ? e.replace(eU.token, eO.transform(t[n]))
                : e.replace(eN.token, I(t[n]));
          return e;
        };
      }
      let eG = (t) => ("number" == typeof t ? 0 : t),
        eq = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              Z(t) &&
              ((null === (e = t.match(U)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(N)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eW,
          createTransformer: eY,
          getAnimatableNone: function (t) {
            let e = eW(t),
              i = eY(t);
            return i(e.map(eG));
          },
        },
        eK = (t, e) => (i) => `${i > 0 ? e : t}`;
      function eX(t, e) {
        return "number" == typeof t
          ? (i) => ej(t, e, i)
          : eO.test(t)
          ? eB(t, e)
          : t.startsWith("var(")
          ? eK(t, e)
          : e0(t, e);
      }
      let eJ = (t, e) => {
          let i = [...t],
            r = i.length,
            n = t.map((t, i) => eX(t, e[i]));
          return (t) => {
            for (let e = 0; e < r; e++) i[e] = n[e](t);
            return i;
          };
        },
        eQ = (t, e) => {
          let i = { ...t, ...e },
            r = {};
          for (let n in i)
            void 0 !== t[n] && void 0 !== e[n] && (r[n] = eX(t[n], e[n]));
          return (t) => {
            for (let e in r) i[e] = r[e](t);
            return i;
          };
        },
        e0 = (t, e) => {
          let i = eq.createTransformer(e),
            r = eZ(t),
            n = eZ(e),
            s =
              r.numVars === n.numVars &&
              r.numColors === n.numColors &&
              r.numNumbers >= n.numNumbers;
          return s
            ? tD(eJ(r.values, n.values), i)
            : (t0(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              eK(t, e));
        },
        e1 = (t, e, i) => {
          let r = e - t;
          return 0 === r ? 1 : (i - t) / r;
        },
        e2 = (t, e) => (i) => ej(t, e, i);
      function e3(t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
        let s = t.length;
        if (
          (t0(
            s === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return () => e[0];
        t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let o = (function (t, e, i) {
            let r = [],
              n =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return eO.test(t) ? eB : e0;
                  else if (Array.isArray(t)) return eJ;
                  else if ("object" == typeof t) return eQ;
                  return e2;
                })(t[0]),
              s = t.length - 1;
            for (let i = 0; i < s; i++) {
              let s = n(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || t0 : e;
                s = tD(t, s);
              }
              r.push(s);
            }
            return r;
          })(e, r, n),
          a = o.length,
          l = (e) => {
            let i = 0;
            if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let r = e1(t[i], t[i + 1], e);
            return o[i](r);
          };
        return i ? (e) => l(F(t[0], t[s - 1], e)) : l;
      }
      function e4({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = ef(r) ? r.map(eV) : eV(r),
          s = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let n = e1(0, e, r);
                        t.push(ej(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = e3(o, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || ep).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      function e6(t, e, i) {
        var r, n;
        let s = Math.max(e - 5, 0);
        return (r = i - t(s)), (n = e - s) ? r * (1e3 / n) : 0;
      }
      function e5(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let e9 = ["duration", "bounce"],
        e7 = ["stiffness", "damping", "mass"];
      function e8(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function it({ keyframes: t, restDelta: e, restSpeed: i, ...r }) {
        let n;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: c,
            mass: u,
            velocity: h,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!e8(t, e7) && e8(t, e9)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let n, s;
                t0(t <= et(10), "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                (o = F(0.05, 1, o)),
                  (t = F(0.01, 10, ee(t))),
                  o < 1
                    ? ((n = (e) => {
                        let r = e * o,
                          n = r * t,
                          s = e5(e, o);
                        return 0.001 - ((r - i) / s) * Math.exp(-n);
                      }),
                      (s = (e) => {
                        let r = e * o,
                          s = r * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = e5(Math.pow(e, 2), o),
                          c = -n(e) + 0.001 > 0 ? -1 : 1;
                        return (c * ((s * i + i - a) * Math.exp(-s))) / l;
                      }))
                    : ((n = (e) => {
                        let r = Math.exp(-e * t),
                          n = (e - i) * t + 1;
                        return -0.001 + r * n;
                      }),
                      (s = (e) => {
                        let r = Math.exp(-e * t),
                          n = (i - e) * (t * t);
                        return r * n;
                      }));
                let a = 5 / t,
                  l = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(n, s, a);
                if (((t = et(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(r),
          f = h ? -ee(h) : 0,
          m = c / (2 * Math.sqrt(l * u)),
          v = o - s,
          g = ee(Math.sqrt(l / u)),
          y = 5 > Math.abs(v);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), m < 1)) {
          let t = e5(g, m);
          n = (e) =>
            o -
            Math.exp(-m * g * e) *
              (((f + m * g * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === m)
          n = (t) => o - Math.exp(-g * t) * (v + (f + g * v) * t);
        else {
          let t = g * Math.sqrt(m * m - 1);
          n = (e) => {
            let i = Math.min(t * e, 300);
            return (
              o -
              (Math.exp(-m * g * e) *
                ((f + m * g * v) * Math.sinh(i) + t * v * Math.cosh(i))) /
                t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let r = n(t);
            if (p) a.done = t >= d;
            else {
              let s = f;
              0 !== t && (s = m < 1 ? e6(n, t, r) : 0);
              let l = Math.abs(s) <= i,
                c = Math.abs(o - r) <= e;
              a.done = l && c;
            }
            return (a.value = a.done ? o : r), a;
          },
        };
      }
      function ie({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: c = 0.5,
        restSpeed: u,
      }) {
        let h, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          C = void 0 === o ? y : o(y);
        C !== y && (g = C - p);
        let M = (t) => -g * Math.exp(-t / r),
          b = (t) => C + M(t),
          x = (t) => {
            let e = M(t),
              i = b(t);
            (f.done = Math.abs(e) <= c), (f.value = f.done ? C : i);
          },
          z = (t) => {
            m(f.value) &&
              ((h = t),
              (d = it({
                keyframes: [f.value, v(f.value)],
                velocity: e6(b, t, f.value),
                damping: n,
                stiffness: s,
                restDelta: c,
                restSpeed: u,
              })));
          };
        return (
          z(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== h || ((e = !0), x(t), z(t)),
              void 0 !== h && t > h)
                ? d.next(t - h)
                : (e || x(t), f);
            },
          }
        );
      }
      let ii = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => tK.update(e, !0),
          stop: () => tX(e),
          now: () => (tU.isProcessing ? tU.timestamp : performance.now()),
        };
      };
      function ir(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let is = { decay: ie, inertia: ie, tween: e4, keyframes: e4, spring: it };
      function io({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = ii,
        keyframes: r,
        type: n = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: c,
        onComplete: u,
        onUpdate: h,
        ...d
      }) {
        let p,
          f,
          m,
          v,
          g,
          y = 1,
          C = !1,
          M = () => {
            p && p(),
              (f = new Promise((t) => {
                p = t;
              }));
          };
        M();
        let b = is[n] || e4;
        b !== e4 &&
          "number" != typeof r[0] &&
          ((v = e3([0, 100], r, { clamp: !1 })), (r = [0, 100]));
        let x = b({ ...d, keyframes: r });
        "mirror" === a &&
          (g = b({
            ...d,
            keyframes: [...r].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let z = "idle",
          P = null,
          V = null,
          w = null;
        null === x.calculatedDuration && s && (x.calculatedDuration = ir(x));
        let { calculatedDuration: L } = x,
          S = 1 / 0,
          k = 1 / 0;
        null !== L && (k = (S = L + o) * (s + 1) - o);
        let E = 0,
          T = (t) => {
            if (null === V) return;
            y > 0 && (V = Math.min(V, t)), (E = null !== P ? P : (t - V) * y);
            let i = E - e,
              n = i < 0;
            (E = Math.max(i, 0)), "finished" === z && null === P && (E = k);
            let l = E,
              c = x;
            if (s) {
              let t = E / S,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, s + 1));
              let r = !!(e % 2);
              r &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / S))
                  : "mirror" === a && (c = g));
              let n = F(0, 1, i);
              E > k && (n = "reverse" === a && r ? 1 : 0), (l = n * S);
            }
            let u = n ? { done: !1, value: r[0] } : c.next(l);
            v && (u.value = v(u.value));
            let { done: d } = u;
            n || null === L || (d = E >= k);
            let p =
              null === P &&
              ("finished" === z || ("running" === z && d) || (y < 0 && E <= 0));
            return h && h(u.value), p && j(), u;
          },
          A = () => {
            m && m.stop(), (m = void 0);
          },
          O = () => {
            (z = "idle"), A(), M(), (V = w = null);
          },
          j = () => {
            (z = "finished"), u && u(), A(), M();
          },
          D = () => {
            if (C) return;
            m || (m = i(T));
            let t = m.now();
            l && l(),
              null !== P ? (V = t - P) : (V && "finished" !== z) || (V = t),
              (w = V),
              (P = null),
              (z = "running"),
              m.start();
          };
        t && D();
        let R = {
          then: (t, e) => f.then(t, e),
          get time() {
            return ee(E);
          },
          set time(newTime) {
            (E = newTime = et(newTime)),
              null === P && m && 0 !== y
                ? (V = m.now() - newTime / y)
                : (P = newTime);
          },
          get duration() {
            let t =
              null === x.calculatedDuration ? ir(x) : x.calculatedDuration;
            return ee(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (R.time = ee(E));
          },
          get state() {
            return z;
          },
          play: D,
          pause: () => {
            (z = "paused"), (P = E);
          },
          stop: () => {
            (C = !0), "idle" !== z && ((z = "idle"), c && c(), O());
          },
          cancel: () => {
            null !== w && T(w), O();
          },
          complete: () => {
            z = "finished";
          },
          sample: (t) => ((V = 0), T(t)),
        };
        return R;
      }
      let ia = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        il = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && es[e]) ||
              er(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        ic = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        iu = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ih = { type: "keyframes", duration: 0.8 },
        id = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ip = (t, { keyframes: e }) =>
          e.length > 2
            ? ih
            : S.has(t)
            ? t.startsWith("scale")
              ? iu(e[1])
              : ic
            : id,
        im = (t, e) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (eq.test(e) || "0" === e) &&
              !e.startsWith("url("))
          ),
        iv = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ig(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(U) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = iv.has(e) ? 1 : 0;
        return r !== i && (s *= 100), e + "(" + s + n + ")";
      }
      let iy = /([a-z-]*)\(.*?\)/g,
        iC = {
          ...eq,
          getAnimatableNone: (t) => {
            let e = t.match(iy);
            return e ? e.map(ig).join(" ") : t;
          },
        },
        iM = {
          ...tt,
          color: eO,
          backgroundColor: eO,
          outlineColor: eO,
          fill: eO,
          stroke: eO,
          borderColor: eO,
          borderTopColor: eO,
          borderRightColor: eO,
          borderBottomColor: eO,
          borderLeftColor: eO,
          filter: iC,
          WebkitFilter: iC,
        },
        ib = (t) => iM[t];
      function ix(t, e) {
        let i = ib(t);
        return (
          i !== iC && (i = eq),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let iz = (t) => /^0[^.\s]+$/.test(t);
      function iP(t, e) {
        return t[e] || t.default || t;
      }
      let iV =
        (t, e, i, r = {}) =>
        (n) => {
          let s = iP(r, t) || {},
            o = s.delay || r.delay || 0,
            { elapsed: a = 0 } = r;
          a -= et(o);
          let l = (function (t, e, i, r) {
              let n, s;
              let o = im(e, i);
              n = Array.isArray(i) ? [...i] : [null, i];
              let a = void 0 !== r.from ? r.from : t.get(),
                l = [];
              for (let t = 0; t < n.length; t++) {
                var c;
                (null === n[t] && (n[t] = 0 === t ? a : n[t - 1]),
                "number" == typeof (c = n[t])
                  ? 0 === c
                  : null !== c
                  ? "none" === c || "0" === c || iz(c)
                  : void 0)
                  ? l.push(t)
                  : "string" == typeof n[t] && (s = n[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) {
                  let i = l[t];
                  n[i] = ix(e, s);
                }
              return n;
            })(e, t, i, s),
            c = l[0],
            u = l[l.length - 1],
            h = im(t, c),
            d = im(t, u);
          t0(
            h === d,
            `You are trying to animate ${t} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`
          );
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              n(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: c,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(s) && (p = { ...p, ...ip(t, p) }),
            p.duration && (p.duration = et(p.duration)),
            p.repeatDelay && (p.repeatDelay = et(p.repeatDelay)),
            !h || !d || ei.current || !1 === s.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: i,
              onComplete: r,
            }) {
              let n = () => (
                i && i(t[t.length - 1]),
                r && r(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: t0,
                  pause: t0,
                  stop: t0,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: t0,
                  complete: t0,
                }
              );
              return e
                ? io({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: n,
                  })
                : n();
            })(p);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let i = (function (t, e, { onUpdate: i, onComplete: r, ...n }) {
              let s, o;
              let a =
                el.waapi() &&
                ia.has(e) &&
                !n.repeatDelay &&
                "mirror" !== n.repeatType &&
                0 !== n.damping &&
                "inertia" !== n.type;
              if (!a) return !1;
              let l = !1,
                c = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              c();
              let { keyframes: u, duration: h = 300, ease: d, times: p } = n;
              if (il(e, n)) {
                let t = io({ ...n, repeat: 0, delay: 0 }),
                  e = { done: !1, value: u[0] },
                  i = [],
                  r = 0;
                for (; !e.done && r < 2e4; )
                  i.push((e = t.sample(r)).value), (r += 10);
                (p = void 0), (u = i), (h = r - 10), (d = "linear");
              }
              let f = (function (
                  t,
                  e,
                  i,
                  {
                    delay: r = 0,
                    duration: n,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let c = { [e]: i };
                  l && (c.offset = l);
                  let u = (function t(e) {
                    if (e)
                      return er(e)
                        ? en(e)
                        : Array.isArray(e)
                        ? e.map(t)
                        : es[e];
                  })(a);
                  return (
                    Array.isArray(u) && (c.easing = u),
                    t.animate(c, {
                      delay: r,
                      duration: n,
                      easing: Array.isArray(u) ? "linear" : u,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, u, {
                  ...n,
                  duration: h,
                  ease: d,
                  times: p,
                }),
                m = () => f.cancel(),
                v = () => {
                  tK.update(m), s(), c();
                };
              return (
                (f.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: i = "loop" }) {
                      let r =
                        e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                      return t[r];
                    })(u, n)
                  ),
                    r && r(),
                    v();
                }),
                {
                  then: (t, e) => o.then(t, e),
                  get time() {
                    return ee(f.currentTime || 0);
                  },
                  set time(newTime) {
                    f.currentTime = et(newTime);
                  },
                  get speed() {
                    return f.playbackRate;
                  },
                  set speed(newSpeed) {
                    f.playbackRate = newSpeed;
                  },
                  get duration() {
                    return ee(h);
                  },
                  play: () => {
                    l || (f.play(), tX(m));
                  },
                  pause: () => f.pause(),
                  stop: () => {
                    if (((l = !0), "idle" === f.playState)) return;
                    let { currentTime: e } = f;
                    if (e) {
                      let i = io({ ...n, autoplay: !1 });
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    v();
                  },
                  complete: () => f.finish(),
                  cancel: v,
                }
              );
            })(e, t, p);
            if (i) return i;
          }
          return io(p);
        };
      function iw(t) {
        return !!(E(t) && t.add);
      }
      let iL = (t) => /^\-?\d*\.?\d+$/.test(t);
      function iS(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function ik(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class iE {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return iS(this.subscriptions, t), () => ik(this.subscriptions, t);
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let iT = (t) => !isNaN(parseFloat(t));
      class iA {
        constructor(t, e = {}) {
          (this.version = "10.12.10"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: r } = tU;
              this.lastUpdated !== r &&
                ((this.timeDelta = i),
                (this.lastUpdated = r),
                tK.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              tK.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = iT(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new iE());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tK.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t, e;
          return this.canTrackVelocity
            ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
              (e = this.timeDelta) ? t * (1e3 / e) : 0)
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function iO(t, e) {
        return new iA(t, e);
      }
      let ij = (t) => (e) => e.test(t),
        iD = [H, q, G, Y, X, K, { test: (t) => "auto" === t, parse: (t) => t }],
        iR = (t) => iD.find(ij(t)),
        iF = [...iD, eO, eq],
        iH = (t) => iF.find(ij(t));
      function i_(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        r && (s = r);
        let c = [],
          u = n && t.animationState && t.animationState.getState()[n];
        for (let e in a) {
          let r = t.getValue(e),
            n = a[e];
          if (
            !r ||
            void 0 === n ||
            (u &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(u, e))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !r.hasAnimated) {
            let i = t.getProps()[t8];
            i && (o.elapsed = window.HandoffAppearAnimations(i, e, r, tK));
          }
          r.start(
            iV(e, r, n, t.shouldReduceMotion && S.has(e) ? { type: !1 } : o)
          );
          let h = r.animation;
          iw(l) && (l.add(e), h.then(() => l.remove(e))), c.push(h);
        }
        return (
          o &&
            Promise.all(c).then(() => {
              o &&
                (function (t, e) {
                  let i = t7(t, e),
                    {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...s
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                  for (let e in (s = { ...s, ...r })) {
                    var o;
                    let i = tP(s[e]);
                    (o = e),
                      t.hasValue(o)
                        ? t.getValue(o).set(i)
                        : t.addValue(o, iO(i));
                  }
                })(t, o);
            }),
          c
        );
      }
      function iB(t, e, i = {}) {
        let r = t7(t, e, i.custom),
          { transition: n = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let s = r ? () => Promise.all(i_(t, r, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(iI)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              iB(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = n;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function iI(t, e) {
        return t.sortNodePosition(e);
      }
      let iU = [...f].reverse(),
        iN = f.length;
      function i$(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let iZ = 0,
        iW = (t, e) => Math.abs(t - e);
      class iY {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = iK(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = iW(t.x, e.x),
                      r = iW(t.y, e.y);
                    return Math.sqrt(i ** 2 + r ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: n } = tU;
              this.history.push({ ...r, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iG(e, this.transformPagePoint)),
                tK.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: i, onSessionEnd: r } = this.handlers,
                n = iK(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : iG(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && i && i(t, n), r && r(t, n);
            }),
            !tE(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let r = tT(t),
            n = iG(r, this.transformPagePoint),
            { point: s } = n,
            { timestamp: o } = tU;
          this.history = [{ ...s, timestamp: o }];
          let { onSessionStart: a } = e;
          a && a(t, iK(n, this.history)),
            (this.removeListeners = tD(
              tO(window, "pointermove", this.handlePointerMove),
              tO(window, "pointerup", this.handlePointerUp),
              tO(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), tX(this.updatePoint);
        }
      }
      function iG(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iq(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iK({ point: t }, e) {
        return {
          point: t,
          delta: iq(t, iX(e)),
          offset: iq(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = iX(t);
            for (
              ;
              i >= 0 && ((r = t[i]), !(n.timestamp - r.timestamp > et(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = ee(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iX(t) {
        return t[t.length - 1];
      }
      function iJ(t) {
        return t.max - t.min;
      }
      function iQ(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function i0(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = ej(e.min, e.max, t.origin)),
          (t.scale = iJ(i) / iJ(e)),
          (iQ(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = ej(i.min, i.max, t.origin) - t.originPoint),
          (iQ(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function i1(t, e, i, r) {
        i0(t.x, e.x, i.x, r ? r.originX : void 0),
          i0(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function i2(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iJ(e));
      }
      function i3(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iJ(e));
      }
      function i4(t, e, i) {
        i3(t.x, e.x, i.x), i3(t.y, e.y, i.y);
      }
      function i6(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function i5(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function i9(t, e, i) {
        return { min: i7(t, e), max: i7(t, i) };
      }
      function i7(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let i8 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        rt = () => ({ x: i8(), y: i8() }),
        re = () => ({ min: 0, max: 0 }),
        ri = () => ({ x: re(), y: re() });
      function rr(t) {
        return [t("x"), t("y")];
      }
      function rn({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function rs(t) {
        return void 0 === t || 1 === t;
      }
      function ro({ scale: t, scaleX: e, scaleY: i }) {
        return !rs(t) || !rs(e) || !rs(i);
      }
      function ra(t) {
        return ro(t) || rl(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function rl(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function rc(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function ru(t, e = 0, i = 1, r, n) {
        (t.min = rc(t.min, e, i, r, n)), (t.max = rc(t.max, e, i, r, n));
      }
      function rh(t, { x: e, y: i }) {
        ru(t.x, e.translate, e.scale, e.originPoint),
          ru(t.y, i.translate, i.scale, i.originPoint);
      }
      function rd(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function rp(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function rf(t, e, [i, r, n]) {
        let s = void 0 !== e[n] ? e[n] : 0.5,
          o = ej(t.min, t.max, s);
        ru(t, e[i], e[r], o, e.scale);
      }
      let rm = ["x", "scaleX", "originX"],
        rv = ["y", "scaleY", "originY"];
      function rg(t, e) {
        rf(t.x, e, rm), rf(t.y, e, rv);
      }
      function ry(t, e) {
        return rn(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let rC = new WeakMap();
      class rM {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ri()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let r = (t) => {
              this.stopAnimation(), e && this.snapToCursor(tT(t, "page").point);
            },
            n = (t, e) => {
              let {
                drag: i,
                dragPropagation: r,
                onDragStart: n,
              } = this.getProps();
              if (
                i &&
                !r &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = t_(i)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                rr((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (G.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let r = i.layout.layoutBox[t];
                      if (r) {
                        let t = iJ(r);
                        e = t * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                }),
                n && tK.update(() => n(t, e), !1, !0);
              let { animationState: s } = this.visualElement;
              s && s.setActive("whileDrag", !0);
            },
            s = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: r,
                onDirectionLock: n,
                onDrag: s,
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              let { offset: o } = e;
              if (r && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    n &&
                    n(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                s && s(t, e);
            },
            o = (t, e) => this.stop(t, e);
          this.panSession = new iY(
            t,
            { onSessionStart: r, onStart: n, onMove: s, onSessionEnd: o },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && tK.update(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !rb(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? ej(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? ej(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            r = this.constraints;
          t && h(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: i6(t.x, i, n), y: i6(t.y, e, r) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: i9(t, "left", "right"), y: i9(t, "top", "bottom") }
              );
            })(e)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              rr((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !h(e)) return !1;
          let r = e.current;
          t0(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = ry(t, i),
                { scroll: n } = e;
              return n && (rp(r.x, n.offset.x), rp(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: i5((t = n.layout.layoutBox).x, s.x), y: i5(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = rn(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = rr((o) => {
              if (!rb(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let c = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, c);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(iV(t, i, 0, e));
        }
        stopAnimation() {
          rr((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps(),
            r = i[e];
          return (
            r ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          rr((e) => {
            let { drag: i } = this.getProps();
            if (!rb(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - ej(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!h(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          rr((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = iJ(t),
                  n = iJ(e);
                return (
                  n > r
                    ? (i = e1(e.min, e.max - r, t.min))
                    : r > n && (i = e1(t.min, t.max - n, e.min)),
                  F(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            rr((e) => {
              if (!rb(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set(ej(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rC.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = tO(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              h(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", i);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            i();
          let s = tk(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (rr((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), n(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function rb(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let rx = (t) => (e, i) => {
          t && tK.update(() => t(e, i));
        },
        rz = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rP(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rV = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!q.test(t)) return t;
            t = parseFloat(t);
          }
          let i = rP(t, e.target.x),
            r = rP(t, e.target.y);
          return `${i}% ${r}%`;
        },
      };
      class rw extends n.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          Object.assign(w, rS),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rz.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    tK.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rL(t) {
        let [e, i] = (function () {
            let t = (0, n.useContext)(a);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: r } = t,
              s = (0, n.useId)();
            (0, n.useEffect)(() => r(s), []);
            let o = () => i && i(s);
            return !e && i ? [!1, o] : [!0];
          })(),
          r = (0, n.useContext)(b);
        return n.createElement(rw, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, n.useContext)(x),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let rS = {
          borderRadius: {
            ...rV,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rV,
          borderTopRightRadius: rV,
          borderBottomLeftRadius: rV,
          borderBottomRightRadius: rV,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let r = eq.parse(t);
              if (r.length > 5) return t;
              let n = eq.createTransformer(t),
                s = "number" != typeof r[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (r[0 + s] /= o), (r[1 + s] /= a);
              let l = ej(o, a, 0.5);
              return (
                "number" == typeof r[2 + s] && (r[2 + s] /= l),
                "number" == typeof r[3 + s] && (r[3 + s] /= l),
                n(r)
              );
            },
          },
        },
        rk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rE = rk.length,
        rT = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rA = (t) => "number" == typeof t || q.test(t);
      function rO(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rj = rR(0, 0.5, ey),
        rD = rR(0.5, 0.95, t0);
      function rR(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i(e1(t, e, r)));
      }
      function rF(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function rH(t, e) {
        rF(t.x, e.x), rF(t.y, e.y);
      }
      function r_(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function rB(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (G.test(e)) {
            e = parseFloat(e);
            let t = ej(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = ej(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = r_(t.min, e, i, a, n)),
            (t.max = r_(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let rI = ["x", "scaleX", "originX"],
        rU = ["y", "scaleY", "originY"];
      function rN(t, e, i, r) {
        rB(t.x, e, rI, i ? i.x : void 0, r ? r.x : void 0),
          rB(t.y, e, rU, i ? i.y : void 0, r ? r.y : void 0);
      }
      function r$(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rZ(t) {
        return r$(t.x) && r$(t.y);
      }
      function rW(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function rY(t) {
        return iJ(t.x) / iJ(t.y);
      }
      class rG {
        constructor() {
          this.members = [];
        }
        add(t) {
          iS(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (ik(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rq(t, e, i) {
        let r = "",
          n = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((n || s) && (r = `translate3d(${n}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: n } = i;
          t && (r += `rotate(${t}deg) `),
            e && (r += `rotateX(${e}deg) `),
            n && (r += `rotateY(${n}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (r += `scale(${o}, ${a})`), r || "none";
      }
      let rK = (t, e) => t.depth - e.depth;
      class rX {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          iS(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          ik(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(rK),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let rJ = ["", "X", "Y", "Z"],
        rQ = 0,
        r0 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function r1({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = rQ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (r0.totalNodes =
                  r0.resolvedTargetDeltas =
                  r0.recalculatedProjection =
                    0),
                  this.nodes.forEach(r4),
                  this.nodes.forEach(nt),
                  this.nodes.forEach(ne),
                  this.nodes.forEach(r6),
                  window.MotionDebug && window.MotionDebug.record(r0);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rX());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new iE()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      r = ({ timestamp: n }) => {
                        let s = n - i;
                        s >= e && (tX(r), t(s - e));
                      };
                    return tK.read(r, !0), () => tX(r);
                  })(r, 250)),
                  rz.hasAnimatedSinceResize &&
                    ((rz.hasAnimatedSinceResize = !1), this.nodes.forEach(r8));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        na,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !rW(this.targetLayout, r) || i,
                      c = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      c ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, c);
                      let e = { ...iP(n, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || r8(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              tX(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ni),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(r9);
              return;
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.nodes.forEach(r7),
              this.nodes.forEach(r2),
              this.nodes.forEach(r3),
              this.clearAllSnapshots(),
              tW.update.process(tU),
              tW.preRender.process(tU),
              tW.render.process(tU));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(r5), this.sharedNodes.forEach(nr);
          }
          scheduleUpdateProjection() {
            tK.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            tK.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ri()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: r(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !rZ(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || ra(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              nl((e = r).x),
              nl(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ri();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (rp(e.x, i.offset.x), rp(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = ri();
            rH(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i],
                { scroll: n, options: s } = r;
              if (r !== this.root && n && s.layoutScroll) {
                if (n.isRoot) {
                  rH(e, t);
                  let { scroll: i } = this.root;
                  i && (rp(e.x, -i.offset.x), rp(e.y, -i.offset.y));
                }
                rp(e.x, n.offset.x), rp(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = ri();
            rH(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rg(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                ra(r.latestValues) && rg(i, r.latestValues);
            }
            return ra(this.latestValues) && rg(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = ri();
            rH(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ra(i.latestValues)) continue;
              ro(i.latestValues) && i.updateSnapshot();
              let r = ri(),
                n = i.measurePageBox();
              rH(r, n),
                rN(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return ra(this.latestValues) && rN(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tU.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: c } = this.options;
            if (this.layout && (l || c)) {
              if (
                ((this.resolvedRelativeTargetAt = tU.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ri()),
                    (this.relativeTargetOrigin = ri()),
                    i4(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    rH(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = ri()), (this.targetWithTransforms = ri())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      i2(i.x, r.x, n.x),
                      i2(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rH(this.target, this.layout.layoutBox),
                      rh(this.target, this.targetDelta))
                    : rH(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ri()),
                      (this.relativeTargetOrigin = ri()),
                      i4(this.relativeTargetOrigin, this.target, t.target),
                      rH(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                r0.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ro(this.parent.latestValues) ||
              rl(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === tU.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            rH(this.layoutCorrected, this.layout.layoutBox),
              (function (t, e, i, r = !1) {
                let n, s;
                let o = i.length;
                if (o) {
                  e.x = e.y = 1;
                  for (let a = 0; a < o; a++) {
                    s = (n = i[a]).projectionDelta;
                    let o = n.instance;
                    (!o || !o.style || "contents" !== o.style.display) &&
                      (r &&
                        n.options.layoutScroll &&
                        n.scroll &&
                        n !== n.root &&
                        rg(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                      s && ((e.x *= s.x.scale), (e.y *= s.y.scale), rh(t, s)),
                      r && ra(n.latestValues) && rg(t, n.latestValues));
                  }
                  (e.x = rd(e.x)), (e.y = rd(e.y));
                }
              })(this.layoutCorrected, this.treeScale, this.path, i);
            let { target: o } = e;
            if (!o) return;
            this.projectionDelta ||
              ((this.projectionDelta = rt()),
              (this.projectionDeltaWithTransform = rt()));
            let a = this.treeScale.x,
              l = this.treeScale.y,
              c = this.projectionTransform;
            i1(
              this.projectionDelta,
              this.layoutCorrected,
              o,
              this.latestValues
            ),
              (this.projectionTransform = rq(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== c ||
                this.treeScale.x !== a ||
                this.treeScale.y !== l) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", o)),
              r0.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = rt();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = ri(),
              l = r ? r.source : void 0,
              c = this.layout ? this.layout.source : void 0,
              u = l !== c,
              h = this.getStack(),
              d = !h || h.members.length <= 1,
              p = !!(
                u &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(no)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var r, l;
                let c = e / 1e3;
                nn(o.x, t.x, c),
                  nn(o.y, t.y, c),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (i4(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (r = this.relativeTarget),
                    (l = this.relativeTargetOrigin),
                    ns(r.x, l.x, a.x, c),
                    ns(r.y, l.y, a.y, c),
                    i &&
                      rW(this.relativeTarget, i) &&
                      (this.isProjectionDirty = !1),
                    i || (i = ri()),
                    rH(i, this.relativeTarget)),
                  u &&
                    ((this.animationValues = s),
                    (function (t, e, i, r, n, s) {
                      n
                        ? ((t.opacity = ej(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            rj(r)
                          )),
                          (t.opacityExit = ej(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            rD(r)
                          )))
                        : s &&
                          (t.opacity = ej(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            r
                          ));
                      for (let n = 0; n < rE; n++) {
                        let s = `border${rk[n]}Radius`,
                          o = rO(e, s),
                          a = rO(i, s);
                        if (void 0 === o && void 0 === a) continue;
                        o || (o = 0), a || (a = 0);
                        let l = 0 === o || 0 === a || rA(o) === rA(a);
                        l
                          ? ((t[s] = Math.max(ej(rT(o), rT(a), r), 0)),
                            (G.test(a) || G.test(o)) && (t[s] += "%"))
                          : (t[s] = a);
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = ej(e.rotate || 0, i.rotate || 0, r));
                    })(s, n, this.latestValues, c, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = c);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (tX(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tK.update(() => {
                (rz.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = E(t) ? t : iO(t);
                    return r.start(iV("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                nc(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || ri();
                let e = iJ(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = iJ(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              rH(e, i),
                rg(e, n),
                i1(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rG());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let r = {};
            for (let e = 0; e < rJ.length; e++) {
              let n = "rotate" + rJ[e];
              i[n] && ((r[n] = i[n]), t.setStaticValue(n, 0));
            }
            for (let e in (t.render(), r)) t.setStaticValue(e, r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i;
            let r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return { visibility: "hidden" };
            r.visibility = "";
            let n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = tV(t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = tV(t.pointerEvents) || "")),
                this.hasProjected &&
                  !ra(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = rq(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            w)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = w[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this ? tV(t.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(r9),
              this.root.sharedNodes.clear();
          }
        };
      }
      function r2(t) {
        t.updateLayout();
      }
      function r3(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? rr((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = iJ(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : nc(n, i.layoutBox, e) &&
              rr((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = iJ(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = rt();
          i1(o, e, i.layoutBox);
          let a = rt();
          s
            ? i1(a, t.applyTransform(r, !0), i.measuredBox)
            : i1(a, e, i.layoutBox);
          let l = !rZ(o),
            c = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = ri();
                i4(o, i.layoutBox, n.layoutBox);
                let a = ri();
                i4(a, e, s.layoutBox),
                  rW(o, a) || (c = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function r4(t) {
        r0.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function r6(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function r5(t) {
        t.clearSnapshot();
      }
      function r9(t) {
        t.clearMeasurements();
      }
      function r7(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function r8(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function nt(t) {
        t.resolveTargetDelta();
      }
      function ne(t) {
        t.calcProjection();
      }
      function ni(t) {
        t.resetRotation();
      }
      function nr(t) {
        t.removeLeadSnapshot();
      }
      function nn(t, e, i) {
        (t.translate = ej(e.translate, 0, i)),
          (t.scale = ej(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ns(t, e, i, r) {
        (t.min = ej(e.min, i.min, r)), (t.max = ej(e.max, i.max, r));
      }
      function no(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let na = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function nl(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function nc(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !iQ(rY(e), rY(i), 0.2))
        );
      }
      let nu = r1({
          attachResizeListener: (t, e) => tk(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nh = { current: void 0 },
        nd = r1({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nh.current) {
              let t = new nu({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nh.current = t);
            }
            return nh.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        np = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function nf(t, e, i = 1) {
        t0(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [r, n] = (function (t) {
          let e = np.exec(t);
          if (!e) return [,];
          let [, i, r] = e;
          return [i, r];
        })(t);
        if (!r) return;
        let s = window.getComputedStyle(e).getPropertyValue(r);
        return s ? s.trim() : D(n) ? nf(n, e, i + 1) : n;
      }
      let nm = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        nv = (t) => nm.has(t),
        ng = (t) => Object.keys(t).some(nv),
        ny = (t) => t === H || t === q,
        nC = (t, e) => parseFloat(t.split(", ")[e]),
        nM =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/);
            if (n) return nC(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/);
              return e ? nC(e[1], t) : 0;
            }
          },
        nb = new Set(["x", "y", "z"]),
        nx = L.filter((t) => !nb.has(t)),
        nz = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: nM(4, 13),
          y: nM(5, 14),
        },
        nP = (t, e, i) => {
          let r = e.measureViewportBox(),
            n = e.current,
            s = getComputedStyle(n),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = nz[t](r, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let r = e.getValue(i);
              r && r.jump(a[i]), (t[i] = nz[i](l, s));
            }),
            t
          );
        },
        nV = (t, e, i = {}, r = {}) => {
          (e = { ...e }), (r = { ...r });
          let n = Object.keys(e).filter(nv),
            s = [],
            o = !1,
            a = [];
          if (
            (n.forEach((n) => {
              let l;
              let c = t.getValue(n);
              if (!t.hasValue(n)) return;
              let u = i[n],
                h = iR(u),
                d = e[n];
              if (tx(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                h = iR((u = d[e]));
                for (let i = e; i < t && null !== d[i]; i++)
                  l
                    ? t0(
                        iR(d[i]) === l,
                        "All keyframes must be of the same type"
                      )
                    : t0(
                        (l = iR(d[i])) === h || (ny(h) && ny(l)),
                        "Keyframes must be of the same dimension as the current value"
                      );
              } else l = iR(d);
              if (h !== l) {
                if (ny(h) && ny(l)) {
                  let t = c.get();
                  "string" == typeof t && c.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[n] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === q &&
                        (e[n] = d.map(parseFloat));
                } else
                  (null == h ? void 0 : h.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === u || 0 === d)
                    ? 0 === u
                      ? c.set(l.transform(u))
                      : (e[n] = h.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            nx.forEach((i) => {
                              let r = t.getValue(i);
                              void 0 !== r &&
                                (e.push([i, r.get()]),
                                r.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(n),
                      (r[n] = void 0 !== r[n] ? r[n] : e[n]),
                      c.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: r };
          {
            let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              n = nP(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              l && null !== i && window.scrollTo({ top: i }),
              { target: n, transitionEnd: r }
            );
          }
        },
        nw = (t, e, i, r) => {
          var n, s;
          let o = (function (t, { ...e }, i) {
            let r = t.current;
            if (!(r instanceof Element)) return { target: e, transitionEnd: i };
            for (let n in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!D(e)) return;
              let i = nf(e, r);
              i && t.set(i);
            }),
            e)) {
              let t = e[n];
              if (!D(t)) continue;
              let s = nf(t, r);
              s && ((e[n] = s), i || (i = {}), void 0 === i[n] && (i[n] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, r);
          return (
            (e = o.target),
            (r = o.transitionEnd),
            (n = e),
            (s = r),
            ng(n) ? nV(t, n, i, s) : { target: n, transitionEnd: s }
          );
        },
        nL = { current: null },
        nS = { current: !1 },
        nk = new WeakMap(),
        nE = Object.keys(M),
        nT = nE.length,
        nA = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nO = m.length;
      class nj {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            visualState: n,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tK.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = n;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = s),
            (this.isControllingVariants = v(e)),
            (this.isVariantNode = g(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...c } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in c) {
            let e = c[t];
            void 0 !== o[t] && E(e) && (e.set(o[t], !1), iw(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            nk.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nS.current ||
              (function () {
                if (((nS.current = !0), l)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nL.current = t.matches);
                    t.addListener(e), e();
                  } else nL.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nL.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nk.delete(this.current),
          this.projection && this.projection.unmount(),
          tX(this.notifyUpdate),
          tX(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = S.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tK.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            r(), n();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, r, n) {
          let s, o;
          for (let t = 0; t < nT; t++) {
            let i = nE[t],
              {
                isEnabled: r,
                Feature: n,
                ProjectionNode: a,
                MeasureLayout: l,
              } = M[i];
            a && (s = a),
              r(e) &&
                (!this.features[i] && n && (this.features[i] = new n(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: r,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!r || (o && h(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: n,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted
              ? e.update(this.props, this.prevProps)
              : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ri();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nA.length; e++) {
            let i = nA[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: r } = e;
            for (let n in e) {
              let s = e[n],
                o = i[n];
              if (E(s)) t.addValue(n, s), iw(r) && r.add(n);
              else if (E(o))
                t.addValue(n, iO(s, { owner: t })), iw(r) && r.remove(n);
              else if (o !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, iO(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < nO; t++) {
            let i = m[t],
              r = this.props[i];
            (d(r) || !1 === r) && (e[i] = r);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = iO(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current
            ? this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            r =
              "string" == typeof i || "object" == typeof i
                ? null === (e = tb(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== r) return r;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || E(n)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iE()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nD extends nj {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: r },
          n
        ) {
          let s = (function (t, e, i) {
            let r = {};
            for (let n in t) {
              let t = (function (t, e) {
                if (!e) return;
                let i = e[t] || e.default || e;
                return i.from;
              })(n, e);
              if (void 0 !== t) r[n] = t;
              else {
                let t = i.getValue(n);
                t && (r[n] = t.get());
              }
            }
            return r;
          })(i, t || {}, this);
          if ((r && (e && (e = r(e)), i && (i = r(i)), s && (s = r(s))), n)) {
            !(function (t, e, i) {
              var r, n;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    c = null;
                  Array.isArray(l) && (c = l[0]),
                    null === c &&
                      (c =
                        null !==
                          (n =
                            null !== (r = i[o]) && void 0 !== r
                              ? r
                              : t.readValue(o)) && void 0 !== n
                          ? n
                          : e[o]),
                    null != c &&
                      ("string" == typeof c && (iL(c) || iz(c))
                        ? (c = parseFloat(c))
                        : !iH(c) && eq.test(l) && (c = ix(o, l)),
                      t.addValue(o, iO(c, { owner: t })),
                      void 0 === i[o] && (i[o] = c),
                      null !== c && t.setBaseTarget(o, c));
                }
            })(this, i, s);
            let t = nw(this, i, s, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class nR extends nD {
        readValueFromInstance(t, e) {
          if (S.has(e)) {
            let t = ib(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = (j(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return ry(t, e);
        }
        build(t, e, i, r) {
          te(t, e, i, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tC(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          E(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, r) {
          tv(t, e, i, r);
        }
      }
      class nF extends nD {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (S.has(e)) {
            let t = ib(e);
            return (t && t.default) || 0;
          }
          return (e = tg.has(e) ? e : tm(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return ri();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tM(t, e);
        }
        build(t, e, i, r) {
          th(t, e, i, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          ty(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = tp(t.tagName)), super.mount(t);
        }
      }
      let nH = (t, e) =>
          V(t)
            ? new nF(e, { enableHardwareAcceleration: !1 })
            : new nR(e, { enableHardwareAcceleration: !0 }),
        n_ = {
          animation: {
            Feature: class extends tI {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) =>
                              (function (t, e, i = {}) {
                                let r;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let n = e.map((e) => iB(t, e, i));
                                  r = Promise.all(n);
                                } else if ("string" == typeof e)
                                  r = iB(t, e, i);
                                else {
                                  let n =
                                    "function" == typeof e
                                      ? t7(t, e, i.custom)
                                      : e;
                                  r = Promise.all(i_(t, n, i));
                                }
                                return r.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, i)
                            )
                          ),
                        i = {
                          animate: i$(!0),
                          whileInView: i$(),
                          whileHover: i$(),
                          whileTap: i$(),
                          whileDrag: i$(),
                          whileFocus: i$(),
                          exit: i$(),
                        },
                        r = !0,
                        n = (e, i) => {
                          let r = t7(t, i);
                          if (r) {
                            let { transition: t, transitionEnd: i, ...n } = r;
                            e = { ...e, ...n, ...i };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          c = [],
                          u = new Set(),
                          h = {},
                          f = 1 / 0;
                        for (let e = 0; e < iN; e++) {
                          var m;
                          let v = iU[e],
                            g = i[v],
                            y = void 0 !== a[v] ? a[v] : l[v],
                            C = d(y),
                            M = v === o ? g.isActive : null;
                          !1 === M && (f = e);
                          let b = y === l[v] && y !== a[v] && C;
                          if (
                            (b && r && t.manuallyAnimateOnMount && (b = !1),
                            (g.protectedKeys = { ...h }),
                            (!g.isActive && null === M) ||
                              (!y && !g.prevProp) ||
                              p(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          let x =
                              ((m = g.prevProp),
                              "string" == typeof y
                                ? y !== m
                                : !!Array.isArray(y) && !t9(y, m)),
                            z =
                              x ||
                              (v === o && g.isActive && !b && C) ||
                              (e > f && C),
                            P = Array.isArray(y) ? y : [y],
                            V = P.reduce(n, {});
                          !1 === M && (V = {});
                          let { prevResolvedValues: w = {} } = g,
                            L = { ...w, ...V },
                            S = (t) => {
                              (z = !0), u.delete(t), (g.needsAnimating[t] = !0);
                            };
                          for (let t in L) {
                            let e = V[t],
                              i = w[t];
                            h.hasOwnProperty(t) ||
                              (e !== i
                                ? tx(e) && tx(i)
                                  ? !t9(e, i) || x
                                    ? S(t)
                                    : (g.protectedKeys[t] = !0)
                                  : void 0 !== e
                                  ? S(t)
                                  : u.add(t)
                                : void 0 !== e && u.has(t)
                                ? S(t)
                                : (g.protectedKeys[t] = !0));
                          }
                          (g.prevProp = y),
                            (g.prevResolvedValues = V),
                            g.isActive && (h = { ...h, ...V }),
                            r && t.blockInitialAnimation && (z = !1),
                            z &&
                              !b &&
                              c.push(
                                ...P.map((t) => ({
                                  animation: t,
                                  options: { type: v, ...s },
                                }))
                              );
                        }
                        if (u.size) {
                          let e = {};
                          u.forEach((i) => {
                            let r = t.getBaseTarget(i);
                            void 0 !== r && (e[i] = r);
                          }),
                            c.push({ animation: e });
                        }
                        let v = !!c.length;
                        return (
                          r &&
                            !1 === a.initial &&
                            !t.manuallyAnimateOnMount &&
                            (v = !1),
                          (r = !1),
                          v ? e(c) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, r, n) {
                          var o;
                          if (i[e].isActive === r) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var i;
                              return null === (i = t.animationState) ||
                                void 0 === i
                                ? void 0
                                : i.setActive(e, r);
                            }),
                            (i[e].isActive = r);
                          let a = s(n, e);
                          for (let t in i) i[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(), p(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends tI {
              constructor() {
                super(...arguments), (this.id = iZ++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: i,
                  } = this.node.presenceContext,
                  { isPresent: r } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === r) return;
                let n = this.node.animationState.setActive("exit", !t, {
                  custom: null != i ? i : this.node.getProps().custom,
                });
                e && !t && n.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends tI {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: i, amount: r = "some", once: n } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof r ? r : t5[r],
                  },
                  o = (t) => {
                    let { isIntersecting: e } = t;
                    if (
                      this.isInView === e ||
                      ((this.isInView = e), n && !e && this.hasEnteredView)
                    )
                      return;
                    e && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", e);
                    let { onViewportEnter: i, onViewportLeave: r } =
                        this.node.getProps(),
                      s = e ? i : r;
                    s && s(t);
                  };
                return (function (t, e, i) {
                  let r = (function ({ root: t, ...e }) {
                    let i = t || document;
                    t3.has(i) || t3.set(i, {});
                    let r = t3.get(i),
                      n = JSON.stringify(e);
                    return (
                      r[n] ||
                        (r[n] = new IntersectionObserver(t6, {
                          root: t,
                          ...e,
                        })),
                      r[n]
                    );
                  })(e);
                  return (
                    t2.set(t, i),
                    r.observe(t),
                    () => {
                      t2.delete(t), r.unobserve(t);
                    }
                  );
                })(this.node.current, s, o);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  i = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  );
                i && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends tI {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = t0),
                  (this.removeEndListeners = t0),
                  (this.removeAccessibleListeners = t0),
                  (this.startPointerPress = (t, e) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let i = this.node.getProps(),
                      r = (t, e) => {
                        if (!this.checkPressEnd()) return;
                        let { onTap: i, onTapCancel: r } = this.node.getProps();
                        tK.update(() => {
                          tQ(this.node.current, t.target)
                            ? i && i(t, e)
                            : r && r(t, e);
                        });
                      },
                      n = tO(window, "pointerup", r, {
                        passive: !(i.onTap || i.onPointerUp),
                      }),
                      s = tO(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(i.onTapCancel || i.onPointerCancel) }
                      );
                    (this.removeEndListeners = tD(n, s)), this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = (t) => {
                        if ("Enter" !== t.key || this.isPressing) return;
                        let e = (t) => {
                          "Enter" === t.key &&
                            this.checkPressEnd() &&
                            t1("up", (t, e) => {
                              let { onTap: i } = this.node.getProps();
                              i && tK.update(() => i(t, e));
                            });
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = tk(
                            this.node.current,
                            "keyup",
                            e
                          )),
                          t1("down", (t, e) => {
                            this.startPress(t, e);
                          });
                      },
                      e = tk(this.node.current, "keydown", t),
                      i = () => {
                        this.isPressing &&
                          t1("cancel", (t, e) => this.cancelPress(t, e));
                      },
                      r = tk(this.node.current, "blur", i);
                    this.removeAccessibleListeners = tD(e, r);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: i, whileTap: r } = this.node.getProps();
                r &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  i && tK.update(() => i(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !tB()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: i } = this.node.getProps();
                i && tK.update(() => i(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = tO(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  i = tk(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tD(e, i);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends tI {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tD(
                  tk(this.node.current, "focus", () => this.onFocus()),
                  tk(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends tI {
              mount() {
                this.unmount = tD(tJ(this.node, !0), tJ(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends tI {
              constructor() {
                super(...arguments), (this.removePointerDownListener = t0);
              }
              onPointerDown(t) {
                this.session = new iY(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: i,
                  onPanEnd: r,
                } = this.node.getProps();
                return {
                  onSessionStart: rx(t),
                  onStart: rx(e),
                  onMove: i,
                  onEnd: (t, e) => {
                    delete this.session, r && tK.update(() => r(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tO(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends tI {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = t0),
                  (this.removeListeners = t0),
                  (this.controls = new rM(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || t0);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: nd,
            MeasureLayout: rL,
          },
          layout: { ProjectionNode: nd, MeasureLayout: rL },
        },
        nB = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: r,
              Component: p,
            }) {
              t &&
                (function (t) {
                  for (let e in t) M[e] = { ...M[e], ...t[e] };
                })(t);
              let f = (0, n.forwardRef)(function (f, m) {
                var g, C;
                let M;
                let z = {
                    ...(0, n.useContext)(s),
                    ...f,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, n.useContext)(b).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(f),
                  },
                  { isStatic: P } = z,
                  V = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (v(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || d(e) ? e : void 0,
                          animate: d(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, n.useContext)(o));
                    return (0, n.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [y(e), y(i)]
                    );
                  })(f),
                  w = r(f, P);
                if (!P && l) {
                  V.visualElement = (function (t, e, i, r) {
                    let { visualElement: l } = (0, n.useContext)(o),
                      h = (0, n.useContext)(u),
                      d = (0, n.useContext)(a),
                      p = (0, n.useContext)(s).reducedMotion,
                      f = (0, n.useRef)();
                    (r = r || h.renderer),
                      !f.current &&
                        r &&
                        (f.current = r(t, {
                          visualState: e,
                          parent: l,
                          props: i,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: p,
                        }));
                    let m = f.current;
                    (0, n.useInsertionEffect)(() => {
                      m && m.update(i, d);
                    }),
                      c(() => {
                        m && m.render();
                      }),
                      (0, n.useEffect)(() => {
                        m && m.updateFeatures();
                      });
                    let v = window.HandoffAppearAnimations ? c : n.useEffect;
                    return (
                      v(() => {
                        m &&
                          m.animationState &&
                          m.animationState.animateChanges();
                      }),
                      m
                    );
                  })(p, w, z, e);
                  let i = (0, n.useContext)(x),
                    r = (0, n.useContext)(u).strict;
                  V.visualElement &&
                    (M = V.visualElement.loadFeatures(z, r, t, i));
                }
                return n.createElement(
                  o.Provider,
                  { value: V },
                  M && V.visualElement
                    ? n.createElement(M, {
                        visualElement: V.visualElement,
                        ...z,
                      })
                    : null,
                  i(
                    p,
                    f,
                    ((g = V.visualElement),
                    (C = m),
                    (0, n.useCallback)(
                      (t) => {
                        t && w.mount && w.mount(t),
                          g && (t ? g.mount(t) : g.unmount()),
                          C &&
                            ("function" == typeof C
                              ? C(t)
                              : h(C) && (C.current = t));
                      },
                      [g]
                    )),
                    w,
                    P,
                    V.visualElement
                  )
                );
              });
              return (f[z] = p), f;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, r) {
            let s = V(t) ? tL : tS;
            return {
              ...s,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                let e = (e, i, r, { latestValues: s }, o) => {
                  let a = V(e) ? tf : tn,
                    l = a(i, s, o, e),
                    c = (function (t, e, i) {
                      let r = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (ta(n) ||
                            (!0 === i && to(n)) ||
                            (!e && !to(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (r[n] = t[n]);
                      return r;
                    })(i, "string" == typeof e, t),
                    u = { ...c, ...l, ref: r },
                    { children: h } = i,
                    d = (0, n.useMemo)(() => (E(h) ? h.get() : h), [h]);
                  return (0, n.createElement)(e, { ...u, children: d });
                };
                return e;
              })(e),
              createVisualElement: r,
              Component: t,
            };
          })(t, e, n_, nH)
        );
    },
  },
]);
