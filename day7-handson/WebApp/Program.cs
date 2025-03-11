var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

/*app.Use(async (context, next) =>
{
    // Middleware to terminate when URL contains "/end"
    if (context.Request.Path == "/end")
    {
        await context.Response.WriteAsync("Request Terminated!");
        return; // Stops further processing
    }
    await next(); // Move to the next middleware
});

app.Use(async (context, next) =>
{
    // Middleware that displays "Hello" when URL contains "/hello"
    if (context.Request.Path == "/hello")
    {
        await context.Response.WriteAsync("Hello! ");
    }
    await next(); // Move to the next middleware
});

app.Use(async (context, next) =>
{
    // Middleware to display "Hello1 Hello2"
    await context.Response.WriteAsync("Hello1 Hello2 ");
    await next(); // Move to the next middleware
});

app.Run(async (context) =>
{
    await context.Response.WriteAsync("Final Middleware Execution!");
});*/


app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=First}/{action=Index1}/{id?}");

app.Run();
