import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { userProvider } from "./providers/user.provider";


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService,...userProvider],
  exports: [UserService]
})

export class UserModule {

}
