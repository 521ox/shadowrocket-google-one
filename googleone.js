/**
 * Google One SKU rewriter for Shadowrocket.
 * Local console logging only; no external reporting.
 */
"use strict";

var REPLACE = [
  ["g1.ios.30gb.m", "g1.ios.30tb.m"],
  ["g1.ios.20tb.m.v2", "g1.ios.20tb.m"],
  ["g1.ios.30tb.ai.pro.m", "g1.ios.30tb.m"]
];

var body = $response && $response.body;
var url = ($request && $request.url) || "?";

if (!body || typeof body !== "string") {
  console.log("[GoogleOne] no body " + url);
  $done({});
} else {
  var binary = /[\x00-\x08\x0e-\x1f]/.test(body);
  var hits = 0;

  for (var i = 0; i < REPLACE.length; i++) {
    var from = REPLACE[i][0];
    var to = REPLACE[i][1];

    if (body.indexOf(from) === -1) continue;

    if (binary && from.length !== to.length) {
      console.log("[GoogleOne] skip unequal replacement in binary body: " + from);
      continue;
    }

    var n = body.split(from).length - 1;
    body = body.split(from).join(to);
    hits += n;
    console.log("[GoogleOne] " + from + " -> " + to + " x" + n);
  }

  console.log("[GoogleOne] " + url + " hits=" + hits);
  $done(hits ? { body: body } : {});
}