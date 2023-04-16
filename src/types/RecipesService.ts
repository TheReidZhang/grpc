// Original file: protos/recipes.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ProductId as _ProductId, ProductId__Output as _ProductId__Output } from './ProductId';
import type { Recipe as _Recipe, Recipe__Output as _Recipe__Output } from './Recipe';

export interface RecipesServiceClient extends grpc.Client {
  Find(argument: _ProductId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  Find(argument: _ProductId, metadata: grpc.Metadata, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  Find(argument: _ProductId, options: grpc.CallOptions, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  Find(argument: _ProductId, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  find(argument: _ProductId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  find(argument: _ProductId, metadata: grpc.Metadata, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  find(argument: _ProductId, options: grpc.CallOptions, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  find(argument: _ProductId, callback: grpc.requestCallback<_Recipe__Output>): grpc.ClientUnaryCall;
  
}

export interface RecipesServiceHandlers extends grpc.UntypedServiceImplementation {
  Find: grpc.handleUnaryCall<_ProductId__Output, _Recipe>;
  
}

export interface RecipesServiceDefinition extends grpc.ServiceDefinition {
  Find: MethodDefinition<_ProductId, _Recipe, _ProductId__Output, _Recipe__Output>
}
