namespace Gateway;

public static class Bootstrap
{
  public static void AddVitalServices(this IServiceCollection services)
  {
    services.AddSwaggerGen();
    services.AddControllers();
    services.AddEndpointsApiExplorer();
  }
}