const {
  CONSUL_HOST,
  CONSUL_PORT,
} = process.env;

const CONSUL_ADDRESS_PARSED = `http://${CONSUL_HOST}:${CONSUL_PORT}` || "http://consul:8500";

const CONSUL_PORT_PARSED = parseInt(CONSUL_PORT!, 10) || 8500;

export const ConsulConfig = {
  address: CONSUL_ADDRESS_PARSED,
  port: CONSUL_PORT_PARSED,
};