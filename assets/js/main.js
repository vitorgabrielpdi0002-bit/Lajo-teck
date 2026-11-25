/**
 * LAJOTECH INDÚSTRIA E COMÉRCIO
 * Interatividade, Calculadora de Lajes e Integração com WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCalculator();
  initFaqAccordion();
  initSmoothScroll();
});

/* ==========================================================================
   CONFIGURAÇÕES GERAIS (WHATSAPP E CONTATO)
   ========================================================================== */
// Número de WhatsApp oficial (substituível conforme necessidade)
const WHATSAPP_NUMBER = '5577999999999'; // Telefone padrão com DDD (77 - Região de Guanambi/Pindaí - BA)

/* ==========================================================================
   1. MENU MOBILE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = toggleBtn.querySelector('i');
    if (navLinks.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Fecha menu ao clicar em links
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });
}

/* ==========================================================================
   2. SIMULADOR & CALCULADORA DE LAJE
   ========================================================================== */
function initCalculator() {
  const lengthInput = document.getElementById('calcLength');
  const lengthSlider = document.getElementById('sliderLength');
  const widthInput = document.getElementById('calcWidth');
  const widthSlider = document.getElementById('sliderWidth');
  const usageSelect = document.getElementById('calcUsage');
  const typeRadios = document.querySelectorAll('input[name="slabType"]');

  // Elementos de exibição de resultado
  const displayArea = document.getElementById('resArea');
  const displayVigotas = document.getElementById('resVigotas');
  const displayLajotas = document.getElementById('resLajotas');
  const displayLajotasLabel = document.getElementById('resLajotasLabel');
  const displayConcreto = document.getElementById('resConcreto');
  const displayPesoVantagem = document.getElementById('resVantagem');
  const btnSendWhatsapp = document.getElementById('btnSendWhatsapp');

  if (!lengthInput || !widthInput) return;

  // Sincronização de inputs e sliders
  function syncInputs(input, slider) {
    input.addEventListener('input', () => {
      slider.value = input.value;
      calculate();
    });
    slider.addEventListener('input', () => {
      input.value = slider.value;
      calculate();
    });
  }

  syncInputs(lengthInput, lengthSlider);
  syncInputs(widthInput, widthSlider);

  if (usageSelect) {
    usageSelect.addEventListener('change', calculate);
  }

  typeRadios.forEach(radio => {
    radio.addEventListener('change', calculate);
  });

  // Função central de cálculo
  function calculate() {
    const length = parseFloat(lengthInput.value) || 0;
    const width = parseFloat(widthInput.value) || 0;
    const selectedType = document.querySelector('input[name="slabType"]:checked')?.value || 'eps';
    const usage = usageSelect ? usageSelect.value : 'residencial';

    // 1. Área Total
    const area = length * width;

    // 2. Metros lineares de vigotas (espaçamento padrão ~42cm a 45cm entre eixos vigota+lajota)
    // Em média 2.4 metros lineares de vigota por m²
    const vigotasMetroLinear = Math.round(area * 2.35);

    // 3. Lajotas ou placas de EPS
    // Lajota cerâmica padrão: ~10 a 11 peças por m²
    // EPS (placa 1m x 0.33m / 0.40m): ~2.5 a 3 placas ou blocos recortados
    let lajotasQtd = 0;
    let lajotaLabel = 'Blocos EPS';

    if (selectedType === 'ceramica') {
      lajotasQtd = Math.round(area * 10.5);
      lajotaLabel = 'Lajotas Cerâmicas';
      if (displayPesoVantagem) {
        displayPesoVantagem.innerHTML = '<i class="fa-solid fa-fire text-amber-500"></i> Alta inércia térmica e excelente ancoragem de reboco.';
      }
    } else {
      // EPS
      lajotasQtd = Math.round(area * 2.5); // Placas de EPS padrão laje
      lajotaLabel = 'Placas de EPS (Isopor)';
      if (displayPesoVantagem) {
        displayPesoVantagem.innerHTML = '<i class="fa-solid fa-feather text-emerald-400"></i> <strong>Até 30% mais leve</strong> na estrutura + isolamento térmico superior!';
      }
    }

    // 4. Volume de concreto de capeamento (em m³)
    // Espessura média de capa: 5cm para forro/residencial, 6-7cm para garagem/comercial
    let capaMetros = 0.05;
    if (usage === 'garagem' || usage === 'comercial') {
      capaMetros = 0.07;
    }
    // Concreto de capeamento preenche nervura + capa (~0.065 m³ por m² em EPS, ~0.08 m³ em cerâmica)
    const taxaConcreto = selectedType === 'eps' ? 0.068 : 0.085;
    const concretoTotal = (area * taxaConcreto).toFixed(2);

    // Atualiza a tela
    displayArea.textContent = area.toFixed(1);
    displayVigotas.textContent = `${vigotasMetroLinear} m`;
    displayLajotas.textContent = `${lajotasQtd} un`;
    if (displayLajotasLabel) displayLajotasLabel.textContent = lajotaLabel;
    displayConcreto.textContent = `${concretoTotal} m³`;

    // Atualiza link do WhatsApp
    updateWhatsAppLink({
      length,
      width,
      area: area.toFixed(1),
      selectedType: selectedType === 'eps' ? 'Laje Treliçada com EPS (Isopor)' : 'Laje Treliçada com Lajota Cerâmica',
      usage: usageSelect ? usageSelect.options[usageSelect.selectedIndex].text : 'Residencial',
      vigotas: vigotasMetroLinear,
      lajotas: lajotasQtd,
      lajotaLabel,
      concreto: concretoTotal
    });
  }

  function updateWhatsAppLink(data) {
    if (!btnSendWhatsapp) return;

    const mensagem = 
`🏗️ *SOLICITAÇÃO DE ORÇAMENTO - LAJOTECH*
Olá! Fiz uma simulação pelo site e gostaria de um orçamento para minha obra em Pindaí/Região:

📐 *Dimensões da Laje:* ${data.length}m x ${data.width}m (${data.area} m²)
🧱 *Tipo de Laje:* ${data.selectedType}
🏢 *Finalidade:* ${data.usage}

📊 *Estimativa Calculada:*
• Vigotas Treliçadas: aprox. ${data.vigotas} metros lineares
• Preenchimento: aprox. ${data.lajotas} ${data.lajotaLabel}
• Concreto de Capa: aprox. ${data.concreto} m³

Gostaria de saber valores, formas de pagamento e prazo de entrega na minha cidade!`;

    const encodedMessage = encodeURIComponent(mensagem);
    btnSendWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  // Executa cálculo inicial com valores padrão
  calculate();
}

/* ==========================================================================
   3. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Se não estava ativo, abre o clicado
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Deixa o primeiro FAQ aberto por padrão
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
    const firstAnswer = faqItems[0].querySelector('.faq-answer');
    if (firstAnswer) {
      firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
    }
  }
}

/* ==========================================================================
   4. SCROLL SUAVE & LINKS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
