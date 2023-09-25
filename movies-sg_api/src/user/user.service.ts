import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { ConflictException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { UserDto } from "./dtos/user.dto";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import authConfig from "src/auth.config";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async registerUser(userDto: UserDto): Promise<User> {
        try {
            const saltOrRounds = 10;
            const passwordHashed = await bcrypt.hash(userDto.password, saltOrRounds);

            const payload = {
                email: userDto.email,
            }

            const token = jwt.sign(payload, authConfig.jwtSecret)
            return await this.userRepository.save({
                ...userDto,
                password: passwordHashed,
                userToken: token,
            })
        } catch (error) {
            if (error.code == '23505') {
                throw new ConflictException('Username or email already in use')
            }
            throw new InternalServerErrorException('Error in user register')
        }
        
    }
}