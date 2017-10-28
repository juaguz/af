
const DjangoDebugSQL = {
  'name': 'DjangoDebugSQL',
  'kind': 'OBJECT',
  'fieldBaseTypes': {
    'vendor': 'String',
    'alias': 'String',
    'sql': 'String',
    'duration': 'Float',
    'rawSql': 'String',
    'params': 'String',
    'startTime': 'Float',
    'stopTime': 'Float',
    'isSlow': 'Boolean',
    'isSelect': 'Boolean',
    'transId': 'String',
    'transStatus': 'String',
    'isoLevel': 'String',
    'encoding': 'String'
  },
  'implementsNode': false
}
export default DjangoDebugSQL
