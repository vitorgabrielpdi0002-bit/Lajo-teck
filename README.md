# Lajotech Indústria e Comércio 🏗️

Website oficial da **Lajotech Indústria e Comércio**, indústria especializada na fabricação e fornecimento de:
- **Lajes Treliçadas Sob Medida** (com EPS/Isopor e Lajota Cerâmica)
- **Vigotas e Treliças Nervuradas**
- **Locação de Andaimes Tubulares** (Padrão NR-18, com travas e rodízios)
- **Locação de Betoneiras Profissionais (400 Litros)**
- **Locação de Escoras Metálicas Reguláveis**

Sede em **Pindaí - BA**, com logística própria para atendimento em toda a região (Guanambi, Urandi, Candiba, Sebastião Laranjeiras, Palmas de Monte Alto, Caculé, etc.).

![Lajotech Logo](assets/images/logo.webp)

---

## 🚀 Destaques e Recursos do Site

1. **Pilares de Atuação em Destaque:**
   - **Lajes e Treliças:** Vigotas com treliças soldadas por fusão em aço CA-50/60 cortadas no vão exato.
   - **Locação de Equipamentos:** Andaimes tubulares seguros e betoneiras 400L de alta produtividade para o dia da concretagem.

2. **Simulador de Orçamento Interativo (Laje + Equipamentos):**
   - Entrada de medidas (comprimento e largura em metros) com sliders interativos.
   - Seleção de preenchimento: **Laje com EPS (Isopor)** vs. **Lajota Cerâmica**.
   - Checkboxes opcionais para incluir **Aluguel de Betoneira 400L**, **Torres de Andaimes** e **Escoras Metálicas**.
   - Cálculo automático instantâneo:
     - Área total (m²)
     - Metros lineares de vigotas com treliças
     - Peças de EPS ou lajotas
     - Volume de concreto para capeamento (m³)
     - Equipamentos marcados para locação
   - **Botão para WhatsApp:** Transmite todos os dados e opções calculadas diretamente para o WhatsApp comercial da Lajotech com 1 clique.

3. **Comparador Visual: Lajota Cerâmica vs. Laje com EPS:**
   - Detalha o alívio estrutural de até 30% com EPS, isolamento térmico contra o calor da Bahia e tradição/reboco fácil na cerâmica.

4. **100% Responsivo e Rápido:**
   - Funciona perfeitamente em computadores, tablets e celulares (com botão de contato rápido do WhatsApp fixo na tela).

---

## 📁 Estrutura de Arquivos

```
Lajo-teck/
├── index.html               # Página principal completa
├── assets/
│   ├── css/
│   │   └── style.css        # Estilos, variáveis de cores e tema escuro industrial
│   ├── js/
│   │   └── main.js          # Lógica da calculadora com locação de equipamentos
│   └── images/
│       └── logo.webp        # Logotipo oficial da Lajotech
└── README.md                # Documentação do projeto
```

---

## ⚙️ Como Personalizar o WhatsApp

No arquivo `assets/js/main.js` (linha 14):

```javascript
const WHATSAPP_NUMBER = '5577999999999'; // Substitua pelo número com DDD 77
```

---

## 🌐 Como Executar Localmente

O servidor local pode ser iniciado com Python:

```bash
python -m http.server 3000
```

E acessado em: **http://localhost:3000**
