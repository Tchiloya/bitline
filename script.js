(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('bitline-theme');
  if (storedTheme === 'light' || storedTheme === 'dark') root.dataset.theme = storedTheme;
  const updateThemeLabel = () => {
    const light = root.dataset.theme === 'light';
    themeButton.setAttribute('aria-label', light ? 'Mudar para tema escuro' : 'Mudar para tema claro');
    themeButton.innerHTML = light ? '<span aria-hidden="true">☾</span>' : '<span aria-hidden="true">☼</span>';
    document.querySelector('meta[name="theme-color"]').content = light ? '#f4f8fc' : '#080d16';
  };
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('bitline-theme', root.dataset.theme);
    updateThemeLabel();
  });

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));

  document.getElementById('year').textContent = new Date().getFullYear();
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Pedido de contacto — ${data.get('service')}`);
    const body = encodeURIComponent(`Nome: ${data.get('name')}\nE-mail: ${data.get('email')}\nServiço: ${data.get('service')}\n\nMensagem:\n${data.get('message')}`);
    note.textContent = 'A abrir o teu programa de e-mail com a mensagem preparada. Se não abrir, escreve para bitlineangola@outlook.com.';
    window.location.href = `mailto:bitlineangola@outlook.com?subject=${subject}&body=${body}`;
  });
})();
