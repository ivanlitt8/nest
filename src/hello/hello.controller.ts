import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
    
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({
            message:'Hello World!'
        });
    }

    @Get('notfound')
    @HttpCode(404)
    notFound() {
        return 'Not Found 404';
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Route Error 500';
    }

    @Get('ticket/:num')
    @HttpCode(500)
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 8;
    }

    @Get('active/:status')
    @UseGuards(AuthGuard)
    @HttpCode(500)
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string, age: number}) {
        console.log(typeof query.name);
        console.log(typeof query.age);
        return `Hello ${query.name}, you are ${query.age} years old`;
    }
}
