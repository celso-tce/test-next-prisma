import { User, Prisma } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export interface UserProtocol {
  list(): Promise<User[]>;
  create(data: CreateUser): Promise<User>;
}

export class CreateUser implements Prisma.UserCreateInput {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  name: string;
}
