import { Controller, Get } from '@nestjs/common';
import { SymbolService } from './symbol.service';

@Controller()
export class SymbolController {
  constructor(private readonly symbolService: SymbolService) {}

  @Get('/symbols')
  async getSymbols() {
    const symbols = await this.symbolService.getSymbols();
    return {
      status: 'success',
      message: 'request successful',
      data: symbols,
    };
  }
}
