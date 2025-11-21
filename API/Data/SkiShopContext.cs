using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class SkiShopContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }
}