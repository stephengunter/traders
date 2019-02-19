﻿// <auto-generated />
using System;
using ApplicationCore.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ApplicationCore.Migrations
{
    [DbContext(typeof(DefaultContext))]
    [Migration("20190218111524_coverId")]
    partial class coverId
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ApplicationCore.Models.Bill", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Amount");

                    b.Property<string>("BankCode");

                    b.Property<string>("BankName");

                    b.Property<string>("Code");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<DateTime>("DeadLine");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<int>("Order");

                    b.Property<bool>("Removed");

                    b.Property<string>("UpdatedBy");

                    b.HasKey("Id");

                    b.ToTable("Bills");
                });

            modelBuilder.Entity("ApplicationCore.Models.Day", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Date");

                    b.Property<string>("Text");

                    b.Property<int>("Type");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.ToTable("Days");
                });

            modelBuilder.Entity("ApplicationCore.Models.Indicator", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Begin");

                    b.Property<int>("CoverId");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Description");

                    b.Property<int>("End");

                    b.Property<string>("Entity");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<bool>("Main");

                    b.Property<string>("Name");

                    b.Property<int>("Order");

                    b.Property<string>("Params");

                    b.Property<bool>("Removed");

                    b.Property<int>("Source");

                    b.Property<int>("Type");

                    b.Property<string>("UpdatedBy");

                    b.Property<bool>("WithAvg");

                    b.HasKey("Id");

                    b.ToTable("Indicators");
                });

            modelBuilder.Entity("ApplicationCore.Models.IndicatorSettings", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Arg");

                    b.Property<int>("IndicatorId");

                    b.Property<int>("Order");

                    b.Property<int>("StrategyId");

                    b.HasKey("Id");

                    b.HasIndex("StrategyId");

                    b.ToTable("IndicatorSettings");
                });

            modelBuilder.Entity("ApplicationCore.Models.Key", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Date");

                    b.Property<string>("IP");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.ToTable("Keys");
                });

            modelBuilder.Entity("ApplicationCore.Models.Pay", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BillId");

                    b.Property<string>("Code");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<decimal>("Money");

                    b.Property<int>("Order");

                    b.Property<int>("PayWay");

                    b.Property<bool>("Removed");

                    b.Property<string>("UpdatedBy");

                    b.HasKey("Id");

                    b.HasIndex("BillId");

                    b.ToTable("Pays");
                });

            modelBuilder.Entity("ApplicationCore.Models.Plan", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Description");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<decimal>("Money");

                    b.Property<int>("Month");

                    b.Property<string>("Name");

                    b.Property<int>("Order");

                    b.Property<bool>("Removed");

                    b.Property<string>("UpdatedBy");

                    b.HasKey("Id");

                    b.ToTable("Plans");
                });

            modelBuilder.Entity("ApplicationCore.Models.Profile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DOB");

                    b.Property<string>("Fullname");

                    b.Property<bool>("Gender");

                    b.Property<string>("SID");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique()
                        .HasFilter("[UserId] IS NOT NULL");

                    b.ToTable("Profiles");
                });

            modelBuilder.Entity("ApplicationCore.Models.RefreshToken", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Expires");

                    b.Property<string>("RemoteIpAddress");

                    b.Property<string>("Token");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique()
                        .HasFilter("[UserId] IS NOT NULL");

                    b.ToTable("RefreshTokens");
                });

            modelBuilder.Entity("ApplicationCore.Models.Stock", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Base");

                    b.Property<string>("Code");

                    b.Property<bool>("Ignore");

                    b.Property<string>("Name");

                    b.Property<double>("Price");

                    b.Property<double>("Weight");

                    b.HasKey("Id");

                    b.ToTable("Stocks");
                });

            modelBuilder.Entity("ApplicationCore.Models.Strategy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Default");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("STPL");

                    b.Property<int>("STPW");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Strategies");
                });

            modelBuilder.Entity("ApplicationCore.Models.Subscribe", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BillId");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<DateTime?>("EndDate");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<int>("Order");

                    b.Property<int>("PlanId");

                    b.Property<bool>("Removed");

                    b.Property<DateTime?>("StartDate");

                    b.Property<string>("UpdatedBy");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("BillId");

                    b.HasIndex("PlanId");

                    b.HasIndex("UserId");

                    b.ToTable("Subscribes");
                });

            modelBuilder.Entity("ApplicationCore.Models.UploadFile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Description");

                    b.Property<int>("Height");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<string>("Name");

                    b.Property<int>("Order");

                    b.Property<string>("Path");

                    b.Property<int>("PostId");

                    b.Property<int>("PostType");

                    b.Property<string>("PreviewPath");

                    b.Property<bool>("Removed");

                    b.Property<string>("Title");

                    b.Property<string>("Type");

                    b.Property<string>("UpdatedBy");

                    b.Property<int>("Width");

                    b.HasKey("Id");

                    b.ToTable("UploadFiles");
                });

            modelBuilder.Entity("ApplicationCore.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FacebookId");

                    b.Property<string>("GoogleId");

                    b.Property<DateTime>("LastUpdated");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NickName");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UpdatedBy");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("ApplicationCore.Models.IndicatorSettings", b =>
                {
                    b.HasOne("ApplicationCore.Models.Strategy")
                        .WithMany("IndicatorSettings")
                        .HasForeignKey("StrategyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ApplicationCore.Models.Pay", b =>
                {
                    b.HasOne("ApplicationCore.Models.Bill", "Bill")
                        .WithMany("Pays")
                        .HasForeignKey("BillId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ApplicationCore.Models.Profile", b =>
                {
                    b.HasOne("ApplicationCore.Models.User", "User")
                        .WithOne("Profile")
                        .HasForeignKey("ApplicationCore.Models.Profile", "UserId");
                });

            modelBuilder.Entity("ApplicationCore.Models.RefreshToken", b =>
                {
                    b.HasOne("ApplicationCore.Models.User", "User")
                        .WithOne("RefreshToken")
                        .HasForeignKey("ApplicationCore.Models.RefreshToken", "UserId");
                });

            modelBuilder.Entity("ApplicationCore.Models.Strategy", b =>
                {
                    b.HasOne("ApplicationCore.Models.User")
                        .WithMany("Strategies")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("ApplicationCore.Models.Subscribe", b =>
                {
                    b.HasOne("ApplicationCore.Models.Bill", "Bill")
                        .WithMany("Subscribes")
                        .HasForeignKey("BillId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ApplicationCore.Models.Plan", "Plan")
                        .WithMany("Subscribes")
                        .HasForeignKey("PlanId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ApplicationCore.Models.User", "User")
                        .WithMany("Subscribes")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("ApplicationCore.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("ApplicationCore.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ApplicationCore.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("ApplicationCore.Models.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}