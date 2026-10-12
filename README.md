# agnieszkahoffmann.pl

Strona internetowa Pracowni fryzjerskiej Agnieszki Hoffmann (Kostrzyn).

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Podgląd: http://localhost:5173

## Publikacja

Strona jest hostowana na GitHub Pages. Każdy push do gałęzi `main` uruchamia
workflow `.github/workflows/deploy.yml`, który buduje stronę (`npm run build`)
i publikuje zawartość folderu `dist`. Postęp widać w zakładce **Actions**.

Domena `agnieszkahoffmann.pl` (AfterMarket.pl) wskazuje na GitHub Pages rekordami DNS:

| Typ   | Nazwa | Wartość                    |
|-------|-------|----------------------------|
| A     | @     | 185.199.108.153            |
| A     | @     | 185.199.109.153            |
| A     | @     | 185.199.110.153            |
| A     | @     | 185.199.111.153            |
| CNAME | www   | `<użytkownik>.github.io`   |

## Struktura

- `src/app/components/` – sekcje strony (`Modern*.tsx`), okno powiększania zdjęć (`Lightbox.tsx`)
  oraz dokumenty prawne w oknach (`PrivacyPolicyModal.tsx`, `TermsModal.tsx`)
- `src/styles/theme.css` – czcionki i kolory; `--font-heading` to czcionka nagłówków
  (docelowo The Seasons po wykupieniu licencji webowej)
- `src/imports/` – teksty źródłowe regulaminu, polityki prywatności i cennika
- `public/assets/` – logo, favicon i zdjęcia

## Zdjęcia

Zdjęcia przed dodaniem zmniejszamy – oryginały z aparatu ważą 6–15 MB:

```bash
sips -s format jpeg -s formatOptions 78 -Z 1600 oryginal.jpg --out public/assets/nazwa.jpg
```

- `portfolio/thumb/01–13.jpg` (800×1000) i `portfolio/full/01–13.jpg` (1280×1600) – sekcja „Nasze prace”
- `salon/01–15.jpg` (1000×1500) – pokaz zdjęć salonu w sekcji „O nas”
- `jubileusz/thumb/01–16.jpg` (wys. 680) i `jubileusz/full/01–16.jpg` – jubileusz 25-lecia
- `logo-dark.svg` / `logo-light.svg` – logo wektorowe (ciemne / jasne)
