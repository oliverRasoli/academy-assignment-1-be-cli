import { EntityManager } from 'typeorm';

import { Profiles } from '../../entity/auth/Profiles';
import { createOrUseSupabaseUser } from '../util/user-utilities';
import { PopulateScriptExecutor } from '../util/types';
import { Dogs } from '../../entity/Items/Dogs';

export const execute: PopulateScriptExecutor = async (manager: EntityManager) => {
  const authUser1 = await createOrUseSupabaseUser('test1@mail.dk', '12345678');
  const authUser2 = await createOrUseSupabaseUser('test2@mail.dk', '12345678');

  const adminProfile = new Profiles();
  adminProfile.username = 'Bob';
  adminProfile.password = 'Bobby';
  adminProfile.id = authUser1.id;
  adminProfile.created_at = authUser1.created_at;

  await manager.save(adminProfile);

  const profile = new Profiles();
  profile.username = 'Bob';
  profile.password = 'Marley';
  profile.id = authUser2.id;
  profile.created_at = authUser2.created_at;

  await manager.save(profile);

  const dog1 = new Dogs();
  dog1.race_name = 'French Bulldog';
  dog1.description = 'Short and stout';
  dog1.uuid = profile;

  await manager.save(dog1);

  const dog2 = new Dogs();
  dog2.race_name = 'Corgi';
  dog2.description = 'Short and long';
  dog2.uuid = profile;

  await manager.save(dog2);

  const dog3 = new Dogs();
  dog3.race_name = 'Borzoi';
  dog3.description = 'Hairy and tall';
  dog3.uuid = adminProfile;

  await manager.save(dog3);
};
