using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations.RealTime
{
    public partial class _2019012912 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Signal",
                table: "Data");

            migrationBuilder.AddColumn<string>(
                name: "Val",
                table: "Data",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Val",
                table: "Data");

            migrationBuilder.AddColumn<int>(
                name: "Signal",
                table: "Data",
                nullable: false,
                defaultValue: 0);
        }
    }
}
