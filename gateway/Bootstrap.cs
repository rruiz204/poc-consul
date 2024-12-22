using Ocelot.DependencyInjection;

namespace Gateway;

public static class Bootstrap
{
  public static void AddVitalServices(this IServiceCollection services)
  {
    services.AddOcelot();
    services.AddSwaggerGen();
    services.AddControllers();
    services.AddEndpointsApiExplorer();
  }
}