using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations.RealTime
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Data",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IndicatorId = table.Column<int>(nullable: false),
                    Param = table.Column<int>(nullable: false),
                    Date = table.Column<int>(nullable: false),
                    Time = table.Column<int>(nullable: false),
                    Text = table.Column<string>(nullable: true),
                    Signal = table.Column<int>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Data", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Quotes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<int>(nullable: false),
                    Time = table.Column<int>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    Vol = table.Column<int>(nullable: false),
                    BC = table.Column<int>(nullable: false),
                    SC = table.Column<int>(nullable: false),
                    FiftyBig = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quotes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Data");

            migrationBuilder.DropTable(
                name: "Quotes");
        }
    }
}
