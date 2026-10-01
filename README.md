# Vianex

An independent product-discovery website built from the existing packaging product material and image library. The imported catalog lives in `data/products.json`; product images remain under `images/` and `img/`.

Run locally from this folder with:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`. The catalog uses `fetch()` to load its JSON data, so serve the folder over HTTP rather than opening the HTML file directly.

The contact section uses `hello@vianex.example` as a temporary placeholder. Replace `CONTACT_EMAIL` in `js/site.js` and the displayed address in `index.html` before publishing. The form opens the visitor's email app; it does not send through a backend.
