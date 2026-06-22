import { Injectable } from '@nestjs/common';
import { Feature } from '../../../common/features';

@Injectable()
export class LicenseCheckService {
  isValidEELicense(): boolean {
    return true;
  }

  hasFeature(): boolean {
    return true;
  }

  getFeatures(): string[] {
    return Object.values(Feature);
  }

  resolveFeatures(): string[] {
    return Object.values(Feature);
  }

  resolveTier(): string {
    return 'enterprise';
  }
}
