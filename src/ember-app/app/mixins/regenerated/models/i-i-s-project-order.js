import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  status: DS.attr('string'),
  client: DS.belongsTo('i-i-s-project-client', { inverse: null, async: false }),
  coupon: DS.belongsTo('i-i-s-project-coupon', { inverse: null, async: false }),
  orderProduct: DS.hasMany('i-i-s-project-order-product', { inverse: 'order', async: false })
});

export let ValidationRules = {
  status: {
    descriptionKey: 'models.i-i-s-project-order.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-project-order.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  coupon: {
    descriptionKey: 'models.i-i-s-project-order.validations.coupon.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  orderProduct: {
    descriptionKey: 'models.i-i-s-project-order.validations.orderProduct.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrderE', 'i-i-s-project-order', {
    status: attr('Статус', { index: 0 }),
    client: belongsTo('i-i-s-project-client', 'Клиент', {
      password: attr('Пароль', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'password' }),
    coupon: belongsTo('i-i-s-project-coupon', 'Купон', {
      productName: attr('Купон', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'productName' }),
    orderProduct: hasMany('i-i-s-project-order-product', 'Товарная позиция', {
      amount: attr('Количество', { index: 0 }),
      product: belongsTo('i-i-s-project-product', 'Товар', {
        name: attr('Товар', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('OrderL', 'i-i-s-project-order', {
    status: attr('Статус', { index: 0 }),
    client: belongsTo('i-i-s-project-client', 'Клиент', {
      password: attr('Клиент', { index: 1 })
    }, { index: -1, hidden: true }),
    coupon: belongsTo('i-i-s-project-coupon', 'Купон', {
      productName: attr('Купон', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
