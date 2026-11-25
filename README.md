# Lajotech Indústria e Comércio 🏗️

Website oficial da **Lajotech Indústria e Comércio**, indústria especializada na fabricação e fornecimento de lajes treliçadas (EPS/isopor e lajota cerâmica), vigotas pré-moldadas, lajotas avulsas e ferragens para a construção civil, com sede em **Pindaí - BA**.

![Lajotech Logo](assets/images/logo.webp)

---

## 🚀 Destaques e Recursos do Site

1. **Identidade Visual Marcante e Moderna:**
   - Paleta de cores inspirada na logo oficial da Lajotech (Laranja Industrial `#FF5E14` e Azul Noturno Profundo `#0A131F` / `#13273D`).
   - Microinterações fluidas, cartões com profundidade 3D e tipografia técnica arrojada (`Plus Jakarta Sans`).

2. **Simulador de Orçamento Interativo de Lajes (Pulo do Gato):**
   - Permite que o cliente ou mestre de obras insira as dimensões do vão (comprimento e largura em metros) ou deslize os sliders interativos.
   - Alternância instantânea entre **Laje com EPS (Isopor)** e **Lajota Cerâmica**.
   - Cálculo automático em tempo real:
     - Área total em m²
     - Metros lineares de vigotas treliçadas recomendadas
     - Quantidade de placas de EPS ou lajotas cerâmicas
     - Volume de concreto para o capeamento (m³)
   - **Envio com 1 clique para o WhatsApp da Lajotech**: Formata uma mensagem completa com todas as especificações e quantidades calculadas para fechamento rápido de negócio!

3. **Comparador Visual: Lajota Cerâmica vs. Laje com EPS:**
   - Detalha as vantagens de cada método estrutural (alívio de peso de até 30% com EPS, isolamento térmico contra o calor da região e facilidade de reboco na cerâmica).

4. **Foco Regional em Pindaí e Cidades Vizinhas:**
   - Destaque para atendimento e frete facilitado em **Pindaí (Sede)**, **Guanambi**, **Urandi**, **Candiba**, **Sebastião Laranjeiras**, **Palmas de Monte Alto**, **Caculé**, etc.

5. **Pronto para Dispositivos Móveis (100% Responsivo):**
   - Menu hambúrguer intuitivo, botões táteis amplos e botão flutuante de WhatsApp com chamada para ação rápida.

---

## 📁 Estrutura de Arquivos

```
Lajo-teck/
├── index.html               # Página principal completa
├── assets/
│   ├── css/
│   │   └── style.css        # Folha de estilos e variáveis de cores
│   ├── js/
│   │   └── main.js          # Lógica da calculadora, FAQ e WhatsApp
│   └── images/
│       └── logo.webp        # Logomarca oficial da Lajotech
└── README.md                # Documentação do projeto
```

---

## ⚙️ Como Personalizar o Número do WhatsApp

Abra o arquivo `assets/js/main.js` e altere a constante na linha 14:

```javascript
const WHATSAPP_NUMBER = '5577999999999'; // Substitua pelo número real com DDD 77
```

Também é possível substituir as ocorrências no `index.html` caso queira links estáticos adicionais.

---

## 🌐 Publicação Online Gratuita (Deploy)

Este site foi construído em tecnologia padrão (HTML5, CSS3 moderno e Vanilla JavaScript), o que significa que ele pode ser hospedado instantaneamente e sem custos em qualquer plataforma:

- **GitHub Pages:** Ative nas configurações do repositório (`Settings` > `Pages` > Branch: `main` > `/root`).
- **Vercel / Netlify:** Basta conectar este repositório do GitHub e clicar em Deploy com zero configurações.
