-- CreateTable
CREATE TABLE "Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "credits" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Assignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL
);
