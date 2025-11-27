// small demo behaviour: toggle show password & form submit
document.addEventListener('DOMContentLoaded', () => {
  const pw = document.getElementById('password');
  const toggle = document.getElementById('togglePw');
  toggle.addEventListener('click', () => {
    pw.type = pw.type === 'password' ? 'text' : 'password';
    toggle.textContent = pw.type === 'password' ? 'Show' : 'Hide';
  });

  const form = document.getElementById('authForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    alert(`Demo sign in\nEmail: ${email}\n(This is a demo — no data stored)`);
  });

  document.getElementById('signup').addEventListener('click', () => {
    alert('Demo sign up - implement real sign up in backend.');
  });
});
