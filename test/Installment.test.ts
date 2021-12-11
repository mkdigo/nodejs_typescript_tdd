import Installment from '../src/Installment';
import Tax from '../src/Tax';

test('Deve criar uma parcela com MDR percetual e absoluto', function () {
  const tax = new Tax('credit_card', 1, 0.5);
  const installment = new Installment(1, 1000, tax);
  expect(installment.mdr).toBe(10.5);
});

test('Deve criar uma parcela sem MDR', function () {
  const tax = new Tax('credit_card', 0, 0);
  const installment = new Installment(1, 1000, tax);
  expect(installment.mdr).toBe(0);
});

test('Deve criar uma parcela com MDR percetual', function () {
  const tax = new Tax('credit_card', 1, 0);
  const installment = new Installment(1, 1000, tax);
  expect(installment.mdr).toBe(10);
});

test('Deve criar uma parcela com MDR absoluto', function () {
  const tax = new Tax('credit_card', 0, 0.5);
  const installment = new Installment(1, 1000, tax);
  expect(installment.mdr).toBe(0.5);
});
