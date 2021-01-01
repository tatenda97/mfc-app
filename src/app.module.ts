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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}