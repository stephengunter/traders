using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations
{
    public partial class _2019012912 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "WithAvg",
                table: "Indicators",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WithAvg",
                table: "Indicators");
        }
    }
}
