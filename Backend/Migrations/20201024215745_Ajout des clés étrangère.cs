using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class Ajoutdesclésétrangère : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Leases",
                table: "Leases");

            migrationBuilder.DropColumn(
                name: "id",
                table: "Leases");

            migrationBuilder.AddColumn<int>(
                name: "LeaseId",
                table: "Leases",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "homeId",
                table: "Leases",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "personId",
                table: "Leases",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Leases",
                table: "Leases",
                column: "LeaseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Leases",
                table: "Leases");

            migrationBuilder.DropColumn(
                name: "LeaseId",
                table: "Leases");

            migrationBuilder.DropColumn(
                name: "homeId",
                table: "Leases");

            migrationBuilder.DropColumn(
                name: "personId",
                table: "Leases");

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "Leases",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Leases",
                table: "Leases",
                column: "id");
        }
    }
}
