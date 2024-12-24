using Ocelot.DependencyInjection;
using Ocelot.Provider.Consul;

namespace Gateway;

public static class Bootstrap
{
  public static void AddVitalServices(this IServiceCollection services)
  {
    services.AddSwaggerGen();
    services.AddControllers();
    services.AddOcelot().AddConsul();
    services.AddEndpointsApiExplorer();
  }
}