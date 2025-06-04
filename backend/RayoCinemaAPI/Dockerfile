# Usar imagen oficial de .NET SDK para build
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

# Copiar archivos del proyecto
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore "./RayoCinemaAPI.csproj"
RUN dotnet publish "./RayoCinemaAPI.csproj" -c Release -o /app/publish

# Imagen final
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RayoCinemaAPI.dll"]
