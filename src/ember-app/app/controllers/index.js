import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.проект-одежда.caption'),
          title: i18n.t('forms.application.sitemap.проект-одежда.title'),
          children: [{
            link: 'i-i-s-project-product-l',
            caption: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-product-l.caption'),
            title: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-product-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-project-coupon-l',
            caption: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-coupon-l.caption'),
            title: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-coupon-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-project-client-l',
            caption: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-client-l.caption'),
            title: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-client-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-project-order-l',
            caption: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-order-l.caption'),
            title: i18n.t('forms.application.sitemap.проект-одежда.i-i-s-project-order-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})