import { NgModule } from "@angular/core";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClientOptions } from "apollo-client";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ApolloLink, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getOperationAST } from "graphql";

const uri = "http://localhost:8080/v1/graphql"; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem(environment.authTokenKey) || "";
    if (token) {
      operation.setContext({
        headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
      });
    }
    return forward(operation);
  });

  const http = httpLink.create({ uri });

  const ws = new WebSocketLink({
    uri: uri.replace("http", "ws"),
    options: {
      reconnect: true,
      connectionParams: () => {
        const token = localStorage.getItem(environment.authTokenKey) || "";
        if (token) {
          return {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
        }
      }
    }
  });

  return {
    connectToDevTools: true,
    link: split(
      operation => {
        const operationAST = getOperationAST(
          operation.query,
          operation.operationName
        );
        return !!operationAST && operationAST.operation === "subscription";
      },
      ws,
      authMiddleware.concat(http)
    ),
    cache: new InMemoryCache(),
    defaultOptions: {
      mutate: {
        errorPolicy: "all" // GraphQLErrors 在 data 还是视为 NetworkError 对待 还是忽略（不记录）
      }
    }
  };
}
// networkError         graphQLErrors
//        网络错误     graphql错误
//  all     o            x (in cache / data)
//  none    o            o
// ignore   o            x (none)

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
