import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./types/recipes";
import { RecipesServiceHandlers } from "./types/RecipesService";

const packageDefinitionReci = protoLoader.loadSync(
  path.join(__dirname, "../protos/recipes.proto")
);

const recipesProto = grpc.loadPackageDefinition(
  packageDefinitionReci
) as unknown as ProtoGrpcType;

const recipesStub = new recipesProto.RecipesService(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure()
);

let productId = 1;
let orderId = 1;

console.log(`Searching a recipe for the product: ${productId}`);

recipesStub.Find({ id: productId }, (err, recipe) => {
  console.log("Found a recipe:");
  console.log(recipe);
  console.log(err)
  console.log("Processing...");
});
