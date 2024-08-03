import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MoneyServiceBase } from "./base/money.service.base";

@Injectable()
export class MoneyService extends MoneyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
