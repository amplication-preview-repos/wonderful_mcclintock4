/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticsCreateNestedManyWithoutUsersInput } from "./AnalyticsCreateNestedManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { BankAccountCreateNestedManyWithoutUsersInput } from "./BankAccountCreateNestedManyWithoutUsersInput";
import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";
import { MoneyCreateNestedManyWithoutUsersInput } from "./MoneyCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AnalyticsCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AnalyticsCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  analyticsItems?: AnalyticsCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => BankAccountCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BankAccountCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BankAccountCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  bankAccounts?: BankAccountCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => ExpenseCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ExpenseCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ExpenseCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => MoneyCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MoneyCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MoneyCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  monies?: MoneyCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
