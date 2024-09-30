import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { HelloController } from './hello/hello.controller';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule ],
  controllers: [HelloController],
  providers: [UsersService, PrismaService]
})
export class AppModule {}
