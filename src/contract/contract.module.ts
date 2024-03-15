import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { AlchemyProvider } from 'src/alchemy.provider';

@Module({
  imports: [ConfigModule],
  controllers: [ContractController],
  providers: [ContractService, AlchemyProvider],
})
export class ContractModule {}
