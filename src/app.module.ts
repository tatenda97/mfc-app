import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { FarmerModule } from './farmer/farmer.module';
import { FarmModule } from './farm/farm.module';
import { ContractorModule } from './contractor/contractor.module';
import { ContractModule } from './contract/contract.module';
import { FarmEquipmentModule } from './farm-equipment/farm-equipment.module';
import { ContractTermsModule } from './contract-terms/contract-terms.module';
import { ContractFormModule } from './contract-form/contract-form.module';
import { FarmerAssetModule } from './farmer-asset/farmer-asset.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { FarmAssetModule } from './farm-asset/farm-asset.module';
import { FarmerEquipmentModule } from './farmer-equipment/farmer-equipment.module';
import { FarmEquipmentController } from './farm-equipment/farm-equipment.controller';
import configuration from './config/configuration';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'mcf_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    FarmerModule,
    FarmModule,
    ContractorModule,
    ContractModule,
    FarmEquipmentModule,
    ContractTermsModule,
    ContractFormModule,
    FarmerAssetModule,
    ConfigService,
    ConfigModule,
    FarmAssetModule,
    FarmerEquipmentModule,
  ],
  controllers: [AppController, FarmEquipmentController],
  providers: [AppService],
})
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {
  //constructor(private configService: ConfigService) {}
}
