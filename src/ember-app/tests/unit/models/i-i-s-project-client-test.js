import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-project-client', 'Unit | Model | i-i-s-project-client', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-project-client',
    'model:i-i-s-project-coupon',
    'model:i-i-s-project-order-product',
    'model:i-i-s-project-order',
    'model:i-i-s-project-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
