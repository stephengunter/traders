using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations.RealTime
{
    public partial class editdatamodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IndicatorId",
                table: "Data");

            migrationBuilder.AddColumn<string>(
                name: "Indicator",
                table: "Data",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Indicator",
                table: "Data");

            migrationBuilder.AddColumn<int>(
                name: "IndicatorId",
                table: "Data",
                nullable: false,
                defaultValue: 0);
        }
    }
}
