const tabs = [
  'scrollspy',
  'accordion-collapse',
  'alert',
  'badge',
  'border-shadow',
  'breadcrumb',
  'breakpoint',
  'button',
  'card',
  'carousel',
  'color',
  'container',
  'display-position',
  'dropdown',
  'flexbox',
  'forms',
  'grid-column',
  'image',
  'list-group',
  'modal',
  'nav-tab',
  'navbar',
  'offcanvas',
  'pagination',
  'placeholder',
  'popover-tooltip',
  'progress-bar',
  'size-spacing',
  'spinner',
  'table',
  'toast',
  'typography',
  'utilities',
];

(() => {
  const template = document.getElementById('tab-template');
  if (!template) return;

  const tabListElement = document.getElementById('pills-tab');
  if (!tabListElement) return;

  for (let tab of tabs) {
    const tabElement = template.content.firstElementChild.cloneNode(true);
    const button = tabElement.querySelector('.nav-link');
    button.id = `nav-${tab}`;
    button.textContent = tab
      .split('-')
      .map((t) => t.toUpperCase())
      .join(' & ');
    button.setAttribute('data-bs-target', `#${tab}`);

    tabListElement.appendChild(tabElement);
  }
  tabListElement.firstChild.querySelector('.nav-link').classList.add('active');
})();

// Validate form
const form = document.querySelector('.form-validation');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
  } else {
    const formData = new FormData(form);

    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });

    // form.submit();
  }
});

// Initialize tooltips and popovers
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

// Toast
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const toast1 = document.querySelector('#toast1');
const toast2 = document.querySelector('#toast2');
const toast3 = document.querySelector('#toast3');

const btnStack = document.querySelector('#btnStack');
const toastStack = document.querySelector('.toastStack');

const toast1Bootstrap = bootstrap.Toast.getOrCreateInstance(toast1);
btn1.addEventListener('click', () => toast1Bootstrap.show());
const toast2Bootstrap = bootstrap.Toast.getOrCreateInstance(toast2);
btn2.addEventListener('click', () => toast2Bootstrap.show());
const toast3Bootstrap = bootstrap.Toast.getOrCreateInstance(toast3);
btn3.addEventListener('click', () => toast3Bootstrap.show());

btnStack.addEventListener('click', function () {
  const toastElements = toastStack.querySelectorAll('.toast');
  toastElements.forEach((toastEl) => {
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  });
});

// Scroll to top
let scrollTop = document.getElementById('scrollTop');

// Scroll to top when clicked
scrollTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
