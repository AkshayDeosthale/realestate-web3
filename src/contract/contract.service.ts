import { Injectable } from '@nestjs/common';

import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { AlchemyProvider } from 'src/alchemy.provider';

@Injectable()
export class ContractService {
  constructor(private readonly alchemyProvider: AlchemyProvider) {}

  create(createContractDto: CreateContractDto) {
    return 'This action adds a new contract';
  }

  async findAll() {
    const balance = await this.alchemyProvider
      .getProvider()
      .getBalance('0x34b6454aa490c9aE884039c63A94843Edd73A10D');

    return balance;
  }

  findOne(id: number) {
    return `This action returns a #${id} contract`;
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return `This action updates a #${id} contract`;
  }

  remove(id: number) {
    return `This action removes a #${id} contract`;
  }
}
