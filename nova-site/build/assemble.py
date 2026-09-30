#!/usr/bin/env python3
"""Assemble dist/index.html from src/admin.html + src/site-src.js + src/public.css.

index.html is the main page: the public home at #/ and the admin panel (login-gated)
at every other hash. The admin passcode is set via NOVA_ADMIN_PASSCODE (default: nova-admin).
"""
import hashlib, os, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
src, out = ROOT / "src", ROOT / "dist"
out.mkdir(exist_ok=True)
passcode = os.environ.get("NOVA_ADMIN_PASSCODE", "nova-admin").encode()
s = (src / "admin.html").read_text()
js = (src / "site-src.js").read_text().replace("__PASSHASH__", hashlib.sha256(passcode).hexdigest())
css = (src / "public.css").read_text()
def rep(a, b):
    global s
    assert a in s, f"anchor not found: {a[:60]}"
    s = s.replace(a, b, 1)
rep("<title>NOVA Playbook</title>", "<title>NOVA Automation</title>")
rep("@media (prefers-reduced-motion:no-preference)", css + "\n@media (prefers-reduced-motion:no-preference)")
rep('<div class="mobilebar"><span class="t" id="mbrand">NOVA</span>', '<div id="public" hidden></div>\n<div class="mobilebar" id="mobilebar" hidden><span class="t" id="mbrand">NOVA</span>')
rep('<div class="shell">', '<div class="shell" id="shell" hidden>')
rep('function route(){\n  const id = (location.hash||"#home").slice(1);', 'function adminRoute(){\n  const id = (location.hash||"#home").slice(1);')
rep('let currentFilter = "";\nbuildNav();\nwindow.addEventListener("hashchange", route);\nroute();', 'let currentFilter = "";\n' + js + '\nbuildNav();\nwindow.addEventListener("hashchange", route);\nroute();')
rep('${link({id:"download",label:"Download full playbook"})}</div>`;', '${link({id:"download",label:"Download full playbook"})}</div><div class="navgroup"><div class="gl">Site</div><a href="#/" data-route="site"><span>View public website</span></a><a href="#/" id="logoutBtn" data-route="logout"><span>Log out</span></a></div>`;')
rep('<option value="download">Download full playbook</option></optgroup>`;', '<option value="download">Download full playbook</option></optgroup><optgroup label="Site"><option value="/">View public website</option></optgroup>`;')
rep("<div class=\"eyebrow\">Operator's playbook · v1 · Sept 2026</div>", "<div class=\"eyebrow\">Admin panel · operator's playbook · Sept 2026</div>")
(out / "index.html").write_text(s)
print("wrote", out / "index.html")
