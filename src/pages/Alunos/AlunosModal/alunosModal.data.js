import { clearPhone } from '~/components/InputWrapper/PhoneInputMask/phoneInputMask.data';
import { ALUNO_SHEMA } from '~/utils/schema';

const placeholder = {
  name: 'ex.: João da Silva',
  email: 'ex.: aluno@envia.io',
  birthDate: 'ex.: 12/12/2012',
  phone: 'ex.: (11) 9555-5533',
  responsible: 'ex.: Antônio Silva',
  responsible_email: 'ex.: responsavel@responsavel.com',
  responsible_phone: 'ex.: (11) 9555-5533',
  // turmas: [1, 2, 3],
};

const schema = ALUNO_SHEMA;

function verifyAndAdd(ids = [], reference = {}) {
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      if (/phone/.test(id)) element.value = clearPhone(element.value);

      reference[id] = element.value;
    }
  });
}

function verifyAndUpdate(ids = [], reference = {}) {
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element && reference) {
      element.value = reference[id];
    }
  });
}

export { schema, placeholder, verifyAndAdd, verifyAndUpdate };
