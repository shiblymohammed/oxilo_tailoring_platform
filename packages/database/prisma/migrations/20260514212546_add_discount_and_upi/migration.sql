-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "discountAmount" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "discountNote" TEXT;

-- AlterTable
ALTER TABLE "shops" ADD COLUMN     "upiId" TEXT;
