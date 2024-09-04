import { Body, Controller,Get, Post, Req ,Param} from "@nestjs/common";
import { Request } from "express";
import { userDTO } from "./dto";


@Controller('/user')
export class User{

    @Get('/profile')
    getProfile(@Req() req : Request): string {
        return 'This is the user profile';
    }

    @Post('/add')
    addUser(@Body() userDTO : userDTO){
        console.log(userDTO)
    }
    @Get(':id')
    getId(@Param("id") id : number,@Req() req : Request): string {
        return req.params.id;
        

    }
}