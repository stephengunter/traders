using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations.RealTime
{
    public partial class _201901146 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Data");

            migrationBuilder.RenameColumn(
                name: "Param",
                table: "Data",
                newName: "QuoteId");

            migrationBuilder.CreateIndex(
                name: "IX_Data_QuoteId",
                table: "Data",
                column: "QuoteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Data_Quotes_QuoteId",
                table: "Data",
                column: "QuoteId",
                principalTable: "Quotes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Data_Quotes_QuoteId",
                table: "Data");

            migrationBuilder.DropIndex(
                name: "IX_Data_QuoteId",
                table: "Data");

            migrationBuilder.RenameColumn(
                name: "QuoteId",
                table: "Data",
                newName: "Param");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Data",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
