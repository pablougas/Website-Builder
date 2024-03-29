(function (g) {
  g.ketchup = {
    defaults: {
      attribute: "data-validate",
      validateIndicator: "validate",
      eventIndicator: "on",
      validateEvents: "blur",
      validateElements: ["input", "textarea", "select"],
      createErrorContainer: null,
      showErrorContainer: null,
      hideErrorContainer: null,
      addErrorMessages: null,
    },
    dataNames: {
      validationString: "ketchup-validation-string",
      validations: "ketchup-validations",
      events: "ketchup-events",
      elements: "ketchup-validation-elements",
      container: "ketchup-container",
    },
    validations: {},
    helpers: {},
    validation: function (b, c, d, h) {
      var j;
      if (typeof c == "function") c = c;
      else {
        j = c;
        c = d;
      }
      this.validations[b] = { message: j, func: c, init: h || function () {} };
      return this;
    },
    message: function (b, c) {
      this.addMessage(b, c);
      return this;
    },
    messages: function (b) {
      for (name in b) this.addMessage(name, b[name]);
      return this;
    },
    addMessage: function (b, c) {
      if (this.validations[b]) this.validations[b].message = c;
    },
    helper: function (b, c) {
      this.helpers[b] = c;
      return this;
    },
    init: function (b, c, d) {
      this.options = c;
      var h = this;
      c = this.initFunctions().initFields(b, d);
      c.each(function () {
        var j = g(this);
        h.bindValidationEvent(b, j).callInitFunctions(b, j);
      });
      b.data(this.dataNames.elements, c);
      this.bindFormSubmit(b);
    },
    initFunctions: function () {
      var b = this.options,
        c = [
          "createErrorContainer",
          "showErrorContainer",
          "hideErrorContainer",
          "addErrorMessages",
        ];
      for (f = 0; f < c.length; f++) {
        var d = c[f];
        b[d] || (b[d] = this[d]);
      }
      return this;
    },
    initFields: function (b, c) {
      var d = this,
        h = this.dataNames,
        j = g(!c ? this.fieldsFromForm(b) : this.fieldsFromObject(b, c));
      j.each(function () {
        var l = g(this),
          m = d.extractValidations(
            l.data(h.validationString),
            d.options.validateIndicator
          );
        l.data(h.validations, m);
      });
      return j;
    },
    callInitFunctions: function (b, c) {
      var d = c.data(this.dataNames.validations);
      for (i = 0; i < d.length; i++) d[i].init.apply(this.helpers, [b, c]);
    },
    fieldsFromForm: function (b) {
      var c = this,
        d = this.options,
        h = this.dataNames,
        j = d.validateElements,
        l = [];
      j = typeof j == "string" ? [j] : j;
      for (i = 0; i < j.length; i++) {
        var m = b.find(
          j[i] + "[" + d.attribute + "*=" + d.validateIndicator + "]"
        );
        m.each(function () {
          var k = g(this),
            p = k.attr(d.attribute),
            q = c.extractEvents(p, d.eventIndicator);
          k.data(h.validationString, p).data(
            h.events,
            q ? q : d.validateEvents
          );
        });
        l.push(m.get());
      }
      return this.normalizeArray(l);
    },
    fieldsFromObject: function (b, c) {
      var d = this.options,
        h = this.dataNames,
        j = [];
      for (s in c) {
        var l, m;
        if (typeof c[s] == "string") {
          l = c[s];
          m = d.validateEvents;
        } else {
          l = c[s][0];
          m = c[s][1];
        }
        var k = b.find(s);
        l = this.mergeValidationString(k, l);
        m = this.mergeEventsString(k, m);
        k.data(h.validationString, d.validateIndicator + "(" + l + ")").data(
          h.events,
          m
        );
        j.push(k.get());
      }
      return this.normalizeArray(j);
    },
    mergeEventsString: function (b, c) {
      var d = b.data(this.dataNames.events),
        h = "";
      if (d) {
        d = d.split(" ");
        for (i = 0; i < d.length; i++)
          if (c.indexOf(d[i]) == -1) h += " " + d[i];
      }
      return g.trim(c + h);
    },
    mergeValidationString: function (b, c) {
      var d = this.options,
        h = b.data(this.dataNames.validationString),
        j = function (k) {
          var p = k.name;
          if (k.arguments.length) p = p + "(" + k.arguments.join(",") + ")";
          return p;
        },
        l = function (k, p) {
          for (i = 0; i < k.length; i++) if (k[i].name == p.name) return true;
        };
      if (h) {
        var m = this.extractValidations(
          d.validateIndicator + "(" + c + ")",
          d.validateIndicator
        );
        d = this.extractValidations(h, d.validateIndicator);
        c = "";
        for (o = 0; o < d.length; o++) c += j(d[o]) + ",";
        for (n = 0; n < m.length; n++) l(d, m[n]) || (c += j(m[n]) + ",");
      }
      return c;
    },
    bindFormSubmit: function (b) {
      var c = this;
      b.submit(function () {
        return c.allFieldsValid(b, true);
      });
    },
    allFieldsValid: function (b, c) {
      var d = this,
        h = true;
      b.data(this.dataNames.elements).each(function () {
        var j = g(this);
        if (d.validateElement(j, b) != true) {
          c == true && d.triggerValidationEvents(j);
          h = false;
        }
      });
      b.trigger("formIs" + (h ? "Valid" : "Invalid"), [b]);
      return h;
    },
    bindValidationEvent: function (b, c) {
      var d = this,
        h = this.options,
        j = this.dataNames,
        l = c.data(j.events).split(" ");
      for (i = 0; i < l.length; i++) {
        c.bind("ketchup." + l[i], function () {
          var m = d.validateElement(c, b),
            k = c.data(j.container);
          if (m != true) {
            if (!k) {
              k = h.createErrorContainer(b, c);
              c.data(j.container, k);
            }
            h.addErrorMessages(b, c, k, m);
            h.showErrorContainer(b, c, k);
          } else k && h.hideErrorContainer(b, c, k);
        });
        this.bindValidationEventBridge(c, l[i]);
      }
      return this;
    },
    bindValidationEventBridge: function (b, c) {
      b.bind(c, function () {
        b.trigger("ketchup." + c);
      });
    },
    validateElement: function (b, c) {
      var d = [],
        h = b.data(this.dataNames.validations),
        j = [c, b, b.val()];
      for (i = 0; i < h.length; i++)
        h[i].func.apply(this.helpers, j.concat(h[i].arguments)) ||
          d.push(h[i].message);
      c.trigger("fieldIs" + (d.length ? "Invalid" : "Valid"), [c, b]);
      return d.length ? d : true;
    },
    elementIsValid: function (b) {
      var c = this.dataNames;
      if (b.data(c.validations)) {
        c = b.parentsUntil("form").last().parent();
        return this.validateElement(b, c) == true ? true : false;
      } else if (b.data(c.elements)) return this.allFieldsValid(b);
      return null;
    },
    triggerValidationEvents: function (b) {
      for (
        var c = b.data(this.dataNames.events).split(" "), d = 0;
        d < c.length;
        d++
      )
        b.trigger("ketchup." + c[d]);
    },
    extractValidations: function (b, c) {
      for (
        var d = b.substr(b.indexOf(c) + c.length + 1),
          h = "",
          j = [],
          l = 0,
          m = [],
          k = 0;
        k < d.length;
        k++
      )
        switch (d.charAt(k)) {
          case "(":
            h += "(";
            l++;
            break;
          case ")":
            if (l) {
              h += ")";
              l--;
            } else j.push(g.trim(h));
            break;
          case ",":
            if (l) h += ",";
            else {
              j.push(g.trim(h));
              h = "";
            }
            break;
          default:
            h += d.charAt(k);
        }
      for (v = 0; v < j.length; v++) {
        l = j[v].indexOf("(");
        d = j[v];
        h = [];
        if (l != -1) {
          d = g.trim(j[v].substr(0, l));
          h = g.map(j[v].substr(d.length).split(","), function (p) {
            return g.trim(p.replace("(", "").replace(")", ""));
          });
        }
        if ((l = this.validations[d]) && l.message) {
          k = l.message;
          for (a = 1; a <= h.length; a++)
            k = k.replace("{arg" + a + "}", h[a - 1]);
          m.push({
            name: d,
            arguments: h,
            func: l.func,
            message: k,
            init: l.init,
          });
        }
      }
      return m;
    },
    extractEvents: function (b, c) {
      var d = false,
        h = b.indexOf(c + "(");
      if (h != -1) d = b.substr(h + c.length + 1).split(")")[0];
      return d;
    },
    normalizeArray: function (b) {
      var c = [];
      for (i = 0; i < b.length; i++)
        for (e = 0; e < b[i].length; e++) b[i][e] && c.push(b[i][e]);
      return c;
    },
    createErrorContainer: function (b, c) {
      if (typeof b == "function") {
        this.defaults.createErrorContainer = b;
        return this;
      } else {
        var d = c.offset();
        return g("<div/>", {
          html: "<ul></ul><span></span>",
          class: "ketchup-error",
          css: { top: d.top, left: d.left + c.outerWidth() - 20 },
        }).appendTo("body");
      }
    },
    showErrorContainer: function (b, c, d) {
      if (typeof b == "function") {
        this.defaults.showErrorContainer = b;
        return this;
      } else
        d.show().animate(
          { top: c.offset().top - d.height(), opacity: 1 },
          "fast"
        );
    },
    hideErrorContainer: function (b, c, d) {
      if (typeof b == "function") {
        this.defaults.hideErrorContainer = b;
        return this;
      } else
        d.animate({ top: c.offset().top, opacity: 0 }, "fast", function () {
          d.hide();
        });
    },
    addErrorMessages: function (b, c, d, h) {
      if (typeof b == "function") {
        this.defaults.addErrorMessages = b;
        return this;
      } else {
        b = d.children("ul");
        b.html("");
        for (i = 0; i < h.length; i++) g("<li/>", { text: h[i] }).appendTo(b);
      }
    },
  };
  g.fn.ketchup = function (b, c) {
    var d = g(this);
    if (typeof b == "string")
      switch (b) {
        case "validate":
          g.ketchup.triggerValidationEvents(d);
          break;
        case "isValid":
          return g.ketchup.elementIsValid(d);
      }
    else
      this.each(function () {
        g.ketchup.init(d, g.extend({}, g.ketchup.defaults, b), c);
      });
    return this;
  };
})(jQuery);
jQuery.ketchup
  .validation("required", "This field is required.", function (g, b, c) {
    g = b.attr("type").toLowerCase();
    return g == "checkbox" || g == "radio"
      ? b.attr("checked") == true
      : c.length != 0;
  })
  .validation(
    "minlength",
    "This field must have a minimal length of {arg1}.",
    function (g, b, c, d) {
      return c.length >= +d;
    }
  )
  .validation(
    "maxlength",
    "This field must have a maximal length of {arg1}.",
    function (g, b, c, d) {
      return c.length <= +d;
    }
  )
  .validation(
    "rangelength",
    "This field must have a length between {arg1} and {arg2}.",
    function (g, b, c, d, h) {
      return c.length >= d && c.length <= h;
    }
  )
  .validation("min", "Must be at least {arg1}.", function (g, b, c, d) {
    return this.isNumber(c) && +c >= +d;
  })
  .validation("max", "Can not be greater than {arg1}.", function (g, b, c, d) {
    return this.isNumber(c) && +c <= +d;
  })
  .validation(
    "range",
    "Must be between {arg1} and {arg2}.",
    function (g, b, c, d, h) {
      return this.isNumber(c) && +c >= +d && +c <= +h;
    }
  )
  .validation("number", "Must be a number.", function (g, b, c) {
    return this.isNumber(c);
  })
  .validation("digits", "Must be digits.", function (g, b, c) {
    return /^\d+$/.test(c);
  })
  .validation("email", "Must be a valid E-Mail.", function (g, b, c) {
    return this.isEmail(c);
  })
  .validation("url", "Must be a valid URL.", function (g, b, c) {
    return this.isUrl(c);
  })
  .validation("username", "Must be a valid username.", function (g, b, c) {
    return this.isUsername(c);
  })
  .validation("match", "Must be {arg1}.", function (g, b, c, d) {
    return b.val() == d;
  })
  .validation("contain", "Must contain {arg1}", function (g, b, c, d) {
    return this.contains(c, d);
  })
  .validation("date", "Must be a valid date.", function (g, b, c) {
    return this.isDate(c);
  })
  .validation(
    "minselect",
    "Select at least {arg1} checkboxes.",
    function (g, b, c, d) {
      return d <= this.inputsWithName(g, b).filter(":checked").length;
    },
    function (g, b) {
      this.bindBrothers(g, b);
    }
  )
  .validation(
    "maxselect",
    "Select not more than {arg1} checkboxes.",
    function (g, b, c, d) {
      return d >= this.inputsWithName(g, b).filter(":checked").length;
    },
    function (g, b) {
      this.bindBrothers(g, b);
    }
  )
  .validation(
    "rangeselect",
    "Select between {arg1} and {arg2} checkboxes.",
    function (g, b, c, d, h) {
      g = this.inputsWithName(g, b).filter(":checked").length;
      return d <= g && h >= g;
    },
    function (g, b) {
      this.bindBrothers(g, b);
    }
  );
jQuery.ketchup
  .helper("isNumber", function (g) {
    return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(g);
  })
  .helper("contains", function (g, b) {
    return g.indexOf(b) != -1;
  })
  .helper("isEmail", function (g) {
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(
      g
    );
  })
  .helper("isUrl", function (g) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
      g
    );
  })
  .helper("isUsername", function (g) {
    return /^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/.test(
      g
    );
  })
  .helper("isDate", function (g) {
    return !/Invalid|NaN/.test(new Date(g));
  })
  .helper("inputsWithName", function (g, b) {
    return $('input[name="' + b.attr("name") + '"]', g);
  })
  .helper("inputsWithNameNotSelf", function (g, b) {
    return this.inputsWithName(g, b).filter(function () {
      return $(this).index() != b.index();
    });
  })
  .helper("getKetchupEvents", function (g) {
    g = g.data("events").ketchup;
    var b = [];
    for (i = 0; i < g.length; i++) b.push(g[i].namespace);
    return b.join(" ");
  })
  .helper("bindBrothers", function (g, b) {
    this.inputsWithNameNotSelf(g, b).bind(
      this.getKetchupEvents(b),
      function () {
        b.ketchup("validate");
      }
    );
  });
