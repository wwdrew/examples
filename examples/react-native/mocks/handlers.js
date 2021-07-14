import { factory, primaryKey } from '@mswjs/data';
import { datatype, name } from 'faker';

export const db = factory({
  user: {
    id: primaryKey(datatype.uuid),
    firstName: name.firstName,
    lastName: name.lastName,
  },
});

for (let i = 0; i < 20; i++) {
  db.user.create();
}

export const handlers = [
  ...db.user.toHandlers('rest', 'http://myapi.test'),
  ...db.user.toHandlers('graphql', 'http://myapi.test/graphql'),
];
