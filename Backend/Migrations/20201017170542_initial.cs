using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Homes",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    adress = table.Column<string>(nullable: false),
                    floor = table.Column<int>(nullable: false),
                    type = table.Column<string>(nullable: false),
                    roomNumber = table.Column<int>(nullable: false),
                    totalArea = table.Column<int>(nullable: false),
                    roomArea = table.Column<int>(nullable: false),
                    livingRoomArea = table.Column<int>(nullable: false),
                    diningRoomArea = table.Column<int>(nullable: false),
                    rentPrice = table.Column<int>(nullable: false),
                    flatRateCharges = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Homes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Leases",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    leaseStartDate = table.Column<string>(nullable: false),
                    leaseEndDate = table.Column<string>(nullable: false),
                    leaseTerm = table.Column<string>(nullable: false),
                    adress = table.Column<string>(nullable: false),
                    type = table.Column<string>(nullable: false),
                    floor = table.Column<string>(nullable: false),
                    baseIndex = table.Column<string>(nullable: false),
                    charges = table.Column<string>(nullable: false),
                    garanteeAmount = table.Column<string>(nullable: false),
                    signatureDate = table.Column<string>(nullable: false),
                    waterMeterIndexInput = table.Column<string>(nullable: false),
                    gazMeterIndexInput = table.Column<string>(nullable: false),
                    electricityMeterIndexInput = table.Column<string>(nullable: false),
                    depositPaid = table.Column<string>(nullable: false),
                    depositPaymentDate = table.Column<string>(nullable: false),
                    firstMonthPaid = table.Column<string>(nullable: false),
                    entryDate = table.Column<string>(nullable: false),
                    releaseDate = table.Column<string>(nullable: false),
                    waterMeterIndexOutput = table.Column<string>(nullable: false),
                    gazMeterIndexOutput = table.Column<string>(nullable: false),
                    electricityMeterIndexOutput = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leases", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Owners",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    civility = table.Column<string>(nullable: false),
                    gender = table.Column<bool>(nullable: false),
                    lastName = table.Column<string>(nullable: false),
                    firstName = table.Column<string>(nullable: false),
                    address = table.Column<string>(nullable: false),
                    zipCode = table.Column<int>(nullable: false),
                    city = table.Column<string>(nullable: false),
                    country = table.Column<string>(nullable: false),
                    birthDate = table.Column<string>(nullable: true),
                    age = table.Column<int>(nullable: false),
                    placeOfBirth = table.Column<string>(nullable: true),
                    nationalRegister = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: false),
                    phoneNumber = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Owners", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Homes");

            migrationBuilder.DropTable(
                name: "Leases");

            migrationBuilder.DropTable(
                name: "Owners");
        }
    }
}
