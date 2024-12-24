import { ConsulConfig } from "../config/consul";
import { ServiceConfig } from "../config/service";

const URL = `${ConsulConfig.address}/v1/agent/service/register`;

const payload = {
  ID: ServiceConfig.id,
  Name: ServiceConfig.name,
  Address: ServiceConfig.host,
  Port: ServiceConfig.port,
  Check: {
    Name: ServiceConfig.checker.name,
    HTTP: ServiceConfig.checker.http,
    Interval: "10s",
    Timeout: "5s",
  },
};

export const RegisterService = async () => {
  const response = await fetch(URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) console.log("Service registered!!!");
};