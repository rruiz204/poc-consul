import { RegisterService } from "./consul/register";
import { ServiceConfig } from "./config/service";

export const Bootstrap = async () => {
  console.log("Starting bootstrap process...");

  console.log(ServiceConfig);

  await RegisterService();

  console.log("Bootstrap process completed");
};