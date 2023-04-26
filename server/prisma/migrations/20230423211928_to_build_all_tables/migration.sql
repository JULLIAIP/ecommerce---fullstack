/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "dealType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Deal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tradeFor" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "locationLat" REAL,
    "userId" TEXT NOT NULL,
    "dealTypeId" TEXT NOT NULL,
    CONSTRAINT "Deal_dealTypeId_fkey" FOREIGN KEY ("dealTypeId") REFERENCES "dealType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deal_locationLat_fkey" FOREIGN KEY ("locationLat") REFERENCES "Location" ("lat") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Deal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Proposals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "offererId" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Proposals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Proposals_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Invite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invitedId" TEXT NOT NULL,
    "proposalId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "proposalsId" TEXT NOT NULL,
    CONSTRAINT "Invite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invite_proposalsId_fkey" FOREIGN KEY ("proposalsId") REFERENCES "Proposals" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Location" (
    "lat" REAL NOT NULL PRIMARY KEY,
    "lng" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Location_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UrgencyType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Urgency" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "limiteDate" DATETIME,
    "dealId" TEXT NOT NULL,
    "urgencyTypeId" TEXT NOT NULL,
    "dealTypeId" TEXT NOT NULL,
    CONSTRAINT "Urgency_urgencyTypeId_fkey" FOREIGN KEY ("urgencyTypeId") REFERENCES "UrgencyType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Urgency_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Urgency_dealTypeId_fkey" FOREIGN KEY ("dealTypeId") REFERENCES "dealType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "src" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    CONSTRAINT "Photos_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "offererId" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "proposalsId" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_proposalsId_fkey" FOREIGN KEY ("proposalsId") REFERENCES "Proposals" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "dealType_name_key" ON "dealType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Proposals_offererId_dealId_key" ON "Proposals"("offererId", "dealId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_userId_key" ON "Location"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UrgencyType_name_key" ON "UrgencyType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Urgency_dealId_key" ON "Urgency"("dealId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");
