import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { UserDto } from "./dtos/user.dto";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}
    
    @Post('/registerUser')
    async registerUser(@Body() userDto: UserDto): Promise<User> {
        try {
            return this.userService.registerUser(userDto);
            
        } catch (error) {
            throw new HttpException('Error in user register', HttpStatus.BAD_REQUEST)
        }
    }
}