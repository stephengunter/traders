using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations.RealTime
{
    public partial class editQuote : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BC",
                table: "Quotes");

            migrationBuilder.RenameColumn(
                name: "Vol",
                table: "Quotes",
                newName: "Open");

            migrationBuilder.RenameColumn(
                name: "SC",
                table: "Quotes",
                newName: "Low");

            migrationBuilder.RenameColumn(
                name: "FiftyBig",
                table: "Quotes",
                newName: "High");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Open",
                table: "Quotes",
                newName: "Vol");

            migrationBuilder.RenameColumn(
                name: "Low",
                table: "Quotes",
                newName: "SC");

            migrationBuilder.RenameColumn(
                name: "High",
                table: "Quotes",
                newName: "FiftyBig");

            migrationBuilder.AddColumn<int>(
                name: "BC",
                table: "Quotes",
                nullable: false,
                defaultValue: 0);
        }
    }
}
