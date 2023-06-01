import { Serializer as OrderSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project-order';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OrderSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
