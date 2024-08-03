import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MoneyModuleBase } from "./base/money.module.base";
import { MoneyService } from "./money.service";
import { MoneyController } from "./money.controller";
import { MoneyResolver } from "./money.resolver";

@Module({
  imports: [MoneyModuleBase, forwardRef(() => AuthModule)],
  controllers: [MoneyController],
  providers: [MoneyService, MoneyResolver],
  exports: [MoneyService],
})
export class MoneyModule {}
