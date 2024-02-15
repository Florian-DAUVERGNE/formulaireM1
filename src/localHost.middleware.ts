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
    const localHostIP = ['127.0.0.1', '::ffff:127.0.0.1', '::1'];

    if (!localHostIP.includes(req.ip)) {
      throw new HttpException('Accès non autorisé', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
