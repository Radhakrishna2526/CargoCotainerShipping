using Infrastructure.Persistence;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Core.Interfaces;
using Application.Services;
using Microsoft.AspNetCore.Authentication;

var builder = WebApplication.CreateBuilder(args);




builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add DbContext
builder.Services.AddDbContext<ShippingDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConection"),
    b => b.MigrationsAssembly("Infrastructure"))
);

builder.Services.AddScoped<IContainerRepository, ContainerRepository>();
builder.Services.AddScoped<ContainerService>();

builder.Services.AddScoped<IBookingRepository, BookingRepository>();
builder.Services.AddScoped<BookingService>();

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<UserService>();

builder.Services.AddScoped<IPortRepository, PortRepository>();
builder.Services.AddScoped<PortRepository>();
builder.Services.AddScoped<IEmailNotificationRepository, EmailNotificationRepositories>();


builder.Services.AddControllers();

builder.Services.AddAuthentication("Basic")
    .AddScheme<AuthenticationSchemeOptions,BasicAuthenticationHandler>("Basic", null); // Make sure you create BasicAuthenticationHandler

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin"));
});

var app = builder.Build();

// Enable CORS globally
app.UseCors("AllowAllOrigins");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication(); // Make sure this is added before UseAuthorization
app.UseAuthorization();


app.MapControllers();

app.Run();
