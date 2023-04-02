import AccountPermission from './permissions/AccountPermission.enum';
import MeterPermission from './permissions/meterPerission.enum';

const Permission = {
  ...AccountPermission,
  ...MeterPermission,
};

type Permission = AccountPermission | MeterPermission;

export default Permission;
