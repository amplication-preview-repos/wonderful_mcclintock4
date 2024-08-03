import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MoneyService } from "./money.service";
import { MoneyControllerBase } from "./base/money.controller.base";

@swagger.ApiTags("monies")
@common.Controller("monies")
export class MoneyController extends MoneyControllerBase {
  constructor(
    protected readonly service: MoneyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
