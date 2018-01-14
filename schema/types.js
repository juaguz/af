
import Query from './types/query'
import FormualriosType from './types/formualrios-type'
import Node from './types/node'
import ID from './types/id'
import String from './types/string'
import FormualriosTypeConnection from './types/formualrios-type-connection'
import PageInfo from './types/page-info'
import Boolean from './types/boolean'
import FormualriosTypeEdge from './types/formualrios-type-edge'
import Int from './types/int'
import ClienteDeudorType from './types/cliente-deudor-type'
import Float from './types/float'
import DateTime from './types/date-time'
import ClienteDeudorTypeConnection from './types/cliente-deudor-type-connection'
import ClienteDeudorTypeEdge from './types/cliente-deudor-type-edge'
import DjangoDebug from './types/django-debug'
import DjangoDebugSQL from './types/django-debug-sql'
import __Schema from './types/schema'
import __Type from './types/type'
import __TypeKind from './types/type-kind'
import __Field from './types/field'
import __InputValue from './types/input-value'
import __EnumValue from './types/enum-value'
import __Directive from './types/directive'
import __DirectiveLocation from './types/directive-location'
const Types = {
  types: {}
}
Types.types['Query'] = Query
Types.types['FormualriosType'] = FormualriosType
Types.types['Node'] = Node
Types.types['ID'] = ID
Types.types['String'] = String
Types.types['FormualriosTypeConnection'] = FormualriosTypeConnection
Types.types['PageInfo'] = PageInfo
Types.types['Boolean'] = Boolean
Types.types['FormualriosTypeEdge'] = FormualriosTypeEdge
Types.types['Int'] = Int
Types.types['ClienteDeudorType'] = ClienteDeudorType
Types.types['Float'] = Float
Types.types['DateTime'] = DateTime
Types.types['ClienteDeudorTypeConnection'] = ClienteDeudorTypeConnection
Types.types['ClienteDeudorTypeEdge'] = ClienteDeudorTypeEdge
Types.types['DjangoDebug'] = DjangoDebug
Types.types['DjangoDebugSQL'] = DjangoDebugSQL
Types.types['__Schema'] = __Schema
Types.types['__Type'] = __Type
Types.types['__TypeKind'] = __TypeKind
Types.types['__Field'] = __Field
Types.types['__InputValue'] = __InputValue
Types.types['__EnumValue'] = __EnumValue
Types.types['__Directive'] = __Directive
Types.types['__DirectiveLocation'] = __DirectiveLocation
Types.queryType = 'Query'
Types.mutationType = null
Types.subscriptionType = null

function recursivelyFreezeObject (structure) {
  Object.getOwnPropertyNames(structure).forEach(key => {
    const value = structure[key]
    if (value && typeof value === 'object') {
      recursivelyFreezeObject(value)
    }
  })
  Object.freeze(structure)
  return structure
}

export default recursivelyFreezeObject(Types)
