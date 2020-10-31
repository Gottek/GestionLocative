﻿// <auto-generated />
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(CommanderContexte))]
    partial class CommanderContexteModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Backend.Models.Home", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("adress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("diningRoomArea")
                        .HasColumnType("int");

                    b.Property<int>("flatRateCharges")
                        .HasColumnType("int");

                    b.Property<int>("floor")
                        .HasColumnType("int");

                    b.Property<int>("livingRoomArea")
                        .HasColumnType("int");

                    b.Property<int>("rentPrice")
                        .HasColumnType("int");

                    b.Property<int>("roomArea")
                        .HasColumnType("int");

                    b.Property<int>("roomNumber")
                        .HasColumnType("int");

                    b.Property<int>("totalArea")
                        .HasColumnType("int");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Homes");
                });

            modelBuilder.Entity("Backend.Models.Lease", b =>
                {
                    b.Property<int>("LeaseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("adress")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("baseIndex")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("charges")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("depositPaid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("depositPaymentDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("electricityMeterIndexInput")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("electricityMeterIndexOutput")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("entryDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firstMonthPaid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("floor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("garanteeAmount")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gazMeterIndexInput")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gazMeterIndexOutput")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("homeId")
                        .HasColumnType("int");

                    b.Property<string>("leaseEndDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("leaseStartDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("leaseTerm")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("personId")
                        .HasColumnType("int");

                    b.Property<string>("releaseDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("rentPrice")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("signatureDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("waterMeterIndexInput")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("waterMeterIndexOutput")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LeaseId");

                    b.ToTable("Leases");
                });

            modelBuilder.Entity("Backend.Models.Owner", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("age")
                        .HasColumnType("int");

                    b.Property<string>("birthDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("city")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("civility")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("country")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nationalRegister")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("placeOfBirth")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("zipCode")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Owners");
                });
#pragma warning restore 612, 618
        }
    }
}
