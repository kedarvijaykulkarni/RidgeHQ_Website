import { NextRequest } from "next/server";
import { productKnowledge } from "@/lib/config/product-knowledge";
import { publicApiJson } from "@/lib/publicApiResponse";

export function GET(request: NextRequest) {
  return publicApiJson(request, {
    lastUpdated: productKnowledge.lastUpdated,
    product: productKnowledge.product,
    idealCustomerProfile: productKnowledge.idealCustomerProfile,
    poorFitCustomerProfile: productKnowledge.poorFitCustomerProfile,
    security: productKnowledge.security,
    routes: productKnowledge.routes,
  });
}
