var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import axios from "axios";
var require_app2 = __commonJS({
  "app2.js"(exports, module) {
    const bootstrap = "";
    const fontAwesome_min = "";
    const style = "";
    const animate = "";
    const responsive = "";
    const colors = "";
    const marketing = "";
    /*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
    !function(a, b) {
      "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, true) : function(a2) {
        if (!a2.document)
          throw new Error("jQuery requires a window with a document");
        return b(a2);
      } : b(a);
    }("undefined" != typeof window ? window : globalThis, function(a, b) {
      var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "1.12.4", n = function(a2, b2) {
        return new n.fn.init(a2, b2);
      }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a2, b2) {
        return b2.toUpperCase();
      };
      n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() {
        return e.call(this);
      }, get: function(a2) {
        return null != a2 ? 0 > a2 ? this[a2 + this.length] : this[a2] : e.call(this);
      }, pushStack: function(a2) {
        var b2 = n.merge(this.constructor(), a2);
        return b2.prevObject = this, b2.context = this.context, b2;
      }, each: function(a2) {
        return n.each(this, a2);
      }, map: function(a2) {
        return this.pushStack(n.map(this, function(b2, c2) {
          return a2.call(b2, c2, b2);
        }));
      }, slice: function() {
        return this.pushStack(e.apply(this, arguments));
      }, first: function() {
        return this.eq(0);
      }, last: function() {
        return this.eq(-1);
      }, eq: function(a2) {
        var b2 = this.length, c2 = +a2 + (0 > a2 ? b2 : 0);
        return this.pushStack(c2 >= 0 && b2 > c2 ? [this[c2]] : []);
      }, end: function() {
        return this.prevObject || this.constructor();
      }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() {
        var a2, b2, c2, d2, e2, f2, g2 = arguments[0] || {}, h2 = 1, i2 = arguments.length, j2 = false;
        for ("boolean" == typeof g2 && (j2 = g2, g2 = arguments[h2] || {}, h2++), "object" == typeof g2 || n.isFunction(g2) || (g2 = {}), h2 === i2 && (g2 = this, h2--); i2 > h2; h2++)
          if (null != (e2 = arguments[h2]))
            for (d2 in e2)
              a2 = g2[d2], c2 = e2[d2], g2 !== c2 && (j2 && c2 && (n.isPlainObject(c2) || (b2 = n.isArray(c2))) ? (b2 ? (b2 = false, f2 = a2 && n.isArray(a2) ? a2 : []) : f2 = a2 && n.isPlainObject(a2) ? a2 : {}, g2[d2] = n.extend(j2, f2, c2)) : void 0 !== c2 && (g2[d2] = c2));
        return g2;
      }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: true, error: function(a2) {
        throw new Error(a2);
      }, noop: function() {
      }, isFunction: function(a2) {
        return "function" === n.type(a2);
      }, isArray: Array.isArray || function(a2) {
        return "array" === n.type(a2);
      }, isWindow: function(a2) {
        return null != a2 && a2 == a2.window;
      }, isNumeric: function(a2) {
        var b2 = a2 && a2.toString();
        return !n.isArray(a2) && b2 - parseFloat(b2) + 1 >= 0;
      }, isEmptyObject: function(a2) {
        var b2;
        for (b2 in a2)
          return false;
        return true;
      }, isPlainObject: function(a2) {
        var b2;
        if (!a2 || "object" !== n.type(a2) || a2.nodeType || n.isWindow(a2))
          return false;
        try {
          if (a2.constructor && !k.call(a2, "constructor") && !k.call(a2.constructor.prototype, "isPrototypeOf"))
            return false;
        } catch (c2) {
          return false;
        }
        if (!l.ownFirst)
          for (b2 in a2)
            return k.call(a2, b2);
        for (b2 in a2)
          ;
        return void 0 === b2 || k.call(a2, b2);
      }, type: function(a2) {
        return null == a2 ? a2 + "" : "object" == typeof a2 || "function" == typeof a2 ? i[j.call(a2)] || "object" : typeof a2;
      }, globalEval: function(b2) {
        b2 && n.trim(b2) && (a.execScript || function(b3) {
          a.eval.call(a, b3);
        })(b2);
      }, camelCase: function(a2) {
        return a2.replace(p, "ms-").replace(q, r);
      }, nodeName: function(a2, b2) {
        return a2.nodeName && a2.nodeName.toLowerCase() === b2.toLowerCase();
      }, each: function(a2, b2) {
        var c2, d2 = 0;
        if (s(a2)) {
          for (c2 = a2.length; c2 > d2; d2++)
            if (b2.call(a2[d2], d2, a2[d2]) === false)
              break;
        } else
          for (d2 in a2)
            if (b2.call(a2[d2], d2, a2[d2]) === false)
              break;
        return a2;
      }, trim: function(a2) {
        return null == a2 ? "" : (a2 + "").replace(o, "");
      }, makeArray: function(a2, b2) {
        var c2 = b2 || [];
        return null != a2 && (s(Object(a2)) ? n.merge(c2, "string" == typeof a2 ? [a2] : a2) : g.call(c2, a2)), c2;
      }, inArray: function(a2, b2, c2) {
        var d2;
        if (b2) {
          if (h)
            return h.call(b2, a2, c2);
          for (d2 = b2.length, c2 = c2 ? 0 > c2 ? Math.max(0, d2 + c2) : c2 : 0; d2 > c2; c2++)
            if (c2 in b2 && b2[c2] === a2)
              return c2;
        }
        return -1;
      }, merge: function(a2, b2) {
        var c2 = +b2.length, d2 = 0, e2 = a2.length;
        while (c2 > d2)
          a2[e2++] = b2[d2++];
        if (c2 !== c2)
          while (void 0 !== b2[d2])
            a2[e2++] = b2[d2++];
        return a2.length = e2, a2;
      }, grep: function(a2, b2, c2) {
        for (var d2, e2 = [], f2 = 0, g2 = a2.length, h2 = !c2; g2 > f2; f2++)
          d2 = !b2(a2[f2], f2), d2 !== h2 && e2.push(a2[f2]);
        return e2;
      }, map: function(a2, b2, c2) {
        var d2, e2, g2 = 0, h2 = [];
        if (s(a2))
          for (d2 = a2.length; d2 > g2; g2++)
            e2 = b2(a2[g2], g2, c2), null != e2 && h2.push(e2);
        else
          for (g2 in a2)
            e2 = b2(a2[g2], g2, c2), null != e2 && h2.push(e2);
        return f.apply([], h2);
      }, guid: 1, proxy: function(a2, b2) {
        var c2, d2, f2;
        return "string" == typeof b2 && (f2 = a2[b2], b2 = a2, a2 = f2), n.isFunction(a2) ? (c2 = e.call(arguments, 2), d2 = function() {
          return a2.apply(b2 || this, c2.concat(e.call(arguments)));
        }, d2.guid = a2.guid = a2.guid || n.guid++, d2) : void 0;
      }, now: function() {
        return +/* @__PURE__ */ new Date();
      }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a2, b2) {
        i["[object " + b2 + "]"] = b2.toLowerCase();
      });
      function s(a2) {
        var b2 = !!a2 && "length" in a2 && a2.length, c2 = n.type(a2);
        return "function" === c2 || n.isWindow(a2) ? false : "array" === c2 || 0 === b2 || "number" == typeof b2 && b2 > 0 && b2 - 1 in a2;
      }
      var t = function(a2) {
        var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), v2 = a2.document, w2 = 0, x2 = 0, y2 = ga2(), z2 = ga2(), A2 = ga2(), B2 = function(a3, b3) {
          return a3 === b3 && (l2 = true), 0;
        }, C2 = 1 << 31, D2 = {}.hasOwnProperty, E2 = [], F2 = E2.pop, G2 = E2.push, H2 = E2.push, I2 = E2.slice, J2 = function(a3, b3) {
          for (var c3 = 0, d3 = a3.length; d3 > c3; c3++)
            if (a3[c3] === b3)
              return c3;
          return -1;
        }, K2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L2 = "[\\x20\\t\\r\\n\\f]", M2 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N2 = "\\[" + L2 + "*(" + M2 + ")(?:" + L2 + "*([*^$|!~]?=)" + L2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + M2 + "))|)" + L2 + "*\\]", O2 = ":(" + M2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + N2 + ")*)|.*)\\)|)", P2 = new RegExp(L2 + "+", "g"), Q2 = new RegExp("^" + L2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L2 + "+$", "g"), R2 = new RegExp("^" + L2 + "*," + L2 + "*"), S2 = new RegExp("^" + L2 + "*([>+~]|" + L2 + ")" + L2 + "*"), T2 = new RegExp("=" + L2 + `*([^\\]'"]*?)` + L2 + "*\\]", "g"), U2 = new RegExp(O2), V2 = new RegExp("^" + M2 + "$"), W2 = { ID: new RegExp("^#(" + M2 + ")"), CLASS: new RegExp("^\\.(" + M2 + ")"), TAG: new RegExp("^(" + M2 + "|[*])"), ATTR: new RegExp("^" + N2), PSEUDO: new RegExp("^" + O2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L2 + "*(even|odd|(([+-]|)(\\d*)n|)" + L2 + "*(?:([+-]|)" + L2 + "*(\\d+)|))" + L2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + K2 + ")$", "i"), needsContext: new RegExp("^" + L2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L2 + "*((?:-\\d)?\\d*)" + L2 + "*\\)|)(?=[^-]|$)", "i") }, X2 = /^(?:input|select|textarea|button)$/i, Y2 = /^h\d$/i, Z2 = /^[^{]+\{\s*\[native \w/, $2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _2 = /[+~]/, aa2 = /'|\\/g, ba2 = new RegExp("\\\\([\\da-f]{1,6}" + L2 + "?|(" + L2 + ")|.)", "ig"), ca2 = function(a3, b3, c3) {
          var d3 = "0x" + b3 - 65536;
          return d3 !== d3 || c3 ? b3 : 0 > d3 ? String.fromCharCode(d3 + 65536) : String.fromCharCode(d3 >> 10 | 55296, 1023 & d3 | 56320);
        }, da2 = function() {
          m2();
        };
        try {
          H2.apply(E2 = I2.call(v2.childNodes), v2.childNodes), E2[v2.childNodes.length].nodeType;
        } catch (ea2) {
          H2 = { apply: E2.length ? function(a3, b3) {
            G2.apply(a3, I2.call(b3));
          } : function(a3, b3) {
            var c3 = a3.length, d3 = 0;
            while (a3[c3++] = b3[d3++])
              ;
            a3.length = c3 - 1;
          } };
        }
        function fa2(a3, b3, d3, e3) {
          var f3, h3, j3, k3, l3, o3, r3, s3, w3 = b3 && b3.ownerDocument, x3 = b3 ? b3.nodeType : 9;
          if (d3 = d3 || [], "string" != typeof a3 || !a3 || 1 !== x3 && 9 !== x3 && 11 !== x3)
            return d3;
          if (!e3 && ((b3 ? b3.ownerDocument || b3 : v2) !== n2 && m2(b3), b3 = b3 || n2, p2)) {
            if (11 !== x3 && (o3 = $2.exec(a3)))
              if (f3 = o3[1]) {
                if (9 === x3) {
                  if (!(j3 = b3.getElementById(f3)))
                    return d3;
                  if (j3.id === f3)
                    return d3.push(j3), d3;
                } else if (w3 && (j3 = w3.getElementById(f3)) && t2(b3, j3) && j3.id === f3)
                  return d3.push(j3), d3;
              } else {
                if (o3[2])
                  return H2.apply(d3, b3.getElementsByTagName(a3)), d3;
                if ((f3 = o3[3]) && c2.getElementsByClassName && b3.getElementsByClassName)
                  return H2.apply(d3, b3.getElementsByClassName(f3)), d3;
              }
            if (c2.qsa && !A2[a3 + " "] && (!q2 || !q2.test(a3))) {
              if (1 !== x3)
                w3 = b3, s3 = a3;
              else if ("object" !== b3.nodeName.toLowerCase()) {
                (k3 = b3.getAttribute("id")) ? k3 = k3.replace(aa2, "\\$&") : b3.setAttribute("id", k3 = u2), r3 = g2(a3), h3 = r3.length, l3 = V2.test(k3) ? "#" + k3 : "[id='" + k3 + "']";
                while (h3--)
                  r3[h3] = l3 + " " + qa2(r3[h3]);
                s3 = r3.join(","), w3 = _2.test(a3) && oa2(b3.parentNode) || b3;
              }
              if (s3)
                try {
                  return H2.apply(d3, w3.querySelectorAll(s3)), d3;
                } catch (y3) {
                } finally {
                  k3 === u2 && b3.removeAttribute("id");
                }
            }
          }
          return i2(a3.replace(Q2, "$1"), b3, d3, e3);
        }
        function ga2() {
          var a3 = [];
          function b3(c3, e3) {
            return a3.push(c3 + " ") > d2.cacheLength && delete b3[a3.shift()], b3[c3 + " "] = e3;
          }
          return b3;
        }
        function ha2(a3) {
          return a3[u2] = true, a3;
        }
        function ia2(a3) {
          var b3 = n2.createElement("div");
          try {
            return !!a3(b3);
          } catch (c3) {
            return false;
          } finally {
            b3.parentNode && b3.parentNode.removeChild(b3), b3 = null;
          }
        }
        function ja2(a3, b3) {
          var c3 = a3.split("|"), e3 = c3.length;
          while (e3--)
            d2.attrHandle[c3[e3]] = b3;
        }
        function ka2(a3, b3) {
          var c3 = b3 && a3, d3 = c3 && 1 === a3.nodeType && 1 === b3.nodeType && (~b3.sourceIndex || C2) - (~a3.sourceIndex || C2);
          if (d3)
            return d3;
          if (c3) {
            while (c3 = c3.nextSibling)
              if (c3 === b3)
                return -1;
          }
          return a3 ? 1 : -1;
        }
        function la2(a3) {
          return function(b3) {
            var c3 = b3.nodeName.toLowerCase();
            return "input" === c3 && b3.type === a3;
          };
        }
        function ma2(a3) {
          return function(b3) {
            var c3 = b3.nodeName.toLowerCase();
            return ("input" === c3 || "button" === c3) && b3.type === a3;
          };
        }
        function na2(a3) {
          return ha2(function(b3) {
            return b3 = +b3, ha2(function(c3, d3) {
              var e3, f3 = a3([], c3.length, b3), g3 = f3.length;
              while (g3--)
                c3[e3 = f3[g3]] && (c3[e3] = !(d3[e3] = c3[e3]));
            });
          });
        }
        function oa2(a3) {
          return a3 && "undefined" != typeof a3.getElementsByTagName && a3;
        }
        c2 = fa2.support = {}, f2 = fa2.isXML = function(a3) {
          var b3 = a3 && (a3.ownerDocument || a3).documentElement;
          return b3 ? "HTML" !== b3.nodeName : false;
        }, m2 = fa2.setDocument = function(a3) {
          var b3, e3, g3 = a3 ? a3.ownerDocument || a3 : v2;
          return g3 !== n2 && 9 === g3.nodeType && g3.documentElement ? (n2 = g3, o2 = n2.documentElement, p2 = !f2(n2), (e3 = n2.defaultView) && e3.top !== e3 && (e3.addEventListener ? e3.addEventListener("unload", da2, false) : e3.attachEvent && e3.attachEvent("onunload", da2)), c2.attributes = ia2(function(a4) {
            return a4.className = "i", !a4.getAttribute("className");
          }), c2.getElementsByTagName = ia2(function(a4) {
            return a4.appendChild(n2.createComment("")), !a4.getElementsByTagName("*").length;
          }), c2.getElementsByClassName = Z2.test(n2.getElementsByClassName), c2.getById = ia2(function(a4) {
            return o2.appendChild(a4).id = u2, !n2.getElementsByName || !n2.getElementsByName(u2).length;
          }), c2.getById ? (d2.find.ID = function(a4, b4) {
            if ("undefined" != typeof b4.getElementById && p2) {
              var c3 = b4.getElementById(a4);
              return c3 ? [c3] : [];
            }
          }, d2.filter.ID = function(a4) {
            var b4 = a4.replace(ba2, ca2);
            return function(a5) {
              return a5.getAttribute("id") === b4;
            };
          }) : (delete d2.find.ID, d2.filter.ID = function(a4) {
            var b4 = a4.replace(ba2, ca2);
            return function(a5) {
              var c3 = "undefined" != typeof a5.getAttributeNode && a5.getAttributeNode("id");
              return c3 && c3.value === b4;
            };
          }), d2.find.TAG = c2.getElementsByTagName ? function(a4, b4) {
            return "undefined" != typeof b4.getElementsByTagName ? b4.getElementsByTagName(a4) : c2.qsa ? b4.querySelectorAll(a4) : void 0;
          } : function(a4, b4) {
            var c3, d3 = [], e4 = 0, f3 = b4.getElementsByTagName(a4);
            if ("*" === a4) {
              while (c3 = f3[e4++])
                1 === c3.nodeType && d3.push(c3);
              return d3;
            }
            return f3;
          }, d2.find.CLASS = c2.getElementsByClassName && function(a4, b4) {
            return "undefined" != typeof b4.getElementsByClassName && p2 ? b4.getElementsByClassName(a4) : void 0;
          }, r2 = [], q2 = [], (c2.qsa = Z2.test(n2.querySelectorAll)) && (ia2(function(a4) {
            o2.appendChild(a4).innerHTML = "<a id='" + u2 + "'></a><select id='" + u2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", a4.querySelectorAll("[msallowcapture^='']").length && q2.push("[*^$]=" + L2 + `*(?:''|"")`), a4.querySelectorAll("[selected]").length || q2.push("\\[" + L2 + "*(?:value|" + K2 + ")"), a4.querySelectorAll("[id~=" + u2 + "-]").length || q2.push("~="), a4.querySelectorAll(":checked").length || q2.push(":checked"), a4.querySelectorAll("a#" + u2 + "+*").length || q2.push(".#.+[+~]");
          }), ia2(function(a4) {
            var b4 = n2.createElement("input");
            b4.setAttribute("type", "hidden"), a4.appendChild(b4).setAttribute("name", "D"), a4.querySelectorAll("[name=d]").length && q2.push("name" + L2 + "*[*^$|!~]?="), a4.querySelectorAll(":enabled").length || q2.push(":enabled", ":disabled"), a4.querySelectorAll("*,:x"), q2.push(",.*:");
          })), (c2.matchesSelector = Z2.test(s2 = o2.matches || o2.webkitMatchesSelector || o2.mozMatchesSelector || o2.oMatchesSelector || o2.msMatchesSelector)) && ia2(function(a4) {
            c2.disconnectedMatch = s2.call(a4, "div"), s2.call(a4, "[s!='']:x"), r2.push("!=", O2);
          }), q2 = q2.length && new RegExp(q2.join("|")), r2 = r2.length && new RegExp(r2.join("|")), b3 = Z2.test(o2.compareDocumentPosition), t2 = b3 || Z2.test(o2.contains) ? function(a4, b4) {
            var c3 = 9 === a4.nodeType ? a4.documentElement : a4, d3 = b4 && b4.parentNode;
            return a4 === d3 || !(!d3 || 1 !== d3.nodeType || !(c3.contains ? c3.contains(d3) : a4.compareDocumentPosition && 16 & a4.compareDocumentPosition(d3)));
          } : function(a4, b4) {
            if (b4) {
              while (b4 = b4.parentNode)
                if (b4 === a4)
                  return true;
            }
            return false;
          }, B2 = b3 ? function(a4, b4) {
            if (a4 === b4)
              return l2 = true, 0;
            var d3 = !a4.compareDocumentPosition - !b4.compareDocumentPosition;
            return d3 ? d3 : (d3 = (a4.ownerDocument || a4) === (b4.ownerDocument || b4) ? a4.compareDocumentPosition(b4) : 1, 1 & d3 || !c2.sortDetached && b4.compareDocumentPosition(a4) === d3 ? a4 === n2 || a4.ownerDocument === v2 && t2(v2, a4) ? -1 : b4 === n2 || b4.ownerDocument === v2 && t2(v2, b4) ? 1 : k2 ? J2(k2, a4) - J2(k2, b4) : 0 : 4 & d3 ? -1 : 1);
          } : function(a4, b4) {
            if (a4 === b4)
              return l2 = true, 0;
            var c3, d3 = 0, e4 = a4.parentNode, f3 = b4.parentNode, g4 = [a4], h3 = [b4];
            if (!e4 || !f3)
              return a4 === n2 ? -1 : b4 === n2 ? 1 : e4 ? -1 : f3 ? 1 : k2 ? J2(k2, a4) - J2(k2, b4) : 0;
            if (e4 === f3)
              return ka2(a4, b4);
            c3 = a4;
            while (c3 = c3.parentNode)
              g4.unshift(c3);
            c3 = b4;
            while (c3 = c3.parentNode)
              h3.unshift(c3);
            while (g4[d3] === h3[d3])
              d3++;
            return d3 ? ka2(g4[d3], h3[d3]) : g4[d3] === v2 ? -1 : h3[d3] === v2 ? 1 : 0;
          }, n2) : n2;
        }, fa2.matches = function(a3, b3) {
          return fa2(a3, null, null, b3);
        }, fa2.matchesSelector = function(a3, b3) {
          if ((a3.ownerDocument || a3) !== n2 && m2(a3), b3 = b3.replace(T2, "='$1']"), c2.matchesSelector && p2 && !A2[b3 + " "] && (!r2 || !r2.test(b3)) && (!q2 || !q2.test(b3)))
            try {
              var d3 = s2.call(a3, b3);
              if (d3 || c2.disconnectedMatch || a3.document && 11 !== a3.document.nodeType)
                return d3;
            } catch (e3) {
            }
          return fa2(b3, n2, null, [a3]).length > 0;
        }, fa2.contains = function(a3, b3) {
          return (a3.ownerDocument || a3) !== n2 && m2(a3), t2(a3, b3);
        }, fa2.attr = function(a3, b3) {
          (a3.ownerDocument || a3) !== n2 && m2(a3);
          var e3 = d2.attrHandle[b3.toLowerCase()], f3 = e3 && D2.call(d2.attrHandle, b3.toLowerCase()) ? e3(a3, b3, !p2) : void 0;
          return void 0 !== f3 ? f3 : c2.attributes || !p2 ? a3.getAttribute(b3) : (f3 = a3.getAttributeNode(b3)) && f3.specified ? f3.value : null;
        }, fa2.error = function(a3) {
          throw new Error("Syntax error, unrecognized expression: " + a3);
        }, fa2.uniqueSort = function(a3) {
          var b3, d3 = [], e3 = 0, f3 = 0;
          if (l2 = !c2.detectDuplicates, k2 = !c2.sortStable && a3.slice(0), a3.sort(B2), l2) {
            while (b3 = a3[f3++])
              b3 === a3[f3] && (e3 = d3.push(f3));
            while (e3--)
              a3.splice(d3[e3], 1);
          }
          return k2 = null, a3;
        }, e2 = fa2.getText = function(a3) {
          var b3, c3 = "", d3 = 0, f3 = a3.nodeType;
          if (f3) {
            if (1 === f3 || 9 === f3 || 11 === f3) {
              if ("string" == typeof a3.textContent)
                return a3.textContent;
              for (a3 = a3.firstChild; a3; a3 = a3.nextSibling)
                c3 += e2(a3);
            } else if (3 === f3 || 4 === f3)
              return a3.nodeValue;
          } else
            while (b3 = a3[d3++])
              c3 += e2(b3);
          return c3;
        }, d2 = fa2.selectors = { cacheLength: 50, createPseudo: ha2, match: W2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a3) {
          return a3[1] = a3[1].replace(ba2, ca2), a3[3] = (a3[3] || a3[4] || a3[5] || "").replace(ba2, ca2), "~=" === a3[2] && (a3[3] = " " + a3[3] + " "), a3.slice(0, 4);
        }, CHILD: function(a3) {
          return a3[1] = a3[1].toLowerCase(), "nth" === a3[1].slice(0, 3) ? (a3[3] || fa2.error(a3[0]), a3[4] = +(a3[4] ? a3[5] + (a3[6] || 1) : 2 * ("even" === a3[3] || "odd" === a3[3])), a3[5] = +(a3[7] + a3[8] || "odd" === a3[3])) : a3[3] && fa2.error(a3[0]), a3;
        }, PSEUDO: function(a3) {
          var b3, c3 = !a3[6] && a3[2];
          return W2.CHILD.test(a3[0]) ? null : (a3[3] ? a3[2] = a3[4] || a3[5] || "" : c3 && U2.test(c3) && (b3 = g2(c3, true)) && (b3 = c3.indexOf(")", c3.length - b3) - c3.length) && (a3[0] = a3[0].slice(0, b3), a3[2] = c3.slice(0, b3)), a3.slice(0, 3));
        } }, filter: { TAG: function(a3) {
          var b3 = a3.replace(ba2, ca2).toLowerCase();
          return "*" === a3 ? function() {
            return true;
          } : function(a4) {
            return a4.nodeName && a4.nodeName.toLowerCase() === b3;
          };
        }, CLASS: function(a3) {
          var b3 = y2[a3 + " "];
          return b3 || (b3 = new RegExp("(^|" + L2 + ")" + a3 + "(" + L2 + "|$)")) && y2(a3, function(a4) {
            return b3.test("string" == typeof a4.className && a4.className || "undefined" != typeof a4.getAttribute && a4.getAttribute("class") || "");
          });
        }, ATTR: function(a3, b3, c3) {
          return function(d3) {
            var e3 = fa2.attr(d3, a3);
            return null == e3 ? "!=" === b3 : b3 ? (e3 += "", "=" === b3 ? e3 === c3 : "!=" === b3 ? e3 !== c3 : "^=" === b3 ? c3 && 0 === e3.indexOf(c3) : "*=" === b3 ? c3 && e3.indexOf(c3) > -1 : "$=" === b3 ? c3 && e3.slice(-c3.length) === c3 : "~=" === b3 ? (" " + e3.replace(P2, " ") + " ").indexOf(c3) > -1 : "|=" === b3 ? e3 === c3 || e3.slice(0, c3.length + 1) === c3 + "-" : false) : true;
          };
        }, CHILD: function(a3, b3, c3, d3, e3) {
          var f3 = "nth" !== a3.slice(0, 3), g3 = "last" !== a3.slice(-4), h3 = "of-type" === b3;
          return 1 === d3 && 0 === e3 ? function(a4) {
            return !!a4.parentNode;
          } : function(b4, c4, i3) {
            var j3, k3, l3, m3, n3, o3, p3 = f3 !== g3 ? "nextSibling" : "previousSibling", q3 = b4.parentNode, r3 = h3 && b4.nodeName.toLowerCase(), s3 = !i3 && !h3, t3 = false;
            if (q3) {
              if (f3) {
                while (p3) {
                  m3 = b4;
                  while (m3 = m3[p3])
                    if (h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType)
                      return false;
                  o3 = p3 = "only" === a3 && !o3 && "nextSibling";
                }
                return true;
              }
              if (o3 = [g3 ? q3.firstChild : q3.lastChild], g3 && s3) {
                m3 = q3, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3 && j3[2], m3 = n3 && q3.childNodes[n3];
                while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop())
                  if (1 === m3.nodeType && ++t3 && m3 === b4) {
                    k3[a3] = [w2, n3, t3];
                    break;
                  }
              } else if (s3 && (m3 = b4, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3), t3 === false) {
                while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop())
                  if ((h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType) && ++t3 && (s3 && (l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), k3[a3] = [w2, t3]), m3 === b4))
                    break;
              }
              return t3 -= e3, t3 === d3 || t3 % d3 === 0 && t3 / d3 >= 0;
            }
          };
        }, PSEUDO: function(a3, b3) {
          var c3, e3 = d2.pseudos[a3] || d2.setFilters[a3.toLowerCase()] || fa2.error("unsupported pseudo: " + a3);
          return e3[u2] ? e3(b3) : e3.length > 1 ? (c3 = [a3, a3, "", b3], d2.setFilters.hasOwnProperty(a3.toLowerCase()) ? ha2(function(a4, c4) {
            var d3, f3 = e3(a4, b3), g3 = f3.length;
            while (g3--)
              d3 = J2(a4, f3[g3]), a4[d3] = !(c4[d3] = f3[g3]);
          }) : function(a4) {
            return e3(a4, 0, c3);
          }) : e3;
        } }, pseudos: { not: ha2(function(a3) {
          var b3 = [], c3 = [], d3 = h2(a3.replace(Q2, "$1"));
          return d3[u2] ? ha2(function(a4, b4, c4, e3) {
            var f3, g3 = d3(a4, null, e3, []), h3 = a4.length;
            while (h3--)
              (f3 = g3[h3]) && (a4[h3] = !(b4[h3] = f3));
          }) : function(a4, e3, f3) {
            return b3[0] = a4, d3(b3, null, f3, c3), b3[0] = null, !c3.pop();
          };
        }), has: ha2(function(a3) {
          return function(b3) {
            return fa2(a3, b3).length > 0;
          };
        }), contains: ha2(function(a3) {
          return a3 = a3.replace(ba2, ca2), function(b3) {
            return (b3.textContent || b3.innerText || e2(b3)).indexOf(a3) > -1;
          };
        }), lang: ha2(function(a3) {
          return V2.test(a3 || "") || fa2.error("unsupported lang: " + a3), a3 = a3.replace(ba2, ca2).toLowerCase(), function(b3) {
            var c3;
            do
              if (c3 = p2 ? b3.lang : b3.getAttribute("xml:lang") || b3.getAttribute("lang"))
                return c3 = c3.toLowerCase(), c3 === a3 || 0 === c3.indexOf(a3 + "-");
            while ((b3 = b3.parentNode) && 1 === b3.nodeType);
            return false;
          };
        }), target: function(b3) {
          var c3 = a2.location && a2.location.hash;
          return c3 && c3.slice(1) === b3.id;
        }, root: function(a3) {
          return a3 === o2;
        }, focus: function(a3) {
          return a3 === n2.activeElement && (!n2.hasFocus || n2.hasFocus()) && !!(a3.type || a3.href || ~a3.tabIndex);
        }, enabled: function(a3) {
          return a3.disabled === false;
        }, disabled: function(a3) {
          return a3.disabled === true;
        }, checked: function(a3) {
          var b3 = a3.nodeName.toLowerCase();
          return "input" === b3 && !!a3.checked || "option" === b3 && !!a3.selected;
        }, selected: function(a3) {
          return a3.parentNode && a3.parentNode.selectedIndex, a3.selected === true;
        }, empty: function(a3) {
          for (a3 = a3.firstChild; a3; a3 = a3.nextSibling)
            if (a3.nodeType < 6)
              return false;
          return true;
        }, parent: function(a3) {
          return !d2.pseudos.empty(a3);
        }, header: function(a3) {
          return Y2.test(a3.nodeName);
        }, input: function(a3) {
          return X2.test(a3.nodeName);
        }, button: function(a3) {
          var b3 = a3.nodeName.toLowerCase();
          return "input" === b3 && "button" === a3.type || "button" === b3;
        }, text: function(a3) {
          var b3;
          return "input" === a3.nodeName.toLowerCase() && "text" === a3.type && (null == (b3 = a3.getAttribute("type")) || "text" === b3.toLowerCase());
        }, first: na2(function() {
          return [0];
        }), last: na2(function(a3, b3) {
          return [b3 - 1];
        }), eq: na2(function(a3, b3, c3) {
          return [0 > c3 ? c3 + b3 : c3];
        }), even: na2(function(a3, b3) {
          for (var c3 = 0; b3 > c3; c3 += 2)
            a3.push(c3);
          return a3;
        }), odd: na2(function(a3, b3) {
          for (var c3 = 1; b3 > c3; c3 += 2)
            a3.push(c3);
          return a3;
        }), lt: na2(function(a3, b3, c3) {
          for (var d3 = 0 > c3 ? c3 + b3 : c3; --d3 >= 0; )
            a3.push(d3);
          return a3;
        }), gt: na2(function(a3, b3, c3) {
          for (var d3 = 0 > c3 ? c3 + b3 : c3; ++d3 < b3; )
            a3.push(d3);
          return a3;
        }) } }, d2.pseudos.nth = d2.pseudos.eq;
        for (b2 in { radio: true, checkbox: true, file: true, password: true, image: true })
          d2.pseudos[b2] = la2(b2);
        for (b2 in { submit: true, reset: true })
          d2.pseudos[b2] = ma2(b2);
        function pa2() {
        }
        pa2.prototype = d2.filters = d2.pseudos, d2.setFilters = new pa2(), g2 = fa2.tokenize = function(a3, b3) {
          var c3, e3, f3, g3, h3, i3, j3, k3 = z2[a3 + " "];
          if (k3)
            return b3 ? 0 : k3.slice(0);
          h3 = a3, i3 = [], j3 = d2.preFilter;
          while (h3) {
            c3 && !(e3 = R2.exec(h3)) || (e3 && (h3 = h3.slice(e3[0].length) || h3), i3.push(f3 = [])), c3 = false, (e3 = S2.exec(h3)) && (c3 = e3.shift(), f3.push({ value: c3, type: e3[0].replace(Q2, " ") }), h3 = h3.slice(c3.length));
            for (g3 in d2.filter)
              !(e3 = W2[g3].exec(h3)) || j3[g3] && !(e3 = j3[g3](e3)) || (c3 = e3.shift(), f3.push({ value: c3, type: g3, matches: e3 }), h3 = h3.slice(c3.length));
            if (!c3)
              break;
          }
          return b3 ? h3.length : h3 ? fa2.error(a3) : z2(a3, i3).slice(0);
        };
        function qa2(a3) {
          for (var b3 = 0, c3 = a3.length, d3 = ""; c3 > b3; b3++)
            d3 += a3[b3].value;
          return d3;
        }
        function ra2(a3, b3, c3) {
          var d3 = b3.dir, e3 = c3 && "parentNode" === d3, f3 = x2++;
          return b3.first ? function(b4, c4, f4) {
            while (b4 = b4[d3])
              if (1 === b4.nodeType || e3)
                return a3(b4, c4, f4);
          } : function(b4, c4, g3) {
            var h3, i3, j3, k3 = [w2, f3];
            if (g3) {
              while (b4 = b4[d3])
                if ((1 === b4.nodeType || e3) && a3(b4, c4, g3))
                  return true;
            } else
              while (b4 = b4[d3])
                if (1 === b4.nodeType || e3) {
                  if (j3 = b4[u2] || (b4[u2] = {}), i3 = j3[b4.uniqueID] || (j3[b4.uniqueID] = {}), (h3 = i3[d3]) && h3[0] === w2 && h3[1] === f3)
                    return k3[2] = h3[2];
                  if (i3[d3] = k3, k3[2] = a3(b4, c4, g3))
                    return true;
                }
          };
        }
        function sa2(a3) {
          return a3.length > 1 ? function(b3, c3, d3) {
            var e3 = a3.length;
            while (e3--)
              if (!a3[e3](b3, c3, d3))
                return false;
            return true;
          } : a3[0];
        }
        function ta2(a3, b3, c3) {
          for (var d3 = 0, e3 = b3.length; e3 > d3; d3++)
            fa2(a3, b3[d3], c3);
          return c3;
        }
        function ua2(a3, b3, c3, d3, e3) {
          for (var f3, g3 = [], h3 = 0, i3 = a3.length, j3 = null != b3; i3 > h3; h3++)
            (f3 = a3[h3]) && (c3 && !c3(f3, d3, e3) || (g3.push(f3), j3 && b3.push(h3)));
          return g3;
        }
        function va2(a3, b3, c3, d3, e3, f3) {
          return d3 && !d3[u2] && (d3 = va2(d3)), e3 && !e3[u2] && (e3 = va2(e3, f3)), ha2(function(f4, g3, h3, i3) {
            var j3, k3, l3, m3 = [], n3 = [], o3 = g3.length, p3 = f4 || ta2(b3 || "*", h3.nodeType ? [h3] : h3, []), q3 = !a3 || !f4 && b3 ? p3 : ua2(p3, m3, a3, h3, i3), r3 = c3 ? e3 || (f4 ? a3 : o3 || d3) ? [] : g3 : q3;
            if (c3 && c3(q3, r3, h3, i3), d3) {
              j3 = ua2(r3, n3), d3(j3, [], h3, i3), k3 = j3.length;
              while (k3--)
                (l3 = j3[k3]) && (r3[n3[k3]] = !(q3[n3[k3]] = l3));
            }
            if (f4) {
              if (e3 || a3) {
                if (e3) {
                  j3 = [], k3 = r3.length;
                  while (k3--)
                    (l3 = r3[k3]) && j3.push(q3[k3] = l3);
                  e3(null, r3 = [], j3, i3);
                }
                k3 = r3.length;
                while (k3--)
                  (l3 = r3[k3]) && (j3 = e3 ? J2(f4, l3) : m3[k3]) > -1 && (f4[j3] = !(g3[j3] = l3));
              }
            } else
              r3 = ua2(r3 === g3 ? r3.splice(o3, r3.length) : r3), e3 ? e3(null, g3, r3, i3) : H2.apply(g3, r3);
          });
        }
        function wa2(a3) {
          for (var b3, c3, e3, f3 = a3.length, g3 = d2.relative[a3[0].type], h3 = g3 || d2.relative[" "], i3 = g3 ? 1 : 0, k3 = ra2(function(a4) {
            return a4 === b3;
          }, h3, true), l3 = ra2(function(a4) {
            return J2(b3, a4) > -1;
          }, h3, true), m3 = [function(a4, c4, d3) {
            var e4 = !g3 && (d3 || c4 !== j2) || ((b3 = c4).nodeType ? k3(a4, c4, d3) : l3(a4, c4, d3));
            return b3 = null, e4;
          }]; f3 > i3; i3++)
            if (c3 = d2.relative[a3[i3].type])
              m3 = [ra2(sa2(m3), c3)];
            else {
              if (c3 = d2.filter[a3[i3].type].apply(null, a3[i3].matches), c3[u2]) {
                for (e3 = ++i3; f3 > e3; e3++)
                  if (d2.relative[a3[e3].type])
                    break;
                return va2(i3 > 1 && sa2(m3), i3 > 1 && qa2(a3.slice(0, i3 - 1).concat({ value: " " === a3[i3 - 2].type ? "*" : "" })).replace(Q2, "$1"), c3, e3 > i3 && wa2(a3.slice(i3, e3)), f3 > e3 && wa2(a3 = a3.slice(e3)), f3 > e3 && qa2(a3));
              }
              m3.push(c3);
            }
          return sa2(m3);
        }
        function xa2(a3, b3) {
          var c3 = b3.length > 0, e3 = a3.length > 0, f3 = function(f4, g3, h3, i3, k3) {
            var l3, o3, q3, r3 = 0, s3 = "0", t3 = f4 && [], u3 = [], v3 = j2, x3 = f4 || e3 && d2.find.TAG("*", k3), y3 = w2 += null == v3 ? 1 : Math.random() || 0.1, z3 = x3.length;
            for (k3 && (j2 = g3 === n2 || g3 || k3); s3 !== z3 && null != (l3 = x3[s3]); s3++) {
              if (e3 && l3) {
                o3 = 0, g3 || l3.ownerDocument === n2 || (m2(l3), h3 = !p2);
                while (q3 = a3[o3++])
                  if (q3(l3, g3 || n2, h3)) {
                    i3.push(l3);
                    break;
                  }
                k3 && (w2 = y3);
              }
              c3 && ((l3 = !q3 && l3) && r3--, f4 && t3.push(l3));
            }
            if (r3 += s3, c3 && s3 !== r3) {
              o3 = 0;
              while (q3 = b3[o3++])
                q3(t3, u3, g3, h3);
              if (f4) {
                if (r3 > 0)
                  while (s3--)
                    t3[s3] || u3[s3] || (u3[s3] = F2.call(i3));
                u3 = ua2(u3);
              }
              H2.apply(i3, u3), k3 && !f4 && u3.length > 0 && r3 + b3.length > 1 && fa2.uniqueSort(i3);
            }
            return k3 && (w2 = y3, j2 = v3), t3;
          };
          return c3 ? ha2(f3) : f3;
        }
        return h2 = fa2.compile = function(a3, b3) {
          var c3, d3 = [], e3 = [], f3 = A2[a3 + " "];
          if (!f3) {
            b3 || (b3 = g2(a3)), c3 = b3.length;
            while (c3--)
              f3 = wa2(b3[c3]), f3[u2] ? d3.push(f3) : e3.push(f3);
            f3 = A2(a3, xa2(e3, d3)), f3.selector = a3;
          }
          return f3;
        }, i2 = fa2.select = function(a3, b3, e3, f3) {
          var i3, j3, k3, l3, m3, n3 = "function" == typeof a3 && a3, o3 = !f3 && g2(a3 = n3.selector || a3);
          if (e3 = e3 || [], 1 === o3.length) {
            if (j3 = o3[0] = o3[0].slice(0), j3.length > 2 && "ID" === (k3 = j3[0]).type && c2.getById && 9 === b3.nodeType && p2 && d2.relative[j3[1].type]) {
              if (b3 = (d2.find.ID(k3.matches[0].replace(ba2, ca2), b3) || [])[0], !b3)
                return e3;
              n3 && (b3 = b3.parentNode), a3 = a3.slice(j3.shift().value.length);
            }
            i3 = W2.needsContext.test(a3) ? 0 : j3.length;
            while (i3--) {
              if (k3 = j3[i3], d2.relative[l3 = k3.type])
                break;
              if ((m3 = d2.find[l3]) && (f3 = m3(k3.matches[0].replace(ba2, ca2), _2.test(j3[0].type) && oa2(b3.parentNode) || b3))) {
                if (j3.splice(i3, 1), a3 = f3.length && qa2(j3), !a3)
                  return H2.apply(e3, f3), e3;
                break;
              }
            }
          }
          return (n3 || h2(a3, o3))(f3, b3, !p2, e3, !b3 || _2.test(a3) && oa2(b3.parentNode) || b3), e3;
        }, c2.sortStable = u2.split("").sort(B2).join("") === u2, c2.detectDuplicates = !!l2, m2(), c2.sortDetached = ia2(function(a3) {
          return 1 & a3.compareDocumentPosition(n2.createElement("div"));
        }), ia2(function(a3) {
          return a3.innerHTML = "<a href='#'></a>", "#" === a3.firstChild.getAttribute("href");
        }) || ja2("type|href|height|width", function(a3, b3, c3) {
          return c3 ? void 0 : a3.getAttribute(b3, "type" === b3.toLowerCase() ? 1 : 2);
        }), c2.attributes && ia2(function(a3) {
          return a3.innerHTML = "<input/>", a3.firstChild.setAttribute("value", ""), "" === a3.firstChild.getAttribute("value");
        }) || ja2("value", function(a3, b3, c3) {
          return c3 || "input" !== a3.nodeName.toLowerCase() ? void 0 : a3.defaultValue;
        }), ia2(function(a3) {
          return null == a3.getAttribute("disabled");
        }) || ja2(K2, function(a3, b3, c3) {
          var d3;
          return c3 ? void 0 : a3[b3] === true ? b3.toLowerCase() : (d3 = a3.getAttributeNode(b3)) && d3.specified ? d3.value : null;
        }), fa2;
      }(a);
      n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
      var u = function(a2, b2, c2) {
        var d2 = [], e2 = void 0 !== c2;
        while ((a2 = a2[b2]) && 9 !== a2.nodeType)
          if (1 === a2.nodeType) {
            if (e2 && n(a2).is(c2))
              break;
            d2.push(a2);
          }
        return d2;
      }, v = function(a2, b2) {
        for (var c2 = []; a2; a2 = a2.nextSibling)
          1 === a2.nodeType && a2 !== b2 && c2.push(a2);
        return c2;
      }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
      function z(a2, b2, c2) {
        if (n.isFunction(b2))
          return n.grep(a2, function(a3, d2) {
            return !!b2.call(a3, d2, a3) !== c2;
          });
        if (b2.nodeType)
          return n.grep(a2, function(a3) {
            return a3 === b2 !== c2;
          });
        if ("string" == typeof b2) {
          if (y.test(b2))
            return n.filter(b2, a2, c2);
          b2 = n.filter(b2, a2);
        }
        return n.grep(a2, function(a3) {
          return n.inArray(a3, b2) > -1 !== c2;
        });
      }
      n.filter = function(a2, b2, c2) {
        var d2 = b2[0];
        return c2 && (a2 = ":not(" + a2 + ")"), 1 === b2.length && 1 === d2.nodeType ? n.find.matchesSelector(d2, a2) ? [d2] : [] : n.find.matches(a2, n.grep(b2, function(a3) {
          return 1 === a3.nodeType;
        }));
      }, n.fn.extend({ find: function(a2) {
        var b2, c2 = [], d2 = this, e2 = d2.length;
        if ("string" != typeof a2)
          return this.pushStack(n(a2).filter(function() {
            for (b2 = 0; e2 > b2; b2++)
              if (n.contains(d2[b2], this))
                return true;
          }));
        for (b2 = 0; e2 > b2; b2++)
          n.find(a2, d2[b2], c2);
        return c2 = this.pushStack(e2 > 1 ? n.unique(c2) : c2), c2.selector = this.selector ? this.selector + " " + a2 : a2, c2;
      }, filter: function(a2) {
        return this.pushStack(z(this, a2 || [], false));
      }, not: function(a2) {
        return this.pushStack(z(this, a2 || [], true));
      }, is: function(a2) {
        return !!z(this, "string" == typeof a2 && w.test(a2) ? n(a2) : a2 || [], false).length;
      } });
      var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a2, b2, c2) {
        var e2, f2;
        if (!a2)
          return this;
        if (c2 = c2 || A, "string" == typeof a2) {
          if (e2 = "<" === a2.charAt(0) && ">" === a2.charAt(a2.length - 1) && a2.length >= 3 ? [null, a2, null] : B.exec(a2), !e2 || !e2[1] && b2)
            return !b2 || b2.jquery ? (b2 || c2).find(a2) : this.constructor(b2).find(a2);
          if (e2[1]) {
            if (b2 = b2 instanceof n ? b2[0] : b2, n.merge(this, n.parseHTML(e2[1], b2 && b2.nodeType ? b2.ownerDocument || b2 : d, true)), x.test(e2[1]) && n.isPlainObject(b2))
              for (e2 in b2)
                n.isFunction(this[e2]) ? this[e2](b2[e2]) : this.attr(e2, b2[e2]);
            return this;
          }
          if (f2 = d.getElementById(e2[2]), f2 && f2.parentNode) {
            if (f2.id !== e2[2])
              return A.find(a2);
            this.length = 1, this[0] = f2;
          }
          return this.context = d, this.selector = a2, this;
        }
        return a2.nodeType ? (this.context = this[0] = a2, this.length = 1, this) : n.isFunction(a2) ? "undefined" != typeof c2.ready ? c2.ready(a2) : a2(n) : (void 0 !== a2.selector && (this.selector = a2.selector, this.context = a2.context), n.makeArray(a2, this));
      };
      C.prototype = n.fn, A = n(d);
      var D = /^(?:parents|prev(?:Until|All))/, E = { children: true, contents: true, next: true, prev: true };
      n.fn.extend({ has: function(a2) {
        var b2, c2 = n(a2, this), d2 = c2.length;
        return this.filter(function() {
          for (b2 = 0; d2 > b2; b2++)
            if (n.contains(this, c2[b2]))
              return true;
        });
      }, closest: function(a2, b2) {
        for (var c2, d2 = 0, e2 = this.length, f2 = [], g2 = w.test(a2) || "string" != typeof a2 ? n(a2, b2 || this.context) : 0; e2 > d2; d2++)
          for (c2 = this[d2]; c2 && c2 !== b2; c2 = c2.parentNode)
            if (c2.nodeType < 11 && (g2 ? g2.index(c2) > -1 : 1 === c2.nodeType && n.find.matchesSelector(c2, a2))) {
              f2.push(c2);
              break;
            }
        return this.pushStack(f2.length > 1 ? n.uniqueSort(f2) : f2);
      }, index: function(a2) {
        return a2 ? "string" == typeof a2 ? n.inArray(this[0], n(a2)) : n.inArray(a2.jquery ? a2[0] : a2, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function(a2, b2) {
        return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a2, b2))));
      }, addBack: function(a2) {
        return this.add(null == a2 ? this.prevObject : this.prevObject.filter(a2));
      } });
      function F(a2, b2) {
        do
          a2 = a2[b2];
        while (a2 && 1 !== a2.nodeType);
        return a2;
      }
      n.each({ parent: function(a2) {
        var b2 = a2.parentNode;
        return b2 && 11 !== b2.nodeType ? b2 : null;
      }, parents: function(a2) {
        return u(a2, "parentNode");
      }, parentsUntil: function(a2, b2, c2) {
        return u(a2, "parentNode", c2);
      }, next: function(a2) {
        return F(a2, "nextSibling");
      }, prev: function(a2) {
        return F(a2, "previousSibling");
      }, nextAll: function(a2) {
        return u(a2, "nextSibling");
      }, prevAll: function(a2) {
        return u(a2, "previousSibling");
      }, nextUntil: function(a2, b2, c2) {
        return u(a2, "nextSibling", c2);
      }, prevUntil: function(a2, b2, c2) {
        return u(a2, "previousSibling", c2);
      }, siblings: function(a2) {
        return v((a2.parentNode || {}).firstChild, a2);
      }, children: function(a2) {
        return v(a2.firstChild);
      }, contents: function(a2) {
        return n.nodeName(a2, "iframe") ? a2.contentDocument || a2.contentWindow.document : n.merge([], a2.childNodes);
      } }, function(a2, b2) {
        n.fn[a2] = function(c2, d2) {
          var e2 = n.map(this, b2, c2);
          return "Until" !== a2.slice(-5) && (d2 = c2), d2 && "string" == typeof d2 && (e2 = n.filter(d2, e2)), this.length > 1 && (E[a2] || (e2 = n.uniqueSort(e2)), D.test(a2) && (e2 = e2.reverse())), this.pushStack(e2);
        };
      });
      var G = /\S+/g;
      function H(a2) {
        var b2 = {};
        return n.each(a2.match(G) || [], function(a3, c2) {
          b2[c2] = true;
        }), b2;
      }
      n.Callbacks = function(a2) {
        a2 = "string" == typeof a2 ? H(a2) : n.extend({}, a2);
        var b2, c2, d2, e2, f2 = [], g2 = [], h2 = -1, i2 = function() {
          for (e2 = a2.once, d2 = b2 = true; g2.length; h2 = -1) {
            c2 = g2.shift();
            while (++h2 < f2.length)
              f2[h2].apply(c2[0], c2[1]) === false && a2.stopOnFalse && (h2 = f2.length, c2 = false);
          }
          a2.memory || (c2 = false), b2 = false, e2 && (f2 = c2 ? [] : "");
        }, j2 = { add: function() {
          return f2 && (c2 && !b2 && (h2 = f2.length - 1, g2.push(c2)), function d3(b3) {
            n.each(b3, function(b4, c3) {
              n.isFunction(c3) ? a2.unique && j2.has(c3) || f2.push(c3) : c3 && c3.length && "string" !== n.type(c3) && d3(c3);
            });
          }(arguments), c2 && !b2 && i2()), this;
        }, remove: function() {
          return n.each(arguments, function(a3, b3) {
            var c3;
            while ((c3 = n.inArray(b3, f2, c3)) > -1)
              f2.splice(c3, 1), h2 >= c3 && h2--;
          }), this;
        }, has: function(a3) {
          return a3 ? n.inArray(a3, f2) > -1 : f2.length > 0;
        }, empty: function() {
          return f2 && (f2 = []), this;
        }, disable: function() {
          return e2 = g2 = [], f2 = c2 = "", this;
        }, disabled: function() {
          return !f2;
        }, lock: function() {
          return e2 = true, c2 || j2.disable(), this;
        }, locked: function() {
          return !!e2;
        }, fireWith: function(a3, c3) {
          return e2 || (c3 = c3 || [], c3 = [a3, c3.slice ? c3.slice() : c3], g2.push(c3), b2 || i2()), this;
        }, fire: function() {
          return j2.fireWith(this, arguments), this;
        }, fired: function() {
          return !!d2;
        } };
        return j2;
      }, n.extend({ Deferred: function(a2) {
        var b2 = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c2 = "pending", d2 = { state: function() {
          return c2;
        }, always: function() {
          return e2.done(arguments).fail(arguments), this;
        }, then: function() {
          var a3 = arguments;
          return n.Deferred(function(c3) {
            n.each(b2, function(b3, f2) {
              var g2 = n.isFunction(a3[b3]) && a3[b3];
              e2[f2[1]](function() {
                var a4 = g2 && g2.apply(this, arguments);
                a4 && n.isFunction(a4.promise) ? a4.promise().progress(c3.notify).done(c3.resolve).fail(c3.reject) : c3[f2[0] + "With"](this === d2 ? c3.promise() : this, g2 ? [a4] : arguments);
              });
            }), a3 = null;
          }).promise();
        }, promise: function(a3) {
          return null != a3 ? n.extend(a3, d2) : d2;
        } }, e2 = {};
        return d2.pipe = d2.then, n.each(b2, function(a3, f2) {
          var g2 = f2[2], h2 = f2[3];
          d2[f2[1]] = g2.add, h2 && g2.add(function() {
            c2 = h2;
          }, b2[1 ^ a3][2].disable, b2[2][2].lock), e2[f2[0]] = function() {
            return e2[f2[0] + "With"](this === e2 ? d2 : this, arguments), this;
          }, e2[f2[0] + "With"] = g2.fireWith;
        }), d2.promise(e2), a2 && a2.call(e2, e2), e2;
      }, when: function(a2) {
        var b2 = 0, c2 = e.call(arguments), d2 = c2.length, f2 = 1 !== d2 || a2 && n.isFunction(a2.promise) ? d2 : 0, g2 = 1 === f2 ? a2 : n.Deferred(), h2 = function(a3, b3, c3) {
          return function(d3) {
            b3[a3] = this, c3[a3] = arguments.length > 1 ? e.call(arguments) : d3, c3 === i2 ? g2.notifyWith(b3, c3) : --f2 || g2.resolveWith(b3, c3);
          };
        }, i2, j2, k2;
        if (d2 > 1)
          for (i2 = new Array(d2), j2 = new Array(d2), k2 = new Array(d2); d2 > b2; b2++)
            c2[b2] && n.isFunction(c2[b2].promise) ? c2[b2].promise().progress(h2(b2, j2, i2)).done(h2(b2, k2, c2)).fail(g2.reject) : --f2;
        return f2 || g2.resolveWith(k2, c2), g2.promise();
      } });
      var I;
      n.fn.ready = function(a2) {
        return n.ready.promise().done(a2), this;
      }, n.extend({ isReady: false, readyWait: 1, holdReady: function(a2) {
        a2 ? n.readyWait++ : n.ready(true);
      }, ready: function(a2) {
        (a2 === true ? --n.readyWait : n.isReady) || (n.isReady = true, a2 !== true && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
      } });
      function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
      }
      function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
      }
      n.ready.promise = function(b2) {
        if (!I)
          if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
            a.setTimeout(n.ready);
          else if (d.addEventListener)
            d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
          else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c2 = false;
            try {
              c2 = null == a.frameElement && d.documentElement;
            } catch (e2) {
            }
            c2 && c2.doScroll && !function f2() {
              if (!n.isReady) {
                try {
                  c2.doScroll("left");
                } catch (b3) {
                  return a.setTimeout(f2, 50);
                }
                J(), n.ready();
              }
            }();
          }
        return I.promise(b2);
      }, n.ready.promise();
      var L;
      for (L in n(l))
        break;
      l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = false, n(function() {
        var a2, b2, c2, e2;
        c2 = d.getElementsByTagName("body")[0], c2 && c2.style && (b2 = d.createElement("div"), e2 = d.createElement("div"), e2.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c2.appendChild(e2).appendChild(b2), "undefined" != typeof b2.style.zoom && (b2.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a2 = 3 === b2.offsetWidth, a2 && (c2.style.zoom = 1)), c2.removeChild(e2));
      }), function() {
        var a2 = d.createElement("div");
        l.deleteExpando = true;
        try {
          delete a2.test;
        } catch (b2) {
          l.deleteExpando = false;
        }
        a2 = null;
      }();
      var M = function(a2) {
        var b2 = n.noData[(a2.nodeName + " ").toLowerCase()], c2 = +a2.nodeType || 1;
        return 1 !== c2 && 9 !== c2 ? false : !b2 || b2 !== true && a2.getAttribute("classid") === b2;
      }, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
      function P(a2, b2, c2) {
        if (void 0 === c2 && 1 === a2.nodeType) {
          var d2 = "data-" + b2.replace(O, "-$1").toLowerCase();
          if (c2 = a2.getAttribute(d2), "string" == typeof c2) {
            try {
              c2 = "true" === c2 ? true : "false" === c2 ? false : "null" === c2 ? null : +c2 + "" === c2 ? +c2 : N.test(c2) ? n.parseJSON(c2) : c2;
            } catch (e2) {
            }
            n.data(a2, b2, c2);
          } else
            c2 = void 0;
        }
        return c2;
      }
      function Q(a2) {
        var b2;
        for (b2 in a2)
          if (("data" !== b2 || !n.isEmptyObject(a2[b2])) && "toJSON" !== b2)
            return false;
        return true;
      }
      function R(a2, b2, d2, e2) {
        if (M(a2)) {
          var f2, g2, h2 = n.expando, i2 = a2.nodeType, j2 = i2 ? n.cache : a2, k2 = i2 ? a2[h2] : a2[h2] && h2;
          if (k2 && j2[k2] && (e2 || j2[k2].data) || void 0 !== d2 || "string" != typeof b2)
            return k2 || (k2 = i2 ? a2[h2] = c.pop() || n.guid++ : h2), j2[k2] || (j2[k2] = i2 ? {} : { toJSON: n.noop }), "object" != typeof b2 && "function" != typeof b2 || (e2 ? j2[k2] = n.extend(j2[k2], b2) : j2[k2].data = n.extend(j2[k2].data, b2)), g2 = j2[k2], e2 || (g2.data || (g2.data = {}), g2 = g2.data), void 0 !== d2 && (g2[n.camelCase(b2)] = d2), "string" == typeof b2 ? (f2 = g2[b2], null == f2 && (f2 = g2[n.camelCase(b2)])) : f2 = g2, f2;
        }
      }
      function S(a2, b2, c2) {
        if (M(a2)) {
          var d2, e2, f2 = a2.nodeType, g2 = f2 ? n.cache : a2, h2 = f2 ? a2[n.expando] : n.expando;
          if (g2[h2]) {
            if (b2 && (d2 = c2 ? g2[h2] : g2[h2].data)) {
              n.isArray(b2) ? b2 = b2.concat(n.map(b2, n.camelCase)) : b2 in d2 ? b2 = [b2] : (b2 = n.camelCase(b2), b2 = b2 in d2 ? [b2] : b2.split(" ")), e2 = b2.length;
              while (e2--)
                delete d2[b2[e2]];
              if (c2 ? !Q(d2) : !n.isEmptyObject(d2))
                return;
            }
            (c2 || (delete g2[h2].data, Q(g2[h2]))) && (f2 ? n.cleanData([a2], true) : l.deleteExpando || g2 != g2.window ? delete g2[h2] : g2[h2] = void 0);
          }
        }
      }
      n.extend({ cache: {}, noData: { "applet ": true, "embed ": true, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a2) {
        return a2 = a2.nodeType ? n.cache[a2[n.expando]] : a2[n.expando], !!a2 && !Q(a2);
      }, data: function(a2, b2, c2) {
        return R(a2, b2, c2);
      }, removeData: function(a2, b2) {
        return S(a2, b2);
      }, _data: function(a2, b2, c2) {
        return R(a2, b2, c2, true);
      }, _removeData: function(a2, b2) {
        return S(a2, b2, true);
      } }), n.fn.extend({ data: function(a2, b2) {
        var c2, d2, e2, f2 = this[0], g2 = f2 && f2.attributes;
        if (void 0 === a2) {
          if (this.length && (e2 = n.data(f2), 1 === f2.nodeType && !n._data(f2, "parsedAttrs"))) {
            c2 = g2.length;
            while (c2--)
              g2[c2] && (d2 = g2[c2].name, 0 === d2.indexOf("data-") && (d2 = n.camelCase(d2.slice(5)), P(f2, d2, e2[d2])));
            n._data(f2, "parsedAttrs", true);
          }
          return e2;
        }
        return "object" == typeof a2 ? this.each(function() {
          n.data(this, a2);
        }) : arguments.length > 1 ? this.each(function() {
          n.data(this, a2, b2);
        }) : f2 ? P(f2, a2, n.data(f2, a2)) : void 0;
      }, removeData: function(a2) {
        return this.each(function() {
          n.removeData(this, a2);
        });
      } }), n.extend({ queue: function(a2, b2, c2) {
        var d2;
        return a2 ? (b2 = (b2 || "fx") + "queue", d2 = n._data(a2, b2), c2 && (!d2 || n.isArray(c2) ? d2 = n._data(a2, b2, n.makeArray(c2)) : d2.push(c2)), d2 || []) : void 0;
      }, dequeue: function(a2, b2) {
        b2 = b2 || "fx";
        var c2 = n.queue(a2, b2), d2 = c2.length, e2 = c2.shift(), f2 = n._queueHooks(a2, b2), g2 = function() {
          n.dequeue(a2, b2);
        };
        "inprogress" === e2 && (e2 = c2.shift(), d2--), e2 && ("fx" === b2 && c2.unshift("inprogress"), delete f2.stop, e2.call(a2, g2, f2)), !d2 && f2 && f2.empty.fire();
      }, _queueHooks: function(a2, b2) {
        var c2 = b2 + "queueHooks";
        return n._data(a2, c2) || n._data(a2, c2, { empty: n.Callbacks("once memory").add(function() {
          n._removeData(a2, b2 + "queue"), n._removeData(a2, c2);
        }) });
      } }), n.fn.extend({ queue: function(a2, b2) {
        var c2 = 2;
        return "string" != typeof a2 && (b2 = a2, a2 = "fx", c2--), arguments.length < c2 ? n.queue(this[0], a2) : void 0 === b2 ? this : this.each(function() {
          var c3 = n.queue(this, a2, b2);
          n._queueHooks(this, a2), "fx" === a2 && "inprogress" !== c3[0] && n.dequeue(this, a2);
        });
      }, dequeue: function(a2) {
        return this.each(function() {
          n.dequeue(this, a2);
        });
      }, clearQueue: function(a2) {
        return this.queue(a2 || "fx", []);
      }, promise: function(a2, b2) {
        var c2, d2 = 1, e2 = n.Deferred(), f2 = this, g2 = this.length, h2 = function() {
          --d2 || e2.resolveWith(f2, [f2]);
        };
        "string" != typeof a2 && (b2 = a2, a2 = void 0), a2 = a2 || "fx";
        while (g2--)
          c2 = n._data(f2[g2], a2 + "queueHooks"), c2 && c2.empty && (d2++, c2.empty.add(h2));
        return h2(), e2.promise(b2);
      } }), function() {
        var a2;
        l.shrinkWrapBlocks = function() {
          if (null != a2)
            return a2;
          a2 = false;
          var b2, c2, e2;
          return c2 = d.getElementsByTagName("body")[0], c2 && c2.style ? (b2 = d.createElement("div"), e2 = d.createElement("div"), e2.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c2.appendChild(e2).appendChild(b2), "undefined" != typeof b2.style.zoom && (b2.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b2.appendChild(d.createElement("div")).style.width = "5px", a2 = 3 !== b2.offsetWidth), c2.removeChild(e2), a2) : void 0;
        };
      }();
      var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), V = ["Top", "Right", "Bottom", "Left"], W = function(a2, b2) {
        return a2 = b2 || a2, "none" === n.css(a2, "display") || !n.contains(a2.ownerDocument, a2);
      };
      function X(a2, b2, c2, d2) {
        var e2, f2 = 1, g2 = 20, h2 = d2 ? function() {
          return d2.cur();
        } : function() {
          return n.css(a2, b2, "");
        }, i2 = h2(), j2 = c2 && c2[3] || (n.cssNumber[b2] ? "" : "px"), k2 = (n.cssNumber[b2] || "px" !== j2 && +i2) && U.exec(n.css(a2, b2));
        if (k2 && k2[3] !== j2) {
          j2 = j2 || k2[3], c2 = c2 || [], k2 = +i2 || 1;
          do
            f2 = f2 || ".5", k2 /= f2, n.style(a2, b2, k2 + j2);
          while (f2 !== (f2 = h2() / i2) && 1 !== f2 && --g2);
        }
        return c2 && (k2 = +k2 || +i2 || 0, e2 = c2[1] ? k2 + (c2[1] + 1) * c2[2] : +c2[2], d2 && (d2.unit = j2, d2.start = k2, d2.end = e2)), e2;
      }
      var Y = function(a2, b2, c2, d2, e2, f2, g2) {
        var h2 = 0, i2 = a2.length, j2 = null == c2;
        if ("object" === n.type(c2)) {
          e2 = true;
          for (h2 in c2)
            Y(a2, b2, h2, c2[h2], true, f2, g2);
        } else if (void 0 !== d2 && (e2 = true, n.isFunction(d2) || (g2 = true), j2 && (g2 ? (b2.call(a2, d2), b2 = null) : (j2 = b2, b2 = function(a3, b3, c3) {
          return j2.call(n(a3), c3);
        })), b2))
          for (; i2 > h2; h2++)
            b2(a2[h2], c2, g2 ? d2 : d2.call(a2[h2], h2, b2(a2[h2], c2)));
        return e2 ? a2 : j2 ? b2.call(a2) : i2 ? b2(a2[0], c2) : f2;
      }, Z = /^(?:checkbox|radio)$/i, $ = /<([\w:-]+)/, _ = /^$|\/(?:java|ecma)script/i, aa = /^\s+/, ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
      function ca(a2) {
        var b2 = ba.split("|"), c2 = a2.createDocumentFragment();
        if (c2.createElement)
          while (b2.length)
            c2.createElement(b2.pop());
        return c2;
      }
      !function() {
        var a2 = d.createElement("div"), b2 = d.createDocumentFragment(), c2 = d.createElement("input");
        a2.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a2.firstChild.nodeType, l.tbody = !a2.getElementsByTagName("tbody").length, l.htmlSerialize = !!a2.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(true).outerHTML, c2.type = "checkbox", c2.checked = true, b2.appendChild(c2), l.appendChecked = c2.checked, a2.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a2.cloneNode(true).lastChild.defaultValue, b2.appendChild(a2), c2 = d.createElement("input"), c2.setAttribute("type", "radio"), c2.setAttribute("checked", "checked"), c2.setAttribute("name", "t"), a2.appendChild(c2), l.checkClone = a2.cloneNode(true).cloneNode(true).lastChild.checked, l.noCloneEvent = !!a2.addEventListener, a2[n.expando] = 1, l.attributes = !a2.getAttribute(n.expando);
      }();
      var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
      da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
      function ea(a2, b2) {
        var c2, d2, e2 = 0, f2 = "undefined" != typeof a2.getElementsByTagName ? a2.getElementsByTagName(b2 || "*") : "undefined" != typeof a2.querySelectorAll ? a2.querySelectorAll(b2 || "*") : void 0;
        if (!f2)
          for (f2 = [], c2 = a2.childNodes || a2; null != (d2 = c2[e2]); e2++)
            !b2 || n.nodeName(d2, b2) ? f2.push(d2) : n.merge(f2, ea(d2, b2));
        return void 0 === b2 || b2 && n.nodeName(a2, b2) ? n.merge([a2], f2) : f2;
      }
      function fa(a2, b2) {
        for (var c2, d2 = 0; null != (c2 = a2[d2]); d2++)
          n._data(c2, "globalEval", !b2 || n._data(b2[d2], "globalEval"));
      }
      var ga = /<|&#?\w+;/, ha = /<tbody/i;
      function ia(a2) {
        Z.test(a2.type) && (a2.defaultChecked = a2.checked);
      }
      function ja(a2, b2, c2, d2, e2) {
        for (var f2, g2, h2, i2, j2, k2, m2, o2 = a2.length, p2 = ca(b2), q2 = [], r2 = 0; o2 > r2; r2++)
          if (g2 = a2[r2], g2 || 0 === g2)
            if ("object" === n.type(g2))
              n.merge(q2, g2.nodeType ? [g2] : g2);
            else if (ga.test(g2)) {
              i2 = i2 || p2.appendChild(b2.createElement("div")), j2 = ($.exec(g2) || ["", ""])[1].toLowerCase(), m2 = da[j2] || da._default, i2.innerHTML = m2[1] + n.htmlPrefilter(g2) + m2[2], f2 = m2[0];
              while (f2--)
                i2 = i2.lastChild;
              if (!l.leadingWhitespace && aa.test(g2) && q2.push(b2.createTextNode(aa.exec(g2)[0])), !l.tbody) {
                g2 = "table" !== j2 || ha.test(g2) ? "<table>" !== m2[1] || ha.test(g2) ? 0 : i2 : i2.firstChild, f2 = g2 && g2.childNodes.length;
                while (f2--)
                  n.nodeName(k2 = g2.childNodes[f2], "tbody") && !k2.childNodes.length && g2.removeChild(k2);
              }
              n.merge(q2, i2.childNodes), i2.textContent = "";
              while (i2.firstChild)
                i2.removeChild(i2.firstChild);
              i2 = p2.lastChild;
            } else
              q2.push(b2.createTextNode(g2));
        i2 && p2.removeChild(i2), l.appendChecked || n.grep(ea(q2, "input"), ia), r2 = 0;
        while (g2 = q2[r2++])
          if (d2 && n.inArray(g2, d2) > -1)
            e2 && e2.push(g2);
          else if (h2 = n.contains(g2.ownerDocument, g2), i2 = ea(p2.appendChild(g2), "script"), h2 && fa(i2), c2) {
            f2 = 0;
            while (g2 = i2[f2++])
              _.test(g2.type || "") && c2.push(g2);
          }
        return i2 = null, p2;
      }
      !function() {
        var b2, c2, e2 = d.createElement("div");
        for (b2 in { submit: true, change: true, focusin: true })
          c2 = "on" + b2, (l[b2] = c2 in a) || (e2.setAttribute(c2, "t"), l[b2] = e2.attributes[c2].expando === false);
        e2 = null;
      }();
      var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/;
      function pa() {
        return true;
      }
      function qa() {
        return false;
      }
      function ra() {
        try {
          return d.activeElement;
        } catch (a2) {
        }
      }
      function sa(a2, b2, c2, d2, e2, f2) {
        var g2, h2;
        if ("object" == typeof b2) {
          "string" != typeof c2 && (d2 = d2 || c2, c2 = void 0);
          for (h2 in b2)
            sa(a2, h2, c2, d2, b2[h2], f2);
          return a2;
        }
        if (null == d2 && null == e2 ? (e2 = c2, d2 = c2 = void 0) : null == e2 && ("string" == typeof c2 ? (e2 = d2, d2 = void 0) : (e2 = d2, d2 = c2, c2 = void 0)), e2 === false)
          e2 = qa;
        else if (!e2)
          return a2;
        return 1 === f2 && (g2 = e2, e2 = function(a3) {
          return n().off(a3), g2.apply(this, arguments);
        }, e2.guid = g2.guid || (g2.guid = n.guid++)), a2.each(function() {
          n.event.add(this, b2, e2, d2, c2);
        });
      }
      n.event = { global: {}, add: function(a2, b2, c2, d2, e2) {
        var f2, g2, h2, i2, j2, k2, l2, m2, o2, p2, q2, r2 = n._data(a2);
        if (r2) {
          c2.handler && (i2 = c2, c2 = i2.handler, e2 = i2.selector), c2.guid || (c2.guid = n.guid++), (g2 = r2.events) || (g2 = r2.events = {}), (k2 = r2.handle) || (k2 = r2.handle = function(a3) {
            return "undefined" == typeof n || a3 && n.event.triggered === a3.type ? void 0 : n.event.dispatch.apply(k2.elem, arguments);
          }, k2.elem = a2), b2 = (b2 || "").match(G) || [""], h2 = b2.length;
          while (h2--)
            f2 = oa.exec(b2[h2]) || [], o2 = q2 = f2[1], p2 = (f2[2] || "").split(".").sort(), o2 && (j2 = n.event.special[o2] || {}, o2 = (e2 ? j2.delegateType : j2.bindType) || o2, j2 = n.event.special[o2] || {}, l2 = n.extend({ type: o2, origType: q2, data: d2, handler: c2, guid: c2.guid, selector: e2, needsContext: e2 && n.expr.match.needsContext.test(e2), namespace: p2.join(".") }, i2), (m2 = g2[o2]) || (m2 = g2[o2] = [], m2.delegateCount = 0, j2.setup && j2.setup.call(a2, d2, p2, k2) !== false || (a2.addEventListener ? a2.addEventListener(o2, k2, false) : a2.attachEvent && a2.attachEvent("on" + o2, k2))), j2.add && (j2.add.call(a2, l2), l2.handler.guid || (l2.handler.guid = c2.guid)), e2 ? m2.splice(m2.delegateCount++, 0, l2) : m2.push(l2), n.event.global[o2] = true);
          a2 = null;
        }
      }, remove: function(a2, b2, c2, d2, e2) {
        var f2, g2, h2, i2, j2, k2, l2, m2, o2, p2, q2, r2 = n.hasData(a2) && n._data(a2);
        if (r2 && (k2 = r2.events)) {
          b2 = (b2 || "").match(G) || [""], j2 = b2.length;
          while (j2--)
            if (h2 = oa.exec(b2[j2]) || [], o2 = q2 = h2[1], p2 = (h2[2] || "").split(".").sort(), o2) {
              l2 = n.event.special[o2] || {}, o2 = (d2 ? l2.delegateType : l2.bindType) || o2, m2 = k2[o2] || [], h2 = h2[2] && new RegExp("(^|\\.)" + p2.join("\\.(?:.*\\.|)") + "(\\.|$)"), i2 = f2 = m2.length;
              while (f2--)
                g2 = m2[f2], !e2 && q2 !== g2.origType || c2 && c2.guid !== g2.guid || h2 && !h2.test(g2.namespace) || d2 && d2 !== g2.selector && ("**" !== d2 || !g2.selector) || (m2.splice(f2, 1), g2.selector && m2.delegateCount--, l2.remove && l2.remove.call(a2, g2));
              i2 && !m2.length && (l2.teardown && l2.teardown.call(a2, p2, r2.handle) !== false || n.removeEvent(a2, o2, r2.handle), delete k2[o2]);
            } else
              for (o2 in k2)
                n.event.remove(a2, o2 + b2[j2], c2, d2, true);
          n.isEmptyObject(k2) && (delete r2.handle, n._removeData(a2, "events"));
        }
      }, trigger: function(b2, c2, e2, f2) {
        var g2, h2, i2, j2, l2, m2, o2, p2 = [e2 || d], q2 = k.call(b2, "type") ? b2.type : b2, r2 = k.call(b2, "namespace") ? b2.namespace.split(".") : [];
        if (i2 = m2 = e2 = e2 || d, 3 !== e2.nodeType && 8 !== e2.nodeType && !na.test(q2 + n.event.triggered) && (q2.indexOf(".") > -1 && (r2 = q2.split("."), q2 = r2.shift(), r2.sort()), h2 = q2.indexOf(":") < 0 && "on" + q2, b2 = b2[n.expando] ? b2 : new n.Event(q2, "object" == typeof b2 && b2), b2.isTrigger = f2 ? 2 : 3, b2.namespace = r2.join("."), b2.rnamespace = b2.namespace ? new RegExp("(^|\\.)" + r2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b2.result = void 0, b2.target || (b2.target = e2), c2 = null == c2 ? [b2] : n.makeArray(c2, [b2]), l2 = n.event.special[q2] || {}, f2 || !l2.trigger || l2.trigger.apply(e2, c2) !== false)) {
          if (!f2 && !l2.noBubble && !n.isWindow(e2)) {
            for (j2 = l2.delegateType || q2, na.test(j2 + q2) || (i2 = i2.parentNode); i2; i2 = i2.parentNode)
              p2.push(i2), m2 = i2;
            m2 === (e2.ownerDocument || d) && p2.push(m2.defaultView || m2.parentWindow || a);
          }
          o2 = 0;
          while ((i2 = p2[o2++]) && !b2.isPropagationStopped())
            b2.type = o2 > 1 ? j2 : l2.bindType || q2, g2 = (n._data(i2, "events") || {})[b2.type] && n._data(i2, "handle"), g2 && g2.apply(i2, c2), g2 = h2 && i2[h2], g2 && g2.apply && M(i2) && (b2.result = g2.apply(i2, c2), b2.result === false && b2.preventDefault());
          if (b2.type = q2, !f2 && !b2.isDefaultPrevented() && (!l2._default || l2._default.apply(p2.pop(), c2) === false) && M(e2) && h2 && e2[q2] && !n.isWindow(e2)) {
            m2 = e2[h2], m2 && (e2[h2] = null), n.event.triggered = q2;
            try {
              e2[q2]();
            } catch (s2) {
            }
            n.event.triggered = void 0, m2 && (e2[h2] = m2);
          }
          return b2.result;
        }
      }, dispatch: function(a2) {
        a2 = n.event.fix(a2);
        var b2, c2, d2, f2, g2, h2 = [], i2 = e.call(arguments), j2 = (n._data(this, "events") || {})[a2.type] || [], k2 = n.event.special[a2.type] || {};
        if (i2[0] = a2, a2.delegateTarget = this, !k2.preDispatch || k2.preDispatch.call(this, a2) !== false) {
          h2 = n.event.handlers.call(this, a2, j2), b2 = 0;
          while ((f2 = h2[b2++]) && !a2.isPropagationStopped()) {
            a2.currentTarget = f2.elem, c2 = 0;
            while ((g2 = f2.handlers[c2++]) && !a2.isImmediatePropagationStopped())
              a2.rnamespace && !a2.rnamespace.test(g2.namespace) || (a2.handleObj = g2, a2.data = g2.data, d2 = ((n.event.special[g2.origType] || {}).handle || g2.handler).apply(f2.elem, i2), void 0 !== d2 && (a2.result = d2) === false && (a2.preventDefault(), a2.stopPropagation()));
          }
          return k2.postDispatch && k2.postDispatch.call(this, a2), a2.result;
        }
      }, handlers: function(a2, b2) {
        var c2, d2, e2, f2, g2 = [], h2 = b2.delegateCount, i2 = a2.target;
        if (h2 && i2.nodeType && ("click" !== a2.type || isNaN(a2.button) || a2.button < 1)) {
          for (; i2 != this; i2 = i2.parentNode || this)
            if (1 === i2.nodeType && (i2.disabled !== true || "click" !== a2.type)) {
              for (d2 = [], c2 = 0; h2 > c2; c2++)
                f2 = b2[c2], e2 = f2.selector + " ", void 0 === d2[e2] && (d2[e2] = f2.needsContext ? n(e2, this).index(i2) > -1 : n.find(e2, this, null, [i2]).length), d2[e2] && d2.push(f2);
              d2.length && g2.push({ elem: i2, handlers: d2 });
            }
        }
        return h2 < b2.length && g2.push({ elem: this, handlers: b2.slice(h2) }), g2;
      }, fix: function(a2) {
        if (a2[n.expando])
          return a2;
        var b2, c2, e2, f2 = a2.type, g2 = a2, h2 = this.fixHooks[f2];
        h2 || (this.fixHooks[f2] = h2 = ma.test(f2) ? this.mouseHooks : la.test(f2) ? this.keyHooks : {}), e2 = h2.props ? this.props.concat(h2.props) : this.props, a2 = new n.Event(g2), b2 = e2.length;
        while (b2--)
          c2 = e2[b2], a2[c2] = g2[c2];
        return a2.target || (a2.target = g2.srcElement || d), 3 === a2.target.nodeType && (a2.target = a2.target.parentNode), a2.metaKey = !!a2.metaKey, h2.filter ? h2.filter(a2, g2) : a2;
      }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a2, b2) {
        return null == a2.which && (a2.which = null != b2.charCode ? b2.charCode : b2.keyCode), a2;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a2, b2) {
        var c2, e2, f2, g2 = b2.button, h2 = b2.fromElement;
        return null == a2.pageX && null != b2.clientX && (e2 = a2.target.ownerDocument || d, f2 = e2.documentElement, c2 = e2.body, a2.pageX = b2.clientX + (f2 && f2.scrollLeft || c2 && c2.scrollLeft || 0) - (f2 && f2.clientLeft || c2 && c2.clientLeft || 0), a2.pageY = b2.clientY + (f2 && f2.scrollTop || c2 && c2.scrollTop || 0) - (f2 && f2.clientTop || c2 && c2.clientTop || 0)), !a2.relatedTarget && h2 && (a2.relatedTarget = h2 === a2.target ? b2.toElement : h2), a2.which || void 0 === g2 || (a2.which = 1 & g2 ? 1 : 2 & g2 ? 3 : 4 & g2 ? 2 : 0), a2;
      } }, special: { load: { noBubble: true }, focus: { trigger: function() {
        if (this !== ra() && this.focus)
          try {
            return this.focus(), false;
          } catch (a2) {
          }
      }, delegateType: "focusin" }, blur: { trigger: function() {
        return this === ra() && this.blur ? (this.blur(), false) : void 0;
      }, delegateType: "focusout" }, click: { trigger: function() {
        return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), false) : void 0;
      }, _default: function(a2) {
        return n.nodeName(a2.target, "a");
      } }, beforeunload: { postDispatch: function(a2) {
        void 0 !== a2.result && a2.originalEvent && (a2.originalEvent.returnValue = a2.result);
      } } }, simulate: function(a2, b2, c2) {
        var d2 = n.extend(new n.Event(), c2, { type: a2, isSimulated: true });
        n.event.trigger(d2, null, b2), d2.isDefaultPrevented() && c2.preventDefault();
      } }, n.removeEvent = d.removeEventListener ? function(a2, b2, c2) {
        a2.removeEventListener && a2.removeEventListener(b2, c2);
      } : function(a2, b2, c2) {
        var d2 = "on" + b2;
        a2.detachEvent && ("undefined" == typeof a2[d2] && (a2[d2] = null), a2.detachEvent(d2, c2));
      }, n.Event = function(a2, b2) {
        return this instanceof n.Event ? (a2 && a2.type ? (this.originalEvent = a2, this.type = a2.type, this.isDefaultPrevented = a2.defaultPrevented || void 0 === a2.defaultPrevented && a2.returnValue === false ? pa : qa) : this.type = a2, b2 && n.extend(this, b2), this.timeStamp = a2 && a2.timeStamp || n.now(), void (this[n.expando] = true)) : new n.Event(a2, b2);
      }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function() {
        var a2 = this.originalEvent;
        this.isDefaultPrevented = pa, a2 && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false);
      }, stopPropagation: function() {
        var a2 = this.originalEvent;
        this.isPropagationStopped = pa, a2 && !this.isSimulated && (a2.stopPropagation && a2.stopPropagation(), a2.cancelBubble = true);
      }, stopImmediatePropagation: function() {
        var a2 = this.originalEvent;
        this.isImmediatePropagationStopped = pa, a2 && a2.stopImmediatePropagation && a2.stopImmediatePropagation(), this.stopPropagation();
      } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a2, b2) {
        n.event.special[a2] = { delegateType: b2, bindType: b2, handle: function(a3) {
          var c2, d2 = this, e2 = a3.relatedTarget, f2 = a3.handleObj;
          return e2 && (e2 === d2 || n.contains(d2, e2)) || (a3.type = f2.origType, c2 = f2.handler.apply(this, arguments), a3.type = b2), c2;
        } };
      }), l.submit || (n.event.special.submit = { setup: function() {
        return n.nodeName(this, "form") ? false : void n.event.add(this, "click._submit keypress._submit", function(a2) {
          var b2 = a2.target, c2 = n.nodeName(b2, "input") || n.nodeName(b2, "button") ? n.prop(b2, "form") : void 0;
          c2 && !n._data(c2, "submit") && (n.event.add(c2, "submit._submit", function(a3) {
            a3._submitBubble = true;
          }), n._data(c2, "submit", true));
        });
      }, postDispatch: function(a2) {
        a2._submitBubble && (delete a2._submitBubble, this.parentNode && !a2.isTrigger && n.event.simulate("submit", this.parentNode, a2));
      }, teardown: function() {
        return n.nodeName(this, "form") ? false : void n.event.remove(this, "._submit");
      } }), l.change || (n.event.special.change = { setup: function() {
        return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a2) {
          "checked" === a2.originalEvent.propertyName && (this._justChanged = true);
        }), n.event.add(this, "click._change", function(a2) {
          this._justChanged && !a2.isTrigger && (this._justChanged = false), n.event.simulate("change", this, a2);
        })), false) : void n.event.add(this, "beforeactivate._change", function(a2) {
          var b2 = a2.target;
          ka.test(b2.nodeName) && !n._data(b2, "change") && (n.event.add(b2, "change._change", function(a3) {
            !this.parentNode || a3.isSimulated || a3.isTrigger || n.event.simulate("change", this.parentNode, a3);
          }), n._data(b2, "change", true));
        });
      }, handle: function(a2) {
        var b2 = a2.target;
        return this !== b2 || a2.isSimulated || a2.isTrigger || "radio" !== b2.type && "checkbox" !== b2.type ? a2.handleObj.handler.apply(this, arguments) : void 0;
      }, teardown: function() {
        return n.event.remove(this, "._change"), !ka.test(this.nodeName);
      } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a2, b2) {
        var c2 = function(a3) {
          n.event.simulate(b2, a3.target, n.event.fix(a3));
        };
        n.event.special[b2] = { setup: function() {
          var d2 = this.ownerDocument || this, e2 = n._data(d2, b2);
          e2 || d2.addEventListener(a2, c2, true), n._data(d2, b2, (e2 || 0) + 1);
        }, teardown: function() {
          var d2 = this.ownerDocument || this, e2 = n._data(d2, b2) - 1;
          e2 ? n._data(d2, b2, e2) : (d2.removeEventListener(a2, c2, true), n._removeData(d2, b2));
        } };
      }), n.fn.extend({ on: function(a2, b2, c2, d2) {
        return sa(this, a2, b2, c2, d2);
      }, one: function(a2, b2, c2, d2) {
        return sa(this, a2, b2, c2, d2, 1);
      }, off: function(a2, b2, c2) {
        var d2, e2;
        if (a2 && a2.preventDefault && a2.handleObj)
          return d2 = a2.handleObj, n(a2.delegateTarget).off(d2.namespace ? d2.origType + "." + d2.namespace : d2.origType, d2.selector, d2.handler), this;
        if ("object" == typeof a2) {
          for (e2 in a2)
            this.off(e2, b2, a2[e2]);
          return this;
        }
        return b2 !== false && "function" != typeof b2 || (c2 = b2, b2 = void 0), c2 === false && (c2 = qa), this.each(function() {
          n.event.remove(this, a2, c2, b2);
        });
      }, trigger: function(a2, b2) {
        return this.each(function() {
          n.event.trigger(a2, b2, this);
        });
      }, triggerHandler: function(a2, b2) {
        var c2 = this[0];
        return c2 ? n.event.trigger(a2, b2, c2, true) : void 0;
      } });
      var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"), va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wa = /<script|<style|<link/i, xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Aa = ca(d), Ba = Aa.appendChild(d.createElement("div"));
      function Ca(a2, b2) {
        return n.nodeName(a2, "table") && n.nodeName(11 !== b2.nodeType ? b2 : b2.firstChild, "tr") ? a2.getElementsByTagName("tbody")[0] || a2.appendChild(a2.ownerDocument.createElement("tbody")) : a2;
      }
      function Da(a2) {
        return a2.type = (null !== n.find.attr(a2, "type")) + "/" + a2.type, a2;
      }
      function Ea(a2) {
        var b2 = ya.exec(a2.type);
        return b2 ? a2.type = b2[1] : a2.removeAttribute("type"), a2;
      }
      function Fa(a2, b2) {
        if (1 === b2.nodeType && n.hasData(a2)) {
          var c2, d2, e2, f2 = n._data(a2), g2 = n._data(b2, f2), h2 = f2.events;
          if (h2) {
            delete g2.handle, g2.events = {};
            for (c2 in h2)
              for (d2 = 0, e2 = h2[c2].length; e2 > d2; d2++)
                n.event.add(b2, c2, h2[c2][d2]);
          }
          g2.data && (g2.data = n.extend({}, g2.data));
        }
      }
      function Ga(a2, b2) {
        var c2, d2, e2;
        if (1 === b2.nodeType) {
          if (c2 = b2.nodeName.toLowerCase(), !l.noCloneEvent && b2[n.expando]) {
            e2 = n._data(b2);
            for (d2 in e2.events)
              n.removeEvent(b2, d2, e2.handle);
            b2.removeAttribute(n.expando);
          }
          "script" === c2 && b2.text !== a2.text ? (Da(b2).text = a2.text, Ea(b2)) : "object" === c2 ? (b2.parentNode && (b2.outerHTML = a2.outerHTML), l.html5Clone && a2.innerHTML && !n.trim(b2.innerHTML) && (b2.innerHTML = a2.innerHTML)) : "input" === c2 && Z.test(a2.type) ? (b2.defaultChecked = b2.checked = a2.checked, b2.value !== a2.value && (b2.value = a2.value)) : "option" === c2 ? b2.defaultSelected = b2.selected = a2.defaultSelected : "input" !== c2 && "textarea" !== c2 || (b2.defaultValue = a2.defaultValue);
        }
      }
      function Ha(a2, b2, c2, d2) {
        b2 = f.apply([], b2);
        var e2, g2, h2, i2, j2, k2, m2 = 0, o2 = a2.length, p2 = o2 - 1, q2 = b2[0], r2 = n.isFunction(q2);
        if (r2 || o2 > 1 && "string" == typeof q2 && !l.checkClone && xa.test(q2))
          return a2.each(function(e3) {
            var f2 = a2.eq(e3);
            r2 && (b2[0] = q2.call(this, e3, f2.html())), Ha(f2, b2, c2, d2);
          });
        if (o2 && (k2 = ja(b2, a2[0].ownerDocument, false, a2, d2), e2 = k2.firstChild, 1 === k2.childNodes.length && (k2 = e2), e2 || d2)) {
          for (i2 = n.map(ea(k2, "script"), Da), h2 = i2.length; o2 > m2; m2++)
            g2 = k2, m2 !== p2 && (g2 = n.clone(g2, true, true), h2 && n.merge(i2, ea(g2, "script"))), c2.call(a2[m2], g2, m2);
          if (h2)
            for (j2 = i2[i2.length - 1].ownerDocument, n.map(i2, Ea), m2 = 0; h2 > m2; m2++)
              g2 = i2[m2], _.test(g2.type || "") && !n._data(g2, "globalEval") && n.contains(j2, g2) && (g2.src ? n._evalUrl && n._evalUrl(g2.src) : n.globalEval((g2.text || g2.textContent || g2.innerHTML || "").replace(za, "")));
          k2 = e2 = null;
        }
        return a2;
      }
      function Ia(a2, b2, c2) {
        for (var d2, e2 = b2 ? n.filter(b2, a2) : a2, f2 = 0; null != (d2 = e2[f2]); f2++)
          c2 || 1 !== d2.nodeType || n.cleanData(ea(d2)), d2.parentNode && (c2 && n.contains(d2.ownerDocument, d2) && fa(ea(d2, "script")), d2.parentNode.removeChild(d2));
        return a2;
      }
      n.extend({ htmlPrefilter: function(a2) {
        return a2.replace(va, "<$1></$2>");
      }, clone: function(a2, b2, c2) {
        var d2, e2, f2, g2, h2, i2 = n.contains(a2.ownerDocument, a2);
        if (l.html5Clone || n.isXMLDoc(a2) || !ua.test("<" + a2.nodeName + ">") ? f2 = a2.cloneNode(true) : (Ba.innerHTML = a2.outerHTML, Ba.removeChild(f2 = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a2.nodeType && 11 !== a2.nodeType || n.isXMLDoc(a2)))
          for (d2 = ea(f2), h2 = ea(a2), g2 = 0; null != (e2 = h2[g2]); ++g2)
            d2[g2] && Ga(e2, d2[g2]);
        if (b2)
          if (c2)
            for (h2 = h2 || ea(a2), d2 = d2 || ea(f2), g2 = 0; null != (e2 = h2[g2]); g2++)
              Fa(e2, d2[g2]);
          else
            Fa(a2, f2);
        return d2 = ea(f2, "script"), d2.length > 0 && fa(d2, !i2 && ea(a2, "script")), d2 = h2 = e2 = null, f2;
      }, cleanData: function(a2, b2) {
        for (var d2, e2, f2, g2, h2 = 0, i2 = n.expando, j2 = n.cache, k2 = l.attributes, m2 = n.event.special; null != (d2 = a2[h2]); h2++)
          if ((b2 || M(d2)) && (f2 = d2[i2], g2 = f2 && j2[f2])) {
            if (g2.events)
              for (e2 in g2.events)
                m2[e2] ? n.event.remove(d2, e2) : n.removeEvent(d2, e2, g2.handle);
            j2[f2] && (delete j2[f2], k2 || "undefined" == typeof d2.removeAttribute ? d2[i2] = void 0 : d2.removeAttribute(i2), c.push(f2));
          }
      } }), n.fn.extend({ domManip: Ha, detach: function(a2) {
        return Ia(this, a2, true);
      }, remove: function(a2) {
        return Ia(this, a2);
      }, text: function(a2) {
        return Y(this, function(a3) {
          return void 0 === a3 ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a3));
        }, null, a2, arguments.length);
      }, append: function() {
        return Ha(this, arguments, function(a2) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b2 = Ca(this, a2);
            b2.appendChild(a2);
          }
        });
      }, prepend: function() {
        return Ha(this, arguments, function(a2) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b2 = Ca(this, a2);
            b2.insertBefore(a2, b2.firstChild);
          }
        });
      }, before: function() {
        return Ha(this, arguments, function(a2) {
          this.parentNode && this.parentNode.insertBefore(a2, this);
        });
      }, after: function() {
        return Ha(this, arguments, function(a2) {
          this.parentNode && this.parentNode.insertBefore(a2, this.nextSibling);
        });
      }, empty: function() {
        for (var a2, b2 = 0; null != (a2 = this[b2]); b2++) {
          1 === a2.nodeType && n.cleanData(ea(a2, false));
          while (a2.firstChild)
            a2.removeChild(a2.firstChild);
          a2.options && n.nodeName(a2, "select") && (a2.options.length = 0);
        }
        return this;
      }, clone: function(a2, b2) {
        return a2 = null == a2 ? false : a2, b2 = null == b2 ? a2 : b2, this.map(function() {
          return n.clone(this, a2, b2);
        });
      }, html: function(a2) {
        return Y(this, function(a3) {
          var b2 = this[0] || {}, c2 = 0, d2 = this.length;
          if (void 0 === a3)
            return 1 === b2.nodeType ? b2.innerHTML.replace(ta, "") : void 0;
          if ("string" == typeof a3 && !wa.test(a3) && (l.htmlSerialize || !ua.test(a3)) && (l.leadingWhitespace || !aa.test(a3)) && !da[($.exec(a3) || ["", ""])[1].toLowerCase()]) {
            a3 = n.htmlPrefilter(a3);
            try {
              for (; d2 > c2; c2++)
                b2 = this[c2] || {}, 1 === b2.nodeType && (n.cleanData(ea(b2, false)), b2.innerHTML = a3);
              b2 = 0;
            } catch (e2) {
            }
          }
          b2 && this.empty().append(a3);
        }, null, a2, arguments.length);
      }, replaceWith: function() {
        var a2 = [];
        return Ha(this, arguments, function(b2) {
          var c2 = this.parentNode;
          n.inArray(this, a2) < 0 && (n.cleanData(ea(this)), c2 && c2.replaceChild(b2, this));
        }, a2);
      } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a2, b2) {
        n.fn[a2] = function(a3) {
          for (var c2, d2 = 0, e2 = [], f2 = n(a3), h2 = f2.length - 1; h2 >= d2; d2++)
            c2 = d2 === h2 ? this : this.clone(true), n(f2[d2])[b2](c2), g.apply(e2, c2.get());
          return this.pushStack(e2);
        };
      });
      var Ja, Ka = { HTML: "block", BODY: "block" };
      function La(a2, b2) {
        var c2 = n(b2.createElement(a2)).appendTo(b2.body), d2 = n.css(c2[0], "display");
        return c2.detach(), d2;
      }
      function Ma(a2) {
        var b2 = d, c2 = Ka[a2];
        return c2 || (c2 = La(a2, b2), "none" !== c2 && c2 || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b2.documentElement), b2 = (Ja[0].contentWindow || Ja[0].contentDocument).document, b2.write(), b2.close(), c2 = La(a2, b2), Ja.detach()), Ka[a2] = c2), c2;
      }
      var Na = /^margin/, Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Pa = function(a2, b2, c2, d2) {
        var e2, f2, g2 = {};
        for (f2 in b2)
          g2[f2] = a2.style[f2], a2.style[f2] = b2[f2];
        e2 = c2.apply(a2, d2 || []);
        for (f2 in b2)
          a2.style[f2] = g2[f2];
        return e2;
      }, Qa = d.documentElement;
      !function() {
        var b2, c2, e2, f2, g2, h2, i2 = d.createElement("div"), j2 = d.createElement("div");
        if (j2.style) {
          let k2 = function() {
            var k3, l2, m2 = d.documentElement;
            m2.appendChild(i2), j2.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b2 = e2 = h2 = false, c2 = g2 = true, a.getComputedStyle && (l2 = a.getComputedStyle(j2), b2 = "1%" !== (l2 || {}).top, h2 = "2px" === (l2 || {}).marginLeft, e2 = "4px" === (l2 || { width: "4px" }).width, j2.style.marginRight = "50%", c2 = "4px" === (l2 || { marginRight: "4px" }).marginRight, k3 = j2.appendChild(d.createElement("div")), k3.style.cssText = j2.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k3.style.marginRight = k3.style.width = "0", j2.style.width = "1px", g2 = !parseFloat((a.getComputedStyle(k3) || {}).marginRight), j2.removeChild(k3)), j2.style.display = "none", f2 = 0 === j2.getClientRects().length, f2 && (j2.style.display = "", j2.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j2.childNodes[0].style.borderCollapse = "separate", k3 = j2.getElementsByTagName("td"), k3[0].style.cssText = "margin:0;border:0;padding:0;display:none", f2 = 0 === k3[0].offsetHeight, f2 && (k3[0].style.display = "", k3[1].style.display = "none", f2 = 0 === k3[0].offsetHeight)), m2.removeChild(i2);
          };
          j2.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j2.style.opacity, l.cssFloat = !!j2.style.cssFloat, j2.style.backgroundClip = "content-box", j2.cloneNode(true).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j2.style.backgroundClip, i2 = d.createElement("div"), i2.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j2.innerHTML = "", i2.appendChild(j2), l.boxSizing = "" === j2.style.boxSizing || "" === j2.style.MozBoxSizing || "" === j2.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function() {
            return null == b2 && k2(), f2;
          }, boxSizingReliable: function() {
            return null == b2 && k2(), e2;
          }, pixelMarginRight: function() {
            return null == b2 && k2(), c2;
          }, pixelPosition: function() {
            return null == b2 && k2(), b2;
          }, reliableMarginRight: function() {
            return null == b2 && k2(), g2;
          }, reliableMarginLeft: function() {
            return null == b2 && k2(), h2;
          } });
        }
      }();
      var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
      a.getComputedStyle ? (Ra = function(b2) {
        var c2 = b2.ownerDocument.defaultView;
        return c2 && c2.opener || (c2 = a), c2.getComputedStyle(b2);
      }, Sa = function(a2, b2, c2) {
        var d2, e2, f2, g2, h2 = a2.style;
        return c2 = c2 || Ra(a2), g2 = c2 ? c2.getPropertyValue(b2) || c2[b2] : void 0, "" !== g2 && void 0 !== g2 || n.contains(a2.ownerDocument, a2) || (g2 = n.style(a2, b2)), c2 && !l.pixelMarginRight() && Oa.test(g2) && Na.test(b2) && (d2 = h2.width, e2 = h2.minWidth, f2 = h2.maxWidth, h2.minWidth = h2.maxWidth = h2.width = g2, g2 = c2.width, h2.width = d2, h2.minWidth = e2, h2.maxWidth = f2), void 0 === g2 ? g2 : g2 + "";
      }) : Qa.currentStyle && (Ra = function(a2) {
        return a2.currentStyle;
      }, Sa = function(a2, b2, c2) {
        var d2, e2, f2, g2, h2 = a2.style;
        return c2 = c2 || Ra(a2), g2 = c2 ? c2[b2] : void 0, null == g2 && h2 && h2[b2] && (g2 = h2[b2]), Oa.test(g2) && !Ta.test(b2) && (d2 = h2.left, e2 = a2.runtimeStyle, f2 = e2 && e2.left, f2 && (e2.left = a2.currentStyle.left), h2.left = "fontSize" === b2 ? "1em" : g2, g2 = h2.pixelLeft + "px", h2.left = d2, f2 && (e2.left = f2)), void 0 === g2 ? g2 : g2 + "" || "auto";
      });
      function Ua(a2, b2) {
        return { get: function() {
          return a2() ? void delete this.get : (this.get = b2).apply(this, arguments);
        } };
      }
      var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, Xa = /^(none|table(?!-c[ea]).+)/, Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = { position: "absolute", visibility: "hidden", display: "block" }, $a = { letterSpacing: "0", fontWeight: "400" }, _a = ["Webkit", "O", "Moz", "ms"], ab = d.createElement("div").style;
      function bb(a2) {
        if (a2 in ab)
          return a2;
        var b2 = a2.charAt(0).toUpperCase() + a2.slice(1), c2 = _a.length;
        while (c2--)
          if (a2 = _a[c2] + b2, a2 in ab)
            return a2;
      }
      function cb(a2, b2) {
        for (var c2, d2, e2, f2 = [], g2 = 0, h2 = a2.length; h2 > g2; g2++)
          d2 = a2[g2], d2.style && (f2[g2] = n._data(d2, "olddisplay"), c2 = d2.style.display, b2 ? (f2[g2] || "none" !== c2 || (d2.style.display = ""), "" === d2.style.display && W(d2) && (f2[g2] = n._data(d2, "olddisplay", Ma(d2.nodeName)))) : (e2 = W(d2), (c2 && "none" !== c2 || !e2) && n._data(d2, "olddisplay", e2 ? c2 : n.css(d2, "display"))));
        for (g2 = 0; h2 > g2; g2++)
          d2 = a2[g2], d2.style && (b2 && "none" !== d2.style.display && "" !== d2.style.display || (d2.style.display = b2 ? f2[g2] || "" : "none"));
        return a2;
      }
      function db(a2, b2, c2) {
        var d2 = Ya.exec(b2);
        return d2 ? Math.max(0, d2[1] - (c2 || 0)) + (d2[2] || "px") : b2;
      }
      function eb(a2, b2, c2, d2, e2) {
        for (var f2 = c2 === (d2 ? "border" : "content") ? 4 : "width" === b2 ? 1 : 0, g2 = 0; 4 > f2; f2 += 2)
          "margin" === c2 && (g2 += n.css(a2, c2 + V[f2], true, e2)), d2 ? ("content" === c2 && (g2 -= n.css(a2, "padding" + V[f2], true, e2)), "margin" !== c2 && (g2 -= n.css(a2, "border" + V[f2] + "Width", true, e2))) : (g2 += n.css(a2, "padding" + V[f2], true, e2), "padding" !== c2 && (g2 += n.css(a2, "border" + V[f2] + "Width", true, e2)));
        return g2;
      }
      function fb(a2, b2, c2) {
        var d2 = true, e2 = "width" === b2 ? a2.offsetWidth : a2.offsetHeight, f2 = Ra(a2), g2 = l.boxSizing && "border-box" === n.css(a2, "boxSizing", false, f2);
        if (0 >= e2 || null == e2) {
          if (e2 = Sa(a2, b2, f2), (0 > e2 || null == e2) && (e2 = a2.style[b2]), Oa.test(e2))
            return e2;
          d2 = g2 && (l.boxSizingReliable() || e2 === a2.style[b2]), e2 = parseFloat(e2) || 0;
        }
        return e2 + eb(a2, b2, c2 || (g2 ? "border" : "content"), d2, f2) + "px";
      }
      n.extend({ cssHooks: { opacity: { get: function(a2, b2) {
        if (b2) {
          var c2 = Sa(a2, "opacity");
          return "" === c2 ? "1" : c2;
        }
      } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a2, b2, c2, d2) {
        if (a2 && 3 !== a2.nodeType && 8 !== a2.nodeType && a2.style) {
          var e2, f2, g2, h2 = n.camelCase(b2), i2 = a2.style;
          if (b2 = n.cssProps[h2] || (n.cssProps[h2] = bb(h2) || h2), g2 = n.cssHooks[b2] || n.cssHooks[h2], void 0 === c2)
            return g2 && "get" in g2 && void 0 !== (e2 = g2.get(a2, false, d2)) ? e2 : i2[b2];
          if (f2 = typeof c2, "string" === f2 && (e2 = U.exec(c2)) && e2[1] && (c2 = X(a2, b2, e2), f2 = "number"), null != c2 && c2 === c2 && ("number" === f2 && (c2 += e2 && e2[3] || (n.cssNumber[h2] ? "" : "px")), l.clearCloneStyle || "" !== c2 || 0 !== b2.indexOf("background") || (i2[b2] = "inherit"), !(g2 && "set" in g2 && void 0 === (c2 = g2.set(a2, c2, d2)))))
            try {
              i2[b2] = c2;
            } catch (j2) {
            }
        }
      }, css: function(a2, b2, c2, d2) {
        var e2, f2, g2, h2 = n.camelCase(b2);
        return b2 = n.cssProps[h2] || (n.cssProps[h2] = bb(h2) || h2), g2 = n.cssHooks[b2] || n.cssHooks[h2], g2 && "get" in g2 && (f2 = g2.get(a2, true, c2)), void 0 === f2 && (f2 = Sa(a2, b2, d2)), "normal" === f2 && b2 in $a && (f2 = $a[b2]), "" === c2 || c2 ? (e2 = parseFloat(f2), c2 === true || isFinite(e2) ? e2 || 0 : f2) : f2;
      } }), n.each(["height", "width"], function(a2, b2) {
        n.cssHooks[b2] = { get: function(a3, c2, d2) {
          return c2 ? Xa.test(n.css(a3, "display")) && 0 === a3.offsetWidth ? Pa(a3, Za, function() {
            return fb(a3, b2, d2);
          }) : fb(a3, b2, d2) : void 0;
        }, set: function(a3, c2, d2) {
          var e2 = d2 && Ra(a3);
          return db(a3, c2, d2 ? eb(a3, b2, d2, l.boxSizing && "border-box" === n.css(a3, "boxSizing", false, e2), e2) : 0);
        } };
      }), l.opacity || (n.cssHooks.opacity = { get: function(a2, b2) {
        return Wa.test((b2 && a2.currentStyle ? a2.currentStyle.filter : a2.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b2 ? "1" : "";
      }, set: function(a2, b2) {
        var c2 = a2.style, d2 = a2.currentStyle, e2 = n.isNumeric(b2) ? "alpha(opacity=" + 100 * b2 + ")" : "", f2 = d2 && d2.filter || c2.filter || "";
        c2.zoom = 1, (b2 >= 1 || "" === b2) && "" === n.trim(f2.replace(Va, "")) && c2.removeAttribute && (c2.removeAttribute("filter"), "" === b2 || d2 && !d2.filter) || (c2.filter = Va.test(f2) ? f2.replace(Va, e2) : f2 + " " + e2);
      } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a2, b2) {
        return b2 ? Pa(a2, { display: "inline-block" }, Sa, [a2, "marginRight"]) : void 0;
      }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a2, b2) {
        return b2 ? (parseFloat(Sa(a2, "marginLeft")) || (n.contains(a2.ownerDocument, a2) ? a2.getBoundingClientRect().left - Pa(a2, {
          marginLeft: 0
        }, function() {
          return a2.getBoundingClientRect().left;
        }) : 0)) + "px" : void 0;
      }), n.each({ margin: "", padding: "", border: "Width" }, function(a2, b2) {
        n.cssHooks[a2 + b2] = { expand: function(c2) {
          for (var d2 = 0, e2 = {}, f2 = "string" == typeof c2 ? c2.split(" ") : [c2]; 4 > d2; d2++)
            e2[a2 + V[d2] + b2] = f2[d2] || f2[d2 - 2] || f2[0];
          return e2;
        } }, Na.test(a2) || (n.cssHooks[a2 + b2].set = db);
      }), n.fn.extend({ css: function(a2, b2) {
        return Y(this, function(a3, b3, c2) {
          var d2, e2, f2 = {}, g2 = 0;
          if (n.isArray(b3)) {
            for (d2 = Ra(a3), e2 = b3.length; e2 > g2; g2++)
              f2[b3[g2]] = n.css(a3, b3[g2], false, d2);
            return f2;
          }
          return void 0 !== c2 ? n.style(a3, b3, c2) : n.css(a3, b3);
        }, a2, b2, arguments.length > 1);
      }, show: function() {
        return cb(this, true);
      }, hide: function() {
        return cb(this);
      }, toggle: function(a2) {
        return "boolean" == typeof a2 ? a2 ? this.show() : this.hide() : this.each(function() {
          W(this) ? n(this).show() : n(this).hide();
        });
      } });
      function gb(a2, b2, c2, d2, e2) {
        return new gb.prototype.init(a2, b2, c2, d2, e2);
      }
      n.Tween = gb, gb.prototype = { constructor: gb, init: function(a2, b2, c2, d2, e2, f2) {
        this.elem = a2, this.prop = c2, this.easing = e2 || n.easing._default, this.options = b2, this.start = this.now = this.cur(), this.end = d2, this.unit = f2 || (n.cssNumber[c2] ? "" : "px");
      }, cur: function() {
        var a2 = gb.propHooks[this.prop];
        return a2 && a2.get ? a2.get(this) : gb.propHooks._default.get(this);
      }, run: function(a2) {
        var b2, c2 = gb.propHooks[this.prop];
        return this.options.duration ? this.pos = b2 = n.easing[this.easing](a2, this.options.duration * a2, 0, 1, this.options.duration) : this.pos = b2 = a2, this.now = (this.end - this.start) * b2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c2 && c2.set ? c2.set(this) : gb.propHooks._default.set(this), this;
      } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function(a2) {
        var b2;
        return 1 !== a2.elem.nodeType || null != a2.elem[a2.prop] && null == a2.elem.style[a2.prop] ? a2.elem[a2.prop] : (b2 = n.css(a2.elem, a2.prop, ""), b2 && "auto" !== b2 ? b2 : 0);
      }, set: function(a2) {
        n.fx.step[a2.prop] ? n.fx.step[a2.prop](a2) : 1 !== a2.elem.nodeType || null == a2.elem.style[n.cssProps[a2.prop]] && !n.cssHooks[a2.prop] ? a2.elem[a2.prop] = a2.now : n.style(a2.elem, a2.prop, a2.now + a2.unit);
      } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function(a2) {
        a2.elem.nodeType && a2.elem.parentNode && (a2.elem[a2.prop] = a2.now);
      } }, n.easing = { linear: function(a2) {
        return a2;
      }, swing: function(a2) {
        return 0.5 - Math.cos(a2 * Math.PI) / 2;
      }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {};
      var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
      function lb() {
        return a.setTimeout(function() {
          hb = void 0;
        }), hb = n.now();
      }
      function mb(a2, b2) {
        var c2, d2 = { height: a2 }, e2 = 0;
        for (b2 = b2 ? 1 : 0; 4 > e2; e2 += 2 - b2)
          c2 = V[e2], d2["margin" + c2] = d2["padding" + c2] = a2;
        return b2 && (d2.opacity = d2.width = a2), d2;
      }
      function nb(a2, b2, c2) {
        for (var d2, e2 = (qb.tweeners[b2] || []).concat(qb.tweeners["*"]), f2 = 0, g2 = e2.length; g2 > f2; f2++)
          if (d2 = e2[f2].call(c2, b2, a2))
            return d2;
      }
      function ob(a2, b2, c2) {
        var d2, e2, f2, g2, h2, i2, j2, k2, m2 = this, o2 = {}, p2 = a2.style, q2 = a2.nodeType && W(a2), r2 = n._data(a2, "fxshow");
        c2.queue || (h2 = n._queueHooks(a2, "fx"), null == h2.unqueued && (h2.unqueued = 0, i2 = h2.empty.fire, h2.empty.fire = function() {
          h2.unqueued || i2();
        }), h2.unqueued++, m2.always(function() {
          m2.always(function() {
            h2.unqueued--, n.queue(a2, "fx").length || h2.empty.fire();
          });
        })), 1 === a2.nodeType && ("height" in b2 || "width" in b2) && (c2.overflow = [p2.overflow, p2.overflowX, p2.overflowY], j2 = n.css(a2, "display"), k2 = "none" === j2 ? n._data(a2, "olddisplay") || Ma(a2.nodeName) : j2, "inline" === k2 && "none" === n.css(a2, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a2.nodeName) ? p2.zoom = 1 : p2.display = "inline-block")), c2.overflow && (p2.overflow = "hidden", l.shrinkWrapBlocks() || m2.always(function() {
          p2.overflow = c2.overflow[0], p2.overflowX = c2.overflow[1], p2.overflowY = c2.overflow[2];
        }));
        for (d2 in b2)
          if (e2 = b2[d2], jb.exec(e2)) {
            if (delete b2[d2], f2 = f2 || "toggle" === e2, e2 === (q2 ? "hide" : "show")) {
              if ("show" !== e2 || !r2 || void 0 === r2[d2])
                continue;
              q2 = true;
            }
            o2[d2] = r2 && r2[d2] || n.style(a2, d2);
          } else
            j2 = void 0;
        if (n.isEmptyObject(o2))
          "inline" === ("none" === j2 ? Ma(a2.nodeName) : j2) && (p2.display = j2);
        else {
          r2 ? "hidden" in r2 && (q2 = r2.hidden) : r2 = n._data(a2, "fxshow", {}), f2 && (r2.hidden = !q2), q2 ? n(a2).show() : m2.done(function() {
            n(a2).hide();
          }), m2.done(function() {
            var b3;
            n._removeData(a2, "fxshow");
            for (b3 in o2)
              n.style(a2, b3, o2[b3]);
          });
          for (d2 in o2)
            g2 = nb(q2 ? r2[d2] : 0, d2, m2), d2 in r2 || (r2[d2] = g2.start, q2 && (g2.end = g2.start, g2.start = "width" === d2 || "height" === d2 ? 1 : 0));
        }
      }
      function pb(a2, b2) {
        var c2, d2, e2, f2, g2;
        for (c2 in a2)
          if (d2 = n.camelCase(c2), e2 = b2[d2], f2 = a2[c2], n.isArray(f2) && (e2 = f2[1], f2 = a2[c2] = f2[0]), c2 !== d2 && (a2[d2] = f2, delete a2[c2]), g2 = n.cssHooks[d2], g2 && "expand" in g2) {
            f2 = g2.expand(f2), delete a2[d2];
            for (c2 in f2)
              c2 in a2 || (a2[c2] = f2[c2], b2[c2] = e2);
          } else
            b2[d2] = e2;
      }
      function qb(a2, b2, c2) {
        var d2, e2, f2 = 0, g2 = qb.prefilters.length, h2 = n.Deferred().always(function() {
          delete i2.elem;
        }), i2 = function() {
          if (e2)
            return false;
          for (var b3 = hb || lb(), c3 = Math.max(0, j2.startTime + j2.duration - b3), d3 = c3 / j2.duration || 0, f3 = 1 - d3, g3 = 0, i3 = j2.tweens.length; i3 > g3; g3++)
            j2.tweens[g3].run(f3);
          return h2.notifyWith(a2, [j2, f3, c3]), 1 > f3 && i3 ? c3 : (h2.resolveWith(a2, [j2]), false);
        }, j2 = h2.promise({ elem: a2, props: n.extend({}, b2), opts: n.extend(true, { specialEasing: {}, easing: n.easing._default }, c2), originalProperties: b2, originalOptions: c2, startTime: hb || lb(), duration: c2.duration, tweens: [], createTween: function(b3, c3) {
          var d3 = n.Tween(a2, j2.opts, b3, c3, j2.opts.specialEasing[b3] || j2.opts.easing);
          return j2.tweens.push(d3), d3;
        }, stop: function(b3) {
          var c3 = 0, d3 = b3 ? j2.tweens.length : 0;
          if (e2)
            return this;
          for (e2 = true; d3 > c3; c3++)
            j2.tweens[c3].run(1);
          return b3 ? (h2.notifyWith(a2, [j2, 1, 0]), h2.resolveWith(a2, [j2, b3])) : h2.rejectWith(a2, [j2, b3]), this;
        } }), k2 = j2.props;
        for (pb(k2, j2.opts.specialEasing); g2 > f2; f2++)
          if (d2 = qb.prefilters[f2].call(j2, a2, k2, j2.opts))
            return n.isFunction(d2.stop) && (n._queueHooks(j2.elem, j2.opts.queue).stop = n.proxy(d2.stop, d2)), d2;
        return n.map(k2, nb, j2), n.isFunction(j2.opts.start) && j2.opts.start.call(a2, j2), n.fx.timer(n.extend(i2, { elem: a2, anim: j2, queue: j2.opts.queue })), j2.progress(j2.opts.progress).done(j2.opts.done, j2.opts.complete).fail(j2.opts.fail).always(j2.opts.always);
      }
      n.Animation = n.extend(qb, { tweeners: { "*": [function(a2, b2) {
        var c2 = this.createTween(a2, b2);
        return X(c2.elem, a2, U.exec(b2), c2), c2;
      }] }, tweener: function(a2, b2) {
        n.isFunction(a2) ? (b2 = a2, a2 = ["*"]) : a2 = a2.match(G);
        for (var c2, d2 = 0, e2 = a2.length; e2 > d2; d2++)
          c2 = a2[d2], qb.tweeners[c2] = qb.tweeners[c2] || [], qb.tweeners[c2].unshift(b2);
      }, prefilters: [ob], prefilter: function(a2, b2) {
        b2 ? qb.prefilters.unshift(a2) : qb.prefilters.push(a2);
      } }), n.speed = function(a2, b2, c2) {
        var d2 = a2 && "object" == typeof a2 ? n.extend({}, a2) : { complete: c2 || !c2 && b2 || n.isFunction(a2) && a2, duration: a2, easing: c2 && b2 || b2 && !n.isFunction(b2) && b2 };
        return d2.duration = n.fx.off ? 0 : "number" == typeof d2.duration ? d2.duration : d2.duration in n.fx.speeds ? n.fx.speeds[d2.duration] : n.fx.speeds._default, null != d2.queue && d2.queue !== true || (d2.queue = "fx"), d2.old = d2.complete, d2.complete = function() {
          n.isFunction(d2.old) && d2.old.call(this), d2.queue && n.dequeue(this, d2.queue);
        }, d2;
      }, n.fn.extend({ fadeTo: function(a2, b2, c2, d2) {
        return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b2 }, a2, c2, d2);
      }, animate: function(a2, b2, c2, d2) {
        var e2 = n.isEmptyObject(a2), f2 = n.speed(b2, c2, d2), g2 = function() {
          var b3 = qb(this, n.extend({}, a2), f2);
          (e2 || n._data(this, "finish")) && b3.stop(true);
        };
        return g2.finish = g2, e2 || f2.queue === false ? this.each(g2) : this.queue(f2.queue, g2);
      }, stop: function(a2, b2, c2) {
        var d2 = function(a3) {
          var b3 = a3.stop;
          delete a3.stop, b3(c2);
        };
        return "string" != typeof a2 && (c2 = b2, b2 = a2, a2 = void 0), b2 && a2 !== false && this.queue(a2 || "fx", []), this.each(function() {
          var b3 = true, e2 = null != a2 && a2 + "queueHooks", f2 = n.timers, g2 = n._data(this);
          if (e2)
            g2[e2] && g2[e2].stop && d2(g2[e2]);
          else
            for (e2 in g2)
              g2[e2] && g2[e2].stop && kb.test(e2) && d2(g2[e2]);
          for (e2 = f2.length; e2--; )
            f2[e2].elem !== this || null != a2 && f2[e2].queue !== a2 || (f2[e2].anim.stop(c2), b3 = false, f2.splice(e2, 1));
          !b3 && c2 || n.dequeue(this, a2);
        });
      }, finish: function(a2) {
        return a2 !== false && (a2 = a2 || "fx"), this.each(function() {
          var b2, c2 = n._data(this), d2 = c2[a2 + "queue"], e2 = c2[a2 + "queueHooks"], f2 = n.timers, g2 = d2 ? d2.length : 0;
          for (c2.finish = true, n.queue(this, a2, []), e2 && e2.stop && e2.stop.call(this, true), b2 = f2.length; b2--; )
            f2[b2].elem === this && f2[b2].queue === a2 && (f2[b2].anim.stop(true), f2.splice(b2, 1));
          for (b2 = 0; g2 > b2; b2++)
            d2[b2] && d2[b2].finish && d2[b2].finish.call(this);
          delete c2.finish;
        });
      } }), n.each(["toggle", "show", "hide"], function(a2, b2) {
        var c2 = n.fn[b2];
        n.fn[b2] = function(a3, d2, e2) {
          return null == a3 || "boolean" == typeof a3 ? c2.apply(this, arguments) : this.animate(mb(b2, true), a3, d2, e2);
        };
      }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a2, b2) {
        n.fn[a2] = function(a3, c2, d2) {
          return this.animate(b2, a3, c2, d2);
        };
      }), n.timers = [], n.fx.tick = function() {
        var a2, b2 = n.timers, c2 = 0;
        for (hb = n.now(); c2 < b2.length; c2++)
          a2 = b2[c2], a2() || b2[c2] !== a2 || b2.splice(c2--, 1);
        b2.length || n.fx.stop(), hb = void 0;
      }, n.fx.timer = function(a2) {
        n.timers.push(a2), a2() ? n.fx.start() : n.timers.pop();
      }, n.fx.interval = 13, n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
      }, n.fx.stop = function() {
        a.clearInterval(ib), ib = null;
      }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b2, c2) {
        return b2 = n.fx ? n.fx.speeds[b2] || b2 : b2, c2 = c2 || "fx", this.queue(c2, function(c3, d2) {
          var e2 = a.setTimeout(c3, b2);
          d2.stop = function() {
            a.clearTimeout(e2);
          };
        });
      }, function() {
        var a2, b2 = d.createElement("input"), c2 = d.createElement("div"), e2 = d.createElement("select"), f2 = e2.appendChild(d.createElement("option"));
        c2 = d.createElement("div"), c2.setAttribute("className", "t"), c2.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a2 = c2.getElementsByTagName("a")[0], b2.setAttribute("type", "checkbox"), c2.appendChild(b2), a2 = c2.getElementsByTagName("a")[0], a2.style.cssText = "top:1px", l.getSetAttribute = "t" !== c2.className, l.style = /top/.test(a2.getAttribute("style")), l.hrefNormalized = "/a" === a2.getAttribute("href"), l.checkOn = !!b2.value, l.optSelected = f2.selected, l.enctype = !!d.createElement("form").enctype, e2.disabled = true, l.optDisabled = !f2.disabled, b2 = d.createElement("input"), b2.setAttribute("value", ""), l.input = "" === b2.getAttribute("value"), b2.value = "t", b2.setAttribute("type", "radio"), l.radioValue = "t" === b2.value;
      }();
      var rb = /\r/g, sb = /[\x20\t\r\n\f]+/g;
      n.fn.extend({ val: function(a2) {
        var b2, c2, d2, e2 = this[0];
        {
          if (arguments.length)
            return d2 = n.isFunction(a2), this.each(function(c3) {
              var e3;
              1 === this.nodeType && (e3 = d2 ? a2.call(this, c3, n(this).val()) : a2, null == e3 ? e3 = "" : "number" == typeof e3 ? e3 += "" : n.isArray(e3) && (e3 = n.map(e3, function(a3) {
                return null == a3 ? "" : a3 + "";
              })), b2 = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b2 && "set" in b2 && void 0 !== b2.set(this, e3, "value") || (this.value = e3));
            });
          if (e2)
            return b2 = n.valHooks[e2.type] || n.valHooks[e2.nodeName.toLowerCase()], b2 && "get" in b2 && void 0 !== (c2 = b2.get(e2, "value")) ? c2 : (c2 = e2.value, "string" == typeof c2 ? c2.replace(rb, "") : null == c2 ? "" : c2);
        }
      } }), n.extend({ valHooks: { option: { get: function(a2) {
        var b2 = n.find.attr(a2, "value");
        return null != b2 ? b2 : n.trim(n.text(a2)).replace(sb, " ");
      } }, select: { get: function(a2) {
        for (var b2, c2, d2 = a2.options, e2 = a2.selectedIndex, f2 = "select-one" === a2.type || 0 > e2, g2 = f2 ? null : [], h2 = f2 ? e2 + 1 : d2.length, i2 = 0 > e2 ? h2 : f2 ? e2 : 0; h2 > i2; i2++)
          if (c2 = d2[i2], (c2.selected || i2 === e2) && (l.optDisabled ? !c2.disabled : null === c2.getAttribute("disabled")) && (!c2.parentNode.disabled || !n.nodeName(c2.parentNode, "optgroup"))) {
            if (b2 = n(c2).val(), f2)
              return b2;
            g2.push(b2);
          }
        return g2;
      }, set: function(a2, b2) {
        var c2, d2, e2 = a2.options, f2 = n.makeArray(b2), g2 = e2.length;
        while (g2--)
          if (d2 = e2[g2], n.inArray(n.valHooks.option.get(d2), f2) > -1)
            try {
              d2.selected = c2 = true;
            } catch (h2) {
              d2.scrollHeight;
            }
          else
            d2.selected = false;
        return c2 || (a2.selectedIndex = -1), e2;
      } } } }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = { set: function(a2, b2) {
          return n.isArray(b2) ? a2.checked = n.inArray(n(a2).val(), b2) > -1 : void 0;
        } }, l.checkOn || (n.valHooks[this].get = function(a2) {
          return null === a2.getAttribute("value") ? "on" : a2.value;
        });
      });
      var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
      n.fn.extend({ attr: function(a2, b2) {
        return Y(this, n.attr, a2, b2, arguments.length > 1);
      }, removeAttr: function(a2) {
        return this.each(function() {
          n.removeAttr(this, a2);
        });
      } }), n.extend({ attr: function(a2, b2, c2) {
        var d2, e2, f2 = a2.nodeType;
        if (3 !== f2 && 8 !== f2 && 2 !== f2)
          return "undefined" == typeof a2.getAttribute ? n.prop(a2, b2, c2) : (1 === f2 && n.isXMLDoc(a2) || (b2 = b2.toLowerCase(), e2 = n.attrHooks[b2] || (n.expr.match.bool.test(b2) ? ub : tb)), void 0 !== c2 ? null === c2 ? void n.removeAttr(a2, b2) : e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : (a2.setAttribute(b2, c2 + ""), c2) : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : (d2 = n.find.attr(a2, b2), null == d2 ? void 0 : d2));
      }, attrHooks: { type: { set: function(a2, b2) {
        if (!l.radioValue && "radio" === b2 && n.nodeName(a2, "input")) {
          var c2 = a2.value;
          return a2.setAttribute("type", b2), c2 && (a2.value = c2), b2;
        }
      } } }, removeAttr: function(a2, b2) {
        var c2, d2, e2 = 0, f2 = b2 && b2.match(G);
        if (f2 && 1 === a2.nodeType)
          while (c2 = f2[e2++])
            d2 = n.propFix[c2] || c2, n.expr.match.bool.test(c2) ? yb && xb || !wb.test(c2) ? a2[d2] = false : a2[n.camelCase("default-" + c2)] = a2[d2] = false : n.attr(a2, c2, ""), a2.removeAttribute(xb ? c2 : d2);
      } }), ub = { set: function(a2, b2, c2) {
        return b2 === false ? n.removeAttr(a2, c2) : yb && xb || !wb.test(c2) ? a2.setAttribute(!xb && n.propFix[c2] || c2, c2) : a2[n.camelCase("default-" + c2)] = a2[c2] = true, c2;
      } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a2, b2) {
        var c2 = vb[b2] || n.find.attr;
        yb && xb || !wb.test(b2) ? vb[b2] = function(a3, b3, d2) {
          var e2, f2;
          return d2 || (f2 = vb[b3], vb[b3] = e2, e2 = null != c2(a3, b3, d2) ? b3.toLowerCase() : null, vb[b3] = f2), e2;
        } : vb[b2] = function(a3, b3, c3) {
          return c3 ? void 0 : a3[n.camelCase("default-" + b3)] ? b3.toLowerCase() : null;
        };
      }), yb && xb || (n.attrHooks.value = { set: function(a2, b2, c2) {
        return n.nodeName(a2, "input") ? void (a2.defaultValue = b2) : tb && tb.set(a2, b2, c2);
      } }), xb || (tb = { set: function(a2, b2, c2) {
        var d2 = a2.getAttributeNode(c2);
        return d2 || a2.setAttributeNode(d2 = a2.ownerDocument.createAttribute(c2)), d2.value = b2 += "", "value" === c2 || b2 === a2.getAttribute(c2) ? b2 : void 0;
      } }, vb.id = vb.name = vb.coords = function(a2, b2, c2) {
        var d2;
        return c2 ? void 0 : (d2 = a2.getAttributeNode(b2)) && "" !== d2.value ? d2.value : null;
      }, n.valHooks.button = { get: function(a2, b2) {
        var c2 = a2.getAttributeNode(b2);
        return c2 && c2.specified ? c2.value : void 0;
      }, set: tb.set }, n.attrHooks.contenteditable = { set: function(a2, b2, c2) {
        tb.set(a2, "" === b2 ? false : b2, c2);
      } }, n.each(["width", "height"], function(a2, b2) {
        n.attrHooks[b2] = { set: function(a3, c2) {
          return "" === c2 ? (a3.setAttribute(b2, "auto"), c2) : void 0;
        } };
      })), l.style || (n.attrHooks.style = { get: function(a2) {
        return a2.style.cssText || void 0;
      }, set: function(a2, b2) {
        return a2.style.cssText = b2 + "";
      } });
      var zb = /^(?:input|select|textarea|button|object)$/i, Ab = /^(?:a|area)$/i;
      n.fn.extend({ prop: function(a2, b2) {
        return Y(this, n.prop, a2, b2, arguments.length > 1);
      }, removeProp: function(a2) {
        return a2 = n.propFix[a2] || a2, this.each(function() {
          try {
            this[a2] = void 0, delete this[a2];
          } catch (b2) {
          }
        });
      } }), n.extend({ prop: function(a2, b2, c2) {
        var d2, e2, f2 = a2.nodeType;
        if (3 !== f2 && 8 !== f2 && 2 !== f2)
          return 1 === f2 && n.isXMLDoc(a2) || (b2 = n.propFix[b2] || b2, e2 = n.propHooks[b2]), void 0 !== c2 ? e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : a2[b2] = c2 : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : a2[b2];
      }, propHooks: { tabIndex: { get: function(a2) {
        var b2 = n.find.attr(a2, "tabindex");
        return b2 ? parseInt(b2, 10) : zb.test(a2.nodeName) || Ab.test(a2.nodeName) && a2.href ? 0 : -1;
      } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function(a2, b2) {
        n.propHooks[b2] = { get: function(a3) {
          return a3.getAttribute(b2, 4);
        } };
      }), l.optSelected || (n.propHooks.selected = { get: function(a2) {
        var b2 = a2.parentNode;
        return b2 && (b2.selectedIndex, b2.parentNode && b2.parentNode.selectedIndex), null;
      }, set: function(a2) {
        var b2 = a2.parentNode;
        b2 && (b2.selectedIndex, b2.parentNode && b2.parentNode.selectedIndex);
      } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this;
      }), l.enctype || (n.propFix.enctype = "encoding");
      var Bb = /[\t\r\n\f]/g;
      function Cb(a2) {
        return n.attr(a2, "class") || "";
      }
      n.fn.extend({ addClass: function(a2) {
        var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
        if (n.isFunction(a2))
          return this.each(function(b3) {
            n(this).addClass(a2.call(this, b3, Cb(this)));
          });
        if ("string" == typeof a2 && a2) {
          b2 = a2.match(G) || [];
          while (c2 = this[i2++])
            if (e2 = Cb(c2), d2 = 1 === c2.nodeType && (" " + e2 + " ").replace(Bb, " ")) {
              g2 = 0;
              while (f2 = b2[g2++])
                d2.indexOf(" " + f2 + " ") < 0 && (d2 += f2 + " ");
              h2 = n.trim(d2), e2 !== h2 && n.attr(c2, "class", h2);
            }
        }
        return this;
      }, removeClass: function(a2) {
        var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
        if (n.isFunction(a2))
          return this.each(function(b3) {
            n(this).removeClass(a2.call(this, b3, Cb(this)));
          });
        if (!arguments.length)
          return this.attr("class", "");
        if ("string" == typeof a2 && a2) {
          b2 = a2.match(G) || [];
          while (c2 = this[i2++])
            if (e2 = Cb(c2), d2 = 1 === c2.nodeType && (" " + e2 + " ").replace(Bb, " ")) {
              g2 = 0;
              while (f2 = b2[g2++])
                while (d2.indexOf(" " + f2 + " ") > -1)
                  d2 = d2.replace(" " + f2 + " ", " ");
              h2 = n.trim(d2), e2 !== h2 && n.attr(c2, "class", h2);
            }
        }
        return this;
      }, toggleClass: function(a2, b2) {
        var c2 = typeof a2;
        return "boolean" == typeof b2 && "string" === c2 ? b2 ? this.addClass(a2) : this.removeClass(a2) : n.isFunction(a2) ? this.each(function(c3) {
          n(this).toggleClass(a2.call(this, c3, Cb(this), b2), b2);
        }) : this.each(function() {
          var b3, d2, e2, f2;
          if ("string" === c2) {
            d2 = 0, e2 = n(this), f2 = a2.match(G) || [];
            while (b3 = f2[d2++])
              e2.hasClass(b3) ? e2.removeClass(b3) : e2.addClass(b3);
          } else
            void 0 !== a2 && "boolean" !== c2 || (b3 = Cb(this), b3 && n._data(this, "__className__", b3), n.attr(this, "class", b3 || a2 === false ? "" : n._data(this, "__className__") || ""));
        });
      }, hasClass: function(a2) {
        var b2, c2, d2 = 0;
        b2 = " " + a2 + " ";
        while (c2 = this[d2++])
          if (1 === c2.nodeType && (" " + Cb(c2) + " ").replace(Bb, " ").indexOf(b2) > -1)
            return true;
        return false;
      } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a2, b2) {
        n.fn[b2] = function(a3, c2) {
          return arguments.length > 0 ? this.on(b2, null, a3, c2) : this.trigger(b2);
        };
      }), n.fn.extend({ hover: function(a2, b2) {
        return this.mouseenter(a2).mouseleave(b2 || a2);
      } });
      var Db = a.location, Eb = n.now(), Fb = /\?/, Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
      n.parseJSON = function(b2) {
        if (a.JSON && a.JSON.parse)
          return a.JSON.parse(b2 + "");
        var c2, d2 = null, e2 = n.trim(b2 + "");
        return e2 && !n.trim(e2.replace(Gb, function(a2, b3, e3, f2) {
          return c2 && b3 && (d2 = 0), 0 === d2 ? a2 : (c2 = e3 || b3, d2 += !f2 - !e3, "");
        })) ? Function("return " + e2)() : n.error("Invalid JSON: " + b2);
      }, n.parseXML = function(b2) {
        var c2, d2;
        if (!b2 || "string" != typeof b2)
          return null;
        try {
          a.DOMParser ? (d2 = new a.DOMParser(), c2 = d2.parseFromString(b2, "text/xml")) : (c2 = new a.ActiveXObject("Microsoft.XMLDOM"), c2.async = "false", c2.loadXML(b2));
        } catch (e2) {
          c2 = void 0;
        }
        return c2 && c2.documentElement && !c2.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b2), c2;
      };
      var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ob = {}, Pb = {}, Qb = "*/".concat("*"), Rb = Db.href, Sb = Nb.exec(Rb.toLowerCase()) || [];
      function Tb(a2) {
        return function(b2, c2) {
          "string" != typeof b2 && (c2 = b2, b2 = "*");
          var d2, e2 = 0, f2 = b2.toLowerCase().match(G) || [];
          if (n.isFunction(c2))
            while (d2 = f2[e2++])
              "+" === d2.charAt(0) ? (d2 = d2.slice(1) || "*", (a2[d2] = a2[d2] || []).unshift(c2)) : (a2[d2] = a2[d2] || []).push(c2);
        };
      }
      function Ub(a2, b2, c2, d2) {
        var e2 = {}, f2 = a2 === Pb;
        function g2(h2) {
          var i2;
          return e2[h2] = true, n.each(a2[h2] || [], function(a3, h3) {
            var j2 = h3(b2, c2, d2);
            return "string" != typeof j2 || f2 || e2[j2] ? f2 ? !(i2 = j2) : void 0 : (b2.dataTypes.unshift(j2), g2(j2), false);
          }), i2;
        }
        return g2(b2.dataTypes[0]) || !e2["*"] && g2("*");
      }
      function Vb(a2, b2) {
        var c2, d2, e2 = n.ajaxSettings.flatOptions || {};
        for (d2 in b2)
          void 0 !== b2[d2] && ((e2[d2] ? a2 : c2 || (c2 = {}))[d2] = b2[d2]);
        return c2 && n.extend(true, a2, c2), a2;
      }
      function Wb(a2, b2, c2) {
        var d2, e2, f2, g2, h2 = a2.contents, i2 = a2.dataTypes;
        while ("*" === i2[0])
          i2.shift(), void 0 === e2 && (e2 = a2.mimeType || b2.getResponseHeader("Content-Type"));
        if (e2) {
          for (g2 in h2)
            if (h2[g2] && h2[g2].test(e2)) {
              i2.unshift(g2);
              break;
            }
        }
        if (i2[0] in c2)
          f2 = i2[0];
        else {
          for (g2 in c2) {
            if (!i2[0] || a2.converters[g2 + " " + i2[0]]) {
              f2 = g2;
              break;
            }
            d2 || (d2 = g2);
          }
          f2 = f2 || d2;
        }
        return f2 ? (f2 !== i2[0] && i2.unshift(f2), c2[f2]) : void 0;
      }
      function Xb(a2, b2, c2, d2) {
        var e2, f2, g2, h2, i2, j2 = {}, k2 = a2.dataTypes.slice();
        if (k2[1])
          for (g2 in a2.converters)
            j2[g2.toLowerCase()] = a2.converters[g2];
        f2 = k2.shift();
        while (f2)
          if (a2.responseFields[f2] && (c2[a2.responseFields[f2]] = b2), !i2 && d2 && a2.dataFilter && (b2 = a2.dataFilter(b2, a2.dataType)), i2 = f2, f2 = k2.shift()) {
            if ("*" === f2)
              f2 = i2;
            else if ("*" !== i2 && i2 !== f2) {
              if (g2 = j2[i2 + " " + f2] || j2["* " + f2], !g2) {
                for (e2 in j2)
                  if (h2 = e2.split(" "), h2[1] === f2 && (g2 = j2[i2 + " " + h2[0]] || j2["* " + h2[0]])) {
                    g2 === true ? g2 = j2[e2] : j2[e2] !== true && (f2 = h2[0], k2.unshift(h2[1]));
                    break;
                  }
              }
              if (g2 !== true)
                if (g2 && a2["throws"])
                  b2 = g2(b2);
                else
                  try {
                    b2 = g2(b2);
                  } catch (l2) {
                    return { state: "parsererror", error: g2 ? l2 : "No conversion from " + i2 + " to " + f2 };
                  }
            }
          }
        return { state: "success", data: b2 };
      }
      n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(a2, b2) {
        return b2 ? Vb(Vb(a2, n.ajaxSettings), b2) : Vb(n.ajaxSettings, a2);
      }, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function(b2, c2) {
        "object" == typeof b2 && (c2 = b2, b2 = void 0), c2 = c2 || {};
        var d2, e2, f2, g2, h2, i2, j2, k2, l2 = n.ajaxSetup({}, c2), m2 = l2.context || l2, o2 = l2.context && (m2.nodeType || m2.jquery) ? n(m2) : n.event, p2 = n.Deferred(), q2 = n.Callbacks("once memory"), r2 = l2.statusCode || {}, s2 = {}, t2 = {}, u2 = 0, v2 = "canceled", w2 = { readyState: 0, getResponseHeader: function(a2) {
          var b3;
          if (2 === u2) {
            if (!k2) {
              k2 = {};
              while (b3 = Jb.exec(g2))
                k2[b3[1].toLowerCase()] = b3[2];
            }
            b3 = k2[a2.toLowerCase()];
          }
          return null == b3 ? null : b3;
        }, getAllResponseHeaders: function() {
          return 2 === u2 ? g2 : null;
        }, setRequestHeader: function(a2, b3) {
          var c3 = a2.toLowerCase();
          return u2 || (a2 = t2[c3] = t2[c3] || a2, s2[a2] = b3), this;
        }, overrideMimeType: function(a2) {
          return u2 || (l2.mimeType = a2), this;
        }, statusCode: function(a2) {
          var b3;
          if (a2)
            if (2 > u2)
              for (b3 in a2)
                r2[b3] = [r2[b3], a2[b3]];
            else
              w2.always(a2[w2.status]);
          return this;
        }, abort: function(a2) {
          var b3 = a2 || v2;
          return j2 && j2.abort(b3), y2(0, b3), this;
        } };
        if (p2.promise(w2).complete = q2.add, w2.success = w2.done, w2.error = w2.fail, l2.url = ((b2 || l2.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l2.type = c2.method || c2.type || l2.method || l2.type, l2.dataTypes = n.trim(l2.dataType || "*").toLowerCase().match(G) || [""], null == l2.crossDomain && (d2 = Nb.exec(l2.url.toLowerCase()), l2.crossDomain = !(!d2 || d2[1] === Sb[1] && d2[2] === Sb[2] && (d2[3] || ("http:" === d2[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l2.data && l2.processData && "string" != typeof l2.data && (l2.data = n.param(l2.data, l2.traditional)), Ub(Ob, l2, c2, w2), 2 === u2)
          return w2;
        i2 = n.event && l2.global, i2 && 0 === n.active++ && n.event.trigger("ajaxStart"), l2.type = l2.type.toUpperCase(), l2.hasContent = !Lb.test(l2.type), f2 = l2.url, l2.hasContent || (l2.data && (f2 = l2.url += (Fb.test(f2) ? "&" : "?") + l2.data, delete l2.data), l2.cache === false && (l2.url = Ib.test(f2) ? f2.replace(Ib, "$1_=" + Eb++) : f2 + (Fb.test(f2) ? "&" : "?") + "_=" + Eb++)), l2.ifModified && (n.lastModified[f2] && w2.setRequestHeader("If-Modified-Since", n.lastModified[f2]), n.etag[f2] && w2.setRequestHeader("If-None-Match", n.etag[f2])), (l2.data && l2.hasContent && l2.contentType !== false || c2.contentType) && w2.setRequestHeader("Content-Type", l2.contentType), w2.setRequestHeader("Accept", l2.dataTypes[0] && l2.accepts[l2.dataTypes[0]] ? l2.accepts[l2.dataTypes[0]] + ("*" !== l2.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l2.accepts["*"]);
        for (e2 in l2.headers)
          w2.setRequestHeader(e2, l2.headers[e2]);
        if (l2.beforeSend && (l2.beforeSend.call(m2, w2, l2) === false || 2 === u2))
          return w2.abort();
        v2 = "abort";
        for (e2 in { success: 1, error: 1, complete: 1 })
          w2[e2](l2[e2]);
        if (j2 = Ub(Pb, l2, c2, w2)) {
          if (w2.readyState = 1, i2 && o2.trigger("ajaxSend", [w2, l2]), 2 === u2)
            return w2;
          l2.async && l2.timeout > 0 && (h2 = a.setTimeout(function() {
            w2.abort("timeout");
          }, l2.timeout));
          try {
            u2 = 1, j2.send(s2, y2);
          } catch (x2) {
            if (!(2 > u2))
              throw x2;
            y2(-1, x2);
          }
        } else
          y2(-1, "No Transport");
        function y2(b3, c3, d3, e3) {
          var k3, s3, t3, v3, x2, y3 = c3;
          2 !== u2 && (u2 = 2, h2 && a.clearTimeout(h2), j2 = void 0, g2 = e3 || "", w2.readyState = b3 > 0 ? 4 : 0, k3 = b3 >= 200 && 300 > b3 || 304 === b3, d3 && (v3 = Wb(l2, w2, d3)), v3 = Xb(l2, v3, w2, k3), k3 ? (l2.ifModified && (x2 = w2.getResponseHeader("Last-Modified"), x2 && (n.lastModified[f2] = x2), x2 = w2.getResponseHeader("etag"), x2 && (n.etag[f2] = x2)), 204 === b3 || "HEAD" === l2.type ? y3 = "nocontent" : 304 === b3 ? y3 = "notmodified" : (y3 = v3.state, s3 = v3.data, t3 = v3.error, k3 = !t3)) : (t3 = y3, !b3 && y3 || (y3 = "error", 0 > b3 && (b3 = 0))), w2.status = b3, w2.statusText = (c3 || y3) + "", k3 ? p2.resolveWith(m2, [s3, y3, w2]) : p2.rejectWith(m2, [w2, y3, t3]), w2.statusCode(r2), r2 = void 0, i2 && o2.trigger(k3 ? "ajaxSuccess" : "ajaxError", [w2, l2, k3 ? s3 : t3]), q2.fireWith(m2, [w2, y3]), i2 && (o2.trigger("ajaxComplete", [w2, l2]), --n.active || n.event.trigger("ajaxStop")));
        }
        return w2;
      }, getJSON: function(a2, b2, c2) {
        return n.get(a2, b2, c2, "json");
      }, getScript: function(a2, b2) {
        return n.get(a2, void 0, b2, "script");
      } }), n.each(["get", "post"], function(a2, b2) {
        n[b2] = function(a3, c2, d2, e2) {
          return n.isFunction(c2) && (e2 = e2 || d2, d2 = c2, c2 = void 0), n.ajax(n.extend({ url: a3, type: b2, dataType: e2, data: c2, success: d2 }, n.isPlainObject(a3) && a3));
        };
      }), n._evalUrl = function(a2) {
        return n.ajax({ url: a2, type: "GET", dataType: "script", cache: true, async: false, global: false, "throws": true });
      }, n.fn.extend({ wrapAll: function(a2) {
        if (n.isFunction(a2))
          return this.each(function(b3) {
            n(this).wrapAll(a2.call(this, b3));
          });
        if (this[0]) {
          var b2 = n(a2, this[0].ownerDocument).eq(0).clone(true);
          this[0].parentNode && b2.insertBefore(this[0]), b2.map(function() {
            var a3 = this;
            while (a3.firstChild && 1 === a3.firstChild.nodeType)
              a3 = a3.firstChild;
            return a3;
          }).append(this);
        }
        return this;
      }, wrapInner: function(a2) {
        return n.isFunction(a2) ? this.each(function(b2) {
          n(this).wrapInner(a2.call(this, b2));
        }) : this.each(function() {
          var b2 = n(this), c2 = b2.contents();
          c2.length ? c2.wrapAll(a2) : b2.append(a2);
        });
      }, wrap: function(a2) {
        var b2 = n.isFunction(a2);
        return this.each(function(c2) {
          n(this).wrapAll(b2 ? a2.call(this, c2) : a2);
        });
      }, unwrap: function() {
        return this.parent().each(function() {
          n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
        }).end();
      } });
      function Yb(a2) {
        return a2.style && a2.style.display || n.css(a2, "display");
      }
      function Zb(a2) {
        if (!n.contains(a2.ownerDocument || d, a2))
          return true;
        while (a2 && 1 === a2.nodeType) {
          if ("none" === Yb(a2) || "hidden" === a2.type)
            return true;
          a2 = a2.parentNode;
        }
        return false;
      }
      n.expr.filters.hidden = function(a2) {
        return l.reliableHiddenOffsets() ? a2.offsetWidth <= 0 && a2.offsetHeight <= 0 && !a2.getClientRects().length : Zb(a2);
      }, n.expr.filters.visible = function(a2) {
        return !n.expr.filters.hidden(a2);
      };
      var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i, cc = /^(?:input|select|textarea|keygen)/i;
      function dc(a2, b2, c2, d2) {
        var e2;
        if (n.isArray(b2))
          n.each(b2, function(b3, e3) {
            c2 || _b.test(a2) ? d2(a2, e3) : dc(a2 + "[" + ("object" == typeof e3 && null != e3 ? b3 : "") + "]", e3, c2, d2);
          });
        else if (c2 || "object" !== n.type(b2))
          d2(a2, b2);
        else
          for (e2 in b2)
            dc(a2 + "[" + e2 + "]", b2[e2], c2, d2);
      }
      n.param = function(a2, b2) {
        var c2, d2 = [], e2 = function(a3, b3) {
          b3 = n.isFunction(b3) ? b3() : null == b3 ? "" : b3, d2[d2.length] = encodeURIComponent(a3) + "=" + encodeURIComponent(b3);
        };
        if (void 0 === b2 && (b2 = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a2) || a2.jquery && !n.isPlainObject(a2))
          n.each(a2, function() {
            e2(this.name, this.value);
          });
        else
          for (c2 in a2)
            dc(c2, a2[c2], b2, e2);
        return d2.join("&").replace($b, "+");
      }, n.fn.extend({ serialize: function() {
        return n.param(this.serializeArray());
      }, serializeArray: function() {
        return this.map(function() {
          var a2 = n.prop(this, "elements");
          return a2 ? n.makeArray(a2) : this;
        }).filter(function() {
          var a2 = this.type;
          return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a2) && (this.checked || !Z.test(a2));
        }).map(function(a2, b2) {
          var c2 = n(this).val();
          return null == c2 ? null : n.isArray(c2) ? n.map(c2, function(a3) {
            return { name: b2.name, value: a3.replace(ac, "\r\n") };
          }) : { name: b2.name, value: c2.replace(ac, "\r\n") };
        }).get();
      } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
      } : hc;
      var ec = 0, fc = {}, gc = n.ajaxSettings.xhr();
      a.attachEvent && a.attachEvent("onunload", function() {
        for (var a2 in fc)
          fc[a2](void 0, true);
      }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b2) {
        if (!b2.crossDomain || l.cors) {
          var c2;
          return { send: function(d2, e2) {
            var f2, g2 = b2.xhr(), h2 = ++ec;
            if (g2.open(b2.type, b2.url, b2.async, b2.username, b2.password), b2.xhrFields)
              for (f2 in b2.xhrFields)
                g2[f2] = b2.xhrFields[f2];
            b2.mimeType && g2.overrideMimeType && g2.overrideMimeType(b2.mimeType), b2.crossDomain || d2["X-Requested-With"] || (d2["X-Requested-With"] = "XMLHttpRequest");
            for (f2 in d2)
              void 0 !== d2[f2] && g2.setRequestHeader(f2, d2[f2] + "");
            g2.send(b2.hasContent && b2.data || null), c2 = function(a2, d3) {
              var f3, i2, j2;
              if (c2 && (d3 || 4 === g2.readyState))
                if (delete fc[h2], c2 = void 0, g2.onreadystatechange = n.noop, d3)
                  4 !== g2.readyState && g2.abort();
                else {
                  j2 = {}, f3 = g2.status, "string" == typeof g2.responseText && (j2.text = g2.responseText);
                  try {
                    i2 = g2.statusText;
                  } catch (k2) {
                    i2 = "";
                  }
                  f3 || !b2.isLocal || b2.crossDomain ? 1223 === f3 && (f3 = 204) : f3 = j2.text ? 200 : 404;
                }
              j2 && e2(f3, i2, j2, g2.getAllResponseHeaders());
            }, b2.async ? 4 === g2.readyState ? a.setTimeout(c2) : g2.onreadystatechange = fc[h2] = c2 : c2();
          }, abort: function() {
            c2 && c2(void 0, true);
          } };
        }
      });
      function hc() {
        try {
          return new a.XMLHttpRequest();
        } catch (b2) {
        }
      }
      function ic() {
        try {
          return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b2) {
        }
      }
      n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a2) {
        return n.globalEval(a2), a2;
      } } }), n.ajaxPrefilter("script", function(a2) {
        void 0 === a2.cache && (a2.cache = false), a2.crossDomain && (a2.type = "GET", a2.global = false);
      }), n.ajaxTransport("script", function(a2) {
        if (a2.crossDomain) {
          var b2, c2 = d.head || n("head")[0] || d.documentElement;
          return { send: function(e2, f2) {
            b2 = d.createElement("script"), b2.async = true, a2.scriptCharset && (b2.charset = a2.scriptCharset), b2.src = a2.url, b2.onload = b2.onreadystatechange = function(a3, c3) {
              (c3 || !b2.readyState || /loaded|complete/.test(b2.readyState)) && (b2.onload = b2.onreadystatechange = null, b2.parentNode && b2.parentNode.removeChild(b2), b2 = null, c3 || f2(200, "success"));
            }, c2.insertBefore(b2, c2.firstChild);
          }, abort: function() {
            b2 && b2.onload(void 0, true);
          } };
        }
      });
      var jc = [], kc = /(=)\?(?=&|$)|\?\?/;
      n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
        var a2 = jc.pop() || n.expando + "_" + Eb++;
        return this[a2] = true, a2;
      } }), n.ajaxPrefilter("json jsonp", function(b2, c2, d2) {
        var e2, f2, g2, h2 = b2.jsonp !== false && (kc.test(b2.url) ? "url" : "string" == typeof b2.data && 0 === (b2.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b2.data) && "data");
        return h2 || "jsonp" === b2.dataTypes[0] ? (e2 = b2.jsonpCallback = n.isFunction(b2.jsonpCallback) ? b2.jsonpCallback() : b2.jsonpCallback, h2 ? b2[h2] = b2[h2].replace(kc, "$1" + e2) : b2.jsonp !== false && (b2.url += (Fb.test(b2.url) ? "&" : "?") + b2.jsonp + "=" + e2), b2.converters["script json"] = function() {
          return g2 || n.error(e2 + " was not called"), g2[0];
        }, b2.dataTypes[0] = "json", f2 = a[e2], a[e2] = function() {
          g2 = arguments;
        }, d2.always(function() {
          void 0 === f2 ? n(a).removeProp(e2) : a[e2] = f2, b2[e2] && (b2.jsonpCallback = c2.jsonpCallback, jc.push(e2)), g2 && n.isFunction(f2) && f2(g2[0]), g2 = f2 = void 0;
        }), "script") : void 0;
      }), n.parseHTML = function(a2, b2, c2) {
        if (!a2 || "string" != typeof a2)
          return null;
        "boolean" == typeof b2 && (c2 = b2, b2 = false), b2 = b2 || d;
        var e2 = x.exec(a2), f2 = !c2 && [];
        return e2 ? [b2.createElement(e2[1])] : (e2 = ja([a2], b2, f2), f2 && f2.length && n(f2).remove(), n.merge([], e2.childNodes));
      };
      var lc = n.fn.load;
      n.fn.load = function(a2, b2, c2) {
        if ("string" != typeof a2 && lc)
          return lc.apply(this, arguments);
        var d2, e2, f2, g2 = this, h2 = a2.indexOf(" ");
        return h2 > -1 && (d2 = n.trim(a2.slice(h2, a2.length)), a2 = a2.slice(0, h2)), n.isFunction(b2) ? (c2 = b2, b2 = void 0) : b2 && "object" == typeof b2 && (e2 = "POST"), g2.length > 0 && n.ajax({ url: a2, type: e2 || "GET", dataType: "html", data: b2 }).done(function(a3) {
          f2 = arguments, g2.html(d2 ? n("<div>").append(n.parseHTML(a3)).find(d2) : a3);
        }).always(c2 && function(a3, b3) {
          g2.each(function() {
            c2.apply(this, f2 || [a3.responseText, b3, a3]);
          });
        }), this;
      }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a2, b2) {
        n.fn[b2] = function(a3) {
          return this.on(b2, a3);
        };
      }), n.expr.filters.animated = function(a2) {
        return n.grep(n.timers, function(b2) {
          return a2 === b2.elem;
        }).length;
      };
      function mc(a2) {
        return n.isWindow(a2) ? a2 : 9 === a2.nodeType ? a2.defaultView || a2.parentWindow : false;
      }
      n.offset = { setOffset: function(a2, b2, c2) {
        var d2, e2, f2, g2, h2, i2, j2, k2 = n.css(a2, "position"), l2 = n(a2), m2 = {};
        "static" === k2 && (a2.style.position = "relative"), h2 = l2.offset(), f2 = n.css(a2, "top"), i2 = n.css(a2, "left"), j2 = ("absolute" === k2 || "fixed" === k2) && n.inArray("auto", [f2, i2]) > -1, j2 ? (d2 = l2.position(), g2 = d2.top, e2 = d2.left) : (g2 = parseFloat(f2) || 0, e2 = parseFloat(i2) || 0), n.isFunction(b2) && (b2 = b2.call(a2, c2, n.extend({}, h2))), null != b2.top && (m2.top = b2.top - h2.top + g2), null != b2.left && (m2.left = b2.left - h2.left + e2), "using" in b2 ? b2.using.call(a2, m2) : l2.css(m2);
      } }, n.fn.extend({ offset: function(a2) {
        if (arguments.length)
          return void 0 === a2 ? this : this.each(function(b3) {
            n.offset.setOffset(this, a2, b3);
          });
        var b2, c2, d2 = { top: 0, left: 0 }, e2 = this[0], f2 = e2 && e2.ownerDocument;
        if (f2)
          return b2 = f2.documentElement, n.contains(b2, e2) ? ("undefined" != typeof e2.getBoundingClientRect && (d2 = e2.getBoundingClientRect()), c2 = mc(f2), { top: d2.top + (c2.pageYOffset || b2.scrollTop) - (b2.clientTop || 0), left: d2.left + (c2.pageXOffset || b2.scrollLeft) - (b2.clientLeft || 0) }) : d2;
      }, position: function() {
        if (this[0]) {
          var a2, b2, c2 = { top: 0, left: 0 }, d2 = this[0];
          return "fixed" === n.css(d2, "position") ? b2 = d2.getBoundingClientRect() : (a2 = this.offsetParent(), b2 = this.offset(), n.nodeName(a2[0], "html") || (c2 = a2.offset()), c2.top += n.css(a2[0], "borderTopWidth", true), c2.left += n.css(a2[0], "borderLeftWidth", true)), { top: b2.top - c2.top - n.css(d2, "marginTop", true), left: b2.left - c2.left - n.css(d2, "marginLeft", true) };
        }
      }, offsetParent: function() {
        return this.map(function() {
          var a2 = this.offsetParent;
          while (a2 && !n.nodeName(a2, "html") && "static" === n.css(a2, "position"))
            a2 = a2.offsetParent;
          return a2 || Qa;
        });
      } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a2, b2) {
        var c2 = /Y/.test(b2);
        n.fn[a2] = function(d2) {
          return Y(this, function(a3, d3, e2) {
            var f2 = mc(a3);
            return void 0 === e2 ? f2 ? b2 in f2 ? f2[b2] : f2.document.documentElement[d3] : a3[d3] : void (f2 ? f2.scrollTo(c2 ? n(f2).scrollLeft() : e2, c2 ? e2 : n(f2).scrollTop()) : a3[d3] = e2);
          }, a2, d2, arguments.length, null);
        };
      }), n.each(["top", "left"], function(a2, b2) {
        n.cssHooks[b2] = Ua(l.pixelPosition, function(a3, c2) {
          return c2 ? (c2 = Sa(a3, b2), Oa.test(c2) ? n(a3).position()[b2] + "px" : c2) : void 0;
        });
      }), n.each({ Height: "height", Width: "width" }, function(a2, b2) {
        n.each({
          padding: "inner" + a2,
          content: b2,
          "": "outer" + a2
        }, function(c2, d2) {
          n.fn[d2] = function(d3, e2) {
            var f2 = arguments.length && (c2 || "boolean" != typeof d3), g2 = c2 || (d3 === true || e2 === true ? "margin" : "border");
            return Y(this, function(b3, c3, d4) {
              var e3;
              return n.isWindow(b3) ? b3.document.documentElement["client" + a2] : 9 === b3.nodeType ? (e3 = b3.documentElement, Math.max(b3.body["scroll" + a2], e3["scroll" + a2], b3.body["offset" + a2], e3["offset" + a2], e3["client" + a2])) : void 0 === d4 ? n.css(b3, c3, g2) : n.style(b3, c3, d4, g2);
            }, b2, f2 ? d3 : void 0, f2, null);
          };
        });
      }), n.fn.extend({ bind: function(a2, b2, c2) {
        return this.on(a2, null, b2, c2);
      }, unbind: function(a2, b2) {
        return this.off(a2, null, b2);
      }, delegate: function(a2, b2, c2, d2) {
        return this.on(b2, a2, c2, d2);
      }, undelegate: function(a2, b2, c2) {
        return 1 === arguments.length ? this.off(a2, "**") : this.off(b2, a2 || "**", c2);
      } }), n.fn.size = function() {
        return this.length;
      }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
      });
      var nc = a.jQuery, oc = a.$;
      return n.noConflict = function(b2) {
        return a.$ === n && (a.$ = oc), b2 && a.jQuery === n && (a.jQuery = nc), n;
      }, b || (a.jQuery = a.$ = n), n;
    });
    !function(t, e) {
      "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e();
    }(globalThis, function(t, e, o) {
      function i(t2, e2) {
        if (!(t2 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(t2) {
        var e2 = getComputedStyle(t2) || {}, o2 = e2.position, i2 = [];
        if ("fixed" === o2)
          return [t2];
        for (var n2 = t2; n2 = n2.parentNode; ) {
          var r2 = void 0;
          try {
            r2 = getComputedStyle(n2);
          } catch (s2) {
          }
          if ("undefined" == typeof r2 || null === r2)
            return i2.push(n2), i2;
          var a2 = r2, f2 = a2.overflow, h2 = a2.overflowX, l2 = a2.overflowY;
          /(auto|scroll)/.test(f2 + l2 + h2) && ("absolute" !== o2 || ["relative", "absolute", "fixed"].indexOf(r2.position) >= 0) && i2.push(n2);
        }
        return i2.push(document.body), i2;
      }
      function r(t2) {
        var e2 = void 0;
        t2 === document ? (e2 = document, t2 = document.documentElement) : e2 = t2.ownerDocument;
        var o2 = e2.documentElement, i2 = {}, n2 = t2.getBoundingClientRect();
        for (var r2 in n2)
          i2[r2] = n2[r2];
        var s2 = x(e2);
        return i2.top -= s2.top, i2.left -= s2.left, "undefined" == typeof i2.width && (i2.width = document.body.scrollWidth - i2.left - i2.right), "undefined" == typeof i2.height && (i2.height = document.body.scrollHeight - i2.top - i2.bottom), i2.top = i2.top - o2.clientTop, i2.left = i2.left - o2.clientLeft, i2.right = e2.body.clientWidth - i2.width - i2.left, i2.bottom = e2.body.clientHeight - i2.height - i2.top, i2;
      }
      function s(t2) {
        return t2.offsetParent || document.documentElement;
      }
      function a() {
        var t2 = document.createElement("div");
        t2.style.width = "100%", t2.style.height = "200px";
        var e2 = document.createElement("div");
        f(e2.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), e2.appendChild(t2), document.body.appendChild(e2);
        var o2 = t2.offsetWidth;
        e2.style.overflow = "scroll";
        var i2 = t2.offsetWidth;
        o2 === i2 && (i2 = e2.clientWidth), document.body.removeChild(e2);
        var n2 = o2 - i2;
        return { width: n2, height: n2 };
      }
      function f() {
        var t2 = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e2 = [];
        return Array.prototype.push.apply(e2, arguments), e2.slice(1).forEach(function(e3) {
          if (e3)
            for (var o2 in e3)
              ({}).hasOwnProperty.call(e3, o2) && (t2[o2] = e3[o2]);
        }), t2;
      }
      function h(t2, e2) {
        if ("undefined" != typeof t2.classList)
          e2.split(" ").forEach(function(e3) {
            e3.trim() && t2.classList.remove(e3);
          });
        else {
          var o2 = new RegExp("(^| )" + e2.split(" ").join("|") + "( |$)", "gi"), i2 = u(t2).replace(o2, " ");
          p(t2, i2);
        }
      }
      function l(t2, e2) {
        if ("undefined" != typeof t2.classList)
          e2.split(" ").forEach(function(e3) {
            e3.trim() && t2.classList.add(e3);
          });
        else {
          h(t2, e2);
          var o2 = u(t2) + (" " + e2);
          p(t2, o2);
        }
      }
      function d(t2, e2) {
        if ("undefined" != typeof t2.classList)
          return t2.classList.contains(e2);
        var o2 = u(t2);
        return new RegExp("(^| )" + e2 + "( |$)", "gi").test(o2);
      }
      function u(t2) {
        return t2.className instanceof SVGAnimatedString ? t2.className.baseVal : t2.className;
      }
      function p(t2, e2) {
        t2.setAttribute("class", e2);
      }
      function c(t2, e2, o2) {
        o2.forEach(function(o3) {
          -1 === e2.indexOf(o3) && d(t2, o3) && h(t2, o3);
        }), e2.forEach(function(e3) {
          d(t2, e3) || l(t2, e3);
        });
      }
      function i(t2, e2) {
        if (!(t2 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(t2, e2) {
        var o2 = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t2 + o2 >= e2 && e2 >= t2 - o2;
      }
      function m() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +/* @__PURE__ */ new Date();
      }
      function v() {
        for (var t2 = { top: 0, left: 0 }, e2 = arguments.length, o2 = Array(e2), i2 = 0; e2 > i2; i2++)
          o2[i2] = arguments[i2];
        return o2.forEach(function(e3) {
          var o3 = e3.top, i3 = e3.left;
          "string" == typeof o3 && (o3 = parseFloat(o3, 10)), "string" == typeof i3 && (i3 = parseFloat(i3, 10)), t2.top += o3, t2.left += i3;
        }), t2;
      }
      function y(t2, e2) {
        return "string" == typeof t2.left && -1 !== t2.left.indexOf("%") && (t2.left = parseFloat(t2.left, 10) / 100 * e2.width), "string" == typeof t2.top && -1 !== t2.top.indexOf("%") && (t2.top = parseFloat(t2.top, 10) / 100 * e2.height), t2;
      }
      function b(t2, e2) {
        return "scrollParent" === e2 ? e2 = t2.scrollParents[0] : "window" === e2 && (e2 = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e2 === document && (e2 = e2.documentElement), "undefined" != typeof e2.nodeType && !function() {
          var t3 = r(e2), o2 = t3, i2 = getComputedStyle(e2);
          e2 = [o2.left, o2.top, t3.width + o2.left, t3.height + o2.top], U.forEach(function(t4, o3) {
            t4 = t4[0].toUpperCase() + t4.substr(1), "Top" === t4 || "Left" === t4 ? e2[o3] += parseFloat(i2["border" + t4 + "Width"]) : e2[o3] -= parseFloat(i2["border" + t4 + "Width"]);
          });
        }(), e2;
      }
      var w = function() {
        function t2(t3, e2) {
          for (var o2 = 0; o2 < e2.length; o2++) {
            var i2 = e2[o2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
          }
        }
        return function(e2, o2, i2) {
          return o2 && t2(e2.prototype, o2), i2 && t2(e2, i2), e2;
        };
      }(), C = void 0;
      "undefined" == typeof C && (C = { modules: [] });
      var O = function() {
        var t2 = 0;
        return function() {
          return ++t2;
        };
      }(), E = {}, x = function(t2) {
        var e2 = t2._tetherZeroElement;
        "undefined" == typeof e2 && (e2 = t2.createElement("div"), e2.setAttribute("data-tether-id", O()), f(e2.style, { top: 0, left: 0, position: "absolute" }), t2.body.appendChild(e2), t2._tetherZeroElement = e2);
        var o2 = e2.getAttribute("data-tether-id");
        if ("undefined" == typeof E[o2]) {
          E[o2] = {};
          var i2 = e2.getBoundingClientRect();
          for (var n2 in i2)
            E[o2][n2] = i2[n2];
          T(function() {
            delete E[o2];
          });
        }
        return E[o2];
      }, A = [], T = function(t2) {
        A.push(t2);
      }, S = function() {
        for (var t2 = void 0; t2 = A.pop(); )
          t2();
      }, W = function() {
        function t2() {
          i(this, t2);
        }
        return w(t2, [{ key: "on", value: function(t3, e2, o2) {
          var i2 = arguments.length <= 3 || void 0 === arguments[3] ? false : arguments[3];
          "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t3] && (this.bindings[t3] = []), this.bindings[t3].push({ handler: e2, ctx: o2, once: i2 });
        } }, { key: "once", value: function(t3, e2, o2) {
          this.on(t3, e2, o2, true);
        } }, { key: "off", value: function(t3, e2) {
          if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[t3])
            if ("undefined" == typeof e2)
              delete this.bindings[t3];
            else
              for (var o2 = 0; o2 < this.bindings[t3].length; )
                this.bindings[t3][o2].handler === e2 ? this.bindings[t3].splice(o2, 1) : ++o2;
        } }, { key: "trigger", value: function(t3) {
          if ("undefined" != typeof this.bindings && this.bindings[t3]) {
            for (var e2 = 0, o2 = arguments.length, i2 = Array(o2 > 1 ? o2 - 1 : 0), n2 = 1; o2 > n2; n2++)
              i2[n2 - 1] = arguments[n2];
            for (; e2 < this.bindings[t3].length; ) {
              var r2 = this.bindings[t3][e2], s2 = r2.handler, a2 = r2.ctx, f2 = r2.once, h2 = a2;
              "undefined" == typeof h2 && (h2 = this), s2.apply(h2, i2), f2 ? this.bindings[t3].splice(e2, 1) : ++e2;
            }
          }
        } }]), t2;
      }();
      C.Utils = { getScrollParents: n, getBounds: r, getOffsetParent: s, extend: f, addClass: l, removeClass: h, hasClass: d, updateClasses: c, defer: T, flush: S, uniqueId: O, Evented: W, getScrollBarSize: a };
      var M = function() {
        function t2(t3, e2) {
          var o2 = [], i2 = true, n2 = false, r2 = void 0;
          try {
            for (var s2, a2 = t3[Symbol.iterator](); !(i2 = (s2 = a2.next()).done) && (o2.push(s2.value), !e2 || o2.length !== e2); i2 = true)
              ;
          } catch (f2) {
            n2 = true, r2 = f2;
          } finally {
            try {
              !i2 && a2["return"] && a2["return"]();
            } finally {
              if (n2)
                throw r2;
            }
          }
          return o2;
        }
        return function(e2, o2) {
          if (Array.isArray(e2))
            return e2;
          if (Symbol.iterator in Object(e2))
            return t2(e2, o2);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(), w = function() {
        function t2(t3, e2) {
          for (var o2 = 0; o2 < e2.length; o2++) {
            var i2 = e2[o2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
          }
        }
        return function(e2, o2, i2) {
          return o2 && t2(e2.prototype, o2), i2 && t2(e2, i2), e2;
        };
      }();
      if ("undefined" == typeof C)
        throw new Error("You must include the utils.js file before tether.js");
      var P = C.Utils, n = P.getScrollParents, r = P.getBounds, s = P.getOffsetParent, f = P.extend, l = P.addClass, h = P.removeClass, c = P.updateClasses, T = P.defer, S = P.flush, a = P.getScrollBarSize, k = function() {
        if ("undefined" == typeof document)
          return "";
        for (var t2 = document.createElement("div"), e2 = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], o2 = 0; o2 < e2.length; ++o2) {
          var i2 = e2[o2];
          if (void 0 !== t2.style[i2])
            return i2;
        }
      }(), B = [], _ = function() {
        B.forEach(function(t2) {
          t2.position(false);
        }), S();
      };
      !function() {
        var t2 = null, e2 = null, o2 = null, i2 = function n2() {
          return "undefined" != typeof e2 && e2 > 16 ? (e2 = Math.min(e2 - 16, 250), void (o2 = setTimeout(n2, 250))) : void ("undefined" != typeof t2 && m() - t2 < 10 || ("undefined" != typeof o2 && (clearTimeout(o2), o2 = null), t2 = m(), _(), e2 = m() - t2));
        };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t3) {
          window.addEventListener(t3, i2);
        });
      }();
      var z = { center: "center", left: "right", right: "left" }, L = { middle: "middle", top: "bottom", bottom: "top" }, Y = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" }, H = function(t2, e2) {
        var o2 = t2.left, i2 = t2.top;
        return "auto" === o2 && (o2 = z[e2.left]), "auto" === i2 && (i2 = L[e2.top]), { left: o2, top: i2 };
      }, F = function(t2) {
        var e2 = t2.left, o2 = t2.top;
        return "undefined" != typeof Y[t2.left] && (e2 = Y[t2.left]), "undefined" != typeof Y[t2.top] && (o2 = Y[t2.top]), { left: e2, top: o2 };
      }, X = function(t2) {
        var e2 = t2.split(" "), o2 = M(e2, 2), i2 = o2[0], n2 = o2[1];
        return { top: i2, left: n2 };
      }, j = X, N = function() {
        function t2(e2) {
          var o2 = this;
          i(this, t2), this.position = this.position.bind(this), B.push(this), this.history = [], this.setOptions(e2, false), C.modules.forEach(function(t3) {
            "undefined" != typeof t3.initialize && t3.initialize.call(o2);
          }), this.position();
        }
        return w(t2, [{ key: "getClass", value: function() {
          var t3 = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], e2 = this.options.classes;
          return "undefined" != typeof e2 && e2[t3] ? this.options.classes[t3] : this.options.classPrefix ? this.options.classPrefix + "-" + t3 : t3;
        } }, { key: "setOptions", value: function(t3) {
          var e2 = this, o2 = arguments.length <= 1 || void 0 === arguments[1] ? true : arguments[1], i2 = { offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" };
          this.options = f(i2, t3);
          var r2 = this.options, s2 = r2.element, a2 = r2.target, h2 = r2.targetModifier;
          if (this.element = s2, this.target = a2, this.targetModifier = h2, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t4) {
            if ("undefined" == typeof e2[t4])
              throw new Error("Tether Error: Both element and target must be defined");
            "undefined" != typeof e2[t4].jquery ? e2[t4] = e2[t4][0] : "string" == typeof e2[t4] && (e2[t4] = document.querySelector(e2[t4]));
          }), l(this.element, this.getClass("element")), this.options.addTargetClasses !== false && l(this.target, this.getClass("target")), !this.options.attachment)
            throw new Error("Tether Error: You must provide an attachment");
          this.targetAttachment = j(this.options.targetAttachment), this.attachment = j(this.options.attachment), this.offset = X(this.options.offset), this.targetOffset = X(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = n(this.target), this.options.enabled !== false && this.enable(o2);
        } }, { key: "getTargetBounds", value: function() {
          if ("undefined" == typeof this.targetModifier)
            return r(this.target);
          if ("visible" === this.targetModifier) {
            if (this.target === document.body)
              return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
            var t3 = r(this.target), e2 = { height: t3.height, width: t3.width, top: t3.top, left: t3.left };
            return e2.height = Math.min(e2.height, t3.height - (pageYOffset - t3.top)), e2.height = Math.min(e2.height, t3.height - (t3.top + t3.height - (pageYOffset + innerHeight))), e2.height = Math.min(innerHeight, e2.height), e2.height -= 2, e2.width = Math.min(e2.width, t3.width - (pageXOffset - t3.left)), e2.width = Math.min(e2.width, t3.width - (t3.left + t3.width - (pageXOffset + innerWidth))), e2.width = Math.min(innerWidth, e2.width), e2.width -= 2, e2.top < pageYOffset && (e2.top = pageYOffset), e2.left < pageXOffset && (e2.left = pageXOffset), e2;
          }
          if ("scroll-handle" === this.targetModifier) {
            var t3 = void 0, o2 = this.target;
            o2 === document.body ? (o2 = document.documentElement, t3 = { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth }) : t3 = r(o2);
            var i2 = getComputedStyle(o2), n2 = o2.scrollWidth > o2.clientWidth || [i2.overflow, i2.overflowX].indexOf("scroll") >= 0 || this.target !== document.body, s2 = 0;
            n2 && (s2 = 15);
            var a2 = t3.height - parseFloat(i2.borderTopWidth) - parseFloat(i2.borderBottomWidth) - s2, e2 = { width: 15, height: 0.975 * a2 * (a2 / o2.scrollHeight), left: t3.left + t3.width - parseFloat(i2.borderLeftWidth) - 15 }, f2 = 0;
            408 > a2 && this.target === document.body && (f2 = -11e-5 * Math.pow(a2, 2) - 727e-5 * a2 + 22.58), this.target !== document.body && (e2.height = Math.max(e2.height, 24));
            var h2 = this.target.scrollTop / (o2.scrollHeight - a2);
            return e2.top = h2 * (a2 - e2.height - f2) + t3.top + parseFloat(i2.borderTopWidth), this.target === document.body && (e2.height = Math.max(e2.height, 24)), e2;
          }
        } }, { key: "clearCache", value: function() {
          this._cache = {};
        } }, { key: "cache", value: function(t3, e2) {
          return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t3] && (this._cache[t3] = e2.call(this)), this._cache[t3];
        } }, { key: "enable", value: function() {
          var t3 = this, e2 = arguments.length <= 0 || void 0 === arguments[0] ? true : arguments[0];
          this.options.addTargetClasses !== false && l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = true, this.scrollParents.forEach(function(e3) {
            e3 !== document && e3.addEventListener("scroll", t3.position);
          }), e2 && this.position();
        } }, { key: "disable", value: function() {
          var t3 = this;
          h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = false, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(e2) {
            e2.removeEventListener("scroll", t3.position);
          });
        } }, { key: "destroy", value: function() {
          var t3 = this;
          this.disable(), B.forEach(function(e2, o2) {
            return e2 === t3 ? void B.splice(o2, 1) : void 0;
          });
        } }, { key: "updateAttachClasses", value: function(t3, e2) {
          var o2 = this;
          t3 = t3 || this.attachment, e2 = e2 || this.targetAttachment;
          var i2 = ["left", "top", "bottom", "right", "middle", "center"];
          "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
          var n2 = this._addAttachClasses;
          t3.top && n2.push(this.getClass("element-attached") + "-" + t3.top), t3.left && n2.push(this.getClass("element-attached") + "-" + t3.left), e2.top && n2.push(this.getClass("target-attached") + "-" + e2.top), e2.left && n2.push(this.getClass("target-attached") + "-" + e2.left);
          var r2 = [];
          i2.forEach(function(t4) {
            r2.push(o2.getClass("element-attached") + "-" + t4), r2.push(o2.getClass("target-attached") + "-" + t4);
          }), T(function() {
            "undefined" != typeof o2._addAttachClasses && (c(o2.element, o2._addAttachClasses, r2), o2.options.addTargetClasses !== false && c(o2.target, o2._addAttachClasses, r2), delete o2._addAttachClasses);
          });
        } }, { key: "position", value: function() {
          var t3 = this, e2 = arguments.length <= 0 || void 0 === arguments[0] ? true : arguments[0];
          if (this.enabled) {
            this.clearCache();
            var o2 = H(this.targetAttachment, this.attachment);
            this.updateAttachClasses(this.attachment, o2);
            var i2 = this.cache("element-bounds", function() {
              return r(t3.element);
            }), n2 = i2.width, f2 = i2.height;
            if (0 === n2 && 0 === f2 && "undefined" != typeof this.lastSize) {
              var h2 = this.lastSize;
              n2 = h2.width, f2 = h2.height;
            } else
              this.lastSize = { width: n2, height: f2 };
            var l2 = this.cache("target-bounds", function() {
              return t3.getTargetBounds();
            }), d2 = l2, u2 = y(F(this.attachment), { width: n2, height: f2 }), p2 = y(F(o2), d2), c2 = y(this.offset, { width: n2, height: f2 }), g2 = y(this.targetOffset, d2);
            u2 = v(u2, c2), p2 = v(p2, g2);
            for (var m2 = l2.left + p2.left - u2.left, b2 = l2.top + p2.top - u2.top, w2 = 0; w2 < C.modules.length; ++w2) {
              var O2 = C.modules[w2], E2 = O2.position.call(this, { left: m2, top: b2, targetAttachment: o2, targetPos: l2, elementPos: i2, offset: u2, targetOffset: p2, manualOffset: c2, manualTargetOffset: g2, scrollbarSize: A2, attachment: this.attachment });
              if (E2 === false)
                return false;
              "undefined" != typeof E2 && "object" == typeof E2 && (b2 = E2.top, m2 = E2.left);
            }
            var x2 = { page: { top: b2, left: m2 }, viewport: { top: b2 - pageYOffset, bottom: pageYOffset - b2 - f2 + innerHeight, left: m2 - pageXOffset, right: pageXOffset - m2 - n2 + innerWidth } }, A2 = void 0;
            return document.body.scrollWidth > window.innerWidth && (A2 = this.cache("scrollbar-size", a), x2.viewport.bottom -= A2.height), document.body.scrollHeight > window.innerHeight && (A2 = this.cache("scrollbar-size", a), x2.viewport.right -= A2.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (x2.page.bottom = document.body.scrollHeight - b2 - f2, x2.page.right = document.body.scrollWidth - m2 - n2), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== false && "undefined" == typeof this.targetModifier && !function() {
              var e3 = t3.cache("target-offsetparent", function() {
                return s(t3.target);
              }), o3 = t3.cache("target-offsetparent-bounds", function() {
                return r(e3);
              }), i3 = getComputedStyle(e3), n3 = o3, a2 = {};
              if (["Top", "Left", "Bottom", "Right"].forEach(function(t4) {
                a2[t4.toLowerCase()] = parseFloat(i3["border" + t4 + "Width"]);
              }), o3.right = document.body.scrollWidth - o3.left - n3.width + a2.right, o3.bottom = document.body.scrollHeight - o3.top - n3.height + a2.bottom, x2.page.top >= o3.top + a2.top && x2.page.bottom >= o3.bottom && x2.page.left >= o3.left + a2.left && x2.page.right >= o3.right) {
                var f3 = e3.scrollTop, h3 = e3.scrollLeft;
                x2.offset = { top: x2.page.top - o3.top + f3 - a2.top, left: x2.page.left - o3.left + h3 - a2.left };
              }
            }(), this.move(x2), this.history.unshift(x2), this.history.length > 3 && this.history.pop(), e2 && S(), true;
          }
        } }, { key: "move", value: function(t3) {
          var e2 = this;
          if ("undefined" != typeof this.element.parentNode) {
            var o2 = {};
            for (var i2 in t3) {
              o2[i2] = {};
              for (var n2 in t3[i2]) {
                for (var r2 = false, a2 = 0; a2 < this.history.length; ++a2) {
                  var h2 = this.history[a2];
                  if ("undefined" != typeof h2[i2] && !g(h2[i2][n2], t3[i2][n2])) {
                    r2 = true;
                    break;
                  }
                }
                r2 || (o2[i2][n2] = true);
              }
            }
            var l2 = { top: "", left: "", right: "", bottom: "" }, d2 = function(t4, o3) {
              var i3 = "undefined" != typeof e2.options.optimizations, n3 = i3 ? e2.options.optimizations.gpu : null;
              if (n3 !== false) {
                var r3 = void 0, s2 = void 0;
                t4.top ? (l2.top = 0, r3 = o3.top) : (l2.bottom = 0, r3 = -o3.bottom), t4.left ? (l2.left = 0, s2 = o3.left) : (l2.right = 0, s2 = -o3.right), l2[k] = "translateX(" + Math.round(s2) + "px) translateY(" + Math.round(r3) + "px)", "msTransform" !== k && (l2[k] += " translateZ(0)");
              } else
                t4.top ? l2.top = o3.top + "px" : l2.bottom = o3.bottom + "px", t4.left ? l2.left = o3.left + "px" : l2.right = o3.right + "px";
            }, u2 = false;
            if ((o2.page.top || o2.page.bottom) && (o2.page.left || o2.page.right) ? (l2.position = "absolute", d2(o2.page, t3.page)) : (o2.viewport.top || o2.viewport.bottom) && (o2.viewport.left || o2.viewport.right) ? (l2.position = "fixed", d2(o2.viewport, t3.viewport)) : "undefined" != typeof o2.offset && o2.offset.top && o2.offset.left ? !function() {
              l2.position = "absolute";
              var i3 = e2.cache("target-offsetparent", function() {
                return s(e2.target);
              });
              s(e2.element) !== i3 && T(function() {
                e2.element.parentNode.removeChild(e2.element), i3.appendChild(e2.element);
              }), d2(o2.offset, t3.offset), u2 = true;
            }() : (l2.position = "absolute", d2({ top: true, left: true }, t3.page)), !u2) {
              for (var p2 = true, c2 = this.element.parentNode; c2 && "BODY" !== c2.tagName; ) {
                if ("static" !== getComputedStyle(c2).position) {
                  p2 = false;
                  break;
                }
                c2 = c2.parentNode;
              }
              p2 || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element));
            }
            var m2 = {}, v2 = false;
            for (var n2 in l2) {
              var y2 = l2[n2], b2 = this.element.style[n2];
              b2 !== y2 && (v2 = true, m2[n2] = y2);
            }
            v2 && T(function() {
              f(e2.element.style, m2);
            });
          }
        } }]), t2;
      }();
      N.modules = [], C.position = _;
      var R = f(N, C), M = function() {
        function t2(t3, e2) {
          var o2 = [], i2 = true, n2 = false, r2 = void 0;
          try {
            for (var s2, a2 = t3[Symbol.iterator](); !(i2 = (s2 = a2.next()).done) && (o2.push(s2.value), !e2 || o2.length !== e2); i2 = true)
              ;
          } catch (f2) {
            n2 = true, r2 = f2;
          } finally {
            try {
              !i2 && a2["return"] && a2["return"]();
            } finally {
              if (n2)
                throw r2;
            }
          }
          return o2;
        }
        return function(e2, o2) {
          if (Array.isArray(e2))
            return e2;
          if (Symbol.iterator in Object(e2))
            return t2(e2, o2);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(), P = C.Utils, r = P.getBounds, f = P.extend, c = P.updateClasses, T = P.defer, U = ["left", "top", "right", "bottom"];
      C.modules.push({ position: function(t2) {
        var e2 = this, o2 = t2.top, i2 = t2.left, n2 = t2.targetAttachment;
        if (!this.options.constraints)
          return true;
        var s2 = this.cache("element-bounds", function() {
          return r(e2.element);
        }), a2 = s2.height, h2 = s2.width;
        if (0 === h2 && 0 === a2 && "undefined" != typeof this.lastSize) {
          var l2 = this.lastSize;
          h2 = l2.width, a2 = l2.height;
        }
        var d2 = this.cache("target-bounds", function() {
          return e2.getTargetBounds();
        }), u2 = d2.height, p2 = d2.width, g2 = [this.getClass("pinned"), this.getClass("out-of-bounds")];
        this.options.constraints.forEach(function(t3) {
          var e3 = t3.outOfBoundsClass, o3 = t3.pinnedClass;
          e3 && g2.push(e3), o3 && g2.push(o3);
        }), g2.forEach(function(t3) {
          ["left", "top", "right", "bottom"].forEach(function(e3) {
            g2.push(t3 + "-" + e3);
          });
        });
        var m2 = [], v2 = f({}, n2), y2 = f({}, this.attachment);
        return this.options.constraints.forEach(function(t3) {
          var r2 = t3.to, s3 = t3.attachment, f2 = t3.pin;
          "undefined" == typeof s3 && (s3 = "");
          var l3 = void 0, d3 = void 0;
          if (s3.indexOf(" ") >= 0) {
            var c2 = s3.split(" "), g3 = M(c2, 2);
            d3 = g3[0], l3 = g3[1];
          } else
            l3 = d3 = s3;
          var w2 = b(e2, r2);
          ("target" === d3 || "both" === d3) && (o2 < w2[1] && "top" === v2.top && (o2 += u2, v2.top = "bottom"), o2 + a2 > w2[3] && "bottom" === v2.top && (o2 -= u2, v2.top = "top")), "together" === d3 && ("top" === v2.top && ("bottom" === y2.top && o2 < w2[1] ? (o2 += u2, v2.top = "bottom", o2 += a2, y2.top = "top") : "top" === y2.top && o2 + a2 > w2[3] && o2 - (a2 - u2) >= w2[1] && (o2 -= a2 - u2, v2.top = "bottom", y2.top = "bottom")), "bottom" === v2.top && ("top" === y2.top && o2 + a2 > w2[3] ? (o2 -= u2, v2.top = "top", o2 -= a2, y2.top = "bottom") : "bottom" === y2.top && o2 < w2[1] && o2 + (2 * a2 - u2) <= w2[3] && (o2 += a2 - u2, v2.top = "top", y2.top = "top")), "middle" === v2.top && (o2 + a2 > w2[3] && "top" === y2.top ? (o2 -= a2, y2.top = "bottom") : o2 < w2[1] && "bottom" === y2.top && (o2 += a2, y2.top = "top"))), ("target" === l3 || "both" === l3) && (i2 < w2[0] && "left" === v2.left && (i2 += p2, v2.left = "right"), i2 + h2 > w2[2] && "right" === v2.left && (i2 -= p2, v2.left = "left")), "together" === l3 && (i2 < w2[0] && "left" === v2.left ? "right" === y2.left ? (i2 += p2, v2.left = "right", i2 += h2, y2.left = "left") : "left" === y2.left && (i2 += p2, v2.left = "right", i2 -= h2, y2.left = "right") : i2 + h2 > w2[2] && "right" === v2.left ? "left" === y2.left ? (i2 -= p2, v2.left = "left", i2 -= h2, y2.left = "right") : "right" === y2.left && (i2 -= p2, v2.left = "left", i2 += h2, y2.left = "left") : "center" === v2.left && (i2 + h2 > w2[2] && "left" === y2.left ? (i2 -= h2, y2.left = "right") : i2 < w2[0] && "right" === y2.left && (i2 += h2, y2.left = "left"))), ("element" === d3 || "both" === d3) && (o2 < w2[1] && "bottom" === y2.top && (o2 += a2, y2.top = "top"), o2 + a2 > w2[3] && "top" === y2.top && (o2 -= a2, y2.top = "bottom")), ("element" === l3 || "both" === l3) && (i2 < w2[0] && ("right" === y2.left ? (i2 += h2, y2.left = "left") : "center" === y2.left && (i2 += h2 / 2, y2.left = "left")), i2 + h2 > w2[2] && ("left" === y2.left ? (i2 -= h2, y2.left = "right") : "center" === y2.left && (i2 -= h2 / 2, y2.left = "right"))), "string" == typeof f2 ? f2 = f2.split(",").map(function(t4) {
            return t4.trim();
          }) : f2 === true && (f2 = ["top", "left", "right", "bottom"]), f2 = f2 || [];
          var C2 = [], O2 = [];
          o2 < w2[1] && (f2.indexOf("top") >= 0 ? (o2 = w2[1], C2.push("top")) : O2.push("top")), o2 + a2 > w2[3] && (f2.indexOf("bottom") >= 0 ? (o2 = w2[3] - a2, C2.push("bottom")) : O2.push("bottom")), i2 < w2[0] && (f2.indexOf("left") >= 0 ? (i2 = w2[0], C2.push("left")) : O2.push("left")), i2 + h2 > w2[2] && (f2.indexOf("right") >= 0 ? (i2 = w2[2] - h2, C2.push("right")) : O2.push("right")), C2.length && !function() {
            var t4 = void 0;
            t4 = "undefined" != typeof e2.options.pinnedClass ? e2.options.pinnedClass : e2.getClass("pinned"), m2.push(t4), C2.forEach(function(e3) {
              m2.push(t4 + "-" + e3);
            });
          }(), O2.length && !function() {
            var t4 = void 0;
            t4 = "undefined" != typeof e2.options.outOfBoundsClass ? e2.options.outOfBoundsClass : e2.getClass("out-of-bounds"), m2.push(t4), O2.forEach(function(e3) {
              m2.push(t4 + "-" + e3);
            });
          }(), (C2.indexOf("left") >= 0 || C2.indexOf("right") >= 0) && (y2.left = v2.left = false), (C2.indexOf("top") >= 0 || C2.indexOf("bottom") >= 0) && (y2.top = v2.top = false), (v2.top !== n2.top || v2.left !== n2.left || y2.top !== e2.attachment.top || y2.left !== e2.attachment.left) && e2.updateAttachClasses(y2, v2);
        }), T(function() {
          e2.options.addTargetClasses !== false && c(e2.target, m2, g2), c(e2.element, m2, g2);
        }), { top: o2, left: i2 };
      } });
      var P = C.Utils, r = P.getBounds, c = P.updateClasses, T = P.defer;
      C.modules.push({ position: function(t2) {
        var e2 = this, o2 = t2.top, i2 = t2.left, n2 = this.cache("element-bounds", function() {
          return r(e2.element);
        }), s2 = n2.height, a2 = n2.width, f2 = this.getTargetBounds(), h2 = o2 + s2, l2 = i2 + a2, d2 = [];
        o2 <= f2.bottom && h2 >= f2.top && ["left", "right"].forEach(function(t3) {
          var e3 = f2[t3];
          (e3 === i2 || e3 === l2) && d2.push(t3);
        }), i2 <= f2.right && l2 >= f2.left && ["top", "bottom"].forEach(function(t3) {
          var e3 = f2[t3];
          (e3 === o2 || e3 === h2) && d2.push(t3);
        });
        var u2 = [], p2 = [], g2 = ["left", "top", "right", "bottom"];
        return u2.push(this.getClass("abutted")), g2.forEach(function(t3) {
          u2.push(e2.getClass("abutted") + "-" + t3);
        }), d2.length && p2.push(this.getClass("abutted")), d2.forEach(function(t3) {
          p2.push(e2.getClass("abutted") + "-" + t3);
        }), T(function() {
          e2.options.addTargetClasses !== false && c(e2.target, p2, u2), c(e2.element, p2, u2);
        }), true;
      } });
      var M = function() {
        function t2(t3, e2) {
          var o2 = [], i2 = true, n2 = false, r2 = void 0;
          try {
            for (var s2, a2 = t3[Symbol.iterator](); !(i2 = (s2 = a2.next()).done) && (o2.push(s2.value), !e2 || o2.length !== e2); i2 = true)
              ;
          } catch (f2) {
            n2 = true, r2 = f2;
          } finally {
            try {
              !i2 && a2["return"] && a2["return"]();
            } finally {
              if (n2)
                throw r2;
            }
          }
          return o2;
        }
        return function(e2, o2) {
          if (Array.isArray(e2))
            return e2;
          if (Symbol.iterator in Object(e2))
            return t2(e2, o2);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      return C.modules.push({ position: function(t2) {
        var e2 = t2.top, o2 = t2.left;
        if (this.options.shift) {
          var i2 = this.options.shift;
          "function" == typeof this.options.shift && (i2 = this.options.shift.call(this, { top: e2, left: o2 }));
          var n2 = void 0, r2 = void 0;
          if ("string" == typeof i2) {
            i2 = i2.split(" "), i2[1] = i2[1] || i2[0];
            var s2 = i2, a2 = M(s2, 2);
            n2 = a2[0], r2 = a2[1], n2 = parseFloat(n2, 10), r2 = parseFloat(r2, 10);
          } else
            n2 = i2.top, r2 = i2.left;
          return e2 += n2, o2 += r2, { top: e2, left: o2 };
        }
      } }), R;
    });
    /*!
     * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
     * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    if ("undefined" == typeof jQuery)
      throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    +function(t) {
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4)
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(jQuery), +function() {
      function t(t2, e2) {
        if (!t2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e2 || "object" != typeof e2 && "function" != typeof e2 ? t2 : e2;
      }
      function e(t2, e2) {
        if ("function" != typeof e2 && null !== e2)
          throw new TypeError("Super expression must either be null or a function, not " + typeof e2);
        t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, enumerable: false, writable: true, configurable: true } }), e2 && (Object.setPrototypeOf ? Object.setPrototypeOf(t2, e2) : t2.__proto__ = e2);
      }
      function n(t2, e2) {
        if (!(t2 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      }, o = function() {
        function t2(t3, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var i2 = e2[n2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
          }
        }
        return function(e2, n2, i2) {
          return n2 && t2(e2.prototype, n2), i2 && t2(e2, i2), e2;
        };
      }(), r = function(t2) {
        function e2(t3) {
          return {}.toString.call(t3).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }
        function n2(t3) {
          return (t3[0] || t3).nodeType;
        }
        function i2() {
          return { bindType: a.end, delegateType: a.end, handle: function(e3) {
            if (t2(e3.target).is(this))
              return e3.handleObj.handler.apply(this, arguments);
          } };
        }
        function o2() {
          if (window.QUnit)
            return false;
          var t3 = document.createElement("bootstrap");
          for (var e3 in h)
            if (void 0 !== t3.style[e3])
              return { end: h[e3] };
          return false;
        }
        function r2(e3) {
          var n3 = this, i3 = false;
          return t2(this).one(c.TRANSITION_END, function() {
            i3 = true;
          }), setTimeout(function() {
            i3 || c.triggerTransitionEnd(n3);
          }, e3), this;
        }
        function s2() {
          a = o2(), t2.fn.emulateTransitionEnd = r2, c.supportsTransitionEnd() && (t2.event.special[c.TRANSITION_END] = i2());
        }
        var a = false, l = 1e6, h = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, c = { TRANSITION_END: "bsTransitionEnd", getUID: function(t3) {
          do
            t3 += ~~(Math.random() * l);
          while (document.getElementById(t3));
          return t3;
        }, getSelectorFromElement: function(t3) {
          var e3 = t3.getAttribute("data-target");
          return e3 || (e3 = t3.getAttribute("href") || "", e3 = /^#[a-z]/i.test(e3) ? e3 : null), e3;
        }, reflow: function(t3) {
          return t3.offsetHeight;
        }, triggerTransitionEnd: function(e3) {
          t2(e3).trigger(a.end);
        }, supportsTransitionEnd: function() {
          return Boolean(a);
        }, typeCheckConfig: function(t3, i3, o3) {
          for (var r3 in o3)
            if (o3.hasOwnProperty(r3)) {
              var s3 = o3[r3], a2 = i3[r3], l2 = a2 && n2(a2) ? "element" : e2(a2);
              if (!new RegExp(s3).test(l2))
                throw new Error(t3.toUpperCase() + ": " + ('Option "' + r3 + '" provided type "' + l2 + '" ') + ('but expected type "' + s3 + '".'));
            }
        } };
        return s2(), c;
      }(jQuery), s = (function(t2) {
        var e2 = "alert", i2 = "4.0.0-alpha.6", s2 = "bs.alert", a = "." + s2, l = ".data-api", h = t2.fn[e2], c = 150, u = { DISMISS: '[data-dismiss="alert"]' }, d = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + l }, f = { ALERT: "alert", FADE: "fade", SHOW: "show" }, _ = function() {
          function e3(t3) {
            n(this, e3), this._element = t3;
          }
          return e3.prototype.close = function(t3) {
            t3 = t3 || this._element;
            var e4 = this._getRootElement(t3), n2 = this._triggerCloseEvent(e4);
            n2.isDefaultPrevented() || this._removeElement(e4);
          }, e3.prototype.dispose = function() {
            t2.removeData(this._element, s2), this._element = null;
          }, e3.prototype._getRootElement = function(e4) {
            var n2 = r.getSelectorFromElement(e4), i3 = false;
            return n2 && (i3 = t2(n2)[0]), i3 || (i3 = t2(e4).closest("." + f.ALERT)[0]), i3;
          }, e3.prototype._triggerCloseEvent = function(e4) {
            var n2 = t2.Event(d.CLOSE);
            return t2(e4).trigger(n2), n2;
          }, e3.prototype._removeElement = function(e4) {
            var n2 = this;
            return t2(e4).removeClass(f.SHOW), r.supportsTransitionEnd() && t2(e4).hasClass(f.FADE) ? void t2(e4).one(r.TRANSITION_END, function(t3) {
              return n2._destroyElement(e4, t3);
            }).emulateTransitionEnd(c) : void this._destroyElement(e4);
          }, e3.prototype._destroyElement = function(e4) {
            t2(e4).detach().trigger(d.CLOSED).remove();
          }, e3._jQueryInterface = function(n2) {
            return this.each(function() {
              var i3 = t2(this), o2 = i3.data(s2);
              o2 || (o2 = new e3(this), i3.data(s2, o2)), "close" === n2 && o2[n2](this);
            });
          }, e3._handleDismiss = function(t3) {
            return function(e4) {
              e4 && e4.preventDefault(), t3.close(this);
            };
          }, o(e3, null, [{ key: "VERSION", get: function() {
            return i2;
          } }]), e3;
        }();
        return t2(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _())), t2.fn[e2] = _._jQueryInterface, t2.fn[e2].Constructor = _, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = h, _._jQueryInterface;
        }, _;
      }(jQuery), function(t2) {
        var e2 = "button", i2 = "4.0.0-alpha.6", r2 = "bs.button", s2 = "." + r2, a = ".data-api", l = t2.fn[e2], h = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" }, c = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" }, u = { CLICK_DATA_API: "click" + s2 + a, FOCUS_BLUR_DATA_API: "focus" + s2 + a + " " + ("blur" + s2 + a) }, d = function() {
          function e3(t3) {
            n(this, e3), this._element = t3;
          }
          return e3.prototype.toggle = function() {
            var e4 = true, n2 = t2(this._element).closest(c.DATA_TOGGLE)[0];
            if (n2) {
              var i3 = t2(this._element).find(c.INPUT)[0];
              if (i3) {
                if ("radio" === i3.type)
                  if (i3.checked && t2(this._element).hasClass(h.ACTIVE))
                    e4 = false;
                  else {
                    var o2 = t2(n2).find(c.ACTIVE)[0];
                    o2 && t2(o2).removeClass(h.ACTIVE);
                  }
                e4 && (i3.checked = !t2(this._element).hasClass(h.ACTIVE), t2(i3).trigger("change")), i3.focus();
              }
            }
            this._element.setAttribute("aria-pressed", !t2(this._element).hasClass(h.ACTIVE)), e4 && t2(this._element).toggleClass(h.ACTIVE);
          }, e3.prototype.dispose = function() {
            t2.removeData(this._element, r2), this._element = null;
          }, e3._jQueryInterface = function(n2) {
            return this.each(function() {
              var i3 = t2(this).data(r2);
              i3 || (i3 = new e3(this), t2(this).data(r2, i3)), "toggle" === n2 && i3[n2]();
            });
          }, o(e3, null, [{ key: "VERSION", get: function() {
            return i2;
          } }]), e3;
        }();
        return t2(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e3) {
          e3.preventDefault();
          var n2 = e3.target;
          t2(n2).hasClass(h.BUTTON) || (n2 = t2(n2).closest(c.BUTTON)), d._jQueryInterface.call(t2(n2), "toggle");
        }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e3) {
          var n2 = t2(e3.target).closest(c.BUTTON)[0];
          t2(n2).toggleClass(h.FOCUS, /^focus(in)?$/.test(e3.type));
        }), t2.fn[e2] = d._jQueryInterface, t2.fn[e2].Constructor = d, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = l, d._jQueryInterface;
        }, d;
      }(jQuery), function(t2) {
        var e2 = "carousel", s2 = "4.0.0-alpha.6", a = "bs.carousel", l = "." + a, h = ".data-api", c = t2.fn[e2], u = 600, d = 37, f = 39, _ = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true }, g = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, p = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" }, m = { SLIDE: "slide" + l, SLID: "slid" + l, KEYDOWN: "keydown" + l, MOUSEENTER: "mouseenter" + l, MOUSELEAVE: "mouseleave" + l, LOAD_DATA_API: "load" + l + h, CLICK_DATA_API: "click" + l + h }, E = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item" }, v = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, T = function() {
          function h2(e3, i2) {
            n(this, h2), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this._config = this._getConfig(i2), this._element = t2(e3)[0], this._indicatorsElement = t2(this._element).find(v.INDICATORS)[0], this._addEventListeners();
          }
          return h2.prototype.next = function() {
            if (this._isSliding)
              throw new Error("Carousel is sliding");
            this._slide(p.NEXT);
          }, h2.prototype.nextWhenVisible = function() {
            document.hidden || this.next();
          }, h2.prototype.prev = function() {
            if (this._isSliding)
              throw new Error("Carousel is sliding");
            this._slide(p.PREVIOUS);
          }, h2.prototype.pause = function(e3) {
            e3 || (this._isPaused = true), t2(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
          }, h2.prototype.cycle = function(t3) {
            t3 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
          }, h2.prototype.to = function(e3) {
            var n2 = this;
            this._activeElement = t2(this._element).find(v.ACTIVE_ITEM)[0];
            var i2 = this._getItemIndex(this._activeElement);
            if (!(e3 > this._items.length - 1 || e3 < 0)) {
              if (this._isSliding)
                return void t2(this._element).one(m.SLID, function() {
                  return n2.to(e3);
                });
              if (i2 === e3)
                return this.pause(), void this.cycle();
              var o2 = e3 > i2 ? p.NEXT : p.PREVIOUS;
              this._slide(o2, this._items[e3]);
            }
          }, h2.prototype.dispose = function() {
            t2(this._element).off(l), t2.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
          }, h2.prototype._getConfig = function(n2) {
            return n2 = t2.extend({}, _, n2), r.typeCheckConfig(e2, n2, g), n2;
          }, h2.prototype._addEventListeners = function() {
            var e3 = this;
            this._config.keyboard && t2(this._element).on(m.KEYDOWN, function(t3) {
              return e3._keydown(t3);
            }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t2(this._element).on(m.MOUSEENTER, function(t3) {
              return e3.pause(t3);
            }).on(m.MOUSELEAVE, function(t3) {
              return e3.cycle(t3);
            });
          }, h2.prototype._keydown = function(t3) {
            if (!/input|textarea/i.test(t3.target.tagName))
              switch (t3.which) {
                case d:
                  t3.preventDefault(), this.prev();
                  break;
                case f:
                  t3.preventDefault(), this.next();
                  break;
                default:
                  return;
              }
          }, h2.prototype._getItemIndex = function(e3) {
            return this._items = t2.makeArray(t2(e3).parent().find(v.ITEM)), this._items.indexOf(e3);
          }, h2.prototype._getItemByDirection = function(t3, e3) {
            var n2 = t3 === p.NEXT, i2 = t3 === p.PREVIOUS, o2 = this._getItemIndex(e3), r2 = this._items.length - 1, s3 = i2 && 0 === o2 || n2 && o2 === r2;
            if (s3 && !this._config.wrap)
              return e3;
            var a2 = t3 === p.PREVIOUS ? -1 : 1, l2 = (o2 + a2) % this._items.length;
            return l2 === -1 ? this._items[this._items.length - 1] : this._items[l2];
          }, h2.prototype._triggerSlideEvent = function(e3, n2) {
            var i2 = t2.Event(m.SLIDE, { relatedTarget: e3, direction: n2 });
            return t2(this._element).trigger(i2), i2;
          }, h2.prototype._setActiveIndicatorElement = function(e3) {
            if (this._indicatorsElement) {
              t2(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);
              var n2 = this._indicatorsElement.children[this._getItemIndex(e3)];
              n2 && t2(n2).addClass(E.ACTIVE);
            }
          }, h2.prototype._slide = function(e3, n2) {
            var i2 = this, o2 = t2(this._element).find(v.ACTIVE_ITEM)[0], s3 = n2 || o2 && this._getItemByDirection(e3, o2), a2 = Boolean(this._interval), l2 = void 0, h3 = void 0, c2 = void 0;
            if (e3 === p.NEXT ? (l2 = E.LEFT, h3 = E.NEXT, c2 = p.LEFT) : (l2 = E.RIGHT, h3 = E.PREV, c2 = p.RIGHT), s3 && t2(s3).hasClass(E.ACTIVE))
              return void (this._isSliding = false);
            var d2 = this._triggerSlideEvent(s3, c2);
            if (!d2.isDefaultPrevented() && o2 && s3) {
              this._isSliding = true, a2 && this.pause(), this._setActiveIndicatorElement(s3);
              var f2 = t2.Event(m.SLID, { relatedTarget: s3, direction: c2 });
              r.supportsTransitionEnd() && t2(this._element).hasClass(E.SLIDE) ? (t2(s3).addClass(h3), r.reflow(s3), t2(o2).addClass(l2), t2(s3).addClass(l2), t2(o2).one(r.TRANSITION_END, function() {
                t2(s3).removeClass(l2 + " " + h3).addClass(E.ACTIVE), t2(o2).removeClass(E.ACTIVE + " " + h3 + " " + l2), i2._isSliding = false, setTimeout(function() {
                  return t2(i2._element).trigger(f2);
                }, 0);
              }).emulateTransitionEnd(u)) : (t2(o2).removeClass(E.ACTIVE), t2(s3).addClass(E.ACTIVE), this._isSliding = false, t2(this._element).trigger(f2)), a2 && this.cycle();
            }
          }, h2._jQueryInterface = function(e3) {
            return this.each(function() {
              var n2 = t2(this).data(a), o2 = t2.extend({}, _, t2(this).data());
              "object" === ("undefined" == typeof e3 ? "undefined" : i(e3)) && t2.extend(o2, e3);
              var r2 = "string" == typeof e3 ? e3 : o2.slide;
              if (n2 || (n2 = new h2(this, o2), t2(this).data(a, n2)), "number" == typeof e3)
                n2.to(e3);
              else if ("string" == typeof r2) {
                if (void 0 === n2[r2])
                  throw new Error('No method named "' + r2 + '"');
                n2[r2]();
              } else
                o2.interval && (n2.pause(), n2.cycle());
            });
          }, h2._dataApiClickHandler = function(e3) {
            var n2 = r.getSelectorFromElement(this);
            if (n2) {
              var i2 = t2(n2)[0];
              if (i2 && t2(i2).hasClass(E.CAROUSEL)) {
                var o2 = t2.extend({}, t2(i2).data(), t2(this).data()), s3 = this.getAttribute("data-slide-to");
                s3 && (o2.interval = false), h2._jQueryInterface.call(t2(i2), o2), s3 && t2(i2).data(a).to(s3), e3.preventDefault();
              }
            }
          }, o(h2, null, [{ key: "VERSION", get: function() {
            return s2;
          } }, { key: "Default", get: function() {
            return _;
          } }]), h2;
        }();
        return t2(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t2(window).on(m.LOAD_DATA_API, function() {
          t2(v.DATA_RIDE).each(function() {
            var e3 = t2(this);
            T._jQueryInterface.call(e3, e3.data());
          });
        }), t2.fn[e2] = T._jQueryInterface, t2.fn[e2].Constructor = T, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = c, T._jQueryInterface;
        }, T;
      }(jQuery), function(t2) {
        var e2 = "collapse", s2 = "4.0.0-alpha.6", a = "bs.collapse", l = "." + a, h = ".data-api", c = t2.fn[e2], u = 600, d = { toggle: true, parent: "" }, f = { toggle: "boolean", parent: "string" }, _ = { SHOW: "show" + l, SHOWN: "shown" + l, HIDE: "hide" + l, HIDDEN: "hidden" + l, CLICK_DATA_API: "click" + l + h }, g = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" }, p = { WIDTH: "width", HEIGHT: "height" }, m = { ACTIVES: ".card > .show, .card > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, E = function() {
          function l2(e3, i2) {
            n(this, l2), this._isTransitioning = false, this._element = e3, this._config = this._getConfig(i2), this._triggerArray = t2.makeArray(t2('[data-toggle="collapse"][href="#' + e3.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e3.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
          }
          return l2.prototype.toggle = function() {
            t2(this._element).hasClass(g.SHOW) ? this.hide() : this.show();
          }, l2.prototype.show = function() {
            var e3 = this;
            if (this._isTransitioning)
              throw new Error("Collapse is transitioning");
            if (!t2(this._element).hasClass(g.SHOW)) {
              var n2 = void 0, i2 = void 0;
              if (this._parent && (n2 = t2.makeArray(t2(this._parent).find(m.ACTIVES)), n2.length || (n2 = null)), !(n2 && (i2 = t2(n2).data(a), i2 && i2._isTransitioning))) {
                var o2 = t2.Event(_.SHOW);
                if (t2(this._element).trigger(o2), !o2.isDefaultPrevented()) {
                  n2 && (l2._jQueryInterface.call(t2(n2), "hide"), i2 || t2(n2).data(a, null));
                  var s3 = this._getDimension();
                  t2(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s3] = 0, this._element.setAttribute("aria-expanded", true), this._triggerArray.length && t2(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", true), this.setTransitioning(true);
                  var h2 = function() {
                    t2(e3._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e3._element.style[s3] = "", e3.setTransitioning(false), t2(e3._element).trigger(_.SHOWN);
                  };
                  if (!r.supportsTransitionEnd())
                    return void h2();
                  var c2 = s3[0].toUpperCase() + s3.slice(1), d2 = "scroll" + c2;
                  t2(this._element).one(r.TRANSITION_END, h2).emulateTransitionEnd(u), this._element.style[s3] = this._element[d2] + "px";
                }
              }
            }
          }, l2.prototype.hide = function() {
            var e3 = this;
            if (this._isTransitioning)
              throw new Error("Collapse is transitioning");
            if (t2(this._element).hasClass(g.SHOW)) {
              var n2 = t2.Event(_.HIDE);
              if (t2(this._element).trigger(n2), !n2.isDefaultPrevented()) {
                var i2 = this._getDimension(), o2 = i2 === p.WIDTH ? "offsetWidth" : "offsetHeight";
                this._element.style[i2] = this._element[o2] + "px", r.reflow(this._element), t2(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", false), this._triggerArray.length && t2(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", false), this.setTransitioning(true);
                var s3 = function() {
                  e3.setTransitioning(false), t2(e3._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN);
                };
                return this._element.style[i2] = "", r.supportsTransitionEnd() ? void t2(this._element).one(r.TRANSITION_END, s3).emulateTransitionEnd(u) : void s3();
              }
            }
          }, l2.prototype.setTransitioning = function(t3) {
            this._isTransitioning = t3;
          }, l2.prototype.dispose = function() {
            t2.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
          }, l2.prototype._getConfig = function(n2) {
            return n2 = t2.extend({}, d, n2), n2.toggle = Boolean(n2.toggle), r.typeCheckConfig(e2, n2, f), n2;
          }, l2.prototype._getDimension = function() {
            var e3 = t2(this._element).hasClass(p.WIDTH);
            return e3 ? p.WIDTH : p.HEIGHT;
          }, l2.prototype._getParent = function() {
            var e3 = this, n2 = t2(this._config.parent)[0], i2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return t2(n2).find(i2).each(function(t3, n3) {
              e3._addAriaAndCollapsedClass(l2._getTargetFromElement(n3), [n3]);
            }), n2;
          }, l2.prototype._addAriaAndCollapsedClass = function(e3, n2) {
            if (e3) {
              var i2 = t2(e3).hasClass(g.SHOW);
              e3.setAttribute("aria-expanded", i2), n2.length && t2(n2).toggleClass(g.COLLAPSED, !i2).attr("aria-expanded", i2);
            }
          }, l2._getTargetFromElement = function(e3) {
            var n2 = r.getSelectorFromElement(e3);
            return n2 ? t2(n2)[0] : null;
          }, l2._jQueryInterface = function(e3) {
            return this.each(function() {
              var n2 = t2(this), o2 = n2.data(a), r2 = t2.extend({}, d, n2.data(), "object" === ("undefined" == typeof e3 ? "undefined" : i(e3)) && e3);
              if (!o2 && r2.toggle && /show|hide/.test(e3) && (r2.toggle = false), o2 || (o2 = new l2(this, r2), n2.data(a, o2)), "string" == typeof e3) {
                if (void 0 === o2[e3])
                  throw new Error('No method named "' + e3 + '"');
                o2[e3]();
              }
            });
          }, o(l2, null, [{ key: "VERSION", get: function() {
            return s2;
          } }, { key: "Default", get: function() {
            return d;
          } }]), l2;
        }();
        return t2(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function(e3) {
          e3.preventDefault();
          var n2 = E._getTargetFromElement(this), i2 = t2(n2).data(a), o2 = i2 ? "toggle" : t2(this).data();
          E._jQueryInterface.call(t2(n2), o2);
        }), t2.fn[e2] = E._jQueryInterface, t2.fn[e2].Constructor = E, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = c, E._jQueryInterface;
        }, E;
      }(jQuery), function(t2) {
        var e2 = "dropdown", i2 = "4.0.0-alpha.6", s2 = "bs.dropdown", a = "." + s2, l = ".data-api", h = t2.fn[e2], c = 27, u = 38, d = 40, f = 3, _ = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, CLICK: "click" + a, CLICK_DATA_API: "click" + a + l, FOCUSIN_DATA_API: "focusin" + a + l, KEYDOWN_DATA_API: "keydown" + a + l }, g = { BACKDROP: "dropdown-backdrop", DISABLED: "disabled", SHOW: "show" }, p = { BACKDROP: ".dropdown-backdrop", DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", ROLE_MENU: '[role="menu"]', ROLE_LISTBOX: '[role="listbox"]', NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a' }, m = function() {
          function e3(t3) {
            n(this, e3), this._element = t3, this._addEventListeners();
          }
          return e3.prototype.toggle = function() {
            if (this.disabled || t2(this).hasClass(g.DISABLED))
              return false;
            var n2 = e3._getParentFromElement(this), i3 = t2(n2).hasClass(g.SHOW);
            if (e3._clearMenus(), i3)
              return false;
            if ("ontouchstart" in document.documentElement && !t2(n2).closest(p.NAVBAR_NAV).length) {
              var o2 = document.createElement("div");
              o2.className = g.BACKDROP, t2(o2).insertBefore(this), t2(o2).on("click", e3._clearMenus);
            }
            var r2 = { relatedTarget: this }, s3 = t2.Event(_.SHOW, r2);
            return t2(n2).trigger(s3), !s3.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", true), t2(n2).toggleClass(g.SHOW), t2(n2).trigger(t2.Event(_.SHOWN, r2)), false);
          }, e3.prototype.dispose = function() {
            t2.removeData(this._element, s2), t2(this._element).off(a), this._element = null;
          }, e3.prototype._addEventListeners = function() {
            t2(this._element).on(_.CLICK, this.toggle);
          }, e3._jQueryInterface = function(n2) {
            return this.each(function() {
              var i3 = t2(this).data(s2);
              if (i3 || (i3 = new e3(this), t2(this).data(s2, i3)), "string" == typeof n2) {
                if (void 0 === i3[n2])
                  throw new Error('No method named "' + n2 + '"');
                i3[n2].call(this);
              }
            });
          }, e3._clearMenus = function(n2) {
            if (!n2 || n2.which !== f) {
              var i3 = t2(p.BACKDROP)[0];
              i3 && i3.parentNode.removeChild(i3);
              for (var o2 = t2.makeArray(t2(p.DATA_TOGGLE)), r2 = 0; r2 < o2.length; r2++) {
                var s3 = e3._getParentFromElement(o2[r2]), a2 = { relatedTarget: o2[r2] };
                if (t2(s3).hasClass(g.SHOW) && !(n2 && ("click" === n2.type && /input|textarea/i.test(n2.target.tagName) || "focusin" === n2.type) && t2.contains(s3, n2.target))) {
                  var l2 = t2.Event(_.HIDE, a2);
                  t2(s3).trigger(l2), l2.isDefaultPrevented() || (o2[r2].setAttribute("aria-expanded", "false"), t2(s3).removeClass(g.SHOW).trigger(t2.Event(_.HIDDEN, a2)));
                }
              }
            }
          }, e3._getParentFromElement = function(e4) {
            var n2 = void 0, i3 = r.getSelectorFromElement(e4);
            return i3 && (n2 = t2(i3)[0]), n2 || e4.parentNode;
          }, e3._dataApiKeydownHandler = function(n2) {
            if (/(38|40|27|32)/.test(n2.which) && !/input|textarea/i.test(n2.target.tagName) && (n2.preventDefault(), n2.stopPropagation(), !this.disabled && !t2(this).hasClass(g.DISABLED))) {
              var i3 = e3._getParentFromElement(this), o2 = t2(i3).hasClass(g.SHOW);
              if (!o2 && n2.which !== c || o2 && n2.which === c) {
                if (n2.which === c) {
                  var r2 = t2(i3).find(p.DATA_TOGGLE)[0];
                  t2(r2).trigger("focus");
                }
                return void t2(this).trigger("click");
              }
              var s3 = t2(i3).find(p.VISIBLE_ITEMS).get();
              if (s3.length) {
                var a2 = s3.indexOf(n2.target);
                n2.which === u && a2 > 0 && a2--, n2.which === d && a2 < s3.length - 1 && a2++, a2 < 0 && (a2 = 0), s3[a2].focus();
              }
            }
          }, o(e3, null, [{ key: "VERSION", get: function() {
            return i2;
          } }]), e3;
        }();
        return t2(document).on(_.KEYDOWN_DATA_API, p.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.FOCUSIN_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, p.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, p.FORM_CHILD, function(t3) {
          t3.stopPropagation();
        }), t2.fn[e2] = m._jQueryInterface, t2.fn[e2].Constructor = m, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = h, m._jQueryInterface;
        }, m;
      }(jQuery), function(t2) {
        var e2 = "modal", s2 = "4.0.0-alpha.6", a = "bs.modal", l = "." + a, h = ".data-api", c = t2.fn[e2], u = 300, d = 150, f = 27, _ = { backdrop: true, keyboard: true, focus: true, show: true }, g = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, p = { HIDE: "hide" + l, HIDDEN: "hidden" + l, SHOW: "show" + l, SHOWN: "shown" + l, FOCUSIN: "focusin" + l, RESIZE: "resize" + l, CLICK_DISMISS: "click.dismiss" + l, KEYDOWN_DISMISS: "keydown.dismiss" + l, MOUSEUP_DISMISS: "mouseup.dismiss" + l, MOUSEDOWN_DISMISS: "mousedown.dismiss" + l, CLICK_DATA_API: "click" + l + h }, m = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" }, E = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top" }, v = function() {
          function h2(e3, i2) {
            n(this, h2), this._config = this._getConfig(i2), this._element = e3, this._dialog = t2(e3).find(E.DIALOG)[0], this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
          }
          return h2.prototype.toggle = function(t3) {
            return this._isShown ? this.hide() : this.show(t3);
          }, h2.prototype.show = function(e3) {
            var n2 = this;
            if (this._isTransitioning)
              throw new Error("Modal is transitioning");
            r.supportsTransitionEnd() && t2(this._element).hasClass(m.FADE) && (this._isTransitioning = true);
            var i2 = t2.Event(p.SHOW, { relatedTarget: e3 });
            t2(this._element).trigger(i2), this._isShown || i2.isDefaultPrevented() || (this._isShown = true, this._checkScrollbar(), this._setScrollbar(), t2(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t2(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function(t3) {
              return n2.hide(t3);
            }), t2(this._dialog).on(p.MOUSEDOWN_DISMISS, function() {
              t2(n2._element).one(p.MOUSEUP_DISMISS, function(e4) {
                t2(e4.target).is(n2._element) && (n2._ignoreBackdropClick = true);
              });
            }), this._showBackdrop(function() {
              return n2._showElement(e3);
            }));
          }, h2.prototype.hide = function(e3) {
            var n2 = this;
            if (e3 && e3.preventDefault(), this._isTransitioning)
              throw new Error("Modal is transitioning");
            var i2 = r.supportsTransitionEnd() && t2(this._element).hasClass(m.FADE);
            i2 && (this._isTransitioning = true);
            var o2 = t2.Event(p.HIDE);
            t2(this._element).trigger(o2), this._isShown && !o2.isDefaultPrevented() && (this._isShown = false, this._setEscapeEvent(), this._setResizeEvent(), t2(document).off(p.FOCUSIN), t2(this._element).removeClass(m.SHOW), t2(this._element).off(p.CLICK_DISMISS), t2(this._dialog).off(p.MOUSEDOWN_DISMISS), i2 ? t2(this._element).one(r.TRANSITION_END, function(t3) {
              return n2._hideModal(t3);
            }).emulateTransitionEnd(u) : this._hideModal());
          }, h2.prototype.dispose = function() {
            t2.removeData(this._element, a), t2(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null;
          }, h2.prototype._getConfig = function(n2) {
            return n2 = t2.extend({}, _, n2), r.typeCheckConfig(e2, n2, g), n2;
          }, h2.prototype._showElement = function(e3) {
            var n2 = this, i2 = r.supportsTransitionEnd() && t2(this._element).hasClass(m.FADE);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i2 && r.reflow(this._element), t2(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();
            var o2 = t2.Event(p.SHOWN, { relatedTarget: e3 }), s3 = function() {
              n2._config.focus && n2._element.focus(), n2._isTransitioning = false, t2(n2._element).trigger(o2);
            };
            i2 ? t2(this._dialog).one(r.TRANSITION_END, s3).emulateTransitionEnd(u) : s3();
          }, h2.prototype._enforceFocus = function() {
            var e3 = this;
            t2(document).off(p.FOCUSIN).on(p.FOCUSIN, function(n2) {
              document === n2.target || e3._element === n2.target || t2(e3._element).has(n2.target).length || e3._element.focus();
            });
          }, h2.prototype._setEscapeEvent = function() {
            var e3 = this;
            this._isShown && this._config.keyboard ? t2(this._element).on(p.KEYDOWN_DISMISS, function(t3) {
              t3.which === f && e3.hide();
            }) : this._isShown || t2(this._element).off(p.KEYDOWN_DISMISS);
          }, h2.prototype._setResizeEvent = function() {
            var e3 = this;
            this._isShown ? t2(window).on(p.RESIZE, function(t3) {
              return e3._handleUpdate(t3);
            }) : t2(window).off(p.RESIZE);
          }, h2.prototype._hideModal = function() {
            var e3 = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = false, this._showBackdrop(function() {
              t2(document.body).removeClass(m.OPEN), e3._resetAdjustments(), e3._resetScrollbar(), t2(e3._element).trigger(p.HIDDEN);
            });
          }, h2.prototype._removeBackdrop = function() {
            this._backdrop && (t2(this._backdrop).remove(), this._backdrop = null);
          }, h2.prototype._showBackdrop = function(e3) {
            var n2 = this, i2 = t2(this._element).hasClass(m.FADE) ? m.FADE : "";
            if (this._isShown && this._config.backdrop) {
              var o2 = r.supportsTransitionEnd() && i2;
              if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i2 && t2(this._backdrop).addClass(i2), t2(this._backdrop).appendTo(document.body), t2(this._element).on(p.CLICK_DISMISS, function(t3) {
                return n2._ignoreBackdropClick ? void (n2._ignoreBackdropClick = false) : void (t3.target === t3.currentTarget && ("static" === n2._config.backdrop ? n2._element.focus() : n2.hide()));
              }), o2 && r.reflow(this._backdrop), t2(this._backdrop).addClass(m.SHOW), !e3)
                return;
              if (!o2)
                return void e3();
              t2(this._backdrop).one(r.TRANSITION_END, e3).emulateTransitionEnd(d);
            } else if (!this._isShown && this._backdrop) {
              t2(this._backdrop).removeClass(m.SHOW);
              var s3 = function() {
                n2._removeBackdrop(), e3 && e3();
              };
              r.supportsTransitionEnd() && t2(this._element).hasClass(m.FADE) ? t2(this._backdrop).one(r.TRANSITION_END, s3).emulateTransitionEnd(d) : s3();
            } else
              e3 && e3();
          }, h2.prototype._handleUpdate = function() {
            this._adjustDialog();
          }, h2.prototype._adjustDialog = function() {
            var t3 = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t3 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t3 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
          }, h2.prototype._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }, h2.prototype._checkScrollbar = function() {
            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
          }, h2.prototype._setScrollbar = function() {
            var e3 = parseInt(t2(E.FIXED_CONTENT).css("padding-right") || 0, 10);
            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e3 + this._scrollbarWidth + "px");
          }, h2.prototype._resetScrollbar = function() {
            document.body.style.paddingRight = this._originalBodyPadding;
          }, h2.prototype._getScrollbarWidth = function() {
            var t3 = document.createElement("div");
            t3.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t3);
            var e3 = t3.offsetWidth - t3.clientWidth;
            return document.body.removeChild(t3), e3;
          }, h2._jQueryInterface = function(e3, n2) {
            return this.each(function() {
              var o2 = t2(this).data(a), r2 = t2.extend({}, h2.Default, t2(this).data(), "object" === ("undefined" == typeof e3 ? "undefined" : i(e3)) && e3);
              if (o2 || (o2 = new h2(this, r2), t2(this).data(a, o2)), "string" == typeof e3) {
                if (void 0 === o2[e3])
                  throw new Error('No method named "' + e3 + '"');
                o2[e3](n2);
              } else
                r2.show && o2.show(n2);
            });
          }, o(h2, null, [{ key: "VERSION", get: function() {
            return s2;
          } }, { key: "Default", get: function() {
            return _;
          } }]), h2;
        }();
        return t2(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function(e3) {
          var n2 = this, i2 = void 0, o2 = r.getSelectorFromElement(this);
          o2 && (i2 = t2(o2)[0]);
          var s3 = t2(i2).data(a) ? "toggle" : t2.extend({}, t2(i2).data(), t2(this).data());
          "A" !== this.tagName && "AREA" !== this.tagName || e3.preventDefault();
          var l2 = t2(i2).one(p.SHOW, function(e4) {
            e4.isDefaultPrevented() || l2.one(p.HIDDEN, function() {
              t2(n2).is(":visible") && n2.focus();
            });
          });
          v._jQueryInterface.call(t2(i2), s3, this);
        }), t2.fn[e2] = v._jQueryInterface, t2.fn[e2].Constructor = v, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = c, v._jQueryInterface;
        }, v;
      }(jQuery), function(t2) {
        var e2 = "scrollspy", s2 = "4.0.0-alpha.6", a = "bs.scrollspy", l = "." + a, h = ".data-api", c = t2.fn[e2], u = { offset: 10, method: "auto", target: "" }, d = { offset: "number", method: "string", target: "(string|element)" }, f = { ACTIVATE: "activate" + l, SCROLL: "scroll" + l, LOAD_DATA_API: "load" + l + h }, _ = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", NAV_LINK: "nav-link", NAV: "nav", ACTIVE: "active" }, g = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, p = { OFFSET: "offset", POSITION: "position" }, m = function() {
          function h2(e3, i2) {
            var o2 = this;
            n(this, h2), this._element = e3, this._scrollElement = "BODY" === e3.tagName ? window : e3, this._config = this._getConfig(i2), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t2(this._scrollElement).on(f.SCROLL, function(t3) {
              return o2._process(t3);
            }), this.refresh(), this._process();
          }
          return h2.prototype.refresh = function() {
            var e3 = this, n2 = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET, i2 = "auto" === this._config.method ? n2 : this._config.method, o2 = i2 === p.POSITION ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
            var s3 = t2.makeArray(t2(this._selector));
            s3.map(function(e4) {
              var n3 = void 0, s4 = r.getSelectorFromElement(e4);
              return s4 && (n3 = t2(s4)[0]), n3 && (n3.offsetWidth || n3.offsetHeight) ? [t2(n3)[i2]().top + o2, s4] : null;
            }).filter(function(t3) {
              return t3;
            }).sort(function(t3, e4) {
              return t3[0] - e4[0];
            }).forEach(function(t3) {
              e3._offsets.push(t3[0]), e3._targets.push(t3[1]);
            });
          }, h2.prototype.dispose = function() {
            t2.removeData(this._element, a), t2(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
          }, h2.prototype._getConfig = function(n2) {
            if (n2 = t2.extend({}, u, n2), "string" != typeof n2.target) {
              var i2 = t2(n2.target).attr("id");
              i2 || (i2 = r.getUID(e2), t2(n2.target).attr("id", i2)), n2.target = "#" + i2;
            }
            return r.typeCheckConfig(e2, n2, d), n2;
          }, h2.prototype._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }, h2.prototype._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }, h2.prototype._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
          }, h2.prototype._process = function() {
            var t3 = this._getScrollTop() + this._config.offset, e3 = this._getScrollHeight(), n2 = this._config.offset + e3 - this._getOffsetHeight();
            if (this._scrollHeight !== e3 && this.refresh(), t3 >= n2) {
              var i2 = this._targets[this._targets.length - 1];
              return void (this._activeTarget !== i2 && this._activate(i2));
            }
            if (this._activeTarget && t3 < this._offsets[0] && this._offsets[0] > 0)
              return this._activeTarget = null, void this._clear();
            for (var o2 = this._offsets.length; o2--; ) {
              var r2 = this._activeTarget !== this._targets[o2] && t3 >= this._offsets[o2] && (void 0 === this._offsets[o2 + 1] || t3 < this._offsets[o2 + 1]);
              r2 && this._activate(this._targets[o2]);
            }
          }, h2.prototype._activate = function(e3) {
            this._activeTarget = e3, this._clear();
            var n2 = this._selector.split(",");
            n2 = n2.map(function(t3) {
              return t3 + '[data-target="' + e3 + '"],' + (t3 + '[href="' + e3 + '"]');
            });
            var i2 = t2(n2.join(","));
            i2.hasClass(_.DROPDOWN_ITEM) ? (i2.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i2.addClass(_.ACTIVE)) : i2.parents(g.LI).find("> " + g.NAV_LINKS).addClass(_.ACTIVE), t2(this._scrollElement).trigger(f.ACTIVATE, { relatedTarget: e3 });
          }, h2.prototype._clear = function() {
            t2(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE);
          }, h2._jQueryInterface = function(e3) {
            return this.each(function() {
              var n2 = t2(this).data(a), o2 = "object" === ("undefined" == typeof e3 ? "undefined" : i(e3)) && e3;
              if (n2 || (n2 = new h2(this, o2), t2(this).data(a, n2)), "string" == typeof e3) {
                if (void 0 === n2[e3])
                  throw new Error('No method named "' + e3 + '"');
                n2[e3]();
              }
            });
          }, o(h2, null, [{ key: "VERSION", get: function() {
            return s2;
          } }, { key: "Default", get: function() {
            return u;
          } }]), h2;
        }();
        return t2(window).on(f.LOAD_DATA_API, function() {
          for (var e3 = t2.makeArray(t2(g.DATA_SPY)), n2 = e3.length; n2--; ) {
            var i2 = t2(e3[n2]);
            m._jQueryInterface.call(i2, i2.data());
          }
        }), t2.fn[e2] = m._jQueryInterface, t2.fn[e2].Constructor = m, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = c, m._jQueryInterface;
        }, m;
      }(jQuery), function(t2) {
        var e2 = "tab", i2 = "4.0.0-alpha.6", s2 = "bs.tab", a = "." + s2, l = ".data-api", h = t2.fn[e2], c = 150, u = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, CLICK_DATA_API: "click" + a + l }, d = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" }, f = { A: "a", LI: "li", DROPDOWN: ".dropdown", LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)", FADE_CHILD: "> .nav-item .fade, > .fade", ACTIVE: ".active", ACTIVE_CHILD: "> .nav-item > .active, > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" }, _ = function() {
          function e3(t3) {
            n(this, e3), this._element = t3;
          }
          return e3.prototype.show = function() {
            var e4 = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t2(this._element).hasClass(d.ACTIVE) || t2(this._element).hasClass(d.DISABLED))) {
              var n2 = void 0, i3 = void 0, o2 = t2(this._element).closest(f.LIST)[0], s3 = r.getSelectorFromElement(this._element);
              o2 && (i3 = t2.makeArray(t2(o2).find(f.ACTIVE)), i3 = i3[i3.length - 1]);
              var a2 = t2.Event(u.HIDE, { relatedTarget: this._element }), l2 = t2.Event(u.SHOW, { relatedTarget: i3 });
              if (i3 && t2(i3).trigger(a2), t2(this._element).trigger(l2), !l2.isDefaultPrevented() && !a2.isDefaultPrevented()) {
                s3 && (n2 = t2(s3)[0]), this._activate(this._element, o2);
                var h2 = function() {
                  var n3 = t2.Event(u.HIDDEN, { relatedTarget: e4._element }), o3 = t2.Event(u.SHOWN, { relatedTarget: i3 });
                  t2(i3).trigger(n3), t2(e4._element).trigger(o3);
                };
                n2 ? this._activate(n2, n2.parentNode, h2) : h2();
              }
            }
          }, e3.prototype.dispose = function() {
            t2.removeClass(this._element, s2), this._element = null;
          }, e3.prototype._activate = function(e4, n2, i3) {
            var o2 = this, s3 = t2(n2).find(f.ACTIVE_CHILD)[0], a2 = i3 && r.supportsTransitionEnd() && (s3 && t2(s3).hasClass(d.FADE) || Boolean(t2(n2).find(f.FADE_CHILD)[0])), l2 = function() {
              return o2._transitionComplete(e4, s3, a2, i3);
            };
            s3 && a2 ? t2(s3).one(r.TRANSITION_END, l2).emulateTransitionEnd(c) : l2(), s3 && t2(s3).removeClass(d.SHOW);
          }, e3.prototype._transitionComplete = function(e4, n2, i3, o2) {
            if (n2) {
              t2(n2).removeClass(d.ACTIVE);
              var s3 = t2(n2.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];
              s3 && t2(s3).removeClass(d.ACTIVE), n2.setAttribute("aria-expanded", false);
            }
            if (t2(e4).addClass(d.ACTIVE), e4.setAttribute("aria-expanded", true), i3 ? (r.reflow(e4), t2(e4).addClass(d.SHOW)) : t2(e4).removeClass(d.FADE), e4.parentNode && t2(e4.parentNode).hasClass(d.DROPDOWN_MENU)) {
              var a2 = t2(e4).closest(f.DROPDOWN)[0];
              a2 && t2(a2).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e4.setAttribute("aria-expanded", true);
            }
            o2 && o2();
          }, e3._jQueryInterface = function(n2) {
            return this.each(function() {
              var i3 = t2(this), o2 = i3.data(s2);
              if (o2 || (o2 = new e3(this), i3.data(s2, o2)), "string" == typeof n2) {
                if (void 0 === o2[n2])
                  throw new Error('No method named "' + n2 + '"');
                o2[n2]();
              }
            });
          }, o(e3, null, [{ key: "VERSION", get: function() {
            return i2;
          } }]), e3;
        }();
        return t2(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function(e3) {
          e3.preventDefault(), _._jQueryInterface.call(t2(this), "show");
        }), t2.fn[e2] = _._jQueryInterface, t2.fn[e2].Constructor = _, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = h, _._jQueryInterface;
        }, _;
      }(jQuery), function(t2) {
        if ("undefined" == typeof Tether)
          throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
        var e2 = "tooltip", s2 = "4.0.0-alpha.6", a = "bs.tooltip", l = "." + a, h = t2.fn[e2], c = 150, u = "bs-tether", d = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: "0 0", constraints: [], container: false }, f = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array", container: "(string|element|boolean)" }, _ = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" }, g = { SHOW: "show", OUT: "out" }, p = { HIDE: "hide" + l, HIDDEN: "hidden" + l, SHOW: "show" + l, SHOWN: "shown" + l, INSERTED: "inserted" + l, CLICK: "click" + l, FOCUSIN: "focusin" + l, FOCUSOUT: "focusout" + l, MOUSEENTER: "mouseenter" + l, MOUSELEAVE: "mouseleave" + l }, m = { FADE: "fade", SHOW: "show" }, E = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" }, v = { element: false, enabled: false }, T = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" }, I = function() {
          function h2(t3, e3) {
            n(this, h2), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = false, this._tether = null, this.element = t3, this.config = this._getConfig(e3), this.tip = null, this._setListeners();
          }
          return h2.prototype.enable = function() {
            this._isEnabled = true;
          }, h2.prototype.disable = function() {
            this._isEnabled = false;
          }, h2.prototype.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
          }, h2.prototype.toggle = function(e3) {
            if (e3) {
              var n2 = this.constructor.DATA_KEY, i2 = t2(e3.currentTarget).data(n2);
              i2 || (i2 = new this.constructor(e3.currentTarget, this._getDelegateConfig()), t2(e3.currentTarget).data(n2, i2)), i2._activeTrigger.click = !i2._activeTrigger.click, i2._isWithActiveTrigger() ? i2._enter(null, i2) : i2._leave(null, i2);
            } else {
              if (t2(this.getTipElement()).hasClass(m.SHOW))
                return void this._leave(null, this);
              this._enter(null, this);
            }
          }, h2.prototype.dispose = function() {
            clearTimeout(this._timeout), this.cleanupTether(), t2.removeData(this.element, this.constructor.DATA_KEY), t2(this.element).off(this.constructor.EVENT_KEY), t2(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t2(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null;
          }, h2.prototype.show = function() {
            var e3 = this;
            if ("none" === t2(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var n2 = t2.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              if (this._isTransitioning)
                throw new Error("Tooltip is transitioning");
              t2(this.element).trigger(n2);
              var i2 = t2.contains(this.element.ownerDocument.documentElement, this.element);
              if (n2.isDefaultPrevented() || !i2)
                return;
              var o2 = this.getTipElement(), s3 = r.getUID(this.constructor.NAME);
              o2.setAttribute("id", s3), this.element.setAttribute("aria-describedby", s3), this.setContent(), this.config.animation && t2(o2).addClass(m.FADE);
              var a2 = "function" == typeof this.config.placement ? this.config.placement.call(this, o2, this.element) : this.config.placement, l2 = this._getAttachment(a2), c2 = this.config.container === false ? document.body : t2(this.config.container);
              t2(o2).data(this.constructor.DATA_KEY, this).appendTo(c2), t2(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: l2, element: o2, target: this.element, classes: v, classPrefix: u, offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: false }), r.reflow(o2), this._tether.position(), t2(o2).addClass(m.SHOW);
              var d2 = function() {
                var n3 = e3._hoverState;
                e3._hoverState = null, e3._isTransitioning = false, t2(e3.element).trigger(e3.constructor.Event.SHOWN), n3 === g.OUT && e3._leave(null, e3);
              };
              if (r.supportsTransitionEnd() && t2(this.tip).hasClass(m.FADE))
                return this._isTransitioning = true, void t2(this.tip).one(r.TRANSITION_END, d2).emulateTransitionEnd(h2._TRANSITION_DURATION);
              d2();
            }
          }, h2.prototype.hide = function(e3) {
            var n2 = this, i2 = this.getTipElement(), o2 = t2.Event(this.constructor.Event.HIDE);
            if (this._isTransitioning)
              throw new Error("Tooltip is transitioning");
            var s3 = function() {
              n2._hoverState !== g.SHOW && i2.parentNode && i2.parentNode.removeChild(i2), n2.element.removeAttribute("aria-describedby"), t2(n2.element).trigger(n2.constructor.Event.HIDDEN), n2._isTransitioning = false, n2.cleanupTether(), e3 && e3();
            };
            t2(this.element).trigger(o2), o2.isDefaultPrevented() || (t2(i2).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = false, this._activeTrigger[T.FOCUS] = false, this._activeTrigger[T.HOVER] = false, r.supportsTransitionEnd() && t2(this.tip).hasClass(m.FADE) ? (this._isTransitioning = true, t2(i2).one(r.TRANSITION_END, s3).emulateTransitionEnd(c)) : s3(), this._hoverState = "");
          }, h2.prototype.isWithContent = function() {
            return Boolean(this.getTitle());
          }, h2.prototype.getTipElement = function() {
            return this.tip = this.tip || t2(this.config.template)[0];
          }, h2.prototype.setContent = function() {
            var e3 = t2(this.getTipElement());
            this.setElementContent(e3.find(E.TOOLTIP_INNER), this.getTitle()), e3.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether();
          }, h2.prototype.setElementContent = function(e3, n2) {
            var o2 = this.config.html;
            "object" === ("undefined" == typeof n2 ? "undefined" : i(n2)) && (n2.nodeType || n2.jquery) ? o2 ? t2(n2).parent().is(e3) || e3.empty().append(n2) : e3.text(t2(n2).text()) : e3[o2 ? "html" : "text"](n2);
          }, h2.prototype.getTitle = function() {
            var t3 = this.element.getAttribute("data-original-title");
            return t3 || (t3 = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t3;
          }, h2.prototype.cleanupTether = function() {
            this._tether && this._tether.destroy();
          }, h2.prototype._getAttachment = function(t3) {
            return _[t3.toUpperCase()];
          }, h2.prototype._setListeners = function() {
            var e3 = this, n2 = this.config.trigger.split(" ");
            n2.forEach(function(n3) {
              if ("click" === n3)
                t2(e3.element).on(e3.constructor.Event.CLICK, e3.config.selector, function(t3) {
                  return e3.toggle(t3);
                });
              else if (n3 !== T.MANUAL) {
                var i2 = n3 === T.HOVER ? e3.constructor.Event.MOUSEENTER : e3.constructor.Event.FOCUSIN, o2 = n3 === T.HOVER ? e3.constructor.Event.MOUSELEAVE : e3.constructor.Event.FOCUSOUT;
                t2(e3.element).on(i2, e3.config.selector, function(t3) {
                  return e3._enter(t3);
                }).on(o2, e3.config.selector, function(t3) {
                  return e3._leave(t3);
                });
              }
              t2(e3.element).closest(".modal").on("hide.bs.modal", function() {
                return e3.hide();
              });
            }), this.config.selector ? this.config = t2.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
          }, h2.prototype._fixTitle = function() {
            var t3 = i(this.element.getAttribute("data-original-title"));
            (this.element.getAttribute("title") || "string" !== t3) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
          }, h2.prototype._enter = function(e3, n2) {
            var i2 = this.constructor.DATA_KEY;
            return n2 = n2 || t2(e3.currentTarget).data(i2), n2 || (n2 = new this.constructor(e3.currentTarget, this._getDelegateConfig()), t2(e3.currentTarget).data(i2, n2)), e3 && (n2._activeTrigger["focusin" === e3.type ? T.FOCUS : T.HOVER] = true), t2(n2.getTipElement()).hasClass(m.SHOW) || n2._hoverState === g.SHOW ? void (n2._hoverState = g.SHOW) : (clearTimeout(n2._timeout), n2._hoverState = g.SHOW, n2.config.delay && n2.config.delay.show ? void (n2._timeout = setTimeout(function() {
              n2._hoverState === g.SHOW && n2.show();
            }, n2.config.delay.show)) : void n2.show());
          }, h2.prototype._leave = function(e3, n2) {
            var i2 = this.constructor.DATA_KEY;
            if (n2 = n2 || t2(e3.currentTarget).data(i2), n2 || (n2 = new this.constructor(e3.currentTarget, this._getDelegateConfig()), t2(e3.currentTarget).data(i2, n2)), e3 && (n2._activeTrigger["focusout" === e3.type ? T.FOCUS : T.HOVER] = false), !n2._isWithActiveTrigger())
              return clearTimeout(n2._timeout), n2._hoverState = g.OUT, n2.config.delay && n2.config.delay.hide ? void (n2._timeout = setTimeout(function() {
                n2._hoverState === g.OUT && n2.hide();
              }, n2.config.delay.hide)) : void n2.hide();
          }, h2.prototype._isWithActiveTrigger = function() {
            for (var t3 in this._activeTrigger)
              if (this._activeTrigger[t3])
                return true;
            return false;
          }, h2.prototype._getConfig = function(n2) {
            return n2 = t2.extend({}, this.constructor.Default, t2(this.element).data(), n2), n2.delay && "number" == typeof n2.delay && (n2.delay = { show: n2.delay, hide: n2.delay }), r.typeCheckConfig(e2, n2, this.constructor.DefaultType), n2;
          }, h2.prototype._getDelegateConfig = function() {
            var t3 = {};
            if (this.config)
              for (var e3 in this.config)
                this.constructor.Default[e3] !== this.config[e3] && (t3[e3] = this.config[e3]);
            return t3;
          }, h2._jQueryInterface = function(e3) {
            return this.each(function() {
              var n2 = t2(this).data(a), o2 = "object" === ("undefined" == typeof e3 ? "undefined" : i(e3)) && e3;
              if ((n2 || !/dispose|hide/.test(e3)) && (n2 || (n2 = new h2(this, o2), t2(this).data(a, n2)), "string" == typeof e3)) {
                if (void 0 === n2[e3])
                  throw new Error('No method named "' + e3 + '"');
                n2[e3]();
              }
            });
          }, o(h2, null, [{ key: "VERSION", get: function() {
            return s2;
          } }, { key: "Default", get: function() {
            return d;
          } }, { key: "NAME", get: function() {
            return e2;
          } }, { key: "DATA_KEY", get: function() {
            return a;
          } }, { key: "Event", get: function() {
            return p;
          } }, { key: "EVENT_KEY", get: function() {
            return l;
          } }, { key: "DefaultType", get: function() {
            return f;
          } }]), h2;
        }();
        return t2.fn[e2] = I._jQueryInterface, t2.fn[e2].Constructor = I, t2.fn[e2].noConflict = function() {
          return t2.fn[e2] = h, I._jQueryInterface;
        }, I;
      }(jQuery));
      (function(r2) {
        var a = "popover", l = "4.0.0-alpha.6", h = "bs.popover", c = "." + h, u = r2.fn[a], d = r2.extend({}, s.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), f = r2.extend({}, s.DefaultType, { content: "(string|element|function)" }), _ = { FADE: "fade", SHOW: "show" }, g = { TITLE: ".popover-title", CONTENT: ".popover-content" }, p = { HIDE: "hide" + c, HIDDEN: "hidden" + c, SHOW: "show" + c, SHOWN: "shown" + c, INSERTED: "inserted" + c, CLICK: "click" + c, FOCUSIN: "focusin" + c, FOCUSOUT: "focusout" + c, MOUSEENTER: "mouseenter" + c, MOUSELEAVE: "mouseleave" + c }, m = function(s2) {
          function u2() {
            return n(this, u2), t(this, s2.apply(this, arguments));
          }
          return e(u2, s2), u2.prototype.isWithContent = function() {
            return this.getTitle() || this._getContent();
          }, u2.prototype.getTipElement = function() {
            return this.tip = this.tip || r2(this.config.template)[0];
          }, u2.prototype.setContent = function() {
            var t2 = r2(this.getTipElement());
            this.setElementContent(t2.find(g.TITLE), this.getTitle()), this.setElementContent(t2.find(g.CONTENT), this._getContent()), t2.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether();
          }, u2.prototype._getContent = function() {
            return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
          }, u2._jQueryInterface = function(t2) {
            return this.each(function() {
              var e2 = r2(this).data(h), n2 = "object" === ("undefined" == typeof t2 ? "undefined" : i(t2)) ? t2 : null;
              if ((e2 || !/destroy|hide/.test(t2)) && (e2 || (e2 = new u2(this, n2), r2(this).data(h, e2)), "string" == typeof t2)) {
                if (void 0 === e2[t2])
                  throw new Error('No method named "' + t2 + '"');
                e2[t2]();
              }
            });
          }, o(u2, null, [{ key: "VERSION", get: function() {
            return l;
          } }, { key: "Default", get: function() {
            return d;
          } }, { key: "NAME", get: function() {
            return a;
          } }, { key: "DATA_KEY", get: function() {
            return h;
          } }, { key: "Event", get: function() {
            return p;
          } }, { key: "EVENT_KEY", get: function() {
            return c;
          } }, { key: "DefaultType", get: function() {
            return f;
          } }]), u2;
        }(s);
        return r2.fn[a] = m._jQueryInterface, r2.fn[a].Constructor = m, r2.fn[a].noConflict = function() {
          return r2.fn[a] = u, m._jQueryInterface;
        }, m;
      })(jQuery);
    }();
    window.axios = axios;
    window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    (function() {
      var a, b, c, d, e, f = function(a2, b2) {
        return function() {
          return a2.apply(b2, arguments);
        };
      }, g = [].indexOf || function(a2) {
        for (var b2 = 0, c2 = this.length; c2 > b2; b2++)
          if (b2 in this && this[b2] === a2)
            return b2;
        return -1;
      };
      b = function() {
        function a2() {
        }
        return a2.prototype.extend = function(a3, b2) {
          var c2, d2;
          for (c2 in b2)
            d2 = b2[c2], null == a3[c2] && (a3[c2] = d2);
          return a3;
        }, a2.prototype.isMobile = function(a3) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a3);
        }, a2.prototype.createEvent = function(a3, b2, c2, d2) {
          var e2;
          return null == b2 && (b2 = false), null == c2 && (c2 = false), null == d2 && (d2 = null), null != document.createEvent ? (e2 = document.createEvent("CustomEvent"), e2.initCustomEvent(a3, b2, c2, d2)) : null != document.createEventObject ? (e2 = document.createEventObject(), e2.eventType = a3) : e2.eventName = a3, e2;
        }, a2.prototype.emitEvent = function(a3, b2) {
          return null != a3.dispatchEvent ? a3.dispatchEvent(b2) : b2 in (null != a3) ? a3[b2]() : "on" + b2 in (null != a3) ? a3["on" + b2]() : void 0;
        }, a2.prototype.addEvent = function(a3, b2, c2) {
          return null != a3.addEventListener ? a3.addEventListener(b2, c2, false) : null != a3.attachEvent ? a3.attachEvent("on" + b2, c2) : a3[b2] = c2;
        }, a2.prototype.removeEvent = function(a3, b2, c2) {
          return null != a3.removeEventListener ? a3.removeEventListener(b2, c2, false) : null != a3.detachEvent ? a3.detachEvent("on" + b2, c2) : delete a3[b2];
        }, a2.prototype.innerHeight = function() {
          return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
        }, a2;
      }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a2() {
          this.keys = [], this.values = [];
        }
        return a2.prototype.get = function(a3) {
          var b2, c2, d2, e2, f2;
          for (f2 = this.keys, b2 = d2 = 0, e2 = f2.length; e2 > d2; b2 = ++d2)
            if (c2 = f2[b2], c2 === a3)
              return this.values[b2];
        }, a2.prototype.set = function(a3, b2) {
          var c2, d2, e2, f2, g2;
          for (g2 = this.keys, c2 = e2 = 0, f2 = g2.length; f2 > e2; c2 = ++e2)
            if (d2 = g2[c2], d2 === a3)
              return void (this.values[c2] = b2);
          return this.keys.push(a3), this.values.push(b2);
        }, a2;
      }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a2() {
          "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }
        return a2.notSupported = true, a2.prototype.observe = function() {
        }, a2;
      }()), d = this.getComputedStyle || function(a2, b2) {
        return this.getPropertyValue = function(b3) {
          var c2;
          return "float" === b3 && (b3 = "styleFloat"), e.test(b3) && b3.replace(e, function(a3, b4) {
            return b4.toUpperCase();
          }), (null != (c2 = a2.currentStyle) ? c2[b3] : void 0) || null;
        }, this;
      }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e2(a2) {
          null == a2 && (a2 = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = true, this.config = this.util().extend(a2, this.defaults), null != a2.scrollContainer && (this.config.scrollContainer = document.querySelector(a2.scrollContainer)), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        return e2.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: true, live: true, callback: null, scrollContainer: null }, e2.prototype.init = function() {
          var a2;
          return this.element = window.document.documentElement, "interactive" === (a2 = document.readyState) || "complete" === a2 ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
        }, e2.prototype.start = function() {
          var b2, c2, d2, e3;
          if (this.stopped = false, this.boxes = (function() {
            var a2, c3, d3, e4;
            for (d3 = this.element.querySelectorAll("." + this.config.boxClass), e4 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++)
              b2 = d3[a2], e4.push(b2);
            return e4;
          }).call(this), this.all = (function() {
            var a2, c3, d3, e4;
            for (d3 = this.boxes, e4 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++)
              b2 = d3[a2], e4.push(b2);
            return e4;
          }).call(this), this.boxes.length)
            if (this.disabled())
              this.resetStyle();
            else
              for (e3 = this.boxes, c2 = 0, d2 = e3.length; d2 > c2; c2++)
                b2 = e3[c2], this.applyStyle(b2, true);
          return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a2) {
            return function(b3) {
              var c3, d3, e4, f2, g2;
              for (g2 = [], c3 = 0, d3 = b3.length; d3 > c3; c3++)
                f2 = b3[c3], g2.push((function() {
                  var a3, b4, c4, d4;
                  for (c4 = f2.addedNodes || [], d4 = [], a3 = 0, b4 = c4.length; b4 > a3; a3++)
                    e4 = c4[a3], d4.push(this.doSync(e4));
                  return d4;
                }).call(a2));
              return g2;
            };
          }(this)).observe(document.body, { childList: true, subtree: true }) : void 0;
        }, e2.prototype.stop = function() {
          return this.stopped = true, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
        }, e2.prototype.sync = function(b2) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }, e2.prototype.doSync = function(a2) {
          var b2, c2, d2, e3, f2;
          if (null == a2 && (a2 = this.element), 1 === a2.nodeType) {
            for (a2 = a2.parentNode || a2, e3 = a2.querySelectorAll("." + this.config.boxClass), f2 = [], c2 = 0, d2 = e3.length; d2 > c2; c2++)
              b2 = e3[c2], g.call(this.all, b2) < 0 ? (this.boxes.push(b2), this.all.push(b2), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b2, true), f2.push(this.scrolled = true)) : f2.push(void 0);
            return f2;
          }
        }, e2.prototype.show = function(a2) {
          return this.applyStyle(a2), a2.className = a2.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a2), this.util().emitEvent(a2, this.wowEvent), this.util().addEvent(a2, "animationend", this.resetAnimation), this.util().addEvent(a2, "oanimationend", this.resetAnimation), this.util().addEvent(a2, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a2, "MSAnimationEnd", this.resetAnimation), a2;
        }, e2.prototype.applyStyle = function(a2, b2) {
          var c2, d2, e3;
          return d2 = a2.getAttribute("data-wow-duration"), c2 = a2.getAttribute("data-wow-delay"), e3 = a2.getAttribute("data-wow-iteration"), this.animate(function(f2) {
            return function() {
              return f2.customStyle(a2, b2, d2, c2, e3);
            };
          }(this));
        }, e2.prototype.animate = function() {
          return "requestAnimationFrame" in window ? function(a2) {
            return window.requestAnimationFrame(a2);
          } : function(a2) {
            return a2();
          };
        }(), e2.prototype.resetStyle = function() {
          var a2, b2, c2, d2, e3;
          for (d2 = this.boxes, e3 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++)
            a2 = d2[b2], e3.push(a2.style.visibility = "visible");
          return e3;
        }, e2.prototype.resetAnimation = function(a2) {
          var b2;
          return a2.type.toLowerCase().indexOf("animationend") >= 0 ? (b2 = a2.target || a2.srcElement, b2.className = b2.className.replace(this.config.animateClass, "").trim()) : void 0;
        }, e2.prototype.customStyle = function(a2, b2, c2, d2, e3) {
          return b2 && this.cacheAnimationName(a2), a2.style.visibility = b2 ? "hidden" : "visible", c2 && this.vendorSet(a2.style, { animationDuration: c2 }), d2 && this.vendorSet(a2.style, { animationDelay: d2 }), e3 && this.vendorSet(a2.style, { animationIterationCount: e3 }), this.vendorSet(a2.style, { animationName: b2 ? "none" : this.cachedAnimationName(a2) }), a2;
        }, e2.prototype.vendors = ["moz", "webkit"], e2.prototype.vendorSet = function(a2, b2) {
          var c2, d2, e3, f2;
          d2 = [];
          for (c2 in b2)
            e3 = b2[c2], a2["" + c2] = e3, d2.push((function() {
              var b3, d3, g2, h;
              for (g2 = this.vendors, h = [], b3 = 0, d3 = g2.length; d3 > b3; b3++)
                f2 = g2[b3], h.push(a2["" + f2 + c2.charAt(0).toUpperCase() + c2.substr(1)] = e3);
              return h;
            }).call(this));
          return d2;
        }, e2.prototype.vendorCSS = function(a2, b2) {
          var c2, e3, f2, g2, h, i;
          for (h = d(a2), g2 = h.getPropertyCSSValue(b2), f2 = this.vendors, c2 = 0, e3 = f2.length; e3 > c2; c2++)
            i = f2[c2], g2 = g2 || h.getPropertyCSSValue("-" + i + "-" + b2);
          return g2;
        }, e2.prototype.animationName = function(a2) {
          var b2;
          try {
            b2 = this.vendorCSS(a2, "animation-name").cssText;
          } catch (c2) {
            b2 = d(a2).getPropertyValue("animation-name");
          }
          return "none" === b2 ? "" : b2;
        }, e2.prototype.cacheAnimationName = function(a2) {
          return this.animationNameCache.set(a2, this.animationName(a2));
        }, e2.prototype.cachedAnimationName = function(a2) {
          return this.animationNameCache.get(a2);
        }, e2.prototype.scrollHandler = function() {
          return this.scrolled = true;
        }, e2.prototype.scrollCallback = function() {
          var a2;
          return !this.scrolled || (this.scrolled = false, this.boxes = (function() {
            var b2, c2, d2, e3;
            for (d2 = this.boxes, e3 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++)
              a2 = d2[b2], a2 && (this.isVisible(a2) ? this.show(a2) : e3.push(a2));
            return e3;
          }).call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
        }, e2.prototype.offsetTop = function(a2) {
          for (var b2; void 0 === a2.offsetTop; )
            a2 = a2.parentNode;
          for (b2 = a2.offsetTop; a2 = a2.offsetParent; )
            b2 += a2.offsetTop;
          return b2;
        }, e2.prototype.isVisible = function(a2) {
          var b2, c2, d2, e3, f2;
          return c2 = a2.getAttribute("data-wow-offset") || this.config.offset, f2 = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e3 = f2 + Math.min(this.element.clientHeight, this.util().innerHeight()) - c2, d2 = this.offsetTop(a2), b2 = d2 + a2.clientHeight, e3 >= d2 && b2 >= f2;
        }, e2.prototype.util = function() {
          return null != this._util ? this._util : this._util = new b();
        }, e2.prototype.disabled = function() {
          return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, e2;
      }();
    }).call(globalThis);
    /*!
     * ANIMATE
    */
    var wow = new WOW(
      {
        boxClass: "wow",
        // animated element css class (default is wow)
        animateClass: "animated",
        // animation css class (default is animated)
        offset: 0,
        // distance to the element when triggering the animation (default is 0)
        mobile: false,
        // trigger animations on mobile devices (default is true)
        live: true,
        // act on asynchronously loaded content (default is true)
        callback: function(box) {
        },
        scrollContainer: null
        // optional scroll container selector, otherwise use window
      }
    );
    wow.init();
    (function($) {
      $(document).ready(function() {
        $("#nav-expander").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("nav-expanded");
        });
        $("#nav-close").on("click", function(e) {
          e.preventDefault();
          $("body").removeClass("nav-expanded");
        });
      });
      $(function() {
        $('[data-toggle="tooltip"]').tooltip();
      });
      $(".carousel").carousel({
        interval: 4e3
      });
      $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
      });
      jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1) {
          jQuery(".dmtop").css({ bottom: "25px" });
        } else {
          jQuery(".dmtop").css({ bottom: "-100px" });
        }
      });
      jQuery(".dmtop").click(function() {
        jQuery("html, body").animate({ scrollTop: "0px" }, 800);
        return false;
      });
    })(jQuery);
  }
});
export default require_app2();
