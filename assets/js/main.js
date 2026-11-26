/**
 * LAJOTECH INDÚSTRIA E COMÉRCIO
 * Interatividade, Calculadora de Lajes, Locação de Andaimes & Betoneiras
 * WhatsApp Oficial: (77) 99113-1900
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCalculator();
  initFaqAccordion();
  initSmoothScroll();
});

/* ==========================================================================
   CONFIGURAÇÕES GERAIS (WHATSAPP OFICIAL DO LOGO)
   ========================================================================== */
const WHATSAPP_NUMBER = '5577991131900'; // Telefone Oficial: (77) 99113-1900 - Pindaí - BA

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
   2. SIMULADOR & CALCULADORA DE LAJE COM LOCAÇÃO DE EQUIPAMENTOS
   ========================================================================== */
function initCalculator() {
  const lengthInput = document.getElementById('calcLength');
  const lengthSlider = document.getElementById('sliderLength');
  const widthInput = document.getElementById('calcWidth');
  const widthSlider = document.getElementById('sliderWidth');
  const usageSelect = document.getElementById('calcUsage');
  const typeRadios = document.querySelectorAll('input[name="slabType"]');

  // Checkboxes de locação de equipamentos
  const checkBetoneira = document.getElementById('checkBetoneira');
  const checkAndaime = document.getElementById('checkAndaime');
  const checkEscora = document.getElementById('checkEscora');

  // Elementos de exibição de resultado
  const displayArea = document.getElementById('resArea');
  const displayVigotas = document.getElementById('resVigotas');
  const displayLajotas = document.getElementById('resLajotas');
  const displayLajotasLabel = document.getElementById('resLajotasLabel');
  const displayConcreto = document.getElementById('resConcreto');
  const displayPesoVantagem = document.getElementById('resVantagem');
  const displayEquipamentos = document.getElementById('resEquipamentos');
  const btnSendWhatsapp = document.getElementById('btnSendWhatsapp');

  if (!lengthInput || !widthInput) return;

  // Sincronização de inputs e sliders
  function syncInputs(input, slider) {
    if (!input || !slider) return;
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

  [checkBetoneira, checkAndaime, checkEscora].forEach(chk => {
    if (chk) chk.addEventListener('change', calculate);
  });

  function calculate() {
    const length = parseFloat(lengthInput.value) || 0;
    const width = parseFloat(widthInput.value) || 0;
    const selectedType = document.querySelector('input[name="slabType"]:checked')?.value || 'eps';
    const usage = usageSelect ? usageSelect.value : 'residencial';

    // 1. Área Total
    const area = length * width;

    // 2. Metros lineares de vigotas com treliças (~2.35m por m²)
    const vigotasMetroLinear = Math.round(area * 2.35);

    // 3. Lajotas ou placas de EPS
    let lajotasQtd = 0;
    let lajotaLabel = 'Blocos EPS';

    if (selectedType === 'ceramica') {
      lajotasQtd = Math.round(area * 10.5);
      lajotaLabel = 'Lajotas Cerâmicas';
      if (displayPesoVantagem) {
        displayPesoVantagem.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #0284C7;"></i> Alta inércia térmica e excelente ancoragem para reboco direto no teto.';
      }
    } else {
      lajotasQtd = Math.round(area * 2.5);
      lajotaLabel = 'Placas de EPS (Isopor)';
      if (displayPesoVantagem) {
        displayPesoVantagem.innerHTML = '<i class="fa-solid fa-feather" style="color: #10B981;"></i> <strong>Até 30% mais leve</strong> na estrutura + isolamento térmico superior!';
      }
    }

    // 4. Concreto de capeamento
    const taxaConcreto = selectedType === 'eps' ? 0.068 : 0.085;
    const concretoTotal = (area * taxaConcreto).toFixed(2);

    // 5. Equipamentos selecionados
    const equipamentos = [];
    if (checkBetoneira && checkBetoneira.checked) equipamentos.push('Betoneira 400L');
    if (checkAndaime && checkAndaime.checked) equipamentos.push('Torre de Andaimes');
    if (checkEscora && checkEscora.checked) equipamentos.push('Escoras Metálicas Reguláveis');

    // Atualiza a tela
    if (displayArea) displayArea.textContent = area.toFixed(1);
    if (displayVigotas) displayVigotas.textContent = `${vigotasMetroLinear} m`;
    if (displayLajotas) displayLajotas.textContent = `${lajotasQtd} un`;
    if (displayLajotasLabel) displayLajotasLabel.textContent = lajotaLabel;
    if (displayConcreto) displayConcreto.textContent = `${concretoTotal} m³`;

    if (displayEquipamentos) {
      if (equipamentos.length > 0) {
        displayEquipamentos.innerHTML = equipamentos.map(e => `<span class="equip-tag"><i class="fa-solid fa-circle-check"></i> ${e}</span>`).join(' ');
      } else {
        displayEquipamentos.innerHTML = '<span style="color: #64748B; font-size: 0.82rem;">Nenhum equipamento marcado</span>';
      }
    }

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
      concreto: concretoTotal,
      equipamentos
    });
  }

  function updateWhatsAppLink(data) {
    if (!btnSendWhatsapp) return;

    let equipamentosTexto = '';
    if (data.equipamentos && data.equipamentos.length > 0) {
      equipamentosTexto = `\n🛠️ *Locação de Equipamentos Inclusa:*\n` + data.equipamentos.map(eq => `• ${eq} (Aluguel para a obra)`).join('\n') + '\n';
    }

    const mensagem = 
`🏗️ *SOLICITAÇÃO DE ORÇAMENTO - LAJOTECH*
Olá! Fiz uma simulação pelo site da Lajotech e gostaria de uma cotação para minha obra em Pindaí/Região:

📐 *Dimensões da Laje:* ${data.length}m x ${data.width}m (${data.area} m²)
🧱 *Tipo de Laje:* ${data.selectedType}
🏢 *Finalidade:* ${data.usage}

📊 *Estimativa Calculada:*
• Vigotas Treliçadas: aprox. ${data.vigotas} metros lineares
• Preenchimento: aprox. ${data.lajotas} ${data.lajotaLabel}
• Concreto de Capa: aprox. ${data.concreto} m³
${equipamentosTexto}
Gostaria de saber valores, disponibilidade dos equipamentos e prazo de entrega em Pindaí!`;

    const encodedMessage = encodeURIComponent(mensagem);
    btnSendWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

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

      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

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
      if (targetId === '#' || targetId === '') return;

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
