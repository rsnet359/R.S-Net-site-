// Minimal script: submit form via mailto link
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value || '');
  const contact = encodeURIComponent(f.contact.value || '');
  const address = encodeURIComponent(f.address.value || '');
  const message = encodeURIComponent(f.message.value || '');
  const subject = encodeURIComponent('Demande RS Net - ' + (name || contact));
  const body = encodeURIComponent('Nom: ' + (f.name.value || '') + '\nContact: ' + (f.contact.value || '') + '\nAdresse: ' + (f.address.value || '') + '\n\nMessage:\n' + (f.message.value || ''));
  const mailto = 'mailto:roots369@gmail.com?subject=' + subject + '&body=' + body;
  window.location.href = mailto;
});