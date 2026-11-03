# Vianex

An independent product-discovery website built from the existing packaging product material and image library. The imported catalog lives in `data/products.json`; product images remain under `images/` and `img/`.

Run locally from this folder with:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`. The catalog uses `fetch()` to load its JSON data, so serve the folder over HTTP rather than opening the HTML file directly.

Theme: navy #10263F / orange #F28B25, Montserrat + Inter (see `css/site.css`). The home page mirrors https://polished-brand-mark.lovable.app; its images live in `assets/home/`.

Contact details (WhatsApp `212664779295`, `vianex.sarl@gmail.com`, phone `+212 664 779 295`, map pin in Gzenaya, Tanger) are set at the top of `js/site.js` and in `index.html`. The quote form opens the visitor's email app; it does not send through a backend.
