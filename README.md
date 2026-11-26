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

## 📁 Estrutura de Páginas do Site

1. **`index.html` (Landing Page Principal):**
   - Apresentação visual da fábrica e dos diferenciais de Pindaí.
   - Catálogo de Lajes Treliçadas e Treliças sob medida.
   - Seção dedicada para **Locação de Andaimes Tubulares** e **Betoneiras 400L**.
   - Comparador visual entre **Lajota Cerâmica** e **Laje EPS (Isopor)**.
   - Chamadas estratégicas direcionando para a calculadora dedicada.
   - FAQ de dúvidas frequentes e rodapé institucional.

2. **`calcular.html` (Página Dedicada da Calculadora de Lajes & Locação):**
   - Entrada de dimensões (comprimento e largura em metros) com sliders interativos.
   - Seleção do tipo de preenchimento: EPS (Isopor) ou Lajota Cerâmica.
   - Seleção de equipamentos opcionais para a concretagem:
     - Betoneira 400L
     - Andaimes Tubulares
     - Escoras Metálicas Reguláveis
   - Cálculo automático em tempo real (área, vigotas, preenchimento, concreto).
   - Dicas técnicas de montagem, escoramento e cura do concreto.
   - Botão direto para WhatsApp com mensagem detalhada pré-preenchida.

---

## 📁 Estrutura de Arquivos

```
Lajo-teck/
├── index.html               # Página principal (Landing Page)
├── calcular.html            # Página dedicada da Calculadora de Lajes
├── assets/
│   ├── css/
│   │   └── style.css        # Estilos, variáveis de cores e tema escuro industrial
│   ├── js/
│   │   └── main.js          # Lógica da calculadora e integração com WhatsApp
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

O servidor local pode ser executado com Python:

```bash
python -m http.server 3000
```

E acessado em:
- Página inicial: **http://localhost:3000**
- Calculadora: **http://localhost:3000/calcular.html**
