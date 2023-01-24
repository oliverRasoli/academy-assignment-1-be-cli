import { EntityManager } from 'typeorm';

import { Profiles } from '../../entity/auth/Profiles';
import { createOrUseSupabaseUser } from '../util/user-utilities';
import { PopulateScriptExecutor } from '../util/types';

export const execute: PopulateScriptExecutor = async (manager: EntityManager) => {
  const authUser1 = await createOrUseSupabaseUser('test1@mail.dk', '12345678');
  const authUser2 = await createOrUseSupabaseUser('test2@mail.dk', '12345678');

  const adminProfile = new Profiles();
  adminProfile.username = 'Bob';
  adminProfile.password = 'Bobby';
  adminProfile.id = authUser1.id;

  await manager.save(adminProfile);

  const profile = new Profiles();
  profile.username = 'Bob';
  profile.password = 'Marley';
  profile.id = authUser2.id;

  await manager.save(profile);
};
