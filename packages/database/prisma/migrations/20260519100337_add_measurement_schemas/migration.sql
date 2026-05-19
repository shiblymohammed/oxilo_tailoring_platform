/*
  Warnings:

  - You are about to drop the column `category` on the `measurement_profiles` table. All the data in the column will be lost.
  - Added the required column `garmentTypeId` to the `measurement_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "garment_types" ADD COLUMN     "measurementSchema" JSONB;

-- AlterTable
ALTER TABLE "measurement_profiles" DROP COLUMN "category",
ADD COLUMN     "garmentTypeId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "measurement_profiles_garmentTypeId_idx" ON "measurement_profiles"("garmentTypeId");

-- AddForeignKey
ALTER TABLE "measurement_profiles" ADD CONSTRAINT "measurement_profiles_garmentTypeId_fkey" FOREIGN KEY ("garmentTypeId") REFERENCES "garment_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
