import inputListConfig from "./inputList.js";

function manipulateForm() {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = '';
    formContainer.style.display= "block";
    const form = document.createElement("form");
    const generateForm = document.getElementById("generate-form");
    generateForm.style.display = "none";
    form.setAttribute('id', 'form');
    form.classList.add('form');

    inputListConfig.forEach((item) => {
        const label = document.createElement('label');
        label.textContent = item.label;
        label.setAttribute('for', item.name);

        let input;
        if (item.type === "select") {
            input = document.createElement('select');
            item.options.forEach((element) => {
                const option = document.createElement('option');
                option.value = element.value;
                option.textContent = element.label;
                input.appendChild(option);
            });
        } else {
            input = document.createElement('input');
            input.setAttribute('type', item.type);
        }

        if (item.id) input.setAttribute('id', item.id);
        if (item.name) input.setAttribute('name', item.name);
        if (item.required) input.setAttribute('required', true);
        if (item.placeholder) input.setAttribute('placeholder', item.placeholder);
        if (item.value) input.setAttribute('value', item.value);
        if (item.checked) input.setAttribute('checked', item.checked);
        if (item.maxLength) input.setAttribute('maxlength', item.maxLength);
        if (item.minLength) input.setAttribute('minlength', item.minLength);
        if (item.pattern) input.setAttribute('pattern', item.pattern);
        if (item.min) input.setAttribute('min', item.min);
        if (item.max) input.setAttribute('max', item.max);

        input.setAttribute('id', item.name);
        form.appendChild(label);
        form.appendChild(input);
        
        form.appendChild(document.createElement('br'));
        form.appendChild(document.createElement('br'));
    });
    const submit = document.createElement('button');
        submit.textContent = "submit";
        submit.setAttribute('type',"submit");
        form.appendChild(submit);
    formContainer.appendChild(form);
}

const generateForm = document.getElementById("generate-form");
generateForm.addEventListener("click", manipulateForm);
