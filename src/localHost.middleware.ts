import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LocalHostMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const clientIp = req.ip || req.connection.remoteAddress;

    if (clientIp !== '127.0.0.1' && clientIp !== '::ffff:127.0.0.1') {
      throw new HttpException('Accès non autorisé', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
