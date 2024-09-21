-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'New List'
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");
