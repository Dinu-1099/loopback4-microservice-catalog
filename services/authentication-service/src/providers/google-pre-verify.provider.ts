﻿// Copyright (c) 2023 Sourcefuse Technologies
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {Provider} from '@loopback/context';
import {IAuthUser} from 'loopback4-authentication';
// eslint-disable-next-line @typescript-eslint/naming-convention
import * as GoogleStrategy from 'passport-google-oauth20';
import {GooglePreVerifyFn} from './types';

export class GooglePreVerifyProvider implements Provider<GooglePreVerifyFn> {
  value(): GooglePreVerifyFn {
    return async (
      accessToken: string,
      refreshToken: string,
      profile: GoogleStrategy.Profile,
      user: IAuthUser | null,
    ) => user;
  }
}
