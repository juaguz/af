import GraphQLClient from 'graphql-js-client'
import types from '../schema/types.js'
import {GRAPH_URL} from '../repositories/ApiConstant'
// import {getTokenFromCookie} from '~/utils/auth'
let client = null

export default ({ app, isServer, store, req }) => {
  // const token = getTokenFromCookie(req)
  client = new GraphQLClient(types, {
    url: GRAPH_URL,
    fetcherOptions: {
      // headers: `authorization: JWT ${token}`
    }

  })
}

export {
  client
}
