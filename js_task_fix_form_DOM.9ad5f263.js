"use strict";var inputs=document.querySelectorAll("form .field-text");inputs.forEach(function(e){var t=document.createElement("label");t.className="field-label",t.setAttribute("for",e.id),t.textContent=e.name;var r=e.name,l=r.slice(0,1).toUpperCase()+r.slice(1);e.setAttribute("placeholder",l),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=js_task_fix_form_DOM.9ad5f263.js.map
