using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations
{
    public partial class _201902026 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "IndicatorSettings");

            migrationBuilder.DropColumn(
                name: "LastUpdated",
                table: "IndicatorSettings");

            migrationBuilder.DropColumn(
                name: "Order",
                table: "IndicatorSettings");

            migrationBuilder.DropColumn(
                name: "Removed",
                table: "IndicatorSettings");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "IndicatorSettings");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "IndicatorSettings",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdated",
                table: "IndicatorSettings",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "IndicatorSettings",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Removed",
                table: "IndicatorSettings",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "IndicatorSettings",
                nullable: true);
        }
    }
}
