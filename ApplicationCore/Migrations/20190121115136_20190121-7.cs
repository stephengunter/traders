using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationCore.Migrations
{
    public partial class _201901217 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Profiles");

            migrationBuilder.DropColumn(
                name: "LastUpdated",
                table: "Profiles");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "Profiles");

            migrationBuilder.RenameColumn(
                name: "PS",
                table: "UploadFiles",
                newName: "Description");

            migrationBuilder.AddColumn<bool>(
                name: "Removed",
                table: "UploadFiles",
                nullable: false,
                defaultValue: false);

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

            migrationBuilder.CreateTable(
                name: "Bill",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    LastUpdated = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    Removed = table.Column<bool>(nullable: false),
                    Code = table.Column<string>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    DeadLine = table.Column<DateTime>(nullable: false),
                    BankName = table.Column<string>(nullable: true),
                    BankCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bill", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Plan",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    LastUpdated = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    Removed = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Month = table.Column<int>(nullable: false),
                    Money = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plan", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pay",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    LastUpdated = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    Removed = table.Column<bool>(nullable: false),
                    Code = table.Column<string>(nullable: true),
                    BillId = table.Column<int>(nullable: false),
                    Money = table.Column<decimal>(nullable: false),
                    PayWay = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pay", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pay_Bill_BillId",
                        column: x => x.BillId,
                        principalTable: "Bill",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Subscribe",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    LastUpdated = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    Removed = table.Column<bool>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    PlanId = table.Column<int>(nullable: false),
                    BillId = table.Column<int>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: true),
                    EndDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscribe", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Subscribe_Bill_BillId",
                        column: x => x.BillId,
                        principalTable: "Bill",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Subscribe_Plan_PlanId",
                        column: x => x.PlanId,
                        principalTable: "Plan",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Subscribe_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pay_BillId",
                table: "Pay",
                column: "BillId");

            migrationBuilder.CreateIndex(
                name: "IX_Subscribe_BillId",
                table: "Subscribe",
                column: "BillId");

            migrationBuilder.CreateIndex(
                name: "IX_Subscribe_PlanId",
                table: "Subscribe",
                column: "PlanId");

            migrationBuilder.CreateIndex(
                name: "IX_Subscribe_UserId",
                table: "Subscribe",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pay");

            migrationBuilder.DropTable(
                name: "Subscribe");

            migrationBuilder.DropTable(
                name: "Bill");

            migrationBuilder.DropTable(
                name: "Plan");

            migrationBuilder.DropColumn(
                name: "Removed",
                table: "UploadFiles");

            migrationBuilder.DropColumn(
                name: "Order",
                table: "IndicatorSettings");

            migrationBuilder.DropColumn(
                name: "Removed",
                table: "IndicatorSettings");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "UploadFiles",
                newName: "PS");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Profiles",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdated",
                table: "Profiles",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "Profiles",
                nullable: true);
        }
    }
}
