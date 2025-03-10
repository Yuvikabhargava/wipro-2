using Microsoft.EntityFrameworkCore;
using CustomerApp.Data;

var builder = WebApplication.CreateBuilder(args);

// Configure database
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddRazorPages();

var app = builder.Build();

app.UseRouting();
app.UseAuthorization();
app.MapRazorPages();
app.Run();
