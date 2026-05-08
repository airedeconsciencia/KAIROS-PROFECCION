const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM, VirtualConsole } = jsdom;
const virtualConsole = new VirtualConsole();
virtualConsole.sendTo(console);

const html = fs.readFileSync("index.html", "utf8");
const appjs = fs.readFileSync("app.js", "utf8");

const dom = new JSDOM(html, {
  virtualConsole,
  runScripts: "dangerously",
  beforeParse(window) {
    // Mock Firebase
    window.firebase = {
      initializeApp: () => ({}),
      firestore: () => ({ collection: () => ({}) }),
      auth: () => ({ onAuthStateChanged: (cb) => { cb(null); } })
    };
    window.firebase.firestore.FieldValue = {
      serverTimestamp: () => new Date()
    };
    
    // Mock astronomy engine
    window.Astronomy = {
        Equator: () => ({}),
        Ecliptic: () => ({lon: 0, lat: 0}),
        SearchTransit: () => ({}),
        Time: function() { return {}; }
    };
    
    // inject script manually or let JSDOM do it
    const scriptEl = window.document.createElement("script");
    scriptEl.textContent = appjs;
    window.document.head.appendChild(scriptEl);
  }
});

setTimeout(() => {
    console.log("Done");
}, 2000);
