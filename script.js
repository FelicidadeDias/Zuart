(() => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
    const select = document.getElementById('serviceSelect');
    const wanted = link.dataset.service;
    if (select && [...select.options].some(option => option.value === wanted || option.text === wanted)) {
      select.value = [...select.options].find(option => option.value === wanted || option.text === wanted).value;
    } else if (select && wanted === 'Serviços digitais') {
      select.value = 'Outro serviço';
    }
  }));

  document.getElementById('requestForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const service = form.elements.service.value;
    const details = form.elements.details.value.trim();
    const number = String(window.ZUARTE_CONFIG?.whatsappNumber || '').replace(/\D/g, '');
    if (!number || number === '244900000000') {
      alert('Antes de usar o formulário, configure o número verdadeiro do WhatsApp no ficheiro config.js.');
      return;
    }
    const message = [
      `Olá, ${window.ZUARTE_CONFIG?.businessName || 'Zuarte'}!`,
      `O meu nome é ${name}.`,
      `Tenho interesse no serviço: ${service}.`,
      details ? `Detalhes: ${details}` : '',
      'Podem informar-me sobre o preço, disponibilidade e prazo?'
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
