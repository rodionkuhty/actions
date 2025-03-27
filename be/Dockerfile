FROM mcr.microsoft.com/dotnet/sdk:9.0 AS base

WORKDIR /app

EXPOSE 8080

COPY *.csproj ./

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src
COPY ["BasicDotNetApp.csproj", "./"]
RUN dotnet restore "BasicDotNetApp.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "BasicDotNetApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BasicDotNetApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BasicDotNetApp.dll"]