// import { toSnakeCaseObject, toCamelCaseObject } from "@/utils/common";

export function snakeCaseRequest(config) {
  return {
    ...config,
    data: config.data instanceof FormData ? config.data : config.data,
    params: config.params,
  };
}

export function camelCaseResponse(response) {
  return (response && response.data ? response.data : response) || {};
}
