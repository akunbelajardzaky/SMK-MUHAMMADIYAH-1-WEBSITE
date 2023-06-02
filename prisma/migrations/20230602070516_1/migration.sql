-- CreateTable
CREATE TABLE "guestbook" (
    "id" BIGSERIAL NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "body" VARCHAR(500) NOT NULL,
    "created_by" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guestbook_pkey" PRIMARY KEY ("id")
);
