FROM mcr.microsoft.com/dotnet/sdk:8.0 AS builder
WORKDIR /builder

COPY gateway.csproj .

RUN dotnet restore

COPY . .

RUN dotnet publish -c Release -o /publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

RUN apt-get update && apt-get install -y curl

COPY --from=builder /publish .

EXPOSE 80

ENTRYPOINT [ "dotnet", "gateway.dll" ]