// alchemy.provider.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers, providers } from 'ethers';

@Injectable()
export class AlchemyProvider {
  private readonly provider: providers.BaseProvider;

  constructor(private readonly configService: ConfigService) {
    const alchemyApiKey = this.configService.get<string>('ALCHEMY_API_KEY');
    const alchemyWebsocket =
      this.configService.get<string>('ALCHEMY_WEBSOCKET');
    if (!alchemyApiKey || !alchemyWebsocket) {
      throw new Error('Alchemy API key or Websocket is not provided.');
    }

    // this.provider = new providers.AlchemyProvider('sepolia', alchemyApiKey);

    this.provider = new ethers.providers.WebSocketProvider(alchemyWebsocket);
  }

  getProvider(): providers.BaseProvider {
    return this.provider;
  }
}
