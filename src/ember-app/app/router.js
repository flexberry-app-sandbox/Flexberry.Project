import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-project-client-l');
  this.route('i-i-s-project-client-e',
  { path: 'i-i-s-project-client-e/:id' });
  this.route('i-i-s-project-client-e.new',
  { path: 'i-i-s-project-client-e/new' });
  this.route('i-i-s-project-coupon-l');
  this.route('i-i-s-project-coupon-e',
  { path: 'i-i-s-project-coupon-e/:id' });
  this.route('i-i-s-project-coupon-e.new',
  { path: 'i-i-s-project-coupon-e/new' });
  this.route('i-i-s-project-order-l');
  this.route('i-i-s-project-order-e',
  { path: 'i-i-s-project-order-e/:id' });
  this.route('i-i-s-project-order-e.new',
  { path: 'i-i-s-project-order-e/new' });
  this.route('i-i-s-project-product-l');
  this.route('i-i-s-project-product-e',
  { path: 'i-i-s-project-product-e/:id' });
  this.route('i-i-s-project-product-e.new',
  { path: 'i-i-s-project-product-e/new' });
});

export default Router;
