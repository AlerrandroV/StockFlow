# 📦 StockFlow

> PWA de gerenciamento de vendas, estoque e finanças para pequenos comerciantes de roupas, calçados e eletrônicos.

## 🚀 Tecnologias

- **UI:** @material/web v2.x (Material Design 3)
- **Backend:** Firebase (Auth + Firestore + Storage)
- **Linguagens:** HTML5, CSS3, JavaScript ES2022 (sem bundler)
- **Gráficos:** ApexCharts v3
- **PWA:** manifest.json + Service Worker manual
- **Hospedagem:** GitHub Pages

## 📋 Funcionalidades

- ✅ Dashboard com KPIs e gráficos
- ✅ Gestão de Produtos com variações (tamanho, cor)
- ✅ Registro de Compras (entradas de estoque)
- ✅ Registro de Vendas com parcelamento
- ✅ Geração de Recibo (impressão / PDF)
- ✅ CRM de Clientes e Fornecedores
- ✅ Relatórios e exportação CSV
- ✅ Contas a Receber
- ✅ Leitor de código de barras via câmera (ZXing)
- ✅ Modo offline (Firestore cache)

## ⚙️ Configuração

1. Clone o repositório
2. Copie `firebase-config.template.js` para `firebase-config.js`
3. Preencha as credenciais do seu projeto Firebase
4. Abra `index.html` no navegador ou sirva via GitHub Pages

> ⚠️ **Nunca versione o `firebase-config.js`** — ele está no `.gitignore`

## 📁 Estrutura

```
stockflow/
├── index.html
├── manifest.json
├── sw.js
├── firebase-config.template.js
├── firebase-config.js        ← NÃO versionado
├── .gitignore
├── README.md
├── SPEC.md
├── css/
│   ├── app.css
│   ├── components.css
│   └── print.css
└── js/
    ├── app.js
    ├── firebase.js
    ├── auth.js
    ├── modules/
    │   ├── dashboard.js
    │   ├── products.js
    │   ├── purchases.js
    │   ├── sales.js
    │   ├── customers.js
    │   ├── suppliers.js
    │   ├── reports.js
    │   ├── barcode.js
    │   └── receipt.js
    └── utils/
        ├── csv.js
        ├── charts.js
        ├── currency.js
        ├── validators.js
        └── alerts.js
```

## 🌐 Deploy

Acesse em: [https://AlerrandroV.github.io/stockflow/](https://AlerrandroV.github.io/stockflow/)

---

**Desenvolvido por [AlerrandroV](https://github.com/AlerrandroV)**
