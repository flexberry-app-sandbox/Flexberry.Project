import { Serializer as CouponSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project-coupon';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CouponSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
