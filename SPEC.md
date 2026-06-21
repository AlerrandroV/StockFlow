# 📋 MANUAL DO PROJETO — StockFlow

**Documento de Especificação Técnica Completa**  
**Versão:** 1.0 | **Data:** Junho 2026  
**Repositório:** github.com/AlerrandroV/stockflow  
**Desenvolvedor:** AlerrandroV

---

## 1. VISÃO GERAL

**StockFlow** é uma Progressive Web App (PWA) de gerenciamento de vendas, estoque e finanças voltada para pequenos comerciantes de roupas, calçados e eletrônicos. O sistema roda 100% no navegador, sem servidor próprio, usando Firebase como backend.

**Objetivo principal:** Permitir que um único usuário registre compras, vendas, gerencie estoque com variações, acompanhe parcelas a receber e visualize a saúde financeira do negócio em tempo real.

---

## 2. STACK TECNOLÓGICA

- **UI Framework:** @material/web v2.x (Material Design 3)
- **Linguagens:** HTML5, CSS3, JavaScript ES2022 (ESModules, sem bundler)
- **Auth:** Firebase Authentication (Email/Senha + Google OAuth)
- **Database:** Cloud Firestore (NoSQL, realtime)
- **Storage:** Firebase Storage
- **Gráficos:** ApexCharts v3 (CDN)
- **Código de Barras:** ZXing-js (@zxing/browser via CDN ESM)
- **PDF/Recibo:** window.print() com CSS @media print
- **Exportação:** PapaParse v5 (CDN)
- **PWA:** manifest.json + Service Worker manual
- **Hospedagem:** GitHub Pages

---

## 3. REGRAS DE NEGÓCIO CRÍTICAS

1. Estoque nunca negativo
2. Lucro calculado no momento da venda
3. Desnormalização de nomes
4. Status de venda derivado das parcelas
5. Atualização de estoque em transação Firestore
6. Alerta de estoque mínimo

---

Ver documento completo para especificações detalhadas de cada módulo.
