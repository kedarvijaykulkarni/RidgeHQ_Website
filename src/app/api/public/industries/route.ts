import { NextRequest } from "next/server";
import { productKnowledge } from "@/lib/config/product-knowledge";
import { publicApiJson } from "@/lib/publicApiResponse";

export function GET(request: NextRequest) {
  return publicApiJson(request, {
    lastUpdated: productKnowledge.lastUpdated,
    industries: productKnowledge.industries,
  });
}
