import { addRequestInterceptor, addResponseInterceptor } from "@/http/client";
import { requestWithAuth, handleAuthError } from "./auth";
import { snakeCaseRequest, camelCaseResponse } from "./base";

export default function initializeHttpInterceptors() {
  addRequestInterceptor({ request: requestWithAuth });
  addRequestInterceptor({ request: snakeCaseRequest });
  addResponseInterceptor({
    response: camelCaseResponse,
    error: handleAuthError,
  });
}
