import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RecipesServiceClient as _RecipesServiceClient, RecipesServiceDefinition as _RecipesServiceDefinition } from './RecipesService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ProductId: MessageTypeDefinition
  Recipe: MessageTypeDefinition
  RecipesService: SubtypeConstructor<typeof grpc.Client, _RecipesServiceClient> & { service: _RecipesServiceDefinition }
}

