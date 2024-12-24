import { v4 } from "uuid";

const {
  EXPRESS_HOST,
  EXPRESS_PORT,
} = process.env;

const UUID = v4();

const EXPRESS_HOST_PARSED = EXPRESS_HOST || "localhost";

const EXPRESS_PORT_PARSED = parseInt(EXPRESS_PORT!, 10);

const CHECKER_HTTP = `http://${EXPRESS_HOST}:${EXPRESS_PORT}/health`;

export const ServiceConfig = {
  id: UUID,
  name: "express",
  host: EXPRESS_HOST_PARSED,
  port: EXPRESS_PORT_PARSED,
  checker: {
    name: "express-service-health",
    http: CHECKER_HTTP,
  },
};